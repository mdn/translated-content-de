---
title: "DOMQuad: DOMQuad() Konstruktor"
short-title: DOMQuad()
slug: Web/API/DOMQuad/DOMQuad
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Der **`DOMQuad()`** Konstruktor erzeugt und gibt ein neues [`DOMQuad`](/de/docs/Web/API/DOMQuad)-Objekt zurück, unter Verwendung der Werte für einige oder alle seiner Eigenschaften.

Sie können auch ein `DOMQuad` erstellen, indem Sie die statische Funktion [`DOMQuad.fromRect()`](/de/docs/Web/API/DOMQuad/fromRect_static) oder [`DOMQuad.fromQuad()`](/de/docs/Web/API/DOMQuad/fromQuad_static) aufrufen. Diese Funktion akzeptiert jedes Objekt mit den erforderlichen Parametern, einschließlich eines `DOMQuad`, [`DOMPoint`](/de/docs/Web/API/DOMPoint) oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly).

## Syntax

```js-nolint
new DOMQuad()
new DOMQuad(p1)
new DOMQuad(p1, p2)
new DOMQuad(p1, p2, p3)
new DOMQuad(p1, p2, p3, p4)
```

### Parameter

- `p1` {{optional_inline}}
  - : Der `p1` [`DOMPoint`](/de/docs/Web/API/DOMPoint) für das neue `DOMQuad`.
- `p2` {{optional_inline}}
  - : Der `p2` [`DOMPoint`](/de/docs/Web/API/DOMPoint) für das neue `DOMQuad`.
- `p3` {{optional_inline}}
  - : Der `p3` [`DOMPoint`](/de/docs/Web/API/DOMPoint) für das neue `DOMQuad`.
- `p4` {{optional_inline}}
  - : Der `p4` [`DOMPoint`](/de/docs/Web/API/DOMPoint) für das neue `DOMQuad`.

## Beispiele

Dieses Beispiel erstellt ein `DOMQuad` unter Verwendung eines [`DOMPoint`](/de/docs/Web/API/DOMPoint) und drei weiteren als Objekte definierten Punkten.

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
