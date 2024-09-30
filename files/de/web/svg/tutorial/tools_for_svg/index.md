---
title: Werkzeuge für SVG
slug: Web/SVG/Tutorial/Tools_for_SVG
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag", "Web/SVG/Tutorial/SVG_and_CSS") }}

Nachdem wir die Grundlagen der SVG-Interna behandelt haben, werden wir einige Werkzeuge betrachten, die zur Arbeit mit SVG-Dateien nützlich sind.

## Inkscape

URL: [www.inkscape.org](https://inkscape.org/)

Eines der wichtigsten Werkzeuge für ein Grafikformat ist ein gutes Zeichenprogramm. Inkscape bietet hochmoderne Vektorgrafikbearbeitung und ist Open Source.

Darüber hinaus verwendet es SVG als sein natives Dateiformat. Um Inkscape-spezifische Daten zu speichern, erweitert es die SVG-Datei mit Elementen und Attributen in einem benutzerdefinierten Namensraum, aber Sie können auch als einfaches SVG exportieren.

## Adobe Illustrator

URL: [www.adobe.com/products/illustrator/](https://www.adobe.com/products/illustrator.html)

Bevor Adobe Macromedia erwarb, war es der prominenteste Förderer von SVG. Aus dieser Zeit stammt die gute Unterstützung von SVG in Illustrator. Allerdings zeigt das resultierende SVG oft einige Eigenheiten, die es erforderlich machen, es für die allgemeine Anwendbarkeit nachzubearbeiten.

## Apache Batik

URL: [xmlgraphics.apache.org/batik/](https://xmlgraphics.apache.org/batik/)

Batik ist eine Sammlung von Open-Source-Werkzeugen unter dem Dach der Apache Software Foundation. Das Toolkit ist in Java geschrieben und bietet fast vollständige Unterstützung für SVG 1.1, sowie einige Funktionen, die ursprünglich für SVG 1.2 geplant waren.

Batik bietet einen Betrachter (Squiggle), einen Rasterizer für PNG-Ausgabe, einen SVG-Pretty-Printer zur Formatierung von SVG-Dateien und einen TrueType-zu-SVG-Schriftkonverter.

Zusammen mit [Apache FOP](https://xmlgraphics.apache.org/fop/) kann Batik SVG in PDF umwandeln.

### Weitere Renderer

Es existieren mehrere Projekte, die ein Rasterbild aus einer SVG-Quelle erstellen können. [ImageMagick](https://imagemagick.org/) ist eines der bekanntesten Kommandozeilen-Bildverarbeitungstools. Die Gnome-Bibliothek [rsvg](https://wiki.gnome.org/Projects/LibRsvg) wird von Wikipedia verwendet, um ihre SVG-Grafiken zu rasterisieren. Die Verwendung von headless Browsern wie SlimerJS und PhantomJS ist ebenfalls beliebt für diesen Zweck, da das erzeugte Bild dem, was das SVG im Browser aussehen wird, näher kommt.

## Snap.svg

URL: [snapsvg.io](http://snapsvg.io/)

Eine neuere JavaScript-Abstraktionsschicht vom selben Autor wie Raphael JS. Snap.svg ist für moderne Browser konzipiert und unterstützt daher die neuesten SVG-Funktionen wie Maskierung, Clipping, Muster, vollständige Verläufe, Gruppen. Es unterstützt nicht die älteren Browser, die Raphael unterstützt.

## Google Docs

URL: [www.google.com/google-d-s/drawings/](https://docs.google.com/drawings)

Zeichnungen aus Google Docs können als SVG exportiert werden.

## Wissenschaft

Die bekannten Plot-Werkzeuge xfig und gnuplot unterstützen beide den Export als SVG. Um Diagramme im Web darzustellen, unterstützt [JSXGraph](https://jsxgraph.uni-bayreuth.de/wp/) VML, SVG und Canvas und entscheidet automatisch, welche Technologie basierend auf den Browserfähigkeiten verwendet wird.

In GIS-Anwendungen (Geografische Informationssysteme) wird SVG häufig sowohl als Speicher- als auch als Rendering-Format verwendet. Weitere Informationen finden Sie unter [carto.net](https://carto.net/).

## Weitere Werkzeuge!

Das W3C bietet eine [Liste von Programmen](https://www.w3.org/Graphics/SVG/WG/wiki/Implementations), die SVG unterstützen.

{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag", "Web/SVG/Tutorial/SVG_and_CSS") }}
