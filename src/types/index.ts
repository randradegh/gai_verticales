export interface Module {
  id: number;
  title: string;
  duration: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
} 