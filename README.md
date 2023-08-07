# Experience NTU UI

The innovative NTU-style component library.

## To Use This Library

### npm/yarn

```bash
npm install @better-ntu/experience-ntu-ui
```

### CDN

#### Import all components

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@better-ntu/experience-ntu-ui@latest/dist/bundle.min.css"
/>
```

#### Only import a subset of components

If you would like to import only a subset of the components, you can specify the path to the component's CSS file. For example, to import the **button** component:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@better-ntu/experience-ntu-ui@latest/dist/button.min.css"
/>
```

## For Developers

### Design Tokens

We are implementing this library based on the [concepts of design tokens](https://spectrum.adobe.com/page/design-tokens/), which are the basic visual elements of a design system. The design tokens are defined in the `src/tokens.json` folder. The tokens are then used in the `src/components/**.pcss` folder to create the components.
