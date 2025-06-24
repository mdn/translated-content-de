---
title: "SVGElement: focus() Methode"
short-title: focus()
slug: Web/API/SVGElement/focus
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("SVG")}}

Die **`SVGElement.focus()`** Methode setzt den Fokus auf das angegebene SVG-Element, wenn es fokussierbar ist. Das fokussierte Element ist das Element, das standardmäßig Tastatur- und ähnliche Ereignisse erhält.

Standardmäßig scrollt der Browser das Element nach dem Fokussieren in den Ansichtsbereich, und er kann auch eine sichtbare Hervorhebung des fokussierten Elements bereitstellen (typischerweise durch das Anzeigen eines "Fokus-Rings" um das Element). Parameteroptionen werden bereitgestellt, um das standardmäßige Scrollen zu deaktivieren und eine sichtbare Hervorhebung auf Elementen zu erzwingen.

## Syntax

```js-nolint
focus()
focus(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein optionales Objekt zur Steuerung von Aspekten des Fokussierungsvorgangs. Dieses Objekt kann die folgenden Eigenschaften enthalten:
    - `preventScroll` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Browser das Dokument scrollen soll, um das neu fokussierte Element in den Ansichtsbereich zu bringen. Ein Wert von `false` für `preventScroll` (der Standardwert) bedeutet, dass der Browser das Element nach dem Fokussieren in den Ansichtsbereich scrollt. Wenn `preventScroll` auf `true` gesetzt ist, erfolgt kein Scrollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Fokussierung eines SVG-Elements

Dieses Beispiel verwendet einen Button, um den Fokus auf ein SVG-Kreis-Element zu setzen.

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

- Wenn Sie `SVGElement.focus()` von einem mousedown Event-Handler aus aufrufen, müssen Sie `event.preventDefault()` aufrufen, um zu verhindern, dass der Fokus das `SVGElement` verlässt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGElement.blur`](/de/docs/Web/API/SVGElement/blur) zum Entfernen des Fokus von einem Element.
- [`HTMLElement.focus`](/de/docs/Web/API/HTMLElement/focus) eine ähnliche Methode für HTML-Elemente.
