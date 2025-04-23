import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '@/app/libs/socials';
import { WEBSITE_NAME } from '@/app/libs/types';  
export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-border">
      <div className="container flex flex-col md:flex-row items-center justify-between py-8 gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold">{WEBSITE_NAME}</span>
          <p className="text-sm text-muted-foreground mt-1">
            {WEBSITE_NAME} is a platform to find the latest news and updates about the world of games.
          </p>
          
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label={social.name}
              >
                <Image 
                  src={social.icon} 
                  alt={social.name} 
                  width={24} 
                  height={24}
                  className="h-6 w-6"
                />
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <div className="flex flex-wrap justify-center md:justify-end gap-6 mb-4">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} {WEBSITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 