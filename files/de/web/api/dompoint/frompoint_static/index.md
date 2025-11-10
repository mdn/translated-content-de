---
title: "DOMPoint: fromPoint() statische Methode"
short-title: fromPoint()
slug: Web/API/DOMPoint/fromPoint_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`fromPoint()`** statische Methode des [`DOMPoint`](/de/docs/Web/API/DOMPoint) Interfaces erstellt und gibt ein neues veränderbares `DOMPoint`-Objekt basierend auf einem Quellpunkt zurück.

Sie können auch ein neues `DOMPoint`-Objekt mit dem
[`DOMPoint()`](/de/docs/Web/API/DOMPoint/DOMPoint) Konstruktor erstellen.

Obwohl dieses Interface auf `DOMPointReadOnly` basiert, ist es nicht schreibgeschützt;
die Eigenschaften darin können nach Belieben geändert werden.

## Syntax

```js-nolint
DOMPoint.fromPoint(sourcePoint)
```

### Parameter

- `sourcePoint`
  - : Eine Instanz von [`DOMPoint`](/de/docs/Web/API/DOMPoint) oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), oder ein Objekt, das die folgenden Eigenschaften enthält, aus denen die Werte der neuen Punkt-Eigenschaften entnommen werden:
    - `x`
      - : Ein uneingeschränktes Fließkommawert, der die `x`-Koordinate des Punktes im Raum angibt. Dies ist generell die horizontale Koordinate, wobei positive Werte nach rechts und negative Werte nach links zeigen. Der Standardwert ist `0`.
    - `y`
      - : Eine uneingeschränkte Fließkommazahl, die die `y`-Koordinate des Punktes angibt. Dies ist die vertikale Koordinate, und sofern keine Transformationen auf das Koordinatensystem angewendet werden, zeigen positive Werte nach unten und negative Werte nach oben zum oberen Rand des Bildschirms. Der Standard ist `0`.
    - `z`
      - : Ein uneingeschränktes Fließkommawert, das die `z`-Koordinate des Punktes angibt, was (unter der Annahme, dass keine Transformationen die Situation ändern) die Tiefenkoordinate ist; positive Werte näher beim Benutzer und negative Werte entfernen sich vom Bildschirm. Der Standardwert ist `0`.
    - `w`
      - : Der `w` Perspektivwert des Punktes, angegeben als ein uneingeschränktes Fließkommawert. Der Standard ist `1`.

### Rückgabewert

Ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt, dessen Koordinaten- und Perspektivwerte mit denen im Quellpunkt identisch sind. Die Eigenschaften des Punktes sind veränderbar und können jederzeit geändert werden.

## Beispiele

### Erstellen eines veränderbaren Punktes aus einem schreibgeschützten Punkt

Wenn Sie ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Objekt haben, können Sie leicht eine veränderbare
Kopie dieses Punktes erstellen:

```js
const mutablePoint = DOMPoint.fromPoint(readOnlyPoint);
```

### Erstellen eines 2D-Punktes

Dieses Beispiel erstellt einen 2D-Punkt, indem ein Inline-Objekt angegeben wird, das die Werte zum
Verwenden für [`x`](/de/docs/Web/API/DOMPointReadOnly/x) und [`y`](/de/docs/Web/API/DOMPointReadOnly/y) enthält.
Die _z_ und _w_ Eigenschaften dürfen ihre Standardwerte behalten (0 bzw. 1).

```js
const center = DOMPoint.fromPoint({ x: 75, y: -50 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
