---
title: "CanvasRenderingContext2D: globalCompositeOperation Eigenschaft"
short-title: globalCompositeOperation
slug: Web/API/CanvasRenderingContext2D/globalCompositeOperation
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef}}

Die **`CanvasRenderingContext2D.globalCompositeOperation`** Eigenschaft der Canvas 2D API legt die Art der Kompositionsoperation fest, die beim Zeichnen neuer Formen angewendet wird.

Siehe auch [Compositing und Clipping](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) im [Canvas-Leitfaden](/de/docs/Web/API/Canvas_API/Tutorial).

## Wert

Ein String, der angibt, welche der Kompositions- oder Mischmodus-Operationen verwendet werden soll. Dies kann einer der folgenden Werte sein:

- `"source-over"`
  - : Dies ist die Standardeinstellung und zeichnet neue Formen über die vorhandenen Canvas-Inhalte.
- `"source-in"`
  - : Die neue Form wird nur dort gezeichnet, wo sich sowohl die neue Form als auch das Ziel-Canvas überlappen. Alles andere wird transparent gemacht.
- `"source-out"`
  - : Die neue Form wird dort gezeichnet, wo sie nicht die vorhandenen Canvas-Inhalte überlappt.
- `"source-atop"`
  - : Die neue Form wird nur dort gezeichnet, wo sie die vorhandenen Canvas-Inhalte überlappt.
- `"destination-over"`
  - : Neue Formen werden hinter den vorhandenen Canvas-Inhalten gezeichnet.
- `"destination-in"`
  - : Die vorhandenen Canvas-Inhalte werden dort behalten, wo sich sowohl die neue Form als auch die vorhandenen Canvas-Inhalte überlappen. Alles andere wird transparent gemacht.
- `"destination-out"`
  - : Die vorhandenen Inhalte werden dort behalten, wo sie die neue Form nicht überlappen.
- `"destination-atop"`
  - : Das vorhandene Canvas wird nur dort behalten, wo es die neue Form überlappt. Die neue Form wird hinter dem Canvas-Inhalt gezeichnet.
- `"lighter"`
  - : Wo beide Formen sich überlappen, wird die Farbe durch Addieren der Farbwerte bestimmt.
- `"copy"`
  - : Nur die neue Form wird angezeigt.
- `"xor"`
  - : Formen werden dort transparent gemacht, wo sie sich überlappen, und überall sonst normal gezeichnet.
- `"multiply"`
  - : Die Pixel der oberen Schicht werden mit den entsprechenden Pixeln der unteren Schicht multipliziert. Das Ergebnis ist ein dunkleres Bild.
- `"screen"`
  - : Die Pixel werden invertiert, multipliziert und erneut invertiert. Das Ergebnis ist ein helleres Bild (Gegenteil von `multiply`)
- `"overlay"`
  - : Eine Kombination aus `multiply` und `screen`. Dunkle Bereiche auf der Basisebene werden dunkler und helle Bereiche heller.
- `"darken"`
  - : Behält die dunkelsten Pixel beider Schichten bei.
- `"lighten"`
  - : Behält die hellsten Pixel beider Schichten bei.
- `"color-dodge"`
  - : Teilt die untere Schicht durch die invertierte obere Schicht.
- `"color-burn"`
  - : Teilt die invertierte untere Schicht durch die obere Schicht und invertiert dann das Ergebnis.
- `"hard-light"`
  - : Wie `overlay`, eine Kombination aus `multiply` und `screen` — jedoch mit vertauschten oberen und unteren Schichten.
- `"soft-light"`
  - : Eine weichere Version von `hard-light`. Reines Schwarz oder Weiß führt nicht zu reinem Schwarz oder Weiß.
- `"difference"`
  - : Subtrahiert die untere Schicht von der oberen Schicht — oder umgekehrt — um immer einen positiven Wert zu erhalten.
- `"exclusion"`
  - : Wie `difference`, jedoch mit geringerem Kontrast.
- `"hue"`
  - : Bewahrt die Luma und Chroma der unteren Schicht, während der Farbton der oberen Schicht übernommen wird.
- `"saturation"`
  - : Bewahrt die Luma und den Farbton der unteren Schicht, während das Chroma der oberen Schicht übernommen wird.
- `"color"`
  - : Bewahrt die Luma der unteren Schicht, während Farbton und Chroma der oberen Schicht übernommen werden.
- `"luminosity"`
  - : Bewahrt den Farbton und das Chroma der unteren Schicht, während die Luma der oberen Schicht übernommen wird.

## Beispiele

### Ändern der Kompositionsoperation

Dieses Beispiel verwendet die `globalCompositeOperation` Eigenschaft, um zwei Rechtecke zu zeichnen, die sich dort ausschließen, wo sie sich überlappen.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.globalCompositeOperation = "xor";

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Changing_the_composite_operation', 700, 180) }}

### Demonstration aller Werte

#### Globale Werte

Dieser Code setzt die globalen Werte, die vom Rest des Programms verwendet werden.

```js
const canvas1 = document.createElement("canvas");
const canvas2 = document.createElement("canvas");
const gco = [
  "source-over",
  "source-in",
  "source-out",
  "source-atop",
  "destination-over",
  "destination-in",
  "destination-out",
  "destination-atop",
  "lighter",
  "copy",
  "xor",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
].reverse();
const gcoText = [
  "This is the default setting and draws new shapes on top of the existing canvas content.",
  "The new shape is drawn only where both the new shape and the destination canvas overlap. Everything else is made transparent.",
  "The new shape is drawn where it doesn't overlap the existing canvas content.",
  "The new shape is only drawn where it overlaps the existing canvas content.",
  "New shapes are drawn behind the existing canvas content.",
  "The existing canvas content is kept where both the new shape and existing canvas content overlap. Everything else is made transparent.",
  "The existing content is kept where it doesn't overlap the new shape.",
  "The existing canvas is only kept where it overlaps the new shape. The new shape is drawn behind the canvas content.",
  "Where both shapes overlap the color is determined by adding color values.",
  "Only the new shape is shown.",
  "Shapes are made transparent where both overlap and drawn normal everywhere else.",
  "The pixels of the top layer are multiplied with the corresponding pixel of the bottom layer. A darker picture is the result.",
  "The pixels are inverted, multiplied, and inverted again. A lighter picture is the result (opposite of multiply)",
  "A combination of multiply and screen. Dark parts on the base layer become darker, and light parts become lighter.",
  "Retains the darkest pixels of both layers.",
  "Retains the lightest pixels of both layers.",
  "Divides the bottom layer by the inverted top layer.",
  "Divides the inverted bottom layer by the top layer, and then inverts the result.",
  "A combination of multiply and screen like overlay, but with top and bottom layer swapped.",
  "A softer version of hard-light. Pure black or white does not result in pure black or white.",
  "Subtracts the bottom layer from the top layer or the other way round to always get a positive value.",
  "Like difference, but with lower contrast.",
  "Preserves the luma and chroma of the bottom layer, while adopting the hue of the top layer.",
  "Preserves the luma and hue of the bottom layer, while adopting the chroma of the top layer.",
  "Preserves the luma of the bottom layer, while adopting the hue and chroma of the top layer.",
  "Preserves the hue and chroma of the bottom layer, while adopting the luma of the top layer.",
].reverse();
const width = 320;
const height = 340;
```

#### Hauptprogramm

Wenn die Seite geladen wird, läuft dieser Code, um das Beispiel einzurichten und auszuführen:

```js
// lum in sRGB
const lum = {
  r: 0.33,
  g: 0.33,
  b: 0.33,
};
// resize canvas
canvas1.width = width;
canvas1.height = height;
canvas2.width = width;
canvas2.height = height;
lightMix();
colorSphere();
runComposite();
```

Und dieser Code, `runComposite()`, übernimmt den Großteil der Arbeit und verlässt sich dabei auf eine Reihe von Hilfsfunktionen, um die schwierigen Teile zu erledigen.

```js
function createCanvas() {
  const canvas = document.createElement("canvas");
  canvas.style.background = `url(${JSON.stringify(op_8x8.data)})`;
  canvas.style.border = "1px solid black";
  canvas.style.margin = "5px";
  canvas.width = width / 2;
  canvas.height = height / 2;
  return canvas;
}

function runComposite() {
  const dl = document.createElement("dl");
  document.body.appendChild(dl);
  while (gco.length) {
    const pop = gco.pop();
    const dt = document.createElement("dt");
    dt.textContent = pop;
    dl.appendChild(dt);
    const dd = document.createElement("dd");
    const p = document.createElement("p");
    p.textContent = gcoText.pop();
    dd.appendChild(p);

    const canvasToDrawOn = createCanvas();
    const canvasToDrawFrom = createCanvas();
    const canvasToDrawResult = createCanvas();

    let ctx = canvasToDrawResult.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas1, 0, 0, width / 2, height / 2);
    ctx.globalCompositeOperation = pop;
    ctx.drawImage(canvas2, 0, 0, width / 2, height / 2);
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgb(0 0 0 / 80%)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "white";
    ctx.font = "14px arial";
    ctx.fillText(pop, 5, height / 2 - 5);
    ctx.restore();

    ctx = canvasToDrawOn.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas1, 0, 0, width / 2, height / 2);
    ctx.fillStyle = "rgb(0 0 0 / 80%)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "white";
    ctx.font = "14px arial";
    ctx.fillText("existing content", 5, height / 2 - 5);
    ctx.restore();

    ctx = canvasToDrawFrom.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas2, 0, 0, width / 2, height / 2);
    ctx.fillStyle = "rgb(0 0 0 / 80%)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "white";
    ctx.font = "14px arial";
    ctx.fillText("new content", 5, height / 2 - 5);
    ctx.restore();

    dd.appendChild(canvasToDrawOn);
    dd.appendChild(canvasToDrawFrom);
    dd.appendChild(canvasToDrawResult);

    dl.appendChild(dd);
  }
}
```

#### Hilfsfunktionen

Das Programm verlässt sich auf eine Reihe von Hilfsfunktionen.

```js
const lightMix = () => {
  const ctx = canvas2.getContext("2d");
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(100, 200, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.arc(220, 200, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "lime";
  ctx.arc(160, 100, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.restore();
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 30, 30);
  ctx.fill();
};
```

```js
const colorSphere = (element) => {
  const ctx = canvas1.getContext("2d");
  const width = 360;
  const halfWidth = width / 2;
  const rotate = (1 / 360) * Math.PI * 2; // per degree
  const offset = 0; // scrollbar offset
  const oLeft = -20;
  const oTop = -20;
  for (let n = 0; n <= 359; n++) {
    const gradient = ctx.createLinearGradient(
      oLeft + halfWidth,
      oTop,
      oLeft + halfWidth,
      oTop + halfWidth,
    );
    const color = Color.HSV_RGB({ H: (n + 300) % 360, S: 100, V: 100 });
    gradient.addColorStop(0, "transparent");
    gradient.addColorStop(0.7, `rgb(${color.R} ${color.G} ${color.B})`);
    gradient.addColorStop(1, "white");
    ctx.beginPath();
    ctx.moveTo(oLeft + halfWidth, oTop);
    ctx.lineTo(oLeft + halfWidth, oTop + halfWidth);
    ctx.lineTo(oLeft + halfWidth + 6, oTop);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.translate(oLeft + halfWidth, oTop + halfWidth);
    ctx.rotate(rotate);
    ctx.translate(-(oLeft + halfWidth), -(oTop + halfWidth));
  }
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.fillRect(15, 15, 30, 30);
  ctx.fill();
  return ctx.canvas;
};
```

```js
// HSV (1978) = H: Hue / S: Saturation / V: Value
Color = {};
Color.HSV_RGB = (o) => {
  const S = o.S / 100;
  let H = o.H / 360,
    V = o.V / 100;
  let R, G;
  let A, B, C, D;
  if (S === 0) {
    R = G = B = Math.round(V * 255);
  } else {
    if (H >= 1) H = 0;
    H *= 6;
    D = H - Math.floor(H);
    A = Math.round(255 * V * (1 - S));
    B = Math.round(255 * V * (1 - S * D));
    C = Math.round(255 * V * (1 - S * (1 - D)));
    V = Math.round(255 * V);
    switch (Math.floor(H)) {
      case 0:
        R = V;
        G = C;
        B = A;
        break;
      case 1:
        R = B;
        G = V;
        B = A;
        break;
      case 2:
        R = A;
        G = V;
        B = C;
        break;
      case 3:
        R = A;
        G = B;
        B = V;
        break;
      case 4:
        R = C;
        G = A;
        B = V;
        break;
      case 5:
        R = V;
        G = A;
        // B remains unchanged
        break;
    }
  }
  return { R, G, B };
};

const createInterlace = (size, color1, color2) => {
  const proto = document.createElement("canvas").getContext("2d");
  proto.canvas.width = size * 2;
  proto.canvas.height = size * 2;
  proto.fillStyle = color1; // top-left
  proto.fillRect(0, 0, size, size);
  proto.fillStyle = color2; // top-right
  proto.fillRect(size, 0, size, size);
  proto.fillStyle = color2; // bottom-left
  proto.fillRect(0, size, size, size);
  proto.fillStyle = color1; // bottom-right
  proto.fillRect(size, size, size, size);
  const pattern = proto.createPattern(proto.canvas, "repeat");
  pattern.data = proto.canvas.toDataURL();
  return pattern;
};

const op_8x8 = createInterlace(8, "white", "#eeeeee");
```

#### Ergebnis

{{EmbedLiveSample("Demonstration of all values", "100%", 7250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.globalAlpha`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
