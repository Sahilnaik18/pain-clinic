import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import { Download, Copy, ArrowLeft } from 'lucide-react';
import { clinic } from '../data/clinic';
import { Link } from 'react-router-dom';

export default function QRGenerator() {
  const [copied, setCopied] = useState(false);

  // Update this with your actual domain
  const qrUrl = window.location.origin + '/pain-clinic';

  const handleDownload = () => {
    const svg = document.getElementById('qr-code');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);

      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'pain-clinic-qr.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/pain-clinic"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-navy mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Card</span>
          </Link>

          <h1 className="text-3xl font-bold text-navy mb-2">QR Code Generator</h1>
          <p className="text-slate-600">Generate and download QR code for {clinic.name}</p>
        </div>

        {/* QR Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          {/* QR Code Display */}
          <div className="flex justify-center mb-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-4 border-slate-100">
              <QRCodeSVG
                id="qr-code"
                value={qrUrl}
                size={256}
                level="H"
                includeMargin={true}
              />
            </div>
          </div>

          {/* URL Display */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              QR Code URL
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={qrUrl}
                readOnly
                className="flex-1 px-4 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-700 font-mono"
              />
              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-navy text-white rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="w-full py-3 bg-gradient-to-r from-teal to-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download QR Code (PNG)
          </button>

          {/* Instructions */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-navy mb-2 text-sm">Instructions:</h3>
            <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
              <li>Download the QR code as PNG</li>
              <li>Print it on posters, brochures, or business cards</li>
              <li>Patients can scan it to view your digital clinic card</li>
              <li>Update the URL in the code if deploying to a custom domain</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
