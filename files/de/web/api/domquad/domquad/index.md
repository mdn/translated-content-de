---
title: "DOMQuad: DOMQuad() Konstruktor"
short-title: DOMQuad()
slug: Web/API/DOMQuad/DOMQuad
l10n:
  sourceCommit: ad44886809ba4fac0cda32fd0c83a3dfbae14e57
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Der **`DOMQuad()`** Konstruktor erstellt und gibt ein neues [`DOMQuad`](/de/docs/Web/API/DOMQuad)-Objekt zurück, basierend auf den Werten für einige oder alle seiner Eigenschaften.

Sie können auch ein `DOMQuad` erstellen, indem Sie die statische Funktion [`DOMQuad.fromRect()`](/de/docs/Web/API/DOMQuad/fromRect_static) oder [`DOMQuad.fromQuad()`](/de/docs/Web/API/DOMQuad/fromQuad_static) aufrufen. Diese Funktionen akzeptieren jedes Objekt mit den erforderlichen Parametern, einschließlich eines [`DOMRect`](/de/docs/Web/API/DOMRect), [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) oder eines anderen `DOMQuad`.

## Syntax

```js-nolint
new DOMQuad()
new DOMQuad(p1)
new DOMQuad(p1, p2)
new DOMQuad(p1, p2, p3)
new DOMQuad(p1, p2, p3, p4)
```

### Parameter

- [`p1`](/de/docs/Web/API/DOMQuad/p1) {{optional_inline}}, [`p2`](/de/docs/Web/API/DOMQuad/p2) {{optional_inline}}, [`p3`](/de/docs/Web/API/DOMQuad/p3) {{optional_inline}}, [`p4`](/de/docs/Web/API/DOMQuad/p4) {{optional_inline}}
  - : Jeder ein [`DOMPoint`](/de/docs/Web/API/DOMPoint) oder ein Objekt mit denselben Eigenschaften, das eine Ecke des Quads darstellt.

## Beispiele

Dieses Beispiel erstellt ein `DOMQuad` unter Verwendung eines [`DOMPoint`](/de/docs/Web/API/DOMPoint) und drei weiterer als Objekte definierter Punkte.

```js
const point = new DOMPoint(2, 0);
const quad = new DOMQuad(
  point,
  { x: 12, y: 0 },
  { x: 12, y: 10 },
  { x: 2, y: 10 },
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
- [`DOMRect`](/de/docs/Web/API/DOMRect)
- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
