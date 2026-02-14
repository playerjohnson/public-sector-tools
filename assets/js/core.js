/* Public Sector Tools — Core JS */
(function(){
    'use strict';
    const TOOLS = [
        { id:'council-tax', name:'Council Tax Band Estimator', desc:'Estimate your council tax band based on property value and region', icon:'🏠', color:'#0b6e4f', href:'tools/council-tax-estimator.html', tag:'Popular' },
        { id:'business-rates', name:'Business Rates Calculator', desc:'Calculate business rates from rateable value with reliefs and multipliers', icon:'🏢', color:'#1e40af', href:'tools/business-rates-calculator.html', tag:'Popular' },
        { id:'foi-generator', name:'FOI Request Generator', desc:'Generate a properly formatted Freedom of Information request letter', icon:'📋', color:'#6d28d9', href:'tools/foi-request-generator.html', tag:'' },
        { id:'planning', name:'Planning Permission Checker', desc:'Check whether your home improvement project needs planning permission', icon:'🔨', color:'#d97706', href:'tools/planning-permission-checker.html', tag:'' },
        { id:'right-to-know', name:'Right to Know Builder', desc:'Build requests under the right to know your personal data (Subject Access Request)', icon:'🔍', color:'#dc2626', href:'tools/right-to-know-builder.html', tag:'' },
        { id:'pay-grade', name:'Public Sector Pay Calculator', desc:'Look up pay grades across NHS, civil service and local government scales', icon:'💷', color:'#0b6e4f', href:'tools/pay-grade-calculator.html', tag:'' },
        { id:'bin-collection', name:'Bin Collection Day Lookup', desc:'Find your bin collection schedule by entering your postcode and council', icon:'🗑️', color:'#059669', href:'tools/bin-collection-lookup.html', tag:'' },
    ];

    function initNav() {
        const h = document.querySelector('.nav-hamburger'), l = document.querySelector('.nav-links');
        if (h && l) { h.addEventListener('click', () => l.classList.toggle('open')); document.addEventListener('click', e => { if (!e.target.closest('.site-nav')) l.classList.remove('open'); }); }
    }

    function renderToolGrid() {
        const g = document.getElementById('toolGrid');
        if (!g) return;
        g.innerHTML = TOOLS.map(t => `
            <a href="${t.href}" class="tool-card">
                <div class="tool-card-icon" style="background:${t.color}12;color:${t.color};font-size:1.3rem">${t.icon}</div>
                <h3>${t.name}</h3>
                <p>${t.desc}</p>
                ${t.tag ? `<span class="tag" style="background:${t.color}12;color:${t.color}">${t.tag}</span>` : ''}
            </a>
        `).join('');
    }

    window.PS = {
        TOOLS,
        copy(text, btn) { navigator.clipboard.writeText(text).then(() => { if (btn) { const o = btn.textContent; btn.textContent = 'Copied!'; setTimeout(() => btn.textContent = o, 1500); } }); },
        download(text, filename, mime = 'text/plain') { const b = new Blob([text], { type: mime }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = filename; a.click(); URL.revokeObjectURL(a.href); },
        fmtGBP(n) { return '£' + n.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); },
        fmtNum(n) { return n.toLocaleString('en-GB'); },
    };

    document.addEventListener('DOMContentLoaded', () => { initNav(); renderToolGrid(); });
})();
