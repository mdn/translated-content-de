---
title: Optimierung des Canvas
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}

Das `<canvas>`-Element ist eines der am häufigsten verwendeten Werkzeuge zur Darstellung von 2D-Grafiken im Web. Wenn jedoch Websites und Apps die Canvas-API bis an ihre Grenzen ausreizen, leidet die Leistung. Dieser Artikel bietet Vorschläge zur Optimierung der Nutzung des Canvas-Elements, um sicherzustellen, dass Ihre Grafiken gut performen.

## Leistungstipps

Nachfolgend finden Sie eine Sammlung von Tipps zur Verbesserung der Canvas-Leistung.

### Vorab-Rendering ähnlicher Primitiven oder wiederholender Objekte auf einem Offscreen-Canvas

Wenn Sie feststellen, dass Sie einige der gleichen Zeichenoperationen in jedem Animationsframe wiederholen, sollten Sie erwägen, diese auf einen Offscreen-Canvas auszulagern. Sie können dann das Offscreen-Bild so oft wie nötig auf Ihr Haupt-Canvas rendern, ohne die Schritte unnötig zu wiederholen, die erforderlich sind, um es zunächst zu erzeugen.

```js
myCanvas.offscreenCanvas = document.createElement("canvas");
myCanvas.offscreenCanvas.width = myCanvas.width;
myCanvas.offscreenCanvas.height = myCanvas.height;

myCanvas.getContext("2d").drawImage(myCanvas.offScreenCanvas, 0, 0);
```

### Vermeiden Sie Gleitkomma-Koordinaten und verwenden Sie stattdessen Ganzzahlen

Subpixel-Rendering tritt auf, wenn Objekte auf einem Canvas ohne ganze Werte gerendert werden.

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

Dies zwingt den Browser, zusätzliche Berechnungen durchzuführen, um den Anti-Aliasing-Effekt zu erzeugen. Um dies zu vermeiden, stellen Sie sicher, dass Sie alle in Aufrufen von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) verwendeten Koordinaten mit {{jsxref("Math.floor()")}} runden.

### Skalieren Sie keine Bilder in `drawImage`

Zwischenspeichern von verschiedenen Größen Ihrer Bilder auf einem Offscreen-Canvas beim Laden, anstatt sie ständig in [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) zu skalieren.

### Verwenden Sie mehrere überlagerte Canvases für komplexe Szenen

In Ihrer Anwendung stellen Sie möglicherweise fest, dass einige Objekte häufig bewegt oder geändert werden müssen, während andere relativ statisch bleiben. Eine mögliche Optimierung in diesem Fall ist es, Ihre Elemente mithilfe mehrerer `<canvas>`-Elemente zu schichten.

Zum Beispiel: Angenommen, Sie haben ein Spiel mit einer Benutzeroberfläche oben, der Spielaktion in der Mitte und einem statischen Hintergrund unten. In diesem Fall könnten Sie Ihr Spiel in drei `<canvas>`-Schichten aufteilen. Die Benutzeroberfläche würde sich nur bei Benutzereingaben ändern, die Spielschicht würde sich mit jedem neuen Frame ändern und der Hintergrund bliebe im Allgemeinen unverändert.

```html
<div id="stage">
  <canvas id="ui-layer" width="480" height="320"></canvas>
  <canvas id="game-layer" width="480" height="320"></canvas>
  <canvas id="background-layer" width="480" height="320"></canvas>
</div>

<style>
  #stage {
    width: 480px;
    height: 320px;
    position: relative;
    border: 2px solid black;
  }

  canvas {
    position: absolute;
  }
  #ui-layer {
    z-index: 3;
  }
  #game-layer {
    z-index: 2;
  }
  #background-layer {
    z-index: 1;
  }
</style>
```

### Verwenden Sie einfaches CSS für große Hintergrundbilder

Wenn Sie ein statisches Hintergrundbild haben, können Sie es auf einem einfachen `<div>`-Element mit der CSS-Eigenschaft {{cssxref("background")}} zeichnen und es unter dem Canvas positionieren. Dies negiert die Notwendigkeit, den Hintergrund in jedem Takt auf das Canvas zu rendern.

### Skalierung des Canvas mit CSS-Transformationen

[CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) sind schneller, da sie die GPU verwenden. Der beste Fall ist, das Canvas nicht zu skalieren oder ein kleineres Canvas hochzuskalieren, anstatt ein größeres herunterzuskalieren.

```js
const scaleX = window.innerWidth / canvas.width;
const scaleY = window.innerHeight / canvas.height;

const scaleToFit = Math.min(scaleX, scaleY);
const scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = "0 0"; //scale from top left
stage.style.transform = `scale(${scaleToFit})`;
```

### Transparenz ausschalten

Wenn Ihre Anwendung Canvas verwendet und keinen transparenten Hintergrund benötigt, setzen Sie die `alpha`-Option auf `false`, wenn Sie einen Zeichenkontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellen. Diese Information kann vom Browser intern zur Optimierung des Renderings verwendet werden.

```js
const ctx = canvas.getContext("2d", { alpha: false });
```

### Skalierung für hochauflösende Displays

Möglicherweise stellen Sie fest, dass Canvas-Elemente auf hochauflösenden Bildschirmen unscharf erscheinen. Während viele Lösungen existieren, ist ein einfacher erster Schritt, die Canvas-Größe gleichzeitig mit seinen Attributen, dem Styling und der Skalierung seines Kontexts zu vergrößern und zu verkleinern.

```js
// Get the DPR and size of the canvas
const dpr = window.devicePixelRatio;
const rect = canvas.getBoundingClientRect();

// Set the "actual" size of the canvas
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;

// Scale the context to ensure correct drawing operations
ctx.scale(dpr, dpr);

// Set the "drawn" size of the canvas
canvas.style.width = `${rect.width}px`;
canvas.style.height = `${rect.height}px`;
```

### Weitere Tipps

- Bündeln Sie Canvas-Aufrufe zusammen. Zeichnen Sie beispielsweise eine Polylinie anstatt mehrere separate Linien.
- Vermeiden Sie unnötige Canvas-Zustandsänderungen.
- Rendern Sie nur Bildschirmunterschiede, nicht den gesamten neuen Zustand.
- Vermeiden Sie die Eigenschaft [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur) wann immer möglich.
- Vermeiden Sie [Textrendering](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) wann immer möglich.
- Probieren Sie verschiedene Möglichkeiten aus, das Canvas zu löschen ([`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect) vs. [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) vs. Neugröße des Canvas).
- Verwenden Sie bei Animationen [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von [`setInterval()`](/de/docs/Web/API/SetInterval).
- Seien Sie vorsichtig mit schweren Physik-Bibliotheken.

## Siehe auch

- [Optimierung Ihres JavaScript-Spiels für Firefox OS – Mozilla Hacks](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}
