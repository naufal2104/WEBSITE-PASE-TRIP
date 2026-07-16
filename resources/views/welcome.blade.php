<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="PASEE TRIP - Agen Perjalanan & Wisata Terbaik. Temukan keindahan tersembunyi, pantai tropis, dan pengalaman budaya tak terlupakan bersama kami.">
    <meta name="keywords" content="pasee trip, travel aceh, wisata sabang, pantai lhoknga, kepulauan banyak, paket wisata murah, travel agent indonesia">
    <title>PASEE TRIP | Jelajahi Keindahan Surga Tersembunyi</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
    
    <!-- Custom CSS Stylesheet -->
    <style>
        :root {
            /* Colors */
            --primary: #028090;
            --primary-dark: #005f73;
            --primary-light: #00a896;
            --accent: #f4a261;
            --accent-dark: #e76f51;
            --bg-dark: #0b132b;
            --bg-light: #f8fafc;
            --text-dark: #1e293b;
            --text-light: #f8fafc;
            --text-muted: #64748b;
            --glass-bg: rgba(255, 255, 255, 0.08);
            --glass-border: rgba(255, 255, 255, 0.15);
            --shadow-sm: 0 2px 8px rgba(0,0,0,0.05);
            --shadow-md: 0 10px 30px rgba(0,0,0,0.08);
            --shadow-lg: 0 20px 40px rgba(0,0,0,0.12);
            --radius-sm: 8px;
            --radius-md: 16px;
            --radius-lg: 24px;
            
            /* Fonts */
            --font-heading: 'Outfit', sans-serif;
            --font-body: 'Plus Jakarta Sans', sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            font-family: var(--font-body);
            color: var(--text-dark);
            background-color: var(--bg-light);
            overflow-x: hidden;
            line-height: 1.6;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-heading);
            font-weight: 700;
        }

        a {
            text-decoration: none;
            color: inherit;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        ul {
            list-style: none;
        }

        img {
            max-width: 100%;
            height: auto;
            display: block;
        }

        .container {
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* --- Custom Scrollbar --- */
        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--primary);
            border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: var(--primary-dark);
        }

        /* --- Animations --- */
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 15px rgba(2, 128, 144, 0.4); }
            50% { box-shadow: 0 0 25px rgba(0, 168, 156, 0.8); }
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* --- Header / Navbar --- */
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            transition: all 0.4s ease;
            padding: 20px 0;
        }

        header.scrolled {
            background: rgba(11, 19, 43, 0.85);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            padding: 14px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .logo {
            font-size: 24px;
            font-weight: 800;
            color: var(--text-light);
            display: flex;
            align-items: center;
            gap: 8px;
            letter-spacing: 1px;
        }

        .logo i {
            color: var(--primary-light);
            font-size: 28px;
        }

        .nav-menu {
            display: flex;
            align-items: center;
            gap: 32px;
        }

        .nav-link {
            color: rgba(255, 255, 255, 0.8);
            font-weight: 500;
            font-size: 15px;
            position: relative;
            padding: 6px 0;
        }

        .nav-link:hover, .nav-link.active {
            color: var(--text-light);
        }

        .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--primary-light);
            transition: width 0.3s ease;
        }

        .nav-link:hover::after, .nav-link.active::after {
            width: 100%;
        }

        .nav-btn {
            background-color: var(--primary-light);
            color: var(--text-light);
            padding: 10px 24px;
            border-radius: var(--radius-sm);
            font-weight: 600;
            font-size: 14px;
            border: 1px solid transparent;
            box-shadow: 0 4px 14px rgba(0, 168, 150, 0.3);
        }

        .nav-btn:hover {
            background-color: transparent;
            color: var(--primary-light);
            border-color: var(--primary-light);
            box-shadow: none;
            transform: translateY(-2px);
        }

        .mobile-toggle {
            display: none;
            color: var(--text-light);
            font-size: 28px;
            cursor: pointer;
        }

        /* --- Hero Section --- */
        .hero {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            color: var(--text-light);
            padding-top: 100px;
            padding-bottom: 80px;
            background: linear-gradient(135deg, rgba(11, 19, 43, 0.8) 0%, rgba(2, 128, 144, 0.45) 50%, rgba(11, 19, 43, 0.8) 100%), 
                        url("{{ asset('image/hero.jpeg') }}") no-repeat center center/cover;
            overflow: hidden;
        }

        /* Fancy Hero Wave Divider at Bottom */
        .hero-wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
            transform: rotate(180deg);
        }

        .hero-wave svg {
            position: relative;
            display: block;
            width: calc(130% + 1.3px);
            height: 50px;
        }

        .hero-wave .shape-fill {
            fill: var(--bg-light);
        }

        .hero-content {
            max-width: 750px;
            z-index: 10;
            animation: slideInUp 0.8s ease-out;
        }

        .hero-badge {
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 24px;
            color: var(--primary-light);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        .hero-badge i {
            font-size: 16px;
            animation: float 2s infinite ease-in-out;
        }

        .hero-title {
            font-size: clamp(36px, 5vw, 62px);
            line-height: 1.15;
            margin-bottom: 20px;
            font-weight: 800;
            letter-spacing: -1px;
        }

        .hero-title span {
            background: linear-gradient(to right, #ffffff, var(--primary-light), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
            font-size: clamp(16px, 2vw, 19px);
            margin-bottom: 40px;
            color: rgba(255, 255, 255, 0.85);
            font-weight: 300;
            max-width: 650px;
        }

        /* --- Floating Search Widget --- */
        .search-widget {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: var(--radius-md);
            padding: 24px;
            box-shadow: var(--shadow-lg);
            z-index: 20;
            margin-top: 10px;
            animation: slideInUp 1s ease-out;
            width: 100%;
        }

        .search-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            align-items: center;
        }

        .search-item {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .search-item:not(:last-child)::after {
            content: '';
            position: absolute;
            right: -8px;
            top: 15%;
            height: 70%;
            width: 1px;
            background-color: rgba(255, 255, 255, 0.15);
        }

        .search-item label {
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: rgba(255, 255, 255, 0.7);
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .search-item label i {
            color: var(--primary-light);
        }

        .search-input-wrapper {
            position: relative;
        }

        .search-input-wrapper select,
        .search-input-wrapper input {
            width: 100%;
            background: transparent;
            border: none;
            outline: none;
            color: var(--text-light);
            font-family: var(--font-body);
            font-size: 15px;
            font-weight: 600;
            padding: 8px 0;
            cursor: pointer;
        }

        .search-input-wrapper select option {
            background-color: var(--bg-dark);
            color: var(--text-light);
        }

        /* Customizing date picker icon */
        .search-input-wrapper input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(1);
            cursor: pointer;
        }

        .search-btn {
            background-color: var(--accent);
            color: var(--bg-dark);
            border: none;
            padding: 14px 28px;
            border-radius: var(--radius-sm);
            font-family: var(--font-heading);
            font-weight: 700;
            font-size: 16px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: all 0.3s ease;
            box-shadow: 0 6px 20px rgba(244, 162, 97, 0.4);
            height: 52px;
            align-self: flex-end;
        }

        .search-btn:hover {
            background-color: var(--accent-dark);
            color: var(--text-light);
            box-shadow: 0 8px 25px rgba(231, 111, 81, 0.6);
            transform: translateY(-2px);
        }

        /* --- Section Styling --- */
        .section {
            padding: 100px 0;
        }

        .section-header {
            text-align: center;
            max-width: 600px;
            margin: 0 auto 60px;
        }

        .section-badge {
            color: var(--primary);
            font-weight: 700;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 12px;
            display: inline-block;
        }

        .section-title {
            font-size: clamp(28px, 3.5vw, 38px);
            color: var(--text-dark);
            margin-bottom: 16px;
            font-weight: 800;
            letter-spacing: -0.5px;
        }

        .section-subtitle {
            color: var(--text-muted);
            font-size: 16px;
        }

        /* --- Popular Destinations Section --- */
        .destinations-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }

        .dest-card {
            background-color: white;
            border-radius: var(--radius-md);
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
        }

        .dest-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-lg);
        }

        .dest-img-container {
            position: relative;
            height: 280px;
            overflow: hidden;
        }

        .dest-img-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }

        .dest-card:hover .dest-img-container img {
            transform: scale(1.1);
        }

        .dest-tag {
            position: absolute;
            top: 20px;
            right: 20px;
            background-color: var(--primary);
            color: white;
            padding: 6px 14px;
            border-radius: 50px;
            font-size: 12px;
            font-weight: 600;
            box-shadow: 0 4px 10px rgba(2, 128, 144, 0.3);
        }

        .dest-content {
            padding: 24px;
        }

        .dest-rating {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 13px;
            font-weight: 600;
            color: var(--accent-dark);
            margin-bottom: 10px;
        }

        .dest-title {
            font-size: 20px;
            color: var(--text-dark);
            margin-bottom: 8px;
            font-weight: 700;
        }

        .dest-desc {
            color: var(--text-muted);
            font-size: 14px;
            margin-bottom: 20px;
        }

        .dest-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid #f1f5f9;
            padding-top: 18px;
        }

        .dest-price {
            font-size: 14px;
            color: var(--text-muted);
        }

        .dest-price span {
            display: block;
            font-size: 20px;
            font-weight: 800;
            color: var(--primary);
            margin-top: 2px;
        }

        .dest-link {
            background-color: #f1f5f9;
            color: var(--text-dark);
            width: 44px;
            height: 44px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
        }

        .dest-card:hover .dest-link {
            background-color: var(--primary);
            color: white;
            transform: rotate(-45deg);
        }

        /* --- Why Choose Us Section --- */
        .features {
            background-color: #f1f5f9;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }

        .feature-card {
            background: white;
            padding: 40px 30px;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-sm);
            transition: all 0.3s ease;
            text-align: center;
            border-bottom: 4px solid transparent;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            border-bottom-color: var(--primary);
            box-shadow: var(--shadow-md);
        }

        .feature-icon {
            width: 70px;
            height: 70px;
            border-radius: 50px;
            background-color: rgba(2, 128, 144, 0.1);
            color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            margin: 0 auto 24px;
            transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
            background-color: var(--primary);
            color: white;
            transform: rotateY(180deg);
        }

        .feature-title {
            font-size: 20px;
            margin-bottom: 12px;
            font-weight: 700;
        }

        .feature-desc {
            color: var(--text-muted);
            font-size: 14px;
            line-height: 1.6;
        }

        /* --- Call to Action Section --- */
        .cta-section {
            background: linear-gradient(135deg, rgba(11, 19, 43, 0.95) 0%, rgba(2, 128, 144, 0.9) 100%), 
                        url("{{ asset('image/hero.jpeg') }}") no-repeat center center/cover;
            color: white;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .cta-content {
            max-width: 650px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
        }

        .cta-title {
            font-size: clamp(28px, 4vw, 42px);
            margin-bottom: 16px;
            font-weight: 800;
        }

        .cta-desc {
            font-size: 17px;
            color: rgba(255, 255, 255, 0.85);
            margin-bottom: 32px;
            font-weight: 300;
        }

        .cta-btn {
            background-color: var(--accent);
            color: var(--bg-dark);
            padding: 16px 36px;
            border-radius: var(--radius-sm);
            font-weight: 700;
            font-family: var(--font-heading);
            display: inline-flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 6px 20px rgba(244, 162, 97, 0.4);
        }

        .cta-btn:hover {
            background-color: var(--accent-dark);
            color: white;
            box-shadow: 0 8px 25px rgba(231, 111, 81, 0.6);
            transform: translateY(-3px);
        }

        /* --- Footer --- */
        footer {
            background-color: var(--bg-dark);
            color: rgba(255, 255, 255, 0.7);
            padding: 80px 0 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-grid {
            display: grid;
            grid-template-columns: 2fr repeat(3, 1fr);
            gap: 40px;
            margin-bottom: 60px;
        }

        .footer-about .logo {
            color: white;
            margin-bottom: 20px;
        }

        .footer-desc {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 24px;
            color: rgba(255, 255, 255, 0.6);
        }

        .social-links {
            display: flex;
            gap: 12px;
        }

        .social-links a {
            background-color: rgba(255, 255, 255, 0.05);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-links a:hover {
            background-color: var(--primary);
            border-color: var(--primary);
            transform: translateY(-3px);
        }

        .footer-title {
            color: white;
            font-size: 18px;
            margin-bottom: 24px;
            font-weight: 600;
            position: relative;
            padding-bottom: 10px;
        }

        .footer-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 30px;
            height: 2px;
            background-color: var(--primary-light);
        }

        .footer-links li {
            margin-bottom: 12px;
        }

        .footer-links a {
            font-size: 14px;
        }

        .footer-links a:hover {
            color: var(--primary-light);
            padding-left: 6px;
        }

        .footer-contact li {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 16px;
            font-size: 14px;
        }

        .footer-contact i {
            color: var(--primary-light);
            font-size: 16px;
            margin-top: 3px;
        }

        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            padding-top: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.5);
        }

        /* --- Floating WhatsApp Button --- */
        .wa-floating {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background-color: #25d366;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
            z-index: 999;
            transition: all 0.3s ease;
            animation: pulse-glow 2s infinite;
        }

        .wa-floating:hover {
            transform: scale(1.1) rotate(10deg);
        }

        /* --- Responsive Queries --- */
        @media (max-width: 1024px) {
            .search-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
            }
            .search-item:nth-child(2)::after {
                display: none;
            }
            .destinations-grid, .features-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .footer-grid {
                grid-template-columns: 1.5fr 1fr;
            }
        }

        @media (max-width: 768px) {
            header {
                padding: 16px 0;
                background: rgba(11, 19, 43, 0.95);
            }

            .mobile-toggle {
                display: block;
            }

            .nav-menu {
                position: fixed;
                top: 70px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 70px);
                background-color: var(--bg-dark);
                flex-direction: column;
                justify-content: flex-start;
                padding-top: 50px;
                gap: 24px;
                transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                border-top: 1px solid rgba(255, 255, 255, 0.05);
            }

            .nav-menu.active {
                left: 0;
            }

            .nav-link {
                font-size: 18px;
            }

            .search-grid {
                grid-template-columns: 1fr;
            }

            .search-item::after {
                display: none !important;
            }

            .destinations-grid, .features-grid {
                grid-template-columns: 1fr;
            }

            .footer-grid {
                grid-template-columns: 1fr;
                gap: 30px;
            }

            .footer-bottom {
                flex-direction: column;
                gap: 12px;
                text-align: center;
            }
        }
    </style>
</head>
<body>

    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/6285967053617?text=Halo%20Pasee%20Trip,%20saya%20ingin%20tanya%20paket%20wisata" class="wa-floating" target="_blank" rel="noopener noreferrer" id="waButton">
        <i class="bi bi-whatsapp"></i>
    </a>

    <!-- Header / Navigation -->
    <header id="mainHeader">
        <div class="container">
            <div class="nav-wrapper">
                <a href="#" class="logo" id="logoLink">
                    <img src="{{ asset('image/logobrand.png') }}" alt="PASEE TRIP Logo" style="height: 40px; width: auto; object-fit: contain;">
                </a>
                
                <nav class="nav-menu" id="navMenu">
                    <a href="#home" class="nav-link active">Beranda</a>
                    <a href="#destinations" class="nav-link">Destinasi</a>
                    <a href="#why-us" class="nav-link">Tentang Kami</a>
                    <a href="#contact" class="nav-link">Hubungi Kami</a>
                    <a href="#booking" class="nav-btn">Pesan Sekarang</a>
                </nav>
                
                <div class="mobile-toggle" id="mobileToggle">
                    <i class="bi bi-list"></i>
                </div>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">Jelajahi Surga Dunia Bersama <span>Pasee Trip</span></h1>
                <p class="hero-subtitle">Nikmati keindahan pesisir pantai biru, pepohonan hijau rindang, dan petualangan menakjubkan yang dirancang khusus untuk mewujudkan liburan impian Anda.</p>
            </div>
            
            <!-- Booking Widget -->
            <div class="search-widget" id="booking">
                <form action="#" method="GET" onsubmit="event.preventDefault(); alert('Mencari trip perjalanan terbaik untuk Anda...');">
                    <div class="search-grid">
                        <div class="search-item">
                            <label><i class="bi bi-geo-alt-fill"></i> Destinasi</label>
                            <div class="search-input-wrapper">
                                <select name="destination" id="destinationSelect" required>
                                    <option value="" disabled selected>Pilih Lokasi...</option>
                                    <option value="lhoknga">Pantai Lhoknga (Aceh)</option>
                                    <option value="sabang">Pulau Weh (Sabang)</option>
                                    <option value="banyak">Kepulauan Banyak</option>
                                    <option value="takengon">Danau Lut Tawar (Takengon)</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="search-item">
                            <label><i class="bi bi-calendar-event-fill"></i> Tanggal Perjalanan</label>
                            <div class="search-input-wrapper">
                                <input type="date" name="travel_date" id="dateInput" required>
                            </div>
                        </div>
                        
                        <div class="search-item">
                            <label><i class="bi bi-people-fill"></i> Jumlah Peserta</label>
                            <div class="search-input-wrapper">
                                <select name="guests" id="guestsSelect" required>
                                    <option value="1">1 Orang</option>
                                    <option value="2">2 Orang (Pasangan)</option>
                                    <option value="3-5">3 - 5 Orang (Keluarga)</option>
                                    <option value="6+">Lebih dari 5 Orang (Grup)</option>
                                </select>
                            </div>
                        </div>
                        
                        <button type="submit" class="search-btn" id="searchBtn">
                            <i class="bi bi-search"></i> Cari Trip
                        </button>
                    </div>
                </form>
            </div>
        </div>
        

    </section>

    <!-- Popular Destinations Section -->
    <section class="section container" id="destinations">
        <div class="section-header">
            <span class="section-badge">Destinasi Terpopuler</span>
            <h2 class="section-title">Tempat Wisata Impian Anda</h2>
            <p class="section-subtitle">Daftar lokasi wisata tropis dengan penilaian tertinggi dari para petualang yang telah berlibur bersama kami.</p>
        </div>
        
        <div class="destinations-grid">
            <!-- Destination 1 -->
            <div class="dest-card">
                <div class="dest-img-container">
                    <img src="{{ asset('image/hero.jpeg') }}" alt="Pantai Lhoknga">
                    <div class="dest-tag">Paling Populer</div>
                </div>
                <div class="dest-content">
                    <div class="dest-rating">
                        <i class="bi bi-star-fill"></i> 4.9 (120+ Ulasan)
                    </div>
                    <h3 class="dest-title">Pantai Lhoknga, Aceh</h3>
                    <p class="dest-desc">Menikmati matahari terbenam yang memukau di tepi laut biru jernih dengan suasana tebing batu yang gagah menawan.</p>
                    <div class="dest-footer">
                        <div class="dest-price">
                            Mulai dari
                            <span>Rp 1.499.000</span>
                        </div>
                        <a href="https://wa.me/6285967053617?text=Halo%20saya%20mau%20bertanya%20soal%20destinasi%20Pantai%20Lhoknga%20dengan%20harga%20Rp%201.499.000" class="dest-link" target="_blank" rel="noopener noreferrer"><i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            
            <!-- Destination 2 -->
            <div class="dest-card">
                <div class="dest-img-container">
                    <img src="{{ asset('image/hero.jpeg') }}" alt="Pulau Weh Sabang" style="filter: hue-rotate(15deg) saturate(1.1);">
                    <div class="dest-tag">Best Seller</div>
                </div>
                <div class="dest-content">
                    <div class="dest-rating">
                        <i class="bi bi-star-fill"></i> 4.8 (95+ Ulasan)
                    </div>
                    <h3 class="dest-title">Kepulauan Sabang (Pulau Weh)</h3>
                    <p class="dest-desc">Surga bawah laut bagi pecinta diving dan snorkeling dengan air super jernih dan keanekaragaman terumbu karang tropis.</p>
                    <div class="dest-footer">
                        <div class="dest-price">
                            Mulai dari
                            <span>Rp 2.199.000</span>
                        </div>
                        <a href="https://wa.me/6285967053617?text=Halo%20saya%20mau%20bertanya%20soal%20destinasi%20Kepulauan%20Sabang%20dengan%20harga%20Rp%202.199.000" class="dest-link" target="_blank" rel="noopener noreferrer"><i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            
            <!-- Destination 3 -->
            <div class="dest-card">
                <div class="dest-img-container">
                    <img src="{{ asset('image/hero.jpeg') }}" alt="Kepulauan Banyak" style="filter: saturate(1.2) brightness(1.05);">
                    <div class="dest-tag">Petualangan</div>
                </div>
                <div class="dest-content">
                    <div class="dest-rating">
                        <i class="bi bi-star-fill"></i> 4.9 (80+ Ulasan)
                    </div>
                    <h3 class="dest-title">Kepulauan Banyak, Singkil</h3>
                    <p class="dest-desc">Gugusan pulau pasir putih tak berpenghuni yang tenang, dikelilingi ribuan pohon kelapa eksotis yang memanjakan mata.</p>
                    <div class="dest-footer">
                        <div class="dest-price">
                            Mulai dari
                            <span>Rp 2.899.000</span>
                        </div>
                        <a href="https://wa.me/6285967053617?text=Halo%20saya%20mau%20bertanya%20soal%20destinasi%20Kepulauan%20Banyak%20dengan%20harga%20Rp%202.899.000" class="dest-link" target="_blank" rel="noopener noreferrer"><i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us / Features Section -->
    <section class="section features" id="why-us">
        <div class="container">
            <div class="section-header">
                <span class="section-badge">Kelebihan Kami</span>
                <h2 class="section-title">Mengapa Memilih Pasee Trip?</h2>
                <p class="section-subtitle">Kami berkomitmen memberikan kenyamanan dan pengalaman liburan tak terlupakan seumur hidup Anda.</p>
            </div>
            
            <div class="features-grid">
                <!-- Feature 1 -->
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="bi bi-shield-check"></i>
                    </div>
                    <h3 class="feature-title">Perjalanan Aman</h3>
                    <p class="feature-desc">Asuransi perjalanan lengkap, armada transportasi prima, serta pemandu wisata lokal yang profesional dan berlisensi resmi.</p>
                </div>
                
                <!-- Feature 2 -->
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="bi bi-wallet2"></i>
                    </div>
                    <h3 class="feature-title">Harga Terbaik & Transparan</h3>
                    <p class="feature-desc">Tidak ada biaya tersembunyi. Layanan akomodasi premium, makan, dan tiket masuk wisata sudah termasuk di dalam paket pilihan Anda.</p>
                </div>
                
                <!-- Feature 3 -->
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="bi bi-emoji-smile"></i>
                    </div>
                    <h3 class="feature-title">Pelayanan Prima 24/7</h3>
                    <p class="feature-desc">Tim customer support kami selalu siaga kapan pun Anda membutuhkan bantuan selama masa persiapan hingga perjalanan wisata selesai.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action Section -->
    <section class="section cta-section">
        <div class="container">
            <div class="cta-content">
                <h2 class="cta-title">Siap Memulai Liburan Impian Anda?</h2>
                <p class="cta-desc">Dapatkan diskon khusus hingga 15% untuk pemesanan pertama Anda hari ini. Hubungi kami sekarang dan sesuaikan rencana perjalanan Anda sesuka hati.</p>
                <a href="https://wa.me/6285967053617?text=Halo%20Pasee%20Trip,%20saya%20ingin%20klaim%20diskon%2015%25%20dan%20tanya%20paket%20wisata" class="cta-btn" id="ctaBtn" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-whatsapp"></i> Hubungi WhatsApp Kami
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-about">
                    <a href="#" class="logo">
                        <img src="{{ asset('image/logobrand.png') }}" alt="PASEE TRIP Logo" style="height: 40px; width: auto; object-fit: contain;">
                    </a>
                    <p class="footer-desc">Pasee Trip adalah agen wisata tepercaya yang berkomitmen menyajikan keindahan pariwisata alam Indonesia secara profesional, berkelanjutan, dan penuh keseruan.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                        <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                        <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                        <a href="#" aria-label="TikTok"><i class="bi bi-tiktok"></i></a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-title">Tautan Cepat</h3>
                    <ul class="footer-links">
                        <li><a href="#home">Beranda</a></li>
                        <li><a href="#destinations">Destinasi Populer</a></li>
                        <li><a href="#why-us">Kelebihan Kami</a></li>
                        <li><a href="#booking">Pesan Tiket</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="footer-title">Destinasi</h3>
                    <ul class="footer-links">
                        <li><a href="#destinations">Pantai Lhoknga</a></li>
                        <li><a href="#destinations">Kepulauan Sabang</a></li>
                        <li><a href="#destinations">Kepulauan Banyak</a></li>
                        <li><a href="#destinations">Danau Lut Tawar</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="footer-title">Hubungi Kami</h3>
                    <ul class="footer-contact">
                        <li>
                            <i class="bi bi-geo-alt-fill"></i>
                            <span>Jl. Samudera No. 45, Banda Aceh, Indonesia</span>
                        </li>
                        <li>
                            <i class="bi bi-envelope-fill"></i>
                            <span>info@paseetrip.com</span>
                        </li>
                        <li>
                            <i class="bi bi-telephone-fill"></i>
                            <span>+62 859-6705-3617</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2026 PASEE TRIP. Seluruh Hak Cipta Dilindungi.</p>
                <p>Designed with <i class="bi bi-heart-fill" style="color: var(--accent-dark);"></i> for beautiful destinations</p>
            </div>
        </div>
    </footer>

    <!-- Interactive Scripting -->
    <script>
        // Change Navbar Background Style on Scroll
        const header = document.getElementById('mainHeader');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Toggle Mobile Navigation Drawer
        const mobileToggle = document.getElementById('mobileToggle');
        const navMenu = document.getElementById('navMenu');
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Toggle list and close icon
            const icon = mobileToggle.querySelector('i');
            if (icon.classList.contains('bi-list')) {
                icon.classList.replace('bi-list', 'bi-x-lg');
            } else {
                icon.classList.replace('bi-x-lg', 'bi-list');
            }
        });

        // Close Mobile Menu on NavLink click
        const navLinks = document.querySelectorAll('.nav-link, .nav-btn');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.replace('bi-x-lg', 'bi-list');
            });
        });

        // Highlight Active Link on Scroll
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });
    </script>
</body>
</html>