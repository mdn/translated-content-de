---
title: "DOMPoint: DOMPoint() Konstruktor"
short-title: DOMPoint()
slug: Web/API/DOMPoint/DOMPoint
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Der **`DOMPoint()`** Konstruktor erstellt und gibt ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt zurück, basierend auf den Werten für einige oder alle seiner Eigenschaften.

Sie können auch einen `DOMPoint` erstellen, indem Sie die statische Funktion [`DOMPoint.fromPoint()`](/de/docs/Web/API/DOMPoint/fromPoint_static) aufrufen. Diese Funktion akzeptiert jedes Objekt mit den erforderlichen Parametern, einschließlich eines `DOMPoint` oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly).

## Syntax

```js-nolint
new DOMPoint()
new DOMPoint(x)
new DOMPoint(x, y)
new DOMPoint(x, y, z)
new DOMPoint(x, y, z, w)
```

### Parameter

- `x` {{optional_inline}}
  - : Die `x`-Koordinate für den neuen `DOMPoint`.
- `y` {{optional_inline}}
  - : Die `y`-Koordinate für den neuen `DOMPoint`.
- `z` {{optional_inline}}
  - : Die `z`-Koordinate für den neuen `DOMPoint`.
- `w` {{optional_inline}}
  - : Der Perspektivwert des neuen `DOMPoint`.

## Beispiele

Dieses Beispiel erstellt einen `DOMPoint`, der die obere linke Ecke des aktuellen Fensters darstellt. Dann wird ein zweiter Punkt basierend auf dem ersten erstellt, der dann um 100 Pixel sowohl vertikal als auch horizontal versetzt wird.

```js
const windTopLeft = new DOMPoint(window.screenX, window.screenY);
const newTopLeft = DOMPoint.fromPoint(windTopLeft);
newTopLeft.x += 100;
newTopLeft.y += 100;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPointReadOnly()`](/de/docs/Web/API/DOMPointReadOnly/DOMPointReadOnly)
- [`DOMRect`](/de/docs/Web/API/DOMRect)
- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
