---
title: "SVGElement: focus() Methode"
short-title: focus()
slug: Web/API/SVGElement/focus
l10n:
  sourceCommit: 3b135a0ae3b80cb24f6495fa8956c6631f5ce1ba
---

{{APIRef("SVG")}}

Die **`SVGElement.focus()`**-Methode setzt den Fokus auf das angegebene SVG-Element, sofern es fokussiert werden kann.
Das fokussierte Element ist das Element, das standardmäßig Tastatur- und ähnliche Ereignisse empfängt.

Standardmäßig wird der Browser das Element nach dem Fokussieren in den sichtbaren Bereich scrollen und möglicherweise eine sichtbare Kennzeichnung des fokussierten Elements bereitstellen (typischerweise durch die Anzeige eines "Fokusrings" um das Element).
Parameteroptionen werden bereitgestellt, um das automatische Scrollen zu deaktivieren und eine sichtbare Kennzeichnung auf Elementen zu erzwingen.

## Syntax

```js-nolint
focus()
focus(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein optionales Objekt zur Steuerung von Aspekten des Fokussierungsprozesses.
    Dieses Objekt kann die folgenden Eigenschaften enthalten:

    - `preventScroll` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Browser das Dokument scrollen soll, um das neu fokussierte Element in den sichtbaren Bereich zu bringen.
        Ein Wert von `false` für `preventScroll` (Standard) bedeutet, dass der Browser das Element nach dem Fokussieren in den sichtbaren Bereich scrollen wird.
        Wenn `preventScroll` auf `true` gesetzt ist, erfolgt kein Scrollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Fokussieren eines SVG-Elements

Dieses Beispiel verwendet eine Schaltfläche, um den Fokus auf ein SVG-Kreis-Element zu setzen.

#### HTML

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <circle id="myCircle" cx="100" cy="100" r="50" tabindex="0" fill="blue" />
  <button id="focusButton">Focus the circle</button>
</svg>
```

#### JavaScript

```js
document.getElementById("focusButton").addEventListener("click", () => {
  const circle = document.getElementById("myCircle");
  circle.focus();
});
```

## Spezifikationen

{{Specifications}}

## Hinweise

- Wenn Sie `SVGElement.focus()` aus einem mousedown-Ereignis-Handler aufrufen, müssen Sie `event.preventDefault()` aufrufen, um zu verhindern, dass der Fokus das `SVGElement` verlässt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGElement.blur`](/de/docs/Web/API/SVGElement/blur) um den Fokus von einem Element zu entfernen.
- [`HTMLElement.focus`](/de/docs/Web/API/HTMLElement/focus) eine ähnliche Methode für HTML-Elemente.
