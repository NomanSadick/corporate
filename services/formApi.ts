// src/services/formApi.ts
import { ContactFormData } from '@/app/types/form.types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api', // backend URL
  }),
  endpoints: (builder) => ({
    submitContactForm: builder.mutation<void, ContactFormData>({
      query: (data) => ({
        url: '/query',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSubmitContactFormMutation } = formApi;


