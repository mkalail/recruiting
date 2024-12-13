// Supabase database types
export interface Profile {
  id: string;
  created_at: string;
  email: string;
  full_name: string;
  specialty: string;
  years_experience: string;
  skill_level: string;
  phone?: string;
  linkedin?: string;
  certifications?: string[];
}

export interface Candidate extends Profile {
  role: string;
  skills: string[];
  image_url: string;
  location: string;
}