import React from "react";
import ReactDOM from "react-dom/client";
import{
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Example from "./example";

const queryClient = new QueryClient()

export default function App(){
  return(
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Example/>
    </QueryClientProvider>
  )
}