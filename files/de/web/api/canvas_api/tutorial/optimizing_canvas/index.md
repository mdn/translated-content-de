---
title: Optimieren von Canvas
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}

Das {{HTMLElement("canvas")}}-Element ist eines der am häufigsten verwendeten Werkzeuge zum Rendern von 2D-Grafiken im Web. Wenn jedoch Websites und Apps die Canvas-API bis an ihre Grenzen austesten, leidet die Leistung. Dieser Artikel bietet Vorschläge zur Optimierung Ihrer Nutzung des Canvas-Elements, um sicherzustellen, dass Ihre Grafiken gut funktionieren.

## Leistungstipps

Im Folgenden finden Sie eine Sammlung von Tipps zur Verbesserung der Canvas-Leistung.

### Vorab-Rendern ähnlicher Primitive oder sich wiederholender Objekte auf einem Offscreen-Canvas

Falls Sie feststellen, dass Sie einige der gleichen Zeichenoperationen in jedem Animationsbild wiederholen, sollten Sie diese auf ein Offscreen-Canvas auslagern. Sie können dann das Offscreen-Bild so oft wie nötig auf Ihr primäres Canvas rendern, ohne die Schritte, die zur Erzeugung erforderlich sind, unnötigerweise zu wiederholen.

```js
myCanvas.offscreenCanvas = document.createElement("canvas");
myCanvas.offscreenCanvas.width = myCanvas.width;
myCanvas.offscreenCanvas.height = myCanvas.height;

myCanvas.getContext("2d").drawImage(myCanvas.offScreenCanvas, 0, 0);
```

### Vermeiden Sie Gleitkomma-Koordinaten und verwenden Sie stattdessen ganzzahlige Werte

Sub-Pixel-Rendering tritt auf, wenn Sie Objekte auf einem Canvas ohne ganze Werte rendern.

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

Dies zwingt den Browser zu zusätzlichen Berechnungen, um den Anti-Aliasing-Effekt zu erzeugen. Um dies zu vermeiden, sollten Sie alle Koordinaten, die in Aufrufen von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) verwendet werden, mit {{jsxref("Math.floor()")}} runden, zum Beispiel.

### Skalieren Sie keine Bilder in `drawImage`

Speichern Sie verschiedene Größen Ihrer Bilder beim Laden auf einem Offscreen-Canvas zwischen anstatt sie ständig in [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) zu skalieren.

### Verwenden Sie mehrere geschichtete Canvases für komplexe Szenen

In Ihrer Anwendung stellen Sie möglicherweise fest, dass sich einige Objekte häufig bewegen oder ändern müssen, während andere relativ statisch bleiben. Eine mögliche Optimierung in dieser Situation besteht darin, Ihre Elemente mit mehreren `<canvas>`-Elementen zu schichten.

Zum Beispiel: Angenommen, Sie haben ein Spiel mit einer Benutzeroberfläche oben, der Gameplay-Aktion in der Mitte und einem statischen Hintergrund unten. In diesem Fall könnten Sie Ihr Spiel in drei `<canvas>`-Schichten aufteilen. Die Benutzeroberfläche würde sich nur bei Benutzereingaben ändern, die Gameplay-Schicht würde mit jedem neuen Frame wechseln und der Hintergrund bliebe weitgehend unverändert.

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

Wenn Sie ein statisches Hintergrundbild haben, können Sie es mit der CSS-{{cssxref("background")}}-Eigenschaft auf ein einfaches {{HTMLElement("div")}}-Element zeichnen und es unter dem Canvas positionieren. Dies negiert die Notwendigkeit, den Hintergrund bei jedem Tick auf das Canvas zu rendern.

### Skalieren von Canvas mit CSS-Transformationen

[CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) sind schneller, da sie die GPU verwenden. Am besten ist es, das Canvas nicht zu skalieren oder ein kleineres Canvas zu haben und es hochzuskalieren, anstatt ein größeres Canvas zu haben und es herunterzuskalieren.

```js
const scaleX = window.innerWidth / canvas.width;
const scaleY = window.innerHeight / canvas.height;

const scaleToFit = Math.min(scaleX, scaleY);
const scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = "0 0"; // Scale from top left
stage.style.transform = `scale(${scaleToFit})`;
```

### Transparenz ausschalten

Wenn Ihre Anwendung Canvas verwendet und keinen transparenten Hintergrund benötigt, setzen Sie die Option `alpha` auf `false`, wenn Sie einen Zeichnungskontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellen. Diese Information kann intern vom Browser verwendet werden, um das Rendering zu optimieren.

```js
const ctx = canvas.getContext("2d", { alpha: false });
```

### Skalieren für hochauflösende Bildschirme

Sie werden feststellen, dass Canvas-Elemente auf höher auflösenden Bildschirmen unscharf erscheinen. Während es viele Lösungen dafür geben mag, ist ein einfacher erster Schritt, die Größe des Canvas gleichzeitig hoch- und herunterzuskalieren, indem man seine Attribute, das Styling und den Maßstab seines Kontexts nutzt.

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

- Bündeln Sie Canvas-Aufrufe. Zeichnen Sie zum Beispiel eine Polylinie anstelle mehrerer getrennter Linien.
- Vermeiden Sie unnötige Änderungen des Canvas-Zustands.
- Rendern Sie nur Bildschirmabweichungen, nicht den gesamten neuen Zustand.
- Vermeiden Sie die Verwendung der [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)-Eigenschaft, wann immer möglich.
- Vermeiden Sie nach Möglichkeit das [Text-Rendering](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).
- Probieren Sie verschiedene Möglichkeiten aus, das Canvas zu löschen ([`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect) vs. [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) vs. Größenänderung des Canvas).
- Verwenden Sie bei Animationen [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von [`setInterval()`](/de/docs/Web/API/Window/setInterval).
- Seien Sie vorsichtig mit schwergewichtigen Physikbibliotheken.

## Siehe auch

- [Optimieren Ihres JavaScript-Spiels für Firefox OS – Mozilla Hacks](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}
