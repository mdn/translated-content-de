---
title: Pseudoklasse `:active-view-transition` in CSS
short-title: :active-view-transition
slug: Web/CSS/Reference/Selectors/:active-view-transition
l10n:
  sourceCommit: 3064cbe8212ea919874fb21120a89657afccba25
---

Die [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:active-view-transition`** trifft auf das Root-Element eines Dokuments zu, wenn ein [View Transition](/de/docs/Web/API/View_Transition_API#concepts_and_usage) ausgeführt wird (_aktiv_), und trifft nicht mehr zu, sobald der Übergang abgeschlossen ist.

## Syntax

```css
:root:active-view-transition ... {
  /* ... */
}
```

## Beispiele

### Gestaltung einer aktiven View Transition

Dieses Beispiel erweitert das [Beispiel für eine grundlegende View Transition](/de/docs/Web/API/Document/startViewTransition#basic_usage) auf der Seite zu `startViewTransition`.

```html
<main>
  <section class="color">
    <h2>Color is changing!</h2>
  </section>
  <button id="change-color">Change Color</button>
</main>
```

Ein `<h2>`-Element besitzt anfangs den Stil `display: none`, der mithilfe der Pseudoklasse `:active-view-transition` überschrieben wird, indem der Stil des `<h2>` auf `display: block` gesetzt wird.
Die Schaltfläche wird mit `visibility: hidden` ausgeblendet, während die View Transition ausgeführt wird:

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

{{EmbedLiveSample('showing_view_transition_is_running', '100%', '120')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Pseudoklasse {{cssxref(":active-view-transition-type()")}}
- Methode [`startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
- [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwenden der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwenden von View-Transition-Typen](/de/docs/Web/API/View_Transition_API/Using_types)
