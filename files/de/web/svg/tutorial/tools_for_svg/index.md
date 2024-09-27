---
title: Werkzeuge für SVG
slug: Web/SVG/Tutorial/Tools_for_SVG
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag", "Web/SVG/Tutorial/SVG_and_CSS") }}

Nachdem wir die Grundlagen der SVG-Interna behandelt haben, werfen wir einen Blick auf einige Werkzeuge, um mit SVG-Dateien zu arbeiten.

## Inkscape

URL: [www.inkscape.org](https://inkscape.org/)

Eines der wichtigsten Werkzeuge für ein Grafikformat ist ein ordentliches Zeichenprogramm. Inkscape bietet modernste Vektorgrafik-Funktionalitäten und ist Open Source.

Außerdem verwendet es SVG als sein natives Dateiformat. Um Inkscape-spezifische Daten zu speichern, erweitert es die SVG-Datei mit Elementen und Attributen in einem benutzerdefinierten Namensraum, aber Sie können auch als reines SVG exportieren.

## Adobe Illustrator

URL: [www.adobe.com/products/illustrator/](https://www.adobe.com/products/illustrator.html)

Bereits bevor Adobe Macromedia erwarb, war es der bedeutendste Förderer von SVG. Aus dieser Zeit stammt die gute Unterstützung von SVG in Illustrator. Allerdings zeigt das resultierende SVG oft einige Besonderheiten, die es notwendig machen, es für die allgemeine Anwendbarkeit nachzuverarbeiten.

## Apache Batik

URL: [xmlgraphics.apache.org/batik/](https://xmlgraphics.apache.org/batik/)

Batik ist eine Sammlung von Open-Source-Tools unter dem Dach der Apache Software Foundation. Das Toolkit ist in Java geschrieben und bietet fast vollständige Unterstützung für SVG 1.1 sowie einige Funktionen, die ursprünglich für SVG 1.2 geplant waren.

Batik bietet einen Viewer (Squiggle), einen Rasterizer für PNG-Ausgabe, einen SVG-Printer zur Formatierung von SVG-Dateien und einen TrueType-zu-SVG-Font-Konverter.

Zusammen mit [Apache FOP](https://xmlgraphics.apache.org/fop/) kann Batik SVG in PDF umwandeln.

### Weitere Renderer

Es existieren mehrere Projekte, die ein Rasterbild aus einer SVG-Quelle erstellen können. [ImageMagick](https://imagemagick.org/) ist eines der bekanntesten Kommandozeilen-Tools für Bildbearbeitung. Die Gnome-Bibliothek [rsvg](https://wiki.gnome.org/Projects/LibRsvg) wird von Wikipedia verwendet, um ihre SVG-Grafiken zu rasterisieren. Der Einsatz von headless Browsern wie SlimerJS und PhantomJS ist ebenfalls beliebt für diesen Zweck, da das erstellte Bild näher an dem ist, wie SVG im Browser aussehen wird.

## Snap.svg

URL: [snapsvg.io](http://snapsvg.io/)

Eine neuere JavaScript-Abstraktionsschicht vom gleichen Autor von Raphael JS. Snap.svg ist für moderne Browser entwickelt und unterstützt daher die neuesten SVG-Funktionen wie Maskierung, Clipping, Muster, vollständige Verläufe und Gruppen. Es unterstützt nicht die älteren Browser, die Raphael unterstützt.

## Google Docs

URL: [www.google.com/google-d-s/drawings/](https://docs.google.com/drawings)

Zeichnungen aus Google Docs können als SVG exportiert werden.

## Wissenschaft

Die bekannten Plotting-Tools xfig und gnuplot unterstützen beide den Export als SVG. Um Graphen im Web zu rendern, unterstützt [JSXGraph](https://jsxgraph.uni-bayreuth.de/wp/) VML, SVG und Canvas und entscheidet automatisch, welche Technologie basierend auf den Browserfähigkeiten verwendet wird.

In GIS (Geographischen Informationssystemen) Anwendungen wird SVG häufig sowohl als Speicher- als auch als Renderformat verwendet. Weitere Details finden Sie auf [carto.net](https://carto.net/).

## Weitere Werkzeuge!

Das W3C bietet eine [Liste von Programmen](https://www.w3.org/Graphics/SVG/WG/wiki/Implementations), die SVG unterstützen.

{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag", "Web/SVG/Tutorial/SVG_and_CSS") }}
