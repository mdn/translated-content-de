---
title: "SVGElement: blur() Methode"
short-title: blur()
slug: Web/API/SVGElement/blur
l10n:
  sourceCommit: 3b135a0ae3b80cb24f6495fa8956c6631f5ce1ba
---

{{APIRef("SVG")}}

Die **`SVGElement.blur()`**-Methode entfernt die Tastaturfokussierung vom aktuellen SVG-Element.

## Syntax

```js-nolint
blur()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Entfernen des Fokus von einem SVG-Kreis-Element

#### HTML

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <circle id="myCircle" cx="100" cy="100" r="50" tabindex="0" fill="blue" />
  <button id="focusButton">Focus the circle</button>
  <button id="blurButton">Blur the circle</button>
</svg>
```

#### JavaScript

```js
const circle = document.getElementById("myCircle");
const focusButton = document.getElementById("focusButton");
const blurButton = document.getElementById("blurButton");

// Focus the circle when the "Focus" button is clicked
focusButton.addEventListener("click", () => {
  circle.focus();
});

// Blur the circle when the "Blur" button is clicked
blurButton.addEventListener("click", () => {
  circle.blur();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGElement.focus`](/de/docs/Web/API/SVGElement/focus) setzt das Element als aktuellen Tastaturfokus.
- [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur) eine ähnliche Methode für HTML-Elemente.
