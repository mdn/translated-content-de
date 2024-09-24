---
title: "CanvasRenderingContext2D: Methode createConicGradient()"
short-title: createConicGradient()
slug: Web/API/CanvasRenderingContext2D/createConicGradient
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.createConicGradient()`** Methode der Canvas 2D API erzeugt einen Farbverlauf um einen Punkt mit gegebenen Koordinaten.

Diese Methode gibt einen konischen {{domxref("CanvasGradient")}} zurück. Um auf eine Form angewendet zu werden, muss der Farbverlauf zuerst den Eigenschaften {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} oder {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} zugewiesen werden.

> [!NOTE]
> Die Farbverlaufkoordinaten sind global, d.h. relativ zum aktuellen Koordinatensystem. Wenn sie auf eine Form angewendet werden, sind die Koordinaten NICHT relativ zu den Koordinaten der Form.

## Syntax

```js-nolint
createConicGradient(startAngle, x, y)
```

### Parameter

- `startAngle`
  - : Der Winkel, bei dem der Farbverlauf beginnt, in Bogenmaß. Der Winkel startet von einer horizontalen Linie rechts vom Zentrum und verläuft im Uhrzeigersinn.
- `x`
  - : Die x-Achsen-Koordinate des Zentrums des Farbverlaufs.
- `y`
  - : Die y-Achsen-Koordinate des Zentrums des Farbverlaufs.

### Rückgabewert

- {{domxref("CanvasGradient")}}
  - : Ein konischer `CanvasGradient`.

## Beispiele

### Füllen eines Rechtecks mit einem konischen Farbverlauf

Dieses Beispiel initialisiert einen konischen Farbverlauf mit der Methode `createConicGradient()`. Fünf Farbstufen um die mittlere Koordinate werden dann erstellt. Schließlich wird der Farbverlauf dem Canvas-Kontext zugewiesen und auf ein gefülltes Rechteck angewendet.

#### HTML

```html
<canvas id="canvas" width="240" height="240"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Einen konischen Farbverlauf erstellen
// Der Startwinkel ist 0
// Die zentrale Position ist 100, 100
const gradient = ctx.createConicGradient(0, 100, 100);

// Fünf Farbstufen hinzufügen
gradient.addColorStop(0, "red");
gradient.addColorStop(0.25, "orange");
gradient.addColorStop(0.5, "yellow");
gradient.addColorStop(0.75, "green");
gradient.addColorStop(1, "blue");

// Setzen Sie den Füllstil und zeichnen Sie ein Rechteck
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 200);
```

#### Rechteck-Ergebnis

{{ EmbedLiveSample('Filling_a_rectangle_with_a_conic_gradient', 240, 240) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
