<script setup>
import { onMounted } from "vue";
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
</script>

<template>
  <div id="menu" class="h-full fixed bg-slate-900 w-[233px] transition-all duration-500 translate-x-[-100%] left-[60px] z-10 shadow-2xl">
    <div id="hamburger" class="absolute right-[20px] w-[20px] h-[20px] -mt-[13px] text-white">
      <FontAwesomeIcon icon="bars" size="xl" />
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

  <div id="start" class="w-screen h-screen flex flex-col items-center justify-center ml-10">
    <img src="@/images/Dragoljub.jpg" alt="Dragoljub Ranđelović" class="rounded-full h-48 w-48 border-4 border-white shadow-md z-10" />
    <p class="mt-5 mb-8 font-bold text-5xl">Dragoljub Ranđelović</p>
    <div class="flex items-center">
			<a href="https://www.linkedin.com/in/drazzardaq/" target="_blank" class="mx-1 transition-all duration-750 hover:text-[#0e76a8]">
				<FontAwesomeIcon :icon="['fab', 'linkedin']" fixed-width size="4x" />
			</a>
			<a href="https://twitter.com/drazzardaq" target="_blank" class="mx-1 transition-all duration-750 hover:text-[#1d9bf0]">
				<FontAwesomeIcon :icon="['fab', 'x-twitter']" fixed-width size="4x" />
			</a>
      <a href="https://github.com/drazzardaq" target="_blank" class="mx-1 transition-all duration-750 hover:text-[#6e5494]">
				<FontAwesomeIcon :icon="['fab', 'github']" fixed-width size="4x" />
			</a>
			<!-- <a href="@/Resume.pdf" class="mx-1 transition-all duration-750" download>
				<FontAwesomeIcon :icon="['fas', 'file-pdf']" fixed-width size="4x" />
			</a> -->
    </div>
  </div>
  <div id="portfolio" class="w-screen h-screen flex flex-col items-center justify-center relative bg-gradient-to-l from-white via-slate-100 to-white ml-10">
    <img src="@/images/pngwing2.png" alt="Background" class="absolute h-full w-full opacity-20 z-0" />
    <img src="@/images/laptop.png" alt="Dragoljub Ranđelović's Projects" class="h-96 w-auto drop-shadow-2xl z-10 -mt-32" />
    <a href="#" class="button relative z-0 w-[240px] h-[56px] font-bold tracking-wide hover:tracking-widest transition-all mt-10">
      <div class="button-line absolute top-0 w-[56px] h-full overflow-hidden"></div>
      <div class="button-line absolute top-0 w-[56px] h-full overflow-hidden"></div>
      <span class="button-text flex items-center justify-center w-full h-full font-bold">VISIT</span>
    </a>
  </div>
  <div id="open-source" class="w-screen h-screen flex flex-col items-center justify-center ml-10">
    <div class="grid grid-cols-4 gap-5 ml-10">
			<a href="https://github.com/drazzardaq/resume-v2" target="_blank" class="flex items-center mb-5 mr-5">
        <img src="@/images/Dragoljub.jpg" alt="Resume v2" title="Resume v2" class="border-2 border-white shadow rounded-full mr-3 w-16 h-16" />
        <div class="flex flex-col">
          <span class="text-xl -mb-1">Resume v2</span>
        </div>
      </a>
			<a href="https://github.com/drazzardaq/dolphinal" target="_blank" class="flex items-center mb-5 mr-5 uppercase font-mono font-semibold text-[#f78419] text-lg">
        <img src="@/images/projects/dolphinal.png" alt="Dolphinal Project" title="Dolphinal Project" class="mr-3 drop-shadow-sm w-16 h-16" />
        <span>Dolphinal</span>
      </a>
      <a href="https://github.com/drazzardaq/coremopen.git" target="_blank" class="flex items-center mb-5 mr-5">
        <img src="@/images/projects/coremopen.png" alt="Corem open-source" title="Corem open-source" class="mr-2 w-auto h-12" />
      </a>
      <a href="https://github.com/drazzardaq/resume-v1" target="_blank" class="flex items-center mb-5 mr-5">
        <img src="@/images/Dragoljub.jpg" alt="Resume v1" title="Resume v1" class="rounded-xl mr-3 w-14 h-14" />
        <div class="flex flex-col">
          <span class="text-xl tracking-widest font-light -mb-1 uppercase">Resume v1</span>
        </div>
      </a>
    </div>
		<div class="flex items-center mt-10">
			<h1 class="text-5xl mr-5">Supporting open-source?</h1>
			<a href="https://github.com/sponsors/drazzardaq?o=esb" target="_blank">
				<svg aria-hidden="true" viewBox="0 0 24 24" version="1.1" class="fill-[#bf4b8a] hover:fill-[#db61a2] cursor-pointer w-14 h-14 mt-3">
					<path d="m12 20.703.343.667a.748.748 0 0 1-.686 0l-.003-.002-.007-.003-.025-.013a31.138 31.138 0 0 1-5.233-3.576C3.8 15.573 1 12.332 1 8.514v-.001C1 5.053 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262a31.148 31.148 0 0 1-5.233 3.576l-.025.013-.007.003-.002.001ZM6.736 4C4.657 4 2.5 5.88 2.5 8.514c0 3.107 2.324 5.96 4.861 8.12a29.655 29.655 0 0 0 4.566 3.175l.073.041.073-.04c.271-.153.661-.38 1.13-.674.94-.588 2.19-1.441 3.436-2.502 2.537-2.16 4.861-5.013 4.861-8.12C21.5 5.88 19.343 4 17.264 4c-2.106 0-3.801 1.389-4.553 3.643a.751.751 0 0 1-1.422 0C10.537 5.389 8.841 4 6.736 4Z"></path>
				</svg>
			</a>
		</div>
  </div>
	<div id="graphics" class="w-screen h-screen flex flex-col items-center justify-center relative ml-10">
    graphics
  </div>
  <div id="summary" class="w-screen h-screen flex flex-col items-start justify-center text-left px-32 ml-20 text-5xl">
    <h1 class="mx-auto"><span class="font-bold">I'm Drago - a web developer</span> with more than thirteen years of hands-on experience in the IT industry. I have honed my skills and expertise across various domains.</h1>
    <h1 class="mx-auto mt-10">My journey in web development has led me to master the latest technologies, programming languages, and design trends.</h1>
		<h1 class="text-5xl ml-auto mt-20 mr-3">Let's Get in Touch!</h1>
		<div class="ml-auto mt-3 flex items-center justify-end">
			<a href="https://wa.me/38169698442?text=Hi%20Drago!%20I%20have%20something%20to%20tell%20you..." target="_blank" class="mx-1 transition-all duration-750 hover:text-[#25d366]">
				<FontAwesomeIcon :icon="['fab', 'whatsapp']" fixed-width size="xl" />			
			</a>
			<a href="mailto:randjelovicdragoljub1@gmail.com?subject=Hi%20Drago!%20I%20have%20something%20to%20tell%20you..." target="_blank" class="mx-1 transition-all duration-750 hover:text-[#c71610]">
				<FontAwesomeIcon :icon="['fas', 'envelope']" fixed-width size="xl" />
			</a>
		</div>
		<div class="hidden">
    	<h1 class="mx-auto mt-10">Web developer based in Serbia.</h1>
			<h2 class="mt-10 mb-2">Key Strengths:</h2>
			<p><span class="font-bold">Self-motivated:</span> I'm not just an IT consultant and web developer; I'm also a self-motivated problem solver. They thrive on challenges and are driven to find innovative solutions to complex technical issues.</p>
			<p><span class="font-bold">Adaptability:</span> In the ever-evolving world of technology, I keep up with the latest trends and emerging technologies. My ability to adapt and incorporate new tools and techniques ensures your projects are always at the cutting edge.</p>
			<p><span class="font-bold">Attention to Detail:</span> I understand that the smallest details can make the biggest difference. They meticulously review every line of code and design element to ensure a flawless end product.</p>
			<p><span class="font-bold">Client-Centric Approach:</span> I believe in building strong client relationships. I actively listen to your needs, provide expert guidance, and ensure your vision becomes a reality.</p>
			<h2 class="mt-10 mb-2">Technical Expertise:</h2>
			<p><span class="font-bold">Programming Languages:</span> PHP, HTML, CSS, JavaScript</p>
			<p><span class="font-bold">Frameworks:</span> Laravel, TailwindCSS, Bootstrap, Vue.js, Vite, Babylon.js</p>
			<p><span class="font-bold">Database Management:</span> MySQL, PostgreSQL</p>
			<p><span class="font-bold">Web Development Tools:</span> AWS, Visual Studio Code, Git, GitHub</p>
		</div>
  </div>
</template>

<style scoped>
.button::before,
.button::after,
.button-text::before,
.button-text::after {
  content: "";
  position: absolute;
  height: 3px;
  border-radius: 2px;
  background: #000000;
  transition: all 0.5s ease;
}

.button::before {
  top: 0;
  left: 54px;
  width: calc(100% - 56px * 2 - 16px);
}

.button::after {
  top: 0;
  right: 54px;
  width: 8px;
}

.button-text::before {
  bottom: 0;
  right: 54px;
  width: calc(100% - 56px * 2 - 16px);
}

.button-text::after {
  bottom: 0;
  left: 54px;
  width: 8px;
}

.button-line::before {
  content: "";
  position: absolute;
  top: 0;
  width: 150%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 300px;
  border: solid 3px #000000;
}

.button-line:nth-child(1),
.button-line:nth-child(1)::before {
  left: 0;
}

.button-line:nth-child(2),
.button-line:nth-child(2)::before {
  right: 0;
}

.button:hover::before,
.button:hover .button-text::before {
  width: 8px;
}

.button:hover::after,
.button:hover .button-text::after {
  width: calc(100% - 56px * 2 - 16px);
}
</style>
