import { CiShop } from "react-icons/ci";
import { FaConnectdevelop, FaPager, FaPiedPiper } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosSchool } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";

const size = 35

export const Services = [
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "How does the Smart Provider Matching algorithm work?",
    desc: "It evaluates real-time GPS location, equipment type, driver status, and traffic data to automatically assign the most efficient driver, reducing ETAs and deadhead mileage.",
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Can I integrate WNCH Hub with my existing Motor Clubs?",
    desc: "Yes. Our bi-directional API integrates with Agero, AAA, Geico, and Allstate. Calls drop directly into your queue with all details pre-filled, and status updates sync back automatically.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "How accurate is the real-time GPS fleet tracking?",
    desc: "Accurate to within a few meters, updating every few seconds. It provides live movement on your map and historical breadcrumb trails for route verification and dispute resolution.",
  },
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Is my data secure and compliant with local regulations?",
    desc: "All data is encrypted with AES-256. We use compliant cloud servers with continuous backups and automated failover, and help you stay compliant with local impound and signature regulations.",
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "How does the automated billing and invoicing system function?",
    desc: "When a job is completed, the system auto-calculates costs based on your rates and mileage, generates a digital invoice, and syncs with QuickBooks or Xero. Payments can be collected on-site or via SMS.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Can I customize the driver commission structures?",
    desc: "Yes. We support flat rate, hourly, percentage, or tiered structures. The system auto-tracks earnings as jobs close and generates payroll reports with zero manual calculation.",
  },
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "What happens if a driver loses internet connection on the road?",
    desc: "The app has an intelligent offline mode. Drivers can view jobs, log notes, capture photos, and collect signatures without internet. Everything syncs automatically when connectivity returns.",
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Can customers track their assigned tow truck in real-time?",
    desc: "Yes. When a driver is assigned, the system sends an SMS with a live tracking link. The customer sees the truck approaching on a map with an accurate ETA.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "How do I handle impound lots and storage fees within the system?",
    desc: "Our impound module tracks vehicles from entry to release. It auto-calculates storage fees, generates certified letters, and keeps your auction pipeline compliant.",
  },
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "What kind of analytics and reporting capabilities are included?",
    desc: "Generate reports on revenue, response times, fuel costs, and acceptance rates. Filter by date range and export to CSV or PDF instantly.",
  },
];

export const ServiceItem = [
  {
    title: 'Intuitive Provider Dashboard',
    desc: 'Experience a powerful dashboard design that simplifies job management and provides at-a-glance operational insights.',
    icon : <FaPager className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Real-time Tracking & Updates',
    desc: 'WNCH ensures seamless live tracking of providers and active jobs, promoting a cohesive workflow for your provider team.',
    icon : <ImProfile className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Instant Provider Matching',
    desc: 'Assign towing and roadside assistance jobs with a single tap, catering to the fast-paced needs of emergency services.',
    icon : <IoDiamondOutline className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Extensive Provider Network',
    desc: 'Instantly connect with a large network of verified and reliable towing and recovery professionals in your area.',
    icon : <CiShop className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Automated Billing & Payments',
    desc: 'Tailor WNCH to match your specific financial workflows with seamless, automated invoicing and payout management.',
    icon : <IoIosSchool className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Actionable Analytics & Insights',
    desc: 'Gain a competitive edge with comprehensive performance tracking and revenue analytics to scale your operations.',
    icon : <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />
  },

];

