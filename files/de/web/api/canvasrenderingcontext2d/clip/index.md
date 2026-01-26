---
title: "CanvasRenderingContext2D: clip()-Methode"
short-title: clip()
slug: Web/API/CanvasRenderingContext2D/clip
l10n:
  sourceCommit: 7dd8030389cfb754034e2203a0c782555f17a89f
---

{{APIRef("Canvas API")}}

Die
**`CanvasRenderingContext2D.clip()`**
Methode der Canvas 2D API verwandelt den aktuellen oder gegebenen Pfad in die aktuelle Abschneideregion. Die vorherige Abschneideregion, falls vorhanden, wird mit dem aktuellen oder gegebenen Pfad geschnitten, um die neue Abschneideregion zu erstellen.

Im Bild unten stellt die rote Umrandung eine Abschneideregion in Form eines Sterns dar. Nur die Teile des Schachbrettmusters, die sich innerhalb der Abschneideregion befinden, werden gezeichnet.

![Sternförmige Abschneideregion](canvas_clipping_path.png)

> [!NOTE]
> Beachten Sie, dass die Abschneideregion nur aus Formen konstruiert wird, die dem Pfad hinzugefügt wurden. Es funktioniert nicht mit Formprimitiven, die direkt auf die Leinwand gezeichnet werden, wie z.B. [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect).
> Stattdessen müssten Sie [`rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect) verwenden, um eine rechteckige Form zu dem Pfad hinzuzufügen, bevor Sie `clip()` aufrufen.

> [!NOTE]
> Abschneidepfade können nicht direkt rückgängig gemacht werden. Sie müssen Ihren Leinwandzustand mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) speichern, bevor Sie `clip()` aufrufen, und ihn wiederherstellen, sobald Sie das Zeichnen im abgeschnittenen Bereich abgeschlossen haben, mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore).

## Syntax

```js-nolint
clip()
clip(path)
clip(fillRule)
clip(path, fillRule)
```

### Parameter

- `fillRule`
  - : Der Algorithmus, um zu bestimmen, ob ein Punkt innerhalb oder außerhalb der Abschneideregion liegt. Mögliche Werte:
    - `nonzero`
      - : Die [Nicht-Null-Wickelregel](https://en.wikipedia.org/wiki/Nonzero-rule).
        Standardregel.
    - `evenodd`
      - : Die [gerade-ungerade Wickelregel](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

- `path`
  - : Ein [`Path2D`](/de/docs/Web/API/Path2D)-Pfad, der als Abschneideregion verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Eine einfache Abschneideregion

Dieses Beispiel verwendet die `clip()`-Methode, um eine Abschneideregion entsprechend der Form eines kreisförmigen Bogens zu erstellen. Zwei Rechtecke werden dann gezeichnet; nur die Teile innerhalb der Abschneideregion werden gerendert.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Abschneideregion ist ein vollständiger Kreis mit seinem Zentrum bei (100, 75) und einem Radius von 50.

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

### Festlegen eines Pfades und einer fillRule

In diesem Beispiel werden zwei Rechtecke in einem Path2D-Objekt gespeichert, das dann mit der `clip()`-Methode zur aktuellen Abschneideregion gemacht wird. Die `"evenodd"`-Regel erzeugt ein Loch, wo sich die Abschneiderechtecke schneiden; standardmäßig (mit der `"nonzero"`-Regel) gäbe es kein Loch.

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

### Erstellen einer komplexen Abschneideregion

Dieses Beispiel verwendet zwei Pfade, einen Kreis und ein Quadrat, um eine komplexe Abschneideregion zu erstellen. Die `clip()`-Methode wird zweimal aufgerufen, zuerst um die aktuelle Abschneideregion auf den Kreis mit einem `Path2D`-Objekt zu setzen, dann erneut, um die Kreisschnittregion mit einem Quadrat zu schneiden. Die endgültige Abschneideregion ist eine Form, die die Schnittmenge des Kreises und des Quadrats darstellt.

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
