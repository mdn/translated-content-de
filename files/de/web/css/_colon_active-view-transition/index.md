---
title: :active-view-transition
slug: Web/CSS/:active-view-transition
l10n:
  sourceCommit: 90e5b796c5741c209aaa674e9ff86d4d7c8e0427
---

Die **`:active-view-transition`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) trifft auf das Wurzelelement eines Dokuments zu, wenn ein [View-Transition](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_aktiv_) und hört auf zuzutreffen, sobald die Transition abgeschlossen ist.

## Syntax

```css
:root:active-view-transition ... {
  /* ... */
}
```

## Beispiele

### Styling einer aktiven View-Transition

Dieses Beispiel basiert auf das [same-document view transition](/de/docs/Web/API/Document/startViewTransition#using_a_same-document_view_transition) Beispiel auf der `startViewTransition`-Seite.

```html
<main>
  <section class="color">
    <h2>Color is changing!</h2>
  </section>
  <button id="change-color">Change Color</button>
</main>
```

Ein `<h2>`-Element hat anfänglich einen Stil von `display: none`, und dies wird überschrieben durch die Verwendung der `:active-view-transition` Pseudoklasse, die den `<h2>`-Stil auf `display: block` setzt. Der Button wird mittels `visibility: hidden` ausgeblendet, wenn die View-Transition im Gange ist:

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
