---
title: "Selection: Methode selectAllChildren()"
short-title: selectAllChildren()
slug: Web/API/Selection/selectAllChildren
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{ ApiRef("DOM") }}

Die Methode **`Selection.selectAllChildren()`** fügt alle Kinder des angegebenen Knotens zur Auswahl hinzu. Eine vorherige Auswahl geht verloren.

## Syntax

```js-nolint
selectAllChildren(parentNode)
```

### Parameter

- `parentNode`
  - : Alle Kinder von `parentNode` werden ausgewählt. `parentNode` selbst ist nicht Teil der Auswahl.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### HTML

```html
<main>
  <button>Select Footer</button>
  <p>Welcome to my website.</p>
  <p>I hope you enjoy your visit.</p>
</main>
<footer>
  <address>webmaster@example.com</address>
  <p>© 2019</p>
</footer>
```

### JavaScript

```js
const button = document.querySelector("button");
const footer = document.querySelector("footer");

button.addEventListener("click", (e) => {
  window.getSelection().selectAllChildren(footer);
});
```

### Ergebnis

{{EmbedLiveSample("Examples", 700, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), das Interface, zu dem es gehört.
