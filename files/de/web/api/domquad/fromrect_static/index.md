---
title: "DOMQuad: fromRect() statische Methode"
short-title: fromRect()
slug: Web/API/DOMQuad/fromRect_static
l10n:
  sourceCommit: ad44886809ba4fac0cda32fd0c83a3dfbae14e57
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die statische Methode **`fromRect()`** der [`DOMQuad`](/de/docs/Web/API/DOMQuad)-Schnittstelle gibt ein neues `DOMQuad`-Objekt basierend auf den bereitgestellten Koordinatensätzen in Form eines [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekts zurück.

## Syntax

```js-nolint
DOMQuad.fromRect()
DOMQuad.fromRect(rect)
```

### Parameter

- `rect` {{optional_inline}}
  - : Ein [`DOMRect`](/de/docs/Web/API/DOMRect), [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) oder ein Objekt mit denselben Eigenschaften. Alle Eigenschaften haben standardmäßig den Wert `0`. Die Eigenschaften sind:
    - [`x`](/de/docs/Web/API/DOMRect/x) {{optional_inline}}
      - : Die x-Koordinate des Ursprungs (obere linke Ecke) des Rechtecks.
    - [`y`](/de/docs/Web/API/DOMRect/y) {{optional_inline}}
      - : Die y-Koordinate des Ursprungs (obere linke Ecke) des Rechtecks.
    - [`width`](/de/docs/Web/API/DOMRect/width) {{optional_inline}}
      - : Die Breite des Rechtecks.
    - [`height`](/de/docs/Web/API/DOMRect/height) {{optional_inline}}
      - : Die Höhe des Rechtecks.

### Rückgabewert

Ein [`DOMQuad`](/de/docs/Web/API/DOMQuad)-Objekt.

## Beispiele

### Erstellen eines rechteckigen Quads

Dieses Beispiel erstellt ein `DOMQuad` von Grund auf neu, das zufällig rechteckig ist. Die Verwendung von `fromRect()` ist bequemer als die Verwendung des [`DOMQuad()`](/de/docs/Web/API/DOMQuad/DOMQuad)-Konstruktors.

```js
const quad = DOMQuad.fromRect({ x: 10, y: 20, width: 100, height: 50 });

console.log(quad.p1); // DOMPoint {x: 10, y: 20, z: 0, w: 1}
console.log(quad.p2); // DOMPoint {x: 110, y: 20, z: 0, w: 1}
console.log(quad.p3); // DOMPoint {x: 110, y: 70, z: 0, w: 1}
console.log(quad.p4); // DOMPoint {x: 10, y: 70, z: 0, w: 1}
```

### Erstellen eines Quads von DOMRect

Dieses Beispiel zeigt, wie man ein `DOMQuad` aus einem [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt erstellt.

```js
const domRect = new DOMRect(50, 60, 200, 100);
const quad = DOMQuad.fromRect(domRect);

console.log(quad.p1); // DOMPoint {x: 50, y: 60, z: 0, w: 1}
console.log(quad.p2); // DOMPoint {x: 250, y: 60, z: 0, w: 1}
console.log(quad.p3); // DOMPoint {x: 250, y: 160, z: 0, w: 1}
console.log(quad.p4); // DOMPoint {x: 50, y: 160, z: 0, w: 1}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMQuad()`](/de/docs/Web/API/DOMQuad/DOMQuad) Konstruktor
- [`DOMRect`](/de/docs/Web/API/DOMRect)
- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
