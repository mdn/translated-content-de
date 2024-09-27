---
title: "DOMPointReadOnly: fromPoint() statische Methode"
short-title: fromPoint()
slug: Web/API/DOMPointReadOnly/fromPoint_static
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("DOM")}}

Die statische **[`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)**
Methode `fromPoint()` erstellt und gibt ein neues
`DOMPointReadOnly`-Objekt basierend auf einem Quellpunkt zurück.

Sie können auch ein neues `DOMPointReadOnly`-Objekt mit dem
[`DOMPointReadOnly()`](/de/docs/Web/API/DOMPointReadOnly/DOMPointReadOnly) Konstruktor erstellen.

## Syntax

```js-nolint
DOMPointReadOnly.fromPoint(sourcePoint)
```

### Parameter

- `sourcePoint`

  - : Eine Instanz von [`DOMPoint`](/de/docs/Web/API/DOMPoint) oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), oder ein Objekt, das die folgenden Eigenschaften enthält, aus denen die Werte der Eigenschaften des neuen Punktes extrahiert werden:

    - `x`
      - : Ein uneingeschränkter Gleitkommawert, der die `x`-Koordinate des Punktes im Raum angibt. Dies ist im Allgemeinen die horizontale Koordinate, wobei positive Werte nach rechts und negative nach links zeigen. Der Standardwert ist `0`.
    - `y`
      - : Eine uneingeschränkte Gleitkommazahl, die die `y`-Koordinate des Punktes angibt. Dies ist die vertikale Koordinate, und sofern keine Transformationen auf das Koordinatensystem angewendet werden, zeigen positive Werte nach unten und negative Werte nach oben auf den oberen Bildschirmrand. Der Standardwert ist `0`.
    - `z`
      - : Ein uneingeschränkter Gleitkommawert, der die `z`-Koordinate des Punktes angibt, welche (unter der Annahme, dass keine Transformationen angewendet werden) die Tiefenkoordinate ist; positive Werte sind näher am Benutzer und negative Werte ziehen sich in den Bildschirm zurück. Der Standardwert ist `0`.
    - `w`
      - : Der Perspektivenwert des Punktes `w`, angegeben als uneingeschränkte Gleitkommazahl. Der Standardwert ist `1`.

### Rückgabewert

Ein neues [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Objekt (welches mit dem Quellpunkt identisch ist).

## Beispiele

### Erstellen eines 2D-Punktes

Dieses Beispiel erstellt einen 2D-Punkt, indem es ein Inline-Objekt angibt, das die zu verwendenden Werte für [`x`](/de/docs/Web/API/DOMPointReadOnly/x) und [`y`](/de/docs/Web/API/DOMPointReadOnly/y) enthält. Die Eigenschaften `z` und `w` können ihre Standardwerte behalten (`0` und `1` jeweils).

```js
const point2D = DOMPointReadOnly.fromPoint({ x: 25, y: 25 });
```

### Erstellen eines 3D-Punktes mit einem bestehenden Punkt

Dieses Beispiel erstellt einen Punkt, `origPoint`, vom Typ
[`DOMPoint`](/de/docs/Web/API/DOMPoint) mit [`DOMPoint()`](/de/docs/Web/API/DOMPoint/DOMPoint). Dieser Punkt wird dann als Eingabe für `fromPoint()` verwendet, um einen neuen Punkt, `newPoint`, zu erstellen.

```js
const origPoint = new DOMPoint(25, 25, 100, 0.5);

const newPoint = DOMPointReadOnly.fromPoint(origPoint);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
