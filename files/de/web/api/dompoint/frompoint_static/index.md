---
title: "DOMPoint: fromPoint() statische Methode"
short-title: fromPoint()
slug: Web/API/DOMPoint/fromPoint_static
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("DOM")}}

Die **`fromPoint()`** statische Methode der [`DOMPoint`](/de/docs/Web/API/DOMPoint) Schnittstelle erstellt und gibt ein neues veränderliches `DOMPoint`-Objekt zurück, das von einem Quellpunkt abgeleitet ist.

Sie können auch ein neues `DOMPoint`-Objekt mit dem
[`DOMPoint()`](/de/docs/Web/API/DOMPoint/DOMPoint) Konstruktor erstellen.

Obwohl diese Schnittstelle auf `DOMPointReadOnly` basiert, ist sie nicht unveränderlich;
die Eigenschaften innerhalb können nach Belieben geändert werden.

## Syntax

```js-nolint
DOMPoint.fromPoint(sourcePoint)
```

### Parameter

- `sourcePoint`

  - : Eine Instanz von [`DOMPoint`](/de/docs/Web/API/DOMPoint) oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), oder ein Objekt, das die folgenden Eigenschaften enthält, aus denen die Werte der Eigenschaften des neuen Punkts entnommen werden:

    - `x`
      - : Ein nicht eingeschränkter Gleitkommawert, der die `x`-Koordinate des Punkts im Raum angibt. Dies ist in der Regel die horizontale Koordinate, wobei positive Werte nach rechts und negative Werte nach links zeigen. Der Standardwert ist `0`.
    - `y`
      - : Eine nicht eingeschränkte Gleitkommazahl, die die `y`-Koordinate des Punkts angibt. Dies ist die vertikale Koordinate, und abgesehen von Transformationen am Koordinatensystem sind positive Werte nach unten und negative Werte nach oben zum oberen Bildschirmrand gerichtet. Der Standardwert ist `0`.
    - `z`
      - : Ein nicht eingeschränkter Gleitkommawert, der die `z`-Koordinate des Punkts angibt, was (unter der Annahme keiner Transformationen, die die Situation ändern) die Tiefenkoordinate ist; positive Werte sind näher beim Benutzer und negative Werte ziehen sich zurück in den Bildschirm. Der Standardwert ist `0`.
    - `w`
      - : Der Perspektivwert `w` des Punkts, angegeben als nicht eingeschränkte Gleitkommazahl. Der Standardwert ist `1`.

### Rückgabewert

Ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt, dessen Koordinaten- und Perspektivwerte
mit denen des Quellpunkts identisch sind. Die Eigenschaften des Punkts sind veränderlich und können
jederzeit geändert werden.

## Beispiele

### Erstellung eines veränderlichen Punkts aus einem unveränderlichen Punkt

Wenn Sie ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Objekt haben, können Sie leicht eine veränderliche
Kopie dieses Punkts erstellen:

```js
const mutablePoint = DOMPoint.fromPoint(readOnlyPoint);
```

### Erstellung eines 2D-Punkts

Dieses Beispiel erstellt einen 2D-Punkt und gibt ein Inline-Objekt an, das die Werte enthält, die für [`x`](/de/docs/Web/API/DOMPointReadOnly/x) und [`y`](/de/docs/Web/API/DOMPointReadOnly/y) verwendet werden sollen.
Die _z_- und _w_-Eigenschaften dürfen ihre Standardwerte beibehalten (jeweils 0 und 1).

```js
const center = DOMPoint.fromPoint({ x: 75, y: -50, z: -55, w: 0.25 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
