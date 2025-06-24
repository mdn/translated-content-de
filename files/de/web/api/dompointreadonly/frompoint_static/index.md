---
title: "DOMPointReadOnly: fromPoint() statische Methode"
short-title: fromPoint()
slug: Web/API/DOMPointReadOnly/fromPoint_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die statische **[`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)**
Methode `fromPoint()` erstellt und gibt ein neues
`DOMPointReadOnly` Objekt zurück, basierend auf einem Quellpunkt.

Sie können auch ein neues `DOMPointReadOnly` Objekt mithilfe des
[`DOMPointReadOnly()`](/de/docs/Web/API/DOMPointReadOnly/DOMPointReadOnly) Konstruktors erstellen.

## Syntax

```js-nolint
DOMPointReadOnly.fromPoint(sourcePoint)
```

### Parameter

- `sourcePoint`
  - : Eine Instanz von [`DOMPoint`](/de/docs/Web/API/DOMPoint) oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), oder ein Objekt, das die folgenden Eigenschaften enthält, aus denen die Werte der neuen Punkt-Eigenschaften übernommen werden:
    - `x`
      - : Ein uneingeschränkter Gleitkommawert, der die `x`-Koordinate des Punktes im Raum angibt. Dies ist in der Regel die horizontale Koordinate, wobei positive Werte nach rechts und negative Werte nach links zeigen. Der Standardwert ist `0`.
    - `y`
      - : Eine uneingeschränkte Gleitkommazahl, die die `y`-Koordinate des Punktes angibt. Dies ist die vertikale Koordinate, und abgesehen von jeglichen an das Koordinatensystem angelegten Transformationen, sind positive Werte nach unten und negative Werte nach oben in Richtung der Oberseite des Bildschirms. Der Standardwert ist `0`.
    - `z`
      - : Ein uneingeschränkter Gleitkommawert, der die `z`-Koordinate des Punktes angibt, was (unter der Annahme, dass keine Transformationen die Situation ändern) die Tiefenkoordinate ist; positive Werte sind näher am Benutzer und negative Werte gehen zurück in den Bildschirm. Der Standardwert ist `0`.
    - `w`
      - : Der `w`-Perspektivenwert des Punktes, angegeben als uneingeschränkte Gleitkommazahl. Der Standardwert ist `1`.

### Rückgabewert

Ein neues [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Objekt (das mit dem Quellpunkt identisch ist).

## Beispiele

### Erstellen eines 2D-Punktes

Dieses Beispiel erstellt einen 2D-Punkt, indem es ein Inline-Objekt angibt, das die zu verwendenden Werte für [`x`](/de/docs/Web/API/DOMPointReadOnly/x) und [`y`](/de/docs/Web/API/DOMPointReadOnly/y) enthält. Die Eigenschaften `z` und `w` können ihre Standardwerte (`0` und `1` jeweils) beibehalten.

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
