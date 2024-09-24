---
title: "DOMPoint: fromPoint() statische Methode"
short-title: fromPoint()
slug: Web/API/DOMPoint/fromPoint_static
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("DOM")}}

Die **`fromPoint()`** statische Methode der {{domxref("DOMPoint")}} Schnittstelle erstellt und gibt ein neues veränderbares `DOMPoint` Objekt zurück, basierend auf einem Quellpunkt.

Sie können auch ein neues `DOMPoint` Objekt mit dem {{domxref("DOMPoint.DOMPoint", "DOMPoint()")}} Konstruktor erstellen.

Obwohl diese Schnittstelle auf `DOMPointReadOnly` basiert, ist sie nicht schreibgeschützt; die Eigenschaften können beliebig geändert werden.

## Syntax

```js-nolint
DOMPoint.fromPoint(sourcePoint)
```

### Parameter

- `sourcePoint`

  - : Eine Instanz von {{domxref("DOMPoint")}} oder {{domxref("DOMPointReadOnly")}}, oder ein Objekt mit den folgenden Eigenschaften, aus denen die Werte der neuen Punkt-Eigenschaften übernommen werden sollen:

    - `x`
      - : Ein uneingeschränkter Gleitkommawert, der die `x`-Koordinate des Punkts im Raum angibt. Dies ist im Allgemeinen die horizontale Koordinate, wobei positive Werte nach rechts und negative Werte nach links gehen. Der Standardwert ist `0`.
    - `y`
      - : Eine uneingeschränkte Gleitkommazahl, die die `y`-Koordinate des Punkts angibt. Dies ist die vertikale Koordinate, und sofern keine Transformationen auf das Koordinatensystem angewendet wurden, sind positive Werte nach unten und negative Werte nach oben zum oberen Rand des Bildschirms gerichtet. Der Standard ist `0`.
    - `z`
      - : Ein uneingeschränkter Gleitkommawert, der die `z`-Koordinate des Punkts angibt, welche (ohne Transformationen, die die Situation verändern) die Tiefenkoordinate ist; positive Werte sind näher zum Benutzer und negative Werte ziehen sich zurück in den Bildschirm. Der Standardwert ist `0`.
    - `w`
      - : Der Perspektivwert `w` des Punkts, angegeben als uneingeschränkte Gleitkommazahl. Der Standard ist `1`.

### Rückgabewert

Ein neues {{domxref("DOMPoint")}} Objekt, dessen Koordinaten- und Perspektivenwerte identisch mit denen des Quellpunkts sind. Die Eigenschaften des Punkts sind veränderbar und können jederzeit geändert werden.

## Beispiele

### Erstellen eines veränderbaren Punkts aus einem schreibgeschützten Punkt

Wenn Sie ein {{domxref("DOMPointReadOnly")}} Objekt haben, können Sie leicht eine veränderbare Kopie dieses Punkts erstellen:

```js
const mutablePoint = DOMPoint.fromPoint(readOnlyPoint);
```

### Erstellen eines 2D-Punkts

Dieses Beispiel erstellt einen 2D-Punkt, indem ein Inline-Objekt angegeben wird, das die zu verwendenden Werte für {{domxref("DOMPointReadOnly.x", "x")}} und {{domxref("DOMPointReadOnly.y", "y")}} enthält. Die _z_ und _w_ Eigenschaften dürfen ihre Standardwerte (0 und 1 bzw.) beibehalten.

```js
const center = DOMPoint.fromPoint({ x: 75, y: -50, z: -55, w: 0.25 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
