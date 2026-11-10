---
title: "MathMLElement: focus()-Methode"
short-title: focus()
slug: Web/API/MathMLElement/focus
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("MathML")}}

Die Methode **`focus()`** der Schnittstelle [`MathMLElement`](/de/docs/Web/API/MathMLElement) setzt den Fokus auf das angegebene MathML-Element, sofern es fokussiert werden kann. Das fokussierte Element empfängt standardmäßig Tastaturereignisse und ähnliche Ereignisse.

Standardmäßig scrollt der Browser das Element nach dem Fokussieren in den sichtbaren Bereich. Er kann das fokussierte Element auch visuell hervorheben (üblicherweise durch einen „Fokusring“ um das Element). Mit Optionen lässt sich das standardmäßige Scrollen deaktivieren und eine sichtbare Hervorhebung erzwingen. Wenn Sie `focus()` aus einem `mousedown`-Event-Handler aufrufen, müssen Sie `event.preventDefault()` aufrufen, damit der Fokus das `MathMLElement` nicht verlässt.

## Syntax

```js-nolint
focus()
focus(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Aspekte des Fokussierungsvorgangs steuert.
    Dieses Objekt kann die folgenden Eigenschaften enthalten:
    - `preventScroll` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Browser das Dokument scrollen soll, um das neu fokussierte Element in den sichtbaren Bereich zu bringen. Der Wert `false` für `preventScroll` (die Standardeinstellung) bedeutet, dass der Browser das Element nach dem Fokussieren in den sichtbaren Bereich scrollt. Ist `preventScroll` auf `true` gesetzt, wird nicht gescrollt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Ein MathML-Element fokussieren

In diesem Beispiel wird mit einem Button der Fokus auf ein MathML-Kreiselement gesetzt.

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
</div>
```

#### JavaScript

```js
const mathElement = document.getElementById("myMath");

document.getElementById("focusButton").addEventListener("click", () => {
  mathElement.focus();
});
```

### Ergebnis

{{EmbedLiveSample("focusing_a_mathml_element",100,100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MathMLElement.blur()`](/de/docs/Web/API/MathMLElement/blur)
- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)
