---
title: "SVGGraphicsElement: getBBox() Methode"
short-title: getBBox()
slug: Web/API/SVGGraphicsElement/getBBox
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

Die **`SVGGraphicsElement.getBBox()`**-Methode ermöglicht es uns, die Koordinaten des kleinsten Rechtecks zu ermitteln, in das das Objekt passt. Die zurückgegebenen Koordinaten beziehen sich auf den aktuellen SVG-Raum (nach der Anwendung aller Geometrie-Attribute auf alle im Zielelement enthaltenen Elemente).

> **Hinweis:** `getBBox()` muss das tatsächliche Begrenzungsrechteck zu dem Zeitpunkt zurückgeben, an dem die Methode aufgerufen wurde – auch wenn das Element noch nicht gerendert wurde. Es berücksichtigt zudem keine auf das Element oder seine Eltern angewandten Transformationen.

> **Hinweis:** `getBBox` gibt andere Werte zurück als
> [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), da letztere Werte relativ zum Viewport zurückgibt.

## Syntax

```js-nolint
getBBox()
getBBox(options)
```

### Parameter

- `options` {{experimental_inline}} {{optional_inline}}

  - : Ein Options-Wörterbuch, das verwendet wird, um zu steuern, welche Teile des Elements im Begrenzungsrahmen enthalten sind. Die verfügbaren Optionen sind:

    - `fill`
      - : Ein boolescher Wert, der angibt, dass die Füllung im Begrenzungsrahmen enthalten sein soll, standardmäßig `true`.
    - `stroke`
      - : Ein boolescher Wert, der angibt, dass der Strich im Begrenzungsrahmen enthalten sein soll, standardmäßig `false`.
    - `markers`
      - : Ein boolescher Wert, der angibt, dass die Markierungen im Begrenzungsrahmen enthalten sein sollen, standardmäßig `false`.
    - `clipped`
      - : Ein boolescher Wert, der angibt, dass der Begrenzungsrahmen ausgeschnitten werden soll, standardmäßig `false`.

### Rückgabewert

Der zurückgegebene Wert ist ein [`SVGRect`](/de/docs/Web/API/SVGRect)-Objekt, das den Begrenzungsrahmen definiert. Dieser Wert ist unabhängig von einem darauf angewandten Transformationsattribut oder den Elternelementen.

## Beispiele

### HTML

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g id="group_text_1">
    <text x="5" y="16" transform="scale(2, 2)">Hello World!</text>
    <text x="8" y="32" transform="translate(0 20) scale(1.25 1)">
      Hello World Again!
    </text>
  </g>
  <!-- Shows BBox in green -->
  <rect id="rect_1" stroke="#00ff00" stroke-width="3" fill="none"></rect>
  <!-- Shows BoundingClientRect in red -->
  <rect id="rect_2" stroke="#ff0000" stroke-width="3" fill="none"></rect>
</svg>
```

### JavaScript

```js
const rectBBox = document.querySelector("#rect_1");
const rectBoundingClientRect = document.querySelector("#rect_2");
const groupElement = document.querySelector("#group_text_1");

const bboxGroup = groupElement.getBBox();
rectBBox.setAttribute("x", bboxGroup.x);
rectBBox.setAttribute("y", bboxGroup.y);
rectBBox.setAttribute("width", bboxGroup.width);
rectBBox.setAttribute("height", bboxGroup.height);

const boundingClientRectGroup = groupElement.getBoundingClientRect();
rectBoundingClientRect.setAttribute("x", boundingClientRectGroup.x);
rectBoundingClientRect.setAttribute("y", boundingClientRectGroup.y);
rectBoundingClientRect.setAttribute("width", boundingClientRectGroup.width);
rectBoundingClientRect.setAttribute("height", boundingClientRectGroup.height);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [getBBox im SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#getBBox)
