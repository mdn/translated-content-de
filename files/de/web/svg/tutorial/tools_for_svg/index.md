---
title: Werkzeuge für SVG
slug: Web/SVG/Tutorial/Tools_for_SVG
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag", "Web/SVG/Tutorial/SVG_and_CSS") }}

Nachdem wir die Grundlagen der SVG-Interna behandelt haben, werfen wir einen Blick auf einige Werkzeuge, um mit SVG-Dateien zu arbeiten.

## Inkscape

URL: [www.inkscape.org](https://inkscape.org/)

Eines der wichtigsten Werkzeuge für ein Grafikformat ist ein brauchbares Zeichenprogramm. Inkscape bietet hochmoderne Vektorgrafik-Erstellung und ist Open Source.

Darüber hinaus verwendet es SVG als sein natives Dateiformat. Um Inkscape-spezifische Daten zu speichern, erweitert es die SVG-Datei mit Elementen und Attributen in einem benutzerdefinierten Namensraum. Sie können jedoch auch als einfaches SVG exportieren.

## Adobe Illustrator

URL: [www.adobe.com/products/illustrator/](https://www.adobe.com/products/illustrator.html)

Bevor Adobe Macromedia übernommen hat, war es der prominenteste Förderer von SVG. Aus dieser Zeit stammt die gute Unterstützung von SVG in Illustrator. Das resultierende SVG zeigt jedoch oft einige Eigenheiten, die es notwendig machen, es für die allgemeine Anwendbarkeit nachzubearbeiten.

## Apache Batik

URL: [xmlgraphics.apache.org/batik/](https://xmlgraphics.apache.org/batik/)

Batik ist eine Sammlung von Open-Source-Tools unter dem Dach der Apache Software Foundation. Das Toolkit ist in Java geschrieben und bietet nahezu vollständige Unterstützung für SVG 1.1 sowie einige Funktionen, die ursprünglich für SVG 1.2 geplant waren.

Batik bietet einen Viewer (Squiggle), einen Rasterizer für PNG-Ausgaben, einen SVG-Pretty-Printer zum Formatieren von SVG-Dateien und einen TrueType-zu-SVG-Font-Konverter.

Zusammen mit [Apache FOP](https://xmlgraphics.apache.org/fop/) kann Batik SVG in PDF umwandeln.

### Andere Renderer

Es existieren mehrere Projekte, die aus einer SVG-Quelle ein Rasterbild erstellen können. [ImageMagick](https://imagemagick.org/) ist eines der bekanntesten Kommandozeilen-Tools zur Bildverarbeitung. Die GNOME-Bibliothek [rsvg](https://wiki.gnome.org/Projects/LibRsvg) wird von der Wikipedia verwendet, um ihre SVG-Grafiken zu rastern. Der Einsatz von headless browsers wie SlimerJS und PhantomJS ist ebenfalls beliebt für diesen Zweck, da das erzeugte Bild näher an dem ist, was das SVG im Browser aussehen wird.

## Snap.svg

URL: [snapsvg.io](http://snapsvg.io/)

Eine neuere JavaScript-Abstraktionsschicht vom selben Autor von Raphael JS. Snap.svg ist für moderne Browser konzipiert und unterstützt daher die neuesten SVG-Features wie Maskierung, Clipping, Muster, vollständige Verläufe, Gruppen. Es unterstützt nicht die älteren Browser, die Raphael unterstützt.

## Google Docs

URL: [www.google.com/google-d-s/drawings/](https://docs.google.com/drawings)

Zeichnungen von Google Docs können als SVG exportiert werden.

## Wissenschaft

Die bekannten Plotting-Tools xfig und gnuplot unterstützen beide den Export als SVG. Um Grafiken im Web darzustellen, unterstützt [JSXGraph](https://jsxgraph.uni-bayreuth.de/wp/) VML, SVG und Canvas und entscheidet automatisch, welche Technologie basierend auf den Browserfähigkeiten verwendet wird.

In GIS (Geographic Information System) Anwendungen wird SVG oft sowohl als Speicher- als auch als Rendering-Format verwendet. Siehe [carto.net](https://carto.net/) für Details.

## Weitere Werkzeuge!

Das W3C bietet eine [Liste von Programmen](https://www.w3.org/Graphics/SVG/WG/wiki/Implementations), die SVG unterstützen.

{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag", "Web/SVG/Tutorial/SVG_and_CSS") }}
