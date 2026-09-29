import { clinic } from '../data/clinic';

export const isClinicOpen = (): boolean => {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const currentHour = now.getHours();

  // Check for saved settings in localStorage
  const savedSettings = localStorage.getItem('clinicSettings');

  if (savedSettings) {
    const settings = JSON.parse(savedSettings);

    // Check if current day is in closed days
    if (settings.closedDays && settings.closedDays.includes(currentDay)) {
      return false;
    }

    // Check if within operating hours
    return currentHour >= settings.openHour && currentHour < settings.closeHour;
  }

  // Default: Check if it's Sunday (day 0)
  if (currentDay === 0) {
    return false; // Closed on Sundays
  }

  return currentHour >= clinic.openingHours.openHour && currentHour < clinic.openingHours.closeHour;
};
