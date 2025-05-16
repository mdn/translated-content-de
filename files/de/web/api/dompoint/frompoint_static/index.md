---
title: "DOMPoint: fromPoint() statische Methode"
short-title: fromPoint()
slug: Web/API/DOMPoint/fromPoint_static
l10n:
  sourceCommit: 8ca325817242d047bec7dc8250b2fb1bd176aea7
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die statische Methode **`fromPoint()`** der [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Schnittstelle erstellt und gibt ein neues veränderbares `DOMPoint`-Objekt zurück, das aus einem Quellpunkt erstellt wurde.

Ein neues `DOMPoint`-Objekt kann auch mit dem [`DOMPoint()`](/de/docs/Web/API/DOMPoint/DOMPoint)-Konstruktor erstellt werden.

Obwohl diese Schnittstelle auf `DOMPointReadOnly` basiert, ist sie nicht unveränderlich; die Eigenschaften können nach Belieben geändert werden.

## Syntax

```js-nolint
DOMPoint.fromPoint(sourcePoint)
```

### Parameter

- `sourcePoint`

  - : Eine Instanz von [`DOMPoint`](/de/docs/Web/API/DOMPoint) oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), oder ein Objekt, das die folgenden Eigenschaften enthält, aus denen die Werte für die Eigenschaften des neuen Punkts übernommen werden:

    - `x`
      - : Ein uneingeschränkter Gleitkommawert, der die `x`-Koordinate des Punktes im Raum angibt. Dies ist in der Regel die horizontale Koordinate, wobei positive Werte nach rechts und negative Werte nach links zeigen. Der Standardwert ist `0`.
    - `y`
      - : Eine uneingeschränkte Gleitkommazahl, die die `y`-Koordinate des Punktes angibt. Dies ist die vertikale Koordinate, und sofern keine Transformationen auf das Koordinatensystem angewendet werden, zeigen positive Werte nach unten und negative Werte nach oben in Richtung des oberen Bildschirmrandes. Der Standard ist `0`.
    - `z`
      - : Ein uneingeschränkter Gleitkommawert, der die `z`-Koordinate des Punktes angibt, was (unter der Annahme, dass keine Transformationen vorgenommen werden, die die Situation ändern) die Tiefenkoordinate ist; positive Werte sind näher beim Benutzer und negative Werte gehen in den Bildschirm zurück. Der Standardwert ist `0`.
    - `w`
      - : Der `w`-Perspektivwert des Punktes, angegeben als uneingeschränkte Gleitkommazahl. Der Standard ist `1`.

### Rückgabewert

Ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt, dessen Koordinaten- und Perspektivwerte mit denen im Quellpunkt identisch sind. Die Eigenschaften des Punktes sind veränderbar und können jederzeit geändert werden.

## Beispiele

### Erstellen eines veränderbaren Punktes von einem unveränderlichen Punkt

Wenn Sie ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekt haben, können Sie einfach eine veränderbare Kopie dieses Punktes erstellen:

```js
const mutablePoint = DOMPoint.fromPoint(readOnlyPoint);
```

### Erstellen eines 2D-Punktes

Dieses Beispiel erstellt einen 2D-Punkt, indem es ein Inline-Objekt spezifiziert, das die zu verwendenden Werte für [`x`](/de/docs/Web/API/DOMPointReadOnly/x) und [`y`](/de/docs/Web/API/DOMPointReadOnly/y) enthält. Die _z_- und _w_-Eigenschaften dürfen ihre Standardwerte behalten (0 bzw. 1).

```js
const center = DOMPoint.fromPoint({ x: 75, y: -50 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
