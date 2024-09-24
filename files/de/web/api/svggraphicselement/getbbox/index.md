---
title: "SVGGraphicsElement: getBBox()-Methode"
short-title: getBBox()
slug: Web/API/SVGGraphicsElement/getBBox
l10n:
  sourceCommit: 511b483843fa33373dd26eabc28beee59b995d01
---

{{APIRef("SVG")}}

Die **`SVGGraphicsElement.getBBox()`**-Methode ermöglicht es uns, die Koordinaten des kleinsten Rechtecks zu bestimmen, in das das Objekt passt. Die zurückgegebenen Koordinaten beziehen sich auf den aktuellen SVG-Raum (nach Anwendung aller Geometrieattribute auf alle im Zielelement enthaltenen Elemente).

> **Note:** `getBBox()` muss die tatsächliche Begrenzungsbox zum Zeitpunkt des Methodenaufrufs zurückgeben – auch wenn das Element noch nicht gerendert wurde. Es wird auch keine Transformation berücksichtigt, die auf das Element oder seine Eltern angewendet wurde.

> **Note:** `getBBox` gibt andere Werte zurück als {{domxref("Element.getBoundingClientRect()", "getBoundingClientRect()")}}, da Letzteres einen Wert relativ zum Sichtbereich zurückgibt.

## Syntax

```js-nolint
getBBox()
getBBox(options)
```

### Parameter

- `options` {{experimental_inline}} {{optional_inline}}

  - : Ein Optionswörterbuch, das steuert, welche Teile des Elements in die Begrenzungsbox aufgenommen werden. Die verfügbaren Optionen sind:

    - `fill`
      - : Ein boolescher Wert, der angibt, dass die Füllung in die Begrenzungsbox aufgenommen werden soll, standardmäßig `true`.
    - `stroke`
      - : Ein boolescher Wert, der angibt, dass die Kontur in die Begrenzungsbox aufgenommen werden soll, standardmäßig `false`.
    - `markers`
      - : Ein boolescher Wert, der angibt, dass die Markierungen in die Begrenzungsbox aufgenommen werden sollen, standardmäßig `false`.
    - `clipped`
      - : Ein boolescher Wert, der angibt, dass die Begrenzungsbox beschnitten werden soll, standardmäßig `false`.

### Rückgabewert

Der zurückgegebene Wert ist ein {{domxref("SVGRect")}}-Objekt, das die Begrenzungsbox definiert. Dieser Wert ist unabhängig von jedem darauf oder den Elternelementen angewendeten Transformationsattribut.

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
  <!-- Zeigt BBox in Grün -->
  <rect id="rect_1" stroke="#00ff00" stroke-width="3" fill="none"></rect>
  <!-- Zeigt BoundingClientRect in Rot -->
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

- [getBBox in SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#getBBox)
