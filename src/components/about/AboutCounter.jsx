import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";

const AboutCounter = () => {
  useCountUp({ ref: "fullstackExpCount", end: 6, duration: 2 });
  useCountUp({ ref: "softwareExpCount", end: 7, duration: 2 });
  useCountUp({ ref: "techStackCount", end: 15, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title="DevOps experience"
          counter="1.5"
          measurement="Years"
        />

        <CounterItem
          title="Full Stack Development experience"
          counter={<span id="fullstackExpCount" />}
          measurement="Years"
        />

        <CounterItem
          title="Software Development experience"
          counter={<span id="softwareExpCount" />}
          measurement="Years +"
        />

        <CounterItem
          title="Technology expertise"
          counter={<span id="techStackCount" />}
          measurement="+"
        />
      </div>
    </div>
  );
};

export default AboutCounter;
