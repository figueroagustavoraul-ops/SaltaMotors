/* --- RESET GENERAL Y VARIABLES --- */
:root {
    --primary-color: #0f172a;    /* Azul Oscuro Premium */
    --secondary-color: #1e293b;  /* Variación pizarra */
    --accent-color: #2563eb;     /* Azul Eléctrico Moderno */
    --accent-hover: #1d4ed8;
    --success-color: #22c55e;    /* Verde WhatsApp */
    --background-light: #f8fafc; /* Fondo general */
    --card-bg: #ffffff;
    --text-main: #334155;
    --text-dark: #0f172a;
    --text-muted: #64748b;
    --font-heading: 'Montserrat', sans-serif;
    --font-body: 'Open Sans', sans-serif;
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--background-light);
    color: var(--text-main);
    font-family: var(--font-body);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

/* --- BOTONES --- */
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-family: var(--font-heading);
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition-smooth);
    border: none;
    text-align: center;
}

.btn-primary {
    background-color: var(--accent-color);
    color: white;
}
.btn-primary:hover {
    background-color: var(--accent-hover);
    transform: translateY(-1px);
}

.btn-secondary {
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    backdrop-filter: blur(5px);
}
.btn-secondary:hover {
    background-color: rgba(255, 255, 255, 0.3);
}

.btn-outline {
    background-color: transparent;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
}
.btn-outline:hover {
    background-color: var(--accent-color);
    color: white;
}

/* --- LOGO Y ENCABEZADO --- */
.main-header {
    background-color: var(--primary-color);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow-md);
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
}

.brand-logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
}
.brand-logo span { color: var(--accent-color); }

.nav-menu {
    display: flex;
    gap: 2rem;
}
.nav-link {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-family: var(--font-heading);
    transition: var(--transition-smooth);
}
.nav-link:hover { color: var(--accent-color); }

/* --- HERO SECTION --- */
.hero-section {
    background: url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;
    position: relative;
    padding: 8rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.hero-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.7));
}

.hero-content {
    position: relative;
    color: white;
    max-width: 800px;
    z-index: 5;
}

.badge {
    background-color: var(--accent-color);
    padding: 0.35rem 1rem;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    font-family: var(--font-heading);
    display: inline-block;
    margin-bottom: 1.5rem;
}

.hero-content h1 {
    font-family: var(--font-heading);
    font-size: 3rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
}

.hero-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

/* --- BENEFICIOS --- */
.benefits-section { padding: 5rem 0; background-color: white; }
.section-title {
    font-family: var(--font-heading);
    font-size: 2rem;
    text-align: center;
    color: var(--text-dark);
    margin-bottom: 3rem;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2.5rem;
}

.benefit-card {
    text-align: center;
    padding: 2rem;
    border-radius: 0.5rem;
    background-color: var(--background-light);
    transition: var(--transition-smooth);
}
.benefit-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
.benefit-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.benefit-card h3 { font-family: var(--font-heading); color: var(--text-dark); margin-bottom: 0.75rem; }

/* --- CATALOGO / TARJETAS VEHICULOS --- */
.catalog-section { padding: 5rem 0; }
.catalog-header { text-align: center; margin-bottom: 4rem; }
.section-subtitle { margin-top: 0.5rem; color: var(--text-muted); }

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
}

.vehicle-card {
    background-color: var(--card-bg);
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    position: relative;
    transition: var(--transition-smooth);
    border: 1px solid #e2e8f0;
}
.vehicle-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); }

.card-badge {
    position: absolute; top: 1rem; left: 1rem;
    background-color: var(--success-color);
    color: white; padding: 0.25rem 0.75rem;
    border-radius: 0.25rem; font-size: 0.75rem; font-weight: 700; z-index: 10;
}

.vehicle-img { width: 100%; height: 220px; object-fit: cover; }
.card-body { padding: 1.5rem; }
.vehicle-category { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-color); letter-spacing: 0.05em; }
.vehicle-title { font-family: var(--font-heading); font-size: 1.25rem; color: var(--text-dark); margin: 0.5rem 0; }
.vehicle-price { font-size: 1.5rem; font-weight: 700; color: var(--text-dark); margin-bottom: 1rem; }

.vehicle-specs {
    display: flex; justify-content: space-between;
    background-color: var(--background-light);
    padding: 0.75rem; border-radius: 0.375rem; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;
}

.btn-card-action {
    width: 100%; background-color: var(--primary-color); color: white; padding: 0.75rem; border-radius: 0.375rem; font-weight: 600;
}
.btn-card-action:hover { background-color: var(--accent-color); }

/* --- BOTON FLOTANTE WHATSAPP --- */
.whatsapp-floating-btn {
    position: fixed; bottom: 2rem; right: 2rem;
    background-color: var(--success-color); color: white;
    width: 3.75rem; height: 3.75rem; border-radius: 50%;
    display: flex; justify-content: center; align-items: center;
    box-shadow: 0 4px 14px rgba(34, 197, 94, 0.4);
    cursor: pointer; z-index: 999; transition: var(--transition-smooth);
}
.whatsapp-floating-btn:hover { transform: scale(1.1); }
.whatsapp-floating-btn svg { width: 1.75rem; height: 1.75rem; }

.notification-badge {
    position: absolute; top: -2px; right: -2px;
    background-color: #ef4444; color: white; font-size: 0.75rem;
    font-weight: 700; width: 1.25rem; height: 1.25rem; border-radius: 50%;
    display: flex; justify-content: center; align-items: center; border: 2px solid white;
}

/* --- VENTANA DE CHAT CON IA --- */
.ai-chat-window {
    position: fixed; bottom: 6.5rem; right: 2rem;
    width: 380px; max-width: 90vw; height: 500px;
    background-color: white; border-radius: 1rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.15);
    z-index: 998; display: none; flex-direction: column;
    overflow: hidden; border: 1px solid #e2e8f0;
    animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.chat-window-header {
    background-color: var(--primary-color); color: white;
    padding: 1rem 1.25rem; display: flex; align-items: center; gap: 0.75rem; position: relative;
}

.bot-avatar-container { position: relative; }
.bot-avatar { width: 2.5rem; height: 2.5rem; background-color: var(--accent-color); border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 1.25rem; }
.status-indicator { position: absolute; bottom: 0; right: 0; width: 0.65rem; height: 0.65rem; border-radius: 50%; border: 2px solid var(--primary-color); }
.status-indicator.online { background-color: var(--success-color); }

.bot-info h4 { font-family: var(--font-heading); font-size: 0.95rem; font-weight: 600; }
.bot-info p { font-size: 0.75rem; color: var(--text-muted); }

.close-chat-btn { background: none; border: none; color: white; font-size: 1.75rem; cursor: pointer; position: absolute; right: 1.25rem; top: 50%; transform: translateY(-50%); opacity: 0.7; }
.close-chat-btn:hover { opacity: 1; }

.chat-window-body { flex: 1; padding: 1.25rem; background-color: #f1f5f9; overflow-y: auto; display: flex; flex-direction: column; gap: 1rem; }

.message { max-width: 80%; padding: 0.75rem 1rem; border-radius: 0.5rem; font-size: 0.9rem; position: relative; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.msg-bot { background-color: white; color: var(--text-dark); align-self: flex-start; border-top-left-radius: 0; }
.msg-user { background-color: #dbffe4; color: #064e3b; align-self: flex-end; border-top-right-radius: 0; }
.msg-time { display: block; font-size: 0.65rem; color: var(--text-muted); margin-top: 0.25rem; text-align: right; }

.chat-window-footer { padding: 0.85rem; background-color: white; border-top: 1px solid #e2e8f0; display: flex; gap: 0.5rem; align-items: center; }
#chat-input { flex: 1; padding: 0.65rem 1rem; border: 1px solid #cbd5e1; border-radius: 20px; outline: none; font-family: var(--font-body); font-size: 0.9rem; }
#chat-input:focus { border-color: var(--accent-color); }
#chat-send-btn { background-color: var(--accent-color); color: white; border: none; width: 2.25rem; height: 2.25rem; border-radius: 50%; display: flex; justify-content: center; align-items: center; cursor: pointer; transition: var(--transition-smooth); }
#chat-send-btn:hover { background-color: var(--accent-hover); }

/* --- PIE DE PAGINA --- */
.main-footer { background-color: var(--primary-color); color: white; padding: 4rem 0 1.5rem 0; margin-top: 5rem; }
.footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; margin-bottom: 3rem; }
.footer-about h3, .footer-contact h4 { font-family: var(--font-heading); margin-bottom: 1rem; }
.footer-about p, .footer-contact p { font-size: 0.9rem; color: #94a3b8; margin-bottom: 0.5rem; }
.footer-bottom { border-top: 1px solid #1e293b; padding-top: 1.5rem; text-align: center; font-size: 0.8rem; color: #64748b; }
.developer-tag { margin-top: 0.5rem; color: #94a3b8; }
.developer-tag strong { color: var(--accent-color); }

/* --- ADAPTACIÓN MÓVIL RESPONSIVA --- */
@media (max-width: 768px) {
    .header-container { flex-direction: column; gap: 1rem; }
    .nav-menu { gap: 1rem; }
    .hero-content h1 { font-size: 2rem; }
    .hero-actions { flex-direction: column; gap: 0.75rem; }
    .ai-chat-window { width: 100%; height: 100%; bottom: 0; right: 0; max-width: 100vw; border-radius: 0; }
}