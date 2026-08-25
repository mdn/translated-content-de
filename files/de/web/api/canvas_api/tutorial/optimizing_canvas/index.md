---
title: Optimierung von Canvas
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
l10n:
  sourceCommit: ef3d35612c569a9ad17dade2e356a10808206612
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}

Das {{HTMLElement("canvas")}}-Element ist eines der am häufigsten genutzten Werkzeuge für das Rendering von 2D-Grafiken im Web. Wenn Websites und Apps jedoch die Grenzen der Canvas-API ausreizen, leidet die Leistung. Dieser Artikel bietet Vorschläge zur Optimierung der Nutzung des Canvas-Elements, um sicherzustellen, dass Ihre Grafiken gut performen.

## Leistungstipps

Im Folgenden finden Sie eine Sammlung von Tipps zur Verbesserung der Canvas-Leistung.

### Ähnliche Primitive oder sich wiederholende Objekte auf einem Offscreen-Canvas vorab rendern

Wenn Sie einige der gleichen Zeichenoperationen in jedem Animationsframe wiederholen, sollten Sie erwägen, diese auf einen Offscreen-Canvas auszulagern. Sie können dann das Offscreen-Bild so oft wie nötig auf Ihren primären Canvas rendern, ohne die Schritte, die zur Erstellung erforderlich sind, unnötigerweise zu wiederholen.

```js
myCanvas.offscreenCanvas = document.createElement("canvas");
myCanvas.offscreenCanvas.width = myCanvas.width;
myCanvas.offscreenCanvas.height = myCanvas.height;

myCanvas.getContext("2d").drawImage(myCanvas.offscreenCanvas, 0, 0);
```

### Vermeiden Sie Gleitkomma-Koordinaten und verwenden Sie stattdessen ganze Zahlen

Sub-Pixel-Rendering tritt auf, wenn Objekte auf einem Canvas ohne ganzzahlige Werte gerendert werden.

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

Dies zwingt den Browser, zusätzliche Berechnungen durchzuführen, um den Anti-Aliasing-Effekt zu erstellen. Um dies zu vermeiden, sollten Sie sicherstellen, alle Koordinaten, die in Aufrufen von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) verwendet werden, mit {{jsxref("Math.floor()")}} zu runden.

### Skalieren Sie Bilder nicht in `drawImage`

Speichern Sie verschiedene Bildgrößen auf einem Offscreen-Canvas zwischen, anstatt sie ständig in [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) zu skalieren.

### Verwenden Sie mehrere geschichtete Canvas für komplexe Szenen

In Ihrer Anwendung kann es vorkommen, dass einige Objekte häufig bewegt oder geändert werden müssen, während andere relativ statisch bleiben. Eine mögliche Optimierung in dieser Situation besteht darin, Ihre Elemente mit mehreren `<canvas>`-Elementen zu schichten.

Angenommen, Sie haben ein Spiel mit einer Benutzeroberfläche oben, der Spielaktion in der Mitte und einem statischen Hintergrund unten. In diesem Fall könnten Sie Ihr Spiel in drei `<canvas>`-Ebenen aufteilen. Die Benutzeroberfläche ändert sich nur bei Benutzereingaben, die Spielebene ändert sich mit jedem neuen Frame, und der Hintergrund bleibt generell unverändert.

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

Wenn Sie ein statisches Hintergrundbild haben, können Sie es auf ein einfaches {{HTMLElement("div")}}-Element mit der CSS-{{cssxref("background")}}-Eigenschaft zeichnen und unter dem Canvas positionieren. Dadurch entfällt die Notwendigkeit, den Hintergrund in jedem Tick auf den Canvas zu rendern.

### Skalieren von Canvas mit CSS-Transformationen

[CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using) sind schneller, da sie die GPU nutzen. Beste Praxis ist es, den Canvas nicht zu skalieren, oder einen kleineren Canvas hochzuskalieren, anstatt einen größeren herunterzuskalieren.

```js
const scaleX = window.innerWidth / canvas.width;
const scaleY = window.innerHeight / canvas.height;

const scaleToFit = Math.min(scaleX, scaleY);
const scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = "0 0"; // Scale from top left
stage.style.transform = `scale(${scaleToFit})`;
```

### Transparenz ausschalten

Wenn Ihre Anwendung Canvas verwendet und keinen transparenten Hintergrund benötigt, setzen Sie die `alpha`-Option auf `false`, wenn Sie einen Zeichenkontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellen. Diese Information kann vom Browser intern zur Optimierung des Renderings verwendet werden.

```js
const ctx = canvas.getContext("2d", { alpha: false });
```

### Skalierung für hochauflösende Displays

Es kann vorkommen, dass Canvas-Elemente auf höher auflösenden Displays unscharf erscheinen. Während es viele Lösungen dafür geben mag, ist ein einfacher erster Schritt, die Canvas-Größe gleichzeitig hoch und herunter zu skalieren, indem Sie seine Attribute, sein Styling und die Skalierung seines Kontextes verwenden.

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

- Gruppieren Sie Canvas-Aufrufe zusammen. Zum Beispiel, zeichnen Sie eine Polylinie anstatt mehrerer separater Linien.
- Vermeiden Sie unnötige Canvas-Zustandsänderungen.
- Rendern Sie nur die Bildschirminhalte, die sich geändert haben, nicht den gesamten neuen Zustand.
- Vermeiden Sie die [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)-Eigenschaft wann immer möglich.
- Vermeiden Sie [Textrendering](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) wann immer möglich.
- Probieren Sie verschiedene Methoden aus, um den Canvas zu löschen ([`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect) vs. [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) vs. die Größe des Canvas ändern).
- Verwenden Sie bei Animationen [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von [`setInterval()`](/de/docs/Web/API/Window/setInterval).
- Seien Sie vorsichtig bei umfangreichen Physik-Bibliotheken.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}
