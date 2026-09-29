export interface Therapist {
  name: string;
  qualification: string;
  experience: string;
  specialization: string;
  image: string;
}

export const therapists: Therapist[] = [
  {
    name: "Dr. Arjun Upadhyay",
    qualification: "BPT, MPT",
    experience: "8+ Years Experience",
    specialization: "Orthopaedic Physiotherapy",
    image: "/images/therapist-10.jpg"
  },
  {
    name: "Dr. Riya Kalgutkar",
    qualification: "BPT, MPT",
    experience: "6+ Years Experience",
    specialization: "Sports Rehabilitation",
    image: "/images/therapist-2.jpg"
  },
  {
    name: "Dr. Anusha Manjrekar",
    qualification: "BPT, MPT",
    experience: "7+ Years Experience",
    specialization: "Manual Therapy",
    image: "/images/therapist-3.jpg"
  }
];
