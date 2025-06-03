---
title: Optimierung von canvas
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}

Das {{HTMLElement("canvas")}}-Element ist eines der am häufigsten verwendeten Werkzeuge für das Rendern von 2D-Grafiken im Web. Wenn jedoch Websites und Apps die Canvas-API bis an ihre Grenzen ausreizen, leidet die Leistung. Dieser Artikel bietet Vorschläge zur Optimierung der Nutzung des canvas-Elements, um sicherzustellen, dass Ihre Grafiken gut funktionieren.

## Leistungstipps

Im Folgenden finden Sie eine Sammlung von Tipps zur Verbesserung der Canvas-Leistung.

### Ähnliche Primitive oder sich wiederholende Objekte auf einem offscreen canvas vor-rendern

Wenn Sie feststellen, dass Sie einige der gleichen Zeichnungsoperationen in jedem Animationsframe wiederholen, sollten Sie in Betracht ziehen, diese auf ein offscreen canvas auszulagern. Sie können das offscreen-Bild dann so oft wie nötig auf Ihr primäres Canvas rendern, ohne die Schritte zur Erzeugung unnötig zu wiederholen.

```js
myCanvas.offscreenCanvas = document.createElement("canvas");
myCanvas.offscreenCanvas.width = myCanvas.width;
myCanvas.offscreenCanvas.height = myCanvas.height;

myCanvas.getContext("2d").drawImage(myCanvas.offScreenCanvas, 0, 0);
```

### Vermeiden Sie Fließkomma-Koordinaten und verwenden Sie stattdessen Ganzzahlen

Subpixel-Rendering tritt auf, wenn Sie Objekte auf ein Canvas ohne Ganzzahlen rendern.

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

Dies zwingt den Browser, zusätzliche Berechnungen für den Anti-Aliasing-Effekt durchzuführen. Um dies zu vermeiden, stellen Sie sicher, dass alle in Aufrufen von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) verwendeten Koordinaten mit {{jsxref("Math.floor()")}} gerundet werden, zum Beispiel.

### Skalieren Sie keine Bilder in `drawImage`

Speichern Sie verschiedene Größen Ihrer Bilder auf einem offscreen canvas beim Laden, anstatt sie ständig in [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) zu skalieren.

### Verwenden Sie mehrere geschichtete Canvas für komplexe Szenen

In Ihrer Anwendung kann es sein, dass sich einige Objekte häufig bewegen oder ändern müssen, während andere relativ statisch bleiben. Eine mögliche Optimierung in dieser Situation ist es, Ihre Elemente mithilfe mehrerer `<canvas>`-Elemente zu schichten.

Angenommen, Sie haben ein Spiel mit einer Benutzeroberfläche oben, der Gameplay-Aktion in der Mitte und einem statischen Hintergrund unten. In diesem Fall könnten Sie Ihr Spiel in drei `<canvas>`-Schichten aufteilen. Die Benutzeroberfläche würde sich nur bei Benutzereingaben ändern, die Gameplay-Schicht mit jedem neuen Frame und der Hintergrund bliebe im Allgemeinen unverändert.

```html
<div id="stage">
  <canvas id="ui-layer" width="480" height="320"></canvas>
  <canvas id="game-layer" width="480" height="320"></canvas>
  <canvas id="background-layer" width="480" height="320"></canvas>
</div>
```

```css
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
```

### Verwenden Sie einfaches CSS für große Hintergrundbilder

Wenn Sie ein statisches Hintergrundbild haben, können Sie es mit der CSS-{{cssxref("background")}}-Eigenschaft auf ein einfaches {{HTMLElement("div")}}-Element zeichnen und es unter das Canvas positionieren. Dadurch wird vermieden, dass der Hintergrund bei jedem Tick auf das Canvas gerendert werden muss.

### Skalierung von Canvas mit CSS-Transformationen

[CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) sind schneller, da sie die GPU nutzen. Der beste Fall ist, das Canvas nicht zu skalieren, oder ein kleineres Canvas zu haben und es hochzuskalieren, anstatt ein größeres Canvas zu haben und es herunterzuskalieren.

```js
const scaleX = window.innerWidth / canvas.width;
const scaleY = window.innerHeight / canvas.height;

const scaleToFit = Math.min(scaleX, scaleY);
const scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = "0 0"; // Scale from top left
stage.style.transform = `scale(${scaleToFit})`;
```

### Transparenz ausschalten

Wenn Ihre Anwendung Canvas verwendet und keinen transparenten Hintergrund benötigt, setzen Sie die `alpha`-Option auf `false`, wenn Sie einen Zeichenkontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellen. Diese Information kann intern vom Browser verwendet werden, um das Rendering zu optimieren.

```js
const ctx = canvas.getContext("2d", { alpha: false });
```

### Skalierung für hochauflösende Displays

Sie könnten feststellen, dass Canvas-Elemente auf höherauflösenden Displays unscharf erscheinen. Während es viele Lösungen geben mag, ist ein einfacher erster Schritt, die Canvas-Größe gleichzeitig hoch- und herunterzuskalieren, unter Verwendung ihrer Attribute, ihres Stylings und der Skalierung ihres Kontexts.

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

- Fassen Sie Canvas-Aufrufe zusammen. Zeichnen Sie zum Beispiel eine Polylinie anstelle mehrerer einzelner Linien.
- Vermeiden Sie unnötige Canvas-Zustandsänderungen.
- Rendern Sie nur Bildschirmunterschiede, nicht den gesamten neuen Zustand.
- Vermeiden Sie die [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)-Eigenschaft wann immer möglich.
- Vermeiden Sie soweit möglich die [Textrendering](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).
- Probieren Sie verschiedene Methoden zum Löschen des Canvas aus ([`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect) vs. [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) vs. Neukalibrieren des Canvas).
- Bei Animationen verwenden Sie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von [`setInterval()`](/de/docs/Web/API/Window/setInterval).
- Seien Sie vorsichtig mit umfangreichen Physikbibliotheken.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}
