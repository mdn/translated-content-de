---
title: "DOMPoint: fromPoint() statische Methode"
short-title: fromPoint()
slug: Web/API/DOMPoint/fromPoint_static
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("DOM")}}

Die **`fromPoint()`** statische Methode des [`DOMPoint`](/de/docs/Web/API/DOMPoint) Interface erstellt und gibt ein neues veränderliches `DOMPoint`-Objekt auf Grundlage eines Quellpunktes zurück.

Sie können auch ein neues `DOMPoint`-Objekt mit dem [`DOMPoint()`](/de/docs/Web/API/DOMPoint/DOMPoint) Konstruktor erstellen.

Obwohl dieses Interface auf `DOMPointReadOnly` basiert, ist es nicht unveränderlich; die Eigenschaften können nach Belieben geändert werden.

## Syntax

```js-nolint
DOMPoint.fromPoint(sourcePoint)
```

### Parameter

- `sourcePoint`

  - : Eine Instanz von [`DOMPoint`](/de/docs/Web/API/DOMPoint) oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), oder ein Objekt mit den folgenden Eigenschaften, aus dem die Werte der Eigenschaften des neuen Punktes übernommen werden:

    - `x`
      - : Ein uneingeschränkter Gleitkommawert, der die `x`-Koordinate des Punktes im Raum angibt. Dies ist im Allgemeinen die horizontale Koordinate, wobei positive Werte nach rechts und negative Werte nach links zeigen. Der Standardwert ist `0`.
    - `y`
      - : Eine uneingeschränkte Gleitkommazahl, die die `y`-Koordinate des Punktes bereitstellt. Dies ist die vertikale Koordinate, und sofern keine Transformationen auf das Koordinatensystem angewendet werden, zeigen positive Werte nach unten und negative Werte nach oben in Richtung des oberen Bildschirmrands. Der Standardwert ist `0`.
    - `z`
      - : Ein uneingeschränkter Gleitkommawert, der die `z`-Koordinate des Punktes angibt, was (unter der Annahme, dass keine Transformationen die Situation ändern) die Tiefenkoordinate ist; positive Werte näher zum Benutzer und negative Werte ziehen sich in den Bildschirm zurück. Der Standardwert ist `0`.
    - `w`
      - : Der perspektivische `w`-Wert des Punktes, angegeben als uneingeschränkte Gleitkommazahl. Der Standardwert ist `1`.

### Rückgabewert

Ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt, dessen Koordinaten- und Perspektivwerte identisch mit denen im Quellpunkt sind. Die Eigenschaften des Punktes sind veränderlich und können jederzeit geändert werden.

## Beispiele

### Erstellen eines veränderlichen Punktes aus einem unveränderlichen Punkt

Wenn Sie ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Objekt haben, können Sie einfach eine veränderliche Kopie dieses Punktes erstellen:

```js
const mutablePoint = DOMPoint.fromPoint(readOnlyPoint);
```

### Erstellen eines 2D-Punktes

Dieses Beispiel erstellt einen 2D-Punkt, indem es ein Inline-Objekt angibt, das die zu verwendenden Werte für [`x`](/de/docs/Web/API/DOMPointReadOnly/x) und [`y`](/de/docs/Web/API/DOMPointReadOnly/y) enthält. Die Eigenschaften _z_ und _w_ dürfen ihre Standardwerte (0 bzw. 1) beibehalten.

```js
const center = DOMPoint.fromPoint({ x: 75, y: -50, z: -55, w: 0.25 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
