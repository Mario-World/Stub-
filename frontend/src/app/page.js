
'use client'
import { OktoProvider, BuildType } from 'okto-sdk-react';
import LoginPage from "../../components/loginPage";


const OKTO_CLIENT_API_KEY = "1d94c9e5-410f-4f89-b19a-33d60acb6bb3";
export default function Home() {
  return (
    <>
      <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
        <LoginPage />
      </OktoProvider>
    </>)
}
