---
title: "DOMRectReadOnly: DOMRectReadOnly() Konstruktor"
short-title: DOMRectReadOnly()
slug: Web/API/DOMRectReadOnly/DOMRectReadOnly
l10n:
  sourceCommit: a631fd40bdc682a82be57be9932c9853a86ac1b5
---

{{APIRef("Geometry Interfaces")}}

Der **`DOMRectReadOnly()`** Konstruktor erstellt ein neues [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) Objekt.

## Syntax

```js-nolint
new DOMRectReadOnly(x, y, width, height)
```

### Parameter

- `x`
  - : Die `x` Koordinate des Ursprungs von `DOMRectReadOnly`.
- `y`
  - : Die `y` Koordinate des Ursprungs von `DOMRectReadOnly`.
- `width`
  - : Die Breite des `DOMRectReadOnly`.
- `height`
  - : Die Höhe des `DOMRectReadOnly`.

## Beispiele

Um ein neues `DOMRectReadOnly` zu erstellen, könnten Sie eine Zeile Code wie folgt ausführen:

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
