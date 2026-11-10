---
title: CSS-Pseudoklasse `:active-view-transition`
short-title: :active-view-transition
slug: Web/CSS/Reference/Selectors/:active-view-transition
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:active-view-transition`** trifft auf das Wurzelelement eines Dokuments zu, während eine [Ansichtsübergangsanimation](/de/docs/Web/API/View_Transition_API#concepts_and_usage) läuft (_aktiv_ ist). Sobald der Übergang abgeschlossen ist, trifft sie nicht mehr zu.

## Syntax

```css
:root:active-view-transition ... {
  /* ... */
}
```

## Beispiele

### Einen aktiven Ansichtsübergang gestalten

Dieses Beispiel erweitert das [einfache Beispiel für einen Ansichtsübergang](/de/docs/Web/API/Document/startViewTransition#basic_usage) auf der Seite zu `startViewTransition`.

```html
<main>
  <section class="color">
    <h2>Color is changing!</h2>
  </section>
  <button id="change-color">Change Color</button>
</main>
```

Ein `<h2>`-Element hat zunächst den Stil `display: none`. Die Pseudoklasse `:active-view-transition` überschreibt diesen Stil für das `<h2>`-Element mit `display: block`.
Während des Ansichtsübergangs wird die Schaltfläche mit `visibility: hidden` ausgeblendet:

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
const updateColor = () => {
  colBlock.style = `--bg: ${colors[count]}`;
  count = count !== colors.length - 1 ? ++count : 0;
};
const changeColor = () => {
  if (!document.startViewTransition) {
    updateColor();
    return;
  }
  const transition = document.startViewTransition(() => {
    updateColor();
  });
};
const changeColorButton = document.querySelector("#change-color");
changeColorButton.addEventListener("click", changeColor);
changeColorButton.addEventListener("keypress", changeColor);
```

{{EmbedLiveSample('styling_an_active_view_transition', '100%', '120')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Pseudoklasse {{cssxref(":active-view-transition-type()")}}
- Methode [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
- [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung von Ansichtsübergangstypen](/de/docs/Web/API/View_Transition_API/Using_types)
