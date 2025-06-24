---
title: "DOMRect: fromRect() statische Methode"
short-title: fromRect()
slug: Web/API/DOMRect/fromRect_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`fromRect()`** statische Methode des
[`DOMRect`](/de/docs/Web/API/DOMRect)-Objekts erzeugt ein neues `DOMRect`
Objekt mit einer angegebenen Position und Abmessungen.

## Syntax

```js-nolint
DOMRect.fromRect()
DOMRect.fromRect(rectangle)
```

### Parameter

- `rectangle` {{optional_inline}}
  - : Ein Objekt, das die Position und Abmessungen eines Rechtecks angibt. Alle Eigenschaften
    haben standardmäßig den Wert `0`. Die Eigenschaften sind:
    - `x`: Die Koordinate der linken Seite des Rechtecks.
    - `y`: Die Koordinate der oberen Seite des Rechtecks.
    - `width`: Die Breite des Rechtecks.
    - `height`: Die Höhe des Rechtecks.

### Rückgabewert

Eine Instanz von [`DOMRect`](/de/docs/Web/API/DOMRect).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
