<script lang="ts">
import { defineComponent } from 'vue'

import BaseSection from '@/components/base/Section.vue'
import BaseButton from '@/components/base/Button.vue'
import LandingCryptoStatistic from '@/components/landing/CryptoStatistic.vue'
import LandingBuyTradeImage from '@/components/landing/BuyTradeImage.vue'
import LandingExchange from '@/components/landing/Exchange.vue'
import LandingPartnerImage from '@/components/landing/PartnerImage.vue'
import LandingListItem from '@/components/landing/ListItem.vue'
import LandingTradingToolImage from '@/components/landing/TradingToolImage.vue'
import LandingStep from '@/components/landing/Step.vue'
import BaseAccordion from '@/components/base/Accordion.vue'
import BaseNavbar from '@/components/base/Navbar.vue'
import ellipse1 from '@/assets/img/pattern/ellipse-1.png'
import ellipse2 from '@/assets/img/pattern/ellipse-2.png'
import ellipse3 from '@/assets/img/pattern/ellipse-3.png'
import star from '@/assets/img/pattern/star.png'

import industryLeadingSecurity from '@/assets/img/industry-leading-security.webp'
import gettingStartedArrow from '@/assets/img/getting-started/arrow.png'
import faqImage from '@/assets/img/faq.webp'

import logoClever from '@/assets/img/partner/clever.png'
import logoDiamond from '@/assets/img/partner/diamon-cutts.png'
import logoSwiss from '@/assets/img/partner/swiss-finance.png'
import logoGambio from '@/assets/img/partner/gambio.png'

import iconUsd from '@/assets/img/country-icon/eng.png'
import iconBtc from '@/assets/img/crypto-icon/bitcoin.png'

export default defineComponent({
  name: 'LandingPageIndex',
  components: {
    BaseNavbar,
    BaseSection,
    BaseButton,
    LandingBuyTradeImage,
    LandingExchange,
    LandingPartnerImage,
    LandingListItem,
    LandingTradingToolImage,
    LandingStep,
    BaseAccordion
  },
  data() {
    return {
      
      ellipse1,
      ellipse2,
      ellipse3,
      star,
      
      industryLeadingSecurity,
      gettingStartedArrow,
      faqImage,

      // PERBAIKAN: Masukkan variabel logo partner yang sudah di-import ke dalam array matang
      partners: [logoClever, logoDiamond, logoSwiss, logoGambio],

      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      
      // PERBAIKAN: Menggunakan variabel hasil import (bukan teks string lagi)
      currencySelected: {
        img: iconUsd,
        name: 'USD',
      },
      currencies: [
        {
          img: iconUsd,
          name: 'USD',
        },
      ],
      cryptoSelected: {
        img: iconBtc,
        name: 'BTC',
      },
      cryptocurrencies: [
        {
          img: iconBtc,
          name: 'BTC',
        },
      ],
      trendings: [
        { id: 1, name: 'Bitcoin', price: 43180.13, logo: 'bitcoin.png', increase: true, data: [40, 35, 60, 75, 60, 75, 50] },
        { id: 2, name: 'Ethereum', price: 3480.65, logo: 'ethereum.png', increase: false, data: [25, 30, 60, 50, 80, 55, 80] },
        { id: 3, name: 'Solana', price: 150.2, logo: 'solana.png', increase: true, data: [40, 45, 40, 80, 50, 60, 35] },
        { id: 4, name: 'Dogecoin', price: 0.1572, logo: 'dogecoin.png', increase: true, data: [35, 70, 60, 80, 50, 60, 40] },
      ],
      topGainers: [
        { id: 1, name: 'PAPPAY', price: 0.00374, logo: 'pappay.png', increase: true, data: [30, 50, 45, 60, 70, 40, 45] },
        { id: 2, name: 'Bitcoin Asia', price: 0.02096, logo: 'bitcoin-asia.png', increase: true, data: [25, 60, 50, 60, 35, 50, 70] },
        { id: 3, name: 'MoonRock', price: 0.004907, logo: 'moonrock.png', increase: true, data: [40, 35, 40, 25, 50, 70, 45] },
        { id: 4, name: 'NinjaFloki', price: 0.000123, logo: 'ninjafloki.png', increase: true, data: [45, 35, 40, 30, 25, 45, 35] },
      ],
      recents: [
        { id: 1, name: 'MetaCraft', price: 0.0608, logo: 'metacraft.png', increase: false, data: [40, 50, 45, 60, 35, 40, 45] },
        { id: 2, name: 'Frog', price: 0.5875, logo: 'frog.png', increase: false, data: [25, 50, 45, 48, 40, 60, 45] },
        { id: 3, name: 'Musk Doge', price: 0.04041, logo: 'musk-doge.png', increase: true, data: [25, 35, 60, 45, 50, 45, 45] },
        { id: 4, name: '2SHARE', price: 1366.24, logo: '2share.png', increase: true, data: [35, 30, 60, 50, 35, 45, 40] },
      ],
      accordions: [
        {
          title: 'Apa itu PST?',
          description: "PST adalah Pelayanan Satistik Terpadu",
        },
        {
          title: 'Fasilitas PST apa saja?',
          description: "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
        {
          title: 'Do I have to buy a whole Bitcoin?',
          description: "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
        {
          title: 'How do I actually buy Bitcoin?',
          description: "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
      ],
      steps: [
        { img: 'sign-up.png', title: 'Sign Up', description: 'Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile' },
        { img: 'fund.png', title: 'Fund', description: 'Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet' },
        { img: 'buy-crypto.png', title: 'Buy Crypto', description: 'Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to your friends anywhere' },
      ],
    }
  },
})
</script>

<template>
  <div class="w-full">
  <div class="min-h-screen flex flex-col font-sans">
    
    <nav class="bg-[#00224D] text-white px-6 py-4 md:px-16 lg:px-24 flex items-center justify-between shadow-md z-10">
      <div class="flex items-center gap-3">
        <img src="/images/PST.png" alt="Logo PST" class="h-10 w-auto object-contain" />
        <div class="leading-tight">
          <h1 class="font-bold text-sm md:text-base tracking-wide">Pelayanan Statistik Terpadu</h1>
          <p class="text-xs text-gray-300">Badan Pusat Statistik Kabupaten Kaimana</p>
        </div>
      </div>

      <div class="flex items-center gap-6 md:gap-8 text-sm md:text-base">
        <a href="#" class="hover:text-blue-300 transition-colors">Layanan</a>
        <a href="#" class="hover:text-blue-300 transition-colors">Kontak</a>
        
        <div class="flex items-center gap-1 cursor-pointer hover:text-blue-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
          </svg>
          <span class="font-medium">ID</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <button class="border border-white hover:bg-white hover:text-[#00224D] text-white font-medium px-5 py-1.5 rounded-full transition-all duration-200">
          Masuk/Daftar
        </button>
      </div>
    </nav>

    <section class="flex-grow bg-[#0A3981] text-white px-6 py-12 md:px-16 lg:px-24 flex items-center justify-center relative overflow-hidden">
      
      <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-6 space-y-6 max-w-2xl">
          <h2 class="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide">
            Pelayanan <br> Statistik <br> Terpadu
          </h2>
          
          <p class="text-gray-200 text-sm md:text-base leading-relaxed font-light">
            Selamat datang di Pelayanan Statistik Terpadu BPS Kabupaten Kaimana. Di website ini Anda dapat menemukan berbagai layanan yang kami sediakan dan informasi kontak yang dapat dihubungi. <br>
            <span class="font-normal">#MelayaniDenganHati 💖</span>
          </p>
          
          <div class="pt-4 space-y-2">
            <div class="flex items-center justify-between max-w-md">
              <label class="font-bold text-sm md:text-base tracking-wide">Apa yang Anda cari hari ini?</label>
              <span class="text-xs text-gray-300 flex items-center gap-1">
                Search by <span class="text-[#FFB200] font-bold">AllStats</span> <span class="text-teal-400 font-medium">search</span>
              </span>
            </div>

            <div class="relative max-w-md text-gray-800">
              <input 
                type="text" 
                placeholder="Masukkan kata kunci pencarian disini..." 
                class="w-full bg-[#EAEAEA] placeholder-gray-500 rounded-lg pl-5 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium text-sm transition-all shadow-md"
              />
              <button class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <BaseButton class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white">
              Buat Aduan
            </BaseButton>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <img 
            src="/images/PST.png" 
            alt="Ilustrasi Pelayanan Data Statistik" 
            class="w-full max-w-md md:max-w-xl h-auto object-contain"
          />
        </div>

      </div>
    </section>

  </div>

    <section id="hero" class="w-full pb-24">
      <BaseSection>
        <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <h1 class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10">
            Pelayanan Statistik Terpadu 
            <span class="text-header-gradient">BPS Kabupaten Kaimana</span>
          </h1>
          <p class="paragraph hidden sm:block">
            Selamat datang di Pelayanan Statistik Terpadu BPS Kabupaten Kaimana
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
            
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full">
            <img src="/images/PST.png" alt="PST Logo" />
          </div>
        </div>
        <img :src="ellipse1" alt="Ellipse-1" class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6" />
        <img :src="ellipse2" alt="Ellipse-2" class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6" />
        <img :src="ellipse3" alt="Ellipse-3" class="hidden sm:block absolute bottom-56 right-24 w-6" />
        <img :src="star" alt="Star" class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8" />
      </BaseSection>
    </section>

    <section class="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12">
      <div class="w-full flex flex-col lg:flex-row items-center justify-center">
        <LandingCryptoStatistic title="🔥 Trending" :datasets="trendings" class="xl:border-r border-gray-200 lg:px-8" />
        <LandingCryptoStatistic title="🚀 Top Gainers" :datasets="topGainers" class="xl:border-r border-gray-200 lg:px-8" />
        <LandingCryptoStatistic title="💎 Recently Added" :datasets="recents" class="lg:px-8" />
      </div>
    </section>

    <section class="w-full my-24">
      <BaseSection>
        <LandingBuyTradeImage class="sm:hidden mb-8" />
        <div class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-4xl font-semibold sm:pr-8 xl:pr-12">
            Buy & trade on the <br class="hidden sm:block" /> original crypto exchange.
          </h2>
          <p class="paragraph">
            Buy now and get 40% extra bonus Minimum pre-sale amount 25 Crypto Coin. We accept BTC crypto-currency
          </p>
          <div class="space-y-6 lg:pr-12">
            <LandingExchange title="Amount" name="amount" type="number" default-value="5.000" :exchange-selected="currencySelected" :exchanges="currencies" />
            <LandingExchange title="Get" name="get" type="number" default-value="0.10901" :exchange-selected="cryptoSelected" :exchanges="cryptocurrencies" />
            <BaseButton class="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">Buy Now</BaseButton>
          </div>
        </div>
        <LandingBuyTradeImage class="hidden sm:block" />
      </BaseSection>
    </section>

    <section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 class="text-2xl text-neutral-800 font-semibold">Trusted Partners Worldwide</h3>
        <p class="paragraph">We're partners with countless major organisations around the globe</p>
        <div class="flex flex-wrap items-center justify-center">
          <LandingPartnerImage v-for="(logo, index) in partners" :key="index" :img="logo" />
        </div>
      </div>
    </section>

    <section class="w-full my-36">
      <BaseSection>
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <img src="/images/BPS.png" alt="BPS Logo" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 class="text-4xl font-semibold">
            Introducing the <span class="text-header-gradient">NEFA</span> Credit Card
          </h2>
          <p class="paragraph">Subject to cardholder and rewards terms which will be available at application.</p>
          <ul class="space-y-4 sm:space-y-2">
            <LandingListItem title="Up to 3% back on purchases" />
            <LandingListItem title="Earn rewards in bitcoin or any crypto on NEFA" />
            <LandingListItem title="No annual fee" />
          </ul>
          <BaseButton class="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base">Join the waitlist</BaseButton>
        </div>
      </BaseSection>
    </section>

    <section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <LandingTradingToolImage class="sm:hidden" />
        <div class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <h2 class="text-4xl font-semibold">Advanced Trading <span class="text-header-gradient">Tools</span></h2>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Professional Access, Non-stop Availability</h4>
            <p class="paragraph text-sm xl:text-base">
              We provide premium access to crypto trading for both individuals and institutions through high liquidity, reliable order execution and constant uptime.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">A Range of Powerful Apis</h4>
            <p class="paragraph text-sm xl:text-base">
              Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and HTTP APIs. Connect to our WebSocket for real-time data streaming.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Customer Support</h4>
            <p class="paragraph text-sm xl:text-base">
              Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers for partners.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row">
            <BaseButton class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base">Get Started</BaseButton>
            <BaseButton class="bg-inherit text-[#4A8FF6] px-10 py-4 text-center underline rounded-full">Learn More</BaseButton>
          </div>
        </div>
        <LandingTradingToolImage class="hidden sm:block" />
      </div>
    </section>

    <section class="w-full my-24">
      <div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        <div class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="industryLeadingSecurity" class="w-full" alt="Security" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8">
          <h2 class="text-4xl font-semibold">Industry-leading security from day one</h2>
          <ul class="space-y-8 sm:space-y-4">
            <LandingListItem title="Safety, security and compliance">
              <p class="text-sm text-gray-700 leading-relaxed">
                NEFA is a licensed New York trust company that undergoes regular bank exams and is subject to the cybersecurity audits conducted by the New York Department of Financial Services. <span class="underline">Learn more</span> about our commitment to security.
              </p>
            </LandingListItem>
            <LandingListItem title="Hardware security keys">
              <p class="text-sm text-gray-700 leading-relaxed">
                With NEFA you can secure your account with a hardware security key via WebAuthn.
              </p>
            </LandingListItem>
            <LandingListItem title="SOC Certifications">
              <p class="text-sm text-gray-700 leading-relaxed">
                NEFA is <span class="underline">SOC 1 Type 2</span> and <span class="underline">SOC 2 Type 2</span> compliant. We are the world’s first cryptocurrency exchange and custodian to complete these exams.
              </p>
            </LandingListItem>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 class="text-3xl sm:text-4xl font-semibold text-center">Get started in just a few minutes</h2>
        <div class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8">
          <LandingStep v-for="step in steps" :key="step.title" :step="step" />
          <img :src="gettingStartedArrow" class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]" alt="arrow" />
          <img :src="gettingStartedArrow" class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]" alt="arrow" />
        </div>
      </div>
    </section>

    
    <!-- layanan PST -->
  <h2 class="text-3xl sm:text-4xl font-semibold text-center">Layanan Utama</h2>
    <div class="flex flex-wrap gap-6 justify-center bg-gray-50 p-8">
    
    <!-- 1 -->
    <div class="relative w-72 h-[450px] bg-white rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden border border-gray-100 p-6 pt-12">
      
      <div class="absolute top-0 right-0 w-28 h-28 overflow-hidden pointer-events-none">
        <div class="absolute bg-blue-600 text-white text-xs font-bold uppercase tracking-wider text-center py-1.5 w-40 top-6 -right-10 rotate-45 shadow-sm">
          Gratis
        </div>
      </div>

      <div class="flex flex-col items-center flex-grow text-center">
        <div class="w-20 h-20 bg-blue-950 rounded-full flex items-center justify-center text-white mb-5 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>

        <h3 class="text-blue-950 font-extrabold text-2xl mb-1">Perpustakaan</h3>

        <div class="flex items-center justify-center gap-1.5 text-gray-500 font-bold text-sm mb-4">
          <span>Layanan Umum</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

        <p class="text-gray-500 text-sm leading-relaxed px-2 text-justify md:text-center">
          Publikasi statistik terbitan BPS dari berbagai kategori: kependudukan, sosial, sosial ekonomi, pertanian, dan lain-lain.
        </p>
      </div>

      <div class="mt-6 text-center w-full">
        <a href="https://pustaka.bps.go.id" target="_blank" class="inline-block text-blue-900 font-bold hover:text-blue-700 hover:underline transition-colors duration-200">
          Cari Pustaka
        </a>
      </div>

    </div>

    <!-- 2 -->
     <div class="relative w-72 h-[450px] bg-white rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden border border-gray-100 p-6 pt-12">
      
      <div class="absolute top-0 right-0 w-28 h-28 overflow-hidden pointer-events-none">
        <div class="absolute bg-blue-600 text-white text-xs font-bold uppercase tracking-wider text-center py-1.5 w-40 top-6 -right-10 rotate-45 shadow-sm">
          Gratis
        </div>
      </div>

      <div class="flex flex-col items-center flex-grow text-center">
        <div class="w-20 h-20 bg-blue-950 rounded-full flex items-center justify-center text-white mb-5 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>

        <h3 class="text-blue-950 font-extrabold text-2xl mb-1">Konsultasi</h3>

        <div class="flex items-center justify-center gap-1.5 text-gray-500 font-bold text-sm mb-4">
          <span>Layanan Umum</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

        <p class="text-gray-500 text-sm leading-relaxed px-2 text-justify md:text-center">
          Konsultasi terkait data, metadata, klasifikasi dan produk statistik BPS lainnya
        </p>
      </div>

      <div class="mt-6 text-center w-full">
        <a href="https://pustaka.bps.go.id" target="_blank" class="inline-block text-blue-900 font-bold hover:text-blue-700 hover:underline transition-colors duration-200">
          Ajukan Konsultasi
        </a>
      </div>

    </div>

    <!-- 3 -->
     <div class="relative w-72 h-[450px] bg-white rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden border border-gray-100 p-6 pt-12">
      
      <div class="absolute top-0 right-0 w-28 h-28 overflow-hidden pointer-events-none">
        <div class="absolute bg-blue-600 text-white text-xs font-bold uppercase tracking-wider text-center py-1.5 w-40 top-6 -right-10 rotate-45 shadow-sm">
          Gratis
        </div>
      </div>

      <div class="flex flex-col items-center flex-grow text-center">
        <div class="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-white mb-5 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

        <h3 class="text-blue-950 font-extrabold text-2xl mb-1">Rekomendasi</h3>

        <div class="flex items-center justify-center gap-1.5 text-gray-500 font-bold text-sm mb-4">
          <span>Layanan Instansi</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

        <p class="text-gray-500 text-sm leading-relaxed px-2 text-justify md:text-center">
          Layanan bagi instansi pemerintah yang akan melakukan survei dn mengajukan rekomendasi kegiatan statistik
        </p>
      </div>

      <div class="mt-6 text-center w-full">
        <a href="https://pustaka.bps.go.id" target="_blank" class="inline-block text-blue-900 font-bold hover:text-blue-700 hover:underline transition-colors duration-200">
          Minta Rekomendasi
        </a>
      </div>

    </div>

  </div>
  <!-- layanan PST -->

    <section class="w-full my-24">
      <BaseSection>
        <div class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="faqImage" class="w-full" alt="FAQ" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
          <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span>
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">Frequently asked questions</h2>
          <ul class="shadow-box">
            <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
          </ul>
        </div>
      </BaseSection>
    </section>

    <section class="min-h-screen bg-gray-100 flex items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
      
      <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div class="flex flex-col space-y-6 max-w-xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 leading-tight">
            Akses Statistik Indonesia dimana pun, kapan pun.
          </h1>
          
          <p class="text-gray-600 text-base md:text-lg leading-relaxed">
            Download aplikasi AllStats BPS untuk dapatkan kemudahan akses data BPS seperti: 
            Statistik di sekitarmu, Indikator Strategis, Publikasi Nasional sampai daerah, 
            Tabel Dinamis, dan masih banyak lagi.
          </p>
        </div>

        <div class="relative flex justify-center lg:justify-end w-full">
          <div class="absolute w-72 h-72 bg-blue-200/40 rounded-full blur-3xl -z-10 top-1/4 right-1/4"></div>
          
          <img 
            src="/images/allstats.png" 
            alt="Statistik Indonesia App Mockup" 
            class="w-auto h-[500px] md:h-[600px] lg:h-[650px] object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>

  <footer class="bg-[#00337C] text-white py-4 px-10 md:px-16 lg:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
      
      <div class="space-y-6">
        <h2 class="text-3xl font-bold tracking-wide">Hubungi Kami</h2>
        
        <div class="text-gray-200 text-sm md:text-base leading-relaxed space-y-1">
          <p>Gedung 2 Lantai 1.</p>
          <p>Pelayanan Statistik Terpadu. Badan Pusat Statistik.</p>
          <p>Jl. Dr. Sutomo 6-8 Jakarta 10710 Indonesia</p>
        </div>

        <div class="text-gray-200 text-sm md:text-base space-y-1">
          <p class="font-bold text-white">Jam Layanan:</p>
          <p>– Senin-Kamis: 08.30–15.30 WIB (tanpa jam istirahat)</p>
          <p>– Jumat: 08.30–16.00 WIB (tanpa jam istirahat)</p>
        </div>

        <div class="space-y-3 pt-2 text-gray-200 text-sm md:text-base">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:pst@bps.go.id" class="hover:underline">pst@bps.go.id</a>
          </div>

          <div class="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div class="leading-tight">
              <p>Telp (62-21) 3507057 (direct)</p>
              <p>Faks (62-21) 3857046</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>RRMP+VW (-6.1653197,106.8362427)</span>
          </div>
        </div>

        <div class="pt-4">
          <img src="/images/berakhlak.png" alt="Logo BerAKHLAK - Bangga Melayani Bangsa" class="h-18 w-auto object-contain bg-white p-1 rounded" />
        </div>
      </div>

      <div class="flex flex-col justify-between items-start md:items-end">
        <ul class="space-y-2.5 text-sm md:text-base text-gray-200 md:text-right w-full">
          <li><a href="#" class="hover:text-white transition-colors">Tentang Kami</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Visi, Tujuan, Sasaran</a></li>
          <li><a href="#" class="hover:text-white transition-colors">FAQ</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Motto Layanan</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Standar Pelayanan</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Maklumat Pelayanan</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Kebijakan Mutu</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Alur Pelayanan</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Informasi Biaya</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Kompensasi</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Pengaduan</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Penghargaan</a></li>
        </ul>

        <div class="pt-8 w-full flex justify-start md:justify-end">
          <img src="/images/KAN.png" alt="Sertifikasi ISO dan Komite Akreditasi Nasional" class="h-18 w-30 object-contain bg-white p-1.5 rounded-lg shadow-sm" />
        </div>
      </div>
    </div>
  </footer>

    
  </div>
</template>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('@/assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('@/assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>