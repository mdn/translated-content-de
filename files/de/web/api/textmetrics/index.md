---
title: TextMetrics
slug: Web/API/TextMetrics
l10n:
  sourceCommit: 0a4d5b451cc54599ed2b99cef4fdd39c3fd96a3d
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`TextMetrics`**-Interface repräsentiert die Dimensionen eines Textstücks auf dem `canvas`; eine `TextMetrics`-Instanz kann mit der Methode [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText) abgerufen werden.

## Instanz-Eigenschaften

- [`TextMetrics.width`](/de/docs/Web/API/TextMetrics/width) {{ReadOnlyInline}}
  - : Gibt die Breite eines Segments von Inline-Text in CSS-Pixeln zurück. Sie berücksichtigt die aktuelle Schriftart des Kontexts.
- [`TextMetrics.actualBoundingBoxLeft`](/de/docs/Web/API/TextMetrics/actualBoundingBoxLeft) {{ReadOnlyInline}}
  - : Abstand parallel zur Grundlinie vom Ausrichtungspunkt, der durch die [`CanvasRenderingContext2D.textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)-Eigenschaft angegeben wird, zur linken Seite des Begrenzungsrechtecks des angegebenen Textes, in CSS-Pixeln; positive Zahlen zeigen einen Abstand nach links vom gegebenen Ausrichtungspunkt.
- [`TextMetrics.actualBoundingBoxRight`](/de/docs/Web/API/TextMetrics/actualBoundingBoxRight) {{ReadOnlyInline}}
  - : Gibt den Abstand vom Ausrichtungspunkt, der durch die [`CanvasRenderingContext2D.textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)-Eigenschaft angegeben wird, zur rechten Seite des Begrenzungsrechtecks des angegebenen Textes in CSS-Pixeln zurück. Der Abstand wird parallel zur Grundlinie gemessen.
- [`TextMetrics.fontBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxAscent) {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch das [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)-Attribut angezeigt wird, zur Oberseite des höchsten Begrenzungsrechtecks aller Schriften zurück, die verwendet werden, um den Text zu rendern, in CSS-Pixeln.
- [`TextMetrics.fontBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxDescent) {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch das [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)-Attribut angezeigt wird, zur Unterseite des Begrenzungsrechtecks aller Schriften zurück, die verwendet werden, um den Text zu rendern, in CSS-Pixeln.
- [`TextMetrics.actualBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxAscent) {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch das [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)-Attribut angezeigt wird, zur Oberseite des Begrenzungsrechtecks zurück, das verwendet wird, um den Text zu rendern, in CSS-Pixeln.
- [`TextMetrics.actualBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxDescent) {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch das [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)-Attribut angezeigt wird, zur Unterseite des Begrenzungsrechtecks zurück, das verwendet wird, um den Text zu rendern, in CSS-Pixeln.
- [`TextMetrics.emHeightAscent`](/de/docs/Web/API/TextMetrics/emHeightAscent) {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch die [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)-Eigenschaft angezeigt wird, zur Oberseite des _em_-Quadrats im Linienkasten zurück, in CSS-Pixeln.
- [`TextMetrics.emHeightDescent`](/de/docs/Web/API/TextMetrics/emHeightDescent) {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch die [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)-Eigenschaft angezeigt wird, zur Unterseite des _em_-Quadrats im Linienkasten zurück, in CSS-Pixeln.
- [`TextMetrics.hangingBaseline`](/de/docs/Web/API/TextMetrics/hangingBaseline) {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch die [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)-Eigenschaft angezeigt wird, zur hängenden Grundlinie des Linienkastens zurück, in CSS-Pixeln.
- [`TextMetrics.alphabeticBaseline`](/de/docs/Web/API/TextMetrics/alphabeticBaseline) {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch die [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)-Eigenschaft angezeigt wird, zur {{Glossary("/Baseline/Typography", "alphabetischen Grundlinie")}} des Linienkastens zurück, in CSS-Pixeln.
- [`TextMetrics.ideographicBaseline`](/de/docs/Web/API/TextMetrics/ideographicBaseline) {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch die [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)-Eigenschaft angezeigt wird, zur ideografischen Grundlinie des Linienkastens zurück, in CSS-Pixeln.

## Beispiele

### Veranschaulichung der Grundlinien

Dieses Beispiel zeigt die Grundlinien, die das `TextMetrics`-Objekt enthält. Die Standard-Grundlinie ist die `alphabeticBaseline`. Siehe auch die [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)-Eigenschaft.

#### HTML

```html
<canvas id="canvas" width="550" height="500"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const baselinesAboveAlphabetic = [
  "fontBoundingBoxAscent",
  "actualBoundingBoxAscent",
  "emHeightAscent",
  "hangingBaseline",
];
const baselinesBelowAlphabetic = [
  "ideographicBaseline",
  "emHeightDescent",
  "actualBoundingBoxDescent",
  "fontBoundingBoxDescent",
];
const baselines = [...baselinesAboveAlphabetic, ...baselinesBelowAlphabetic];
ctx.font = "25px serif";
ctx.strokeStyle = "red";

baselines.forEach((baseline, index) => {
  const text = `Abcdefghijklmnop (${baseline})`;
  const textMetrics = ctx.measureText(text);
  const y = 50 + index * 50;
  ctx.beginPath();
  ctx.fillText(text, 0, y);

  const baselineMetricValue = textMetrics[baseline];
  if (baselineMetricValue === undefined) {
    return;
  }

  const lineY = baselinesBelowAlphabetic.includes(baseline)
    ? y + Math.abs(baselineMetricValue)
    : y - Math.abs(baselineMetricValue);
  ctx.moveTo(0, lineY);
  ctx.lineTo(550, lineY);
  ctx.stroke();
});
```

#### Ergebnis

{{EmbedLiveSample('Baselines_illustrated', 700, 550)}}

### Messen der Textbreite

Beim Messen der x-Richtung eines Textstücks kann die Summe von `actualBoundingBoxLeft` und `actualBoundingBoxRight` breiter als die Breite des Inline-Kastens (`width`) sein, aufgrund schräger/italischer Schriften, bei denen Zeichen über ihre Fortschrittsbreite hinausragen.

Es kann daher nützlich sein, die Summe von `actualBoundingBoxLeft` und `actualBoundingBoxRight` als genauere Methode zu verwenden, um die absolute Textbreite zu erhalten:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const text = "Abcdefghijklmnop";
ctx.font = "italic 50px serif";
const textMetrics = ctx.measureText(text);

console.log(textMetrics.width);
// 459.8833312988281

console.log(
  textMetrics.actualBoundingBoxRight + textMetrics.actualBoundingBoxLeft,
);
// 462.8833333333333
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Erstellermethode in [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- Das {{HTMLElement("canvas")}}-Element und sein zugehöriges Interface, [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
