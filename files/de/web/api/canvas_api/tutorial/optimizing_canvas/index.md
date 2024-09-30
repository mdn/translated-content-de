---
title: Optimierung von canvas
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}

Das `<canvas>`-Element ist eines der am häufigsten verwendeten Werkzeuge zur Darstellung von 2D-Grafiken im Web. Wenn jedoch Websites und Anwendungen die Canvas-API bis an ihre Grenzen ausreizen, leidet die Leistung. Dieser Artikel bietet Vorschläge zur Optimierung Ihrer Nutzung des canvas-Elements, um sicherzustellen, dass Ihre Grafiken gut funktionieren.

## Leistungstipps

Im Folgenden finden Sie eine Sammlung von Tipps zur Verbesserung der Canvas-Leistung.

### Vorab ähnliche Primitive oder sich wiederholende Objekte auf einem Offscreen-Canvas rendern

Wenn Sie feststellen, dass Sie dieselben Zeichnungsoperationen in jedem Animationsframe wiederholen, sollten Sie sie auf ein Offscreen-Canvas auslagern. Sie können dann das Offscreen-Bild so oft wie nötig auf Ihr primäres Canvas rendern, ohne die Schritte, die zur Generierung erforderlich sind, unnötig zu wiederholen.

```js
myCanvas.offscreenCanvas = document.createElement("canvas");
myCanvas.offscreenCanvas.width = myCanvas.width;
myCanvas.offscreenCanvas.height = myCanvas.height;

myCanvas.getContext("2d").drawImage(myCanvas.offScreenCanvas, 0, 0);
```

### Vermeiden Sie Gleitkommakoordinaten und verwenden Sie stattdessen ganze Zahlen

Sub-Pixel-Rendering tritt auf, wenn Objekte auf einem Canvas ohne Ganzwerte gerendert werden.

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

Dies zwingt den Browser, zusätzliche Berechnungen zur Erstellung des Antialiasing-Effekts durchzuführen. Um dies zu vermeiden, sollten Sie sicherstellen, dass alle Koordinaten, die in Aufrufen von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) verwendet werden, mit {{jsxref("Math.floor()")}} gerundet werden.

### Skalieren Sie Bilder nicht in `drawImage`

Cachen Sie verschiedene Größen Ihrer Bilder auf einem Offscreen-Canvas beim Laden, anstatt sie ständig in [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) zu skalieren.

### Verwenden Sie mehrere geschichtete Canvas für komplexe Szenen

In Ihrer Anwendung stellen Sie vielleicht fest, dass einige Objekte sich häufig bewegen oder ändern müssen, während andere relativ statisch bleiben. Eine mögliche Optimierung in dieser Situation ist das Schichten Ihrer Elemente mit mehreren `<canvas>`-Elementen.

Angenommen, Sie haben ein Spiel mit einer Benutzeroberfläche oben, der Spielhandlung in der Mitte und einem statischen Hintergrund unten. In diesem Fall könnten Sie Ihr Spiel in drei `<canvas>`-Schichten aufteilen. Die Benutzeroberfläche würde sich nur bei Benutzereingaben ändern, die Gameplay-Schicht würde sich mit jedem neuen Frame ändern und der Hintergrund bliebe im Allgemeinen unverändert.

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

Wenn Sie ein statisches Hintergrundbild haben, können Sie es mit der CSS-{{cssxref("background")}}-Eigenschaft auf ein einfaches `<div>`-Element zeichnen und unter dem Canvas positionieren. Dies macht es überflüssig, den Hintergrund bei jedem Tick auf dem Canvas zu rendern.

### Skalierung des Canvas mit CSS-Transformationen

[CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) sind schneller, da sie die GPU nutzen. Der beste Fall ist, das Canvas nicht zu skalieren, oder ein kleineres Canvas zu haben und hochzuskalieren, anstatt ein größeres Canvas zu haben und herunterzuskalieren.

```js
const scaleX = window.innerWidth / canvas.width;
const scaleY = window.innerHeight / canvas.height;

const scaleToFit = Math.min(scaleX, scaleY);
const scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = "0 0"; //scale from top left
stage.style.transform = `scale(${scaleToFit})`;
```

### Deaktivieren Sie die Transparenz

Wenn Ihre Anwendung Canvas verwendet und keinen transparenten Hintergrund benötigt, stellen Sie die `alpha`-Option auf `false`, wenn Sie einen Zeichenkontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellen. Diese Information kann vom Browser intern genutzt werden, um das Rendering zu optimieren.

```js
const ctx = canvas.getContext("2d", { alpha: false });
```

### Skalierung für hochauflösende Displays

Es kann sein, dass Canvas-Elemente auf höher auflösenden Displays verschwommen erscheinen. Während viele Lösungen existieren, ist ein einfacher erster Schritt, die Canvas-Größe gleichzeitig hoch- und herunterzuskalieren, indem Sie ihre Attribute, Stile und den Maßstab ihres Kontexts nutzen.

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

- Fassen Sie Canvas-Aufrufe zusammen. Zum Beispiel zeichnen Sie eine Polylinie anstatt mehrere separate Linien.
- Vermeiden Sie unnötige Canvas-Zustandsänderungen.
- Rendern Sie nur die Bildschirmunterschiede und nicht den gesamten neuen Zustand.
- Vermeiden Sie die [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)-Eigenschaft, wann immer möglich.
- Vermeiden Sie [Textrendering](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) wann immer möglich.
- Probieren Sie verschiedene Möglichkeiten zum Löschen des Canvas aus ([`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect) vs. [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) vs. Größenänderung des Canvas).
- Verwenden Sie bei Animationen [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von [`setInterval()`](/de/docs/Web/API/SetInterval).
- Seien Sie vorsichtig mit schweren Physik-Bibliotheken.

## Siehe auch

- [Optimierung Ihres JavaScript-Spiels für Firefox OS – Mozilla Hacks](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}
