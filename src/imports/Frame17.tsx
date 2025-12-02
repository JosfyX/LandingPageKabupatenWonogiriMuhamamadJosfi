import svgPaths from "./svg-o04ujdquyw";
import imgImage2 from "figma:asset/f10ee5eb75cbd08f0297aa233c45b045a47568d4.png";
import imgImage5 from "figma:asset/629f9cdda63913eabe2ff18240c0aaf9a4748040.png";
import imgImage6 from "figma:asset/c727182a2b2437a83d048a02da9af9a5bc353ac8.png";
import imgImage7 from "figma:asset/42f96a71e2ac8efae2538f5ad59cbef6f105de31.png";
import imgImage8 from "figma:asset/33bb760675e82ca3e1bc353af74b23b80f902e0f.png";
import { motion } from "motion/react";

function Frame16() {
  return (
    <div className="content-stretch flex gap-[74px] items-center relative shrink-0">
      <div className="h-[114px] relative shrink-0 w-[91px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <p className="font-['Poppins:SemiBold',sans-serif] h-[125px] leading-[44px] not-italic relative shrink-0 text-[36px] text-white w-[424px]">PEMERINTAH KABUPATEN WONOGIRI</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex font-['Poppins:SemiBold',sans-serif] gap-[73px] items-center leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-white">
      <motion.p 
        className="h-[53px] relative shrink-0 w-[122px] cursor-pointer"
        whileHover={{ scale: 1.1, color: "#eaecf0" }}
        transition={{ duration: 0.2 }}
      >
        Beranda
      </motion.p>
      <motion.p 
        className="h-[53px] relative shrink-0 w-[82px] cursor-pointer"
        whileHover={{ scale: 1.1, color: "#eaecf0" }}
        transition={{ duration: 0.2 }}
      >
        Profil
      </motion.p>
      <motion.p 
        className="h-[53px] relative shrink-0 w-[148px] cursor-pointer"
        whileHover={{ scale: 1.1, color: "#eaecf0" }}
        transition={{ duration: 0.2 }}
      >
        Pelayanan
      </motion.p>
      <motion.p 
        className="h-[53px] relative shrink-0 w-[141px] cursor-pointer"
        whileHover={{ scale: 1.1, color: "#eaecf0" }}
        transition={{ duration: 0.2 }}
      >
        Informasi
      </motion.p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#eaecf0] box-border content-stretch flex gap-[10px] h-[62px] items-center justify-center pl-[45px] pr-[15px] py-[11px] relative rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[190px]">
      <p className="font-['Poppins:SemiBold',sans-serif] h-[40px] leading-[38px] not-italic relative shrink-0 text-[#027a48] text-[30px] w-[130px]">Search...</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[164px] items-center relative shrink-0">
      <Frame14 />
      <Frame13 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[108px] items-center relative shrink-0">
      <Frame16 />
      <Frame15 />
    </div>
  );
}

function Frame8() {
  return (
    <motion.div 
      className="absolute bg-[#027a48] box-border content-stretch flex gap-[74px] h-[227px] items-center left-0 px-[83px] py-[24px] shadow-[0px_7px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1933px]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Frame17 />
    </motion.div>
  );
}

function Frame() {
  return (
    <div className="bg-gray-50 h-[4051px] mr-[-11px] overflow-clip relative shrink-0 w-[1933px]">
      <motion.div 
        className="absolute blur-[5px] filter h-[1106px] left-[-6px] pointer-events-none top-0 w-[1952px]" 
        data-name="image 5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgImage5} />
        <div className="absolute inset-0 shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
      </motion.div>
      <div className="absolute h-[675px] left-[-79px] top-[863px] w-[2060px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2060 675">
          <ellipse cx="1030" cy="337.5" fill="var(--fill-0, #F9FAFB)" id="Ellipse 5" rx="1030" ry="337.5" />
        </svg>
      </div>
      <motion.div 
        className="absolute bg-[#027a48] h-[905px] left-[194px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[731px] w-[1544px]"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      />
      <motion.p 
        className="absolute font-['Poppins:Bold',sans-serif] h-[51px] leading-[60px] left-[249px] not-italic text-[48px] text-white top-[837px] w-[338px]"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Berita Terkini
      </motion.p>
      <motion.div 
        className="absolute h-[415px] left-[348px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[974px] w-[629px] cursor-pointer" 
        data-name="image 6"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage6} />
      </motion.div>
      <div className="absolute bg-white h-[2px] left-[617px] top-[875px] w-[892px]" />
      <div className="absolute bg-[#eaecf0] h-[62px] left-[1016px] rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[1327px] w-[385px]" />
      <div className="absolute left-[617px] size-[20px] top-[1457px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, #F9FAFB)" id="Ellipse 2" r="10" />
        </svg>
      </div>
      <div className="absolute left-[689px] size-[20px] top-[1457px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p3e4be600} fill="var(--fill-0, white)" id="Subtract" />
        </svg>
      </div>
      <div className="absolute left-[653px] size-[20px] top-[1457px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p3e4be600} fill="var(--fill-0, white)" id="Subtract" />
        </svg>
      </div>
      <motion.p 
        className="absolute font-['Poppins:Regular',sans-serif] leading-[38px] left-[1016px] not-italic text-[30px] text-white top-[1156px] w-[702px]"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Dalam rangka memperingati HUT ke-54, Korps Pegawai Republik Indonesia (KORPRI) Wonogiri menyelenggarakan kegiatan donor darah di Gedung BKPSDM
      </motion.p>
      <motion.p 
        className="absolute font-['Poppins:Bold',sans-serif] h-[40px] leading-[32px] left-[1082px] not-italic text-[#027a48] text-[24px] top-[1338px] w-[253px] cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.05, color: "#05603a" }}
      >
        Baca Selengkapnya
      </motion.p>
      <motion.p 
        className="absolute font-['Poppins:Bold',sans-serif] leading-[60px] left-[237px] not-italic text-[#054f31] text-[48px] text-nowrap top-[1829px] whitespace-pre"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Layanan Terpopuler.
      </motion.p>
      <motion.p 
        className="absolute font-['Poppins:Bold',sans-serif] leading-[60px] left-[751px] not-italic text-[#054f31] text-[48px] text-nowrap top-[2626px] whitespace-pre"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Destinasi Wisata.
      </motion.p>
      <motion.p 
        className="absolute font-['Poppins:Bold',sans-serif] h-[130px] leading-[60px] left-[1009px] not-italic text-[48px] text-white top-[974px] w-[709px]"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        DONOR DARAH DALAM RANGKA HUT KORPRI KE-54
      </motion.p>
      
      {/* Service Card 1 - E-PAJAK */}
      <motion.div 
        className="absolute bg-[#027a48] h-[384px] left-[195px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[1969px] w-[459px] cursor-pointer"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ scale: 1.05, y: -10, boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.3)" }}
      />
      <motion.p 
        className="absolute font-['Poppins:Bold',sans-serif] h-[47px] leading-[38px] left-[425px] not-italic text-[30px] text-center text-white top-[2031px] translate-x-[-50%] w-[192px]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        E - PAJAK
      </motion.p>
      <motion.p 
        className="absolute font-['Poppins:Regular',sans-serif] leading-[38px] left-[424.5px] not-italic text-[30px] text-center text-white top-[2135px] translate-x-[-50%] w-[343px]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Pelayanan pembayaran pajak via elektronik
      </motion.p>

      {/* Service Card 2 - POTENSI PERTANIAN */}
      <motion.div 
        className="absolute bg-[#027a48] h-[384px] left-[748px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[1969px] w-[459px] cursor-pointer"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.05, y: -10, boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.3)" }}
      />
      <motion.p 
        className="absolute font-['Poppins:Bold',sans-serif] h-[47px] leading-[38px] left-[977.5px] not-italic text-[30px] text-center text-white top-[2031px] translate-x-[-50%] w-[329px]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        POTENSI PERTANIAN
      </motion.p>
      <motion.p 
        className="absolute font-['Poppins:Regular',sans-serif] leading-[38px] left-[976.5px] not-italic text-[30px] text-center text-white top-[2125px] translate-x-[-50%] w-[401px]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Rangkuman potensi pertanian tiap kecamatan di kabupaten Wonogiri
      </motion.p>

      {/* Service Card 3 - HALO MAS JEKEK */}
      <motion.div 
        className="absolute bg-[#027a48] h-[384px] left-[1266px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[1969px] w-[472px] cursor-pointer"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.05, y: -10, boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.3)" }}
      />
      <motion.p 
        className="absolute font-['Poppins:Bold',sans-serif] h-[47px] leading-[38px] left-[1502px] not-italic text-[30px] text-center text-white top-[2031px] translate-x-[-50%] w-[276px]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        HALO MAS JEKEK
      </motion.p>
      <motion.p 
        className="absolute font-['Poppins:Regular',sans-serif] leading-[38px] left-[1496.5px] not-italic text-[30px] text-center text-white top-[2135px] translate-x-[-50%] w-[343px] whitespace-pre-wrap"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >{`Pelayanan aduan masalah  langsung kepada bupati`}</motion.p>

      {/* Destination Card 1 - GOA RESI */}
      <motion.div 
        className="absolute h-[934px] left-[195px] top-[2813px] w-[696px] cursor-pointer" 
        data-name="Subtract"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ scale: 1.03, y: -10 }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 696 934">
          <path d={svgPaths.p3990c000} fill="var(--fill-0, #475467)" id="Subtract" />
        </svg>
      </motion.div>
      <motion.div 
        className="absolute h-[374px] left-[262px] rounded-[10px] top-[2891px] w-[562px]" 
        data-name="image 7"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage7} />
      </motion.div>
      <motion.p 
        className="absolute font-['Poppins:Bold',sans-serif] h-[47px] leading-[38px] left-[543px] not-italic text-[#05603a] text-[30px] text-center top-[3298px] translate-x-[-50%] w-[150px]"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        GOA RESI
      </motion.p>
      <motion.p 
        className="absolute font-['Poppins:Regular',sans-serif] leading-[38px] left-[262px] not-italic text-[#05603a] text-[30px] text-justify top-[3378px] w-[562px]"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Goa Resi adalah salah satu destinasi wisata alam unggulan di Kabupaten Wonogiri yang menawarkan keindahan stalaktit dan stalagmit alami serta suasana goa yang masih terjaga keasriannya
      </motion.p>

      {/* Destination Card 2 - BUKIT CUMBRI */}
      <motion.div 
        className="absolute h-[934px] left-[1042px] top-[2812px] w-[696px] cursor-pointer" 
        data-name="Subtract"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.03, y: -10 }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 696 934">
          <path d={svgPaths.p3990c000} fill="var(--fill-0, #475467)" id="Subtract" />
        </svg>
      </motion.div>
      <motion.div 
        className="absolute h-[374px] left-[1109px] rounded-[10px] top-[2890px] w-[562px]" 
        data-name="image 8"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage8} />
      </motion.div>
      <motion.p 
        className="[white-space-collapse:collapse] absolute font-['Poppins:Bold',sans-serif] h-[47px] leading-[38px] left-[1390px] not-italic overflow-ellipsis overflow-hidden text-[#05603a] text-[30px] text-center text-nowrap top-[3298px] translate-x-[-50%] w-[232px]"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        BUKIT CUMBRI
      </motion.p>
      <motion.p 
        className="absolute font-['Poppins:Regular',sans-serif] leading-[38px] left-[1109px] not-italic text-[#05603a] text-[30px] text-justify top-[3387px] w-[562px]"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >{`Bukit Cumbri adalah salah satu destinasi pendakian ringan paling populer di Kabupaten Wonogiri yang dikenal dengan panorama alamnya yang spektakuler. `}</motion.p>
      
      <Frame8 />
    </div>
  );
}

function IcBaselineLocationOn() {
  return <div className="mr-[-11px] shrink-0 size-[24px]" data-name="ic:baseline-location-on" />;
}

function IcBaselineCall() {
  return <div className="absolute left-[354px] size-[24px] top-[4143px]" data-name="ic:baseline-call" />;
}

function Frame9() {
  return (
    <div className="box-border content-end flex flex-wrap gap-0 items-end mb-[-90px] pl-0 pr-[11px] py-0 relative shrink-0 w-full">
      <Frame />
      <IcBaselineLocationOn />
      <div className="absolute bg-[#667085] h-[2px] left-[821px] top-[1893px] w-[917px]" />
      <IcBaselineCall />
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex flex-col h-[4051px] items-start pb-[90px] pt-0 px-0 relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="h-[20px] relative shrink-0 w-[14px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
          <path d={svgPaths.p3dae9200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-justify text-white w-[562px] whitespace-pre-wrap">{`Jl. Kabupaten No.4-6,  Wonogiri 57612`}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[21px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[18px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p3af46c40} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-justify text-white w-[306px]">(0273) 321002 Fax. 322318</p>
    </div>
  );
}

function IcBaselineEmail() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:baseline-email">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:baseline-email">
          <path d={svgPaths.p3e065f80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[17px] items-center relative shrink-0">
      <IcBaselineEmail />
      <p className="font-['Poppins:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-justify text-white w-[382px]">email : ppid@wonogirikab.go.id</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] h-[387px] items-start relative shrink-0 w-[601px]">
      <p className="font-['Poppins:Regular',sans-serif] h-[47px] leading-[32px] not-italic relative shrink-0 text-[24px] text-white w-full">Kontak kami</p>
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[34px] items-start not-italic relative shrink-0 text-[24px] text-white w-[382px]">
      <p className="h-[47px] leading-[32px] relative shrink-0 w-full">Pelayanan</p>
      <div className="leading-[32px] relative shrink-0 text-justify w-full">
        <p className="mb-0">PPID</p>
        <p className="mb-0">Administrasi Kependudukan</p>
        <p className="mb-0">Daftar Online Rawat Jalan RSUD</p>
        <p className="mb-0">LPSE</p>
        <p className="mb-0">JDIH</p>
        <p className="mb-0">Pelayanan Pendidikan</p>
        <p className="mb-0">HALO MAS JEKEK</p>
        <p className="mb-0">OPEN DATA</p>
        <p>SIPOLANGIRI</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[16px] h-[387px] items-start not-italic relative shrink-0 text-[24px] text-white w-[382px]">
      <p className="h-[47px] leading-[32px] relative shrink-0 w-full">Tentang Wonogiri</p>
      <div className="leading-[32px] relative shrink-0 text-justify w-full">
        <p className="mb-0">Sejarah Kab. Wonogiri</p>
        <p className="mb-0">Masyarakat dan Kebudayaan</p>
        <p className="mb-0">Profile Kabupaten Wonogiri</p>
        <p className="mb-0">Events</p>
        <p className="mb-0">Galeri Foto</p>
        <p>Galeri Video</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#027a48] h-[552px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[83px] h-[552px] items-center px-[115px] py-[61px] relative w-full">
          <Frame6 />
          <Frame4 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

export default function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame11 />
      <Frame7 />
    </div>
  );
}
