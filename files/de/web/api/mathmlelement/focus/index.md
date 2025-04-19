---
title: "MathMLElement: focus() Methode"
short-title: focus()
slug: Web/API/MathMLElement/focus
l10n:
  sourceCommit: 7ef48e3e54f5003f735eafd4bd3a0c2aedb21c27
---

{{APIRef("MathML")}}

Die **`focus()`** Methode der [`MathMLElement`](/de/docs/Web/API/MathMLElement) Schnittstelle setzt den Fokus auf das angegebene MathML-Element, sofern es fokussiert werden kann. Das fokussierte Element ist das Element, das standardmäßig Tastatur- und ähnliche Ereignisse erhält.

Standardmäßig scrollt der Browser nach dem Fokussieren zu dem Element und kann auch eine sichtbare Kennzeichnung des fokussierten Elements bereitstellen (typischerweise durch die Anzeige eines "Fokusrahmens" um das Element). Es werden Parameteroptionen bereitgestellt, um das standardmäßige Scrollen zu deaktivieren und eine sichtbare Kennzeichnung auf Elementen zu erzwingen. Wenn Sie `focus()` aus einem `mousedown`-Ereignishandler aufrufen, müssen Sie `event.preventDefault()` aufrufen, um zu verhindern, dass der Fokus das `MathMLElement` verlässt.

## Syntax

```js-nolint
focus()
focus(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt zur Steuerung von Aspekten des Fokussierungsvorgangs.
    Dieses Objekt kann die folgenden Eigenschaften enthalten:
    - `preventScroll` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Browser das Dokument scrollen soll, um das neu fokussierte Element sichtbar zu machen. Ein Wert von `false` für `preventScroll` (der Standardwert) bedeutet, dass der Browser nach dem Fokussieren das Element in den sichtbaren Bereich scrollt. Wenn `preventScroll` auf `true` gesetzt ist, erfolgt kein Scrollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Fokussieren eines MathML-Elements

Dieses Beispiel verwendet einen Button, um den Fokus auf ein MathML-Kreis-Element zu setzen.

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

{{EmbedLiveSample("focus",100,100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MathMLElement.blur()`](/de/docs/Web/API/MathMLElement/blur)
- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)
