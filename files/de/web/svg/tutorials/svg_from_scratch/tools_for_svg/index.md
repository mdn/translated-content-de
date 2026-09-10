---
title: Werkzeuge für SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG
l10n:
  sourceCommit: a23122d0e86fb376234614beb5b350b217068054
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Image_element", "Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS") }}

Nachdem wir die Grundlagen der internen Funktionsweise von SVG behandelt haben, werfen wir einen Blick auf einige Werkzeuge für die Arbeit mit SVG-Dateien.

## Inkscape

URL: [www.inkscape.org](https://inkscape.org/)

Eines der wichtigsten Werkzeuge für ein Grafikformat ist ein gutes Zeichenprogramm. Inkscape bietet modernstes Vektorzeichnen und ist Open Source.

Außerdem verwendet es SVG als sein natives Dateiformat. Um Inkscape-spezifische Daten zu speichern, erweitert es die SVG-Datei um Elemente und Attribute in einem benutzerdefinierten Namespace. Sie können jedoch auch den Export als reines SVG wählen.

## Adobe Illustrator

URL: [www.adobe.com/products/illustrator/](https://www.adobe.com/products/illustrator.html)

Bevor Adobe Macromedia übernahm, war es der bedeutendste Förderer von SVG. Aus dieser Zeit stammt die gute SVG-Unterstützung in Illustrator. Das resultierende SVG weist jedoch häufig einige Eigenheiten auf, die eine Nachbearbeitung für die allgemeine Verwendbarkeit erforderlich machen.

## Apache Batik

URL: [xmlgraphics.apache.org/batik/](https://xmlgraphics.apache.org/batik/)

Batik ist eine Sammlung von Open-Source-Werkzeugen unter dem Dach der Apache Software Foundation. Das Toolkit ist in Java geschrieben und bietet nahezu vollständige Unterstützung für SVG 1.1 sowie einige Funktionen, die ursprünglich für SVG 1.2 geplant waren.

Batik bietet einen Viewer (Squiggle), einen Rasterizer für PNG-Ausgaben und einen SVG-Pretty-Printer zum Formatieren von SVG-Dateien.

Zusammen mit [Apache FOP](https://xmlgraphics.apache.org/fop/) kann Batik SVG in PDF umwandeln.

### Andere Renderer

Es gibt mehrere Projekte, die aus einer SVG-Quelle ein Rasterbild erzeugen können. [ImageMagick](https://imagemagick.org/) ist eines der bekanntesten Kommandozeilenwerkzeuge zur Bildverarbeitung. Die GNOME-Bibliothek [librsvg](https://gitlab.gnome.org/GNOME/librsvg) wird von Wikipedia verwendet, um deren SVG-Grafiken zu rastern, und [resvg](https://github.com/linebender/resvg) ist ein schneller eigenständiger Renderer. Headless-Browser, die von [Puppeteer](https://pptr.dev/) oder [Playwright](https://playwright.dev/) gesteuert werden, sind ebenfalls für diesen Zweck beliebt, da das erzeugte Bild eher dem entspricht, wie das SVG im Browser aussehen wird.

## Google Docs

URL: [www.google.com/google-d-s/drawings/](https://docs.google.com/drawings)

Zeichnungen aus Google Docs können als SVG exportiert werden.

## Wissenschaft

Die bekannten Plotting-Werkzeuge xfig und gnuplot unterstützen beide den Export als SVG. Um Diagramme im Web darzustellen, unterstützt [JSXGraph](https://jsxgraph.uni-bayreuth.de/home/) SVG und canvas und entscheidet automatisch anhand der Browser-Fähigkeiten, welche Technologie verwendet werden soll.

In Anwendungen für geografische Informationssysteme (GIS) wird SVG häufig sowohl als Speicher- als auch als Renderingformat verwendet.

## Weitere Werkzeuge!

Das W3C bietet eine [Liste von Programmen](https://www.w3.org/Graphics/SVG/WG/wiki/Implementations), die SVG unterstützen.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Image_element", "Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS") }}
