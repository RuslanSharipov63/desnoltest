"use client";
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import CustomCheckbox from "@/customcomponent/CustomCheckbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomAlert from '@/customcomponent/CustomAlert';

const datalogIn = {
  login: 'gavrilov',
  password: '111aaa',
}

const formSchema = z.object({
  login: z.string().min(2, {
    message: "минимум 3 символа",
  }),
  password: z
    .string()
    .min(6, {
      message: "пароль из 6 символов",
    })
    .max(6, {
      message: "пароль из 6 символов",
    }),
});

const Login = () => {

  const [alertSt, setAlertSt] = useState<boolean>(false);
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setAlertSt(false)
    if (values.login === datalogIn.login && values.password === datalogIn.password) {
      router.push('/listrequests');
      return;
    }
    else {
      setAlertSt(true)
      return;
    }

  }

  return (
    <> 
    {alertSt && <CustomAlert />}
    <div className="flex justify-center items-center mt-[50px]">
     
      <div className="flex flex-col justify-center items-center p-4">
        <h3 className="scroll-m-20 mb-8 text-2xl font-bold tracking-tight">
          Вход в сервис
        </h3>
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="login"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="логин" {...field} className="w-64 sm:w-96 border-2  border-rose-600" />
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
                  <FormControl>
                    <Input type="password" placeholder="пароль" {...field} className="w-64 sm:w-96 border-2  border-rose-600" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CustomCheckbox text={"запомнить меня"} />
            <div className="flex justify-center items-center">
              <Button type="submit" className="rounded-lg">войти</Button>
            </div>
          </form>
        </Form>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          <Link href="#" className="text-blue-600 font-bold">Забыли пароль?</Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
