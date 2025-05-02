---
title: Optimierung von canvas
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
l10n:
  sourceCommit: 9d9db86025ed5b54259c522eec5625f64a3c1c51
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}

Das {{HTMLElement("canvas")}}-Element ist eines der am häufigsten verwendeten Werkzeuge für das Rendern von 2D-Grafiken im Web. Wenn Webseiten und Apps die Canvas API an ihre Grenzen bringen, leidet jedoch die Leistung. Dieser Artikel liefert Vorschläge zur Optimierung Ihrer Nutzung des canvas-Elements, um sicherzustellen, dass Ihre Grafiken gut performen.

## Leistungstipps

Im Folgenden finden Sie eine Sammlung von Tipps zur Verbesserung der Canvas-Leistung.

### Ähnliche Primitive oder sich wiederholende Objekte auf einem Offscreen-Canvas vor-gerendert

Wenn Sie feststellen, dass Sie einige der gleichen Zeichenoperationen bei jedem Animationsbildlauf wiederholen, erwägen Sie, diese auf einen Offscreen-Canvas zu verlagern. Sie können das Offscreen-Bild dann so oft wie nötig auf Ihr Haupt-Canvas rendern, ohne die Schritte zur Generierung unnötigerweise zu wiederholen.

```js
myCanvas.offscreenCanvas = document.createElement("canvas");
myCanvas.offscreenCanvas.width = myCanvas.width;
myCanvas.offscreenCanvas.height = myCanvas.height;

myCanvas.getContext("2d").drawImage(myCanvas.offScreenCanvas, 0, 0);
```

### Vermeiden Sie Gleitkomma-Koordinaten und verwenden Sie stattdessen ganze Zahlen

Sub-Pixel-Rendering tritt auf, wenn Sie Objekte auf einem Canvas ohne Ganzzahlen rendern.

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

Dies zwingt den Browser, zusätzliche Berechnungen zur Erstellung des Kantenglättungseffekts auszuführen. Um dies zu vermeiden, stellen Sie sicher, dass alle Koordinaten, die in Aufrufen von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) verwendet werden, mit {{jsxref("Math.floor()")}} gerundet werden, zum Beispiel.

### Skalieren Sie Bilder nicht in `drawImage`

Zwischenspeichern Sie verschiedene Größen Ihrer Bilder auf einem Offscreen-Canvas, wenn Sie sie laden, anstatt sie ständig in [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) zu skalieren.

### Verwenden Sie mehrere geschichtete Canvas für komplexe Szenen

In Ihrer Anwendung kann es sein, dass einige Objekte sich häufig bewegen oder ändern müssen, während andere relativ statisch bleiben. Eine mögliche Optimierung in dieser Situation besteht darin, Ihre Objekte mit mehreren `<canvas>`-Elementen zu schichten.

Zum Beispiel: Angenommen, Sie haben ein Spiel mit einer Benutzeroberfläche oben, der Spielaktion in der Mitte und einem statischen Hintergrund unten. In diesem Fall könnten Sie Ihr Spiel in drei `<canvas>`-Schichten aufteilen. Die Benutzeroberfläche würde sich nur bei Benutzereingaben ändern, die Spielebene würde sich bei jedem neuen Frame ändern, und der Hintergrund bliebe im Allgemeinen unverändert.

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

Wenn Sie ein statisches Hintergrundbild haben, können Sie es auf ein einfaches {{HTMLElement("div")}}-Element mittels der CSS-Eigenschaft {{cssxref("background")}} zeichnen und es unter dem Canvas positionieren. Dies negiert die Notwendigkeit, den Hintergrund bei jedem Tick auf das Canvas zu rendern.

### Skalierung des Canvas mit CSS-Transformationen

[CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) sind schneller, da sie die GPU verwenden. Im besten Fall skalieren Sie das Canvas nicht oder haben ein kleineres Canvas, das hochskaliert wird, anstatt ein größeres Canvas herunterzuskalieren.

```js
const scaleX = window.innerWidth / canvas.width;
const scaleY = window.innerHeight / canvas.height;

const scaleToFit = Math.min(scaleX, scaleY);
const scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = "0 0"; // Scale from top left
stage.style.transform = `scale(${scaleToFit})`;
```

### Deaktivieren Sie die Transparenz

Wenn Ihre Anwendung Canvas verwendet und keinen transparenten Hintergrund benötigt, setzen Sie die `alpha`-Option auf `false`, wenn Sie einen Zeichnungskontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellen. Diese Information kann intern vom Browser zur Optimierung des Renderings genutzt werden.

```js
const ctx = canvas.getContext("2d", { alpha: false });
```

### Skalierung für hochauflösende Displays

Möglicherweise stellen Sie fest, dass Canvas-Elemente auf höher auflösenden Displays unscharf erscheinen. Während es viele Lösungen geben mag, ist ein einfacher erster Schritt, die Canvas-Größe gleichzeitig zu vergrößern und zu verkleinern, und zwar unter Verwendung seiner Attribute, Gestaltung und dem Maßstab seines Kontexts.

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

- Bündeln Sie Canvas-Aufrufe zusammen. Zeichnen Sie zum Beispiel eine Polylinie anstatt mehrerer einzelner Linien.
- Vermeiden Sie unnötige Änderungen des Canvas-Zustands.
- Rendern Sie nur Bildschirmunterschiede, nicht den gesamten neuen Zustand.
- Vermeiden Sie die Verwendung der [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)-Eigenschaft wann immer möglich.
- Vermeiden Sie wann immer möglich die [Textrendering](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).
- Probieren Sie verschiedene Methoden zum Löschen des Canvas aus ([`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect) vs. [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) vs. Größenanpassung des Canvas).
- Verwenden Sie bei Animationen [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von [`setInterval()`](/de/docs/Web/API/Window/setInterval).
- Seien Sie vorsichtig mit schweren Physik-Bibliotheken.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}
