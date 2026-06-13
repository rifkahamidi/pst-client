<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 ">
    <div class="w-full max-w-4xl bg-[#0A3981] rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 text-white">
      
      <div class="relative p-10 flex flex-col justify-center bg-cover bg-center" style="background-image: url('/images/gedung-bps.jpg');">
  
        <div class="relative z-10 p-8 rounded-2xl backdrop-blur-md bg-white/20 border border-white/20 shadow-lg">
            <h1 class="text-5xl font-bold mb-4 text-white">Buku Tamu</h1>
            <div class="flex items-center gap-3">
                <img src="/images/logo-pst.png" class="h-10 w-auto" />
                <p class="text-sm text-white">Informasi Publik<br>BPS KOTA BUKITTINGGI</p>
            </div>
        </div>
        

      <div class="p-10 space-y-6">
        
        <div>
          <label class="block mb-2 font-medium">Nama Lengkap</label>
          <input type="text" class="w-full p-3 rounded bg-white text-gray-800 outline-none" placeholder="Masukkan nama..." />
        </div>

        <div>
          <label class="block mb-2 font-medium">Jenis Kelamin</label>
          <div class="flex gap-6">
            <label class="flex items-center gap-2"><input type="radio" name="jk" /> Laki-Laki</label>
            <label class="flex items-center gap-2"><input type="radio" name="jk" /> Perempuan</label>
          </div>
        </div>

        <div>
          <label class="block mb-2 font-medium">Usia</label>
          <div class="flex items-center gap-2">
            <input type="number" class="w-20 p-3 rounded bg-white text-gray-800" />
            <span>Tahun</span>
          </div>
        </div>

        <div>
          <label class="block mb-2 font-medium">Pekerjaan</label>
          <div class="space-y-2">
            <label class="flex items-center gap-2"><input type="radio" name="job" /> Mahasiswa</label>
            <label class="flex items-center gap-2"><input type="radio" name="job" /> Dinas/Instansi/OPD</label>
            <label class="flex items-center gap-2"><input type="radio" name="job" /> Peneliti</label>
            <label class="flex items-center gap-2"><input type="radio" name="job" /> Umum</label>
          </div>
        </div>

        <div>
          <label class="block mb-2 font-medium">No HP</label>
          <input type="tel" class="w-full p-3 rounded bg-white text-gray-800" />
        </div>
        
        <div>
          <label class="block mb-2 font-medium">Email</label>
          <input type="email" class="w-full p-3 rounded bg-white text-gray-800" />
        </div>

      </div>
    </div>
  </div>
  
</template>