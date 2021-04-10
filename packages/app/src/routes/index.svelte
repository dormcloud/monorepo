<script>
  import ExampleComponent from '../components/ExampleComponent.svelte'
  import { Icon } from '@pawcapsu/design/index.js'
</script>

<div class:centerer={true}>
  <!-- Here's how you could extract conditional class groups with @apply -->
  <ExampleComponent
    title="🌐 Sapper with PostCSS project base Yeah"
    paragraph="This is an example route and component to make sure everything's working."
  />

  <Icon name="grid" attrs={{ class: 'w-5 h-5 text-black' }} />
</div>

<style>
  .centerer {
    @apply flex-1 flex flex-col items-center justify-center;
  }
</style>
