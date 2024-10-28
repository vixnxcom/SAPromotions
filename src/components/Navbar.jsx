import { useState } from "react";
import { motion } from "framer-motion";
import { close, logo, menu } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the menu
  const menuVariants = {
    closed: { opacity: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, transition: { duration: 0.3 } },
  };

  // Individual item animation variants with custom delays
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <div className="absolute top-2 left-2 flex flex-row ">
        <img src={logo} alt="Logo" className="w-24" />
      </div>

      <motion.button
        className="absolute top-2 right-4 w-28 text-black mt-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.img
          src={menu}
          alt="Menu"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: [1, 1.5, 0.9, 1] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 7,
          }}
        />
      </motion.button>

      {/* Full-Screen Menu */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-yellow-300 text-white flex flex-col items-center justify-center z-50"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-4 w-28 text-black mt-1"
            onClick={() => setIsOpen(false)}
          >
            <img src={close} alt="Close" />
          </button>

          {/* Menu Items */}
          <motion.ul className="space-y-6 text-black">
            <motion.li
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="text-3xl hover:text-gray-400 cursor-pointer"
            >
              <Link to="/" onClick={() => setIsOpen(false)}>
                How it works
              </Link>
            </motion.li>
            <motion.li
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={0.9}
              className="text-3xl hover:text-gray-400 cursor-pointer"
            >
           
            </motion.li>
            <motion.li
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={0.9}
              className="text-3xl hover:text-gray-400 cursor-pointer"
            >
              <Link to="/payments" onClick={() => setIsOpen(false)}>
                Payments Plans
              </Link>
            </motion.li>
            <motion.li
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={1.2}
              className="text-3xl hover:text-gray-400 cursor-pointer"
            >
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
