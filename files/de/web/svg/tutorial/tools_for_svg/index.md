---
title: Werkzeuge für SVG
slug: Web/SVG/Tutorial/Tools_for_SVG
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag", "Web/SVG/Tutorial/SVG_and_CSS") }}

Nachdem wir die Grundlagen der internen Struktur von SVG behandelt haben, werfen wir einen Blick auf einige Werkzeuge zum Arbeiten mit SVG-Dateien.

## Inkscape

URL: [www.inkscape.org](https://inkscape.org/)

Eines der wichtigsten Werkzeuge für ein Grafikformat ist ein anständiges Zeichenprogramm. Inkscape bietet modernstes Vektorgrafik-Zeichnen und ist Open Source.

Außerdem verwendet es SVG als sein natives Dateiformat. Um Inkscape-spezifische Daten zu speichern, erweitert es die SVG-Datei mit Elementen und Attributen in einem benutzerdefinierten Namensraum, aber es besteht auch die Möglichkeit, als einfaches SVG zu exportieren.

## Adobe Illustrator

URL: [www.adobe.com/products/illustrator/](https://www.adobe.com/products/illustrator.html)

Bevor Adobe Macromedia übernahm, war es der bedeutendste Förderer von SVG. Aus dieser Zeit stammt die gute SVG-Unterstützung in Illustrator. Allerdings zeigt das resultierende SVG oft einige Eigenheiten, die es notwendig machen, es für die allgemeine Anwendbarkeit nachzubearbeiten.

## Apache Batik

URL: [xmlgraphics.apache.org/batik/](https://xmlgraphics.apache.org/batik/)

Batik ist eine Sammlung von Open-Source-Tools unter dem Dach der Apache Software Foundation. Das Toolkit ist in Java geschrieben und bietet nahezu vollständige Unterstützung für SVG 1.1 sowie einige Funktionen, die ursprünglich für SVG 1.2 geplant waren.

Batik bietet einen Viewer (Squiggle), einen Rasterizer für PNG-Ausgabe, einen SVG-Schönheitsdrucker zum Formatieren von SVG-Dateien und einen TrueType-zu-SVG-Font-Konverter.

Zusammen mit [Apache FOP](https://xmlgraphics.apache.org/fop/) kann Batik SVG in PDF umwandeln.

### Weitere Renderer

Es existieren mehrere Projekte, die aus einer SVG-Quelle ein Rasterbild erstellen können. [ImageMagick](https://imagemagick.org/) ist eines der bekanntesten Befehlszeilen-Tools zur Bildverarbeitung. Die Gnome-Bibliothek [rsvg](https://wiki.gnome.org/Projects/LibRsvg) wird von der Wikipedia verwendet, um ihre SVG-Grafiken zu rastern. Auch die Verwendung von Headless-Browsern wie SlimerJS und PhantomJS ist aus diesem Grund beliebt, da das erzeugte Bild näher an dem ist, was die SVG im Browser aussehen wird.

## Snap.svg

URL: [snapsvg.io](http://snapsvg.io/)

Eine neuere JavaScript-Abstraktionsschicht vom gleichen Autor von Raphael JS. Snap.svg ist für moderne Browser konzipiert und unterstützt daher die neuesten SVG-Funktionen wie Maskierung, Clipping, Muster, vollständige Farbverläufe, Gruppen. Ältere Browser, die von Raphael unterstützt werden, werden nicht unterstützt.

## Google Docs

URL: [www.google.com/google-d-s/drawings/](https://docs.google.com/drawings)

Zeichnungen aus Google Docs können als SVG exportiert werden.

## Wissenschaft

Die bekannten Plot-Werkzeuge xfig und gnuplot unterstützen beide den Export als SVG. Um Diagramme im Web darzustellen, unterstützt [JSXGraph](https://jsxgraph.uni-bayreuth.de/wp/) VML, SVG und Canvas und entscheidet automatisch, welche Technologie basierend auf den Browserfähigkeiten verwendet werden soll.

In GIS-Anwendungen (Geographic Information System) wird SVG häufig sowohl als Speicher- als auch als Rendering-Format verwendet. Siehe [carto.net](https://carto.net/) für Details.

## Weitere Werkzeuge!

Das W3C bietet eine [Liste von Programmen](https://www.w3.org/Graphics/SVG/WG/wiki/Implementations), die SVG unterstützen.

{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag", "Web/SVG/Tutorial/SVG_and_CSS") }}
