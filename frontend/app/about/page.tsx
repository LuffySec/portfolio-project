export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-8">
      
      {/* Header: About Me */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About <span className="text-indigo-400">Me</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Kenali lebih lanjut siapa saya, apa yang saya pelajari, dan apa yang memotivasi saya.
        </p>
      </div>

      {/* Main Content Grid: 2 Kolom */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24">
        
        {/* Kolom Kiri (Foto & Tabel Info) */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-8">
          
          {/* Foto Profil */}
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-gray-800 mx-auto lg:mx-0">
            <img
              src="profile.jpg" /* Ganti nama ini dengan nama foto Anda di folder public */
              alt="Fawwaz Arya"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tabel Informasi Personal */}
          <div className="w-full bg-[#0a0a0a]/50 border border-gray-800 rounded-xl text-sm">
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <span className="text-gray-500">Nama</span>
              <span className="font-medium text-gray-200 text-right">Fawwaz Aryasatya</span>
            </div>
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <span className="text-gray-500">Kelas</span>
              <span className="font-medium text-gray-200 text-right">XII RPL 1</span>
            </div>
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <span className="text-gray-500">Sekolah</span>
              <span className="font-medium text-gray-200 text-right">SMK Telkom Makassar</span>
            </div>
            <div className="flex justify-between items-center p-4">
              <span className="text-gray-500">Lokasi</span>
              <span className="font-medium text-gray-200 text-right">Indonesia</span>
            </div>
          </div>
        </div>

        {/* Kolom Kanan (Teks Penjelasan) */}
        <div className="lg:col-span-8 space-y-8 mt-4 lg:mt-0">
          
          <div className="space-y-3 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-white">siapa saya?</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Saya adalah siswa SMK Telkom Makassar yang memiliki minat besar dalam pengembangan web. Saya telah mempelajari berbagai teknologi web, termasuk HTML, CSS, JavaScript, React, dan Next.js. Saya bersemangat untuk terus belajar dan mengembangkan keterampilan saya di bidang ini.
            </p>
          </div>

          <div className="space-y-3 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-white">Perjalanan Saya</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Perjalanan saya adalah sebuah perjalanan pembelajaran yang berkelanjutan. Saya mulai belajar pemrograman web sejak kelas 10, dan sejak saat itu saya terus mengeksplorasi berbagai teknologi dan framework. Saya percaya bahwa pembelajaran adalah proses yang tidak pernah berhenti, dan saya selalu mencari cara untuk meningkatkan keterampilan saya.
            </p>
          </div>

          <div className="space-y-3 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-white">Tujuan Saya</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Saya ingin menjadi seorang pengembang web yang handal dan berkontribusi pada proyek-proyek yang berdampak. Saya berkomitmen untuk terus
            </p>
          </div>

        </div>
      </div>

      {/* Bagian Bawah: Timeline Pendidikan */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Pendidikan</h2>

        {/* Garis Vertikal Utama */}
        <div className="relative pl-6 md:pl-8 border-l border-gray-800 space-y-8 ml-4 md:ml-6">
          
          {/* Kotak Pendidikan 1 */}
          <div className="relative group">
            {/* Titik Warna Biru */}
            <div className="absolute -left-[30px] md:-left-[38px] top-4 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-gray-950"></div>
            
            <div className="border border-gray-700 rounded-xl p-5 md:p-6 bg-transparent">
              <span className="text-xs text-gray-400 mb-2 block">2024 - Sekarang</span>
              <h3 className="text-lg font-bold text-white">SMK Telkom Makassar - XII RPL 1</h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Mempelajari pemrograman web, mobile, dan desktop. Fokus pada pengembangan fullstack web application
              </p>
            </div>
          </div>

          {/* Kotak Pendidikan 2 */}
          <div className="relative group">
            {/* Titik Warna Abu-abu */}
            <div className="absolute -left-[30px] md:-left-[38px] top-4 w-3 h-3 rounded-full bg-gray-600 ring-4 ring-gray-950"></div>
            
            <div className="border border-gray-700 rounded-xl p-5 md:p-6 bg-transparent">
              <span className="text-xs text-gray-400 mb-2 block">2023 - 2024</span>
              <h3 className="text-lg font-bold text-white">PKBM Piwulang Becik</h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Masa SMP dimana saya mulai mempelajari dasar-dasar pemrograman dan logika berpikir. Saya mulai mengenal HTML, CSS, dan JavaScript.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}