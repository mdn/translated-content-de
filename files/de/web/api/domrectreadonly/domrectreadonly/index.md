---
title: "DOMRectReadOnly: DOMRectReadOnly() Konstruktor"
short-title: DOMRectReadOnly()
slug: Web/API/DOMRectReadOnly/DOMRectReadOnly
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Der **`DOMRectReadOnly()`** Konstruktor erstellt ein neues [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) Objekt.

## Syntax

```js-nolint
new DOMRectReadOnly(x, y, width, height)
```

### Parameter

- `x`
  - : Die `x`-Koordinate des Ursprungs des `DOMRectReadOnly`.
- `y`
  - : Die `y`-Koordinate des Ursprungs des `DOMRectReadOnly`.
- `width`
  - : Die Breite des `DOMRectReadOnly`.
- `height`
  - : Die Höhe des `DOMRectReadOnly`.

## Beispiele

Um ein neues `DOMRectReadOnly` zu erstellen, können Sie eine Codezeile wie folgt ausführen:

```js
const myDOMRect = new DOMRectReadOnly(0, 0, 100, 100);
// running 'myDOMRect' in the console would then return
// DOMRectReadOnly { x: 0, y: 0, width: 100, height: 100, top: 0, right: 100, bottom: 100, left: 0 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
- [`DOMRect`](/de/docs/Web/API/DOMRect)
