---
title: "`:active-view-transition` CSS-Pseudoklasse"
short-title: :active-view-transition
slug: Web/CSS/Reference/Selectors/:active-view-transition
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:active-view-transition`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) entspricht dem Wurzelelement eines Dokuments, wenn ein [View-Übergang](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange (_active_) ist und hört auf zuzutreffen, sobald der Übergang abgeschlossen ist.

## Syntax

```css
:root:active-view-transition ... {
  /* ... */
}
```

## Beispiele

### Stilierung eines aktiven View-Übergangs

Dieses Beispiel erweitert das [Beispiel für grundlegende View-Übergänge](/de/docs/Web/API/Document/startViewTransition#basic_usage) auf der `startViewTransition`-Seite.

```html
<main>
  <section class="color">
    <h2>Color is changing!</h2>
  </section>
  <button id="change-color">Change Color</button>
</main>
```

Ein `<h2>`-Element hat anfangs den Stil `display: none`, und dieser wird durch die Verwendung der `:active-view-transition` Pseudoklasse überschrieben, indem der Stil des `<h2>` auf `display: block` gesetzt wird. Der Button wird mit `visibility: hidden` verborgen, wenn der View-Übergang im Gange ist:

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

- {{cssxref(":active-view-transition-type()")}} Pseudoklasse
- [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) Methode
- [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung von View-Übergangstypen](/de/docs/Web/API/View_Transition_API/Using_types)
