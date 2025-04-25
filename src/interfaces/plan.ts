export interface Plan {
  title: string;
  price: string;
  services: string[];
  frequency: string;
  recommended?: boolean;
  contactLink?: string;
}