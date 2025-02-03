---
title: "SVGGraphicsElement: getScreenCTM() Methode"
short-title: getScreenCTM()
slug: Web/API/SVGGraphicsElement/getScreenCTM
l10n:
  sourceCommit: 9610581b70432f8f931b22d8d968fc3738996b3c
---

{{APIRef("SVG")}}

Die `getScreenCTM()`-Methode der [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)-Schnittstelle repräsentiert die Matrix, die das Koordinatensystem des aktuellen Elements in das Koordinatensystem des SVG-Viewports für das SVG-Dokumentfragment transformiert.

## Syntax

```js-nolint
getScreenCTM()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt.

## Beispiele

### Erhalten der Bildschirm-Transformationsmatrix

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
  <!-- Circle with translation and scale -->
  <circle
    id="circle"
    cx="50"
    cy="50"
    r="30"
    fill="blue"
    transform="translate(100, 150) scale(2)" />
</svg>
```

```js
const circle = document.getElementById("circle");

// Get the current screen transformation matrix
const screenCTM = circle.getScreenCTM();

console.log("Screen transformation matrix:");
console.log(
  `a: ${screenCTM.a}, b: ${screenCTM.b}, c: ${screenCTM.c}, d: ${screenCTM.d}, e: ${screenCTM.e}, f: ${screenCTM.f}`,
);
// Output: a: 2, b: 0, c: 0, d: 2, e: 100, f: 150
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
