import Image from "next/image";

// ── Placeholder contacts — replace with real values when client provides them
const PHONE_HREF = "tel:+1";
const FACEBOOK_HREF =
  "https://www.facebook.com/EDUCATEDIGNORANCE?mibextid=wwXIfr&mibextid=wwXIfr";
const EMAIL_HREF = "mailto:info@churchinthecommunity.com";

function PhoneIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41a2 2 0 0 1 1.72-2.18l3.05-.2a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 5.5 5.5l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.06z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-navy">
      <div className="max-w-6xl mx-auto px-6 py-6 md:py-8 flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="h-16 md:h-20 flex-none">
          {/* Uncomment once logo SVG is provided by client */}
          <Image
            src="/images/logo.png"
            alt="Church in the Community"
            height={150}
            width={320}
            className="h-full w-auto object-contain"
          />

          {/* Placeholder that mimics the bordered logo box */}
          {/* <div className="h-full aspect-[3/1] border border-white/30 flex flex-col items-center justify-center px-4 gap-1">
            <span className="font-besley text-white/80 text-base md:text-xl tracking-[0.35em]">
              C&nbsp;†&nbsp;C
            </span>
            <span className="font-inter text-white/50 text-[6px] md:text-[7px] tracking-[0.18em] uppercase">
              Church in the Community
            </span>
          </div> */}
        </div>

        {/* Contact icons */}
        <nav
          aria-label="Contact links"
          className="flex items-center gap-5 md:gap-7 text-white"
        >
          <a
            href={PHONE_HREF}
            aria-label="Call us"
            className="hover:text-white/60 transition-colors duration-200"
          >
            <PhoneIcon />
          </a>
          <a
            href={FACEBOOK_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white/60 transition-colors duration-200"
          >
            <FacebookIcon />
          </a>
          <a
            href={EMAIL_HREF}
            aria-label="Email us"
            className="hover:text-white/60 transition-colors duration-200"
          >
            <MailIcon />
          </a>
        </nav>
      </div>
    </footer>
  );
}
