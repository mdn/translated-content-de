---
title: "CanvasRenderingContext2D: clip() Methode"
short-title: clip()
slug: Web/API/CanvasRenderingContext2D/clip
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.clip()`**-Methode der Canvas 2D API verwandelt den aktuellen oder gegebenen Pfad in die aktuelle Clipping-Region. Die vorherige Clipping-Region, falls vorhanden, wird mit dem aktuellen oder gegebenen Pfad geschnitten, um die neue Clipping-Region zu erstellen.

Im Bild unten stellt die rote Umrandung eine Clipping-Region in Form eines Sterns dar. Nur die Teile des Schachbrettmusters, die innerhalb der Clipping-Region liegen, werden gezeichnet.

![Sternförmige Clipping-Region](canvas_clipping_path.png)

> [!NOTE]
> Beachten Sie, dass die Clipping-Region nur aus Formen erstellt wird, die dem Pfad hinzugefügt wurden. Sie funktioniert nicht mit Formen, die direkt auf die Leinwand gezeichnet werden, wie [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect). Stattdessen müssen Sie [`rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect) verwenden, um eine rechteckige Form dem Pfad hinzuzufügen, bevor Sie `clip()` aufrufen.

> [!NOTE]
> Clip-Pfade können nicht direkt rückgängig gemacht werden. Sie müssen den Canvas-Zustand mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) speichern, bevor Sie `clip()` aufrufen, und ihn wiederherstellen, sobald Sie mit dem Zeichnen im ausgeschnittenen Bereich fertig sind, indem Sie [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) verwenden.

## Syntax

```js-nolint
clip()
clip(path)
clip(fillRule)
clip(path, fillRule)
```

### Parameter

- `fillRule`

  - : Der Algorithmus, mit dem bestimmt wird, ob ein Punkt innerhalb oder außerhalb der Clipping-Region liegt. Mögliche Werte:

    - `nonzero`
      - : Die [Nicht-Null-Winde-Regel](https://de.wikipedia.org/wiki/Nicht-Null-Regel).
        Standardregel.
    - `evenodd`
      - : Die [Even-Odd-Regel](https://de.wikipedia.org/wiki/Even-Odd-Regel).

- `path`
  - : Ein [`Path2D`](/de/docs/Web/API/Path2D)-Pfad, der als Clipping-Region verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Eine einfache Clipping-Region

Dieses Beispiel verwendet die `clip()`-Methode, um eine Clipping-Region entsprechend der Form eines Kreisbogen zu erstellen. Zwei Rechtecke werden dann gezeichnet; nur die Teile innerhalb der Clipping-Region werden gerendert.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Clipping-Region ist ein voller Kreis mit seinem Zentrum bei (100, 75) und einem Radius von 50.

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

### Spezifizieren eines Pfads und eines fillRule

Dieses Beispiel speichert zwei Rechtecke in einem Path2D-Objekt, das dann mit der `clip()`-Methode zur aktuellen Clipping-Region gemacht wird. Die `"evenodd"`-Regel erzeugt ein Loch, wo sich die Clipping-Rechtecke überschneiden; standardmäßig (mit der `"nonzero"`-Regel) gäbe es kein Loch.

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

### Erstellen einer komplexen Clipping-Region

Dieses Beispiel verwendet zwei Pfade, ein Rechteck und ein Quadrat, um eine komplexe Clipping-Region zu erstellen. Die `clip()`-Methode wird zweimal aufgerufen, zuerst um die aktuelle Clipping-Region auf den Kreis mit einem `Path2D`-Objekt festzulegen und dann erneut, um die Kreis-Clipping-Region mit einem Quadrat zu schneiden. Die endgültige Clipping-Region ist eine Form, die die Schnittmenge des Kreises und des Quadrats darstellt.

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

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
