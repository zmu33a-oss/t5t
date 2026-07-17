document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://var1.app.n8n.cloud/webhook/1fb998bc-4ad7-462a-bb02-bfe1e06c417d');
        const data = await response.json();

        // تحديث العناصر بناءً على الـ ID (تأكد من إضافة id="trend-title" و id="trend-desc" في الـ HTML)
        document.getElementById('trend-title').innerText = data.title;
        document.getElementById('trend-desc').innerText = data.description;

    } catch (error) {
        console.error('خطأ في جلب البيانات:', error);
    }
});