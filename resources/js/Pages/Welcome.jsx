import { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    // State hooks for interactivity
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [bookingForm, setBookingForm] = useState({
        destination: ''
    });
    const [activeNav, setActiveNav] = useState('beranda');

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

    // Handle search widget submit
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        alert(`Mencari trip terbaik ke ${bookingForm.destination.toUpperCase()}...`);
    };

    // Helper to generate dynamic WhatsApp link
    const getWaLink = (destinationName, price) => {
        const baseMsg = `Halo saya mau bertanya soal destinasi ${destinationName} dengan harga ${price}`;
        return `https://wa.me/6285967053617?text=${encodeURIComponent(baseMsg)}`;
    };

    return (
        <>
            <Head title="PASEE TRIP | Jelajahi Keindahan Surga Tersembunyi" />

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/6285967053617?text=Halo%20Pasee%20Trip,%20saya%20ingin%20tanya%20paket%20wisata"
                className="fixed bottom-[30px] right-[30px] w-[60px] height-[60px] h-[60px] bg-[#25d366] text-white rounded-full flex items-center justify-center text-3xl shadow-[0_6px_20px_rgba(37,211,102,0.4)] z-[999] hover:scale-110 hover:rotate-12 transition-all duration-300 animate-pulse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat WhatsApp"
            >
                <i className="bi bi-whatsapp"></i>
            </a>

            {/* Header / Navbar */}
            <header
                className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 py-5 ${
                    scrolled
                        ? 'bg-[#0b132b]/85 backdrop-blur-md shadow-lg border-b border-white/5 py-[14px]'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2">
                        <img src="/image/logobrand.png" alt="PASEE TRIP Logo" className="h-10 w-auto object-contain" />
                    </a>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#home" onClick={() => setActiveNav('beranda')} className={`${activeNav === 'beranda' ? 'text-white' : 'text-white/80'} hover:text-white font-medium text-sm transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 ${activeNav === 'beranda' ? 'after:w-full' : 'after:w-0'} after:h-[2px] after:bg-[#00a896] hover:after:w-full after:transition-all after:duration-300`}>Beranda</a>
                        <Link href="/destinations" className="text-white/80 hover:text-white font-medium text-sm transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00a896] hover:after:w-full after:transition-all after:duration-300">Destinasi</Link>
                        <Link href="/about" className="text-white/80 hover:text-white font-medium text-sm transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00a896] hover:after:w-full after:transition-all after:duration-300">Tentang Kami</Link>
                        <a href="#contact" onClick={() => setActiveNav('contact')} className={`${activeNav === 'contact' ? 'text-white' : 'text-white/80'} hover:text-white font-medium text-sm transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 ${activeNav === 'contact' ? 'after:w-full' : 'after:w-0'} after:h-[2px] after:bg-[#00a896] hover:after:w-full after:transition-all after:duration-300`}>Hubungi</a>
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
                    <a
                        href="#home"
                        onClick={() => { setMobileMenuOpen(false); setActiveNav('beranda'); }}
                        className={`${activeNav === 'beranda' ? 'text-[#00a896]' : 'text-white/80'} hover:text-white font-medium text-lg transition-colors`}
                    >
                        Beranda
                    </a>
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

            {/* Hero Section */}
            <section
                id="home"
                className="relative min-h-screen flex items-center text-white pt-24 pb-20 overflow-hidden"
            >
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/image/hero.jpeg"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src="/image/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay Gradient */}
                <div
                    className="absolute top-0 left-0 w-full h-full z-[1]"
                    style={{
                        backgroundImage:
                            "linear-gradient(135deg, rgba(11, 19, 43, 0.85) 0%, rgba(2, 128, 144, 0.5) 50%, rgba(11, 19, 43, 0.85) 100%)"
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center justify-center text-center">
                    <div className="max-w-[850px] animate-fade-in flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-5 font-heading">
                            Jelajahi Surga Dunia Bersama <span className="bg-gradient-to-r from-white via-[#00a896] to-[#f4a261] bg-clip-text text-transparent">Pasee Trip</span>
                        </h1>
                        <p className="text-base md:text-xl text-white/90 font-light leading-relaxed max-w-[650px] mb-8">
                            Nikmati keindahan Aceh dengan keluargamu, nyaman, dan tenang
                        </p>
                        <a
                            href="#destinations"
                            className="bg-[#00a896] text-white px-8 py-3.5 rounded-xl font-heading font-semibold text-base hover:bg-transparent hover:text-[#00a896] border border-[#00a896] hover:border-[#00a896] shadow-[0_4px_14px_rgba(0,168,150,0.3)] hover:shadow-none hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                        >
                            Lihat Destinasi Impianmu <i className="bi bi-arrow-down-short text-xl animate-bounce"></i>
                        </a>
                    </div>
                </div>


            </section>

            {/* Why Choose Us Section */}
            <section id="why-us" className="py-24 bg-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-[600px] mx-auto mb-16">
                        <span className="text-[#028090] font-bold text-sm uppercase tracking-widest mb-3 inline-block">Kelebihan Kami</span>
                        <h2 className="text-3xl md:text-4xl text-[#1e293b] font-extrabold tracking-tight mb-4 font-heading">Mengapa Memilih Pasee Trip?</h2>
                        <p className="text-[#64748b] text-base font-normal">Kami berkomitmen memberikan kenyamanan dan pengalaman liburan tak terlupakan seumur hidup Anda.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1.5 border-b-[4px] border-transparent hover:border-[#028090] transition-all duration-300 text-center group">
                            <div className="w-[70px] h-[70px] rounded-full bg-[#028090]/10 text-[#028090] flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-[#028090] group-hover:text-white group-hover:[transform:rotateY(180deg)] transition-all duration-500">
                                <i className="bi bi-shield-check"></i>
                            </div>
                            <h3 className="text-xl font-bold text-[#1e293b] mb-3 font-heading">Perjalanan Aman</h3>
                            <p className="text-[#64748b] text-sm leading-relaxed">Asuransi perjalanan lengkap, armada transportasi prima, serta pemandu wisata lokal yang profesional dan berlisensi resmi.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1.5 border-b-[4px] border-transparent hover:border-[#028090] transition-all duration-300 text-center group">
                            <div className="w-[70px] h-[70px] rounded-full bg-[#028090]/10 text-[#028090] flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-[#028090] group-hover:text-white group-hover:[transform:rotateY(180deg)] transition-all duration-500">
                                <i className="bi bi-wallet2"></i>
                            </div>
                            <h3 className="text-xl font-bold text-[#1e293b] mb-3 font-heading">Harga Terbaik & Transparan</h3>
                            <p className="text-[#64748b] text-sm leading-relaxed">Tidak ada biaya tersembunyi. Layanan akomodasi premium, makan, dan tiket masuk wisata sudah termasuk di dalam paket pilihan Anda.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1.5 border-b-[4px] border-transparent hover:border-[#028090] transition-all duration-300 text-center group">
                            <div className="w-[70px] h-[70px] rounded-full bg-[#028090]/10 text-[#028090] flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-[#028090] group-hover:text-white group-hover:[transform:rotateY(180deg)] transition-all duration-500">
                                <i className="bi bi-emoji-smile"></i>
                            </div>
                            <h3 className="text-xl font-bold text-[#1e293b] mb-3 font-heading">Pelayanan Prima 24/7</h3>
                            <p className="text-[#64748b] text-sm leading-relaxed">Tim customer support kami selalu siaga kapan pun Anda membutuhkan bantuan selama masa persiapan hingga perjalanan wisata selesai.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1.5 border-b-[4px] border-transparent hover:border-[#028090] transition-all duration-300 text-center group">
                            <div className="w-[70px] h-[70px] rounded-full bg-[#028090]/10 text-[#028090] flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-[#028090] group-hover:text-white group-hover:[transform:rotateY(180deg)] transition-all duration-500">
                                <i className="bi bi-house-check"></i>
                            </div>
                            <h3 className="text-xl font-bold text-[#1e293b] mb-3 font-heading">Penginapan & Makanan Terjamin</h3>
                            <p className="text-[#64748b] text-sm leading-relaxed">Menyediakan akomodasi penginapan yang bersih dan nyaman, serta sajian makanan lezat khas lokal yang terjamin kualitas dan kehalalannya.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Destinations Section */}
            <section id="destinations" className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center max-w-[600px] mx-auto mb-16">
                    <span className="text-[#028090] font-bold text-sm uppercase tracking-widest mb-3 inline-block">Destinasi Terpopuler</span>
                    <h2 className="text-3xl md:text-4xl text-[#1e293b] font-extrabold tracking-tight mb-4 font-heading">Tempat Wisata Impian Anda</h2>
                    <p className="text-[#64748b] text-base font-normal">Daftar lokasi wisata tropis dengan penilaian tertinggi dari para petualang yang telah berlibur bersama kami.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Destination Card 1 - Takengon */}
                    <div className="bg-white rounded-b-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-400 border border-slate-100 group">
                        <div className="relative w-full overflow-hidden">
                            <img
                                src="/image/destinasi/takengon.jpeg"
                                alt="Danau Lut Tawar Takengon"
                                className="w-full h-auto object-contain transition-transform duration-500"
                            />
                            <div className="absolute top-5 right-5 bg-[#028090] text-white px-[14px] py-[6px] rounded-full text-xs font-semibold shadow-md">
                                Dataran Tinggi
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[#e76f51] mb-2.5">
                                <i className="bi bi-star-fill"></i> 4.8 (95+ Ulasan)
                            </div>
                            <h3 className="text-xl font-bold text-[#1e293b] mb-2 font-heading">Danau Lut Tawar, Takengon</h3>
                            <p className="text-[#64748b] text-sm mb-5 leading-relaxed">Menikmati kesejukan dataran tinggi Gayo, pemandangan Danau Lut Tawar yang indah, dan cita rasa kopi arabika terbaik.</p>
                            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                                <div className="text-xs text-[#64748b]">
                                    Mulai dari
                                    <span className="block text-xl font-extrabold text-[#028090] mt-0.5">Rp 1.000.000</span>
                                </div>
                                <a
                                    href={getWaLink('Danau Lut Tawar, Takengon', 'Rp 1.000.000')}
                                    className="bg-slate-100 text-[#1e293b] w-11 h-11 rounded-full flex items-center justify-center text-lg transition-all duration-300 group-hover:bg-[#028090] group-hover:text-white group-hover:-rotate-45"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Destination Card 2 - Kilometer 0 */}
                    <div className="bg-white rounded-b-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-400 border border-slate-100 group">
                        <div className="relative w-full overflow-hidden">
                            <img
                                src="/image/destinasi/sabang_vip.png"
                                alt="Trip VIP To Sabang"
                                className="w-full h-auto object-contain transition-transform duration-500"
                            />
                            <div className="absolute top-5 right-5 bg-[#028090] text-white px-[14px] py-[6px] rounded-full text-xs font-semibold shadow-md">
                                Ujung Barat Indonesia
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[#e76f51] mb-2.5">
                                <i className="bi bi-star-fill"></i> 4.9 (110+ Ulasan)
                            </div>
                            <h3 className="text-xl font-bold text-[#1e293b] mb-2 font-heading">Trip VIP To Sabang</h3>
                            <p className="text-[#64748b] text-sm mb-5 leading-relaxed">Mengunjungi tugu penanda ujung barat Indonesia, menikmati keindahan bawah laut Pulau Weh, dan petualangan tropis eksotis.</p>
                            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                                <div className="text-xs text-[#64748b]">
                                    Mulai dari
                                    <span className="block text-xl font-extrabold text-[#028090] mt-0.5">Rp 1.500.000</span>
                                </div>
                                <a
                                    href={getWaLink('Trip VIP To Sabang', 'Rp 1.500.000')}
                                    className="bg-slate-100 text-[#1e293b] w-11 h-11 rounded-full flex items-center justify-center text-lg transition-all duration-300 group-hover:bg-[#028090] group-hover:text-white group-hover:-rotate-45"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Destination Card 3 - Banda Aceh */}
                    <div className="bg-white rounded-b-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-400 border border-slate-100 group">
                        <div className="relative w-full overflow-hidden">
                            <img
                                src="/image/destinasi/banda aceh.jpeg"
                                alt="Masjid Raya Baiturrahman Banda Aceh"
                                className="w-full h-auto object-contain transition-transform duration-500"
                            />
                            <div className="absolute top-5 right-5 bg-[#028090] text-white px-[14px] py-[6px] rounded-full text-xs font-semibold shadow-md">
                                Wisata Religi & Sejarah
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[#e76f51] mb-2.5">
                                <i className="bi bi-star-fill"></i> 4.9 (120+ Ulasan)
                            </div>
                            <h3 className="text-xl font-bold text-[#1e293b] mb-2 font-heading">Wisata Sejarah, Banda Aceh</h3>
                            <p className="text-[#64748b] text-sm mb-5 leading-relaxed">Menelusuri sejarah keagungan Masjid Raya Baiturrahman, Museum Tsunami, dan menikmati wisata kuliner khas Aceh yang mendunia.</p>
                            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                                <div className="text-xs text-[#64748b]">
                                    Mulai dari
                                    <span className="block text-xl font-extrabold text-[#028090] mt-0.5">Rp 1.299.000</span>
                                </div>
                                <a
                                    href={getWaLink('Wisata Sejarah, Banda Aceh', 'Rp 1.299.000')}
                                    className="bg-slate-100 text-[#1e293b] w-11 h-11 rounded-full flex items-center justify-center text-lg transition-all duration-300 group-hover:bg-[#028090] group-hover:text-white group-hover:-rotate-45"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action (CTA) Section */}
            <section
                className="py-24 text-white text-center relative overflow-hidden bg-no-repeat bg-center bg-cover"
                style={{
                    backgroundImage:
                        "linear-gradient(135deg, rgba(11, 19, 43, 0.95) 0%, rgba(2, 128, 144, 0.9) 100%), url('/image/hero.jpeg')"
                }}
            >
                <div className="max-w-[650px] mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 font-heading">Siap Memulai Liburan Impian Anda?</h2>
                    <p className="text-lg text-white/85 font-light leading-relaxed mb-8">
                        Dapatkan diskon khusus hingga 15% untuk pemesanan pertama Anda hari ini. Hubungi kami sekarang dan sesuaikan rencana perjalanan Anda sesuka hati.
                    </p>
                    <a
                        href="https://wa.me/6285967053617?text=Halo%20Pasee%20Trip,%20saya%20ingin%20klaim%20diskon%2015%25%20dan%20tanya%20paket%20wisata"
                        className="bg-[#f4a261] text-[#0b132b] px-9 py-4 rounded-lg font-heading font-bold text-base inline-flex items-center gap-2.5 transition-all duration-300 hover:bg-[#e76f51] hover:text-white shadow-[0_6px_20px_rgba(244,162,97,0.4)] hover:shadow-[0_8px_25px_rgba(231,111,81,0.6)] hover:-translate-y-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-whatsapp text-lg"></i> Hubungi WhatsApp Kami
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-[#0b132b] text-white/70 pt-20 pb-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
                        <div className="md:col-span-2">
                            <a href="#" className="flex items-center gap-2 mb-5">
                                <img src="/image/logobrand.png" alt="PASEE TRIP Logo" className="h-10 w-auto object-contain" />
                            </a>
                            <p className="text-sm leading-relaxed mb-6 text-white/60">
                                Pasee Trip adalah agen wisata tepercaya yang berkomitmen menyajikan keindahan pariwisata alam Indonesia secara profesional, berkelanjutan, dan penuh keseruan.
                            </p>
                            <div className="flex gap-3">
                                <a href="https://www.instagram.com/paseetrip?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="bg-white/5 w-10 h-10 rounded-full flex items-center justify-center text-white text-base border border-white/10 hover:bg-[#028090] hover:border-[#028090] hover:-translate-y-0.5 transition-all duration-300" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                                <a href="https://wa.me/6285967053617" target="_blank" rel="noopener noreferrer" className="bg-white/5 w-10 h-10 rounded-full flex items-center justify-center text-white text-base border border-white/10 hover:bg-[#25d366] hover:border-[#25d366] hover:-translate-y-0.5 transition-all duration-300" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-semibold mb-6 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[2px] after:bg-[#00a896] font-heading">Tautan Cepat</h3>
                            <ul className="flex flex-col gap-3 text-sm">
                                <li><a href="#home" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Beranda</a></li>
                                <li><a href="#destinations" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Destinasi Populer</a></li>
                                <li><a href="#why-us" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Kelebihan Kami</a></li>
                                <li><a href="#booking" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Pesan Tiket</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-semibold mb-6 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[2px] after:bg-[#00a896] font-heading">Destinasi</h3>
                            <ul className="flex flex-col gap-3 text-sm">
                                <li><a href="#destinations" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Pantai Lhoknga</a></li>
                                <li><a href="#destinations" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Kepulauan Sabang</a></li>
                                <li><a href="#destinations" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Kepulauan Banyak</a></li>
                                <li><a href="#destinations" className="hover:text-[#00a896] hover:pl-1 transition-all duration-300">Danau Lut Tawar</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-semibold mb-6 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[2px] after:bg-[#00a896] font-heading">Hubungi Kami</h3>
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


        </>
    );
}
