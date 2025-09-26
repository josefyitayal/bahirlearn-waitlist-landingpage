"use client"

import { useState } from "react";
import { Mail, Loader2, Check } from "lucide-react";
import { Button } from "./ui/button";
import { submitEmail } from "@/app/waitlist/action";

export function WaitlistInline({
    placeholder = "Enter your email",
    buttonText = "Join waitlist",
    className = "",
}) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState(null);

    const valid = /^\S+@\S+\.\S+$/.test(email);

    async function handleSubmit(e) {
        // 1. Prevent the default form submission behavior
        e.preventDefault();

        console.log("button clicked");

        // 2. Pass the actual email state, not just the boolean `valid`
        if (!valid) {
            setMessage("Please enter a valid email.");
            setStatus("error");
            return;
        }

        setStatus("loading");
        setMessage(null);

        try {
            // FIX: Pass the email state here
            const { success } = await submitEmail(email);

            if (success) {
                console.log("success");
                setStatus("success");
                setMessage("You're on the list. We'll be in touch soon!");
                setEmail("");
            } else {
                console.log("there is error in waitlist inline handlesubmit function");
                // Handle non-successful response from submitEmail
                setStatus("error");
                setMessage("An issue occurred. Please try again.");
            }
        } catch (err) {
            setStatus("error");
            setMessage("Something went wrong. Please try again.");
            console.error(err);
        }
    }

    // Helper function to handle input changes
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        // Clear message/status when user starts typing again
        if (status !== 'idle') {
            setStatus('idle');
            setMessage(null);
        }
    };

    return (
        <div className={className}>
            <form
                onSubmit={handleSubmit} // Form submission logic on the form
                className="group relative max-w-xl"
                aria-label="Join waitlist"
            >
                {/* Decorative gradient ring */}
                <div className="group relative">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-60 transition-opacity group-focus-within:opacity-100 dark:opacity-40"
                    />
                    <div className="relative flex items-center gap-2 rounded-2xl border p-2 pl-3 shadow-lg backdrop-blur-md">
                        <Mail className="h-5 w-5 text-zinc-400 dark:text-zinc-500" aria-hidden="true" />
                        <input
                            type="email"
                            placeholder={placeholder} // Use prop for placeholder
                            // FIX: Bind input to state for a controlled component
                            value={email}
                            onChange={handleEmailChange}
                            className="flex-1 bg-transparent outline-none px-1 py-2"
                            required // Added HTML required for basic validation
                            aria-label="Email address"
                            disabled={status === "loading"}
                        />
                        <Button
                            className="bg-brand-default"
                            type="submit" // Set button type to submit
                            disabled={status === "loading" || status === "success"}
                        >
                            {status === "loading" ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : status === "success" ? (
                                <Check className="h-5 w-5" />
                            ) : (
                                buttonText // Use prop for button text
                            )}
                        </Button>
                    </div>
                </div>

                {/* Helper text OUTSIDE the gradient */}
                {message && (
                    <p className={`mt-2 text-sm ${status === "error" ? "text-red-500" : "text-green-700"}`}>
                        {message}
                    </p>
                )}
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    No spam. Unsubscribe anytime.
                </p>
            </form>
        </div>
    );
}
