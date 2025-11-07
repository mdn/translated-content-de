---
title: Optimierung der Leinwand
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}

Das {{HTMLElement("canvas")}}-Element ist eines der am häufigsten verwendeten Werkzeuge zum Rendern von 2D-Grafiken im Web. Wenn Websites und Apps jedoch die Canvas API maximal ausreizen, leidet die Leistung. Dieser Artikel bietet Vorschläge zur Optimierung der Verwendung des Canvas-Elements, um sicherzustellen, dass Ihre Grafiken gut performen.

## Leistungstipps

Nachfolgend finden Sie eine Sammlung von Tipps zur Verbesserung der Canvas-Leistung.

### Vorab-Rendering ähnlicher Primitiven oder sich wiederholender Objekte auf einer Offscreen-Leinwand

Wenn Sie feststellen, dass Sie einige der gleichen Zeichenoperationen in jedem Animationsrahmen wiederholen, sollten Sie in Erwägung ziehen, diese auf eine Offscreen-Leinwand auszulagern. Sie können dann das Offscreen-Bild bei Bedarf so oft wie nötig auf Ihre Hauptleinwand rendern, ohne die Schritte, die zur Erzeugung erforderlich sind, unnötig zu wiederholen.

```js
myCanvas.offscreenCanvas = document.createElement("canvas");
myCanvas.offscreenCanvas.width = myCanvas.width;
myCanvas.offscreenCanvas.height = myCanvas.height;

myCanvas.getContext("2d").drawImage(myCanvas.offScreenCanvas, 0, 0);
```

### Vermeiden Sie Floating-Point-Koordinaten und verwenden Sie stattdessen ganze Zahlen

Sub-Pixel-Rendering tritt auf, wenn Sie Objekte ohne ganzzahlige Werte auf einer Leinwand rendern.

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

Dies zwingt den Browser zu zusätzlichen Berechnungen, um den Anti-Aliasing-Effekt zu erzeugen. Um dies zu vermeiden, sollten Sie sicherstellen, dass alle Koordinaten, die in Aufrufen von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) verwendet werden, mit {{jsxref("Math.floor()")}} gerundet werden.

### Skalieren Sie keine Bilder in `drawImage`

Speichern Sie verschiedene Größen Ihrer Bilder auf einer Offscreen-Leinwand beim Laden, anstatt sie ständig in [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) zu skalieren.

### Verwenden Sie mehrere geschichtete Leinwände für komplexe Szenen

In Ihrer Anwendung kann es vorkommen, dass sich einige Objekte häufig bewegen oder ändern müssen, während andere relativ statisch bleiben. Eine mögliche Optimierung in dieser Situation ist es, Ihre Elemente mit mehreren `<canvas>`-Elementen zu schichten.

Nehmen wir zum Beispiel an, Sie haben ein Spiel mit einer Benutzeroberfläche oben, der Gameplay-Aktion in der Mitte und einem statischen Hintergrund unten. In diesem Fall könnten Sie Ihr Spiel in drei `<canvas>`-Schichten aufteilen. Die Benutzeroberfläche würde sich nur auf Benutzereingaben ändern, die Gameplay-Schicht würde sich mit jedem neuen Frame ändern und der Hintergrund bliebe im Allgemeinen unverändert.

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

Wenn Sie ein statisches Hintergrundbild haben, können Sie es auf ein einfaches {{HTMLElement("div")}}-Element mit der CSS-{{cssxref("background")}}-Eigenschaft zeichnen und unter der Leinwand positionieren. Dadurch entfällt die Notwendigkeit, den Hintergrund bei jedem Takt auf die Leinwand zu rendern.

### Skalierung der Leinwand mit CSS-Transforms

[CSS-Transforms](/de/docs/Web/CSS/Guides/Transforms/Using) sind schneller, da sie die GPU verwenden. Der beste Fall ist, die Leinwand nicht zu skalieren oder eine kleinere Leinwand zu haben und sie zu vergrößern, anstatt eine größere Leinwand zu haben und sie zu verkleinern.

```js
const scaleX = window.innerWidth / canvas.width;
const scaleY = window.innerHeight / canvas.height;

const scaleToFit = Math.min(scaleX, scaleY);
const scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = "0 0"; // Scale from top left
stage.style.transform = `scale(${scaleToFit})`;
```

### Deaktivieren Sie die Transparenz

Wenn Ihre Anwendung eine Leinwand verwendet und keinen transparenten Hintergrund benötigt, setzen Sie die `alpha`-Option auf `false`, wenn Sie einen Zeichenkontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellen. Diese Information kann intern vom Browser verwendet werden, um das Rendering zu optimieren.

```js
const ctx = canvas.getContext("2d", { alpha: false });
```

### Skalierung für hochauflösende Displays

Es kann passieren, dass Leinwandelemente auf höher auflösenden Displays verschwommen erscheinen. Während viele Lösungen existieren, ist ein einfacher erster Schritt, die Leinwandgröße gleichzeitig hoch- und herunterzuskalieren, indem Sie ihre Attribute, das Styling und die Skalierung ihres Kontextes verwenden.

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

- Fassen Sie Leinwandaufrufe zusammen. Zeichnen Sie beispielsweise eine Polylinie anstelle mehrerer separater Linien.
- Vermeiden Sie unnötige Zustandsänderungen der Leinwand.
- Rendern Sie nur Bildschirmdifferenzen, nicht den gesamten neuen Zustand.
- Vermeiden Sie die [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)-Eigenschaft, wann immer möglich.
- Vermeiden Sie [Textrendering](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text), wann immer möglich.
- Probieren Sie verschiedene Methoden zum Löschen der Leinwand aus ([`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect) vs. [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) vs. Leinwand vergrößern).
- Verwenden Sie bei Animationen [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von [`setInterval()`](/de/docs/Web/API/Window/setInterval).
- Seien Sie vorsichtig mit schweren Physik-Bibliotheken.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}
