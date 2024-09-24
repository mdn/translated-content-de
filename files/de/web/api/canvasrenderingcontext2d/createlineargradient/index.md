---
title: "CanvasRenderingContext2D: Methode createLinearGradient()"
short-title: createLinearGradient()
slug: Web/API/CanvasRenderingContext2D/createLinearGradient
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.createLinearGradient()`**-Methode der Canvas 2D API erstellt einen Farbverlauf entlang der Linie, die zwei gegebene Koordinaten verbindet.

![Der Farbverlauf wechselt die Farben entlang der Farbverlaufs-Linie, beginnend am Punkt x0, y0 und verlaufend bis x1, y1, selbst wenn diese Punkte den Verlauf über die Ränder des Elements hinaus erstrecken, auf dem der Verlauf gezeichnet wird.](mdn-canvas-lineargradient.png)

Diese Methode gibt ein lineares {{domxref("CanvasGradient")}} zurück. Um auf eine Form angewendet zu werden, muss der Verlauf zuerst den Eigenschaften {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} oder {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} zugewiesen werden.

> [!NOTE]
> Farbverlaufkoordinaten sind global, d.h., relativ zum aktuellen Koordinatensystem. Wenn auf eine Form angewendet, sind die Koordinaten NICHT relativ zu den Koordinaten der Form.

## Syntax

```js-nolint
createLinearGradient(x0, y0, x1, y1)
```

Die Methode `createLinearGradient()` wird durch vier Parameter definiert, die die Start- und Endpunkte der Farbverlaufs-Linie festlegen.

### Parameter

- `x0`
  - : Die x-Achsen-Koordinate des Startpunkts.
- `y0`
  - : Die y-Achsen-Koordinate des Startpunkts.
- `x1`
  - : Die x-Achsen-Koordinate des Endpunkts.
- `y1`
  - : Die y-Achsen-Koordinate des Endpunkts.

### Rückgabewert

Ein lineares {{domxref("CanvasGradient")}}, initialisiert mit der angegebenen Linie.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn nicht-finite Werte als Parameter übergeben werden.

## Beispiele

### Ein Rechteck mit einem linearen Farbverlauf füllen

Dieses Beispiel initialisiert einen linearen Farbverlauf mittels der `createLinearGradient()`-Methode. Drei Farbverlaufstopps werden dann zwischen den Start- und Endpunkten des Farbverlaufs erstellt. Schließlich wird der Farbverlauf dem Canvas-Kontext zugewiesen und zu einem gefüllten Rechteck gerendert.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Einen linearen Farbverlauf erstellen
// Der Startpunkt des Farbverlaufs ist bei x=20, y=0
// Der Endpunkt des Farbverlaufs ist bei x=220, y=0
const gradient = ctx.createLinearGradient(20, 0, 220, 0);

// Drei Farbstopps hinzufügen
gradient.addColorStop(0, "green");
gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "green");

// Den Füllstil setzen und ein Rechteck zeichnen
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Filling_a_rectangle_with_a_linear_gradient', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
- {{domxref("CanvasRenderingContext2D.createConicGradient()")}}
