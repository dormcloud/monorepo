<script context="module">
  export const preload = () => {}
</script>

<script>
  import { stores } from '@sapper/app'
  import { Icon } from '@dormcloud/design/index.js'

  // You may not want to use `segment`, but it is passed for the time being and will
  // create a warning if not expected: https://github.com/sveltejs/sapper-template/issues/210
  // https://github.com/sveltejs/sapper/issues/824
  export let segment = ''
  // Silence unused export property warning
  // eslint-disable-next-line no-empty
  if (segment) {
  }

  const { page } = stores()
  $: path = $page.path.slice(1)
</script>

<svelte:head>
  <title>
    {path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Dorm.cloud'}
  </title>
</svelte:head>

<!-- Header -->
<header style="z-index: 2;" class="w-full fixed top-0 h-16 flex justify-between items-center px-7 bg-white">
  <!-- Logotype -->
  <div class="flex items-center cursor-pointer transition ease-in-out duration-300 px-4 h-10 rounded-md hover:bg-black hover:bg-opacity-5">
    <Icon name="cloud" attrs={{ class: "w-6 h-6 text-black" }} />

    <h1 class="ml-1.5 text-black font-bold">dorm</h1>
  </div>

  <!-- Links -->
  <div class="flex items-center">
    <!-- Links -->
    <div class="flex items-center">
      <a href="/" class="mx-2 flex items-center text-black text-xs opacity-80 transition ease-in-out duration-300 px-4 h-10 rounded-md hover:bg-black hover:bg-opacity-5">Исследовать</a>
      <a href="/" class="mx-2 flex items-center text-black text-xs opacity-80 transition ease-in-out duration-300 px-4 h-10 rounded-md hover:bg-black hover:bg-opacity-5">Документация</a>

      <a href="/" class="mx-2 flex items-center text-black text-xs opacity-80 transition ease-in-out duration-300 px-4 h-10 rounded-md hover:bg-black hover:bg-opacity-5">
        <p>Другое</p>
        
        <Icon name="chevron-down" attrs={{ class: "w-4 h-4 ml-0.5" }} />
      </a>
    </div>

    <!-- Current profile -->
    <div class="cursor-pointer mx-2 flex items-center transition ease-in-out duration-300 px-4 h-10 rounded-md hover:bg-black hover:bg-opacity-5">
      <p class="mr-2 text-sm text-black font-medium opacity-80">Marsh Jameson</p>

      <div class="w-7 h-7 rounded-full text-xs text-white font-medium bg-green-400 flex items-center justify-center">
        MJ
      </div>
    </div>
  </div>
</header>

<slot />