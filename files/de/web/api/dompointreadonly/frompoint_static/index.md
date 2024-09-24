---
title: "DOMPointReadOnly: fromPoint() statische Methode"
short-title: fromPoint()
slug: Web/API/DOMPointReadOnly/fromPoint_static
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("DOM")}}

Die statische Methode **{{domxref("DOMPointReadOnly")}}**
`fromPoint()` erstellt und gibt ein neues
`DOMPointReadOnly`-Objekt zurück, basierend auf einem Quellpunkt.

Sie können auch ein neues `DOMPointReadOnly`-Objekt mit dem
{{domxref("DOMPointReadOnly.DOMPointReadOnly", "DOMPointReadOnly()")}}-Konstruktor erstellen.

## Syntax

```js-nolint
DOMPointReadOnly.fromPoint(sourcePoint)
```

### Parameter

- `sourcePoint`

  - : Eine Instanz von {{domxref("DOMPoint")}} oder {{domxref("DOMPointReadOnly")}}, oder ein Objekt, das die folgenden Eigenschaften enthält, aus denen die Werte für die Eigenschaften des neuen Punkts übernommen werden:

    - `x`
      - : Ein uneingeschränkter Gleitkommawert, der die `x`-Koordinate des Punkts im Raum angibt. Dies ist in der Regel die horizontale Koordinate, wobei positive Werte nach rechts und negative Werte nach links liegen. Der Standardwert ist `0`.
    - `y`
      - : Eine uneingeschränkte Gleitkommazahl, die die `y`-Koordinate des Punkts angibt. Dies ist die vertikale Koordinate, und sofern keine Transformationen auf das Koordinatensystem angewendet werden, zeigen positive Werte nach unten und negative Werte nach oben, in Richtung der Oberseite des Bildschirms. Der Standardwert ist `0`.
    - `z`
      - : Ein uneingeschränkter Gleitkommawert, der die `z`-Koordinate des Punkts angibt, was (sofern keine Transformationen das Bild verändern) die Tiefenkoordinate ist; positive Werte sind näher beim Benutzer, und negative Werte gehen zurück in den Bildschirm. Der Standardwert ist `0`.
    - `w`
      - : Der `w`-Perspektivenwert des Punkts, angegeben als uneingeschränkte Gleitkommazahl. Der Standardwert ist `1`.

### Rückgabewert

Ein neues {{domxref("DOMPointReadOnly")}}-Objekt (das identisch mit dem Quellpunkt ist).

## Beispiele

### Erstellen eines 2D-Punkts

Dieses Beispiel erstellt einen 2D-Punkt, indem es ein Inline-Objekt spezifiziert, das die zu verwendenden Werte für {{domxref("DOMPointReadOnly.x", "x")}} und {{domxref("DOMPointReadOnly.y", "y")}} beinhaltet. Die Eigenschaften `z` und `w` behalten ihre Standardwerte (`0` bzw. `1`).

```js
const point2D = DOMPointReadOnly.fromPoint({ x: 25, y: 25 });
```

### Erstellen eines 3D-Punkts mithilfe eines bestehenden Punkts

Dieses Beispiel erstellt einen Punkt `origPoint` vom Typ {{domxref("DOMPoint")}}, indem es {{domxref("DOMPoint.DOMPoint", "DOMPoint()")}} verwendet. Dieser Punkt wird dann als Eingabe für `fromPoint()` verwendet, um einen neuen Punkt `newPoint` zu erstellen.

```js
const origPoint = new DOMPoint(25, 25, 100, 0.5);

const newPoint = DOMPointReadOnly.fromPoint(origPoint);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
