---
title: "DOMRectReadOnly: Methode toJSON()"
short-title: toJSON()
slug: Web/API/DOMRectReadOnly/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die Methode **`toJSON()`** der Schnittstelle [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `DOMRectReadOnly`-Objekt repräsentiert.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `DOMRectReadOnly`-Objekt angetroffen wird. Der serialisierte Wert kann anschließend mit der Funktion [`DOMRectReadOnly.fromRect()`](/de/docs/Web/API/DOMRectReadOnly/fromRect_static) innerhalb des Revivers von {{jsxref("JSON.parse()")}} deserialisiert werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`x`](/de/docs/Web/API/DOMRectReadOnly/x)
- [`y`](/de/docs/Web/API/DOMRectReadOnly/y)
- [`width`](/de/docs/Web/API/DOMRectReadOnly/width)
- [`height`](/de/docs/Web/API/DOMRectReadOnly/height)
- [`top`](/de/docs/Web/API/DOMRectReadOnly/top)
- [`right`](/de/docs/Web/API/DOMRectReadOnly/right)
- [`bottom`](/de/docs/Web/API/DOMRectReadOnly/bottom)
- [`left`](/de/docs/Web/API/DOMRectReadOnly/left)

Der Wert jeder Eigenschaft wird unverändert kopiert.

## Beispiele

### Direkter Aufruf von toJSON()

Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück, das die Eigenschaften des `DOMRectReadOnly`-Objekts enthält.

```js
const rect = new DOMRectReadOnly(10, 20, 100, 50);

const json = rect.toJSON();
console.log(json);
// { x: 10, y: 20, width: 100, height: 50, top: 20, right: 110, bottom: 70, left: 10 }
console.log(typeof json); // "object"
```

### Serialisierung zu einer JSON-Zeichenfolge

Das `DOMRectReadOnly`-Objekt aus dem vorherigen Beispiel wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
const rectJSON = JSON.stringify(rect);
console.log(rectJSON);
```

Dabei würde eine JSON-Zeichenfolge wie die folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "x": 10,
  "y": 20,
  "width": 100,
  "height": 50,
  "top": 20,
  "right": 110,
  "bottom": 70,
  "left": 10
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
