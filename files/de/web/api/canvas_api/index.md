---
title: Canvas-API
slug: Web/API/Canvas_API
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{DefaultAPISidebar("Canvas API")}}

Die **Canvas-API** bietet eine Möglichkeit zum Zeichnen von Grafiken über [JavaScript](/de/docs/Web/JavaScript) und das [HTML](/de/docs/Web/HTML) {{HtmlElement("canvas")}}-Element. Unter anderem kann sie für Animationen, Spielgrafiken, Datenvisualisierung, Fotobearbeitung und Echtzeit-Videobearbeitung verwendet werden.

Die Canvas-API konzentriert sich weitgehend auf 2D-Grafiken. Die [WebGL-API](/de/docs/Web/API/WebGL_API), die ebenfalls das `<canvas>`-Element verwendet, zeichnet hardwarebeschleunigte 2D- und 3D-Grafiken.

## Einfaches Beispiel

Dieses einfache Beispiel zeichnet ein grünes Rechteck auf eine Leinwand.

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

Die Methode {{domxref("Document.getElementById()")}} erhält eine Referenz auf das HTML-`<canvas>`-Element. Anschließend erhält die Methode {{domxref("HTMLCanvasElement.getContext()")}} den Kontext dieses Elements—das Ding, auf das die Zeichnung gerendert wird.

Die eigentliche Zeichnung erfolgt mit der {{domxref("CanvasRenderingContext2D")}}-Schnittstelle. Die Eigenschaft {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} macht das Rechteck grün. Die Methode {{domxref("CanvasRenderingContext2D.fillRect()", "fillRect()")}} platziert die obere linke Ecke auf (10, 10) und gibt ihm eine Größe von 150 Einheiten Breite und 100 Höhe.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
```

### Ergebnis

{{ EmbedLiveSample('Basic_example', 700, 180) }}

## Referenz

- {{domxref("HTMLCanvasElement")}}
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("TextMetrics")}}
- {{domxref("OffscreenCanvas")}}
- {{domxref("Path2D")}} {{experimental_inline}}
- {{domxref("ImageBitmapRenderingContext")}} {{experimental_inline}}

> [!NOTE]
> Die Schnittstellen, die mit dem `WebGLRenderingContext` in Verbindung stehen, werden unter [WebGL](/de/docs/Web/API/WebGL_API) aufgeführt.

> **Hinweis:** {{domxref("OffscreenCanvas")}} ist auch in Web-Workern verfügbar.

{{domxref("CanvasCaptureMediaStreamTrack")}} ist eine verwandte Schnittstelle.

## Anleitungen und Tutorials

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)
  - : Ein umfassendes Tutorial, das sowohl die Grundfunktionen als auch die erweiterten Funktionen der Canvas-API behandelt.
- [HTML5 Canvas Deep Dive](https://joshondesign.com/p/books/canvasdeepdive/title.html)
  - : Eine praktische, buchlange Einführung in die Canvas-API und WebGL.
- [Canvas-Handbuch](https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)
  - : Ein praktisches Nachschlagewerk zur Canvas-API.
- [Manipulieren von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
  - : Kombiniert {{HTMLElement("video")}} und {{HTMLElement("canvas")}} zur Echtzeit-Videodatenbearbeitung.

## Bibliotheken

Die Canvas-API ist extrem leistungsstark, aber nicht immer einfach zu verwenden. Die unten aufgelisteten Bibliotheken können die Erstellung von Projekten auf Canvas-Basis schneller und einfacher machen.

- [EaselJS](https://createjs.com/easeljs) ist eine Open-Source-Canvas-Bibliothek, die das Erstellen von Spielen, generativer Kunst und anderen stark grafischen Erlebnissen erleichtert.
- [Fabric.js](http://fabricjs.com/) ist eine Open-Source-Canvas-Bibliothek mit SVG-Parsing-Fähigkeiten.
- [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/) ist eine Open-Source-Bibliothek zur Erstellung von Canvas-basierten Daten-Heatmaps.
- [JavaScript InfoVis Toolkit](https://philogb.github.io/jit/) erstellt interaktive Datenvisualisierungen.
- [Konva.js](https://konvajs.org/) ist eine 2D-Canvas-Bibliothek für Desktop- und mobile Anwendungen.
- [p5.js](https://p5js.org/) bietet einen vollständigen Satz von Canvas-Zeichnungsfunktionen für Künstler, Designer, Lehrer und Anfänger.
- [Paper.js](http://paperjs.org/) ist ein Open-Source-Vektorgrafik-Skripting-Framework, das auf der HTML-Canvas läuft.
- [Phaser](https://phaser.io/) ist ein schnelles, freies und unterhaltsames Open-Source-Framework für Canvas- und WebGL-unterstützte Browserspiele.
- [Pts.js](https://ptsjs.org/) ist eine Bibliothek für kreatives Codieren und Visualisierung in Canvas und SVG.
- [Rekapi](https://github.com/jeremyckahn/rekapi) ist eine Animations-Schlüsselrahmen-API für Canvas.
- [Scrawl-canvas](https://scrawl.rikweb.org.uk/) ist eine Open-Source-JavaScript-Bibliothek zur Erstellung und Manipulation von 2D-Canvas-Elementen.
- Das [ZIM](https://zimjs.com/)-Framework bietet Annehmlichkeiten, Komponenten und Steuerungen für künstlerisches Codieren auf der Leinwand — inklusive Barrierefreiheit und hunderte bunte Tutorials.
- [Sprig](https://github.com/hackclub/sprig) ist eine anfängerfreundliche, Open-Source-Spielentwicklungs-Bibliothek, die auf Kampfbasis arbeitet und Canvas verwendet.

> [!NOTE]
> Sehen Sie sich die [WebGL-API](/de/docs/Web/API/WebGL_API) für 2D- und 3D-Bibliotheken an, die WebGL verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGL](/de/docs/Web/API/WebGL_API)
