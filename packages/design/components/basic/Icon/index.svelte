<script>
  // Importing all icons
  import icons from './icons.json'

  // Default attributes
  let defaultAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: '24',
    height: '24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
  }

  // Variables
  $: attributes = {
    ...defaultAttrs,
    ...attrs,
  }

  // Exporting some variables;
  export let name
  export let attrs
</script>

{@html `<svg ${Object.keys(attributes)
  .map((key) => `${key}="${attributes[key]}"`)
  .join(' ')}>${icons[name]}</svg>`}
