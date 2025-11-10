---
title: Werkzeuge für SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG
l10n:
  sourceCommit: 144fc1770b3eaa69bb5be691f505565b6dd9a68e
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Image_element", "Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS") }}

Nachdem wir die Grundlagen der SVG-Interna behandelt haben, werfen wir einen Blick auf einige Werkzeuge zum Arbeiten mit SVG-Dateien.

## Inkscape

URL: [www.inkscape.org](https://inkscape.org/)

Eines der wichtigsten Werkzeuge für ein Grafikformat ist ein ordentliches Zeichenprogramm. Inkscape bietet modernstes Vektorgrafikzeichnen und ist Open Source.

Darüber hinaus verwendet es SVG als sein natives Dateiformat. Um Inkscape-spezifische Daten zu speichern, erweitert es die SVG-Datei mit Elementen und Attributen in einem benutzerdefinierten Namensraum, aber Sie können auch als einfaches SVG exportieren.

## Adobe Illustrator

URL: [www.adobe.com/products/illustrator/](https://www.adobe.com/products/illustrator.html)

Bevor Adobe Macromedia übernahm, war es der prominenteste Förderer von SVG. Aus dieser Zeit stammt die gute Unterstützung von SVG in Illustrator. Allerdings weist das resultierende SVG oft einige Eigenheiten auf, die es notwendig machen, es für die allgemeine Verwendbarkeit nachzuarbeiten.

## Apache Batik

URL: [xmlgraphics.apache.org/batik/](https://xmlgraphics.apache.org/batik/)

Batik ist eine Reihe von Open-Source-Tools unter dem Dach der Apache Software Foundation. Das Toolkit ist in Java geschrieben und bietet nahezu vollständige Unterstützung für SVG 1.1 sowie einige Funktionen, die ursprünglich für SVG 1.2 geplant waren.

Batik bietet einen Viewer (Squiggle), einen Rasterizer für PNG-Ausgabe, einen SVG-Pretty-Printer zum Formatieren von SVG-Dateien und einen TrueType-zu-SVG-Font-Konverter.

Zusammen mit [Apache FOP](https://xmlgraphics.apache.org/fop/) kann Batik SVG in PDF umwandeln.

### Andere Renderer

Es existieren mehrere Projekte, die ein Rasterbild aus einer SVG-Quelle erstellen können. [ImageMagick](https://imagemagick.org/) ist eines der bekanntesten Kommandozeilen-Tools für die Bildverarbeitung. Die GNOME-Bibliothek [rsvg](https://wiki.gnome.org/Projects/LibRsvg) wird von der Wikipedia verwendet, um ihre SVG-Grafiken zu rasterisieren. Die Verwendung von Headless-Browsern wie SlimerJS und PhantomJS ist ebenfalls beliebt für diesen Zweck, da das erzeugte Bild näher an dem aussieht, wie das SVG im Browser erscheinen wird.

## Google Docs

URL: [www.google.com/google-d-s/drawings/](https://docs.google.com/drawings)

Zeichnungen aus Google Docs können als SVG exportiert werden.

## Wissenschaft

Die bekannten Diagramm-Tools xfig und gnuplot unterstützen beide den Export als SVG. Um Grafiken im Web zu rendern, unterstützt [JSXGraph](https://jsxgraph.uni-bayreuth.de/home/) VML, SVG und Canvas und entscheidet automatisch, welche Technologie basierend auf den Browser-Fähigkeiten verwendet werden soll.

In GIS (Geographic Information System) Anwendungen wird SVG oft sowohl als Speicher- als auch als Render-Format verwendet. Siehe [carto.net](https://carto.net/) für Details.

## Weitere Werkzeuge!

Das W3C bietet eine [Liste von Programmen](https://www.w3.org/Graphics/SVG/WG/wiki/Implementations) an, die SVG unterstützen.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Image_element", "Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS") }}
