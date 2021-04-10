<script>
  import { Icon } from '@dormcloud/design/index.js'
</script>

<main class="w-full h-screen flex items-end justify-between p-8 pt-16 bg-blue-200 relative">
  <div class="w-1/2 relative">
    <!-- Text -->
    <h1 class="text-6xl text-black font-medium opacity-90">Превратите ваш компьютер в<br/>Облако</h1>
  
    <!-- Description -->
    <p class="my-6 text-lg text-black opacity-90">Мы не делаем и не хотим делать какую-то революцию. Мы просто хотим сделать так, что бы использование личного компьютера в качестве облака стало проще и дешевле.<br/><br/>Мощности вашего облака в ваших руках. Мы будем обеспечивать беспрерывную связь вашего облака с окружающим миром.</p>

    <!-- Buttons -->
    <div class="w-full flex items-center">
      <button class="w-1/2 flex items-center justify-center bg-green-400 rounded-md h-10 flex items-center">
        <Icon name="external-link" attrs={{ class: "w-4 h-4 mr-2" }} />

        Начать
      </button>

      <button class="ml-4 w-1/2 flex items-center justify-center bg-white bg-opacity-50 rounded-md h-10">
        Узнать больше
      </button>
    </div>
  </div>

  <!-- Card -->
  <div class="w-1/3 h-full flex items-center justify-center px-4 pt-8 relative">
    
    <div class="bg-white rounded-xl w-full h-full flex flex-col items-center justify-center relative">
      <!-- Dots -->
      <div class="w-full absolute top-0 flex items-center justify-center py-6">
        <div class="w-4 h-4 cursor-pointer bg-black rounded-full mx-3"></div>
        <div class="w-3 h-3 cursor-not-allowed border-2 border-black rounded-full mx-3"></div>
        <div class="w-3 h-3 cursor-not-allowed border-2 border-black rounded-full mx-3"></div>
      </div>

      <!-- Test card -->
      <div class="">

      </div>

    </div>
  
  </div>
</main>