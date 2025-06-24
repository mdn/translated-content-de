---
title: "CanvasRenderingContext2D: clip()-Methode"
short-title: clip()
slug: Web/API/CanvasRenderingContext2D/clip
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Die **`CanvasRenderingContext2D.clip()`**-Methode der Canvas 2D API wandelt den aktuellen oder gegebenen Pfad in die aktuelle Schnittregion um. Die vorherige Schnittregion, falls vorhanden, wird mit dem aktuellen oder gegebenen Pfad geschnitten, um die neue Schnittregion zu erstellen.

Im Bild unten stellt die rote Umrandung eine Schnittregion in Form eines Sterns dar. Nur die Teile des Schachbrettmusters, die sich innerhalb der Schnittregion befinden, werden gezeichnet.

![Sternförmige Schnittregion](canvas_clipping_path.png)

> [!NOTE]
> Beachten Sie, dass die Schnittregion nur aus Formen konstruiert wird, die dem Pfad hinzugefügt werden. Es funktioniert nicht mit direkt auf die Leinwand gezeichneten Formprimitiven wie [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect). Stattdessen müssten Sie [`rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect) verwenden, um eine rechteckige Form zum Pfad hinzuzufügen, bevor Sie `clip()` aufrufen.

> [!NOTE]
> Clip-Pfade können nicht direkt zurückgesetzt werden. Sie müssen Ihren Canvas-Zustand mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) speichern, bevor Sie `clip()` aufrufen, und ihn wiederherstellen, sobald Sie mit dem Zeichnen im abgeschnittenen Bereich fertig sind, indem Sie [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) verwenden.

## Syntax

```js-nolint
clip()
clip(path)
clip(fillRule)
clip(path, fillRule)
```

### Parameter

- `fillRule`

  - : Der Algorithmus, um zu bestimmen, ob ein Punkt innerhalb oder außerhalb der Schnittregion liegt. Mögliche Werte:
    - `nonzero`
      - : Die [Non-Zero-Windungsregel](https://en.wikipedia.org/wiki/Nonzero-rule). Standardregel.
    - `evenodd`
      - : Die [Even-Odd-Windungsregel](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

- `path`
  - : Ein [`Path2D`](/de/docs/Web/API/Path2D)-Pfad, der als Schnittregion verwendet wird.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

### Eine einfache Schnittregion

Dieses Beispiel verwendet die `clip()`-Methode, um eine Schnittregion entsprechend der Form eines Kreisbogen zu erstellen. Zwei Rechtecke werden dann gezeichnet; nur die Teile innerhalb der Schnittregion werden wiedergegeben.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Schnittregion ist ein voller Kreis mit seinem Mittelpunkt bei (100, 75) und einem Radius von 50.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create circular clipping region
ctx.beginPath();
ctx.arc(100, 75, 50, 0, Math.PI * 2);
ctx.clip();

// Draw stuff that gets clipped
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "orange";
ctx.fillRect(0, 0, 100, 100);
```

#### Ergebnis

{{ EmbedLiveSample('A_simple_clipping_region', 700, 180) }}

### Einen Pfad und eine fillRule angeben

In diesem Beispiel werden zwei Rechtecke in einem Path2D-Objekt gespeichert, das dann als aktuelle Schnittregion mit der `clip()`-Methode festgelegt wird. Die `"evenodd"`-Regel erzeugt ein Loch, wo sich die Schnittrechtecke überschneiden; standardmäßig (mit der `"nonzero"`-Regel) würde es kein Loch geben.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create clipping path
let region = new Path2D();
region.rect(80, 10, 20, 130);
region.rect(40, 50, 100, 50);
ctx.clip(region, "evenodd");

// Draw stuff that gets clipped
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

#### Ergebnis

{{ EmbedLiveSample('Specifying_a_path_and_a_fillRule', 700, 180) }}

### Erstellen einer komplexen Schnittregion

Dieses Beispiel verwendet zwei Pfade, ein Rechteck und ein Quadrat, um eine komplexe Schnittregion zu erstellen. Die `clip()`-Methode wird zweimal aufgerufen: zuerst, um die aktuelle Schnittregion auf den Kreis mit einem `Path2D`-Objekt zu setzen, und dann erneut, um die Kreisschnittregion mit einem Quadrat zu erweitern. Die endgültige Schnittregion ist eine Form, die die Schnittmenge von Kreis und Quadrat darstellt.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create two clipping paths
let circlePath = new Path2D();
circlePath.arc(150, 75, 75, 0, 2 * Math.PI);
let squarePath = new Path2D();
squarePath.rect(85, 10, 130, 130);

// Set the clip to the circle
ctx.clip(circlePath);
// Set the clip to be the intersection of the circle and the square
ctx.clip(squarePath);

// Draw stuff that gets clipped
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

#### Ergebnis

{{ EmbedLiveSample('Creating_a_complex_clipping_region', 300, 150) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
