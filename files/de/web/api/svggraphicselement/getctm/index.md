---
title: "SVGGraphicsElement: getCTM()-Methode"
short-title: getCTM()
slug: Web/API/SVGGraphicsElement/getCTM
l10n:
  sourceCommit: 9610581b70432f8f931b22d8d968fc3738996b3c
---

{{APIRef("SVG")}}

Die `getCTM()`-Methode der [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)-Schnittstelle repräsentiert die Matrix, die das Koordinatensystem des aktuellen Elements in das Koordinatensystem seines SVG-Ansichtsfensters transformiert.

## Syntax

```js-nolint
getCTM()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt.

## Beispiele

### Ermitteln der Transformationsmatrix

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
  <!-- Circle transformed using translation -->
  <circle
    id="circle"
    cx="50"
    cy="50"
    r="30"
    fill="blue"
    transform="translate(100, 150)" />
</svg>
```

```js
const circle = document.getElementById("circle");

// Get the current transformation matrix
const ctm = circle.getCTM();

console.log("Matrix values:");
console.log(
  `a: ${ctm.a}, b: ${ctm.b}, c: ${ctm.c}, d: ${ctm.d}, e: ${ctm.e}, f: ${ctm.f}`,
);
// Output: Matrix values: a: 1, b: 0, c: 0, d: 1, e: 100, f: 150
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
