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
import { signUpValidation } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const form = useForm<z.infer<typeof signUpValidation>>({
    resolver: zodResolver(signUpValidation),
    mode: "onChange",
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpass: "",
      isagree: false,
    },
  });

  const isDisbaled = !form.formState.isDirty || !form.formState.isValid;

  const onSubmit = (values: z.infer<typeof signUpValidation>) => {
    console.log(values);
  };

  return (
    <div className="w-full h-full max-w-[420px] mx-auto pt-10">
      <AuthLogo />
      <div className="flex flex-col gap-4 px-4">
        <GoogleAuthButton
          title="Sign up"
          desc="Fill the form with your informations to create an account. It’s totally free. No credit card needed."
          buttonText="Sign up with Google"
        />
        <Hr />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px]">First Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Write your first name here"
                      className="placeholder:text-[13px] placeholder:text-gray-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px]">Last Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Write your last name here"
                      className="placeholder:text-[13px] placeholder:text-gray-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px]">
                    Professional email
                  </FormLabel>
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
            <FormField
              control={form.control}
              name="confirmpass"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px]">
                    Confirm password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="Confirm your password here"
                      className="placeholder:text-[13px] placeholder:text-gray-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isagree"
              render={({ field }) => (
                <FormItem className="relative py-2">
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <Checkbox className=""
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <div className="text-xs font-medium cursor-pointer">
                        I agree to the
                        <Link to="" target="_blank" className="px-1 hover:opacity-70 text-xs text-sky font-bold">
                          User terms
                        </Link>
                        and
                        <Link to="" target="_blank" className="px-1 hover:opacity-70 text-xs text-sky font-bold">
                          Privacy Policy
                        </Link>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-sky hover:bg-sky/80 shadow-sm"
              disabled={isDisbaled}
            >
              Sign up
            </Button>
          </form>
        </Form>

        <div className="space-y-4">
          <div className="text-sm font-medium cursor-pointer">
            Already have an account ?
            <Link to="/sign-in" className="px-1 hover:opacity-70 text-sm text-sky font-bold">
              Sign In
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

export default SignUpForm;
