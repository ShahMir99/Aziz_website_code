import { Navigate, Route, Routes }  from "react-router-dom";

import AuthLayout  from "@/_auth/AuthLayout";
import SignInForm  from "@/_auth/forms/SignInForm";
import SignUpForm  from "@/_auth/forms/SignUpForm";
import RootLayout  from "@/_root/RootLayout";
import HomePage    from "@/_root/Pages/HomePage";
import AnalyzedContacts from "@/_root/Pages/AnalyzedContacts";

import "./App.css";

const App = () => {

  return (
    <main className="h-full">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/analyzed-contacts" element={<AnalyzedContacts />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
};

export default App;
