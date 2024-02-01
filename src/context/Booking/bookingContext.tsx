// BookingContext.tsx
import React, { createContext, useState, ReactNode } from "react";

export interface Booking {
  title: string;
  description: string;
  time: string;
  count?: number;
}

export interface BookingContextType {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  deleteBooking: (booking: Booking) => void;
}

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingContext = createContext<BookingContextType | null>(null);

const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  // const addBooking = (booking: Booking) => {
  //   const newBooking: Booking = {
  //     title: booking.title,
  //     description: booking.description,
  //     time: booking.time,
  //   };

  //   setBookings((prevBookings) => {
  //     const updatedBookings = [...prevBookings, newBooking];
  //     console.log(updatedBookings); // debug
  //     return updatedBookings;
  //   });
  // };

  const addBooking = (booking: Booking) => {
    setBookings((prevBookings: Booking[]) => {
      const existingBookingIndex: number = prevBookings.findIndex(
        (b) =>
          b.title === booking.title && b.description === booking.description
      );

      // Return a new state instead of modifying the existing one
      if (existingBookingIndex !== -1) {
        // If the booking already exists, increment its count
        return prevBookings.map((b, index) =>
          index !== existingBookingIndex
            ? b
            : { ...b, count: (b.count || 0) + 1 }
        );
      } else {
        // If the booking doesn't exist, add it to the array with a count of 1
        return [...prevBookings, { ...booking, count: 1 }];
      }
    });
  };

  const deleteBooking = (booking: Booking) => {
    setBookings((prevBookings: Booking[]) => {
      const existingBookingIndex: number = prevBookings.findIndex(
        (b) =>
          b.title === booking.title && b.description === booking.description
      );

      // Return a new state instead of modifying the existing one
      if (existingBookingIndex !== -1) {
        const updatedBookings: Booking[] = [...prevBookings];
        if (updatedBookings[existingBookingIndex].count! > 1) {
          return updatedBookings.map((b, index) =>
            index !== existingBookingIndex ? b : { ...b, count: b.count! - 1 }
          );
        } else {
          return updatedBookings.filter(
            (_, index) => index !== existingBookingIndex
          );
        }
      } else {
        // If the booking doesn't exist, return the previous array
        return prevBookings;
      }
    });
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, deleteBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
