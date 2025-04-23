'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { WEBSITE_NAME, ROUTES } from '@/app/libs/types'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  const navLinks = [
    { href: ROUTES.CATEGORIES, label: 'Categories' },
    { href: ROUTES.RECENT, label: 'Recent' },
    { href: ROUTES.POPULAR, label: 'Popular' },
  ]

  const linkVariant = {
    initial: { y: 0, opacity: 1 },
    hover: { y: -2, scale: 1.05, opacity: 1 },
  }

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-background/80 border-border sticky top-0 z-50 w-full border-b backdrop-blur"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
        >
          <Link
            href="/"
            className="focus:ring-primary flex items-center gap-2 focus:ring-2 focus:outline-none"
          >
            <span className="text-2xl font-bold">{WEBSITE_NAME}</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden items-center gap-6 md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {navLinks.map(({ href, label }) => (
            <motion.div
              key={href}
              variants={linkVariant}
              initial="initial"
              whileHover="hover"
              className="text-sm font-medium"
            >
              <Link
                href={href}
                className={`$ {pathname === href ? 'text-primary' : 'text-foreground'} transition-colors`}
              >
                {label}
              </Link>
            </motion.div>
          ))}
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              size="sm"
              variant="outline"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="focus:ring-primary transition-transform focus:ring-2 focus:outline-none"
            >
              {mounted &&
                (theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />)}
            </Button>
          </motion.div>
          <motion.div whileHover={{ opacity: 0.8 }} whileTap={{ scale: 0.95 }}>
            <Link href={ROUTES.SIGN_IN}>
              <Button
                size="sm"
                variant="secondary"
                className="focus:ring-primary focus:ring-2 focus:outline-none"
              >
                Sign In
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ opacity: 0.8 }} whileTap={{ scale: 0.95 }}>
            <Link href={ROUTES.SIGN_UP}>
              <Button
                size="sm"
                className="focus:ring-primary focus:ring-2 focus:outline-none"
              >
                Sign Up
              </Button>
            </Link>
          </motion.div>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="focus:ring-primary p-2 transition focus:ring-2 focus:outline-none md:hidden"
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-background border-border overflow-hidden border-t md:hidden"
          >
            <nav className="flex flex-col space-y-2 px-4 py-2">
              {navLinks.map(({ href, label }) => (
                <motion.div
                  key={href}
                  variants={linkVariant}
                  initial="initial"
                  whileHover="hover"
                  className="py-2 text-sm font-medium"
                >
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`$ {pathname === href ? 'text-primary' : 'text-foreground'} block transition-colors`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium">Theme</span>
                <motion.div whileTap={{ scale: 0.9 }}>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={toggleTheme}
                    aria-label="Toggle Theme"
                  >
                    {mounted &&
                      (theme === 'dark' ? (
                        <Sun size={16} />
                      ) : (
                        <Moon size={16} />
                      ))}
                  </Button>
                </motion.div>
              </div>
              <motion.div
                whileHover={{ opacity: 0.8 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={ROUTES.SIGN_IN}>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="focus:ring-primary w-full focus:ring-2 focus:outline-none"
                  >
                    Sign In
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ opacity: 0.8 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={ROUTES.SIGN_UP}>
                  <Button
                    size="sm"
                    className="focus:ring-primary w-full focus:ring-2 focus:outline-none"
                  >
                    Sign Up
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
