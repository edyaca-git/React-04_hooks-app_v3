export interface Package {
  name: string;
  status: "Unassigned" | "On the way" | "Completed" | "Delayed";
}

export interface Courier {
  name: string;
  maxPackages: number;
  assigned: Package[];
}

export const couriers: Omit<Courier, "assigned">[] = [
  { name: "Euler", maxPackages: 1 },
  { name: "Christian", maxPackages: 2 },
  { name: "Rodrigo", maxPackages: 3 },
  { name: "Alfonso", maxPackages: 4 },
  { name: "Carlos", maxPackages: 5 },
];

export const STATUSES = ["Unassigned", "On the way", "Completed", "Delayed"] as const;

export const packages: Package[] = Array.from({ length: 20 }, (_, i) => ({
  name: `Package ${i + 1}`,
  status: "Unassigned",
}));
