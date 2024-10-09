---
title: "DOMRect: fromRect() statische Methode"
short-title: fromRect()
slug: Web/API/DOMRect/fromRect_static
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`fromRect()`**-statische Methode des
[`DOMRect`](/de/docs/Web/API/DOMRect)-Objekts erstellt ein neues `DOMRect`-Objekt mit einem bestimmten Standort und Abmessungen.

## Syntax

```js-nolint
DOMRect.fromRect()
DOMRect.fromRect(rectangle)
```

### Parameter

- `rectangle` {{optional_inline}}

  - : Ein Objekt, das den Standort und die Abmessungen eines Rechtecks angibt. Alle Eigenschaften
    standardmäßig auf `0`. Die Eigenschaften sind:

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
