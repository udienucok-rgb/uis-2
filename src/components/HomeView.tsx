import React, { useState } from 'react';
import {
  GraduationCap,
  ShieldCheck,
  Award,
  Users,
  Building2,
  ArrowRight,
  ChevronRight,
  Calendar,
  ExternalLink,
  BookOpen,
  HeartPulse,
  Clock,
  Sparkles,
  Search,
  CheckCircle2,
  Stethoscope,
  MapPin,
  Quote,
  Star,
  Activity,
  ArrowUpRight,
  HelpCircle,
  FlaskConical,
  CreditCard,
  Wallet,
  Check,
  Calculator,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavigationTab, NewsArticle, ProgramStudi } from '../types';
import {
  siteConfig,
  programStudiList,
  newsArticles,
  historyTimeline,
  facilitiesList,
  hospitalPartners,
  alumniStories,
  admissionTracks,
} from '../data/fikesData';

interface HomeViewProps {
  onNavigateTab: (tab: NavigationTab) => void;
  onOpenArticle: (article: NewsArticle) => void;
  onSelectProdi: (prodiId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateTab,
  onOpenArticle,
  onSelectProdi,
}) => {
  const latestNews = newsArticles.slice(0, 3);

  // Active tuition prodi tab for interactive fee breakdown section
  const [activeTuitionProdiId, setActiveTuitionProdiId] = useState<string>('s1-keperawatan');
  const activeTuitionProdi = programStudiList.find((p) => p.id === activeTuitionProdiId) || programStudiList[0];

  // Quick Finder interactive state (inspired by modern Dribbble property/program search)
  const [finderLevel, setFinderLevel] = useState<'all' | 's1' | 'profesi' | 'd3'>('all');
  const [selectedProdiFilter, setSelectedProdiFilter] = useState<string>('all');
  const [selectedTrackFilter, setSelectedTrackFilter] = useState<string>('all');

  const handleLevelChange = (lvl: 'all' | 's1' | 'profesi' | 'd3') => {
    setFinderLevel(lvl);
    if (lvl === 's1') setSelectedProdiFilter('s1-keperawatan');
    else if (lvl === 'profesi') setSelectedProdiFilter('profesi-ners');
    else if (lvl === 'd3') setSelectedProdiFilter('d3-kebidanan');
    else setSelectedProdiFilter('all');
  };

  const filteredProdi = programStudiList.filter((p) => {
    if (selectedProdiFilter !== 'all') {
      return p.id === selectedProdiFilter;
    }
    if (finderLevel === 's1') return p.id === 's1-keperawatan';
    if (finderLevel === 'profesi') return p.id === 'profesi-ners';
    if (finderLevel === 'd3') return p.id === 'd3-kebidanan';
    return true;
  });

  const handleFinderSearch = () => {
    if (selectedProdiFilter !== 'all') {
      onSelectProdi(selectedProdiFilter);
      onNavigateTab(selectedProdiFilter as NavigationTab);
    } else if (finderLevel === 's1') {
      onSelectProdi('s1-keperawatan');
      onNavigateTab('s1-keperawatan');
    } else if (finderLevel === 'profesi') {
      onSelectProdi('profesi-ners');
      onNavigateTab('profesi-ners');
    } else if (finderLevel === 'd3') {
      onSelectProdi('d3-kebidanan');
      onNavigateTab('d3-kebidanan');
    } else {
      const target = document.getElementById('programs-section');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 lg:space-y-20">
      {/* 1. HERO SECTION (Dribbble Architectural Aesthetic) */}
      <section className="relative">
        <div className="relative rounded-3xl lg:rounded-[36px] overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-950 text-white shadow-xl">
          {/* Background Photography with measured gradient scrim */}
          <div className="min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] w-full relative flex items-center">
            <img
              src="/src/assets/images/fikes_campus_hero_1791442646758.jpg"
              alt="Kampus FIKES Universitas Ichsan Satya"
              className="absolute inset-0 w-full h-full object-cover opacity-25 select-none scale-102 hover:scale-100 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Cinematic architectural gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />

            {/* Hero Main Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Narrative (7 cols) */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="lg:col-span-7 space-y-6 text-left"
                >
                  {/* Subtle top indicator */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-medium backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    <span>Penerimaan Mahasiswa Baru 2026/2027 Telah Dibuka</span>
                  </div>

                  {/* High impact typography */}
                  <div className="space-y-2">
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400 block">
                      Fakultas Ilmu Kesehatan
                    </span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                      Universitas <span className="font-medium text-blue-300">Ichsan Satya</span>
                    </h1>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl text-left">
                    Pusat pendidikan kesehatan unggulan di Bintaro yang memadukan kurikulum berbasis luaran (OBE), simulasi klinis rumah sakit terpadu, serta jejaring rumah sakit pendidikan terakreditasi guna melahirkan ners dan bidan kompeten berdaya saing global.
                  </p>

                  {/* Primary Call to Action buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={siteConfig.portals.pmbOnline}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-blue-900/30 flex items-center gap-2 hover:-translate-y-0.5"
                    >
                      <span>Daftar Online (PMB UIS)</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => {
                        const el = document.getElementById('programs-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20 backdrop-blur-md flex items-center gap-2 hover:-translate-y-0.5"
                    >
                      <span>Lihat Program Studi</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>

                {/* Right Floating Highlight Badges (5 cols - Dribbble visual cards) */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5"
                >
                  {/* Floating Card 1: Akreditasi & UKOM */}
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.15 } }}
                    className="p-4 sm:p-5 rounded-2xl bg-white/10 dark:bg-slate-900/80 backdrop-blur-md border border-white/15 dark:border-slate-800 shadow-lg text-left"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 font-semibold">
                        LAM-PTKes
                      </span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                      Baik Sekali
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Status akreditasi program studi keperawatan dan kebidanan
                    </p>
                  </motion.div>

                  {/* Floating Card 2: Kelulusan UKOM */}
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.15 } }}
                    className="p-4 sm:p-5 rounded-2xl bg-white/10 dark:bg-slate-900/80 backdrop-blur-md border border-white/15 dark:border-slate-800 shadow-lg text-left"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <Activity className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-semibold">
                        Nasional
                      </span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                      96.8% First-Taker
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Tingkat kelulusan Uji Kompetensi Nasional Ners & Bidan
                    </p>
                  </motion.div>

                  {/* Floating Card 3: RS Jejaring */}
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.15 } }}
                    className="p-4 sm:p-5 rounded-2xl bg-white/10 dark:bg-slate-900/80 backdrop-blur-md border border-white/15 dark:border-slate-800 shadow-lg text-left sm:col-span-2 lg:col-span-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">
                          20+ Rumah Sakit Jejaring
                        </div>
                        <div className="text-xs text-slate-300">
                          RS IMC Bintaro, RSUP Fatmawati, RS Premier & RSUD Tangsel
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Dribbble-Style Smart Finder Strip (Floating Card overlapping hero bottom) */}
        <div className="max-w-5xl mx-auto -mt-6 sm:-mt-8 px-4 relative z-20">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-xl text-left">
            {/* Quick Segmented Tabs */}
            <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-1 border-b border-slate-100 dark:border-slate-800">
              <button
                onClick={() => handleLevelChange('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                  finderLevel === 'all'
                    ? 'bg-slate-900 dark:bg-blue-600 text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Semua Jenjang
              </button>
              <button
                onClick={() => handleLevelChange('s1')}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                  finderLevel === 's1'
                    ? 'bg-slate-900 dark:bg-blue-600 text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                S1 Keperawatan (S.Kep.)
              </button>
              <button
                onClick={() => handleLevelChange('profesi')}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                  finderLevel === 'profesi'
                    ? 'bg-slate-900 dark:bg-blue-600 text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Profesi Ners (Ns.)
              </button>
              <button
                onClick={() => handleLevelChange('d3')}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                  finderLevel === 'd3'
                    ? 'bg-slate-900 dark:bg-blue-600 text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                D3 Kebidanan (A.Md.Keb.)
              </button>
            </div>

            {/* Inputs & Action Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 items-center">
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
                  Pilih Program Studi
                </label>
                <select
                  value={selectedProdiFilter}
                  onChange={(e) => setSelectedProdiFilter(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Semua Program Studi FIKES</option>
                  <option value="s1-keperawatan">S1 Keperawatan (144 SKS)</option>
                  <option value="profesi-ners">Pendidikan Profesi Ners (36 SKS)</option>
                  <option value="d3-kebidanan">D3 Kebidanan (110 SKS)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
                  Jalur Pendaftaran
                </label>
                <select
                  value={selectedTrackFilter}
                  onChange={(e) => setSelectedTrackFilter(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Semua Jalur PMB Online</option>
                  <option value="prestasi">Jalur Prestasi Rapor (Bebas Tes)</option>
                  <option value="reguler">Jalur CBT Online Cepat</option>
                  <option value="alih">Jalur Alih Jenjang / Profesi</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
                  Lokasi Kampus
                </label>
                <div className="px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="truncate">Kampus Bintaro Jaya Sektor IX</span>
                </div>
              </div>

              <div className="sm:col-span-3 lg:col-span-1 pt-2 sm:pt-0">
                <label className="hidden lg:block text-[11px] font-semibold text-transparent mb-1">
                  Aksi
                </label>
                <button
                  onClick={handleFinderSearch}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Jelajahi Program</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAM STUDI SHOWCASE (Dribbble Card Grid with High Aesthetic) */}
      <section id="programs-section" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              Kurikulum Berstandar OBE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
              Program Studi Unggulan
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mt-1 leading-relaxed text-left">
              Pilihan jenjang akademik dan vokasi kesehatan dengan akreditasi Baik Sekali LAM-PTKes, didukung sarana laboratorium klinis modern.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 dark:text-slate-400">Total:</span>
            <span className="font-mono font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-1 rounded-md">
              {filteredProdi.length} Program
            </span>
          </div>
        </div>

        {filteredProdi.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {filteredProdi.map((prodi) => (
              <motion.div
                key={prodi.id}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left"
              >
                {/* Image Frame with Badge Overlays */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={prodi.bannerImage}
                    alt={prodi.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-slate-900/90 text-blue-300 backdrop-blur-md shadow-xs">
                      {prodi.degree}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-emerald-600/90 text-white shadow-xs">
                      LAM-PTKes
                    </span>
                  </div>

                  {/* Bottom stats inside image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-blue-400" />
                      <span>{prodi.duration}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-blue-400" />
                      <span>{prodi.credits}</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                      {prodi.name}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed text-left">
                      {prodi.overview}
                    </p>

                    {/* Highlights tag list */}
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                        Laboratorium & Praktik:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {prodi.laboratories.slice(0, 2).map((lab, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 truncate max-w-[200px]"
                          >
                            {lab}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tuition Fee Callout per Semester */}
                    {prodi.tuitionInfo && (
                      <div className="mt-4 p-3 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 flex items-center justify-between text-xs">
                        <div>
                          <span className="text-[10px] uppercase font-mono font-bold text-blue-700 dark:text-blue-400 block">
                            Biaya SPP / 1 Semester:
                          </span>
                          <span className="font-extrabold text-sm text-slate-900 dark:text-white font-mono">
                            {prodi.tuitionInfo.sppSemester}
                          </span>
                        </div>
                        <span className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/70 text-blue-800 dark:text-blue-300">
                          Bisa Diangsur
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Action Footers */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => {
                        onSelectProdi(prodi.id);
                        onNavigateTab(prodi.id as NavigationTab);
                      }}
                      className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1"
                    >
                      <span>Detail Biaya & Kurikulum</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href={siteConfig.portals.pmbOnline}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 hover:bg-blue-700 hover:text-white transition-colors"
                      title="Daftar Program Ini"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
              Tidak ada program yang sesuai dengan filter
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4">
              Silakan atur kembali kata kunci atau jenjang pilihan Anda.
            </p>
            <button
              onClick={() => handleLevelChange('all')}
              className="px-4 py-2 rounded-xl bg-blue-700 text-white text-xs font-semibold"
            >
              Reset Filter Program
            </button>
          </div>
        )}

        {/* 3.1. INFORMASI BIAYA KULIAH / 1 SEMESTER SELURUH JURUSAN FIKES */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-blue-800/60 shadow-xl space-y-8 text-left">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs font-semibold">
                <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                <span>Transparansi Biaya Pendidikan TA 2026/2027</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Informasi Biaya Kuliah per 1 Semester
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Biaya perkuliahan di FIKES Universitas Ichsan Satya dirancang transparan dengan skema cicilan hingga 3 kali per semester untuk mendukung kelancaran studi calon perawat dan bidan.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.portals.pmbOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <span>Daftar PMB Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 3 Program Fee Cards with Motion */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programStudiList.map((prodi) => {
              const isSelectedTab = activeTuitionProdiId === prodi.id;
              return (
                <motion.div
                  key={prodi.id}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`rounded-2xl p-6 bg-slate-900/90 border transition-all flex flex-col justify-between space-y-4 shadow-lg ${
                    isSelectedTab
                      ? 'border-blue-400 ring-2 ring-blue-500/40 shadow-blue-900/30'
                      : 'border-blue-500/30 hover:border-blue-400'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-900/80 text-blue-300 font-bold">
                        {prodi.degree}
                      </span>
                      <span className="text-[10px] text-emerald-300 font-medium">
                        {prodi.accreditation.replace('Terakreditasi ', '')}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white">
                      {prodi.name}
                    </h4>

                    <div className="mt-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-blue-400 block font-semibold">
                        Biaya SPP / 1 Semester:
                      </span>
                      <div className="text-2xl font-extrabold text-white font-mono">
                        {prodi.tuitionInfo?.sppSemester}
                      </div>
                      <span className="text-[11px] text-slate-400 block font-mono">
                        Durasi: {prodi.duration} ({prodi.tuitionInfo?.totalSemester} Semester)
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 text-xs text-slate-300">
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Dana Pengembangan:</span>
                        <strong className="font-mono text-slate-200">
                          {prodi.tuitionInfo?.danaPengembangan.split('(')[0]}
                        </strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Total Estimasi SPP:</span>
                        <strong className="font-mono text-blue-300">
                          {prodi.tuitionInfo?.estimasiTotalSpp || '-'}
                        </strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Opsi Cicilan:</span>
                        <span className="text-emerald-300 font-medium">
                          {prodi.id === 'profesi-ners' ? '2x per semester' : '3x per semester'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      onClick={() => setActiveTuitionProdiId(prodi.id)}
                      className={`w-full py-2.5 px-3 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 ${
                        isSelectedTab
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-800 hover:bg-slate-700 text-blue-300'
                      }`}
                    >
                      <span>{isSelectedTab ? '✓ Sedang Dilihat di Bawah' : 'Buka Rincian Semester'}</span>
                    </button>
                    <button
                      onClick={() => {
                        onSelectProdi(prodi.id);
                        onNavigateTab(prodi.id as NavigationTab);
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-transparent hover:bg-white/5 text-slate-300 hover:text-white font-medium text-xs transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Halaman Lengkap Prodi</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Semester-by-Semester Fee Breakdown Inspector */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/95 border border-blue-500/30 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold block mb-1">
                  Rincian Tiap Semester: {activeTuitionProdi.name}
                </span>
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-400" />
                  <span>Jadwal & Besaran Biaya SPP Tiap Semester</span>
                </h4>
              </div>

              {/* Major Selector Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-slate-800/90 rounded-xl border border-slate-700/60">
                {programStudiList.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveTuitionProdiId(p.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      activeTuitionProdiId === p.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
                    }`}
                  >
                    {p.name.replace('Pendidikan ', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Animated Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTuitionProdiId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Table of all semesters for this active prodi */}
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="bg-slate-800/80 border-b border-slate-800 text-[11px] font-mono uppercase text-slate-400">
                        <th className="py-3 px-3.5 font-semibold">Semester</th>
                        <th className="py-3 px-3.5 font-semibold">Biaya SPP / Semester</th>
                        <th className="py-3 px-3.5 font-semibold hidden sm:table-cell">Status Lab / SKS</th>
                        <th className="py-3 px-3.5 font-semibold">Fokus Perkuliahan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/70">
                      {activeTuitionProdi.tuitionInfo?.semesterFeeBreakdown?.map((item) => (
                        <tr key={item.semester} className="hover:bg-slate-800/40 transition-colors">
                          <td className="py-3 px-3.5 whitespace-nowrap">
                            <span className="font-mono font-bold text-blue-400 bg-blue-950/80 border border-blue-900/60 px-2 py-0.5 rounded-md">
                              {item.label}
                            </span>
                          </td>
                          <td className="py-3 px-3.5 font-mono font-bold text-white whitespace-nowrap text-sm">
                            {item.spp}
                          </td>
                          <td className="py-3 px-3.5 text-emerald-400 font-medium whitespace-nowrap hidden sm:table-cell">
                            {item.biayaSksPraktikum}
                          </td>
                          <td className="py-3 px-3.5 text-slate-300 text-[11px]">
                            {item.keterangan}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 3-Stage Installment Breakdown Card */}
                <div>
                  <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-blue-400" />
                    <span>Skema Pembayaran Cicilan per 1 Semester ({activeTuitionProdi.name})</span>
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeTuitionProdi.tuitionInfo?.skemaCicilan?.map((cicilan, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 text-left"
                      >
                        <span className="text-[10px] font-mono text-blue-400 uppercase font-bold block mb-1">
                          Tahap {idx + 1}
                        </span>
                        <p className="text-xs font-semibold text-slate-200">
                          {cicilan}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Installment Banner Note */}
          <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <Wallet className="w-4 h-4 text-blue-400 shrink-0" />
              <span>
                <strong>Skema Cicilan Ringan:</strong> SPP per semester dapat dibayarkan dalam skema cicilan bertahap (Tahap 1: Registrasi/KRS, Tahap 2: Jelang UTS, Tahap 3: Jelang UAS).
              </span>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=Halo%20Admin%20FIKES%20UIS,%20saya%20ingin%20tanya%20informasi%20biaya%20kuliah%20per%20semester`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 font-semibold underline whitespace-nowrap"
            >
              Hubungi Helpdesk PMB
            </a>
          </div>
        </div>
      </section>

      {/* 3.1. EKOSISTEM FAKULTAS UNIVERSITAS ICHSAN SATYA (PRD Section 14) */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-xs text-left space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              Struktur Institusi Universitas
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
              Fakultas di Universitas Ichsan Satya
            </h2>
          </div>
          <a
            href={siteConfig.portals.universityWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>Kunjungi Website Universitas Ichsan Satya</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed text-left">
          Sebagai universitas multidisiplin terkemuka di Tangerang Selatan, Universitas Ichsan Satya menaungi tiga fakultas strategis yang saling bersinergi dalam inovasi akademik, riset, dan pengabdian masyarakat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Card 1: FIKES (Active Faculty) */}
          <div className="p-6 rounded-2xl bg-blue-50/60 dark:bg-blue-950/40 border-2 border-blue-500/60 dark:border-blue-600/50 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-700 text-white">
                  Fakultas Utama
                </span>
                <HeartPulse className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Fakultas Ilmu Kesehatan (FIKES)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed text-left">
                Pusat keunggulan pendidikan tenaga kesehatan dengan kurikulum OBE, simulasi klinis rumah sakit, dan akreditasi LAM-PTKes.
              </p>
              <div className="mt-4 pt-3 border-t border-blue-200/60 dark:border-blue-900 space-y-1.5 text-xs">
                <button
                  onClick={() => {
                    onSelectProdi('s1-keperawatan');
                    onNavigateTab('s1-keperawatan');
                  }}
                  className="w-full text-left font-semibold text-blue-800 dark:text-blue-300 hover:underline flex items-center justify-between py-1"
                >
                  <span>• S1 Keperawatan (S.Kep.)</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
                <button
                  onClick={() => {
                    onSelectProdi('profesi-ners');
                    onNavigateTab('profesi-ners');
                  }}
                  className="w-full text-left font-semibold text-blue-800 dark:text-blue-300 hover:underline flex items-center justify-between py-1"
                >
                  <span>• Pendidikan Profesi Ners (Ns.)</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
                <button
                  onClick={() => {
                    onSelectProdi('d3-kebidanan');
                    onNavigateTab('d3-kebidanan');
                  }}
                  className="w-full text-left font-semibold text-blue-800 dark:text-blue-300 hover:underline flex items-center justify-between py-1"
                >
                  <span>• D3 Kebidanan (A.Md.Keb.)</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: FASILKOM */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  Fakultas Sains & Teknologi
                </span>
                <FlaskConical className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Fakultas Ilmu Komputer (FASILKOM)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed text-left">
                Membina talenta digital dalam bidang rekayasa perangkat lunak, kecerdasan buatan, sistem informasi, dan komputasi awan.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="py-1">• S1 Informatika</div>
                <div className="py-1">• S1 Sistem Informasi</div>
              </div>
            </div>
            <a
              href={siteConfig.portals.universityWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center justify-between"
            >
              <span>Info Fasilkom di Portal UIS</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Card 3: FEB */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  Fakultas Bisnis
                </span>
                <Building2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Fakultas Ekonomi & Bisnis (FEB)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed text-left">
                Mengembangkan calon pemimpin bisnis, akuntan profesional, dan wirausahawan adaptif terhadap era ekonomi digital modern.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="py-1">• S1 Manajemen Bisnis</div>
                <div className="py-1">• S1 Akuntansi Keuangan</div>
              </div>
            </div>
            <a
              href={siteConfig.portals.universityWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center justify-between"
            >
              <span>Info FEB di Portal UIS</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. FASILITAS LABORATORIUM (Dribbble Bento Grid Aesthetic) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              Infrastruktur Pembelajaran
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
              Fasilitas Laboratorium Simulasi
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mt-1 leading-relaxed text-left">
              Menghadirkan lingkungan simulasi menyerupai rumah sakit nyata untuk melatih kesiapan klinis sebelum mahasiswa terjun ke stase praktik.
            </p>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilitiesList.map((fac, idx) => (
            <div
              key={fac.id}
              className={`rounded-3xl border border-slate-200/90 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left ${
                idx === 0 || idx === 3 ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              <div className="h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                <img
                  src={fac.image}
                  alt={fac.name}
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-slate-900/80 text-blue-300 backdrop-blur-xs">
                  {fac.category}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {fac.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed text-left">
                    {fac.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <ul className="space-y-1 text-[11px] text-slate-500 dark:text-slate-400">
                    {fac.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. JEJARING RUMAH SAKIT PENDIDIKAN & KLINIK (Trust Grid) */}
      <section className="bg-slate-100/70 dark:bg-slate-900/60 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 text-left space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              Rumah Sakit Pendidikan & Jejaring
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
              Kemitraan Praktik Klinis Paripurna
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
            Mahasiswa menjalani rotasi klinik nyata di bawah bimbingan Clinical Instructor bersertifikat.
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hospitalPartners.map((hosp) => (
            <div
              key={hosp.id}
              className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="text-left overflow-hidden">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  {hosp.name}
                </h4>
                <div className="text-[11px] font-medium text-blue-700 dark:text-blue-400 mt-0.5">
                  {hosp.type}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 truncate">
                  {hosp.stase}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. JALUR PENERIMAAN MAHASISWA BARU (PMB Online Tracks) */}
      <section className="space-y-8">
        <div className="text-left">
          <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
            Penerimaan Mahasiswa Baru
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            Jalur Masuk & Beasiswa FIKES UIS
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mt-1 leading-relaxed text-left">
            Pilih jalur pendaftaran yang paling sesuai dengan kualifikasi dan prestasi Anda. Proses seleksi transparan dan cepat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {admissionTracks.map((track) => (
            <div
              key={track.id}
              className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between text-left ${
                track.isPopular
                  ? 'bg-gradient-to-b from-blue-900 via-slate-900 to-slate-950 text-white border-blue-500 shadow-xl ring-1 ring-blue-500/50'
                  : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 shadow-xs'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md ${
                      track.isPopular
                        ? 'bg-blue-500/30 text-blue-200 border border-blue-400/40'
                        : 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300'
                    }`}
                  >
                    {track.tag}
                  </span>
                  {track.isPopular && (
                    <span className="text-[10px] font-bold text-amber-300 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-300" />
                      <span>Terpopuler</span>
                    </span>
                  )}
                </div>

                <h3
                  className={`text-xl font-bold tracking-tight ${
                    track.isPopular ? 'text-white' : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {track.title}
                </h3>

                <p
                  className={`text-xs leading-relaxed ${
                    track.isPopular ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {track.description}
                </p>

                <div className="pt-3 border-t border-slate-200/20 space-y-2">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider block ${
                      track.isPopular ? 'text-blue-300' : 'text-slate-400'
                    }`}
                  >
                    Persyaratan Utama:
                  </span>
                  <ul className="space-y-1.5 text-xs">
                    {track.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-center gap-2">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 ${
                            track.isPopular ? 'text-blue-400' : 'text-blue-600 dark:text-blue-400'
                          }`}
                        />
                        <span
                          className={
                            track.isPopular ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'
                          }
                        >
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/20 space-y-3">
                <div
                  className={`text-[11px] font-mono ${
                    track.isPopular ? 'text-blue-300' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {track.deadline}
                </div>

                <a
                  href={siteConfig.portals.pmbOnline}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm ${
                    track.isPopular
                      ? 'bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold'
                      : 'bg-blue-700 hover:bg-blue-800 text-white'
                  }`}
                >
                  <span>Daftar Jalur Ini</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. KISAH SUKSES ALUMNI (Testimonial Cards) */}
      <section className="space-y-8">
        <div className="text-left">
          <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
            Jejak Prestasi Lulusan
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            Kisah Sukses Alumni FIKES UIS
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mt-1 leading-relaxed text-left">
            Lulusan Fakultas Ilmu Kesehatan Universitas Ichsan Satya tersebar di rumah sakit rujukan nasional hingga fasilitas kesehatan internasional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {alumniStories.map((story) => (
            <div
              key={story.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col justify-between text-left space-y-4"
            >
              <div className="space-y-3">
                <Quote className="w-7 h-7 text-blue-600/40 dark:text-blue-400/40" />
                <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed text-left">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  {story.name}
                </h4>
                <div className="text-[11px] font-semibold text-blue-700 dark:text-blue-400">
                  {story.role}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {story.workplace} · <span className="font-mono">{story.graduationYear}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. KILASAN SEJARAH & TRANSFORMASI (Timeline Stepper) */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white rounded-3xl lg:rounded-[36px] p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-xl text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold tracking-wider uppercase text-blue-400">
              Transformasi Institusi
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Dari STIKes Menuju Universitas Ichsan Satya
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-left">
              Perjalanan lebih dari satu setengah dekade dalam mencetak tenaga kesehatan berintegritas moral luhur, berawal dari STIKes HMS Bintaro (2007) hingga bertransformasi menjadi Universitas Ichsan Satya (2022).
            </p>
            <button
              onClick={() => onNavigateTab('sejarah')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
            >
              <span>Lihat Timeline Sejarah Lengkap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {historyTimeline.map((item) => (
              <div
                key={item.year}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xl font-bold text-blue-400 mb-1">
                    {item.year}
                  </div>
                  <div className="text-xs font-bold text-white mb-1 leading-snug">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-400 line-clamp-3">
                    {item.subtitle}
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-white/10 text-[9px] font-mono text-blue-300">
                  {item.milestoneBadge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BERITA & AGENDA KAMPUS TERKINI */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              Publikasi & Agenda Resmi
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
              Kabar Kampus Terkini
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mt-1 leading-relaxed text-left">
              Kumpulan artikel berita, pengumuman surat edaran, serta agenda seminar nasional FIKES UIS.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('berita')}
            className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>Arsip Berita Lengkap</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((article) => (
            <div
              key={article.id}
              onClick={() => onOpenArticle(article)}
              className="group cursor-pointer bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenArticle(article);
                }
              }}
            >
              <div className="h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-white/90 dark:bg-slate-900/90 text-blue-800 dark:text-blue-300 backdrop-blur-xs">
                  {article.categoryLabel}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-2 font-mono">
                    <Calendar className="w-3 h-3 text-blue-600" />
                    <span>{article.date}</span>
                    <span>·</span>
                    <Clock className="w-3 h-3 text-blue-600" />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed text-left">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-700 dark:text-blue-400">
                  <span className="text-[11px] text-slate-400 font-normal">
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Baca Selengkapnya</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
