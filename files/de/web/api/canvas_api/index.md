---
title: Canvas API
slug: Web/API/Canvas_API
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{DefaultAPISidebar("Canvas API")}}

Die **Canvas API** bietet eine Möglichkeit, Grafiken über [JavaScript](/de/docs/Web/JavaScript) und das [HTML](/de/docs/Web/HTML)-Element {{HtmlElement("canvas")}} zu zeichnen. Unter anderem kann sie für Animationen, Spielgrafiken, Datenvisualisierung, Bildbearbeitung und Videobearbeitung in Echtzeit verwendet werden.

Die Canvas API konzentriert sich weitgehend auf 2D-Grafiken. Die [WebGL API](/de/docs/Web/API/WebGL_API), die ebenfalls das `<canvas>`-Element verwendet, zeichnet hardwarebeschleunigte 2D- und 3D-Grafiken.

## Bedenken hinsichtlich der Barrierefreiheit

Das `<canvas>`-Element ist lediglich eine Bitmap und liefert keine Informationen über gezeichnete Objekte. Auf einem Canvas geschriebener Text kann für Benutzer, die auf Bildschirmvergrößerung angewiesen sind, zu Problemen mit der Lesbarkeit führen. Die Pixel innerhalb eines Canvas-Elements werden nicht skaliert und können bei Vergrößerung unscharf werden. Das liegt daran, dass sie keine Vektoren, sondern buchstabenförmige Ansammlungen von Pixeln sind. Beim Hineinzoomen werden die Pixel größer.

Canvas-Inhalte werden nicht wie semantisches HTML für Hilfstechnologien verfügbar gemacht. Im Allgemeinen sollten Sie Canvases wie Bilder verwenden und vermeiden, sie zum Rendern bedeutender Inhalte ohne zugängliches unterstützendes Markup einzusetzen.

## Grundlegendes Beispiel

Dieses einfache Beispiel zeichnet ein grünes Rechteck auf ein Canvas.

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

Die Methode [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) ruft eine Referenz auf das HTML-Element `<canvas>` ab. Anschließend ruft die Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) den Kontext dieses Elements ab – das Objekt, auf dem die Zeichnung gerendert wird.

Das eigentliche Zeichnen erfolgt über die Schnittstelle [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D). Die Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) färbt das Rechteck grün. Die Methode [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) platziert dessen linke obere Ecke bei (10, 10) und gibt ihm eine Größe von 150 Einheiten Breite und 100 Einheiten Höhe.

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
> Die Schnittstellen im Zusammenhang mit `WebGLRenderingContext` werden unter [WebGL](/de/docs/Web/API/WebGL_API) behandelt.

> [!NOTE]
> [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) ist auch in Web Workers verfügbar.

[`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) ist eine verwandte Schnittstelle.

## Leitfäden und Tutorials

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)
  - : Ein umfassendes Tutorial, das sowohl die grundlegende Verwendung der Canvas API als auch ihre erweiterten Funktionen behandelt.
- [HTML5 Canvas Deep Dive](https://joshondesign.com/p/books/canvasdeepdive/title.html)
  - : Eine praxisnahe, buchlange Einführung in die Canvas API und WebGL.
- [Canvas Handbook](https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)
  - : Eine praktische Referenz für die Canvas API.
- [Videodaten mit Canvas bearbeiten](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
  - : Kombination von {{HTMLElement("video")}} und {{HTMLElement("canvas")}}, um Videodaten in Echtzeit zu bearbeiten.

## Bibliotheken

Die Canvas API ist äußerst leistungsfähig, aber nicht immer einfach zu verwenden. Die unten aufgeführten Bibliotheken können die Erstellung von Canvas-basierten Projekten schneller und einfacher machen.

- [EaselJS](https://createjs.com/easeljs) ist eine Open-Source-Canvas-Bibliothek, die das Erstellen von Spielen, generativer Kunst und anderen stark grafischen Erlebnissen vereinfacht.
- [Fabric.js](https://www.fabricjs.com/) ist eine Open-Source-Canvas-Bibliothek mit SVG-Parsing-Funktionen.
- [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/) ist eine Open-Source-Bibliothek zum Erstellen Canvas-basierter Daten-Heatmaps.
- [JavaScript InfoVis Toolkit](https://philogb.github.io/jit/) erstellt interaktive Datenvisualisierungen.
- [Konva.js](https://konvajs.org/) ist eine 2D-Canvas-Bibliothek für Desktop- und mobile Anwendungen.
- [p5.js](https://p5js.org/) bietet einen vollständigen Satz von Canvas-Zeichenfunktionen für Künstler, Designer, Lehrkräfte und Einsteiger.
- [Phaser](https://phaser.io/) ist ein schnelles, kostenloses und unterhaltsames Open-Source-Framework für Canvas- und WebGL-gestützte Browser-Spiele.
- [Pts.js](https://ptsjs.org/) ist eine Bibliothek für kreatives Programmieren und Visualisierung in Canvas und SVG.
- [Rekapi](https://github.com/jeremyckahn/rekapi) ist eine API für Animations-Keyframing für Canvas.
- [Scrawl-canvas](https://scrawl.rikweb.org.uk/) ist eine Open-Source-JavaScript-Bibliothek zum Erstellen und Bearbeiten von 2D-Canvas-Elementen.
- Das [ZIM](https://zimjs.com/)-Framework bietet Hilfsmittel, Komponenten und Steuerelemente für kreatives Programmieren auf dem Canvas – einschließlich Barrierefreiheit und Hunderten farbenfroher Tutorials.
- [Sprig](https://github.com/hackclub/sprig) ist eine einsteigerfreundliche, Open-Source-, kachelbasierte Bibliothek zur Spieleentwicklung, die Canvas verwendet.

> [!NOTE]
> Informationen zu 2D- und 3D-Bibliotheken, die WebGL verwenden, finden Sie in der [WebGL API](/de/docs/Web/API/WebGL_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGL](/de/docs/Web/API/WebGL_API)
