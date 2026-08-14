---
title: Werkzeuge für SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG
l10n:
  sourceCommit: fd216f3c4358f24fef043d32b28d6e980a78afc0
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Image_element", "Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS") }}

Nachdem wir die Grundlagen des SVG-Internen behandelt haben, werden wir uns einige Werkzeuge ansehen, die zur Arbeit mit SVG-Dateien nützlich sind.

## Inkscape

URL: [www.inkscape.org](https://inkscape.org/)

Eines der wichtigsten Werkzeuge für ein Grafikformat ist ein ordentliches Zeichenprogramm. Inkscape bietet moderne Vektorzeichnungen und ist Open Source.

Darüber hinaus verwendet es SVG als sein natives Dateiformat. Um Inkscape-spezifische Daten zu speichern, erweitert es die SVG-Datei mit Elementen und Attributen in einem benutzerdefinierten Namensraum, aber Sie können auch den Export als reines SVG wählen.

## Adobe Illustrator

URL: [www.adobe.com/products/illustrator/](https://www.adobe.com/products/illustrator.html)

Bevor Adobe Macromedia übernahm, war es der prominenteste Förderer von SVG. Aus dieser Zeit stammt die gute Unterstützung von SVG in Illustrator. Allerdings zeigt das resultierende SVG oft einige Eigenheiten, die eine Nachbearbeitung für die allgemeine Anwendbarkeit erforderlich machen.

## Apache Batik

URL: [xmlgraphics.apache.org/batik/](https://xmlgraphics.apache.org/batik/)

Batik ist eine Reihe von Open-Source-Werkzeugen unter dem Dach der Apache Software Foundation. Das Toolkit ist in Java geschrieben und bietet nahezu vollständige Unterstützung für SVG 1.1 sowie einige Funktionen, die ursprünglich für SVG 1.2 geplant waren.

Batik bietet einen Viewer (Squiggle), einen Rasterizer für PNG-Ausgaben und einen SVG-Pretty-Printer zur Formatierung von SVG-Dateien.

Zusammen mit [Apache FOP](https://xmlgraphics.apache.org/fop/) kann Batik SVG in PDF umwandeln.

### Weitere Renderer

Es gibt mehrere Projekte, die aus einer SVG-Quelle ein Rasterbild erstellen können. [ImageMagick](https://imagemagick.org/) ist eines der bekanntesten Kommandozeilen-Tools zur Bildverarbeitung. Die GNOME-Bibliothek [librsvg](https://gitlab.gnome.org/GNOME/librsvg) wird von Wikipedia verwendet, um ihre SVG-Grafiken zu rasterisieren, und [resvg](https://github.com/linebender/resvg) ist ein schneller eigenständiger Renderer. Headless-Browser, die von [Puppeteer](https://pptr.dev/) oder [Playwright](https://playwright.dev/) gesteuert werden, sind für diesen Zweck ebenfalls beliebt, da das erzeugte Bild dem näher kommt, wie das SVG im Browser aussehen wird.

## Google Docs

URL: [www.google.com/google-d-s/drawings/](https://docs.google.com/drawings)

Zeichnungen aus Google Docs können als SVG exportiert werden.

## Wissenschaft

Die bekannten Plotting-Tools, xfig und gnuplot, unterstützen beide den Export als SVG. Zum Rendern von Grafiken im Web unterstützt [JSXGraph](https://jsxgraph.uni-bayreuth.de/home/) SVG und Canvas und entscheidet automatisch, welche Technologie basierend auf den Fähigkeiten des Browsers verwendet werden soll.

In geografischen Informationssystemen (GIS)-Anwendungen wird SVG oft sowohl als Speicher- als auch als Renderformat verwendet.

## Mehr Werkzeuge!

Das W3C bietet eine [Liste von Programmen](https://www.w3.org/Graphics/SVG/WG/wiki/Implementations), die SVG unterstützen.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Image_element", "Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS") }}
