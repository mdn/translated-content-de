---
title: "DOMRectReadOnly: fromRect() statische Methode"
short-title: fromRect()
slug: Web/API/DOMRectReadOnly/fromRect_static
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`fromRect()`** statische Methode des
[`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekts erstellt ein neues `DOMRectReadOnly`-
Objekt mit einer angegebenen Position und Abmessungen.

## Syntax

```js-nolint
DOMRectReadOnly.fromRect()
DOMRectReadOnly.fromRect(rectangle)
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

Eine Instanz von [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
