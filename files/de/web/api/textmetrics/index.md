---
title: TextMetrics
slug: Web/API/TextMetrics
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`TextMetrics`**-Interface repräsentiert die Abmessungen eines Textstücks auf der Leinwand; eine `TextMetrics`-Instanz kann mit der Methode [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText) abgerufen werden.

## Instanz-Eigenschaften

- [`TextMetrics.width`](/de/docs/Web/API/TextMetrics/width) {{ReadOnlyInline}}
  - : Gibt die Breite eines Segments von Inline-Text in CSS-Pixeln zurück. Es berücksichtigt die aktuelle Schriftart des Kontexts.
- [`TextMetrics.actualBoundingBoxLeft`](/de/docs/Web/API/TextMetrics/actualBoundingBoxLeft) {{ReadOnlyInline}}
  - : Abstand parallel zur Grundlinie vom Ausrichtungspunkt, der durch die Eigenschaft [`CanvasRenderingContext2D.textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign) angegeben wird, bis zur linken Seite des Begrenzungsrechtecks des gegebenen Textes, in CSS-Pixel; positive Zahlen zeigen einen Abstand an, der nach links vom gegebenen Ausrichtungspunkt geht.
- [`TextMetrics.actualBoundingBoxRight`](/de/docs/Web/API/TextMetrics/actualBoundingBoxRight) {{ReadOnlyInline}}
  - : Gibt den Abstand vom Ausrichtungspunkt, der durch die Eigenschaft [`CanvasRenderingContext2D.textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign) angegeben wird, bis zur rechten Seite des Begrenzungsrechtecks des gegebenen Textes in CSS-Pixeln zurück. Der Abstand wird parallel zur Grundlinie gemessen.
- [`TextMetrics.fontBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxAscent) {{ReadOnlyInline}}
  - : Gibt den Abstand von der durch das Attribut [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) angegebenen horizontalen Linie bis zur Oberseite des höchsten Begrenzungsrechtecks aller zur Darstellung des Textes verwendeten Schriftarten in CSS-Pixeln zurück.
- [`TextMetrics.fontBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxDescent) {{ReadOnlyInline}}
  - : Gibt den Abstand von der durch das Attribut [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) angegebenen horizontalen Linie bis zur Unterseite des Begrenzungsrechtecks aller zur Darstellung des Textes verwendeten Schriftarten in CSS-Pixeln zurück.
- [`TextMetrics.actualBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxAscent) {{ReadOnlyInline}}
  - : Gibt den Abstand von der durch das Attribut [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) angegebenen horizontalen Linie bis zur Oberseite des zur Darstellung des Textes verwendeten Begrenzungsrechtecks in CSS-Pixeln zurück.
- [`TextMetrics.actualBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/actualBoundingBoxDescent) {{ReadOnlyInline}}
  - : Gibt den Abstand von der durch das Attribut [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) angegebenen horizontalen Linie bis zur Unterseite des zur Darstellung des Textes verwendeten Begrenzungsrechtecks in CSS-Pixeln zurück.
- [`TextMetrics.emHeightAscent`](/de/docs/Web/API/TextMetrics/emHeightAscent) {{ReadOnlyInline}}
  - : Gibt den Abstand von der durch die Eigenschaft [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) angegebenen horizontalen Linie bis zur Oberseite des _em_-Quadrats in der Linienbox in CSS-Pixeln zurück.
- [`TextMetrics.emHeightDescent`](/de/docs/Web/API/TextMetrics/emHeightDescent) {{ReadOnlyInline}}
  - : Gibt den Abstand von der durch die Eigenschaft [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) angegebenen horizontalen Linie bis zur Unterseite des _em_-Quadrats in der Linienbox in CSS-Pixeln zurück.
- [`TextMetrics.hangingBaseline`](/de/docs/Web/API/TextMetrics/hangingBaseline) {{ReadOnlyInline}}
  - : Gibt den Abstand von der durch die Eigenschaft [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) angegebenen horizontalen Linie bis zur hängenden Grundlinie der Linienbox in CSS-Pixeln zurück.
- [`TextMetrics.alphabeticBaseline`](/de/docs/Web/API/TextMetrics/alphabeticBaseline) {{ReadOnlyInline}}
  - : Gibt den Abstand von der durch die Eigenschaft [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) angegebenen horizontalen Linie bis zur {{Glossary("Baseline/Typography", "alphabetischen Grundlinie")}} der Linienbox in CSS-Pixeln zurück.
- [`TextMetrics.ideographicBaseline`](/de/docs/Web/API/TextMetrics/ideographicBaseline) {{ReadOnlyInline}}
  - : Gibt den Abstand von der durch die Eigenschaft [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) angegebenen horizontalen Linie bis zur ideografischen Grundlinie der Linienbox in CSS-Pixeln zurück.

## Beispiele

### Veranschaulichung der Grundlinien

Dieses Beispiel zeigt die Grundlinien, die das `TextMetrics`-Objekt enthält. Die Standardgrundlinie ist die `alphabeticBaseline`. Siehe auch die Eigenschaft [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline).

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

Beim Messen der x-Richtung eines Textstücks kann die Summe von `actualBoundingBoxLeft` und `actualBoundingBoxRight` breiter sein als die Breite des Inline-Box-(`width`) auf Grund von schrägen/kuriven Schriftarten, bei denen Zeichen über ihre Vorlauflänge hinweggehen.

Es kann deshalb nützlich sein, die Summe von `actualBoundingBoxLeft` und `actualBoundingBoxRight` als genauere Methode zur Ermittlung der absoluten Textbreite zu verwenden:

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

- Erzeugermethode in [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- Das {{HTMLElement("canvas")}}-Element und seine zugehörige Schnittstelle, [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
