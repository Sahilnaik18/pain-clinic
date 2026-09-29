import ClinicHeader from '../components/ClinicHeader';
import TherapistCarousel from '../components/TherapistCarousel';
import ActionGrid from '../components/ActionGrid';

export default function PainClinic() {
  return (
    <div className="min-h-screen h-screen flex items-center justify-center overflow-hidden md:p-4 relative" style={{ backgroundColor: '#00875A' }}>
      {/* Background Image Overlay - Desktop only */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 hidden md:block"
        style={{
          backgroundImage: 'url(/images/therapist-1.jpg)',
        }}
      />

      {/* Card Container - Full screen on mobile, card on desktop */}
      <div className="w-full h-full md:max-w-md md:shadow-2xl flex flex-col overflow-hidden md:rounded-3xl relative z-10" style={{ backgroundColor: '#00875A' }}>

        {/* Content - NO SCROLLING */}
        <div className="flex-1 flex flex-col relative h-full overflow-hidden">

          {/* Header with Hero */}
          <ClinicHeader />

          {/* Action Grid */}
          <ActionGrid />

          {/* Therapist Carousel at Bottom */}
          <TherapistCarousel />
        </div>
      </div>
    </div>
  );
}
