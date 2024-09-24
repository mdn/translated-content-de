---
title: Optimierung der Zeichenfläche
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}

Das {{HTMLElement("canvas")}}-Element ist eines der am häufigsten genutzten Werkzeuge zur Darstellung von 2D-Grafiken im Web. Wenn Websites und Apps die Canvas-API jedoch bis an ihre Grenzen ausreizen, leidet die Leistung. Dieser Artikel gibt Vorschläge zur Optimierung Ihrer Nutzung des Zeichenflächenelements, um sicherzustellen, dass Ihre Grafiken gut funktionieren.

## Leistungstipps

Im Folgenden finden Sie eine Sammlung von Tipps zur Verbesserung der Leistung der Zeichenfläche.

### Vorab-Rendern ähnlicher Primitiven oder sich wiederholender Objekte auf einer Offscreen-Zeichenfläche

Wenn Sie einige der gleichen Zeichenoperationen in jedem Animationsbild wiederholen, sollten Sie diese auf eine Offscreen-Zeichenfläche auslagern. Sie können dann das Offscreen-Bild so oft wie nötig auf Ihre Hauptzeichenfläche rendern, ohne die Schritte zur Erstellung erneut wiederholen zu müssen.

```js
myCanvas.offscreenCanvas = document.createElement("canvas");
myCanvas.offscreenCanvas.width = myCanvas.width;
myCanvas.offscreenCanvas.height = myCanvas.height;

myCanvas.getContext("2d").drawImage(myCanvas.offScreenCanvas, 0, 0);
```

### Vermeiden Sie Fließkomma-Koordinaten und verwenden Sie stattdessen Ganzzahlen

Die Subpixel-Rendering erfolgt, wenn Sie Objekte auf einer Zeichenfläche ohne ganze Werte rendern.

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

Dadurch wird der Browser gezwungen, zusätzliche Berechnungen durchzuführen, um den Anti-Aliasing-Effekt zu erzeugen. Um dies zu vermeiden, runden Sie alle Koordinaten, die in Aufrufen von {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} verwendet werden, mit {{jsxref("Math.floor()")}}, beispielsweise.

### Skalieren Sie keine Bilder in `drawImage`

Zwischenspeichern Sie verschiedene Größen Ihrer Bilder auf einer Offscreen-Zeichenfläche beim Laden, anstatt sie ständig in {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} zu skalieren.

### Verwenden Sie mehrere übereinanderliegende Zeichenflächen für komplexe Szenen

In Ihrer Anwendung stellen Sie möglicherweise fest, dass einige Objekte häufig bewegt oder geändert werden müssen, während andere relativ statisch bleiben. Eine mögliche Optimierung in dieser Situation ist das Schichten Ihrer Elemente mithilfe mehrerer `<canvas>`-Elemente.

Beispielsweise könnten Sie ein Spiel mit einer Benutzeroberfläche oben, der Spielhandlung in der Mitte und einem statischen Hintergrund unten haben. In diesem Fall könnten Sie Ihr Spiel in drei `<canvas>`-Schichten aufteilen. Die Benutzeroberfläche würde sich nur bei Benutzereingaben ändern, die Spielebene würde sich mit jedem neuen Rahmen ändern und der Hintergrund bliebe im Allgemeinen unverändert.

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

### Verwenden Sie reines CSS für große Hintergrundbilder

Wenn Sie ein statisches Hintergrundbild haben, können Sie es mit der CSS-Eigenschaft {{cssxref("background")}} auf einem einfachen {{HTMLElement("div")}}-Element zeichnen und es unter der Zeichenfläche positionieren. Dies negiert die Notwendigkeit, den Hintergrund bei jedem Takt auf die Zeichenfläche zu rendern.

### Skalieren der Zeichenfläche mit CSS-Transformationen

[CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) sind schneller, da sie die GPU verwenden. Der beste Fall ist, die Zeichenfläche nicht zu skalieren oder eine kleinere Zeichenfläche zu haben und diese hochzuskalieren, anstatt eine größere Zeichenfläche herunterzuskalieren.

```js
const scaleX = window.innerWidth / canvas.width;
const scaleY = window.innerHeight / canvas.height;

const scaleToFit = Math.min(scaleX, scaleY);
const scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = "0 0"; // Skalierung von oben links
stage.style.transform = `scale(${scaleToFit})`;
```

### Deaktivieren Sie Transparenz

Wenn Ihre Anwendung eine Zeichenfläche verwendet und keinen transparenten Hintergrund benötigt, setzen Sie die `alpha`-Option auf `false`, wenn Sie einen Zeichenkontext mit {{domxref("HTMLCanvasElement.getContext()")}} erstellen. Diese Information kann vom Browser intern verwendet werden, um das Rendering zu optimieren.

```js
const ctx = canvas.getContext("2d", { alpha: false });
```

### Skalierung für hochauflösende Displays

Sie stellen möglicherweise fest, dass Zeichenflächenelemente auf hochauflösenden Displays unscharf erscheinen. Obwohl es viele Lösungen geben mag, ist ein einfacher erster Schritt, die Größe der Zeichenfläche gleichzeitig zu erhöhen und zu verringern, indem Sie deren Attribute, Styling und den Maßstab des Kontexts verwenden.

```js
// Holen Sie sich den DPR und die Größe der Zeichenfläche
const dpr = window.devicePixelRatio;
const rect = canvas.getBoundingClientRect();

// Legen Sie die "tatsächliche" Größe der Zeichenfläche fest
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;

// Skalieren Sie den Kontext, um korrekte Zeichenoperationen sicherzustellen
ctx.scale(dpr, dpr);

// Legen Sie die "gezeichnete" Größe der Zeichenfläche fest
canvas.style.width = `${rect.width}px`;
canvas.style.height = `${rect.height}px`;
```

### Weitere Tipps

- Gruppieren Sie Zeichenflächenaufrufe. Zeichnen Sie zum Beispiel eine Polylinie anstelle mehrerer separater Linien.
- Vermeiden Sie unnötige Zustandsänderungen der Zeichenfläche.
- Rendern Sie nur Bildschirmunterschiede, nicht den gesamten neuen Zustand.
- Vermeiden Sie die {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}-Eigenschaft wann immer möglich.
- Vermeiden Sie [Textrendering](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) wann immer möglich.
- Probieren Sie verschiedene Methoden zum Löschen der Zeichenfläche aus ({{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}} vs. {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} vs. Größenänderung der Zeichenfläche).
- Bei Animationen verwenden Sie {{domxref("window.requestAnimationFrame()")}} statt {{domxref("setInterval()")}}.
- Seien Sie vorsichtig mit schweren Physikbibliotheken.

## Siehe auch

- [Optimierung Ihres JavaScript-Spiels für Firefox OS – Mozilla Hacks](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}
