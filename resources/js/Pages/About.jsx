import { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';

export default function About({ auth }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Detect page scroll to update navigation styling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 4 Founders
    const founders = [
        {
            name: 'Muhammad Pasee',
            role: 'Chief Executive Officer',
            socials: {
                instagram: '#',
                linkedin: '#',
                twitter: '#'
            }
        },
        {
            name: 'Aulia Rahman',
            role: 'Chief Operating Officer',
            socials: {
                instagram: '#',
                linkedin: '#',
                twitter: '#'
            }
        },
        {
            name: 'Syahrul Ramadhan',
            role: 'Chief Technology Officer',
            socials: {
                instagram: '#',
                linkedin: '#',
                twitter: '#'
            }
        },
        {
            name: 'Dian Lestari',
            role: 'Chief Financial Officer',
            socials: {
                instagram: '#',
                linkedin: '#',
                twitter: '#'
            }
        }
    ];

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        alert(`Mencari trip ke destinasi: ${searchQuery}`);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#00a896] selection:text-white font-sans antialiased">
            <Head title="Tentang Kami - PASEE TRIP" />

            {/* Header/Navbar */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                    scrolled
                        ? 'bg-[#0b132b]/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5'
                        : 'bg-transparent py-6'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/image/logobrand.png" alt="PASEE TRIP Logo" className="h-10 w-auto object-contain" />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-white/80 hover:text-white font-medium text-sm transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00a896] hover:after:w-full after:transition-all after:duration-300">Beranda</Link>
                        <Link href="/destinations" className="text-white/80 hover:text-white font-medium text-sm transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00a896] hover:after:w-full after:transition-all after:duration-300">Destinasi</Link>
                        <Link href="/about" className="text-[#00a896] font-medium text-sm transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#00a896] after:transition-all after:duration-300">Tentang Kami</Link>
                        <a href="#contact" className="text-white/80 hover:text-white font-medium text-sm transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00a896] hover:after:w-full after:transition-all after:duration-300">Hubungi</a>

                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="bg-[#00a896] text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-transparent hover:text-[#00a896] border border-[#00a896] shadow-[0_4px_14px_rgba(0,168,150,0.3)] hover:shadow-none hover:-translate-y-0.5 transition-all duration-300"
                            aria-label="Cari Trip"
                        >
                            <i className="bi bi-search text-base"></i>
                        </button>
                    </nav>

                    {/* Mobile Menu Actions */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="text-white hover:text-[#00a896] text-2xl transition-colors focus:outline-none"
                            aria-label="Cari Trip"
                        >
                            <i className="bi bi-search"></i>
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white text-3xl focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Drawer */}
                <div
                    className={`fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-[#0b132b] flex flex-col items-center pt-12 gap-6 transition-all duration-500 ease-in-out md:hidden border-t border-white/5 ${
                        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <Link
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white/80 hover:text-white font-medium text-lg transition-colors"
                    >
                        Beranda
                    </Link>
                    <Link
                        href="/destinations"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white/80 hover:text-white font-medium text-lg transition-colors"
                    >
                        Destinasi
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[#00a896] font-medium text-lg transition-colors"
                    >
                        Tentang Kami
                    </Link>
                    <a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white/80 hover:text-white font-medium text-lg transition-colors"
                    >
                        Hubungi
                    </a>

                    <button
                        onClick={() => {
                            setMobileMenuOpen(false);
                            setIsSearchOpen(true);
                        }}
                        className="bg-[#00a896] text-white px-8 py-3 rounded-lg font-semibold text-base shadow-[0_4px_14px_rgba(0,168,150,0.3)] flex items-center gap-2"
                    >
                        <i className="bi bi-search"></i> Cari Trip
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section
                className="relative h-[45vh] min-h-[350px] flex items-center text-white bg-no-repeat bg-center bg-cover overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(11, 19, 43, 0.8) 0%, rgba(2, 128, 144, 0.45) 100%), url('/image/hero.jpeg')`
                }}
            >
                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center justify-center text-center mt-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 font-heading leading-tight animate-fade-in">
                        Tentang Kami
                    </h1>
                    <div className="w-16 h-1 bg-[#00a896] mb-4 rounded-full"></div>
                    <p className="max-w-[600px] text-white/80 text-base md:text-lg font-light leading-relaxed">
                        Kenali lebih dekat visi, misi, dan tim pendiri di balik platform digital Pasee Trip.
                    </p>
                </div>
            </section>

            {/* Visi & Misi Section */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Visi Card */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col justify-center">
                        <span className="text-[#00a896] font-bold text-xs uppercase tracking-widest mb-3 inline-block">Cita-Cita Luhur</span>
                        <h2 className="text-3xl md:text-4xl text-[#1e293b] font-extrabold font-heading mb-6">Visi Kami</h2>
                        <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-[#00a896] pl-6">
                            "Menjadi platform perjalanan wisata digital terdepan di Aceh yang menyajikan pengalaman liburan tak terlupakan dengan mengedepankan kualitas pelayanan, keamanan, dan kepuasan pelanggan."
                        </p>
                    </div>

                    {/* Misi List */}
                    <div className="flex flex-col justify-center">
                        <span className="text-[#00a896] font-bold text-xs uppercase tracking-widest mb-3 inline-block">Langkah Nyata</span>
                        <h2 className="text-3xl md:text-4xl text-[#1e293b] font-extrabold font-heading mb-8">Misi Kami</h2>
                        
                        <ul className="flex flex-col gap-6">
                            <li className="flex items-start gap-4">
                                <span className="w-8 h-8 rounded-full bg-[#00a896]/10 text-[#00a896] flex items-center justify-center text-lg flex-shrink-0 mt-0.5">
                                    <i className="bi bi-check-lg"></i>
                                </span>
                                <div>
                                    <h4 className="text-lg font-bold text-[#1e293b] mb-1">Akomodasi & Transportasi Prima</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Menyediakan layanan penginapan yang nyaman, makanan berkualitas, serta armada kendaraan yang aman dan terpercaya.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="w-8 h-8 rounded-full bg-[#00a896]/10 text-[#00a896] flex items-center justify-center text-lg flex-shrink-0 mt-0.5">
                                    <i className="bi bi-check-lg"></i>
                                </span>
                                <div>
                                    <h4 className="text-lg font-bold text-[#1e293b] mb-1">Promosi Wisata Lokal</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Melestarikan dan memperkenalkan pesona wisata alam, kekayaan sejarah, dan keindahan budaya Aceh ke tingkat nasional dan global.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="w-8 h-8 rounded-full bg-[#00a896]/10 text-[#00a896] flex items-center justify-center text-lg flex-shrink-0 mt-0.5">
                                    <i className="bi bi-check-lg"></i>
                                </span>
                                <div>
                                    <h4 className="text-lg font-bold text-[#1e293b] mb-1">Pelayanan Responsif 24/7</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Memberikan dukungan pelayanan pelanggan yang responsif, hangat, dan solutif di setiap tahap persiapan hingga liburan selesai.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="w-8 h-8 rounded-full bg-[#00a896]/10 text-[#00a896] flex items-center justify-center text-lg flex-shrink-0 mt-0.5">
                                    <i className="bi bi-check-lg"></i>
                                </span>
                                <div>
                                    <h4 className="text-lg font-bold text-[#1e293b] mb-1">Tarif Transparan & Bersahabat</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Menyusun paket perjalanan yang lengkap dan bernilai tinggi dengan harga jujur tanpa biaya-biaya tersembunyi.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-24 bg-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-[600px] mx-auto mb-16">
                        <span className="text-[#00a896] font-bold text-sm uppercase tracking-widest mb-3 inline-block">Tim Pendiri</span>
                        <h2 className="text-3xl md:text-4xl text-[#1e293b] font-extrabold tracking-tight mb-4 font-heading">Meet Our Founders</h2>
                        <p className="text-[#64748b] text-base font-normal">Para pemikir dan penggerak di balik terciptanya Pasee Trip.</p>
                    </div>

                    {/* Cards Grid - 4 Columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {founders.map((founder, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-200/60 group"
                            >
                                {/* Placeholder Empty Image */}
                                <div className="aspect-[4/3] w-full bg-slate-100 flex items-center justify-center relative overflow-hidden border-b border-slate-100">
                                    <div className="text-slate-300 text-6xl group-hover:scale-105 transition-transform duration-500 flex flex-col items-center gap-2">
                                        <i className="bi bi-person-circle"></i>
                                        <span className="text-xs font-semibold text-slate-400 tracking-wider">PHOTO</span>
                                    </div>
                                </div>

                                <div className="p-6 text-center">
                                    <h3 className="text-lg font-bold text-[#1e293b] mb-1 font-heading group-hover:text-[#00a896] transition-colors">
                                        {founder.name}
                                    </h3>
                                    <p className="text-xs text-[#00a896] font-semibold uppercase tracking-wider mb-5">
                                        {founder.role}
                                    </p>
                                    
                                    {/* Social Icons */}
                                    <div className="flex justify-center gap-3">
                                        <a href={founder.socials.instagram} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#00a896]/10 hover:text-[#00a896] transition-colors"><i className="bi bi-instagram text-sm"></i></a>
                                        <a href={founder.socials.linkedin} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#00a896]/10 hover:text-[#00a896] transition-colors"><i className="bi bi-linkedin text-sm"></i></a>
                                        <a href={founder.socials.twitter} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#00a896]/10 hover:text-[#00a896] transition-colors"><i className="bi bi-twitter-x text-sm"></i></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0b132b] text-white/70 pt-24 pb-12 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div id="contact" className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="flex flex-col gap-6">
                            <span className="text-2xl font-extrabold tracking-tight text-white font-heading">
                                PASEE <span className="text-[#00a896]">TRIP</span>
                            </span>
                            <p className="text-sm leading-relaxed text-white/60">
                                Sahabat terbaik perjalanan Anda untuk menjelajahi surga wisata Aceh dengan aman, hemat, nyaman, dan berkesan.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#00a896] hover:text-white transition-all"><i className="bi bi-facebook"></i></a>
                                <a href="https://instagram.com/paseetrip" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#00a896] hover:text-white transition-all"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#00a896] hover:text-white transition-all"><i className="bi bi-twitter-x"></i></a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-semibold mb-6 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[2px] after:bg-[#00a896] font-heading font-bold">Perusahaan</h3>
                            <ul className="flex flex-col gap-3 text-sm">
                                <li><Link href="/" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Beranda</Link></li>
                                <li><Link href="/destinations" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Destinasi Populer</Link></li>
                                <li><Link href="/about" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Tentang Kami</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-semibold mb-6 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[2px] after:bg-[#00a896] font-heading font-bold">Destinasi</h3>
                            <ul className="flex flex-col gap-3 text-sm">
                                <li><Link href="/destinations" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Danau Lut Tawar</Link></li>
                                <li><Link href="/destinations" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Kilometer 0 Sabang</Link></li>
                                <li><Link href="/destinations" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Masjid Raya Aceh</Link></li>
                                <li><Link href="/destinations" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Museum Tsunami</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-semibold mb-6 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[2px] after:bg-[#00a896] font-heading font-bold">Hubungi Kami</h3>
                            <ul className="flex flex-col gap-4 text-sm text-white/70">
                                <li className="flex items-start gap-3">
                                    <i className="bi bi-geo-alt-fill text-[#00a896] text-base mt-0.5"></i>
                                    <span>Jl. Samudera No. 45, Banda Aceh, Indonesia</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <i className="bi bi-envelope-fill text-[#00a896] text-base mt-0.5"></i>
                                    <span>info@paseetrip.com</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <i className="bi bi-telephone-fill text-[#00a896] text-base mt-0.5"></i>
                                    <span>+62 859-6705-3617</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 gap-3">
                        <p>&copy; 2026 PASEE TRIP. Seluruh Hak Cipta Dilindungi.</p>
                        <p>Designed with <i className="bi bi-heart-fill text-[#e76f51]"></i> for beautiful destinations</p>
                    </div>
                </div>
            </footer>

            {/* Search Modal (Popup) */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-[#0b132b]/90 backdrop-blur-lg z-[2000] flex items-center justify-center p-6 animate-fade-in">
                    <button
                        onClick={() => setIsSearchOpen(false)}
                        className="absolute top-8 right-8 text-white/70 hover:text-white text-3xl transition-colors focus:outline-none"
                        aria-label="Close search"
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>

                    <div className="max-w-4xl w-full p-4 animate-scale-up">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white font-heading tracking-tight">
                                Cari Destinasi Wisata Anda
                            </h3>
                        </div>

                        <form onSubmit={handleSearchSubmit} className="flex items-center bg-white/5 border border-white/15 rounded-3xl p-3 w-full shadow-2xl backdrop-blur-md">
                            <i className="bi bi-search text-2xl text-white/50 pl-4"></i>
                            <input
                                type="text"
                                placeholder="Cari destinasi impian Anda (misal: Banda Aceh, Takengon, Sabang)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 bg-transparent text-white text-lg md:text-xl py-3 px-4 focus:outline-none placeholder-white/30 border-none focus:ring-0"
                                autoFocus
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#00a896] hover:bg-[#028090] text-white px-8 py-3.5 rounded-2xl font-bold font-heading transition-all duration-300 shadow-[0_4px_14px_rgba(0,168,150,0.3)]"
                            >
                                Cari
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
