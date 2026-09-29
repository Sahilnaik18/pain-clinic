import { clinic } from '../data/clinic';

export const isClinicOpen = (): boolean => {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const currentHour = now.getHours();

  // Check if it's Sunday (day 0)
  if (currentDay === 0) {
    return false; // Closed on Sundays
  }

  return currentHour >= clinic.openingHours.openHour && currentHour < clinic.openingHours.closeHour;
};
