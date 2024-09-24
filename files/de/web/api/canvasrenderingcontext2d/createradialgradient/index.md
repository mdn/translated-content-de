---
title: "CanvasRenderingContext2D: Methode createRadialGradient()"
short-title: createRadialGradient()
slug: Web/API/CanvasRenderingContext2D/createRadialGradient
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die Methode **`CanvasRenderingContext2D.createRadialGradient()`** der Canvas 2D API erstellt einen radialen Verlauf unter Verwendung der Größe und Koordinaten von zwei Kreisen.

Diese Methode gibt ein {{domxref("CanvasGradient")}} zurück. Um auf eine Form angewendet zu werden, muss der Verlauf zuerst den Eigenschaften {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} oder {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} zugewiesen werden.

> [!NOTE]
> Verlaufkoordinaten sind global, d.h. relativ zum aktuellen Koordinatenraum. Wenn sie auf eine Form angewendet werden, sind die Koordinaten NICHT relativ zu den Koordinaten der Form.

## Syntax

```js-nolint
createRadialGradient(x0, y0, r0, x1, y1, r1)
```

Die Methode `createRadialGradient()` wird durch sechs Parameter spezifiziert, drei definieren den Startkreis und drei den Endkreis des Verlaufs.

### Parameter

- `x0`
  - : Die x-Koordinate des Startkreises.
- `y0`
  - : Die y-Koordinate des Startkreises.
- `r0`
  - : Der Radius des Startkreises. Muss nicht-negativ und endlich sein.
- `x1`
  - : Die x-Koordinate des Endkreises.
- `y1`
  - : Die y-Koordinate des Endkreises.
- `r1`
  - : Der Radius des Endkreises. Muss nicht-negativ und endlich sein.

### Rückgabewert

Ein radialer {{domxref("CanvasGradient")}}, initialisiert mit den zwei angegebenen Kreisen.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn nicht-endliche Werte als Parameter übergeben werden.
- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein negativer Radius als Parameter übergeben wird.

## Beispiele

### Füllen eines Rechtecks mit einem radialen Verlauf

Dieses Beispiel initialisiert einen radialen Verlauf mit der Methode `createRadialGradient()`. Es werden dann drei Farbstopps zwischen den beiden Kreisen des Verlaufs erstellt. Schließlich wird der Verlauf dem Canvas-Kontext zugewiesen und auf ein ausgefülltes Rechteck gezeichnet.

#### HTML

```html
<canvas id="canvas" width="200" height="200"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Erstellen eines radialen Verlaufs
// Der innere Kreis ist bei x=110, y=90, mit Radius=30
// Der äußere Kreis ist bei x=100, y=100, mit Radius=70
const gradient = ctx.createRadialGradient(110, 90, 30, 100, 100, 70);

// Hinzufügen von drei Farbstopps
gradient.addColorStop(0, "pink");
gradient.addColorStop(0.9, "white");
gradient.addColorStop(1, "green");

// Füllstil setzen und ein Rechteck zeichnen
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 160, 160);
```

#### Ergebnis

{{ EmbedLiveSample('Filling_a_rectangle_with_a_radial_gradient', 700, 240) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
- {{domxref("CanvasRenderingContext2D.createConicGradient()")}}
