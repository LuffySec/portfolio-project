export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-8">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact<span className="text-indigo-400">Me</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya!
        </p>
      </div>

      {/* Grid Layout: Form (Kiri) & Info (Kanan) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Kolom Kiri: Form Kirim Pesan */}
        <div className="bg-[#0f121d]/80 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-8">Kirim Pesan</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nama Lengkap</label>
              <input 
                type="text" 
                className="w-full px-4 py-3.5 rounded-xl bg-[#161a27] border border-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                placeholder="Masukkan Nama Anda"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3.5 rounded-xl bg-[#161a27] border border-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                placeholder="contoh@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-3.5 rounded-xl bg-[#161a27] border border-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                placeholder="Tentang Apa?"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Pesan</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3.5 rounded-xl bg-[#161a27] border border-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tulis Pesan Anda..."
              ></textarea>
            </div>
            
            <button 
              type="button"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold transition-all duration-300 mt-4 shadow-lg shadow-indigo-500/25"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* Kolom Kanan: Informasi Kontak */}
        <div className="space-y-6">
          
          {/* Card Email */}
          <div className="bg-[#0f121d]/80 border border-gray-800 rounded-2xl p-6 flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
              {/* Ikon Amplop */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <p className="text-indigo-400 text-sm font-medium mb-2">fawwazaryasx@gmail.com</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Silakan hubungi saya melalui email untuk pertanyaan, kolaborasi, atau diskusi lebih lanjut.
              </p>
            </div>
          </div>

          {/* Card Telepon */}
          <div className="bg-[#0f121d]/80 border border-gray-800 rounded-2xl p-6 flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
              {/* Ikon Smartphone */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Telepon</h3>
              <p className="text-purple-400 text-sm font-medium mb-2">+62 851-8491-8032</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Jika Anda ingin berbicara langsung, jangan ragu untuk menghubungi saya melalui telepon.
              </p>
            </div>
          </div>

          {/* Card Lokasi */}
          <div className="bg-[#0f121d]/80 border border-gray-800 rounded-2xl p-6 flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center shrink-0">
              {/* Ikon Pin Lokasi */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Lokasi</h3>
              <p className="text-pink-400 text-sm font-medium mb-2">Makassar, Indonesia</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Saya tinggal di Makassar, Indonesia. Jika Anda berada di kota ini, saya senang untuk bertemu Anda secara langsung.
              </p>
            </div>
          </div>

          {/* Card Sosial Media */}
          <div className="bg-[#0f121d]/80 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-4">Sosial Media</h3>
            <div className="flex flex-wrap gap-3">
              {['GitHub', 'LinkedIn', 'Instagram'].map((platform) => (
                <a 
                  key={platform}
                  href="#"
                  className="px-5 py-2.5 rounded-lg bg-[#161a27] border border-gray-800 text-sm text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}