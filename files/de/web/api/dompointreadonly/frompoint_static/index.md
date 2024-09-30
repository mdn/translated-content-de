---
title: "DOMPointReadOnly: fromPoint() statische Methode"
short-title: fromPoint()
slug: Web/API/DOMPointReadOnly/fromPoint_static
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("DOM")}}

Die statische **[`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)**-Methode `fromPoint()` erstellt und gibt ein neues `DOMPointReadOnly`-Objekt basierend auf einem Quellpunkt zurück.

Sie können auch ein neues `DOMPointReadOnly`-Objekt mit dem [`DOMPointReadOnly()`](/de/docs/Web/API/DOMPointReadOnly/DOMPointReadOnly)-Konstruktor erstellen.

## Syntax

```js-nolint
DOMPointReadOnly.fromPoint(sourcePoint)
```

### Parameter

- `sourcePoint`

  - : Eine Instanz von [`DOMPoint`](/de/docs/Web/API/DOMPoint) oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), oder ein Objekt, das die folgenden Eigenschaften enthält, aus denen die Werte der Eigenschaften des neuen Punktes entnommen werden:

    - `x`
      - : Ein unbeschränkter Gleitkommawert, der die `x`-Koordinate des Punktes im Raum angibt. Dies ist im Allgemeinen die horizontale Koordinate, wobei positive Werte nach rechts und negative Werte nach links zeigen. Der Standardwert ist `0`.
    - `y`
      - : Eine unbeschränkte Gleitkommazahl, die die `y`-Koordinate des Punktes angibt. Dies ist die vertikale Koordinate, und ohne Transformationen des Koordinatensystems zeigen positive Werte nach unten und negative Werte nach oben zum oberen Bildschirmrand. Der Standardwert ist `0`.
    - `z`
      - : Ein unbeschränkter Gleitkommawert, der die `z`-Koordinate des Punktes angibt, was (vorausgesetzt es gibt keine Transformationen, die die Situation verändern) die Tiefenkoordinate ist; positive Werte sind näher beim Benutzer und negative Werte ziehen sich in den Bildschirm zurück. Der Standardwert ist `0`.
    - `w`
      - : Der `w`-Perspektivwert des Punktes, angegeben als unbeschränkte Gleitkommazahl. Der Standardwert ist `1`.

### Rückgabewert

Ein neues [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekt (das identisch mit dem Quellpunkt ist).

## Beispiele

### Erstellen eines 2D-Punktes

Dieses Beispiel erstellt einen 2D-Punkt und gibt ein Inline-Objekt an, das die zu verwendenden Werte für [`x`](/de/docs/Web/API/DOMPointReadOnly/x) und [`y`](/de/docs/Web/API/DOMPointReadOnly/y) enthält. Die Eigenschaften `z` und `w` dürfen ihre Standardwerte (`0` bzw. `1`) behalten.

```js
const point2D = DOMPointReadOnly.fromPoint({ x: 25, y: 25 });
```

### Erstellen eines 3D-Punktes unter Verwendung eines vorhandenen Punktes

Dieses Beispiel erstellt einen Punkt `origPoint` vom Typ [`DOMPoint`](/de/docs/Web/API/DOMPoint) unter Verwendung von [`DOMPoint()`](/de/docs/Web/API/DOMPoint/DOMPoint). Dieser Punkt wird dann als Eingabe für `fromPoint()` verwendet, um einen neuen Punkt `newPoint` zu erstellen.

```js
const origPoint = new DOMPoint(25, 25, 100, 0.5);

const newPoint = DOMPointReadOnly.fromPoint(origPoint);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
