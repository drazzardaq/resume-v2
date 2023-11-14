<script setup>
import { onMounted, ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

onMounted(() => {
  var height = window.innerHeight,
    x = 0,
    y = height / 2,
    curveX = 100,
    curveY = 0,
    targetX = 0,
    xitteration = 0,
    yitteration = 0,
    menuExpanded = false;

  var blob = document.getElementById("blob"),
    blobPath = document.getElementById("blob-path"),
    hamburger = document.getElementById("hamburger");
  var menu = document.getElementById("inner-menu");

  window.addEventListener("mousemove", function (e) {
    x = e.pageX;
    y = e.pageY;
  });

  hamburger.addEventListener("mouseenter", function (e) {
    e.srcElement.parentElement.classList.add("expanded");
    menuExpanded = true;
  });

  menu.addEventListener("mouseenter", function (e) {
    e.srcElement.parentElement.classList.add("expanded");
    menuExpanded = true;
  });

  menu.addEventListener("mouseleave", function (e) {
    menuExpanded = false;
    e.srcElement.parentElement.classList.remove("expanded");
  });

  function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * (-Math.pow(2, (-10 * currentIteration) / totalIterations) + 1) + startValue;
  }

  var hoverZone = 150;
  var expandAmount = 20;

  function svgCurve() {
    if (curveX > x - 1 && curveX < x + 1) {
      xitteration = 0;
    } else {
      if (menuExpanded) {
        targetX = 0;
      } else {
        xitteration = 0;
        if (x > hoverZone) {
          targetX = 0;
        } else {
          targetX = -(((60 + expandAmount) / 100) * (x - hoverZone));
        }
      }
      xitteration++;
    }

    if (curveY > y - 1 && curveY < y + 1) {
      yitteration = 0;
    } else {
      yitteration = 0;
      yitteration++;
    }

    curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
    curveY = easeOutExpo(yitteration, curveY, y - curveY, 100);

    var anchorDistance = 200;
    var curviness = anchorDistance - 40;

    var newCurve2 = "M60," + height + "H0V0h60v" + (curveY - anchorDistance) + "c0," + curviness + "," + curveX + "," + curviness + "," + curveX + "," + anchorDistance + "S60," + curveY + ",60," + (curveY + anchorDistance * 2) + "V" + height + "z";

    blobPath.setAttribute("d", newCurve2);

    blob.setAttribute("width", curveX + 60);

    hamburger.setAttribute("style", "transform: translate(" + curveX + "px, " + curveY + "px)");

    window.requestAnimationFrame(svgCurve);
  }

  window.requestAnimationFrame(svgCurve);
});

const currentSlide = ref(0);
const slides = ref([
	'https://kitbuildings.com/pages/buildings-config',
	'https://odros.com/',
	'https://uniranks.com/',
	'https://www.ahaworldcampus.com/index.html',
	'https://www.portablesound.com/',
	'https://merj.exchange/',
	'https://book-seychelles.com/'
]);

const slide = (dir) => {
	if (dir === 0 && currentSlide.value > 0) currentSlide.value = currentSlide.value - 1
	else if (currentSlide.value < 6) currentSlide.value = currentSlide.value + dir
};
</script>

<template>
  <div id="menu" class="h-full fixed bg-slate-900 w-[233px] transition-all duration-500 translate-x-[-100%] left-[60px] z-50 shadow-2xl">
    <div id="hamburger" class="absolute right-[20px] w-[20px] h-[20px] -mt-[13px] text-white">
      <FontAwesomeIcon icon="bars" />
    </div>
    <div id="inner-menu" class="w-full h-full flex flex-col items-center justify-between py-20 text-white font-bold uppercase tracking-wide">
      <a class="py-2 hover:tracking-widest transition-all" href="#start">start</a>
      <a class="py-2 hover:tracking-widest transition-all" href="#portfolio">portfolio</a>
      <a class="py-2 hover:tracking-widest transition-all" href="#open-source">open-source</a>
      <a class="py-2 hover:tracking-widest transition-all" href="#graphics">graphics</a>
      <a class="py-2 hover:tracking-widest transition-all" href="#summary">summary</a>
			<a href="https://www.freelancer.com/hireme/Dragoljub" target="_blank" class="mt-auto rounded-lg font-bold flex flex-col items-center justify-center p-3 min-w-[92px]">
				<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" class="fill-white hover:fill-[#29b2fe] transition-all">
					<path d="M37.6 8.203l4.36 6.113L64 8.203M14.676 55.797l11.93-11.663-7.18-7.705M35.783 8.203l-6.376 5.75 10.724.4m-29.134-6.15l2.3 4.693 12.62.786M17.753 32.54l9.324-17.393L0 13.683m18.838 19.96l8.807 9.46 9.715-9.523 3.015-17.737-11.84-.604" />
				</svg>
				<p class="hover:tracking-widest transition-all">Hire Me</p>
			</a>
    </div>
    <svg version="1.1" id="blob" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="top-0 z-[-1] right-[60px] translate-x-[100%] h-full absolute">
      <path id="blob-path" d="M60,500H0V0h60c0,0,20,172,20,250S60,900,60,500z" class="h-full fill-slate-900/50" />
    </svg>
  </div>

  <div id="start" class="w-screen h-screen flex flex-col items-center justify-center pl-24 pr-10 md:pl-48 md:pr-28">
    <img src="@/images/Dragoljub.jpg" alt="Dragoljub Ranđelović" class="rounded-full h-40 w-40 md:h-48 md:w-48 border-4 border-white shadow-md z-10" />
    <p class="mt-5 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Dragoljub Ranđelović</p>
    <div class="flex items-center text-4xl md:text-5xl lg:text-6xl mt-3 md:mt-5 lg:mt-8">
			<a href="https://www.linkedin.com/in/drazzardaq/" target="_blank" class="mx-1 transition-all duration-750 hover:text-[#0e76a8]">
				<FontAwesomeIcon :icon="['fab', 'linkedin']" fixed-width />
			</a>
			<a href="https://twitter.com/drazzardaq" target="_blank" class="mx-1 transition-all duration-750 hover:text-[#1d9bf0]">
				<FontAwesomeIcon :icon="['fab', 'x-twitter']" fixed-width />
			</a>
      <a href="https://github.com/drazzardaq" target="_blank" class="mx-1 transition-all duration-750 hover:text-[#6e5494]">
				<FontAwesomeIcon :icon="['fab', 'github']" fixed-width />
			</a>
			<!-- <a href="@/Resume.pdf" class="mx-1 transition-all duration-750" download>
				<FontAwesomeIcon :icon="['fas', 'file-pdf']" fixed-width />
			</a> -->
    </div>
  </div>
  <div id="portfolio" class="w-screen h-screen flex flex-col items-center justify-center relative pl-24 pr-10 md:pl-48 md:pr-28">
    <img src="@/images/pngwing2.png" alt="Background" class="absolute h-full w-full opacity-10 z-10 select-none invert" />
		<div class="flex flex-col relative z-10 w-full items-center justify-center select-none">
    	<img src="@/images/laptop.png" alt="Dragoljub Ranđelović's Projects" class="w-[700px] drop-shadow-2xl z-10 absolute -bottom-24" />
			<div class="flex items-center justify-between w-[700px] z-40 mb-40">
				<FontAwesomeIcon icon="chevron-left" size="3x" class="mr-20 cursor-pointer transition" :class="currentSlide === 0 ? 'text-slate-200 cursor-not-allowed' : 'text-slate-600 hover:text-slate-900'" @click="slide(0)" />
				<FontAwesomeIcon icon="chevron-right" size="3x" class="ml-20 cursor-pointer transition" :class="currentSlide === 6 ? 'text-slate-200 cursor-not-allowed' : 'text-slate-600 hover:text-slate-900'" @click="slide(1)" />
			</div>
			<template v-for="(l, i) in slides" :key="i">
				<Transition name="fade" mode="out-in">
					<img v-if="i === currentSlide" :src="'portfolio/portfolio' + (i+1) + '.png'" alt="" class="w-[525px] h-[328px] z-30 absolute -bottom-1 shadow-inner shadow-slate-900">
				</Transition>
			</template>
		</div>
		<div class="flex h-14 max-h-14">
			<template v-for="(l, i) in slides" :key="i">
				<a v-if="i === currentSlide" :href="l" target="_blank" class="button group">
					<div class="button-line"></div>
					<div class="button-line"></div>
					<span class="button-text">VISIT</span>
				</a>
			</template>
		</div>
  </div>
  <div id="open-source" class="w-screen h-screen flex flex-col items-center justify-center pl-24 pr-10 md:pl-48 md:pr-28">
		<div class="flex items-center mb-10">
			<h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mr-7 md:mr-5">Supporting open-source?</h1>
			<a href="https://github.com/sponsors/drazzardaq?o=esb" target="_blank">
				<svg aria-hidden="true" viewBox="0 0 24 24" version="1.1" class="fill-[#bf4b8a] hover:fill-[#db61a2] cursor-pointer w-14 h-14">
					<path d="m12 20.703.343.667a.748.748 0 0 1-.686 0l-.003-.002-.007-.003-.025-.013a31.138 31.138 0 0 1-5.233-3.576C3.8 15.573 1 12.332 1 8.514v-.001C1 5.053 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262a31.148 31.148 0 0 1-5.233 3.576l-.025.013-.007.003-.002.001ZM6.736 4C4.657 4 2.5 5.88 2.5 8.514c0 3.107 2.324 5.96 4.861 8.12a29.655 29.655 0 0 0 4.566 3.175l.073.041.073-.04c.271-.153.661-.38 1.13-.674.94-.588 2.19-1.441 3.436-2.502 2.537-2.16 4.861-5.013 4.861-8.12C21.5 5.88 19.343 4 17.264 4c-2.106 0-3.801 1.389-4.553 3.643a.751.751 0 0 1-1.422 0C10.537 5.389 8.841 4 6.736 4Z"></path>
				</svg>
			</a>
		</div>
    <div class="grid grid-cols-1 md:grid-cols-2">
			<!-- <a href="https://github.com/drazzardaq/resume-v2" target="_blank" class="flex items-center mb-5 mr-5">
        <img src="@/images/Dragoljub.jpg" alt="Resume v2" title="Resume v2" class="border-2 border-white shadow rounded-full mr-3 w-16 h-16" />
        <div class="flex flex-col">
          <span class="text-xl -mb-1">Resume v2</span>
        </div>
      </a> -->
			<a href="https://github.com/drazzardaq/dolphinal" target="_blank" class="flex items-center mb-5 mr-5 uppercase font-mono font-semibold text-[#f78419] text-lg">
        <img src="@/images/projects/dolphinal.png" alt="Dolphinal Project" title="Dolphinal Project" class="mr-3 drop-shadow-sm w-16 h-16 -ml-1" />
        <span>Dolphinal</span>
      </a>
      <a href="https://github.com/drazzardaq/coremopen.git" target="_blank" class="flex items-center mb-5 mr-5">
        <img src="@/images/projects/coremopen.png" alt="Corem open-source" title="Corem open-source" class="mr-2 w-auto h-12" />
      </a>
      <!-- <a href="https://github.com/drazzardaq/resume-v1" target="_blank" class="flex items-center mb-5 mr-5">
        <img src="@/images/Dragoljub.jpg" alt="Resume v1" title="Resume v1" class="rounded-xl mr-3 w-14 h-14" />
        <div class="flex flex-col">
          <span class="text-xl tracking-widest font-light -mb-1 uppercase">Resume v1</span>
        </div>
      </a> -->
    </div>
  </div>
	<div id="graphics" class="w-screen h-screen flex flex-col items-center justify-center relative pl-24 pr-10 md:pl-48 md:pr-28">
    <div class="w-full columns-1 md:columns-2 xl:columns-3 gap-5 overflow-x-hidden py-10">
			<img v-for="i in 30" :key="i" :src="i < 10 ? 'graphics/graphic0' + i + '.jpg' : 'graphics/graphic' + i + '.jpg'" alt="Dragoljub's Graphics Design" class="h-auto w-full rounded-md shadow-xl border-t border-x mb-6" />
		</div>
  </div>
  <div id="summary" class="w-screen h-screen flex flex-col items-start justify-center text-left pl-24 pr-10 md:pl-48 md:pr-28 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
    <h1 class="mx-auto"><span class="font-bold">I'm Drago - a web developer</span> with more than thirteen years of hands-on experience in the IT industry. I have honed my skills and expertise across various domains.</h1>
    <h1 class="mx-auto mt-10">My journey in web development has led me to master the latest technologies, programming languages, and design trends.</h1>
		<h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ml-auto mt-20 mr-3">Let's Get in Touch!</h1>
		<div class="ml-auto mt-1 md:mt-3 flex items-center justify-end text-4xl md:text-5xl lg:text-6xl">
			<a href="https://www.instagram.com/drazzardaq/" target="_blank" class="mx-1 transition-all duration-750 hover:text-[#962fbf]">
				<FontAwesomeIcon :icon="['fab', 'instagram']" fixed-width />			
			</a>
			<a href="https://wa.me/38169698442?text=Hi%20Drago!%20I%20have%20something%20to%20tell%20you..." target="_blank" class="mx-1 transition-all duration-750 hover:text-[#25d366]">
				<FontAwesomeIcon :icon="['fab', 'whatsapp']" fixed-width />			
			</a>
			<a href="mailto:randjelovicdragoljub1@gmail.com?subject=Hi%20Drago!%20I%20have%20something%20to%20tell%20you..." target="_blank" class="mx-1 transition-all duration-750 hover:text-[#c71610]">
				<FontAwesomeIcon :icon="['fas', 'envelope']" fixed-width />
			</a>
			<a href="https://www.facebook.com/drazzardaq/" target="_blank" class="ml-1 transition-all duration-750 hover:text-[#1778f2]">
				<FontAwesomeIcon :icon="['fab', 'facebook-square']" fixed-width />			
			</a>
		</div>
		<div class="hidden">
    	<h1 class="mx-auto mt-10">Web developer based in Serbia.</h1>
			<h2 class="mt-10 mb-2">Key Strengths:</h2>
			<p><span class="font-bold">Self-motivated</span></p>
			<p><span class="font-bold">Adaptability</span></p>
			<p><span class="font-bold">Attention to Detail</span></p>
			<p><span class="font-bold">Client-Centric Approach</span></p>
			<h2 class="mt-10 mb-2">Technical Expertise:</h2>
			<p><span class="font-bold">Programming Languages:</span> PHP, HTML, CSS, JavaScript</p>
			<p><span class="font-bold">Frameworks:</span> Laravel, TailwindCSS, Bootstrap, Vue.js, Vite, Babylon.js</p>
			<p><span class="font-bold">Database Management:</span> MySQL, PostgreSQL</p>
			<p><span class="font-bold">Web Development Tools:</span> AWS, Visual Studio Code, Git, GitHub</p>
		</div>
  </div>
</template>
