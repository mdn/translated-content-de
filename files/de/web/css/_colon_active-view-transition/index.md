---
title: :active-view-transition
slug: Web/CSS/:active-view-transition
l10n:
  sourceCommit: 462dc4b2f5c9eaef94d21da0f37ec3bf977c5592
---

Die **`:active-view-transition`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird auf das Wurzelelement eines Dokuments angewendet, wenn ein [Ansichtsübergang](/de/docs/Web/API/View_Transition_API#concepts_and_usage) (_active_) im Gange ist und sie hört auf zu greifen, sobald der Übergang abgeschlossen ist.

## Syntax

```css
:root:active-view-transition ... {
  /* ... */
}
```

## Beispiele

### Stilierung eines aktiven Ansichtsübergangs

Dieses Beispiel baut auf dem [Angleichungsübergang innerhalb desselben Dokuments](/de/docs/Web/API/Document/startViewTransition#same-document_view_transition) auf der `startViewTransition`-Seite auf.

```html
<main>
  <section class="color">
    <h2>Color is changing!</h2>
  </section>
  <button id="change-color">Change Color</button>
</main>
```

Ein `<h2>`-Element hat zunächst einen `display: none`-Stil, und dieser wird durch die `:active-view-transition`-Pseudoklasse überschrieben, indem der Stil des `<h2>`-Elements auf `display: block` gesetzt wird.
Der Button wird mit `visibility: hidden` versteckt, wenn der Ansichtsübergang im Gange ist:

```css hidden
html {
  --bg: indigo;
}
main {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
section {
  background-color: var(--bg);
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
::view-transition-group(root) {
  animation-duration: 2s;
}
```

```css
h2 {
  display: none;
  color: white;
}
:root:active-view-transition h2 {
  display: block;
}
:root:active-view-transition button {
  visibility: hidden;
}
```

```js hidden
const colors = ["darkred", "darkslateblue", "darkgreen"];
const colBlock = document.querySelector(".color");
let count = 0;
const updateColour = () => {
  colBlock.style = `--bg: ${colors[count]}`;
  count = count !== colors.length - 1 ? ++count : 0;
};
const changeColor = () => {
  if (!document.startViewTransition) {
    updateColour();
    return;
  }
  const transition = document.startViewTransition(() => {
    updateColour();
  });
};
const changeColorButton = document.querySelector("#change-color");
changeColorButton.addEventListener("click", changeColor);
changeColorButton.addEventListener("keypress", changeColor);
```

{{EmbedLiveSample('showing_view_transition_is_running', '100%', '120')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef(":active-view-transition-type", ":active-view-transition-type()")}} Pseudoklasse
- [`startViewTransition`](/de/docs/Web/API/Document/startViewTransition) Methode
