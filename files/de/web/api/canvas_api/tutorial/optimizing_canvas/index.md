---
title: Optimierung von canvas
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
l10n:
  sourceCommit: b795bc99fc5c5d8a96c1b202a12750404085c28a
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}

Das {{HTMLElement("canvas")}}-Element ist eines der am häufigsten verwendeten Werkzeuge zum Rendern von 2D-Grafiken im Web. Wenn Websites und Apps jedoch die Grenzen der Canvas-API ausreizen, leidet die Leistung. Dieser Artikel gibt Vorschläge zur Optimierung der Verwendung des canvas-Elements, um sicherzustellen, dass Ihre Grafiken gut performen.

## Leistungstipps

Die folgende Sammlung enthält Tipps zur Verbesserung der canvas-Leistung.

### Vorab-Rendering ähnlicher Primitiven oder wiederholender Objekte auf einem Offscreen-Canvas

Wenn Sie feststellen, dass Sie einige der gleichen Zeichenoperationen bei jedem Animationsframe wiederholen, sollten Sie in Betracht ziehen, diese auf ein Offscreen-Canvas auszulagern. Sie können dann das Offscreen-Bild so oft wie nötig auf Ihr primäres Canvas rendern, ohne die Schritte, die zur Erstellung erforderlich waren, unnötig zu wiederholen.

```js
myCanvas.offscreenCanvas = document.createElement("canvas");
myCanvas.offscreenCanvas.width = myCanvas.width;
myCanvas.offscreenCanvas.height = myCanvas.height;

myCanvas.getContext("2d").drawImage(myCanvas.offScreenCanvas, 0, 0);
```

### Vermeiden Sie Gleitkomma-Koordinaten und verwenden Sie stattdessen Ganzzahlen

Sub-Pixel-Rendering tritt auf, wenn Sie Objekte auf einem Canvas ohne ganzzahlige Werte rendern.

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

Dadurch wird der Browser gezwungen, zusätzliche Berechnungen durchzuführen, um den Anti-Aliasing-Effekt zu erzeugen. Um dies zu vermeiden, stellen Sie sicher, dass Sie alle Koordinaten, die in Aufrufen von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) verwendet werden, mit {{jsxref("Math.floor()")}} runden, zum Beispiel.

### Skalieren Sie Bilder nicht in `drawImage`

Speichern Sie verschiedene Größen Ihrer Bilder auf einem Offscreen-Canvas beim Laden, anstatt sie ständig in [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) zu skalieren.

### Verwenden Sie mehrere, geschichtete Canvases für komplexe Szenen

In Ihrer Anwendung können Sie feststellen, dass einige Objekte häufig bewegt oder geändert werden müssen, während andere relativ statisch bleiben. Eine mögliche Optimierung in diesem Fall ist die Schichtung Ihrer Elemente mit mehreren `<canvas>`-Elementen.

Zum Beispiel, wenn Sie ein Spiel mit einer Benutzeroberfläche oben, der Spielaktion in der Mitte und einem statischen Hintergrund unten haben. In diesem Fall könnten Sie Ihr Spiel in drei `<canvas>`-Schichten aufteilen. Die Benutzeroberfläche würde sich nur bei Benutzereingaben ändern, die Spielebene würde sich mit jedem neuen Frame ändern, und der Hintergrund bliebe im Allgemeinen unverändert.

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

Wenn Sie ein statisches Hintergrundbild haben, können Sie es mit der CSS-{{cssxref("background")}}-Eigenschaft auf ein einfaches {{HTMLElement("div")}}-Element zeichnen und es unter dem Canvas positionieren. Dies negiert die Notwendigkeit, den Hintergrund bei jedem Takt auf das Canvas zu rendern.

### Skalieren von Canvas mit CSS-Transformationen

[CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) sind schneller, da sie die GPU nutzen. Im besten Fall wird das Canvas nicht skaliert, oder Sie haben ein kleineres Canvas und skalieren es hoch anstatt ein größeres Canvas und skalieren es herunter.

```js
const scaleX = window.innerWidth / canvas.width;
const scaleY = window.innerHeight / canvas.height;

const scaleToFit = Math.min(scaleX, scaleY);
const scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = "0 0"; //scale from top left
stage.style.transform = `scale(${scaleToFit})`;
```

### Deaktivieren Sie die Transparenz

Wenn Ihre Anwendung Canvas nutzt und keinen transparenten Hintergrund benötigt, setzen Sie die `alpha`-Option auf `false`, wenn Sie einen Zeichenkontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellen. Diese Information kann vom Browser intern genutzt werden, um das Rendering zu optimieren.

```js
const ctx = canvas.getContext("2d", { alpha: false });
```

### Skalierung für hochauflösende Displays

Möglicherweise stellen Sie fest, dass Canvas-Elemente auf hochauflösenden Displays verschwommen erscheinen. Obwohl es viele Lösungen geben mag, besteht ein einfacher erster Schritt darin, die Canvas-Größe gleichzeitig mit ihren Attributen, ihrer Gestaltung und der Skalierung ihres Kontextes zu vergrößern und zu verkleinern.

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

- Gruppieren Sie Canvas-Aufrufe. Zeichnen Sie zum Beispiel eine Polylinie anstelle mehrerer einzelner Linien.
- Vermeiden Sie unnötige Canvas-Zustandsänderungen.
- Rendern Sie nur Bildschirmunterschiede, nicht den gesamten neuen Zustand.
- Vermeiden Sie die [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)-Eigenschaft wann immer möglich.
- Vermeiden Sie [Text-Rendering](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) wann immer möglich.
- Probieren Sie verschiedene Möglichkeiten zum Löschen des Canvas aus ([`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect) vs. [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) vs. Größe des Canvas ändern).
- Verwenden Sie bei Animationen [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von [`setInterval()`](/de/docs/Web/API/Window/setInterval).
- Seien Sie vorsichtig mit schweren Physik-Bibliotheken.

## Siehe auch

- [Optimierung Ihres JavaScript-Spiels für Firefox OS – Mozilla Hacks](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}
