import { useState, useEffect } from 'react';
import { Save, ArrowLeft, Clock, Calendar, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminSettings() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Set your password here - change this to your desired password
  const ADMIN_PASSWORD = 'pain@clinic2024'; // ⚠️ CHANGE THIS PASSWORD!

  const [openTime, setOpenTime] = useState('10:00 AM');
  const [closeTime, setCloseTime] = useState('8:00 PM');
  const [openHour, setOpenHour] = useState(10);
  const [closeHour, setCloseHour] = useState(20);
  const [closedDays, setClosedDays] = useState<number[]>([0]);
  const [saved, setSaved] = useState(false);

  const days = [
    { value: 0, label: 'Sunday' },
    { value: 1, label: 'Monday' },
    { value: 2, label: 'Tuesday' },
    { value: 3, label: 'Wednesday' },
    { value: 4, label: 'Thursday' },
    { value: 5, label: 'Friday' },
    { value: 6, label: 'Saturday' }
  ];

  // Check if already authenticated in this session
  useEffect(() => {
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Load saved settings from localStorage
  useEffect(() => {
    if (isAuthenticated) {
      const savedSettings = localStorage.getItem('clinicSettings');
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        setOpenTime(settings.openTime);
        setCloseTime(settings.closeTime);
        setOpenHour(settings.openHour);
        setCloseHour(settings.closeHour);
        setClosedDays(settings.closedDays || [0]);
      }
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleTimeChange = (type: 'open' | 'close', value: string) => {
    if (type === 'open') {
      setOpenTime(value);
      const hour = parseInt(value.split(':')[0]);
      const isPM = value.includes('PM');
      setOpenHour(isPM && hour !== 12 ? hour + 12 : hour === 12 && !isPM ? 0 : hour);
    } else {
      setCloseTime(value);
      const hour = parseInt(value.split(':')[0]);
      const isPM = value.includes('PM');
      setCloseHour(isPM && hour !== 12 ? hour + 12 : hour === 12 && !isPM ? 0 : hour);
    }
  };

  const toggleClosedDay = (day: number) => {
    if (closedDays.includes(day)) {
      setClosedDays(closedDays.filter(d => d !== day));
    } else {
      setClosedDays([...closedDays, day]);
    }
  };

  const handleSave = () => {
    const settings = {
      openTime,
      closeTime,
      openHour,
      closeHour,
      closedDays
    };
    localStorage.setItem('clinicSettings', JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);

    setTimeout(() => {
      window.location.href = '/pain-clinic';
    }, 1500);
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-green-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-slate-800 text-center mb-2">Admin Access</h1>
            <p className="text-slate-600 text-center mb-6">Enter password to access settings</p>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-700 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  autoFocus
                />
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Login
              </button>
            </form>

            <div className="mt-6">
              <Link
                to="/pain-clinic"
                className="text-sm text-slate-600 hover:text-green-700 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Clinic Card
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Settings Screen (only shown after authentication)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-green-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link
            to="/pain-clinic"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-green-700 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Clinic Card</span>
          </Link>

          <h1 className="text-3xl font-bold text-slate-800 mb-2">Clinic Settings</h1>
          <p className="text-slate-600">Update your clinic hours and closed days</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">

          {/* Opening Hours Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-bold text-slate-800">Opening Hours</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Opening Time
                </label>
                <select
                  value={openTime}
                  onChange={(e) => handleTimeChange('open', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-700 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  {Array.from({ length: 24 }, (_, i) => i).map(hour => {
                    const display12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
                    const ampm = hour < 12 ? 'AM' : 'PM';
                    return (
                      <option key={hour} value={`${display12}:00 ${ampm}`}>
                        {display12}:00 {ampm}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Closing Time
                </label>
                <select
                  value={closeTime}
                  onChange={(e) => handleTimeChange('close', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-700 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  {Array.from({ length: 24 }, (_, i) => i).map(hour => {
                    const display12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
                    const ampm = hour < 12 ? 'AM' : 'PM';
                    return (
                      <option key={hour} value={`${display12}:00 ${ampm}`}>
                        {display12}:00 {ampm}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Current Hours:</strong> {openTime} - {closeTime}
              </p>
            </div>
          </div>

          {/* Closed Days Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-bold text-slate-800">Closed Days</h2>
            </div>

            <p className="text-sm text-slate-600 mb-4">
              Select the days when your clinic is closed
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {days.map(day => (
                <button
                  key={day.value}
                  onClick={() => toggleClosedDay(day.value)}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${closedDays.includes(day.value)
                      ? 'bg-red-50 border-red-500 text-red-700 font-semibold'
                      : 'bg-slate-50 border-slate-300 text-slate-700 hover:border-green-400'
                    }`}
                >
                  {day.label}
                  {closedDays.includes(day.value) && (
                    <span className="block text-xs mt-1">Closed</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Settings
          </button>

          {/* Success Message */}
          {saved && (
            <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg text-center">
              <p className="text-green-800 font-semibold">✓ Settings saved successfully!</p>
              <p className="text-sm text-green-700 mt-1">Redirecting to clinic card...</p>
            </div>
          )}

          {/* Help Text */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2 text-sm">How to use:</h3>
            <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
              <li>Select your opening and closing hours from the dropdowns</li>
              <li>Click on days to mark them as closed (they will turn red)</li>
              <li>Click "Save Settings" to apply changes</li>
              <li>Changes take effect immediately on your clinic card</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
