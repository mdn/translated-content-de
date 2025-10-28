---
title: Klare Pixel-Art-Optik mit `image-rendering`
short-title: Bildwiedergabe für Pixel-Art
slug: Games/Techniques/Crisp_pixel_art_look
l10n:
  sourceCommit: 134fdc70d877bb19076d2ba51b94f76098d9336a
---

Dieser Artikel behandelt eine nützliche Technik, um Ihren Canvas/WebGL-Spielen eine klare Pixel-Art-Optik zu verleihen, selbst auf hochauflösenden Monitoren.

## Das Konzept

Retro-[Pixel-Art](https://en.wikipedia.org/wiki/Pixel_art)-Ästhetik wird immer beliebter, insbesondere in [Indie-Spielen](https://en.wikipedia.org/wiki/Indie_game) oder [Game Jam](https://en.wikipedia.org/wiki/Game_jam)-Einträgen. Da die heutigen Bildschirme Inhalte in hoher Auflösung wiedergeben, gibt es das Problem, sicherzustellen, dass die Pixel-Art nicht verschwommen aussieht. Hier ist ein Originalbild, das ein tatsächliches Arcade-Spiel verwendet haben könnte:

![kleiner, pixeliger Mann](technique_original.png)

Wir können es manuell in einem Bildbearbeitungsprogramm vergrößern, indem wir jedes Pixel in einen 4x4-Block von Pixeln umwandeln. Das Bildbearbeitungsprogramm kann Algorithmen wie [Nearest-Neighbor-Interpolation](https://en.wikipedia.org/wiki/Nearest-neighbor_interpolation) nutzen, um scharfe Kanten zu erzielen.

![größerer, pixeliger Mann](technique_4x.png)

Zwei Nachteile dieser Methode sind größere Dateigrößen und [Kompressionsartefakte](https://en.wikipedia.org/wiki/Compression_artifact), da das Bild tatsächlich mehr Pixel enthält.

Die Idee, klare Pixel-Art zu erzeugen, ist simpel: Wir wollen, dass ein einziges Pixel im Originalbild zu einem Block von Pixeln auf dem Bildschirm wird, ohne jegliche Glättung oder Mischung dazwischen. Das obige Beispiel erreicht dies, indem es diese Zuordnung manuell in einem Bildbearbeitungsprogramm durchführt. Aber wir können diesen Effekt auch im Browser mit CSS erzielen.

## Hochskalieren von \<img> mit CSS

Ein Bild hat eine intrinsische Größe, also seine tatsächlichen Pixeldimensionen. Es hat auch eine wiedergegebene Größe, die mit HTML oder CSS festgelegt wird. Wenn die wiedergegebene Größe größer als die intrinsische Größe ist, skaliert der Browser das Bild automatisch hoch, um es an die wiedergegebene Größe anzupassen.

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

<img src="technique_original.png" style="width: 48px; height: 136px;" alt="kleiner, pixeliger Mann, mit CSS hochskaliert, erscheint verschwommen" />

Aber wie Sie im obigen Bild sehen können, lässt der Standardskalierungsalgorithmus des Browsers das Bild verschwommen aussehen. Das liegt daran, dass ein Glättungsalgorithmus verwendet wird, der die Farben der Pixel mittelt, um einen sanften Übergang zwischen ihnen zu erreichen.

Um dies zu beheben, können wir die CSS-Eigenschaft {{cssxref("image-rendering")}} verwenden, um dem Browser mitzuteilen, einen anderen Skalierungsalgorithmus zu verwenden, der die harten Kanten der Pixel-Art bewahrt.

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

<img src="technique_original.png" style="width: 48px; height: 136px; image-rendering: pixelated;" alt="kleiner, pixeliger Mann, mit Breiten- und Höhenattributen hochskaliert, erscheint klar" />

Es gibt auch die Werte `crisp-edges` und `-webkit-optimize-contrast`, die in einigen Browsern funktionieren. Weitere Informationen zu den Unterschieden zwischen diesen Werten und welchen Wert Sie verwenden sollten, je nach Browser, finden Sie im Artikel über {{cssxref("image-rendering")}}.

`image-rendering: pixelated` ist nicht ohne Probleme als Technik zur Erhaltung klarer Kanten. Wenn CSS-Pixel nicht mit Geräte-Pixeln übereinstimmen (wenn der [`devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) kein ganzzahliger Wert ist), können bestimmte Pixel größer als andere gezeichnet werden, was zu einem ungleichmäßigen Erscheinungsbild führt. Zum Beispiel ändern Chrome und Firefox den `devicePixelRatio`, wenn Sie hinein- oder herauszoomen. Dies kann dazu führen, dass die Pixel-Art verzerrt oder ungleichmäßig erscheint. Der Screenshot unten wurde bei 110% Seitenzoom in Chrome aufgenommen. Wenn Sie genau hinsehen, können Sie erkennen, dass die linke Kante des Charakters uneben erscheint.

![Pixeliertes Bild mit ungleichmäßigen Kanten](pixelated_uneven.png)

Dies ist ein nicht leicht zu lösendes Problem, da es unmöglich ist, Geräte-Pixel genau zu füllen, wenn die CSS-Pixel nicht genau zu ihnen passen können.

## Klares Pixel-Art im Canvas

Viele Spiele rendern innerhalb eines {{htmlelement("canvas")}}-Elements, das dieselbe `image-rendering`-Technik verwenden kann, da Canvas auch Rasterbilder sind. Die Schritte, um dies zu erreichen, sind:

- Erstellen Sie ein {{htmlelement("canvas")}}-Element und setzen Sie seine `width`- und `height`-Attribute auf die ursprüngliche, kleinere Auflösung.
- Setzen Sie seine CSS-{{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften auf einen beliebigen Wert, den Sie möchten, aber gleichmäßig gestreckt, um das Seitenverhältnis beizubehalten. Wenn das Canvas mit einer Breite von 128 Pixeln erstellt wurde, würden wir die CSS-`width` auf `512px` setzen, wenn wir eine 4x-Skalierung wünschen.
- Setzen Sie die `image-rendering` CSS-Eigenschaft des {{htmlelement("canvas")}}-Elements auf `pixelated`.

Werfen wir einen Blick auf ein Beispiel. Das Originalbild, das wir hochskalieren möchten, sieht so aus:

![Pixelierte Nachtszenerie einer Katze am Rand einer Klippe mit kleinen Herzen über ihrem Kopf, hinter ihr ein großer Vollmond. Mit einem schwarzen Hintergrund wird unten im Bild weißer Text angezeigt: verliebt in den Mond.](cat.png)

Hier ist etwas HTML, um ein einfaches Canvas zu erstellen:

```html
<canvas id="game" width="128" height="128">A cat</canvas>
```

CSS zum Skalieren des Canvas und Rendern eines klaren Bildes:

```css
canvas {
  width: 512px;
  height: 512px;
  image-rendering: pixelated;
}
```

Und ein wenig JavaScript, um das Canvas einzurichten und das Bild zu laden:

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

Diese zusammen verwendeten Codes ergeben folgendes Ergebnis:

{{EmbedLiveSample("Klarer Pixel-Art im Canvas", "", 520)}}

> [!NOTE]
> Canvas-Inhalt ist für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text als Wert des `aria-label`-Attributs direkt im Canvas-Element selbst bei oder fügen Sie Ersatzinhalte innerhalb des geöffneten und geschlossenen Canvas-Tags ein. Canvas-Inhalt ist nicht Teil des DOM, aber eingebettete Ersatzinhalte sind es.

## Willkürliches Skalieren von Bildern im Canvas

Für das Beispiel mit einem einfachen `<img>` können Sie den Skalierungsfaktor auf jeden gewünschten Wert setzen, und `image-rendering: pixelated` wird sein Bestes tun, um die scharfen Kanten zu bewahren. Zum Beispiel können Sie das Bild um das 5,7-fache skalieren:

```css
img {
  /* 5.7x scale factor */
  width: 68.4px;
  height: 193.8px;
  image-rendering: pixelated;
}
```

<img src="technique_original.png" style="width: 68.4px; height: 193.8px; image-rendering: pixelated;" alt="kleiner, pixeliger Mann, mit CSS hochskaliert, erscheint klar" />

Vorher haben wir gesagt, dass `image-rendering: pixelated` auf der Stufe der Zuordnung von Bildpixeln zu CSS-Pixeln funktioniert. Aber wenn wir das Bild in ein Canvas zeichnen, haben wir zwei Ebenen der Zuordnung: von Bildpixeln zu Canvas-Pixeln und dann von Canvas-Pixeln zu CSS-Pixeln. Der zweite Schritt funktioniert genauso wie das Skalieren von Bildern mit `<img>`, sodass Sie auch beliebige Skalierungsfaktoren verwenden können, wenn Sie das Canvas mit CSS skalieren:

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

Aber wir müssen vorsichtig sein, wie die Bildpixel mit den Canvas-Pixeln ausgerichtet sind. Standardmäßig werden die Bildpixel im Verhältnis 1:1 zu den Canvas-Pixeln gezeichnet; jedoch können Sie, wenn Sie die zusätzlichen Argumente von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) verwenden, um das Bild in einer anderen Größe auf dem Canvas zu zeichnen, möglicherweise auf einen nicht ganzzahligen Skalierungsfaktor stoßen. Zum Beispiel, wenn Sie ein 128x128 Pixel Bild in einem 100x100 Pixel Bereich auf dem Canvas zeichnen, wird jedes Bildpixel als 0,78x0,78 Canvas Pixel gezeichnet, was zu Unschärfe führen kann.

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

{{EmbedLiveSample("Canvas Bildskala", "", 520)}}

Das gleiche passiert, wenn Sie [`scale()`](/de/docs/Web/API/CanvasRenderingContext2D/scale) verwenden, um das Canvas-Raster zu skalieren. In diesem Fall würde eine Einheit von 1 bei Aufrufen von Canvas-Methoden als nicht ganzzahlige Anzahl von Canvas-Pixeln interpretiert werden, was zu Unschärfe führt.

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

{{EmbedLiveSample("Canvas Kontextskala", "", 520)}}

Um dies zu beheben, müssen Sie sicherstellen, dass die Bildpixel immer als ganzzahlige Vielfache von Canvas-Pixeln gezeichnet werden. Das heißt, wenn Sie `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)` aufrufen, muss `dWidth` gleich `sWidth / xScale * n` sein, wobei `xScale` der x-Skalierungsfaktor für den Kontext ist (1.0, wenn Sie `scale()` nicht aufgerufen haben), und `n` eine ganze Zahl ist (1, 2, 3, ...). Dasselbe gilt für `dHeight`. Wenn Sie also ein 128x128 Pixel Bild auf einem Canvas zeichnen möchten, das um den Faktor 0,8 skaliert wurde, können Sie es nur bei Größen wie 160 (128 / 0,8 \* 1), 320 (128 / 0,8 \* 2) usw. zeichnen.

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

{{EmbedLiveSample("Canvas korrekte Kontextskala", "", 520)}}

Siehe den Canvas-[Zeichenformen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#seeing_blurry_edges)-Leitfaden für mehr Informationen darüber, wie Canvas-Pixel funktionieren.
