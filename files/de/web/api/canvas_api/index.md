---
title: Canvas API
slug: Web/API/Canvas_API
l10n:
  sourceCommit: 8a10694edf44bde124fa8f18af65651855f632dc
---

{{DefaultAPISidebar("Canvas API")}}

Die **Canvas-API** bietet eine Möglichkeit zur Erstellung von Grafiken mittels [JavaScript](/de/docs/Web/JavaScript) und dem [HTML](/de/docs/Web/HTML) {{HtmlElement("canvas")}}-Element. Sie kann unter anderem für Animationen, Spielgrafiken, Datenvisualisierungen, Fotomanipulation und Echtzeit-Videobearbeitung verwendet werden.

Die Canvas-API konzentriert sich hauptsächlich auf 2D-Grafiken. Die [WebGL-API](/de/docs/Web/API/WebGL_API), die ebenfalls das `<canvas>`-Element nutzt, ermöglicht die Erstellung von hardwarebeschleunigten 2D- und 3D-Grafiken.

## Barrierefreiheitsbedenken

Das `<canvas>`-Element ist lediglich eine Bitmap und liefert keine Informationen über die gezeichneten Objekte. Auf Canvas geschriebener Text kann zu Lesbarkeitsproblemen für Benutzer führen, die auf Bildschirmvergrößerung angewiesen sind. Die Pixel innerhalb eines Canvas-Elements skalieren nicht und können bei Vergrößerung verschwommen werden. Dies liegt daran, dass sie keine Vektoren sind, sondern buchstabenförmige Sammlungen von Pixeln. Beim Hineinzoomen werden die Pixel größer.

Der Canvas-Inhalt wird im Gegensatz zu semantischem HTML nicht an Barrierefreiheitswerkzeuge übermittelt. Generell sollten Sie Canvas wie Bilder verwenden und es vermeiden, bedeutenden Inhalt ohne zugängliches Hintergrund-Markup zu rendern.

## Einfaches Beispiel

Dieses einfache Beispiel zeichnet ein grünes Rechteck auf eine Leinwand.

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

Die Methode [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) erhält eine Referenz zum HTML-`<canvas>`-Element. Anschließend bekommt die Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) den Kontext dieses Elements—das Objekt, auf dem die Zeichnung gerendert wird.

Das eigentliche Zeichnen erfolgt mit der Schnittstelle [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D). Die Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) macht das Rechteck grün. Die Methode [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) platziert die obere linke Ecke bei (10, 10) und gibt ihr eine Größe von 150 Einheiten Breite und 100 Einheiten Höhe.

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
> Die Schnittstellen im Zusammenhang mit `WebGLRenderingContext` sind unter [WebGL](/de/docs/Web/API/WebGL_API) referenziert.

> [!NOTE]
> [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) ist auch in Web Workers verfügbar.

[`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) ist eine verwandte Schnittstelle.

## Leitfäden und Tutorials

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)
  - : Ein umfassendes Tutorial, das sowohl die grundlegende Nutzung der Canvas-API als auch ihre fortgeschrittenen Funktionen abdeckt.
- [HTML5 Canvas Deep Dive](https://joshondesign.com/p/books/canvasdeepdive/title.html)
  - : Ein praxisnahes, buchlanges Einführung in die Canvas-API und WebGL.
- [Canvas-Handbuch](https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)
  - : Ein praktisches Nachschlagewerk für die Canvas-API.
- [Manipulation von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
  - : Kombination von {{HTMLElement("video")}} und {{HTMLElement("canvas")}} zur Echtzeitbearbeitung von Videodaten.

## Bibliotheken

Die Canvas-API ist extrem leistungsfähig, aber nicht immer einfach zu verwenden. Die unten aufgeführten Bibliotheken können die Erstellung von canvasbasierten Projekten schneller und einfacher machen.

- [EaselJS](https://createjs.com/easeljs) ist eine Open-Source-Canvas-Bibliothek, die es einfach macht, Spiele, generative Kunst und andere stark grafische Erlebnisse zu erstellen.
- [Fabric.js](https://fabricjs.com/) ist eine Open-Source-Canvas-Bibliothek mit SVG-Parsing-Funktionen.
- [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/) ist eine Open-Source-Bibliothek zur Erstellung von datenbasierten Heatmaps in Canvas.
- [JavaScript InfoVis Toolkit](https://philogb.github.io/jit/) erstellt interaktive Datenvisualisierungen.
- [Konva.js](https://konvajs.org/) ist eine 2D-Canvas-Bibliothek für Desktop- und mobile Anwendungen.
- [p5.js](https://p5js.org/) bietet einen vollständigen Satz von Zeichenfunktionen für Künstler, Designer, Pädagogen und Anfänger.
- [Phaser](https://phaser.io/) ist ein schnelles, kostenloses und unterhaltsames Open-Source-Framework für Canvas- und WebGL-basierte Browser-Spiele.
- [Pts.js](https://ptsjs.org/) ist eine Bibliothek für kreatives Programmieren und Visualisierung in Canvas und SVG.
- [Rekapi](https://github.com/jeremyckahn/rekapi) ist eine Animations-Keyframing-API für Canvas.
- [Scrawl-canvas](https://scrawl.rikweb.org.uk/) ist eine Open-Source-JavaScript-Bibliothek zur Erstellung und Manipulation von 2D-Canvas-Elementen.
- Das [ZIM](https://zimjs.com/)-Framework bietet Annehmlichkeiten, Komponenten und Steuerungen für kreatives Programmieren auf der Canvas — umfasst Barrierefreiheit und Hunderte von bunten Tutorials.
- [Sprig](https://github.com/hackclub/sprig) ist eine einsteigerfreundliche, Open-Source, kachelbasierte Spieleentwicklungsbibliothek, die Canvas verwendet.

> [!NOTE]
> Sehen Sie sich die [WebGL-API](/de/docs/Web/API/WebGL_API) für 2D- und 3D-Bibliotheken an, die WebGL nutzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGL](/de/docs/Web/API/WebGL_API)
