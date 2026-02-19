/* Public Sector Tools — Core JS */
(function(){
    'use strict';
    const TOOLS = [
        { id:'council-tax', name:'Council Tax Band Estimator', desc:'Estimate your council tax band based on property value and region', icon:'🏠', color:'#0b6e4f', href:'tools/council-tax-estimator.html', tag:'Popular', category:'Council Tax' },
        { id:'business-rates', name:'Business Rates Calculator', desc:'Calculate business rates from rateable value with reliefs and multipliers', icon:'🏢', color:'#1e40af', href:'tools/business-rates-calculator.html', tag:'Popular', category:'Business' },
        { id:'foi-generator', name:'FOI Request Generator', desc:'Generate a properly formatted Freedom of Information request letter', icon:'📋', color:'#6d28d9', href:'tools/foi-request-generator.html', tag:'', category:'Legal Rights' },
        { id:'planning', name:'Planning Permission Checker', desc:'Check whether your home improvement project needs planning permission', icon:'🔨', color:'#d97706', href:'tools/planning-permission-checker.html', tag:'', category:'Property' },
        { id:'right-to-know', name:'Right to Know Builder', desc:'Build requests under the right to know your personal data (Subject Access Request)', icon:'🔍', color:'#dc2626', href:'tools/right-to-know-builder.html', tag:'', category:'Legal Rights' },
        { id:'pay-grade', name:'Public Sector Pay Calculator', desc:'Look up pay grades across NHS, civil service and local government scales', icon:'💷', color:'#0b6e4f', href:'tools/pay-grade-calculator.html', tag:'', category:'Employment' },
        { id:'bin-collection', name:'Bin Collection Day Lookup', desc:'Find your bin collection schedule by entering your postcode and council', icon:'🗑️', color:'#059669', href:'tools/bin-collection-lookup.html', tag:'', category:'Local Services' },
    ];

    function initNav() {
        const h = document.querySelector('.nav-hamburger'), l = document.querySelector('.nav-links');
        if (h && l) { h.addEventListener('click', () => l.classList.toggle('open')); document.addEventListener('click', e => { if (!e.target.closest('.site-nav')) l.classList.remove('open'); }); }
    }

    function renderToolGrid() {
        const g = document.getElementById('toolGrid');
        if (!g) return;
        g.innerHTML = TOOLS.map(t => {
            const badge = t.tag === 'Popular'
                ? '<span class="tool-badge-popular">Popular</span>'
                : (t.tag ? `<span class="tool-badge-new">${t.tag}</span>` : '');
            return `
            <a href="${t.href}" class="tool-card" style="--tool-color: ${t.color}">
                <div class="tool-card-icon" style="background:${t.color}12;color:${t.color};font-size:1.3rem">${t.icon}</div>
                <div class="tool-card-body">
                    <div class="tool-card-header">
                        <h3>${t.name}</h3>
                        ${badge}
                    </div>
                    <p>${t.desc}</p>
                    <div class="tool-card-meta">
                        <span class="tool-category">${t.category}</span>
                        <span class="tool-arrow">→</span>
                    </div>
                </div>
            </a>
        `}).join('');
    }

    document.addEventListener('DOMContentLoaded', () => { initNav(); renderToolGrid(); });
})();
