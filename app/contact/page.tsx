"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import { TbArrowUpRight } from "react-icons/tb";
import Link from "next/link";

function className(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ContactPage = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact Sales
        </h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Please feel free to ask anything
        </p>
      </div>

      <form action="" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="mt-2.5">
            <Input type="name" id="firstname" placeholder="First Name" />
          </div>

          <div className="mt-2.5">
            <Input type="name" id="lastname" placeholder="Last Name" />
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input type="name" id="company" placeholder="Company" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Textarea placeholder="Type Your Message Here..." />
            </div>
          </div>

          <Field as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={className(
                  agreed ? "bg-primary" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  className={className(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out",
                  )}
                  aria-hidden="true"
                />
              </Switch>
            </div>
            <Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{" "}
              <Link href="#" className="font-semibold text-primary">
                privacy&nbsp;policy
              </Link>
              .
            </Label>
          </Field>

          <div className="mt-8">
            <Button
              type="button"
              className="flex w-full items-center rounded-full px-8 py-3 text-white shadow-lg ring-offset-2 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950"
            >
              Let&apos;s Talk <TbArrowUpRight className="ml-2 size-5" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
