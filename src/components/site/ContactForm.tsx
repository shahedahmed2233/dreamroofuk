import { useState, type FormEvent } from "react";

const SERVICES = [
  "Slate Roofing",
  "Flat Roofs",
  "Roof Repairs",
  "Guttering",
  "Lead Work",
  "Other",
];

type Fields = { name: string; phone: string; email: string; service: string; message: string };

const EMPTY: Fields = { name: "", phone: "", email: "", service: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields) => (v: string) => {
    setValues((p) => ({ ...p, [key]: v }));
    setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const validate = () => {
    const e: Partial<Fields> = {};
    if (values.name.trim().length < 2) e.name = "Please enter your name.";
    if (values.phone.trim().replace(/\D/g, "").length < 7) e.phone = "Please enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) e.email = "Please enter a valid email address.";
    if (!values.service) e.service = "Please select a service.";
    if (values.message.trim().length < 10) e.message = "Please tell us a little more (10+ characters).";
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSent(true);
    setValues(EMPTY);
  };

  const fieldClass =
    "w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Name
          </label>
          <input
            id="name"
            value={values.name}
            onChange={(e) => set("name")(e.target.value)}
            className={fieldClass}
            placeholder="Your full name"
          />
          {errors.name ? <p className="mt-1.5 text-xs text-destructive">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Phone
          </label>
          <input
            id="phone"
            value={values.phone}
            onChange={(e) => set("phone")(e.target.value)}
            className={fieldClass}
            placeholder="07000 000000"
          />
          {errors.phone ? <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p> : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Email
          </label>
          <input
            id="email"
            value={values.email}
            onChange={(e) => set("email")(e.target.value)}
            className={fieldClass}
            placeholder="you@example.co.uk"
          />
          {errors.email ? <p className="mt-1.5 text-xs text-destructive">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Service Required
          </label>
          <select
            id="service"
            value={values.service}
            onChange={(e) => set("service")(e.target.value)}
            className={fieldClass}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service ? <p className="mt-1.5 text-xs text-destructive">{errors.service}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => set("message")(e.target.value)}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us about the roofing work you need."
        />
        {errors.message ? <p className="mt-1.5 text-xs text-destructive">{errors.message}</p> : null}
      </div>

      <button
        type="submit"
        className="w-full bg-accent px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
      >
        Request a Free Quote
      </button>

      {sent ? (
        <p className="text-sm text-foreground">
          Thanks — your details have been checked. Please also email us at{" "}
          <a href="mailto:info@dream-roof.co.uk" className="font-semibold text-accent underline">
            info@dream-roof.co.uk
          </a>{" "}
          so we can respond directly.
        </p>
      ) : null}
    </form>
  );
}
