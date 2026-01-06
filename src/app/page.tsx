'use client'

import { motion } from 'framer-motion'
import { Plane, GraduationCap, MapPin, Phone, MessageSquare, Calendar, ArrowRight, CheckCircle2, Clock, Shield, Users, FileText, Globe, ChevronDown, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'

const countries = [
  {
    name: 'Turkey',
    flag: '🇹🇷',
    description: 'Study, visit, and business opportunities with streamlined visa processes',
    visaTypes: ['Student Visa', 'Tourist Visa', 'Business Visa']
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    description: 'World-class education and business opportunities in Europe',
    visaTypes: ['Student Visa', 'Business Visa', 'Tourist Visa']
  },
  {
    name: 'Lithuania',
    flag: '🇱🇹',
    description: 'Fast-track visa processing for students and visitors',
    visaTypes: ['Student Visa', 'Tourist Visa', 'Business Visa']
  },
  {
    name: 'Czech Republic',
    flag: '🇨🇿',
    description: 'Affordable education and growing tourism destination',
    visaTypes: ['Student Visa', 'Tourist Visa', 'Business Visa']
  },
  {
    name: 'Schengen Countries',
    flag: '🇪🇺',
    description: 'Access to 26 European countries with a single visa',
    visaTypes: ['Schengen Tourist Visa', 'Schengen Business Visa', 'Schengen Visit Visa']
  },
  {
    name: 'USA',
    flag: '🇺🇸',
    description: 'World\'s most popular destination for education and tourism',
    visaTypes: ['Student Visa (F1)', 'Tourist Visa (B1/B2)', 'Business Visa']
  },
  {
    name: 'UK',
    flag: '🇬🇧',
    description: 'Prestigious education and historic travel destination',
    visaTypes: ['Student Visa', 'Tourist Visa', 'Business Visa']
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    description: 'Top-tier education and stunning tourism opportunities',
    visaTypes: ['Student Visa', 'Tourist Visa', 'Business Visa']
  }
]

const services = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Student Visa Services',
    description: 'Complete guidance for university admissions and student visa applications'
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: 'Visit / Tourist Visa',
    description: 'Quick processing for tourist and visit visa applications worldwide'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Business Visa',
    description: 'Specialized assistance for business and investor visas'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Family / Spouse Visa',
    description: 'Family reunification and spouse visa support'
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Schengen Visa Services',
    description: 'Expert guidance for Schengen tourist and business visas'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'USA & UK Visas',
    description: 'Specialized services for USA F1 student and UK visa applications'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Australia Visa',
    description: 'Complete support for Australian student and tourist visas'
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Document Attestation',
    description: 'MOFA attestation and educational document verification'
  }
]

const whyChooseUs = [
  {
    icon: <CheckCircle2 className="w-6 h-6 text-accent" />,
    title: 'Expert Guidance',
    description: 'Experienced consultants with in-depth knowledge of visa processes'
  },
  {
    icon: <Shield className="w-6 h-6 text-accent" />,
    title: 'Transparent Process',
    description: 'Clear communication and honest assessment of your case'
  },
  {
    icon: <Clock className="w-6 h-6 text-accent" />,
    title: 'Timely Processing',
    description: 'Efficient handling to meet your deadlines and requirements'
  },
  {
    icon: <Users className="w-6 h-6 text-accent" />,
    title: 'Personalized Support',
    description: 'One-on-one attention tailored to your specific needs'
  }
]

const steps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'Free assessment of your eligibility and best visa options'
  },
  {
    step: '02',
    title: 'Document Preparation',
    description: 'Expert guidance on required documents and application forms'
  },
  {
    step: '03',
    title: 'Application Submission',
    description: 'Professional submission of your visa application'
  },
  {
    step: '04',
    title: 'Visa Approval',
    description: 'Support until you receive your visa and beyond'
  }
]

const faqs = [
  {
    question: 'What documents are required for a student visa?',
    answer: 'Typically, you need admission letter, financial proof, academic documents, passport, passport photos, and health insurance. Requirements vary by country.',
    icon: <FileText className="w-5 h-5" />
  },
  {
    question: 'How long does visa processing take?',
    answer: 'Processing times vary by country: Turkey and Lithuania (2 Months), Germany and Czech Republic (3 Months), USA (4 months), UK (2 Months), Australia (2 Months), Schengen (3 Months).',
    icon: <Clock className="w-5 h-5" />
  },
  {
    question: 'Do you guarantee visa approval?',
    answer: 'We provide expert guidance and ensure your application is complete and accurate, but visa approval is at the discretion of the embassy.',
    icon: <Shield className="w-5 h-5" />
  },
  {
    question: 'What are your consultation fees?',
    answer: 'We offer free initial consultation. Our service fees vary based on the visa type and complexity. Contact us for a detailed quote.',
    icon: <HelpCircle className="w-5 h-5" />
  },
  {
    question: 'Which countries do you provide visa services for?',
    answer: 'We provide services for Turkey, Germany, Lithuania, Czech Republic, Schengen countries (26 European countries), USA, UK, and Australia.',
    icon: <Globe className="w-5 h-5" />
  }
]

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    interestedVisaType: '',
    preferredCountry: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        alert('Your inquiry has been submitted successfully! We will contact you soon.')
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          interestedVisaType: '',
          preferredCountry: '',
          message: ''
        })
      }
    } catch (error) {
      alert('Error submitting form. Please try again.')
    }
  }

  const [consultationDialogOpen, setConsultationDialogOpen] = useState(false)
  const [consultationData, setConsultationData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: ''
  })

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(consultationData)
      })
      if (response.ok) {
        alert('Your consultation has been booked successfully! We will contact you shortly.')
        setConsultationDialogOpen(false)
        setConsultationData({
          fullName: '',
          phoneNumber: '',
          email: '',
          consultationType: '',
          preferredDate: '',
          preferredTime: ''
        })
      }
    } catch (error) {
      alert('Error booking consultation. Please try again.')
    }
  }

  const whatsappNumber = '+923234412387'
  const phoneNumbers = ['+923196457841', '+923234412387']

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Unique Visa Consultancy Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">Unique Visa Consultancy</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Home</a>
              <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Services</a>
              <a href="#why-us" className="text-sm font-medium hover:text-accent transition-colors">Why Us</a>
              <a href="#faq" className="text-sm font-medium hover:text-accent transition-colors">FAQ</a>
              <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-2">
              <a href={`tel:${phoneNumbers[0]}`} className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </Button>
              </a>
              <Dialog open={consultationDialogOpen} onOpenChange={setConsultationDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-accent text-primary hover:bg-accent/90">
                    Book Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Book Your Consultation</DialogTitle>
                    <DialogDescription>
                      Select your preferred date and time for consultation
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleConsultationSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="consultationFullName">Full Name *</Label>
                      <Input
                        id="consultationFullName"
                        value={consultationData.fullName}
                        onChange={(e) => setConsultationData({ ...consultationData, fullName: e.target.value })}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="consultationPhone">Phone Number *</Label>
                      <Input
                        id="consultationPhone"
                        type="tel"
                        value={consultationData.phoneNumber}
                        onChange={(e) => setConsultationData({ ...consultationData, phoneNumber: e.target.value })}
                        required
                        placeholder="+92 3XX XXXXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="consultationEmail">Email Address *</Label>
                      <Input
                        id="consultationEmail"
                        type="email"
                        value={consultationData.email}
                        onChange={(e) => setConsultationData({ ...consultationData, email: e.target.value })}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="consultationType">Consultation Type *</Label>
                      <Select value={consultationData.consultationType} onValueChange={(value) => setConsultationData({ ...consultationData, consultationType: value || '' })} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select consultation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Student Visa">Student Visa Consultation</SelectItem>
                          <SelectItem value="Tourist Visa">Tourist Visa Consultation</SelectItem>
                          <SelectItem value="Business Visa">Business Visa Consultation</SelectItem>
                          <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="consultationDate">Preferred Date *</Label>
                        <Input
                          id="consultationDate"
                          type="date"
                          value={consultationData.preferredDate}
                          onChange={(e) => setConsultationData({ ...consultationData, preferredDate: e.target.value })}
                          required
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="consultationTime">Preferred Time *</Label>
                        <select
                          id="consultationTime"
                          value={consultationData.preferredTime}
                          onChange={(e) => setConsultationData({ ...consultationData, preferredTime: e.target.value })}
                          required
                          className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select time</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">01:00 PM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                          <option value="17:00">05:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-accent text-primary hover:bg-accent/90">
                      Book Now
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMGMtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOCA4IDMuNTgyIDggOC0zLjU4MiA4LTggOHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 bg-accent/20 rounded-full"
            >
              <span className="text-accent font-medium">🌍 Your Gateway to Global Opportunities</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 bg-accent/20 rounded-full"
            >
              <span className="text-accent font-medium">🌍 Your Gateway to Global Opportunities</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expert Visa Consultancy for Your Dreams
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Professional guidance for student, visit, and business visas to Turkey, Germany, Schengen countries, USA, UK, and Australia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-primary hover:bg-accent/90 text-lg px-8 py-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                onClick={() => window.open(`https://wa.me/${whatsappNumber.replace('+', '')}`, '_blank')}
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore visa opportunities in our focus countries with expert guidance
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50">
                  <CardHeader>
                    <div className="text-5xl mb-4">{country.flag}</div>
                    <CardTitle className="text-xl">{country.name}</CardTitle>
                    <CardDescription className="text-sm">{country.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {country.visaTypes.map((type) => (
                        <li key={type} className="text-sm flex items-center text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-accent" />
                          {type}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive visa and immigration services tailored to your needs
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">{service.icon}</div>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Unique Visa Consultancy?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your trusted partner for successful visa applications
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{item.icon}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Simple Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four easy steps to your visa approval
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute top-0 left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <Card className="h-full pt-12 ml-2 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section id="faq" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">
                Quick answers to common questions
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg overflow-hidden hover:border-accent/50 transition-colors">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline [&[data-state=open]:border-b-0">
                    <div className="flex items-center gap-3 text-left flex-1">
                      <div className="flex-shrink-0 text-primary">
                        {faq.icon}
                      </div>
                      <span className="text-lg font-semibold text-left">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-base text-muted-foreground pl-8">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Section with Google Maps */}
      <section id="contact-location" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Office</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Find us at our convenient location in Gujrat, Pakistan
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden shadow-xl border-2 border-border">
                <iframe
                  src="https://maps.google.com/maps?q=32.5632238,74.0795375&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Unique Visa Consultancy Location - Gujrat, Pakistan"
                ></iframe>
              </div>
              {/* Contact Information */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>
                    Get in touch with us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Office Address</h4>
                        <p className="text-muted-foreground">
                          Office Number 5, Gulzar e Madina Plaza<br />
                          Near Bata Shoes, Ramtalai Chowk<br />
                          Gujrat, Pakistan
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center">
                      <Phone className="w-5 h-5 text-accent mr-2" />
                      Phone Numbers
                    </h4>
                    <div className="space-y-2 pl-7">
                      <a href={`tel:${phoneNumbers[0]}`} className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="w-4 h-4 mr-2" />
                        {phoneNumbers[0]}
                      </a>
                      <a href={`tel:${phoneNumbers[1]}`} className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="w-4 h-4 mr-2" />
                        {phoneNumbers[1]}
                      </a>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center">
                      <MessageSquare className="w-5 h-5 text-accent mr-2" />
                      WhatsApp
                    </h4>
                    <a
                      href={`https://wa.me/${whatsappNumber.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      {whatsappNumber}
                    </a>
                  </div>

                  <Button
                    onClick={() => window.open(`https://wa.me/${whatsappNumber.replace('+', '')}`, '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="lg"
                  >
                    <MessageSquare className="mr-2 w-5 h-5" />
                    Chat on WhatsApp
                  </Button>

                  <Button
                    onClick={() => window.location.href = `tel:${phoneNumbers[0]}`}
                    className="w-full bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call Us Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Inquiry Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Inquiry</h2>
              <p className="text-primary-foreground/90 text-lg">
                Fill out the form below and our experts will contact you shortly
              </p>
            </div>
            <Card className="bg-background text-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Get Started Today</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number *</Label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        required
                        placeholder="+92 3XX XXXXXXX"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="visaType">Interested Visa Type *</Label>
                      <select
                        id="visaType"
                        value={formData.interestedVisaType}
                        onChange={(e) => setFormData({ ...formData, interestedVisaType: e.target.value })}
                        required
                        className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select Visa Type</option>
                        <option value="Student Visa">Student Visa</option>
                        <option value="Tourist Visa">Tourist Visa</option>
                        <option value="Business Visa">Business Visa</option>
                        <option value="Family Visa">Family Visa</option>
                        <option value="Schengen Visa">Schengen Visa</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Preferred Country *</Label>
                      <select
                        id="country"
                        value={formData.preferredCountry}
                        onChange={(e) => setFormData({ ...formData, preferredCountry: e.target.value })}
                        required
                        className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select Country</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Germany">Germany</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Schengen Countries">Schengen Countries</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Australia">Australia</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent text-primary hover:bg-accent/90">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo.png"
                  alt="Unique Visa Consultancy Logo"
                  className="h-8 w-auto"
                />
                <span className="font-bold">Unique Visa Consultancy</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Your trusted partner for all visa and immigration needs in Pakistan
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="#why-us" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
                <li><a href="#contact-location" className="hover:text-accent transition-colors">Location</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Quick Inquiry</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-accent transition-colors">Student Visa</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Tourist Visa</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Business Visa</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Document Attestation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{phoneNumbers[0]}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{phoneNumbers[1]}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: {whatsappNumber}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>
                    Office Number 5, Gulzar e Madina Plaza<br />
                    Near Bata Shoes, Ramtalai Chowk, Gujrat, Pakistan
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2024 Unique Visa Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Call Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <a href={`tel:${phoneNumbers[0]}`} className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
          <Phone className="w-4 h-4" />
          <span className="text-sm font-medium">Call Now</span>
        </a>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href={`https://wa.me/${whatsappNumber.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-sm font-medium">WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
