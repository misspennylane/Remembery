export interface User {
  uid: string;
  email: string;
  displayName: string;
  createdAt: Date;
}

export interface Friend {
  id: string;
  userId: string;
  name: string;
  birthday: Date;
  email?: string;
  phone?: string;
  favoriteFlowers?: string;
  favoriteColor?: string;
  hobbies?: string[];
  favoriteFood?: string;
  allergies?: string[];
  clothingSize?: string;
  shoeSize?: string;
  interests?: string[];
  notes?: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BirthdayReminder {
  friendId: string;
  friendName: string;
  birthday: Date;
  daysUntil: number;
}