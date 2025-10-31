---
title: Crispes Aussehen von Pixelkunst mit image-rendering
short-title: Bilddarstellung für Pixelkunst
slug: Games/Techniques/Crisp_pixel_art_look
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Dieser Artikel behandelt eine nützliche Technik, um Ihren Canvas/WebGL-Spielen ein klares Pixelkunst-Aussehen zu verleihen, selbst auf hochauflösenden Monitoren.

## Das Konzept

Retro-[Pixelkunst](https://en.wikipedia.org/wiki/Pixel_art)-Ästhetik wird immer beliebter, insbesondere in [Indie-Spielen](https://en.wikipedia.org/wiki/Indie_game) oder [Game Jam](https://en.wikipedia.org/wiki/Game_jam)-Beiträgen. Aber da heutige Bildschirme Inhalte in hoher Auflösung rendern, gibt es ein Problem, sicherzustellen, dass die Pixelkunst nicht verschwommen aussieht. Hier ist ein Originalbild, das ein echtes Arcade-Spiel möglicherweise genutzt hat:

![kleiner pixelig dargestellter Mann](technique_original.png)

Wir können es manuell in einem Bildbearbeitungsprogramm vergrößern, indem wir jedes Pixel in einen 4x4-Pixel-Block erweitern. Das Bildbearbeitungsprogramm kann Algorithmen wie [nächste-Nachbar-Interpolation](https://en.wikipedia.org/wiki/Nearest-neighbor_interpolation) verwenden, um scharfe Kanten zu erzielen.

![größerer pixelig dargestellter Mann](technique_4x.png)

Zwei Nachteile dieser Methode sind größere Dateigrößen und [Kompressionsartefakte](https://en.wikipedia.org/wiki/Compression_artifact), da das Bild tatsächlich mehr Pixel enthält.

Die Idee, scharfe Pixelkunst zu erzeugen, ist einfach: Wir möchten, dass ein einzelnes Pixel im Originalbild einem Block von Pixeln auf dem Bildschirm entspricht, ohne Glätten oder Überblenden dazwischen. Das obige Beispiel erreicht dies, indem es diese Zuordnung manuell in einem Bildbearbeitungsprogramm vornimmt. Aber wir können diesen Effekt auch im Browser mit CSS erreichen.

## Hochskalieren von \<img> mit CSS

Ein Bild hat eine intrinsische Größe, das sind seine tatsächlichen Pixelabmessungen. Es hat auch eine gerenderte Größe, die durch HTML oder CSS festgelegt wird. Ist die gerenderte Größe größer als die intrinsische Größe, skaliert der Browser das Bild automatisch hoch, um es an die gerenderte Größe anzupassen.

```html
<img
  src="technique_original.png"
  alt="small pixelated man, upscaled with width and height attributes, appearing blurry" />
```

```css
img {
  width: 48px;
  height: 136px;
}
```

<img src="technique_original.png" style="width: 48px; height: 136px;" alt="kleiner pixelig dargestellter Mann, mit CSS hochskaliert, erscheint verschwommen" />

Aber wie Sie im Bild oben sehen können, macht der Standard-Skalierungsalgorithmus des Browsers das Bild verschwommen. Das liegt daran, dass er einen Glättungsalgorithmus verwendet, der die Farben der Pixel mittelt, um einen glatten Übergang zwischen ihnen zu schaffen.

Um dies zu beheben, können wir die CSS-Eigenschaft {{cssxref("image-rendering")}} verwenden, um dem Browser mitzuteilen, einen anderen Skalierungsalgorithmus zu verwenden, der die harten Kanten der Pixelkunst bewahrt.

```html
<img
  src="technique_original.png"
  alt="small pixelated man, upscaled with CSS, appearing crisp" />
```

```css
img {
  width: 48px;
  height: 136px;
  image-rendering: pixelated;
}
```

<img src="technique_original.png" style="width: 48px; height: 136px; image-rendering: pixelated;" alt="kleiner pixelig dargestellter Mann, hochskaliert mit Breiten- und Höhenangaben, erscheint scharf" />

Es gibt auch die Werte `crisp-edges` und `-webkit-optimize-contrast`, die in einigen Browsern funktionieren. Besuchen Sie den Artikel {{cssxref("image-rendering")}} für weitere Informationen zu den Unterschieden zwischen diesen Werten und welche Werte je nach Browser verwendet werden sollten.

`image-rendering: pixelated` hat als Technik zur Erhaltung der scharfen Kanten jedoch auch seine Probleme. Wenn sich CSS-Pixel nicht mit Geräte-Pixeln ausrichten (wenn das [`devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) keine ganze Zahl ist), können einige Pixel größer als andere gezeichnet werden, was zu einem uneinheitlichen Erscheinungsbild führt. Beispielsweise verändert sich in Chrome und Firefox beim Ein- oder Auszoomen das `devicePixelRatio`. Dies kann dazu führen, dass die Pixelkunst verzerrt oder ungleichmäßig erscheint. Der Screenshot unten wurde bei 110% Seitenzoom in Chrome aufgenommen. Bei genauerem Hinsehen können Sie sehen, dass der linke Rand des Gesichts und des Beins der Figur ungleichmäßig erscheint.

![Pixeldarstellung mit ungleichmäßigen Kanten](pixelated_uneven.png)

Dies ist jedoch ein schwer zu lösendes Problem, da es unmöglich ist, Geräte-Pixel präzise zu füllen, wenn die CSS-Pixel nicht genau mit ihnen übereinstimmen.

## Scharfe Pixelkunst in Canvas

Viele Spiele werden in einem {{htmlelement("canvas")}}-Element gerendert, das dieselbe `image-rendering`-Technik verwenden kann, da Leinwände ebenfalls Rasterbilder sind. Die Schritte dazu sind:

- Erstellen Sie ein {{htmlelement("canvas")}}-Element und setzen Sie seine `width`- und `height`-Attribute auf die ursprüngliche, kleinere Auflösung.
- Setzen Sie die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} auf jeden gewünschten Wert, jedoch gleichmäßig gestreckt, um das Seitenverhältnis beizubehalten. Wenn die Leinwand mit einer Breite von 128 Pixeln erstellt wurde, würden wir das CSS `width` auf `512px` setzen, wenn wir einen 4-fachen Maßstab wollen.
- Setzen Sie die CSS-Eigenschaft `image-rendering` des {{htmlelement("canvas")}}-Elements auf `pixelated`.

Schauen wir uns ein Beispiel an. Das Bild, das wir hochskalieren möchten, sieht so aus:

![Pixelige Nachtaufnahme einer Katze am Rand einer Klippe mit kleinen Herzen über ihrem Kopf, hinter ihr ein großer Vollmond. Mit einem schwarzen Hintergrund wird unten im Bild in weißer Schrift angezeigt: in love with the moon.](cat.png)

Hier ist etwas HTML, um eine einfache Leinwand zu erstellen:

```html
<canvas id="game" width="128" height="128">A cat</canvas>
```

CSS, um die Leinwand zu dimensionieren und ein scharfes Bild darzustellen:

```css
canvas {
  width: 512px;
  height: 512px;
  image-rendering: pixelated;
}
```

Und etwas JavaScript, um die Leinwand einzurichten und das Bild zu laden:

```js
// Get canvas context
const ctx = document.getElementById("game").getContext("2d");

// Load image
const image = new Image();
image.onload = () => {
  // Draw the image into the canvas
  ctx.drawImage(image, 0, 0);
};
image.src = "cat.png";
```

Dieser Code zusammen verwendet ergibt das folgende Resultat:

{{EmbedLiveSample("Scharfe Pixelkunst in Canvas", "", 520)}}

> [!NOTE]
> Canvas-Inhalte sind für Bildschirmleser nicht zugänglich. Fügen Sie beschreibenden Text als Wert des Attributs [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) direkt im Canvas-Element selbst ein oder fügen Sie Ersatzinhalt ein, der innerhalb des öffnenden und schließenden Canvas-Tags platziert ist. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Ersatzinhalte sind es.

## Bilder in Canvas beliebig skalieren

Für das Zeichenbeispiel mit einem einfachen `<img>` können Sie den Skalierungsfaktor auf jeden gewünschten Wert setzen, und `image-rendering: pixelated` wird sein Bestes tun, um scharfe Kanten zu bewahren. Beispielsweise können Sie das Bild um das 5,7-fache skalieren:

```css
img {
  /* 5.7x scale factor */
  width: 68.4px;
  height: 193.8px;
  image-rendering: pixelated;
}
```

<img src="technique_original.png" style="width: 68.4px; height: 193.8px; image-rendering: pixelated;" alt="kleiner pixelig dargestellter Mann, mit CSS hochskaliert, erscheint scharf" />

Wir haben zuvor gesagt, dass `image-rendering: pixelated` beim Abbilden von Bildpixeln auf CSS-Pixel arbeitet. Wenn wir das Bild jedoch in eine Leinwand zeichnen, haben wir zwei Abbildungsebenen: von Bildpixeln zu Leinwandpixeln und dann von Leinwandpixeln zu CSS-Pixeln. Der zweite Schritt funktioniert genauso wie das Bildskalieren mit `<img>`, sodass Sie auch beliebige Skalierungsfaktoren verwenden können, wenn Sie die Leinwand mit CSS skalieren:

```html hidden live-sample___canvas_arbitrary_scale
<canvas id="game" width="128" height="128">A cat</canvas>
```

```css live-sample___canvas_arbitrary_scale
canvas {
  /* 3.7x scale factor */
  width: 473.6px;
  height: 473.6px;
  image-rendering: pixelated;
}
```

```js hidden live-sample___canvas_arbitrary_scale
// Get canvas context
const ctx = document.getElementById("game").getContext("2d");

// Load image
const image = new Image();
image.onload = () => {
  // Draw the image into the canvas
  ctx.drawImage(image, 0, 0);
};
image.src = "cat.png";
```

{{EmbedLiveSample("Canvas beliebige Skalierung", "", 520)}}

Aber wir müssen vorsichtig sein, wie die Bildpixel mit den Leinwandpixeln ausgerichtet sind. Standardmäßig werden die Bildpixel 1:1 mit den Leinwandpixeln gezeichnet; jedoch können Sie mit den zusätzlichen Argumenten von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) das Bild in einer anderen Größe auf die Leinwand zeichnen, und Sie können bei einem nicht ganzzahligen Skalierungsfaktor landen. Beispielsweise, wenn Sie ein 128x128 Pixel-Bild in einem 100x100 Pixel-Bereich auf der Leinwand zeichnen, wird jedes Bildpixel als 0.78x0.78 Leinwandpixel gezeichnet, was zu Unschärfe führen kann.

```html hidden live-sample___canvas_image_scale
<canvas id="game" width="128" height="128">A cat</canvas>
```

```css hidden live-sample___canvas_image_scale
canvas {
  width: 512px;
  height: 512px;
  image-rendering: pixelated;
}
```

```js example-bad live-sample___canvas_image_scale
// Get canvas context
const ctx = document.getElementById("game").getContext("2d");

// Load image
const image = new Image();
image.onload = () => {
  // Extract the image pixels from (0,0) to (128,128) (full size)
  // and draw them into the canvas at (0,0) to (100,100)
  ctx.drawImage(image, 0, 0, 128, 128, 0, 0, 100, 100);
};
image.src = "cat.png";
```

{{EmbedLiveSample("Canvas Bildskalierung", "", 520)}}

Dasselbe passiert, wenn Sie [`scale()`](/de/docs/Web/API/CanvasRenderingContext2D/scale) verwenden, um das Raster der Leinwand zu skalieren. In diesem Fall würde eine Einheit von 1 bei der Aufrufe von Leinwandmethoden als nicht-ganzzahlige Anzahl von Leinwandpixeln interpretiert werden, was zu Unschärfe führt.

```html hidden live-sample___canvas_context_scale
<canvas id="game" width="128" height="128">A cat</canvas>
```

```css hidden live-sample___canvas_context_scale
canvas {
  width: 512px;
  height: 512px;
  image-rendering: pixelated;
}
```

```js example-bad live-sample___canvas_context_scale
// Get canvas context
const ctx = document.getElementById("game").getContext("2d");
// Scaling the context by 0.8, so each image pixel is drawn as 0.8x0.8 canvas pixels
ctx.scale(0.8, 0.8);

// Load image
const image = new Image();
image.onload = () => {
  ctx.drawImage(image, 0, 0);
};
image.src = "cat.png";
```

{{EmbedLiveSample("Canvas Kontext Skala", "", 520)}}

Um dies zu beheben, müssen Sie sicherstellen, dass die Bildpixel immer in ganzzahligen Vielfachen von Leinwandpixeln gezeichnet werden. Das heißt, wenn Sie `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)` aufrufen, muss `dWidth` gleich `sWidth / xScale * n` sein, wobei `xScale` der x-Skalierungsfaktor für den Kontext ist (1,0, wenn Sie `scale()` nicht aufgerufen haben) und `n` eine ganze Zahl ist (1, 2, 3, ...). Dasselbe gilt für `dHeight`. Wenn Sie also ein 128x128 Pixel-Bild auf einer Leinwand mit einem Skalierungsfaktor von 0,8 zeichnen möchten, können Sie es nur bei Größen wie 160 (128 / 0,8 × 1), 320 (128 / 0,8 × 2) usw. zeichnen.

```html hidden live-sample___canvas_context_scale_correct
<canvas id="game" width="128" height="128">A cat</canvas>
```

```css hidden live-sample___canvas_context_scale_correct
canvas {
  width: 512px;
  height: 512px;
  image-rendering: pixelated;
}
```

```js example-good live-sample___canvas_context_scale_correct
// Get canvas context
const ctx = document.getElementById("game").getContext("2d");
// Scaling the context by 0.8, so each image pixel is drawn as 0.8x0.8 canvas pixels
ctx.scale(0.8, 0.8);

// Load image
const image = new Image();
image.onload = () => {
  ctx.drawImage(image, 0, 0, 128, 128, 0, 0, 128 / 0.8, 128 / 0.8);
};
image.src = "cat.png";
```

{{EmbedLiveSample("Canvas Kontext Skala korrekt", "", 520)}}

Siehe den Canvas-[Leitfaden zum Zeichnen von Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#seeing_blurry_edges) für weitere Informationen darüber, wie Leinwandpixel funktionieren.
