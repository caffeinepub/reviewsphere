import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  function validate() {
    const newErrors: Partial<typeof form> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  }

  return (
    <main>
      <section className="bg-secondary/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2 block">
            Get in Touch
          </span>
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle max-w-xl">
            Have a book recommendation, institutional enquiry, or academic
            partnership proposal? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thank you for reaching out. Our editorial team will respond
                    within 2–3 working days.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="e.g. Ananya Krishnamurthy"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      data-ocid="contact.name.input"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p
                        data-ocid="contact.name.error_state"
                        className="text-xs text-destructive mt-1"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="e.g. ananya@college.edu.in"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      data-ocid="contact.email.input"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p
                        data-ocid="contact.email.error_state"
                        className="text-xs text-destructive mt-1"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Write your message, book suggestion, or partnership enquiry here..."
                      rows={6}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      data-ocid="contact.message.textarea"
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p
                        data-ocid="contact.message.error_state"
                        className="text-xs text-destructive mt-1"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    data-ocid="contact.submit_button"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: MapPin,
                      label: "Address",
                      value:
                        "ReviewSphere Editorial Office\nSG Highway, Ahmedabad\nGujarat 380054, India",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "editorial@reviewsphere.in",
                    },
                    { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                    {
                      icon: Clock,
                      label: "Office Hours",
                      value: "Monday – Friday\n10:00 AM – 6:00 PM IST",
                    },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                          {label}
                        </p>
                        <p className="text-sm text-foreground whitespace-pre-line">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h4 className="font-display font-semibold text-foreground mb-3">
                  For Academic Institutions
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Interested in an institutional licence for your college? Our
                  team offers customised packages for universities and
                  autonomous B-schools across India. Contact us with your
                  institution details for a tailored proposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
