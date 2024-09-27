---
title: Canvas API
slug: Web/API/Canvas_API
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{DefaultAPISidebar("Canvas API")}}

Die **Canvas API** bietet eine Möglichkeit, Grafiken über [JavaScript](/de/docs/Web/JavaScript) und das [HTML](/de/docs/Web/HTML) {{HtmlElement("canvas")}}-Element zu zeichnen. Sie kann unter anderem für Animationen, Spielgrafiken, Datenvisualisierung, Fotomanipulation und Echtzeit-Videobearbeitung verwendet werden.

Die Canvas API konzentriert sich weitgehend auf 2D-Grafiken. Die [WebGL API](/de/docs/Web/API/WebGL_API), die ebenfalls das `<canvas>`-Element verwendet, zeichnet hardwarebeschleunigte 2D- und 3D-Grafiken.

## Einfaches Beispiel

Dieses einfache Beispiel zeichnet ein grünes Rechteck auf ein Canvas.

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

Die Methode [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) erhält eine Referenz auf das HTML-`<canvas>`-Element. Anschließend erhält die Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) den Kontext dieses Elements – das Element, auf das die Zeichnung gerendert wird.

Das eigentliche Zeichnen erfolgt über das Interface [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D). Die Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) macht das Rechteck grün. Die Methode [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) platziert seine obere linke Ecke bei (10, 10) und gibt ihm eine Größe von 150 Einheiten Breite bei 100 Höhe.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
```

### Ergebnis

{{ EmbedLiveSample('Basic_example', 700, 180) }}

## Referenz

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)
- [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
- [`ImageData`](/de/docs/Web/API/ImageData)
- [`TextMetrics`](/de/docs/Web/API/TextMetrics)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
- [`Path2D`](/de/docs/Web/API/Path2D) {{experimental_inline}}
- [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) {{experimental_inline}}

> [!NOTE]
> Die Schnittstellen im Zusammenhang mit dem `WebGLRenderingContext` sind unter [WebGL](/de/docs/Web/API/WebGL_API) referenziert.

> **Hinweis:** [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) ist auch in Web-Workern verfügbar.

[`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) ist eine verwandte Schnittstelle.

## Leitfäden und Tutorials

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)
  - : Ein umfassendes Tutorial, das sowohl die grundlegende Nutzung der Canvas API als auch ihre erweiterten Funktionen abdeckt.
- [HTML5 Canvas Deep Dive](https://joshondesign.com/p/books/canvasdeepdive/title.html)
  - : Eine praxisnahe, buchlange Einführung in die Canvas API und WebGL.
- [Canvas-Handbuch](https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)
  - : Eine praktische Referenz für die Canvas API.
- [Manipulation von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
  - : Kombination von {{HTMLElement("video")}} und {{HTMLElement("canvas")}} zur Bearbeitung von Videodaten in Echtzeit.

## Bibliotheken

Die Canvas API ist extrem leistungsfähig, aber nicht immer einfach zu bedienen. Die unten aufgeführten Bibliotheken können die Erstellung von Canvas-basierten Projekten schneller und einfacher machen.

- [EaselJS](https://createjs.com/easeljs) ist eine Open-Source-Canvas-Bibliothek, die das Erstellen von Spielen, generativer Kunst und anderen grafischen Erlebnissen erleichtert.
- [Fabric.js](http://fabricjs.com/) ist eine Open-Source-Canvas-Bibliothek mit SVG-Parsing-Fähigkeiten.
- [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/) ist eine Open-Source-Bibliothek zur Erstellung kanvasbasierter Daten-Heatmaps.
- Das [JavaScript InfoVis Toolkit](https://philogb.github.io/jit/) erstellt interaktive Datenvisualisierungen.
- [Konva.js](https://konvajs.org/) ist eine 2D-Canvas-Bibliothek für Desktop- und mobile Anwendungen.
- [p5.js](https://p5js.org/) bietet volle Canvas-Zeichenfunktionalität für Künstler, Designer, Pädagogen und Anfänger.
- [Paper.js](http://paperjs.org/) ist ein Open-Source-Vektor-Grafik-Scripting-Framework, das auf dem HTML-Canvas läuft.
- [Phaser](https://phaser.io/) ist ein schnelles, kostenloses und unterhaltsames Open-Source-Framework für Canvas- und WebGL-basierte Browser-Spiele.
- [Pts.js](https://ptsjs.org/) ist eine Bibliothek für kreatives Codieren und Visualisierung in Canvas und SVG.
- [Rekapi](https://github.com/jeremyckahn/rekapi) ist eine Animations-Frame-API für Canvas.
- [Scrawl-canvas](https://scrawl.rikweb.org.uk/) ist eine Open-Source-JavaScript-Bibliothek für die Erstellung und Bearbeitung von 2D-Canvas-Elementen.
- Das [ZIM](https://zimjs.com/) Framework bietet Komfort, Komponenten und Steuerungen für kreatives Codieren auf der Leinwand – einschließlich Barrierefreiheit und Hunderten von bunten Tutorials.
- [Sprig](https://github.com/hackclub/sprig) ist eine anfängerfreundliche, Open-Source und kachelbasierte Spieleentwicklungs-Bibliothek, die Canvas nutzt.

> [!NOTE]
> Siehe die [WebGL API](/de/docs/Web/API/WebGL_API) für 2D- und 3D-Bibliotheken, die WebGL verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGL](/de/docs/Web/API/WebGL_API)
