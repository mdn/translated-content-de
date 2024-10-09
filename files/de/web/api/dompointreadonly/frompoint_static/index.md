---
title: "DOMPointReadOnly: fromPoint() statische Methode"
short-title: fromPoint()
slug: Web/API/DOMPointReadOnly/fromPoint_static
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die statische **[`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)**
Methode `fromPoint()` erstellt und gibt ein neues
`DOMPointReadOnly`-Objekt zurück, basierend auf einem Quellpunkt.

Sie können auch ein neues `DOMPointReadOnly`-Objekt mit dem
[`DOMPointReadOnly()`](/de/docs/Web/API/DOMPointReadOnly/DOMPointReadOnly) Konstruktor erstellen.

## Syntax

```js-nolint
DOMPointReadOnly.fromPoint(sourcePoint)
```

### Parameter

- `sourcePoint`

  - : Eine Instanz von [`DOMPoint`](/de/docs/Web/API/DOMPoint) oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), oder ein Objekt mit den folgenden Eigenschaften, aus denen die Werte der neuen Punkt-Eigenschaften übernommen werden:

    - `x`
      - : Ein uneingeschränkter Gleitkommawert, der die `x`-Koordinate des Punktes im Raum angibt. Dies ist im Allgemeinen die horizontale Koordinate, wobei positive Werte nach rechts und negative Werte nach links zeigen. Der Standardwert ist `0`.
    - `y`
      - : Eine uneingeschränkte Gleitkommazahl, die die `y`-Koordinate des Punktes angibt. Dies ist die vertikale Koordinate, und ohne Anwendungen von Transformationen am Koordinatensystem sind positive Werte nach unten und negative Werte nach oben zur oberen Bildschirmkante hin. Der Standard ist `0`.
    - `z`
      - : Ein uneingeschränkter Gleitkommawert, der die `z`-Koordinate des Punktes angibt, welche (angenommen es gibt keine Transformationen, die die Situation ändern) die Tiefenkoordinate ist; positive Werte sind näher beim Benutzer und negative Werte ziehen sich in den Bildschirm zurück. Der Standardwert ist `0`.
    - `w`
      - : Der `w`-Perspektivenwert des Punktes, angegeben als uneingeschränkte Gleitkommazahl. Der Standard ist `1`.

### Rückgabewert

Ein neues [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Objekt (das identisch mit dem Quellpunkt ist).

## Beispiele

### Erstellen eines 2D-Punktes

Dieses Beispiel erstellt einen 2D-Punkt, indem ein Inline-Objekt angegeben wird, das die zu verwendenden Werte für [`x`](/de/docs/Web/API/DOMPointReadOnly/x) und [`y`](/de/docs/Web/API/DOMPointReadOnly/y) enthält. Die Eigenschaften `z` und `w` behalten ihre Standardwerte (`0` und `1` jeweils).

```js
const point2D = DOMPointReadOnly.fromPoint({ x: 25, y: 25 });
```

### Erstellen eines 3D-Punktes mit einem vorhandenen Punkt

In diesem Beispiel wird ein Punkt namens `origPoint` vom Typ [`DOMPoint`](/de/docs/Web/API/DOMPoint) erstellt, indem [`DOMPoint()`](/de/docs/Web/API/DOMPoint/DOMPoint) verwendet wird. Dieser Punkt wird dann als Eingabe für `fromPoint()` verwendet, um einen neuen Punkt namens `newPoint` zu erstellen.

```js
const origPoint = new DOMPoint(25, 25, 100, 0.5);

const newPoint = DOMPointReadOnly.fromPoint(origPoint);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
