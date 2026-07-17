const countrySelect = document.getElementById('countrySelect');

// 1. استعادة الدولة المحفوظة
const savedCountry = localStorage.getItem('selectedCountry');
if (savedCountry) {
    countrySelect.value = savedCountry;
    fetchTrends(savedCountry);
}

// 2. عند تغيير الدولة
countrySelect.addEventListener('change', function() {
    const country = this.value;
    localStorage.setItem('selectedCountry', country);
    fetchTrends(country);
    document.getElementById('trend1').scrollIntoView({ behavior: 'smooth' });
});

// 3. دالة جلب البيانات من n8n
async function fetchTrends(countryCode) {
    try {
        const response = await fetch('YOUR_N8N_WEBHOOK_URL?geo=' + countryCode);
        const data = await response.json(); 

        for (let i = 1; i <= 5; i++) {
            const trend = data[i - 1]; 
            const section = document.getElementById('trend' + i);
            
            if (trend && section) {
                section.querySelector('.title').innerText = trend.title;
                section.querySelector('.link').href = trend.url;
            }
        }
    } catch (error) {
        console.error("خطأ في جلب البيانات:", error);
    }
}