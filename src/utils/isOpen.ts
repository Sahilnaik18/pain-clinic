import { clinic } from '../data/clinic';

export const isClinicOpen = (): boolean => {
  const now = new Date();
  const currentHour = now.getHours();

  return currentHour >= clinic.openingHours.openHour && currentHour < clinic.openingHours.closeHour;
};
