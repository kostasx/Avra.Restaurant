// <script id="header" src="js/header.js"></script>

function init(){
    
    const headerHTML = `
    <!-- Add your site or application content here -->
    <header @keydown.escape="isOpen = false" class="relative flex h-screen w-full overflow-hidden" x-cloak
      x-data="{ isOpen: false, nav_items: [], isLoading: true }" x-init="async () => {
        const response = await fetch('./config.json');
        const data = await response.json();
        nav_items = data.navigation;
        // console.log({ nav_items }, nav_items.length);
        isLoading = false;
      }">
  
      <!-- Navbar -->
      <nav
        class="relative z-20 top-0 right-0 w-full inline-block px-10 pt-5 text-2xl text-white bg-transparent bg-opacity-50 rounded-xl">
        <div class="flex justify-between items-center">
          <div>
            <img alt="Picnic Bistro Logo" class="h-20 lg:h-32" src="assets/img/picnic-logo-white.svg">
          </div>
          <div class="hidden lg:block">
  
            <ul class="flex">
              <template x-for="nav_item, index in nav_items">
                <li class="px-4 py-4">
                  <a class="text-menu--item tracking-widest" x-bind:href="nav_item.URL" x-text="nav_item.label"></a>
                </li>
              </template>
            </ul>
  
            <!-- <div x-cloak x-data="{nav_items: [], isLoading: true }">
              <template x-for="nav_item, index in nav_items">
                  <li class="px-4 py-4">
                    <a class="text-menu--item tracking-widest" href="contact.html">CONTACT</a>
                    <span x-text="index+1"></span>
                    <span x-text="nav_item.label"></span>
                    <span x-text="nav_item.URL"></span>
                  </li>
              </template>
            </div> -->
  
            <!-- <ul class="flex">
              <li class="px-4 py-4">
                <a class="text-menu--item tracking-widest font-thin" href="meniu.html">MENU</a>
              </li>
              <li class="px-4 py-4">
                <a class="text-menu--item tracking-widest" href="rezervari.html">RESERVATIONS</a>
              </li>
              <li class="px-4 py-4">
                <a class="text-menu--item tracking-widest" href="contact.html">CONTACT</a>
              </li>
            </ul> -->
  
          </div>
  
          <!-- HAMBURGER MENU (MOBILE) -->
          <div class="block lg:hidden">
            <button :class="{ 'transition transform-180': isOpen }" @click="isOpen = !isOpen"
              class="block lg:hidden px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white"
              type="button">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  fill-rule="evenodd" x-show="isOpen" />
                <path
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  fill-rule="evenodd" x-show="!isOpen" />
              </svg>
            </button>
          </div>
          <!-- HAMBURGER MENU (MOBILE) -->
  
  
        </div>
        <div :class="{ 'block': isOpen, 'hidden': !isOpen }" @click.away="isOpen = false"
          class="w-full h-full z-50 lg:hidden lg:flex lg:items-center lg:w-auto text-right" x-show.transition="true">
          <ul class="pt-6 lg:pt-0 list-reset lg:flex justify-start flex-1 items-center">
            <li class="mr-3">
              <a @click="isOpen = true" class="inline-block py-2 px-4 text-white no-underline" href="index.html">HOME
              </a>
            </li>
            <li class="mr-3">
              <a @click="isOpen = false"
                class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="meniu.html">MENIU
              </a>
            </li>
            <li class="mr-3">
              <a @click="isOpen = false"
                class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="rezervari.html">REZERVARI
              </a>
            </li>
            <li class="mr-3">
              <a @click="isOpen = false"
                class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="contact.html">CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- Mobile Links -->
  
      <!-- Hero  -->
      <div id="hero" class="absolute z-10 w-full h-full object-cover"
        style="background-image: url(assets/img/1280px-20100726_Kalamitsi_Beach_Ionian_Sea_Lefkada_island_Greece.jpg);">
      </div>
      <!-- Hero  -->
  
      <!-- Video Background Element -->
      <!-- <video autoplay class="absolute z-10 w-full h-full object-cover" id="myVideo" playsinline
           loop muted poster="assets/img/sunset.jpg">
      <source src="assets/img/video/picnic.mp4" type="video/mp4">
    </video> -->
  
    </header>
    `
    header.insertAdjacentHTML("afterend", headerHTML );

}

init();