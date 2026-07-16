import { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Destinations({ auth }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('destinations');
    
    // State to hold the selected destination for detail view
    const [selectedDest, setSelectedDest] = useState(null);

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

    // 4 Destinations as specified
    const destinationsList = [
        {
            id: 'kilometer0',
            title: 'Trip VIP To Sabang',
            location: 'Sabang, Pulau Weh, Indonesia',
            image: '/image/destinasi/sabang_vip.png',
            rating: '4.9',
            price: 'Rp 1.500.000',
            hasPackage: true,
            promoImage: '/image/destinasi/sabang_vip.png',
            waMessage: 'Halo saya mau bertanya soal Trip VIP To Sabang dengan harga Rp 1.500.000'
        },
        {
            id: 'masjidraya',
            title: 'Masjid Raya Baiturrahman',
            location: 'Banda Aceh, Indonesia',
            image: '/image/destinasi/Masjid Raya Aceh.jpeg',
            rating: '4.9',
            price: 'Rp 1.299.000',
            hasPackage: true,
            promoImage: '/image/destinasi/banda aceh.jpeg',
            waMessage: 'Halo saya mau bertanya soal destinasi Masjid Raya Baiturrahman dengan harga Rp 1.299.000'
        },
        {
            id: 'takengon',
            title: 'Danau Lut Tawar',
            location: 'Takengon, Aceh Tengah, Indonesia',
            image: '/image/destinasi/Takengon1.jpeg',
            rating: '4.8',
            price: 'Rp 1.000.000',
            hasPackage: true,
            promoImage: '/image/destinasi/takengon.jpeg',
            waMessage: 'Halo saya mau bertanya soal destinasi Danau Lut Tawar dengan harga Rp 1.000.000'
        },
        {
            id: 'tsunami',
            title: 'Museum Tsunami',
            location: 'Banda Aceh, Indonesia',
            image: '/image/destinasi/Tsunami Museum, Aceh.jpeg',
            rating: '4.9',
            price: 'Rp 1.299.000',
            hasPackage: false,
            waMessage: 'Halo saya mau bertanya soal destinasi Museum Tsunami dengan harga Rp 1.299.000'
        }
    ];

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        alert(`Mencari trip ke destinasi: ${searchQuery}`);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#00a896] selection:text-white font-sans antialiased">
            <Head title="Destinasi Wisata - PASEE TRIP" />

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
                        <Link href="/destinations" onClick={() => setActiveNav('destinations')} className={`${activeNav === 'destinations' ? 'text-[#00a896]' : 'text-white/80 hover:text-white'} font-medium text-sm transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 ${activeNav === 'destinations' ? 'after:w-full' : 'after:w-0 hover:after:w-full'} after:h-[2px] after:bg-[#00a896] after:transition-all after:duration-300`}>Destinasi</Link>
                        <Link href="/about" className="text-white/80 hover:text-white font-medium text-sm transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00a896] hover:after:w-full after:transition-all after:duration-300">Tentang Kami</Link>
                        <a href="#contact" onClick={() => setActiveNav('contact')} className={`${activeNav === 'contact' ? 'text-white' : 'text-white/80'} hover:text-white font-medium text-sm transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 ${activeNav === 'contact' ? 'after:w-full' : 'after:w-0 hover:after:w-full'} after:h-[2px] after:bg-[#00a896] after:transition-all after:duration-300`}>Hubungi</a>
                    </nav>

                    {/* Mobile Menu Actions */}
                    <div className="flex items-center gap-4 md:hidden">
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
                        onClick={() => { setMobileMenuOpen(false); setActiveNav('destinations'); }}
                        className={`${activeNav === 'destinations' ? 'text-[#00a896]' : 'text-white/80 hover:text-white'} font-medium text-lg transition-colors`}
                    >
                        Destinasi
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white/80 hover:text-white font-medium text-lg transition-colors"
                    >
                        Tentang Kami
                    </Link>
                    <a
                        href="#contact"
                        onClick={() => { setMobileMenuOpen(false); setActiveNav('contact'); }}
                        className={`${activeNav === 'contact' ? 'text-[#00a896]' : 'text-white/80'} hover:text-white font-medium text-lg transition-colors`}
                    >
                        Hubungi
                    </a>
                </div>
            </header>

            {/* Static Hero Section */}
            <section
                className="relative h-[45vh] min-h-[350px] flex items-center text-white bg-no-repeat bg-center bg-cover overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(11, 19, 43, 0.8) 0%, rgba(2, 128, 144, 0.45) 100%), url('/image/hero.jpeg')`
                }}
            >
                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center justify-center text-center mt-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 font-heading leading-tight animate-fade-in">
                        Explore Destinations
                    </h1>
                    <div className="w-16 h-1 bg-[#00a896] mb-4 rounded-full"></div>
                    <p className="max-w-[600px] text-white/80 text-base md:text-lg font-light leading-relaxed">
                        Pilih destinasi impian Anda dan temukan pengalaman terbaik menjelajah keindahan Aceh bersama kami.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <main className="py-24 max-w-7xl mx-auto px-6">
                {!selectedDest ? (
                    // 1. LIST VIEW (Matches screenshot format)
                    <div className="animate-fade-in">
                        {/* Section Header (2-column layout like reference image) */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div className="max-w-[450px]">
                                <h2 className="text-4xl md:text-5xl text-[#1e293b] font-extrabold tracking-tight mb-2 font-heading">
                                    Explore more
                                </h2>
                                <p className="text-[#00a896] text-lg font-medium">
                                    Let's go on an adventure
                                </p>
                            </div>
                            <div className="max-w-[500px]">
                                <p className="text-[#64748b] text-sm md:text-base leading-relaxed">
                                    Temukan keindahan alam, kekayaan sejarah, dan pesona budaya tersembunyi di Provinsi Aceh bersama Pasee Trip.
                                </p>
                            </div>
                        </div>

                        {/* Cards Grid - 4 Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {destinationsList.map((dest) => (
                                <div
                                    key={dest.id}
                                    onClick={() => setSelectedDest(dest)}
                                    className="flex flex-col gap-4 group cursor-pointer"
                                >
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300">
                                        <img
                                            src={dest.image}
                                            alt={dest.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Rating Badge */}
                                        <div className="absolute top-4 right-4 bg-white/95 text-slate-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                                            <i className="bi bi-star-fill text-amber-500"></i> {dest.rating}
                                        </div>
                                    </div>
                                    <div className="px-2">
                                        <h3 className="text-lg font-bold text-[#1e293b] leading-snug group-hover:text-[#00a896] transition-colors">
                                            {dest.title}
                                        </h3>
                                        <p className="text-xs text-[#64748b] font-medium flex items-center gap-1 mt-1">
                                            <i className="bi bi-geo-alt-fill text-[#00a896]"></i> {dest.location}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    // 2. DETAIL VIEW (Matches conditional flyer / fallback style)
                    <div className="animate-fade-in max-w-4xl mx-auto">
                        {/* Back / Navigation button */}
                        <button
                            onClick={() => setSelectedDest(null)}
                            className="flex items-center gap-2 text-[#00a896] hover:text-[#028090] font-bold text-base transition-colors mb-8 focus:outline-none"
                        >
                            <i className="bi bi-arrow-left text-xl"></i> Kembali ke Daftar Destinasi
                        </button>

                        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-md">
                            <div className="text-center mb-8">
                                <span className="text-[#00a896] font-bold text-xs uppercase tracking-widest mb-2 inline-block">Detail Destinasi</span>
                                <h2 className="text-3xl md:text-4xl text-[#1e293b] font-extrabold font-heading">{selectedDest.title}</h2>
                                <p className="text-[#64748b] text-sm mt-1">{selectedDest.location}</p>
                            </div>

                            {selectedDest.hasPackage ? (
                                // Render promotional image flyer
                                <div className="flex flex-col items-center gap-8">
                                    <div className="w-full border border-slate-200 rounded-2xl overflow-hidden shadow-inner">
                                        <img
                                            src={selectedDest.promoImage}
                                            alt={`Promo ${selectedDest.title}`}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="text-center max-w-[600px]">
                                        <h4 className="text-xl font-bold text-[#1e293b] mb-3">Paket Promo Aktif Tersedia!</h4>
                                        <p className="text-sm text-[#64748b] leading-relaxed mb-6">
                                            Akomodasi, transportasi, pemandu, dan konsumsi sudah termasuk di dalam paket ini. Klik tombol di bawah untuk pesan langsung via WhatsApp.
                                        </p>
                                        <a
                                            href={`https://wa.me/6285967053617?text=${encodeURIComponent(selectedDest.waMessage)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#25d366] text-white px-9 py-4 rounded-xl font-heading font-bold text-base inline-flex items-center gap-2.5 transition-all duration-300 hover:bg-[#20ba5a] hover:scale-105 shadow-[0_6px_20px_rgba(37,211,102,0.3)]"
                                        >
                                            <i className="bi bi-whatsapp text-xl"></i> Hubungi WhatsApp untuk Pemesanan
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                // Render fallback "Belum ada trip ke sini"
                                <div className="text-center py-12 px-6 border border-dashed border-slate-200 rounded-2xl bg-slate-50/55 flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-slate-200/70 text-slate-500 flex items-center justify-center text-3xl mb-5">
                                        <i className="bi bi-info-circle"></i>
                                    </div>
                                    <h4 className="text-2xl font-bold text-[#1e293b] mb-3">Belum ada trip ke sini</h4>
                                    <p className="text-[#64748b] text-sm max-w-[500px] leading-relaxed mb-8">
                                        Maaf, saat ini paket perjalanan reguler untuk <strong>{selectedDest.title}</strong> belum terbit di katalog online kami. Namun, Anda dapat merencanakan perjalanan kustom eksklusif bersama tim kami.
                                    </p>
                                    <a
                                        href={`https://wa.me/6285967053617?text=${encodeURIComponent(selectedDest.waMessage)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#00a896] text-white px-8 py-3.5 rounded-xl font-heading font-bold text-sm inline-flex items-center gap-2.5 transition-all duration-300 hover:bg-[#028090] hover:scale-105 shadow-[0_6px_20px_rgba(0,168,150,0.3)]"
                                    >
                                        <i className="bi bi-whatsapp text-lg"></i> Hubungi WA untuk Trip Kustom
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>

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
                                <a href="https://www.instagram.com/paseetrip?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="bg-white/5 w-10 h-10 rounded-full flex items-center justify-center text-white text-base border border-white/10 hover:bg-[#028090] hover:border-[#028090] hover:-translate-y-0.5 transition-all duration-300" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                                <a href="https://wa.me/6285967053617" target="_blank" rel="noopener noreferrer" className="bg-white/5 w-10 h-10 rounded-full flex items-center justify-center text-white text-base border border-white/10 hover:bg-[#25d366] hover:border-[#25d366] hover:-translate-y-0.5 transition-all duration-300" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-semibold mb-6 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[2px] after:bg-[#00a896] font-heading font-bold">Perusahaan</h3>
                            <ul className="flex flex-col gap-3 text-sm">
                                <li><Link href="/" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Beranda</Link></li>
                                <li><Link href="/destinations" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Destinasi Populer</Link></li>
                                <li><Link href="/#why-us" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Kelebihan Kami</Link></li>
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
                                    <i className="bi bi-geo-alt-fill text-[#00a896] text-base mt-0.5 flex-shrink-0"></i>
                                    <span>Jl. Lintas Sumatera No 38 , Blang Naleung Mameh, Kec. Muara Satu, Kota Lhokseumawe, Aceh</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <i className="bi bi-envelope-fill text-[#00a896] text-base mt-0.5 flex-shrink-0"></i>
                                    <span>-</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <i className="bi bi-telephone-fill text-[#00a896] text-base mt-0.5 flex-shrink-0"></i>
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


        </div>
    );
}
