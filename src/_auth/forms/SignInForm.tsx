import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import * as z from "zod";
import AuthLogo from "@/components/Shared/AuthLogo";
import GoogleAuthButton from "@/components/Shared/GoogleAuthButton";
import Hr from "@/components/Shared/Hr";
import { useForm } from "react-hook-form";
import { SigninValidation } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const SignInForm = () => {
  const router = useNavigate()
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isDisbaled = !form.formState.isDirty || !form.formState.isValid;
  const onSubmit = (values: z.infer<typeof SigninValidation>) => {
    console.log(values);
  };

  const handleRedirect = () => {
    router('/home')
  }

  return (
    <div className="w-full h-full max-w-[420px] mx-auto pt-10">
      <AuthLogo />
      <div className="flex flex-col gap-4 px-4">
        <GoogleAuthButton
          title="Sign in"
          desc="Take your prospecting results to the next level with AI"
          buttonText="Continue with Google"
        />
        <Hr />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px]">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Write your professional email here"
                      className="placeholder:text-[13px] placeholder:text-gray-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px]">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="Write your password here"
                      className="placeholder:text-[13px] placeholder:text-gray-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="py-1">
            <Link to="" target="_blank" className=" hover:opacity-70 text-sm text-sky font-medium" >
              Forgot your password ?
            </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-sky hover:bg-sky/80 shadow-sm"
              disabled={isDisbaled}
              onClick={handleRedirect}
            >
              Sign up
            </Button>
          </form>
        </Form>

        <div className="space-y-4">
          <div className="text-sm font-medium cursor-pointer">
            Don't have an account ?
            <Link
              to="/sign-up"
              className="px-1 hover:opacity-70 text-sm text-sky font-bold"
            >
              Sign up
            </Link>
          </div>
          <p className="pb-2 text-xs font-normal leading-none text-lightDark">
            © 2024 Humanlinker, all rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
