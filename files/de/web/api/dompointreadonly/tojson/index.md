---
title: "DOMPointReadOnly: Methode toJSON()"
short-title: toJSON()
slug: Web/API/DOMPointReadOnly/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die Methode **`toJSON()`** der Schnittstelle [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `DOMPointReadOnly`-Objekt repräsentiert.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `DOMPointReadOnly`-Objekt vorkommt. Der serialisierte Wert kann anschließend mit der Funktion [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static) im Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`x`](/de/docs/Web/API/DOMPointReadOnly/x)
- [`y`](/de/docs/Web/API/DOMPointReadOnly/y)
- [`z`](/de/docs/Web/API/DOMPointReadOnly/z)
- [`w`](/de/docs/Web/API/DOMPointReadOnly/w)

Der Wert jeder Eigenschaft wird unverändert kopiert.

## Beispiele

### toJSON() direkt aufrufen

Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt mit den Eigenschaften des `DOMPointReadOnly`-Objekts zurück.

```js
const point = new DOMPointReadOnly(10, 20);

const json = point.toJSON();
console.log(json);
// { x: 10, y: 20, z: 0, w: 1 }
console.log(typeof json); // "object"
```

### In einen JSON-String serialisieren

Das `DOMPointReadOnly`-Objekt aus dem vorherigen Beispiel wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
const pointJSON = JSON.stringify(point);
console.log(pointJSON);
```

Dadurch würde ein JSON-String wie der folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "x": 10,
  "y": 20,
  "z": 0,
  "w": 1
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
