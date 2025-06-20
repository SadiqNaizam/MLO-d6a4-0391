import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Chrome } from 'lucide-react'; // Using Chrome as a stand-in for Google icon

const loginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (values: LoginFormValues) => {
    setIsSubmitting(true);
    console.log('Form submitted:', values);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // On actual submission, you would handle success/error states, redirect, etc.
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('space-y-6', className)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Email address</FormLabel> 
              {/* Label text from image is "Email adress" - using correct spelling */}
              <FormControl>
                <Input type="email" placeholder="Email address" {...field} />
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
              <FormLabel className="sr-only">Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox id="rememberMe" checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <Label htmlFor="rememberMe" className="text-sm font-normal text-muted-foreground">
                  Remember for 30 days
                </Label>
              </FormItem>
            )}
          />
          <a href="#" className="text-sm text-primary hover:underline">
            Forgot password
          </a>
        </div>
        
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Signing up...' : 'Sign up'}
        </Button>

        <Button variant="outline" type="button" className="w-full" disabled={isSubmitting}>
          <Chrome className="mr-2 h-4 w-4" />
          Sign in with Google
        </Button>

        <div className="text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <a href="#" className="text-primary hover:underline">
            Sign up
          </a>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
