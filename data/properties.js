// data/properties.js

// Kita menggunakan 'export' agar data ini bisa dipanggil di halaman lain (app/page.js)
export const properties = [
  {
    id: 1,
    title: "Rumah Cluster Pusat Kota",
    price: "Rp 344.545.000",
    location: "PERUMTAS 4, Cluster Gardenia, Sidodadi ",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800",
    specs: { 
      bed: 2, 
      bath: 1, 
      size: 134 
    }
  },
  {
    id: 2,
    title: "Villa Mewah View Gunung",
    price: "Rp 3.200.000.000",
    location: "Ciawi, Bogor",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    specs: { 
      bed: 5, 
      bath: 4, 
      size: 250 
    }
  },
  {
    id: 3,
    title: "Apartemen Studio Strategis",
    price: "Rp 600.000.000",
    location: "Setiabudi, Jakarta Selatan",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    specs: { 
      bed: 1, 
      bath: 1, 
      size: 32 
    }
  }
];