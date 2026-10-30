---
title: "DOMQuad: Methode toJSON()"
short-title: toJSON()
slug: Web/API/DOMQuad/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die Methode **`toJSON()`** der Schnittstelle [`DOMQuad`](/de/docs/Web/API/DOMQuad) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `DOMQuad`-Objekt darstellt.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `DOMQuad`-Objekt vorkommt. Der serialisierte Wert kann anschließend mit der Funktion [`DOMQuad.fromQuad()`](/de/docs/Web/API/DOMQuad/fromQuad_static) innerhalb des Revivers von {{jsxref("JSON.parse()")}} deserialisiert werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`p1`](/de/docs/Web/API/DOMQuad/p1)
- [`p2`](/de/docs/Web/API/DOMQuad/p2)
- [`p3`](/de/docs/Web/API/DOMQuad/p3)
- [`p4`](/de/docs/Web/API/DOMQuad/p4)

Der Wert jeder Eigenschaft wird unverändert übernommen. Wenn das zurückgegebene Objekt an {{jsxref("JSON.stringify()")}} übergeben wird, werden die Eigenschaften `p1`, `p2`, `p3` und `p4` mit [`DOMPointReadOnly.toJSON()`](/de/docs/Web/API/DOMPointReadOnly/toJSON) weiter serialisiert.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel erstellt ein `DOMQuad`-Objekt. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const topLeft = new DOMPoint(window.screenX, window.screenY);
const topRight = new DOMPoint(
  window.screenX + window.innerWidth,
  window.screenY,
);
const bottomLeft = new DOMPoint(
  window.screenX,
  window.screenY + window.innerHeight,
);
const bottomRight = new DOMPoint(
  window.screenX + window.innerWidth,
  window.screenY + window.innerHeight,
);

const quad = new DOMQuad(topLeft, topRight, bottomRight, bottomLeft);

const json = quad.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.p1.x); // Same value as quad.p1.x
```

### In einen JSON-String serialisieren

Das `DOMQuad`-Objekt aus dem vorherigen Beispiel wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
const quadJSON = JSON.stringify(quad);
console.log(quadJSON);
```

Für ein Fenster an den Bildschirmkoordinaten `(0, 0)` mit einer inneren Breite von `800` und einer inneren Höhe von `600` würde dabei ein JSON-String wie der folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "p1": {
    "x": 0,
    "y": 0,
    "z": 0,
    "w": 1
  },
  "p2": {
    "x": 800,
    "y": 0,
    "z": 0,
    "w": 1
  },
  "p3": {
    "x": 800,
    "y": 600,
    "z": 0,
    "w": 1
  },
  "p4": {
    "x": 0,
    "y": 600,
    "z": 0,
    "w": 1
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
