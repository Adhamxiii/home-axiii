"use client";

import { tagVariants, titleVariants } from "@/utils/animation";
import { motion } from "framer-motion";
import Badge from "./Badge";

const Company = () => {
  return (
    <div className="bg-primary py-24 dark:bg-tertiary sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="leading-7 text-white">Transaction every 24 hours</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge
                endCountNum={44}
                endCountText=" million"
                containerStyles=""
              />
            </dd>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="leading-7 text-white">Assets Under Running</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge
                endCountNum={119}
                endCountText=" trillion"
                containerStyles=""
              />
            </dd>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="leading-7 text-white">New User Annually</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={45000} endCountText=" +" containerStyles="" />
            </dd>
          </motion.div>
        </dl>
      </div>
    </div>
  );
};

export default Company;
