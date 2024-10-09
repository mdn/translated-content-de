---
title: "DOMPoint: fromPoint() statische Methode"
short-title: fromPoint()
slug: Web/API/DOMPoint/fromPoint_static
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`fromPoint()`**-statische Methode des [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Interfaces erstellt und gibt ein neues veränderbares `DOMPoint`-Objekt zurück, basierend auf einem Quellpunkt.

Sie können auch ein neues `DOMPoint`-Objekt mit dem
[`DOMPoint()`](/de/docs/Web/API/DOMPoint/DOMPoint)-Konstruktor erstellen.

Obwohl dieses Interface auf `DOMPointReadOnly` basiert, ist es nicht schreibgeschützt;
die Eigenschaften innerhalb können nach Belieben geändert werden.

## Syntax

```js-nolint
DOMPoint.fromPoint(sourcePoint)
```

### Parameter

- `sourcePoint`

  - : Eine [`DOMPoint`](/de/docs/Web/API/DOMPoint)- oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Instanz oder ein Objekt mit den folgenden Eigenschaften, aus dem die Werte der neuen Punkt-Eigenschaften übernommen werden:

    - `x`
      - : Ein uneingeschränkter Gleitkommawert, der die `x`-Koordinate des Punkts im Raum angibt. Das ist im Allgemeinen die horizontale Koordinate, wobei positive Werte nach rechts und negative Werte nach links weisen. Der Standardwert ist `0`.
    - `y`
      - : Ein uneingeschränkter Gleitkommawert, der die `y`-Koordinate des Punkts angibt. Dies ist die vertikale Koordinate, und sofern keine Transformationen auf das Koordinatensystem angewendet werden, sind positive Werte abwärts und negative Werte aufwärts in Richtung der oberen Bildschirmseite. Der Standardwert ist `0`.
    - `z`
      - : Ein uneingeschränkter Gleitkommawert, der die `z`-Koordinate des Punkts angibt, was (unter der Annahme, dass keine die Situation verändernden Transformationen angewendet wurden) die Tiefenkoordinate ist; positive Werte sind näher beim Nutzer und negative Werte ziehen sich in den Bildschirm zurück. Der Standardwert ist `0`.
    - `w`
      - : Der Perspektivwert `w` des Punkts, angegeben als ein uneingeschränkter Gleitkommawert. Der Standardwert ist `1`.

### Rückgabewert

Ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt, dessen Koordinaten- und Perspektivwerte
identisch mit denen im Quellpunkt sind. Die Eigenschaften des Punkts sind veränderbar und können jederzeit geändert werden.

## Beispiele

### Erstellen eines veränderbaren Punkts aus einem schreibgeschützten Punkt

Wenn Sie ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekt haben, können Sie leicht eine veränderbare
Kopie dieses Punkts erstellen:

```js
const mutablePoint = DOMPoint.fromPoint(readOnlyPoint);
```

### Erstellen eines 2D-Punkts

Dieses Beispiel erstellt einen 2D-Punkt, indem ein Inline-Objekt angegeben wird, das die verwendeten Werte für [`x`](/de/docs/Web/API/DOMPointReadOnly/x) und [`y`](/de/docs/Web/API/DOMPointReadOnly/y) enthält.
Die _z_- und _w_-Eigenschaften können ihre Standardwerte behalten (0 bzw. 1).

```js
const center = DOMPoint.fromPoint({ x: 75, y: -50, z: -55, w: 0.25 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
