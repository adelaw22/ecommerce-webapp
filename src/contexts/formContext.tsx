'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface CheckoutFormData {
  name: string;
  email: string;
  address: string;
  cardNumber: string;
}

interface FormContextType {
  formData: CheckoutFormData;
  setFormData: (data: CheckoutFormData) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    email: '',
    address: '',
    cardNumber: ''
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
