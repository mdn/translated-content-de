---
title: "DOMMatrixReadOnly: Methode toJSON()"
short-title: toJSON()
slug: Web/API/DOMMatrixReadOnly/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("DOM")}}

Die Methode **`toJSON()`** der Schnittstelle [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `DOMMatrixReadOnly`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `DOMMatrixReadOnly`-Objekt vorkommt. Der serialisierte Wert kann anschließend innerhalb der Reviver-Funktion von {{jsxref("JSON.parse()")}} mit der Funktion [`DOMMatrixReadOnly.fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix_static) deserialisiert werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- `a`
- `b`
- `c`
- `d`
- `e`
- `f`
- `m11`
- `m12`
- `m13`
- `m14`
- `m21`
- `m22`
- `m23`
- `m24`
- `m31`
- `m32`
- `m33`
- `m34`
- `m41`
- `m42`
- `m43`
- `m44`
- [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D)
- [`isIdentity`](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity)

Der Wert jeder Eigenschaft wird unverändert kopiert.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel erstellt zwei `DOMMatrixReadOnly`-Objekte: eine 2D-Matrix und eine 3D-Matrix. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const matrix = new DOMMatrixReadOnly("translate(20px, 30px)");
const matrix3D = new DOMMatrixReadOnly("translate3d(22px, 55px, 66px)");

const json = matrix.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.is2D); // Same value as matrix.is2D
```

### In einen JSON-String serialisieren

Das `DOMMatrixReadOnly`-Objekt aus dem vorherigen Beispiel wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(matrix));
```

Dies würde einen JSON-String wie den folgenden ausgeben (zur besseren Lesbarkeit formatiert):

```json
{
  "a": 1,
  "b": 0,
  "c": 0,
  "d": 1,
  "e": 20,
  "f": 30,
  "m11": 1,
  "m12": 0,
  "m13": 0,
  "m14": 0,
  "m21": 0,
  "m22": 1,
  "m23": 0,
  "m24": 0,
  "m31": 0,
  "m32": 0,
  "m33": 1,
  "m34": 0,
  "m41": 20,
  "m42": 30,
  "m43": 0,
  "m44": 1,
  "is2D": true,
  "isIdentity": false
}
```

Das `matrix3D`-Objekt ist dreidimensional, daher hat `is2D` den Wert `false`:

```js
console.log(JSON.stringify(matrix3D));
```

Dies würde einen JSON-String wie den folgenden ausgeben (zur besseren Lesbarkeit formatiert):

```json
{
  "a": 1,
  "b": 0,
  "c": 0,
  "d": 1,
  "e": 22,
  "f": 55,
  "m11": 1,
  "m12": 0,
  "m13": 0,
  "m14": 0,
  "m21": 0,
  "m22": 1,
  "m23": 0,
  "m24": 0,
  "m31": 0,
  "m32": 0,
  "m33": 1,
  "m34": 0,
  "m41": 22,
  "m42": 55,
  "m43": 66,
  "m44": 1,
  "is2D": false,
  "isIdentity": false
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.toString()`](/de/docs/Web/API/DOMMatrixReadOnly/toString)
- [`DOMMatrix.setMatrixValue()`](/de/docs/Web/API/DOMMatrix/setMatrixValue)
