---
title: Textmetriken
slug: Web/API/TextMetrics
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`TextMetrics`**-Schnittstelle repräsentiert die Abmessungen eines Textstücks im Canvas; eine `TextMetrics`-Instanz kann mit der Methode {{domxref("CanvasRenderingContext2D.measureText()")}} abgerufen werden.

## Instanz-Eigenschaften

- {{domxref("TextMetrics.width")}} {{ReadOnlyInline}}
  - : Gibt die Breite eines Segments von Inline-Text in CSS-Pixeln zurück. Sie berücksichtigt die aktuelle Schriftart des Kontexts.
- {{domxref("TextMetrics.actualBoundingBoxLeft")}} {{ReadOnlyInline}}
  - : Abstand parallel zur Grundlinie vom Ausrichtungspunkt, der durch die Eigenschaft {{domxref("CanvasRenderingContext2D.textAlign")}} angegeben ist, zur linken Seite des Begrenzungsrechtecks des angegebenen Textes in CSS-Pixeln; positive Zahlen zeigen einen Abstand nach links vom angegebenen Ausrichtungspunkt.
- {{domxref("TextMetrics.actualBoundingBoxRight")}} {{ReadOnlyInline}}
  - : Gibt den Abstand vom Ausrichtungspunkt, der durch die Eigenschaft {{domxref("CanvasRenderingContext2D.textAlign")}} angegeben ist, zur rechten Seite des Begrenzungsrechtecks des angegebenen Textes in CSS-Pixeln zurück. Der Abstand wird parallel zur Grundlinie gemessen.
- {{domxref("TextMetrics.fontBoundingBoxAscent")}} {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch das Attribut {{domxref("CanvasRenderingContext2D.textBaseline")}} angegeben wird, bis zur Oberseite des höchsten Begrenzungsrechtecks aller zur Darstellung des Textes verwendeten Schriftarten in CSS-Pixeln zurück.
- {{domxref("TextMetrics.fontBoundingBoxDescent")}} {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch das Attribut {{domxref("CanvasRenderingContext2D.textBaseline")}} angegeben wird, bis zur Unterseite des Begrenzungsrechtecks aller zur Darstellung des Textes verwendeten Schriftarten in CSS-Pixeln zurück.
- {{domxref("TextMetrics.actualBoundingBoxAscent")}} {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch das Attribut {{domxref("CanvasRenderingContext2D.textBaseline")}} angegeben wird, bis zur Oberseite des zur Darstellung des Textes verwendeten Begrenzungsrechtecks in CSS-Pixeln zurück.
- {{domxref("TextMetrics.actualBoundingBoxDescent")}} {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch das Attribut {{domxref("CanvasRenderingContext2D.textBaseline")}} angegeben wird, bis zur Unterseite des zur Darstellung des Textes verwendeten Begrenzungsrechtecks in CSS-Pixeln zurück.
- {{domxref("TextMetrics.emHeightAscent")}} {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch die Eigenschaft {{domxref("CanvasRenderingContext2D.textBaseline")}} angegeben wird, bis zur Oberseite des _em_-Quadrats im Zeilenkasten in CSS-Pixeln zurück.
- {{domxref("TextMetrics.emHeightDescent")}} {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch die Eigenschaft {{domxref("CanvasRenderingContext2D.textBaseline")}} angegeben wird, bis zur Unterseite des _em_-Quadrats im Zeilenkasten in CSS-Pixeln zurück.
- {{domxref("TextMetrics.hangingBaseline")}} {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch die Eigenschaft {{domxref("CanvasRenderingContext2D.textBaseline")}} angegeben wird, bis zur hängenden Grundlinie des Zeilenkastens in CSS-Pixeln zurück.
- {{domxref("TextMetrics.alphabeticBaseline")}} {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch die Eigenschaft {{domxref("CanvasRenderingContext2D.textBaseline")}} angegeben wird, bis zur alphabetischen Grundlinie des Zeilenkastens in CSS-Pixeln zurück.
- {{domxref("TextMetrics.ideographicBaseline")}} {{ReadOnlyInline}}
  - : Gibt den Abstand von der horizontalen Linie, die durch die Eigenschaft {{domxref("CanvasRenderingContext2D.textBaseline")}} angegeben wird, bis zur ideografischen Grundlinie des Zeilenkastens in CSS-Pixeln zurück.

## Beispiele

### Veranschaulichung der Grundlinien

Dieses Beispiel demonstriert die Grundlinien, die das `TextMetrics`-Objekt enthält. Die Standardgrundlinie ist die `alphabeticBaseline`. Siehe auch die Eigenschaft {{domxref("CanvasRenderingContext2D.textBaseline")}}.

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

Beim Messen der x-Richtung eines Textstücks kann die Summe aus `actualBoundingBoxLeft` und `actualBoundingBoxRight` breiter sein als die Breite der Inline-Box (`width`), da bei schrägen/kursiven Schriftarten Zeichen über ihre Vorschubreite hinausragen können.

Es kann daher nützlich sein, die Summe aus `actualBoundingBoxLeft` und `actualBoundingBoxRight` zu verwenden, um die absolute Textbreite genauer zu ermitteln:

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

- Erzeugermethode in {{domxref("CanvasRenderingContext2D")}}
- Das {{HTMLElement("canvas")}}-Element und seine zugehörige Schnittstelle, {{domxref("HTMLCanvasElement")}}
