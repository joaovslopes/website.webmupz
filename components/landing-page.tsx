'use client'

import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Facebook, Twitter, DollarSign, HeadphonesIcon, ShieldCheck, Users } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Logo from '../img/logo.png'
import Princi from '../img/click.png'
import Slide1 from '../img/launcher.png'
import Slide2 from '../img/update.png'
import Slide3 from '../img/dash.png'


export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('PT')

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={120} height={40} />
          </Link>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
              <Link href="#clients" className="text-gray-600 hover:text-gray-900">Clients</Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              <Link href="/store" className="text-gray-600 hover:text-gray-900">Store</Link>
            </nav>
            <Button variant="outline" asChild>
              <Link href="/client-area">Client Area</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-[80px]">
                  {selectedLanguage} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedLanguage('PT')}>PT</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLanguage('EN')}>EN</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2">
            <nav className="flex flex-col space-y-2 px-4">
              <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
              <Link href="#clients" className="text-gray-600 hover:text-gray-900">Clients</Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              <Link href="/store" className="text-gray-600 hover:text-gray-900">Store</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Leve Seu Servidor ao Próximo Nível!</h1>
              <p className="text-xl mb-8">Com nosso Launcher exclusivo, seus jogadores recebem atualizações automáticas e ficam informados em tempo real através da Dashboard de Eventos. Mantenha-os sempre atualizado com oque há de melhor para MU Online!</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg">Começar Agora</Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://wa.me/yourwhatsappnumber">Saiba Mais</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src={Princi}
                alt="Hero Image"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Instalação rápida em minutos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Launcher", description: "Interface editável com HTML e CSS.", image: Slide1 },
              { title: "Dashboard", description: "Notificações em tempo real das suas invasões, eventos e bosses.", image: Slide2 },
              { title: "Update", description: "Facilidade em aplicar patches ilimitados.", image: Slide3 },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:scale-105">
                <Image src={product.image} alt={product.title} width={400} height={200} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 text-center">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Planos e Funcionalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Mensal", description: "Ideal para projetos de curto prazo", price: { BRL: "R$ 24,90", USD: "$4.90" } },
              { name: "Recorrente", description: "Perfeito para uso contínuo", price: { BRL: "R$ 19,90", USD: "$3.90" } },
            ].map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <p className="text-xl font-bold mb-4">{plan.price.BRL} / {plan.price.USD}</p>
                <ul className="space-y-2 mb-6">
                  {["Feature 1", "Feature 2", "Feature 3", "Feature 4"].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Adquirir</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              { question: "Como posso começar a usar a plataforma?", answer: "Basta se registrar em nosso site e seguir as instruções de configuração." },
              { question: "Qual é o prazo de reembolso?", answer: "Oferecemos um prazo de reembolso de 30 dias para todos os nossos planos." },
              { question: "Vocês oferecem suporte técnico?", answer: "Sim, oferecemos suporte técnico 24/7 para todos os nossos clientes." },
            ].map((faq, index) => (
              <details key={index} className="bg-white shadow-md rounded-lg">
                <summary className="cursor-pointer p-6 text-lg font-semibold">{faq.question}</summary>
                <p className="px-6 pb-6">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Principais Funcionalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Custo-benefício", icon: <DollarSign className="w-8 h-8" />, description: "Obtenha o máximo valor pelo seu investimento" },
              { title: "Suporte", icon: <HeadphonesIcon className="w-8 h-8" />, description: "Suporte técnico 24/7 para todas as suas necessidades" },
              { title: "Controle de Qualidade", icon: <ShieldCheck className="w-8 h-8" />, description: "Garantia de qualidade em todos os processos" },
              { title: "Comunidade", icon: <Users className="w-8 h-8" />, description: "Faça parte de uma comunidade ativa de usuários" },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Clientes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Company 1", logo: "/placeholder.svg?height=75&width=150", url: "https://company1.com" },
              { name: "Company 2", logo: "/placeholder.svg?height=75&width=150", url: "https://company2.com" },
              { name: "Company 3", logo: "/placeholder.svg?height=75&width=150", url: "https://company3.com" },
              { name: "Company 4", logo: "/placeholder.svg?height=75&width=150", url: "https://company4.com" },
            ].map((client, index) => (
              <a key={index} href={client.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Image src={client.logo} alt={client.name} width={150} height={75} className="max-w-full h-auto" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Conecte-se conosco</h2>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="outline" asChild>
              <Link href="https://facebook.com/yourpage">
                <Facebook className="mr-2 h-4 w-4" /> Facebook
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://twitter.com/yourhandle">
                <Twitter className="mr-2 h-4 w-4" /> Twitter
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image src="/placeholder.svg?height=40&width=120" alt="Logo" width={120} height={40} />
            </div>
            <nav className="flex space-x-4">
              <Link href="/terms" className="hover:text-gray-300">Termos</Link>
              <Link href="/privacy" className="hover:text-gray-300">Privacidade</Link>
              <Link href="/contact" className="hover:text-gray-300">Contato</Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}