<script setup lang="ts">
import { useWebsiteHomePage } from "~/domains/core/composable/useWebsiteHomePage";
</script>

<template>
  <main class="text-zinc-800 text-lg bg-zinc-50">
    <div class="relative">
      <div class="left-0 absolute top-0 h-full w-full">
        <img
          src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F13%2Ft-1-1.png&amp;w=3840&amp;q=50"
          srcset="
            https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F13%2Ft-1-1.png&amp;w=640&amp;q=50   640w,
            https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F13%2Ft-1-1.png&amp;w=750&amp;q=50   750w,
            https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F13%2Ft-1-1.png&amp;w=828&amp;q=50   828w,
            https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F13%2Ft-1-1.png&amp;w=1080&amp;q=50 1080w,
            https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F13%2Ft-1-1.png&amp;w=1200&amp;q=50 1200w,
            https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F13%2Ft-1-1.png&amp;w=1920&amp;q=50 1920w,
            https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F13%2Ft-1-1.png&amp;w=2048&amp;q=50 2048w,
            https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F13%2Ft-1-1.png&amp;w=3840&amp;q=50 3840w
          "
          class="bottom-0 left-0 object-cover absolute top-0 w-full"
        />
      </div>
      <div
        class="pb-72 px-6 pt-16 max-w-[75.00rem] lg:pr-20 lg:pl-20 lg:pt-40 xl:pr-28 xl:pl-28 z-30 relative"
      >
        <h1 class="text-[5.00rem] leading-none font-bold">
          <p>
            <strong class="text-indigo-500">Love your ski boots</strong> as much
            as you love to ski.
          </p>
        </h1>
        <div class="text-2xl mt-4">
          Ski to your fullest, season after season, with a ZipFit ski boot
          liner.
        </div>
        <div class="flex mt-10 gap-4 font-bold uppercase" id="div-1">
          <a href="https://www.zipfit.com/global/shop" class="underline"
            ><button
              class="items-start bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] cursor-pointer py-3 px-8 text-center inline-block h-12 rounded"
              id="button-1"
            >
              Shop Liners
            </button></a
          ><a href="https://www.zipfit.com/global/quiz" class="underline"
            ><button
              class="items-start bg-[linear-gradient(258.18deg,_rgb(255,_244,_148),_rgb(255,_198,_185))] cursor-pointer py-3 px-8 text-center inline-block h-12 rounded"
              id="button-2"
            >
              Take Fit Quiz
            </button></a
          >
        </div>
      </div>
    </div>
    <div
      class="px-6 mb-10 lg:pr-20 lg:pl-20 lg:mt-24 lg:mr-0 lg:mb-28 lg:ml-0 xl:pr-28 xl:pl-28"
    >
      <div class="flex-wrap flex mb-10 lg:mb-16">
        <h3 class="text-[3.63rem] leading-none font-bold lg:w-[55%]" id="h3-1">
          The most comfortable and complete connection to your skis.
        </h3>
        <div class="w-full lg:w-[45%] lg:relative">
          <div
            class="relative lg:absolute lg:top-[-16vw] lg:left-[5%] lg:w-[105%] lg:max-w-[43.75rem]"
            id="div-2"
          >
            <img
              src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=3840&amp;q=75"
              srcset="
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=16&amp;q=75     16w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=32&amp;q=75     32w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=48&amp;q=75     48w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=64&amp;q=75     64w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=96&amp;q=75     96w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=128&amp;q=75   128w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=256&amp;q=75   256w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=384&amp;q=75   384w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=640&amp;q=75   640w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=750&amp;q=75   750w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=828&amp;q=75   828w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=1080&amp;q=75 1080w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=1200&amp;q=75 1200w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=1920&amp;q=75 1920w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=2048&amp;q=75 2048w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F10%2Fgarahv_canva.png&amp;w=3840&amp;q=75 3840w
              "
              class="bottom-0 left-0 object-contain absolute top-0 w-[32.37rem] h-[38.84rem]"
            />
          </div>
        </div>
      </div>
      <div class="flex-wrap flex">
        <div class="w-full lg:w-[33.33%]" id="div-3">
          <div
            class="bg-clip-text bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] text-[4.75rem] leading-none inline-block text-transparent"
            id="div-4"
          >
            01
          </div>
          <h4
            class="text-[2.63rem] leading-none font-bold lg:mt-4 lg:mr-0 lg:mb-4 lg:ml-0"
          >
            Ensures comfort
          </h4>
          <div class="text-neutral-500">
            "After several bouts of frostbite my feet were very sensitive and I
            was skiing in pain. My ZipFit liners have changed my life. I got
            over 100 days in last year. Comfortable and warm. I am skiing
            without pain all day." -David Micheal Place, Skier
          </div>
        </div>
        <div class="w-full lg:w-[33.33%] lg:mt-56" id="div-5">
          <div
            class="bg-clip-text bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] text-[4.75rem] leading-none inline-block text-transparent"
            id="div-6"
          >
            02
          </div>
          <h4
            class="text-[2.63rem] leading-none font-bold lg:mt-4 lg:mr-0 lg:mb-4 lg:ml-0"
          >
            Lasts a lifetime
          </h4>
          <div class="text-neutral-500">
            "The pair that I’m using have between 1400-1500 days! Kinda cool,
            kinda gross, but they haven't packed out whatsoever from the first
            day." -Brian Dalla Betta, Snowmass Ski Patrol
          </div>
        </div>
        <div class="w-full lg:w-[33.33%] lg:mt-96" id="div-7">
          <div
            class="bg-clip-text bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] text-[4.75rem] leading-none inline-block text-transparent"
            id="div-8"
          >
            03
          </div>
          <h4
            class="text-[2.63rem] leading-none font-bold lg:mt-4 lg:mr-0 lg:mb-4 lg:ml-0"
          >
            Customized to your foot
          </h4>
          <div class="text-neutral-500">
            "I have very small feet (size 22 ski boot). The ability to add cork
            to my liners in order to take up space in the right spots has been
            game changing." -McKenna Peterson, Pro Skier
          </div>
        </div>
        <div class="w-full lg:w-[33.33%] lg:-mt-80" id="div-9">
          <div
            class="bg-clip-text bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] text-[4.75rem] leading-none inline-block text-transparent"
            id="div-10"
          >
            04
          </div>
          <h4
            class="text-[2.63rem] leading-none font-bold lg:mt-4 lg:mr-0 lg:mb-4 lg:ml-0"
          >
            Maximizes control
          </h4>
          <div class="text-neutral-500">
            "ZipFits made the biggest difference in my skiing. The tight lace up
            fit and stiff cork makes your boot more responsive, and gives you so
            much more control. People ask me how I still ski everyday + compete
            in race boots, these liners are how." -Taylor Dobyns, Pro Skier
          </div>
        </div>
        <div class="w-full lg:w-[33.33%] lg:-mt-20" id="div-11">
          <div
            class="bg-clip-text bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] text-[4.75rem] leading-none inline-block text-transparent"
            id="div-12"
          >
            05
          </div>
          <h4
            class="text-[2.63rem] leading-none font-bold lg:mt-4 lg:mr-0 lg:mb-4 lg:ml-0"
          >
            Fits any ski boot
          </h4>
          <div class="text-neutral-500 MosaicTitleText_contentInner__ZPaEG">
            "After 60 years of skiing, I have finally found the perfect boot
            liner. I really like that I can "re-mold" my liners when I come back
            after a summer out of ski boots; the possibility of adding,
            subtracting and moving cork around is priceless." -Ole Retlev, Skier
          </div>
          <div
            class="relative hidden lg:block lg:relative lg:w-[150%] lg:right-[80%] lg:mt-24"
          >
            <img
              src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F23%2Fsshelesky-zipfit20-21-3-2.jpg&amp;w=3840&amp;q=75"
              srcset="
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F23%2Fsshelesky-zipfit20-21-3-2.jpg&amp;w=384&amp;q=75   384w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F23%2Fsshelesky-zipfit20-21-3-2.jpg&amp;w=640&amp;q=75   640w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F23%2Fsshelesky-zipfit20-21-3-2.jpg&amp;w=750&amp;q=75   750w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F23%2Fsshelesky-zipfit20-21-3-2.jpg&amp;w=828&amp;q=75   828w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F23%2Fsshelesky-zipfit20-21-3-2.jpg&amp;w=1080&amp;q=75 1080w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F23%2Fsshelesky-zipfit20-21-3-2.jpg&amp;w=1200&amp;q=75 1200w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F23%2Fsshelesky-zipfit20-21-3-2.jpg&amp;w=1920&amp;q=75 1920w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F23%2Fsshelesky-zipfit20-21-3-2.jpg&amp;w=2048&amp;q=75 2048w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F23%2Fsshelesky-zipfit20-21-3-2.jpg&amp;w=3840&amp;q=75 3840w
              "
              class="bottom-0 left-0 absolute top-0 w-[34.25rem] h-[39.98rem]"
            />
          </div>
        </div>
        <div class="w-full lg:w-[33.33%] lg:mt-40">
          <div
            class="bg-clip-text bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] text-[4.75rem] leading-none inline-block text-transparent"
            id="div-13"
          >
            06
          </div>
          <h4
            class="text-[2.63rem] leading-none font-bold lg:mt-4 lg:mr-0 lg:mb-4 lg:ml-0"
          >
            Handmade in Italy
          </h4>
          <div class="text-neutral-500">
            <p>
              "In an age when things are mass-produced and looking at a modern
              boot's liner makes you cringe for workmanship and detail, the
              ZipFit is a welcome respite. Made in Italy. Worth every penny.
              This is the real deal." <br />-Anonymous, Skier
            </p>
          </div>
          <div class="flex mt-10 font-bold uppercase" id="div-14">
            <a href="https://www.zipfit.com/global/shop" class="underline"
              ><button
                class="items-start cursor-pointer py-3 px-8 text-center inline-block h-12 border-2 border-zinc-800 border-solid rounded"
                id="button-3"
              >
                View all liners
              </button></a
            >
          </div>
          <div
            class="relative lg:relative lg:w-[130%] lg:right-1/2 lg:mt-16"
            id="div-15"
          >
            <img
              src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F22%2Fdomi.jpg&amp;w=3840&amp;q=75"
              srcset="
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F22%2Fdomi.jpg&amp;w=256&amp;q=75   256w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F22%2Fdomi.jpg&amp;w=384&amp;q=75   384w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F22%2Fdomi.jpg&amp;w=640&amp;q=75   640w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F22%2Fdomi.jpg&amp;w=750&amp;q=75   750w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F22%2Fdomi.jpg&amp;w=828&amp;q=75   828w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F22%2Fdomi.jpg&amp;w=1080&amp;q=75 1080w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F22%2Fdomi.jpg&amp;w=1200&amp;q=75 1200w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F22%2Fdomi.jpg&amp;w=1920&amp;q=75 1920w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F22%2Fdomi.jpg&amp;w=2048&amp;q=75 2048w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F22%2Fdomi.jpg&amp;w=3840&amp;q=75 3840w
              "
              class="bottom-0 left-0 absolute top-0 w-96 h-80"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="text-center my-10 overflow-hidden lg:mt-24 lg:mr-0 lg:mb-16 lg:ml-0"
    >
      <div
        class="flex-wrap justify-center px-6 flex -m-3 lg:pr-20 lg:pl-20 xl:pr-28 xl:pl-28"
      >
        <div class="px-3 w-full">
          <h2 class="text-[4.75rem] leading-none font-bold w-full">
            Why Cork?
          </h2>
          <div class="text-neutral-500 text-2xl max-w-[50.00rem] mt-8 mx-auto">
            ZipFit founder, Sven Coomer was the first to use open and closed
            cell foams in ski boot liners, and the first to abandon these
            materials. He switched his focus to a natural product and developed
            a proprietary cork composite material called OMFit to use as fill in
            the liners.
          </div>
        </div>
      </div>
    </div>
    <div class="my-10 overflow-hidden lg:mt-16 lg:mr-0 lg:mb-16 lg:ml-0">
      <div
        class="flex-wrap justify-center px-6 flex -m-3 lg:pr-20 lg:pl-20 xl:pr-28 xl:pl-28"
      >
        <div class="px-3 text-center w-1/4" id="div-16">
          <h4
            class="bg-clip-text bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] text-[5.00rem] leading-none font-bold text-transparent"
          >
            01
          </h4>
          <h5 class="text-4xl font-bold my-4">Thermodynamic</h5>
          <div class="text-neutral-500">
            OMFit cork responds dynamically to heat, flowing from areas of high
            pressure to voids in your fit, better securing the heels and ankles.
          </div>
        </div>
        <div class="px-3 text-center w-1/4" id="div-17">
          <h4
            class="bg-clip-text bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] text-[5.00rem] leading-none font-bold text-transparent"
          >
            02
          </h4>
          <h5 class="text-4xl font-bold my-4">Responsive</h5>
          <div class="text-neutral-500">
            Visualize throwing a cork at the ground. What happens? It bounces
            back. OMFit cork is incredibly responsive and has higher pliable
            strength than foam, so energy is transferred to the ski instead of
            lost to compacted foam.
          </div>
        </div>
        <div class="px-3 text-center w-1/4" id="div-18">
          <h4
            class="bg-clip-text bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] text-[5.00rem] leading-none font-bold text-transparent"
          >
            03
          </h4>
          <h5 class="text-4xl font-bold my-4">Adjustable</h5>
          <div class="text-neutral-500">
            OMFit cork is malleable and it doesn’t dry out. The added cork
            integrates with the pre-filled cork in the liner, putting the
            perfect fit in reach.
          </div>
        </div>
        <div class="px-3 text-center w-1/4" id="div-19">
          <h4
            class="bg-clip-text bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] text-[5.00rem] leading-none font-bold text-transparent"
          >
            04
          </h4>
          <h5 class="text-4xl font-bold my-4">Regenerative</h5>
          <div class="text-neutral-500">
            OMFit cork comes from the bark of Cork oak trees in Sardinia, Italy.
            Each Cork Oak tree can be sustainably harvested up to 20 times, and
            sequesters more CO2 each time it regrows its bark shield.
          </div>
        </div>
      </div>
    </div>
    <div
      class="my-10 overflow-hidden md:mt-16 md:mr-0 md:mb-28 md:ml-0"
      id="div-20"
    >
      <div
        class="flex-wrap justify-center px-6 flex -m-3 lg:pr-20 lg:pl-20 xl:pr-28 xl:pl-28"
      >
        <div class="px-3 relative w-1/4" id="div-21">
          <img
            src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F22%2Fd8962d2e-4a8e-4494-8ddb-a0e2f4b85974.jpg&amp;w=3840&amp;q=75"
            srcset="
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F22%2Fd8962d2e-4a8e-4494-8ddb-a0e2f4b85974.jpg&amp;w=256&amp;q=75   256w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F22%2Fd8962d2e-4a8e-4494-8ddb-a0e2f4b85974.jpg&amp;w=384&amp;q=75   384w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F22%2Fd8962d2e-4a8e-4494-8ddb-a0e2f4b85974.jpg&amp;w=640&amp;q=75   640w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F22%2Fd8962d2e-4a8e-4494-8ddb-a0e2f4b85974.jpg&amp;w=750&amp;q=75   750w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F22%2Fd8962d2e-4a8e-4494-8ddb-a0e2f4b85974.jpg&amp;w=828&amp;q=75   828w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F22%2Fd8962d2e-4a8e-4494-8ddb-a0e2f4b85974.jpg&amp;w=1080&amp;q=75 1080w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F22%2Fd8962d2e-4a8e-4494-8ddb-a0e2f4b85974.jpg&amp;w=1200&amp;q=75 1200w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F22%2Fd8962d2e-4a8e-4494-8ddb-a0e2f4b85974.jpg&amp;w=1920&amp;q=75 1920w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F22%2Fd8962d2e-4a8e-4494-8ddb-a0e2f4b85974.jpg&amp;w=2048&amp;q=75 2048w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F22%2Fd8962d2e-4a8e-4494-8ddb-a0e2f4b85974.jpg&amp;w=3840&amp;q=75 3840w
            "
            class="bottom-0 left-0 object-cover absolute top-0 w-72 h-72"
          />
        </div>
        <div class="items-center px-3 flex w-[41.65%]" id="div-22">
          <div class="md:pl-10">
            <h4 class="text-[2.63rem] leading-none font-bold">
              “ZipFit breaks in, other liners break down”
            </h4>
            <div
              class="bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] w-20 h-1.5 my-4 mx-auto md:mt-4 md:mr-0 md:mb-4 md:ml-0"
            ></div>
            <div class="text-neutral-500">
              Sven Coomer, Founder and Designer, ZipFit
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-10 lg:mt-28 lg:mr-0 lg:mb-28 lg:ml-0">
      <div class="bg-white flex-wrap flex">
        <div class="order-1 relative w-full lg:w-2/4" id="div-23">
          <img
            src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F23%2Fzipfit_sarah_leysin_02-1-1.png&amp;w=3840&amp;q=75"
            srcset="
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F23%2Fzipfit_sarah_leysin_02-1-1.png&amp;w=384&amp;q=75   384w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F23%2Fzipfit_sarah_leysin_02-1-1.png&amp;w=640&amp;q=75   640w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F23%2Fzipfit_sarah_leysin_02-1-1.png&amp;w=750&amp;q=75   750w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F23%2Fzipfit_sarah_leysin_02-1-1.png&amp;w=828&amp;q=75   828w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F23%2Fzipfit_sarah_leysin_02-1-1.png&amp;w=1080&amp;q=75 1080w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F23%2Fzipfit_sarah_leysin_02-1-1.png&amp;w=1200&amp;q=75 1200w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F23%2Fzipfit_sarah_leysin_02-1-1.png&amp;w=1920&amp;q=75 1920w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F23%2Fzipfit_sarah_leysin_02-1-1.png&amp;w=2048&amp;q=75 2048w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F23%2Fzipfit_sarah_leysin_02-1-1.png&amp;w=3840&amp;q=75 3840w
            "
            class="bottom-0 left-0 object-cover absolute top-0 w-[41.75rem] h-[33.95rem]"
          />
        </div>
        <div class="items-center justify-center order-2 flex w-full lg:w-2/4">
          <div class="p-6 md:p-24">
            <h3 class="text-[3.63rem] leading-none font-bold">
              Find the correct ZipFits for you.
            </h3>
            <div class="text-neutral-500 text-2xl mt-6 mb-10">
              Ski boots don’t have to be painful, discover the fit solution that
              has worked for thousands of skiers.
            </div>
            <div class="flex mt-10 font-bold uppercase" id="div-24">
              <a href="https://www.zipfit.com/global/quiz" class="underline"
                ><button
                  class="items-start bg-[linear-gradient(258.18deg,_rgb(255,_244,_148),_rgb(255,_198,_185))] cursor-pointer py-3 px-8 text-center inline-block h-12 rounded"
                  id="button-4"
                >
                  Find Your Fit
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative my-10 md:mt-24 md:mr-0 md:mb-16 md:ml-0">
      <div
        class="gap-x-3 grid-rows-[28.50rem] md:grid md:grid-cols-[repeat(6,_1fr)]"
      >
        <div
          class="relative md:h-[33.66vw] md:overflow-x-hidden md:overflow-y-hidden md:col-end-auto"
          id="div-25"
        >
          <img
            src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F24%2Fsshelesky-zipfit20-21-27-4-1.png&amp;w=3840&amp;q=75"
            srcset="
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F24%2Fsshelesky-zipfit20-21-27-4-1.png&amp;w=640&amp;q=75   640w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F24%2Fsshelesky-zipfit20-21-27-4-1.png&amp;w=750&amp;q=75   750w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F24%2Fsshelesky-zipfit20-21-27-4-1.png&amp;w=828&amp;q=75   828w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F24%2Fsshelesky-zipfit20-21-27-4-1.png&amp;w=1080&amp;q=75 1080w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F24%2Fsshelesky-zipfit20-21-27-4-1.png&amp;w=1200&amp;q=75 1200w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F24%2Fsshelesky-zipfit20-21-27-4-1.png&amp;w=1920&amp;q=75 1920w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F24%2Fsshelesky-zipfit20-21-27-4-1.png&amp;w=2048&amp;q=75 2048w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F24%2Fsshelesky-zipfit20-21-27-4-1.png&amp;w=3840&amp;q=75 3840w
            "
            class="bottom-0 left-0 object-cover absolute top-0 w-[55.42rem] h-96"
          />
        </div>
        <div
          class="relative md:h-[33.66vw] md:overflow-x-hidden md:overflow-y-hidden md:col-end-auto"
          id="div-26"
        >
          <img
            src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F25%2Fsshelesky-zipfit20-21-27-5-1.png&amp;w=3840&amp;q=75"
            srcset="
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F25%2Fsshelesky-zipfit20-21-27-5-1.png&amp;w=640&amp;q=75   640w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F25%2Fsshelesky-zipfit20-21-27-5-1.png&amp;w=750&amp;q=75   750w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F25%2Fsshelesky-zipfit20-21-27-5-1.png&amp;w=828&amp;q=75   828w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F25%2Fsshelesky-zipfit20-21-27-5-1.png&amp;w=1080&amp;q=75 1080w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F25%2Fsshelesky-zipfit20-21-27-5-1.png&amp;w=1200&amp;q=75 1200w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F25%2Fsshelesky-zipfit20-21-27-5-1.png&amp;w=1920&amp;q=75 1920w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F25%2Fsshelesky-zipfit20-21-27-5-1.png&amp;w=2048&amp;q=75 2048w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F8%2F24%2F25%2Fsshelesky-zipfit20-21-27-5-1.png&amp;w=3840&amp;q=75 3840w
            "
            class="bottom-0 left-0 object-cover absolute top-0 w-96 h-96"
          />
        </div>
      </div>
      <div
        class="bg-[linear-gradient(258.18deg,_rgb(173,_238,_255),_rgb(203,_255,_186))] w-full md:w-[calc(100%_-_16px)]"
      >
        <div
          class="bg-white py-8 px-6 text-center md:relative md:top-[-1.00rem] md:left-[1.00rem] md:p-10"
        >
          <h4 class="text-[2.63rem] leading-none font-bold">
            60 years of innovation
          </h4>
          <div
            class="bg-[linear-gradient(258.18deg,_rgb(173,_238,_255),_rgb(203,_255,_186))] w-20 h-1.5 my-4 mx-auto"
          ></div>
          <div class="text-neutral-500">
            ZipFit is the culmination of 60 years of ski boot design and
            refinement with a commitment to a pain-free fit that supports the
            natural strength of the human foot.
          </div>
        </div>
      </div>
      <div
        class="gap-x-3 grid-rows-[28.50rem] md:grid md:grid-cols-[repeat(6,_1fr)] md:mt-3"
      >
        <div
          class="relative md:h-[33.66vw] md:overflow-x-hidden md:overflow-y-hidden md:col-end-auto"
          id="div-27"
        >
          <img
            src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F17%2Fgiray_johnhowland.jpg&amp;w=3840&amp;q=75"
            srcset="
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F17%2Fgiray_johnhowland.jpg&amp;w=640&amp;q=75   640w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F17%2Fgiray_johnhowland.jpg&amp;w=750&amp;q=75   750w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F17%2Fgiray_johnhowland.jpg&amp;w=828&amp;q=75   828w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F17%2Fgiray_johnhowland.jpg&amp;w=1080&amp;q=75 1080w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F17%2Fgiray_johnhowland.jpg&amp;w=1200&amp;q=75 1200w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F17%2Fgiray_johnhowland.jpg&amp;w=1920&amp;q=75 1920w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F17%2Fgiray_johnhowland.jpg&amp;w=2048&amp;q=75 2048w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F17%2Fgiray_johnhowland.jpg&amp;w=3840&amp;q=75 3840w
            "
            class="bottom-0 left-0 object-cover absolute top-0 w-96 h-96"
          />
        </div>
        <div
          class="relative md:h-[33.66vw] md:overflow-x-hidden md:overflow-y-hidden md:col-end-auto"
          id="div-28"
        >
          <img
            src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F20%2Fzipfit-group4-canva.jpg&amp;w=3840&amp;q=75"
            srcset="
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F20%2Fzipfit-group4-canva.jpg&amp;w=640&amp;q=75   640w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F20%2Fzipfit-group4-canva.jpg&amp;w=750&amp;q=75   750w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F20%2Fzipfit-group4-canva.jpg&amp;w=828&amp;q=75   828w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F20%2Fzipfit-group4-canva.jpg&amp;w=1080&amp;q=75 1080w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F20%2Fzipfit-group4-canva.jpg&amp;w=1200&amp;q=75 1200w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F20%2Fzipfit-group4-canva.jpg&amp;w=1920&amp;q=75 1920w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F20%2Fzipfit-group4-canva.jpg&amp;w=2048&amp;q=75 2048w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F20%2Fzipfit-group4-canva.jpg&amp;w=3840&amp;q=75 3840w
            "
            class="bottom-0 left-0 object-cover absolute top-0 w-[55.42rem] h-96"
          />
        </div>
      </div>
    </div>
    <div
      class="bg-[linear-gradient(78.31deg,_rgb(255,_198,_185),_rgb(255,_244,_148)_21.88%,_rgb(203,_255,_186)_35.07%,_rgb(173,_238,_255)_50.55%,_rgb(182,_206,_255)_70.15%,_rgb(252,_194,_241)_99.03%)] py-1 w-full"
    >
      <div class="bg-white text-center p-6 lg:p-20 xl:p-28" id="div-29">
        <h5 class="text-4xl font-bold mb-10">As featured in</h5>
        <div class="md:flex md:items-center md:justify-center">
          <img
            src="https://media.crystallize.com/zipfit/22/10/1/27/backcountry-logo.svg"
            class="object-contain w-48 h-12"
          /><img
            src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F10%2F1%2F27%2Fblister-logo.png&amp;w=640&amp;q=75"
            srcset="
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F10%2F1%2F27%2Fblister-logo.png&amp;w=256&amp;q=75 1x,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F10%2F1%2F27%2Fblister-logo.png&amp;w=640&amp;q=75 2x
            "
            class="object-contain w-48 h-12"
          /><img
            src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F10%2F1%2F27%2Fskimaglogo.png&amp;w=640&amp;q=75"
            srcset="
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F10%2F1%2F27%2Fskimaglogo.png&amp;w=256&amp;q=75 1x,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F10%2F1%2F27%2Fskimaglogo.png&amp;w=640&amp;q=75 2x
            "
            class="object-contain w-48 h-12"
          /><img
            src="https://media.crystallize.com/zipfit/22/10/1/28/newschoolers.svg"
            class="object-contain w-48 h-12"
          /><img
            src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F10%2F1%2F27%2Fpowdermag-logo.png&amp;w=640&amp;q=75"
            srcset="
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F10%2F1%2F27%2Fpowdermag-logo.png&amp;w=256&amp;q=75 1x,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F10%2F1%2F27%2Fpowdermag-logo.png&amp;w=640&amp;q=75 2x
            "
            class="object-contain w-48 h-12"
          /><img
            src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F10%2F1%2F27%2Funlogo.png&amp;w=640&amp;q=75"
            srcset="
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F10%2F1%2F27%2Funlogo.png&amp;w=256&amp;q=75 1x,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F10%2F1%2F27%2Funlogo.png&amp;w=640&amp;q=75 2x
            "
            class="object-contain w-48 h-12"
          />
        </div>
      </div>
    </div>
    <div
      class="text-center my-10 overflow-hidden lg:mt-24 lg:mr-0 lg:mb-16 lg:ml-0"
    >
      <div
        class="flex-wrap justify-center px-6 flex -m-3 lg:pr-20 lg:pl-20 xl:pr-28 xl:pl-28"
      >
        <div class="px-3 w-full">
          <h2 class="text-[4.75rem] leading-none font-bold w-full">
            ZipFit in the wild
          </h2>
          <div class="text-neutral-500 text-2xl max-w-[50.00rem] mt-8 mx-auto">
            ZipFit aims to build meaningful relationships with ski shops,
            athletes, and customers, sourcing feedback and ideas to create the
            best products and an accessible, inclusive brand.
          </div>
          <div class="flex mt-10 font-bold uppercase" id="div-30">
            <a href="https://www.zipfit.com/global/blog" class="underline"
              ><button
                class="items-start bg-[linear-gradient(258.18deg,_rgb(173,_238,_255),_rgb(203,_255,_186))] cursor-pointer py-3 px-8 inline-block h-12 rounded"
                id="button-5"
              >
                See All Articles
              </button></a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="px-6 my-10 lg:pr-20 lg:pl-20 lg:mt-16 lg:mr-0 lg:mb-28 lg:ml-0 xl:pr-28 xl:pl-28"
    >
      <div
        class="gap-x-5 grid-cols-[repeat(6,_1fr)] grid-rows-[53.00rem] gap-y-16 grid"
      >
        <div
          style="grid-column-start: span 6"
          class="flex-col flex col-end-auto md:col-end-auto lg:col-end-auto"
          id="div-31"
        >
          <a
            href="https://www.zipfit.com/global/blog/zipfit-and-fischer-sports-develop-an-award-winning-rc4-pro-ski-boot"
            class="relative underline"
            ><img
              src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F6%2F1%2Fakp_fischer_alpine-9326.jpg&amp;w=3840&amp;q=75"
              srcset="
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F6%2F1%2Fakp_fischer_alpine-9326.jpg&amp;w=640&amp;q=75   640w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F6%2F1%2Fakp_fischer_alpine-9326.jpg&amp;w=750&amp;q=75   750w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F6%2F1%2Fakp_fischer_alpine-9326.jpg&amp;w=828&amp;q=75   828w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F6%2F1%2Fakp_fischer_alpine-9326.jpg&amp;w=1080&amp;q=75 1080w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F6%2F1%2Fakp_fischer_alpine-9326.jpg&amp;w=1200&amp;q=75 1200w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F6%2F1%2Fakp_fischer_alpine-9326.jpg&amp;w=1920&amp;q=75 1920w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F6%2F1%2Fakp_fischer_alpine-9326.jpg&amp;w=2048&amp;q=75 2048w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F6%2F1%2Fakp_fischer_alpine-9326.jpg&amp;w=3840&amp;q=75 3840w
              "
              class="bottom-0 cursor-pointer left-0 object-cover absolute top-0 w-80 h-80"
          /></a>
          <div class="flex-col flex-grow pt-8 flex">
            <div class="text-neutral-500">Press Features</div>
            <div
              class="bg-[linear-gradient(258.18deg,_rgb(173,_238,_255),_rgb(203,_255,_186))] w-20 h-1.5 my-4"
            ></div>
            <h5 class="text-4xl font-bold">
              ZipFit and Fischer Sports Develop an Award Winning RC4 Pro Ski
              Boot
            </h5>
            <div class="text-neutral-500 mt-4">
              In the Company's First OEM Partnership, ZipFit Helps Fischer
              Receive Recognition for Alpine Ski Boot of the Year.
            </div>
            <div class="mt-auto font-bold uppercase">
              <a
                href="https://www.zipfit.com/global/blog/zipfit-and-fischer-sports-develop-an-award-winning-rc4-pro-ski-boot"
                class="underline"
                ><button
                  class="items-start cursor-pointer py-3 px-8 text-center inline-block w-52 h-12 mt-8 border-2 border-zinc-800 border-solid rounded"
                >
                  Read article
                </button></a
              >
            </div>
          </div>
        </div>
        <div
          style="grid-column-start: span 6"
          class="flex-col flex col-end-auto md:col-end-auto lg:col-end-auto"
          id="div-32"
        >
          <a
            href="https://www.zipfit.com/global/blog/blister-gear30-innerboots-and-the-growth-of-zipfit"
            class="relative underline"
            ><img
              src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F7%2F3%2F15%2Fjh-zipfit-alta-75i2478-1-of-1.jpeg&amp;w=3840&amp;q=75"
              srcset="
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F7%2F3%2F15%2Fjh-zipfit-alta-75i2478-1-of-1.jpeg&amp;w=640&amp;q=75   640w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F7%2F3%2F15%2Fjh-zipfit-alta-75i2478-1-of-1.jpeg&amp;w=750&amp;q=75   750w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F7%2F3%2F15%2Fjh-zipfit-alta-75i2478-1-of-1.jpeg&amp;w=828&amp;q=75   828w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F7%2F3%2F15%2Fjh-zipfit-alta-75i2478-1-of-1.jpeg&amp;w=1080&amp;q=75 1080w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F7%2F3%2F15%2Fjh-zipfit-alta-75i2478-1-of-1.jpeg&amp;w=1200&amp;q=75 1200w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F7%2F3%2F15%2Fjh-zipfit-alta-75i2478-1-of-1.jpeg&amp;w=1920&amp;q=75 1920w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F7%2F3%2F15%2Fjh-zipfit-alta-75i2478-1-of-1.jpeg&amp;w=2048&amp;q=75 2048w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F7%2F3%2F15%2Fjh-zipfit-alta-75i2478-1-of-1.jpeg&amp;w=3840&amp;q=75 3840w
              "
              class="bottom-0 cursor-pointer left-0 object-cover absolute top-0 w-80 h-80"
          /></a>
          <div class="flex-col flex-grow pt-8 flex">
            <div class="text-neutral-500">Press Features</div>
            <div
              class="bg-[linear-gradient(258.18deg,_rgb(173,_238,_255),_rgb(203,_255,_186))] w-20 h-1.5 my-4"
            ></div>
            <h5 class="text-4xl font-bold">
              Blister Gear:30 - Innerboots and the Growth of ZipFit
            </h5>
            <div class="text-neutral-500 mt-4">
              (Mar. 10, 2023) Kara Williard and Jonathon Ellsworth talk with
              Jeff Colt, Brand Director of ZipFit, to make the case for why
              liners, or “inner boots” are one of the most overlooked yet most
              important pieces of gear.
            </div>
            <div class="mt-auto font-bold uppercase">
              <a
                href="https://www.zipfit.com/global/blog/blister-gear30-innerboots-and-the-growth-of-zipfit"
                class="underline"
                ><button
                  class="items-start cursor-pointer py-3 px-8 text-center inline-block w-52 h-12 mt-8 border-2 border-zinc-800 border-solid rounded"
                >
                  Read article
                </button></a
              >
            </div>
          </div>
        </div>
        <div
          style="grid-column-start: span 6"
          class="flex-col flex col-end-auto md:col-end-auto lg:col-end-auto"
          id="div-33"
        >
          <a
            href="https://www.zipfit.com/global/blog/national-sven-coomer-day"
            class="relative underline"
            ><img
              src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F5%2F5%2F1%2Fsven2bskiing2bcropped-1024x576.jpeg&amp;w=3840&amp;q=75"
              srcset="
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F5%2F5%2F1%2Fsven2bskiing2bcropped-1024x576.jpeg&amp;w=640&amp;q=75   640w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F5%2F5%2F1%2Fsven2bskiing2bcropped-1024x576.jpeg&amp;w=750&amp;q=75   750w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F5%2F5%2F1%2Fsven2bskiing2bcropped-1024x576.jpeg&amp;w=828&amp;q=75   828w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F5%2F5%2F1%2Fsven2bskiing2bcropped-1024x576.jpeg&amp;w=1080&amp;q=75 1080w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F5%2F5%2F1%2Fsven2bskiing2bcropped-1024x576.jpeg&amp;w=1200&amp;q=75 1200w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F5%2F5%2F1%2Fsven2bskiing2bcropped-1024x576.jpeg&amp;w=1920&amp;q=75 1920w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F5%2F5%2F1%2Fsven2bskiing2bcropped-1024x576.jpeg&amp;w=2048&amp;q=75 2048w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F5%2F5%2F1%2Fsven2bskiing2bcropped-1024x576.jpeg&amp;w=3840&amp;q=75 3840w
              "
              class="bottom-0 cursor-pointer left-0 object-cover absolute top-0 w-80 h-80"
          /></a>
          <div class="flex-col flex-grow pt-8 flex">
            <div class="text-neutral-500">Shop Talk</div>
            <div
              class="bg-[linear-gradient(258.18deg,_rgb(173,_238,_255),_rgb(203,_255,_186))] w-20 h-1.5 my-4"
            ></div>
            <h5 class="text-4xl font-bold">
              National Sven Coomer Day - The Official Start of Winter
            </h5>
            <div class="text-neutral-500 mt-4">
              <p>
                (Oct. 12, 2022)<br />Each summer we debate the official start of
                winter. Is it the first snowfall? Is it when the Blister Winter
                Buyer's Guide comes in the mail? Is it when skiers start
                reaching out about ZipFits and our phone starts ringing with
                more frequency?
              </p>
            </div>
            <div class="mt-auto font-bold uppercase">
              <a
                href="https://www.zipfit.com/global/blog/national-sven-coomer-day"
                class="underline"
                ><button
                  class="items-start cursor-pointer py-3 px-8 text-center inline-block w-52 h-12 mt-8 border-2 border-zinc-800 border-solid rounded"
                >
                  Read article
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-10 lg:mt-28 lg:mr-0 lg:mb-28 lg:ml-0">
      <div class="bg-white flex-wrap flex">
        <div class="order-1 relative w-full lg:w-2/4" id="div-34">
          <img
            src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F12%2F5%2F1%2Fje-2022-11-23-zipfit-monods-9581.jpg&amp;w=3840&amp;q=75"
            srcset="
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F12%2F5%2F1%2Fje-2022-11-23-zipfit-monods-9581.jpg&amp;w=384&amp;q=75   384w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F12%2F5%2F1%2Fje-2022-11-23-zipfit-monods-9581.jpg&amp;w=640&amp;q=75   640w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F12%2F5%2F1%2Fje-2022-11-23-zipfit-monods-9581.jpg&amp;w=750&amp;q=75   750w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F12%2F5%2F1%2Fje-2022-11-23-zipfit-monods-9581.jpg&amp;w=828&amp;q=75   828w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F12%2F5%2F1%2Fje-2022-11-23-zipfit-monods-9581.jpg&amp;w=1080&amp;q=75 1080w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F12%2F5%2F1%2Fje-2022-11-23-zipfit-monods-9581.jpg&amp;w=1200&amp;q=75 1200w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F12%2F5%2F1%2Fje-2022-11-23-zipfit-monods-9581.jpg&amp;w=1920&amp;q=75 1920w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F12%2F5%2F1%2Fje-2022-11-23-zipfit-monods-9581.jpg&amp;w=2048&amp;q=75 2048w,
              https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F22%2F12%2F5%2F1%2Fje-2022-11-23-zipfit-monods-9581.jpg&amp;w=3840&amp;q=75 3840w
            "
            class="bottom-0 left-0 object-cover absolute top-0 w-[41.75rem] h-[33.95rem]"
          />
        </div>
        <div class="items-center justify-center order-2 flex w-full lg:w-2/4">
          <div class="p-6 md:p-24">
            <h3 class="text-[3.63rem] leading-none font-bold">
              Find a dealer close to home
            </h3>
            <div class="text-neutral-500 text-2xl mt-6 mb-10">
              The best fitting experience is in person with a knowledgeable
              bootfitter. Support your local ski shops.
            </div>
            <div class="flex mt-10 font-bold uppercase" id="div-35">
              <a href="https://www.zipfit.com/global/dealers" class="underline"
                ><button
                  class="items-start bg-[linear-gradient(258.18deg,_rgb(173,_238,_255),_rgb(203,_255,_186))] cursor-pointer py-3 px-8 text-center inline-block h-12 rounded"
                  id="button-6"
                >
                  Find a dealer
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="text-center my-10 overflow-hidden lg:mt-24 lg:mr-0 lg:mb-16 lg:ml-0"
    >
      <div
        class="flex-wrap justify-center px-6 flex -m-3 lg:pr-20 lg:pl-20 xl:pr-28 xl:pl-28"
      >
        <div class="px-3 w-full">
          <h2 class="text-[4.75rem] leading-none font-bold w-full">
            Frequently asked questions
          </h2>
          <div class="text-neutral-500 text-2xl max-w-[50.00rem] mt-8 mx-auto">
            <em class="italic"
              >ZipFit is different and different can be intimidating. Find
              answers to some of your questions here or reach out to speak with
              us.</em
            >
          </div>
          <div class="flex mt-10 font-bold uppercase" id="div-36">
            <a href="https://app.zipfit.com/contactus" class="underline"
              ><button
                class="items-start bg-[linear-gradient(258.18deg,_rgb(173,_238,_255),_rgb(203,_255,_186))] cursor-pointer py-3 px-8 inline-block h-12 rounded"
                id="button-7"
              >
                Our Support Center
              </button></a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="px-6 max-w-[58.75rem] my-10 mx-auto lg:pr-20 lg:pl-20 xl:pr-28 xl:pl-28 md:mt-16 md:mr-auto md:mb-16 md:ml-auto"
    >
      <div>
        <div class="border-t-neutral-300 border-t-2 border-solid">
          <div class="items-center cursor-pointer text-2xl py-5 flex">
            <svg
              height="25"
              viewbox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 min-w-[1.50rem] mr-10"
            >
              <path
                d="M12 5.85889V19.8589"
                stroke="#303030"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path>
              <path
                d="M5 12.8589H19"
                stroke="#303030"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path></svg
            >Are ZipFit liners warm?
          </div>
          <div class="overflow-hidden">
            <div class="pb-5 pl-16">
              Yes. ZipFits position your foot correctly so that your ski boots
              don’t cut off circulation to your feet, this is the single best
              thing you can do to keep your feet and toes warm. Additionally,
              ZipFits feature a toe box constructed of neoprene, merino wool,
              and Thinsulate making for a far warmer fit that conventional foam
              liners. Neoprene naturally insulates, which is why surfers in the
              cold northern Atlantic use thick neoprene wetsuits. Pairing
              neoprene with thermoregulating merino wool and Thinsulate provide
              warmth without too much thickness, keeping your feet toasty
              without impacting your stability or reaction time.
            </div>
          </div>
        </div>
        <div class="border-t-neutral-300 border-t-2 border-solid">
          <div class="items-center cursor-pointer text-2xl py-5 flex">
            <svg
              height="25"
              viewbox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 min-w-[1.50rem] mr-10"
            >
              <path
                d="M12 5.85889V19.8589"
                stroke="#303030"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path>
              <path
                d="M5 12.8589H19"
                stroke="#303030"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path></svg
            >What separates ZipFit from other aftermarket liners?
          </div>
          <div class="overflow-hidden">
            <div class="pb-5 pl-16">
              ZipFits far exceed the industry standard. Unlike the
              thermomoldable foam used in competing liners, ZipFit’s OMFit cork
              composite material does not compress, meaning you’ll get a
              consistent fit and your liners won’t pack out, What’s more? You
              can add more cork to the ankles or tongue of the liner to dial in
              your perfect fit. Unlike foam injected liners that are
              “one-and-done,” you can tweak the amount of cork in your liners
              continuously and since ZipFits can outlast your shells, you can
              easily re-warm your ZipFits to make sure they fit perfectly in
              your new shells.
            </div>
          </div>
        </div>
        <div class="border-t-neutral-300 border-t-2 border-solid">
          <div class="items-center cursor-pointer text-2xl py-5 flex">
            <svg
              height="25"
              viewbox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 min-w-[1.50rem] mr-10"
            >
              <path
                d="M12 5.85889V19.8589"
                stroke="#303030"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path>
              <path
                d="M5 12.8589H19"
                stroke="#303030"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path></svg
            >Is there a warranty on liners?
          </div>
          <div class="overflow-hidden">
            <div class="pb-5 pl-16">
              Yes, all ZipFits have a 30 day money back warranty as long as the
              liners show no more than 5 days of use or alterations. We want to
              help you get the right fit, if you buy a pair of liners and
              they’re not what you’re looking for after a couple of days on
              snow, we will work with you to get the right liner or give you
              your money back.
            </div>
          </div>
        </div>
        <div class="border-t-neutral-300 border-t-2 border-solid">
          <div class="items-center cursor-pointer text-2xl py-5 flex">
            <svg
              height="25"
              viewbox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 min-w-[1.50rem] mr-10"
            >
              <path
                d="M12 5.85889V19.8589"
                stroke="#303030"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path>
              <path
                d="M5 12.8589H19"
                stroke="#303030"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path></svg
            >Are there any warranty exclusions?&nbsp;
          </div>
          <div class="overflow-hidden">
            <div class="pb-5 pl-16">
              Yes, if there is evidence that you did not follow proper care
              instructions, or if it’s clear that you skied the liners for more
              than 5 days, this may void your warranty.
            </div>
          </div>
        </div>
        <div class="border-t-neutral-300 border-t-2 border-solid">
          <div class="items-center cursor-pointer text-2xl py-5 flex">
            <svg
              height="25"
              viewbox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 min-w-[1.50rem] mr-10"
            >
              <path
                d="M12 5.85889V19.8589"
                stroke="#303030"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path>
              <path
                d="M5 12.8589H19"
                stroke="#303030"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path></svg
            >How soon will my order ship?&nbsp;
          </div>
          <div class="overflow-hidden">
            <div class="pb-5 pl-16">
              Orders typically ship within 3-5 days, if you want to request
              expedited shipping please reach out directly.
            </div>
          </div>
        </div>
        <div
          style="border-bottom-style: solid; border-top-style: solid"
          class="border-b-neutral-300 border-b-2 border-t-neutral-300 border-t-2"
        >
          <div class="items-center cursor-pointer text-2xl py-5 flex">
            <svg
              height="25"
              viewbox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 min-w-[1.50rem] mr-10"
            >
              <path
                d="M12 5.85889V19.8589"
                stroke="#303030"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path>
              <path
                d="M5 12.8589H19"
                stroke="#303030"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path></svg
            >How often should you replace your ski boot liners?
          </div>
          <div class="overflow-hidden">
            <div class="pb-5 pl-16">
              Many stock liners will change shape and “pack out” after 50-100
              days on snow. ZipFit liners often last skiers over 300-500 days on
              snow. ZipFit liners with the cork composite fill are dramatically
              different from stock foam liners as the cork material doesn’t
              compress or “pack out.” Read through our testimonials to learn
              more about how many days skiers get with a pair of ZipFits and how
              much better those ski days are.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
@media (max-width: 767px) {
  /* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */

  #div-1 {
    flex-direction: column !important;
  }
  #button-1 {
    width: 100% !important;
  }
  #button-2 {
    width: 100% !important;
  }
  #div-2 {
    width: 60vw !important;
    margin-top: -45vw !important;
    margin-right: auto !important;
    margin-bottom: 0px !important;
    margin-left: auto !important;
  }
  #div-14 {
    flex-direction: column !important;
  }
  #button-3 {
    width: 100% !important;
  }
  #div-16 {
    width: 100% !important;
  }
  #div-17 {
    width: 100% !important;
  }
  #div-18 {
    width: 100% !important;
  }
  #div-19 {
    width: 100% !important;
  }
  #div-20 {
    max-width: 80% !important;
    margin-top: 0px !important;
    margin-right: auto !important;
    margin-bottom: 0px !important;
    margin-left: auto !important;
  }
  #div-21 {
    width: 100% !important;
  }
  #div-22 {
    width: 100% !important;
    margin-top: 24px !important;
  }
  #div-24 {
    flex-direction: column !important;
  }
  #button-4 {
    width: 100% !important;
  }
  #div-25 {
    height: 50vw !important;
  }
  #div-26 {
    height: 80vw !important;
  }
  #div-27 {
    height: 80vw !important;
  }
  #div-28 {
    height: 50vw !important;
  }
  #div-29 {
    padding: 40px !important;
  }
  #div-30 {
    flex-direction: column !important;
  }
  #button-5 {
    width: 100% !important;
  }
  #div-35 {
    flex-direction: column !important;
  }
  #button-6 {
    width: 100% !important;
  }
  #div-36 {
    flex-direction: column !important;
  }
  #button-7 {
    width: 100% !important;
  }
}
@media (max-width: 1023px) {
  /* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */

  #h3-1 {
    margin-top: 40px !important;
  }
  #div-2 {
    width: 50vw !important;
    max-width: 500px !important;
    margin-top: -30vw !important;
    margin-right: auto !important;
    margin-bottom: 0px !important;
    margin-left: auto !important;
  }
  #div-3 {
    margin-bottom: 32px !important;
  }
  #div-4 {
    display: none !important;
  }
  #div-5 {
    margin-bottom: 32px !important;
  }
  #div-6 {
    display: none !important;
  }
  #div-7 {
    margin-bottom: 32px !important;
  }
  #div-8 {
    display: none !important;
  }
  #div-9 {
    margin-bottom: 32px !important;
  }
  #div-10 {
    display: none !important;
  }
  #div-11 {
    margin-bottom: 32px !important;
  }
  #div-12 {
    display: none !important;
  }
  #div-13 {
    display: none !important;
  }
  #div-15 {
    margin-top: 40px !important;
    margin-right: -24px !important;
    margin-bottom: 0px !important;
    margin-left: -24px !important;
  }
  #div-16 {
    width: 50% !important;
    margin-bottom: 24px !important;
  }
  #div-17 {
    width: 50% !important;
    margin-bottom: 24px !important;
  }
  #div-18 {
    width: 50% !important;
    margin-bottom: 24px !important;
  }
  #div-19 {
    width: 50% !important;
  }
  #div-23 {
    height: 100vw !important;
  }
  #div-32 {
    display: none !important;
  }
  #div-33 {
    display: none !important;
  }
  #div-34 {
    height: 100vw !important;
  }
}
@media (min-width: 768px) {
  #div-25 {
    grid-column-start: span 4 !important;
  }
  #div-26 {
    grid-column-start: span 2 !important;
  }
  #div-27 {
    grid-column-start: span 2 !important;
  }
  #div-28 {
    grid-column-start: span 4 !important;
  }
  #div-31 {
    grid-column-start: span 3 !important;
  }
  #div-32 {
    grid-column-start: span 3 !important;
  }
  #div-33 {
    grid-column-start: span 3 !important;
  }
}
@media (min-width: 1024px) {
  #div-31 {
    grid-column-start: span 2 !important;
  }
  #div-32 {
    grid-column-start: span 2 !important;
  }
  #div-33 {
    grid-column-start: span 2 !important;
  }
}
</style>
