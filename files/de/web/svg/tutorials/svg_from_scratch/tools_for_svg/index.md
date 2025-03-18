---
title: Werkzeuge für SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Image_element", "Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS") }}

Nachdem wir die Grundlagen der internen SVG-Struktur behandelt haben, werfen wir nun einen Blick auf einige Werkzeuge zur Arbeit mit SVG-Dateien.

## Inkscape

URL: [www.inkscape.org](https://inkscape.org/)

Eines der wichtigsten Werkzeuge für ein Grafikformat ist ein ordentliches Zeichenprogramm. Inkscape bietet hochmoderne Vektorgrafikfunktionen und ist Open Source.

Außerdem verwendet es SVG als sein natives Dateiformat. Um Inkscape-spezifische Daten zu speichern, erweitert es die SVG-Datei mit Elementen und Attributen in einem benutzerdefinierten Namensraum, aber Sie können auch als einfaches SVG exportieren.

## Adobe Illustrator

URL: [www.adobe.com/products/illustrator/](https://www.adobe.com/products/illustrator.html)

Bevor Adobe Macromedia erwarb, war es der prominenteste Förderer von SVG. Aus dieser Zeit stammt die gute Unterstützung von SVG in Illustrator. Allerdings zeigt das resultierende SVG oft einige Eigenheiten, die eine Nachbearbeitung zur allgemeinen Verwendbarkeit notwendig machen.

## Apache Batik

URL: [xmlgraphics.apache.org/batik/](https://xmlgraphics.apache.org/batik/)

Batik ist eine Sammlung von Open-Source-Werkzeugen unter dem Dach der Apache Software Foundation. Das Toolkit ist in Java geschrieben und bietet nahezu vollständige SVG 1.1-Unterstützung sowie einige Funktionen, die ursprünglich für SVG 1.2 geplant waren.

Batik bietet einen Betrachter (Squiggle), einen Rasterizer für PNG-Ausgaben, einen SVG-Pretty-Printer zum Formatieren von SVG-Dateien und einen TrueType-zu-SVG-Font-Konverter.

Zusammen mit [Apache FOP](https://xmlgraphics.apache.org/fop/) kann Batik SVG in PDF umwandeln.

### Andere Renderer

Es gibt mehrere Projekte, die ein Rasterbild aus einer SVG-Quelle erstellen können. [ImageMagick](https://imagemagick.org/) ist eines der bekanntesten Kommandozeilen-Programme zur Bildverarbeitung. Die GNOME-Bibliothek [rsvg](https://wiki.gnome.org/Projects/LibRSvg) wird von Wikipedia verwendet, um ihre SVG-Grafiken zu rastern. Auch die Nutzung von headless Browsern wie SlimerJS und PhantomJS ist für diesen Zweck beliebt, da das erzeugte Bild dem entspricht, wie das SVG im Browser aussehen wird.

## Snap.svg

URL: [snapsvg.io](http://snapsvg.io/)

Eine neuere JavaScript-Abstraktionsschicht vom gleichen Autor wie Raphael JS. Snap.svg ist für moderne Browser konzipiert und unterstützt daher die neuesten SVG-Funktionen wie Maskierung, Clipping, Muster, vollständige Farbverläufe und Gruppen. Es unterstützt nicht die älteren Browser, die Raphael unterstützt.

## Google Docs

URL: [www.google.com/google-d-s/drawings/](https://docs.google.com/drawings)

Zeichnungen aus Google Docs können als SVG exportiert werden.

## Wissenschaft

Die bekannten Plotting-Tools xfig und gnuplot unterstützen beide den Export als SVG. Um Grafiken im Web darzustellen, unterstützt [JSXGraph](https://jsxgraph.uni-bayreuth.de/wp/) VML, SVG und Canvas und entscheidet automatisch, welche Technologie basierend auf den Browserfähigkeiten verwendet wird.

In GIS (Geographisches Informationssystem) Anwendungen wird SVG oft sowohl als Speicher- als auch als Rendering-Format verwendet. Siehe [carto.net](https://carto.net/) für Details.

## Mehr Werkzeuge!

Das W3C bietet eine [Liste von Programmen](https://www.w3.org/Graphics/SVG/WG/wiki/Implementations), die SVG unterstützen.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Image_element", "Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS") }}
