---
title: :active-view-transition
slug: Web/CSS/Reference/Selectors/:active-view-transition
l10n:
  sourceCommit: 8f7fa9e7aef0399c7a7f8e5a20476a0c2f287640
---

Die **`:active-view-transition`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) stimmt mit dem Wurzelelement eines Dokuments überein, wenn ein [View-Übergang](/de/docs/Web/API/View_Transition_API#concepts_and_usage) aktiv ist und hört auf abzugleichen, sobald der Übergang abgeschlossen ist.

## Syntax

```css
:root:active-view-transition ... {
  /* ... */
}
```

## Beispiele

### Styling eines aktiven View-Übergangs

Dieses Beispiel erweitert das [Grundlegende View-Übergangsbeispiel](/de/docs/Web/API/Document/startViewTransition#basic_usage) auf der `startViewTransition`-Seite.

```html
<main>
  <section class="color">
    <h2>Color is changing!</h2>
  </section>
  <button id="change-color">Change Color</button>
</main>
```

Ein `<h2>`-Element hat anfänglich einen Stil von `display: none`, und dies wird unter Verwendung der `:active-view-transition` Pseudoklasse überschrieben, indem der `<h2>`-Stil auf `display: block` gesetzt wird.
Der Button wird während des View-Übergangs mit `visibility: hidden` verborgen:

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
- [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) Methode
- [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung von View-Übergangstypen](/de/docs/Web/API/View_Transition_API/Using_types)
