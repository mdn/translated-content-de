---
title: "CanvasRenderingContext2D: clip()-Methode"
short-title: clip()
slug: Web/API/CanvasRenderingContext2D/clip
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.clip()`**-Methode der Canvas 2D API verwandelt den aktuellen oder angegebenen Pfad in die aktuelle Clipping-Region. Die vorherige Clipping-Region, falls vorhanden, wird mit dem aktuellen oder angegebenen Pfad geschnitten, um die neue Clipping-Region zu erstellen.

In dem Bild unten zeigt die rote Umrandung eine Clipping-Region, die wie ein Stern geformt ist. Nur die Teile des Schachbrettmusters, die sich innerhalb der Clipping-Region befinden, werden gezeichnet.

![Clipping-Region in Sternform](canvas_clipping_path.png)

> [!NOTE]
> Beachten Sie, dass die Clipping-Region nur aus den dem Pfad hinzugefügten Formen konstruiert wird. Es funktioniert nicht mit Primitivformen, die direkt auf die Zeichenfläche gezeichnet werden, wie z.B. {{domxref("CanvasRenderingContext2D.fillRect()","fillRect()")}}. Stattdessen müssten Sie {{domxref("CanvasRenderingContext2D.rect()","rect()")}} verwenden, um eine rechteckige Form zum Pfad hinzuzufügen, bevor Sie `clip()` aufrufen.

> [!NOTE]
> Clipping-Pfade können nicht direkt rückgängig gemacht werden. Sie müssen Ihren Canvas-Zustand mit {{domxref("CanvasRenderingContext2D/save", "save()")}} speichern, bevor Sie `clip()` aufrufen, und ihn wiederherstellen, sobald Sie das Zeichnen im Clipping-Bereich beendet haben, indem Sie {{domxref("CanvasRenderingContext2D/restore", "restore()")}} verwenden.

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
      - : Die [non-zero winding rule](https://en.wikipedia.org/wiki/Nonzero-rule).
        Standardregel.
    - `evenodd`
      - : Die [even-odd winding rule](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

- `path`
  - : Ein {{domxref("Path2D")}}-Pfad, der als Clipping-Region verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Eine einfache Clipping-Region

Dieses Beispiel verwendet die `clip()`-Methode, um eine Clipping-Region entsprechend der Form eines Kreisbogens zu erstellen. Zwei Rechtecke werden dann gezeichnet; nur die Teile innerhalb der Clipping-Region werden gerendert.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Clipping-Region ist ein voller Kreis mit seinem Mittelpunkt bei (100, 75) und einem Radius von 50.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Erstelle kreisförmige Clipping-Region
ctx.beginPath();
ctx.arc(100, 75, 50, 0, Math.PI * 2);
ctx.clip();

// Zeichne Elemente, die ausgeschnitten werden
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "orange";
ctx.fillRect(0, 0, 100, 100);
```

#### Ergebnis

{{ EmbedLiveSample('A_simple_clipping_region', 700, 180) }}

### Festlegen eines Pfads und eines fillRule

Dieses Beispiel speichert zwei Rechtecke in einem Path2D-Objekt, das dann mit der `clip()`-Methode zur aktuellen Clipping-Region gemacht wird. Die Regel `"evenodd"` erzeugt ein Loch, wo sich die Clipping-Rechtecke überschneiden; standardmäßig (mit der `"nonzero"`-Regel) gäbe es kein Loch.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Erstelle Clipping-Pfad
let region = new Path2D();
region.rect(80, 10, 20, 130);
region.rect(40, 50, 100, 50);
ctx.clip(region, "evenodd");

// Zeichne Elemente, die ausgeschnitten werden
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

#### Ergebnis

{{ EmbedLiveSample('Specifying_a_path_and_a_fillRule', 700, 180) }}

### Erstellen einer komplexen Clipping-Region

Dieses Beispiel verwendet zwei Pfade, ein Rechteck und ein Quadrat, um eine komplexe Clipping-Region zu erstellen. Die `clip()`-Methode wird zweimal aufgerufen, zuerst um die aktuelle Clipping-Region auf den Kreis unter Verwendung eines `Path2D`-Objekts festzulegen, dann erneut, um die Kreisausschnittsregion mit einem Quadrat zu schneiden. Die endgültige Clipping-Region ist eine Form, die die Schnittmenge von Kreis und Quadrat darstellt.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Erstelle zwei Clipping-Pfade
let circlePath = new Path2D();
circlePath.arc(150, 75, 75, 0, 2 * Math.PI);
let squarePath = new Path2D();
squarePath.rect(85, 10, 130, 130);

// Setze das Clipping auf den Kreis
ctx.clip(circlePath);
// Setze das Clipping auf die Schnittmenge von Kreis und Quadrat
ctx.clip(squarePath);

// Zeichne Elemente, die ausgeschnitten werden
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

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
