---
title: "DOMRectReadOnly: DOMRectReadOnly() Konstruktor"
short-title: DOMRectReadOnly()
slug: Web/API/DOMRectReadOnly/DOMRectReadOnly
l10n:
  sourceCommit: a631fd40bdc682a82be57be9932c9853a86ac1b5
---

{{APIRef("Geometry Interfaces")}}

Der **`DOMRectReadOnly()`** Konstruktor erstellt ein neues {{domxref("DOMRectReadOnly")}}-Objekt.

## Syntax

```js-nolint
new DOMRectReadOnly(x, y, width, height)
```

### Parameter

- `x`
  - : Die `x` Koordinate des Ursprungs des `DOMRectReadOnly`.
- `y`
  - : Die `y` Koordinate des Ursprungs des `DOMRectReadOnly`.
- `width`
  - : Die Breite des `DOMRectReadOnly`.
- `height`
  - : Die Höhe des `DOMRectReadOnly`.

## Beispiele

Um ein neues `DOMRectReadOnly` zu erstellen, könnten Sie eine Codezeile wie folgt ausführen:

```js
const myDOMRect = new DOMRectReadOnly(0, 0, 100, 100);
// 'myDOMRect' im Konsolenfenster ausführen würde dann zurückgeben
// DOMRectReadOnly { x: 0, y: 0, width: 100, height: 100, top: 0, right: 100, bottom: 100, left: 0 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}
