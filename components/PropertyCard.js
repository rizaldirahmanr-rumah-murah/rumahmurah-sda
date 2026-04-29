// components/PropertyCard.js

"use client"; // <--- TAMBAHKAN INI JUGA
export default function PropertyCard({ item }) {
  const myPhone = "6281336131739"; // Ganti nomor Anda
  const myEmail = "rizaldi.rahmanr@gmail.com"; // Ganti email Anda

  // Fungsi WhatsApp
  const hubungiWhatsApp = () => {
    const teks = `Halo, saya tertarik dengan *${item.title}* di ${item.location}.`;
    window.open(`https://wa.me/${myPhone}?text=${encodeURIComponent(teks)}`, "_blank");
  };

  // Fungsi Telepon
  const hubungiTelepon = () => {
    window.location.href = `tel:+${myPhone}`;
  };

  // Fungsi Email
  const hubungiEmail = () => {
    const subject = encodeURIComponent(`Tanya Properti: ${item.title}`);
    const body = encodeURIComponent(`Halo, saya ingin menanyakan detail untuk rumah di ${item.location} seharga ${item.price}.`);
    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-4">
      <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-xl mb-4" />
      
      <h3 className="text-xl font-bold text-blue-600 leading-tight">{item.price}</h3>
      <p className="text-gray-800 font-semibold mb-4">{item.title}</p>
      
      {/* Container Tombol Kontak Langsung */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        {/* Tombol WA */}
        <button 
          onClick={hubungiWhatsApp}
          className="bg-green-100 text-green-600 p-3 rounded-xl hover:bg-green-600 hover:text-white transition-all flex flex-col items-center gap-1"
          title="WhatsApp"
        >
          <span className="text-xl">💬</span>
          <span className="text-[10px] font-bold">WA</span>
        </button>

        {/* Tombol Telp */}
        <button 
          onClick={hubungiTelepon}
          className="bg-blue-100 text-blue-600 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all flex flex-col items-center gap-1"
          title="Telepon"
        >
          <span className="text-xl">📞</span>
          <span className="text-[10px] font-bold">CALL</span>
        </button>

        {/* Tombol Email */}
        <button 
          onClick={hubungiEmail}
          className="bg-orange-100 text-orange-600 p-3 rounded-xl hover:bg-orange-600 hover:text-white transition-all flex flex-col items-center gap-1"
          title="Email"
        >
          <span className="text-xl">✉️</span>
          <span className="text-[10px] font-bold">EMAIL</span>
        </button>
      </div>
    </div>
  );
}