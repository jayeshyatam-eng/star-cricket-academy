/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Target, 
  Zap, 
  Brain, 
  Dumbbell, 
  TrendingUp, 
  Facebook, 
  Instagram, 
  MessageCircle,
  Youtube,
  ChevronRight,
  ShieldCheck,
  X,
  Mail,
  Clock,
  PartyPopper,
  Tag
} from "lucide-react";

const TEAM_PHOTO = "/input_file_0.png";
const LOGO = "/input_file_1.png";
const NET_SESSION = "/input_file_2.png";

const MAPS_BORIVALI = "https://www.google.com/maps/place/Star+cricket+academy/@19.2225277,72.8330476,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b1ad81125599:0xeca85b3148df6577!8m2!3d19.2225227!4d72.837661!16s%2Fg%2F11sgvlj3sc";
const MAPS_KANDIVALI = "https://www.google.com/maps/place/Star+Cricket+Academy+Elite/@19.2129006,72.8243378,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b78ba9617be5:0xcf7f8f5228126e18!8m2!3d19.2128956!4d72.8269127!16s%2Fg%2F11z2kfnvp0";

export default function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const successStories = [
    {
      type: 'image',
      url: 'https://picsum.photos/seed/cricket1/800/600',
      title: 'U-16 District Selection',
      player: 'Aryan Sharma'
    },
    {
      type: 'image',
      url: 'https://picsum.photos/seed/cricket2/800/600',
      title: 'Century in MCA Tournament',
      player: 'Ishaan Verma'
    },
    {
      type: 'image',
      url: 'https://picsum.photos/seed/cricket3/800/600',
      title: 'Best Bowler Award',
      player: 'Kabir Das'
    },
    {
      type: 'video',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video
      title: 'Perfect Cover Drive',
      player: 'Rohan Mehta'
    },
    {
      type: 'image',
      url: 'https://picsum.photos/seed/cricket4/800/600',
      title: 'State Level Selection',
      player: 'Aditya Raj'
    },
    {
      type: 'video',
      url: 'https://www.w3schools.com/html/movie.mp4', // Placeholder video
      title: 'Leg Spin Masterclass',
      player: 'Siddharth Jain'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-royal-blue/90 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="Star Cricket Academy" className="h-12 w-12 object-contain" referrerPolicy="no-referrer" />
            <span className="text-white font-display font-bold text-xl tracking-tight hidden sm:block">STAR CRICKET ACADEMY</span>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => {
                setShowAbout(!showAbout);
                setShowEvents(false);
                setShowSuccess(false);
                setShowContact(false);
                setShowPrivacy(false);
                setShowTerms(false);
              }}
              className="text-white/80 hover:text-gold transition-colors text-sm font-medium"
            >
              About
            </button>
            <button 
              onClick={() => {
                setShowEvents(!showEvents);
                setShowAbout(false);
                setShowSuccess(false);
                setShowContact(false);
                setShowPrivacy(false);
                setShowTerms(false);
              }}
              className="text-white/80 hover:text-gold transition-colors text-sm font-medium flex items-center gap-1"
            >
              <PartyPopper size={14} className="text-gold" /> Events & Offers
            </button>
            <button 
              onClick={() => {
                setShowSuccess(!showSuccess);
                setShowAbout(false);
                setShowContact(false);
                setShowEvents(false);
                setShowPrivacy(false);
                setShowTerms(false);
              }}
              className="text-white/80 hover:text-gold transition-colors text-sm font-medium"
            >
              Success Stories
            </button>
            <button 
              onClick={() => {
                setShowContact(!showContact);
                setShowAbout(false);
                setShowSuccess(false);
                setShowEvents(false);
                setShowPrivacy(false);
                setShowTerms(false);
              }}
              className="text-white/80 hover:text-gold transition-colors text-sm font-medium"
            >
              Contact Us
            </button>
            <a href="#programs" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Programs</a>

            <a href="#highlights" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Highlights</a>
            <a href="tel:7977371794" className="bg-gold text-royal-blue px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2">
              <Phone size={16} /> ENROLL NOW
            </a>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero Section */}
      <header className="lion-watermark min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="lion-overlay" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 px-4 py-1.5 rounded-full mb-6">
              <span className="text-gold text-xs font-bold tracking-widest uppercase">"Train Like a Professional, Perform Like a Champion."</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
              Nurturing <span className="text-gold">Tomorrow’s</span> Champions
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              Professional Cricket Coaching for All Levels – Unleash the Lion Within.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href={MAPS_BORIVALI} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <MapPin className="text-gold shrink-0" size={20} />
                <div>
                  <p className="font-bold text-sm">Borivali Branch</p>
                  <p className="text-xs text-white/60">6RCQ+W34, Kanti Park</p>
                </div>
              </a>
              <a 
                href={MAPS_KANDIVALI} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <MapPin className="text-gold shrink-0" size={20} />
                <div>
                  <p className="font-bold text-sm">Kandivali Branch</p>
                  <p className="text-xs text-white/60">Elite - Charkop Gaon</p>
                </div>
              </a>
            </div>

            <a 
              href="tel:7977371794" 
              className="inline-flex items-center gap-3 bg-gold text-royal-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all group"
            >
              ENROLL TODAY - CALL 7977371794
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full" />
            <img 
              src={NET_SESSION} 
              alt="Cricket Training" 
              className="relative rounded-3xl border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </header>
      
      {/* Section: Privacy Policy (Conditional) */}
      <AnimatePresence>
        {showPrivacy && (
          <motion.section 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white overflow-hidden border-b border-black/5"
          >
            <div className="max-w-4xl mx-auto px-6 py-24 relative">
              <button 
                onClick={() => setShowPrivacy(false)}
                className="absolute top-8 right-8 text-navy/40 hover:text-royal-blue transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 bg-royal-blue/10 text-royal-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  <ShieldCheck size={14} /> Privacy Policy
                </div>
                <h2 className="text-4xl font-display font-bold text-navy mb-4">
                  Star Cricket Academy | <span className="text-royal-blue">Star Cricket Academy Elite</span>
                </h2>
                <p className="text-lg text-navy/60">At Star Cricket Academy, we value your privacy and are committed to protecting your personal information.</p>
              </div>

              <div className="space-y-12">
                <section>
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                    <span className="text-gold">📌</span> Information We Collect
                  </h3>
                  <ul className="space-y-3 text-navy/70">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      Name, phone number, and email address
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      Basic details required for admission and communication
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                    <span className="text-gold">📌</span> How We Use Your Information
                  </h3>
                  <ul className="space-y-3 text-navy/70">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      To manage admissions and training batches
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      To communicate updates, schedules, and offers
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      To improve our services
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                    <span className="text-gold">📌</span> Data Protection
                  </h3>
                  <ul className="space-y-3 text-navy/70">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      Your personal information is kept secure
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      We do not share your data with any third party without your permission
                    </li>
                  </ul>
                </section>

                <div className="p-8 bg-stone-50 rounded-3xl border border-black/5">
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                    <span className="text-gold">📌</span> Consent
                  </h3>
                  <p className="text-navy/70 flex items-center gap-3">
                    <span className="text-gold font-bold">👉</span> By using our website or enrolling in our academy, you agree to our Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Section: Terms of Service (Conditional) */}
      <AnimatePresence>
        {showTerms && (
          <motion.section 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-stone-50 overflow-hidden border-b border-black/5"
          >
            <div className="max-w-4xl mx-auto px-6 py-24 relative">
              <button 
                onClick={() => setShowTerms(false)}
                className="absolute top-8 right-8 text-navy/40 hover:text-royal-blue transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  📜 Terms of Service
                </div>
                <h2 className="text-4xl font-display font-bold text-navy mb-4">
                  Star Cricket Academy | <span className="text-royal-blue">Star Cricket Academy Elite</span>
                </h2>
                <p className="text-lg text-navy/60">By joining our academy, you agree to the following terms and conditions:</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
                  <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                    <span className="text-gold">📌</span> 1. Admission & Fees
                  </h3>
                  <ul className="space-y-3 text-sm text-navy/70">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      Fees must be paid on the same day of joining
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      Admission is confirmed only after full payment
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      Fees once paid are non-refundable and non-transferable
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
                  <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                    <span className="text-gold">📌</span> 2. Training Rules
                  </h3>
                  <ul className="space-y-3 text-sm text-navy/70">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      Regular attendance is expected
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      Proper sports attire is mandatory
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      Students must follow coach instructions
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
                  <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                    <span className="text-gold">📌</span> 3. Discipline Policy
                  </h3>
                  <ul className="space-y-3 text-sm text-navy/70">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      Discipline must be maintained at all times
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      Misconduct may lead to suspension or termination
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
                  <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                    <span className="text-gold">📌</span> 4. Schedule & Management Rights
                  </h3>
                  <ul className="space-y-3 text-sm text-navy/70">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      Training schedules may be adjusted when required
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      Management reserves the right to modify programs or fees
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
                  <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                    <span className="text-gold">📌</span> 5. Liability
                  </h3>
                  <ul className="space-y-3 text-sm text-navy/70">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      The academy is not responsible for any injuries during training
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      Students must follow safety guidelines
                    </li>
                  </ul>
                </div>

                <div className="bg-navy p-8 rounded-3xl shadow-xl border border-white/10 text-white">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="text-gold">📌</span> 6. Agreement
                  </h3>
                  <p className="text-white/70 flex items-center gap-3">
                    <span className="text-gold font-bold">👉</span> By enrolling, you agree to all academy rules and policies
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Section: Events & Offers (Conditional) */}
      <AnimatePresence>
        {showEvents && (
          <motion.section 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-gold/5 overflow-hidden border-b border-gold/20"
          >
            <div className="max-w-7xl mx-auto px-6 py-24 relative">
              <button 
                onClick={() => setShowEvents(false)}
                className="absolute top-8 right-8 text-navy/40 hover:text-royal-blue transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  <PartyPopper size={14} /> Stay Tuned
                </div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-navy mb-4">
                  Events & <span className="text-royal-blue">Offers</span>
                </h2>
              </div>

              <div className="max-w-3xl mx-auto bg-white p-12 rounded-[40px] shadow-xl border border-gold/20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gold" />
                <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-stone-100 rounded-3xl text-4xl">
                  🚧
                </div>
                <h3 className="text-2xl font-bold text-navy mb-6">Upcoming Updates</h3>
                <div className="space-y-4 text-lg text-navy/70 font-medium">
                  <p className="flex items-center justify-center gap-3">
                    <span className="text-gold">👉</span> New events, camps & special offers will be announced soon.
                  </p>
                  <p className="flex items-center justify-center gap-3">
                    <span className="text-gold">👉</span> Stay connected for latest updates from Star Cricket Academy.
                  </p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-stone-100 flex justify-center gap-6">
                  <a href="https://www.instagram.com/starcricketacademy_/" target="_blank" rel="noopener noreferrer" className="text-navy/40 hover:text-[#E4405F] transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://wa.me/917977371794" target="_blank" rel="noopener noreferrer" className="text-navy/40 hover:text-green-500 transition-colors">
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Section 2: About Us (Conditional) */}
      <AnimatePresence>
        {showAbout && (
          <motion.section 
            id="about"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-stone-50 overflow-hidden border-b border-black/5"
          >
            <div className="max-w-7xl mx-auto px-6 py-24 relative">
              <button 
                onClick={() => setShowAbout(false)}
                className="absolute top-8 right-8 text-navy/40 hover:text-royal-blue transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Our Legacy</h4>
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight">
                    Building the Next Generation of <span className="text-royal-blue">Cricketing Lions</span>
                  </h2>
                  <div className="space-y-6 text-navy/70 leading-relaxed">
                    <p>
                      Founded with a vision to provide world-class coaching at the grassroots level, Star Cricket Academy has become a beacon for aspiring talent in Mumbai. We believe that cricket is more than just a sport—it's a discipline that builds character, resilience, and leadership.
                    </p>
                    <p>
                      Led by <strong>Head Coach Jayesh Yatam</strong>, our academy focuses on a holistic approach. We combine rigorous technical drills with mental conditioning and match simulation to ensure our players are ready for the high-pressure environment of professional cricket.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 mt-12">
                    <div>
                      <p className="text-3xl font-bold text-royal-blue mb-1">500+</p>
                      <p className="text-xs font-bold uppercase tracking-wider text-navy/40">Students Trained</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <div className="aspect-square bg-royal-blue rounded-3xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/80 to-transparent z-10" />
                    <img 
                      src={TEAM_PHOTO} 
                      alt="Academy Spirit" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-8 left-8 z-20">
                      <p className="text-white font-display text-2xl font-bold italic">"Excellence is not a skill, it's an attitude."</p>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-royal-blue/5 rounded-full blur-3xl" />
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Section: Success Stories (Conditional) */}
      <AnimatePresence>
        {showSuccess && (
          <motion.section 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-navy overflow-hidden border-b border-white/10"
          >
            <div className="max-w-7xl mx-auto px-6 py-24 relative">
              <button 
                onClick={() => setShowSuccess(false)}
                className="absolute top-8 right-8 text-white/40 hover:text-gold transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center mb-16">
                <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Success Stories</h4>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                  Our <span className="text-gold">Rising Stars</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                  Witness the journey of our players who have transformed their passion into professional excellence.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {successStories.map((story, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 group"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      {story.type === 'image' ? (
                        <img 
                          src={story.url} 
                          alt={story.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <video 
                          src={story.url} 
                          className="w-full h-full object-cover"
                          controls
                          muted
                          playsInline
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60" />
                      <div className="absolute bottom-4 left-4">
                        <p className="text-gold font-bold text-sm uppercase tracking-wider">{story.player}</p>
                        <h4 className="text-white font-bold">{story.title}</h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Section: Contact Us (Conditional) */}
      <AnimatePresence>
        {showContact && (
          <motion.section 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-stone-100 overflow-hidden border-b border-black/5"
          >
            <div className="max-w-7xl mx-auto px-6 py-24 relative">
              <button 
                onClick={() => setShowContact(false)}
                className="absolute top-8 right-8 text-navy/40 hover:text-royal-blue transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center mb-16">
                <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h4>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-navy mb-4">
                  Contact <span className="text-royal-blue">Us</span>
                </h2>
                <p className="text-navy/60 max-w-2xl mx-auto">
                  Have questions? We're here to help you start your cricketing journey.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Visit Us */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
                  <div className="w-12 h-12 bg-royal-blue/10 rounded-2xl flex items-center justify-center mb-6">
                    <MapPin className="text-royal-blue" size={24} />
                  </div>
                  <h3 className="font-bold text-navy mb-4">Visit Our Academy</h3>
                  <div className="space-y-4 text-sm text-navy/70">
                    <div>
                      <p className="font-bold text-royal-blue">Borivali Branch</p>
                      <p>Star Cricket Academy, Borivali (West)</p>
                    </div>
                    <div>
                      <p className="font-bold text-royal-blue">Kandivali Branch</p>
                      <p>Star Cricket Academy Elite, Kandivali (West)</p>
                    </div>
                  </div>
                </div>

                {/* Call / WhatsApp */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
                  <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <h3 className="font-bold text-navy mb-4">Call / WhatsApp</h3>
                  <div className="space-y-4">
                    <a href="tel:7977371794" className="block text-xl font-bold text-navy hover:text-royal-blue transition-colors">
                      +91 7977371794
                    </a>
                    <p className="text-xs text-navy/50 italic">
                      For admissions, batch details & demo session bookings
                    </p>
                    <div className="flex gap-4 pt-2">
                      <a href="https://wa.me/917977371794" target="_blank" rel="noopener noreferrer" className="text-royal-blue hover:text-navy transition-colors">
                        <MessageCircle size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Training Timings */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
                  <div className="w-12 h-12 bg-navy/10 rounded-2xl flex items-center justify-center mb-6">
                    <Clock className="text-navy" size={24} />
                  </div>
                  <h3 className="font-bold text-navy mb-4">Training Timings</h3>
                  <div className="space-y-2 text-sm text-navy/70">
                    <p className="flex items-center gap-2 font-bold text-royal-blue">
                      <CheckCircle2 size={14} /> Monday to Sunday
                    </p>
                    <p>Morning & Evening Batches Available</p>
                  </div>
                </div>

                {/* Email & Social */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
                  <div className="w-12 h-12 bg-royal-blue/10 rounded-2xl flex items-center justify-center mb-6">
                    <Mail className="text-royal-blue" size={24} />
                  </div>
                  <h3 className="font-bold text-navy mb-4">Email & Social</h3>
                  <div className="space-y-4">
                    <a href="mailto:starcricketacademy2021@gmail.com" className="block text-sm font-medium text-navy hover:text-royal-blue transition-colors break-all">
                      starcricketacademy2021@gmail.com
                    </a>
                    <div className="flex gap-4 pt-4">
                      <a href="https://www.instagram.com/starcricketacademy_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all">
                        <Instagram size={20} />
                      </a>
                      <a href="https://www.facebook.com/starcricketacademy2021/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all">
                        <Facebook size={20} />
                      </a>
                      <a href="https://www.youtube.com/@starcricketacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all">
                        <Youtube size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Section 3: Coaching Programs & Pricing */}
      <section id="programs" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Our Elite Training Programs</h2>
            <p className="text-navy/60 max-w-2xl mx-auto">From foundational basics to high-performance simulation, we have a batch for every aspiring cricketer.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Elite Personal Coaching",
                price: "₹12,000",
                period: "/ Month",
                schedule: "12 Sessions (3 Days/Week)",
                focus: "1-on-1 High-Intensity focus on technical correction & professional mindset.",
                popular: true
              },
              {
                title: "Group Coaching Batch",
                price: "₹3,000",
                period: "/ Month",
                schedule: "16 Sessions (4 Days/Week)",
                focus: "2-hour sessions building team dynamics, match temperament, and core skills.",
                popular: false
              },
              {
                title: "Weekend Special Batch",
                price: "₹2,500",
                period: "/ Month",
                schedule: "Sat & Sun (8 Sessions)",
                focus: "Tailored for students; focus on skill retention and tactical gameplay.",
                popular: false
              }
            ].map((program, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-3xl border ${program.popular ? 'border-royal-blue bg-royal-blue text-white shadow-xl' : 'border-black/5 bg-stone-50'}`}
              >
                {program.popular && <span className="bg-gold text-royal-blue text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Most Popular</span>}
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">{program.price}</span>
                  <span className={program.popular ? 'text-white/60' : 'text-navy/40'}>{program.period}</span>
                </div>
                <div className={`flex items-center gap-2 text-sm mb-6 ${program.popular ? 'text-white/80' : 'text-navy/60'}`}>
                  <CheckCircle2 size={16} className="text-gold" />
                  {program.schedule}
                </div>
                <p className={`text-sm leading-relaxed ${program.popular ? 'text-white/70' : 'text-navy/70'}`}>
                  {program.focus}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Add-on Services */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Performance Booster: Roboarm */}
            <div className="bg-navy rounded-3xl p-8 text-white flex flex-col justify-between gap-6 border border-white/10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-gold fill-gold" />
                  <h3 className="text-2xl font-bold">Performance Booster: Advanced Roboarm Training</h3>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  The Edge: Test your reflexes against speeds up to 140kmph. Used by international pros, our Roboarm simulation helps batsmen master pace and bounce in a controlled environment.
                </p>
                <div className="bg-white/10 px-4 py-2 rounded-xl inline-block">
                  <span className="text-gold font-bold text-xl">₹1,000</span>
                  <span className="text-white/40 text-sm ml-1">/ Hour</span>
                </div>
              </div>
              <a 
                href="https://wa.me/917977371794?text=Hi, I would like to book an Advanced Roboarm Training session." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-royal-blue px-8 py-4 rounded-xl font-bold hover:bg-gold transition-colors text-center"
              >
                Book Roboarm Session
              </a>
            </div>

            {/* Personal Coaching: Single Session */}
            <div className="bg-royal-blue rounded-3xl p-8 text-white flex flex-col justify-between gap-6 border border-white/10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-gold fill-gold" />
                  <h3 className="text-2xl font-bold">Personal Coaching: Single Session</h3>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  One-on-one professional coaching to refine your technique and strategy. Perfect for players looking for immediate feedback and technical correction.
                </p>
                <div className="bg-white/10 px-4 py-2 rounded-xl inline-block">
                  <span className="text-gold font-bold text-xl">₹1,500</span>
                  <span className="text-white/40 text-sm ml-1">/ Hour</span>
                </div>
              </div>
              <a 
                href="https://wa.me/917977371794?text=Hi, I would like to book a Single Session Personal Coaching." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-royal-blue px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors text-center"
              >
                Book Personal Session
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Training Highlights */}
      <section id="highlights" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">The Star Academy Edge</h2>
              <p className="text-navy/60 text-lg leading-relaxed">
                Our philosophy combines traditional discipline with modern technology. We don't just teach shots; we teach the game.
              </p>
            </div>
            <div className="relative">
              <img 
                src={TEAM_PHOTO} 
                alt="Star Cricket Academy Team" 
                className="rounded-3xl shadow-2xl border-4 border-white"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-royal-blue p-6 rounded-2xl shadow-xl hidden sm:block">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-xs font-bold uppercase tracking-wider">Dedication</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="text-gold" />,
                title: "Advanced Batting Clinics",
                desc: "Master footwork and balance with our indoor technical drills and outdoor power-hitting sessions."
              },
              {
                icon: <Zap className="text-gold" />,
                title: "Elite Bowling Programs",
                desc: "Precision training for Line & Length. We specialize in teaching Swing, Seam, and the variations of Spin."
              },
              {
                icon: <ShieldCheck className="text-gold" />,
                title: "Dynamic Fielding & Agility",
                desc: "Modern cricket is won in the field. Our high-pressure reflex and catching drills turn players into 'Lions'."
              },
              {
                icon: <Brain className="text-gold" />,
                title: "Match Intelligence",
                desc: "Regular match simulations and mental conditioning sessions to master match temperament."
              },
              {
                icon: <Dumbbell className="text-gold" />,
                title: "Fitness & Conditioning",
                desc: "Specific strength and endurance programs designed to keep young athletes injury-free and explosive."
              },
              {
                icon: <TrendingUp className="text-gold" />,
                title: "Progress Monitoring",
                desc: "Every student receives individual attention with regular feedback loops to ensure no talent goes unnoticed."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-black/5 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-royal-blue/5 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Footer */}
      <footer className="bg-navy text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <img src={LOGO} alt="Star Cricket Academy" className="h-20 w-20 object-contain mb-8" referrerPolicy="no-referrer" />
              <h3 className="text-2xl font-display font-bold mb-6">Admissions Open Now – Limited Seats Available!</h3>
              <p className="text-white/60 leading-relaxed mb-8 max-w-md">
                At Star Cricket Academy, we believe in the power of individual attention. Whether you are training in indoor nets or on the open field, training is personally conducted by Head Coach Jayesh Yatam, ensuring focused technical development for every player.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/Starcricketacademy21/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-royal-blue transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/starcricketacademy2021/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-royal-blue transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/917977371794" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-royal-blue transition-colors">
                  <MessageCircle size={20} />
                </a>
                <a href="https://www.youtube.com/@starcricketacademyelite" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-royal-blue transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gold uppercase tracking-widest text-xs mb-8">Contact Details</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Phone className="text-gold shrink-0" size={20} />
                  <div>
                    <p className="text-xs text-white/40 uppercase font-bold mb-1">Phone</p>
                    <a href="tel:7977371794" className="text-lg font-bold hover:text-gold transition-colors">+91 79773 71794</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="text-gold shrink-0" size={20} />
                  <div>
                    <p className="text-xs text-white/40 uppercase font-bold mb-1">Borivali Branch</p>
                    <a href={MAPS_BORIVALI} target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-gold transition-colors">
                      6RCQ+W34, Kanti Park, Borivali Branch, Mumbai, Maharashtra 400092
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="text-gold shrink-0" size={20} />
                  <div>
                    <p className="text-xs text-white/40 uppercase font-bold mb-1">Kandivali Branch</p>
                    <a href={MAPS_KANDIVALI} target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-gold transition-colors">
                      3, RSC Rd Number 17, near Sahyadri Nagar, Sector 1, Charkop Gaon, Kandivali Branch, Mumbai, Maharashtra 400067
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li>
                  <button 
                    onClick={() => {
                      setShowAbout(false);
                      setShowEvents(false);
                      setShowSuccess(false);
                      setShowContact(false);
                      setShowPrivacy(false);
                      setShowTerms(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setShowAbout(true);
                      setShowEvents(false);
                      setShowSuccess(false);
                      setShowContact(false);
                      setShowPrivacy(false);
                      setShowTerms(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors"
                  >
                    About Academy
                  </button>
                </li>
                <li><a href="#programs" className="hover:text-white transition-colors">Coaching Programs</a></li>
                <li><a href="#highlights" className="hover:text-white transition-colors">Training Highlights</a></li>
                <li>
                  <button 
                    onClick={() => {
                      setShowSuccess(true);
                      setShowAbout(false);
                      setShowEvents(false);
                      setShowContact(false);
                      setShowPrivacy(false);
                      setShowTerms(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Success Stories
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setShowEvents(true);
                      setShowAbout(false);
                      setShowSuccess(false);
                      setShowContact(false);
                      setShowPrivacy(false);
                      setShowTerms(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Events & Offers
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setShowContact(true);
                      setShowAbout(false);
                      setShowSuccess(false);
                      setShowEvents(false);
                      setShowPrivacy(false);
                      setShowTerms(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-white/40 font-medium">
            <p>© 2026 Star Cricket Academy | Star Cricket Academy Elite. All Rights Reserved.</p>
            <div className="flex gap-8">
              <button 
                onClick={() => {
                  setShowPrivacy(!showPrivacy);
                  setShowTerms(false);
                  setShowAbout(false);
                  setShowSuccess(false);
                  setShowContact(false);
                  setShowEvents(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => {
                  setShowTerms(!showTerms);
                  setShowPrivacy(false);
                  setShowAbout(false);
                  setShowSuccess(false);
                  setShowContact(false);
                  setShowEvents(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
