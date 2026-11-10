---
title: "MathMLElement: blur()-Methode"
short-title: blur()
slug: Web/API/MathMLElement/blur
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("MathML")}}

Die Methode **`blur()`** der Schnittstelle [`MathMLElement`](/de/docs/Web/API/MathMLElement) entfernt den Tastaturfokus vom aktuellen MathML-Element.

## Syntax

```js-nolint
blur()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Fokus von einem MathML-Element entfernen

#### HTML

```html
<div>
  <math>
    <msup id="myMath" tabindex="0">
      <mi>x</mi>
      <mn>2</mn>
    </msup>
  </math>
  <button id="focusButton">Focus the Math</button>
  <button id="blurButton">Blur the Math</button>
</div>
```

#### JavaScript

```js
const mathElement = document.getElementById("myMath");
const focusButton = document.getElementById("focusButton");
const blurButton = document.getElementById("blurButton");

// Focus the MathMLElement when the "Focus" button is clicked
focusButton.addEventListener("click", () => {
  mathElement.focus();
});

// Blur the MathMLElement when the "Blur" button is clicked
blurButton.addEventListener("click", () => {
  mathElement.blur();
});
```

### Ergebnis

{{EmbedLiveSample("remove_focus_from_a_mathml_element",100,100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MathMLElement.focus()`](/de/docs/Web/API/MathMLElement/focus)
- [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
