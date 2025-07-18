---
title: Werkzeuge für SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG
l10n:
  sourceCommit: 03d5115691a7a9fa3df3b6ebd20a0c7eed213252
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Image_element", "Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS") }}

Nachdem wir die Grundlagen der internen Struktur von SVG behandelt haben, werden wir nun einen Blick auf einige Werkzeuge werfen, die zur Arbeit mit SVG-Dateien verwendet werden können.

## Inkscape

URL: [www.inkscape.org](https://inkscape.org/)

Eines der wichtigsten Werkzeuge für ein Grafikformat ist ein anständiges Zeichenprogramm. Inkscape bietet moderne Vektorgrafik-Zeichnungen und ist Open Source.

Darüber hinaus verwendet es SVG als sein natives Dateiformat. Um Inkscape-spezifische Daten zu speichern, erweitert es die SVG-Datei mit Elementen und Attributen in einem eigenen Namespace, Sie können jedoch auch als einfaches SVG exportieren.

## Adobe Illustrator

URL: [www.adobe.com/products/illustrator/](https://www.adobe.com/products/illustrator.html)

Bevor Adobe Macromedia übernahm, war es der herausragendste Förderer von SVG. Aus dieser Zeit stammt die gute Unterstützung von SVG in Illustrator. Das resultierende SVG zeigt jedoch oft einige Eigenheiten, die es notwendig machen, es für die allgemeine Anwendbarkeit nachzubearbeiten.

## Apache Batik

URL: [xmlgraphics.apache.org/batik/](https://xmlgraphics.apache.org/batik/)

Batik ist eine Sammlung von Open-Source-Werkzeugen unter dem Dach der Apache Software Foundation. Das Toolkit ist in Java geschrieben und bietet fast vollständige Unterstützung für SVG 1.1 sowie einige Funktionen, die ursprünglich für SVG 1.2 geplant waren.

Batik bietet einen Viewer (Squiggle), einen Rasterizer für PNG-Ausgabe, einen SVG-Pretty-Printer zum Formatieren von SVG-Dateien und einen TrueType-zu-SVG-Font-Konverter.

Zusammen mit [Apache FOP](https://xmlgraphics.apache.org/fop/) kann Batik SVG in PDF umwandeln.

### Andere Renderer

Es gibt mehrere Projekte, die ein Rasterbild aus einer SVG-Quelle erstellen können. [ImageMagick](https://imagemagick.org/) ist eines der bekanntesten Befehlszeilen-Bildbearbeitungswerkzeuge. Die GNOME-Bibliothek [rsvg](https://wiki.gnome.org/Projects/LibRsvg) wird von Wikipedia verwendet, um ihre SVG-Grafiken zu rastern. Auch die Nutzung von Headless-Browsern wie SlimerJS und PhantomJS ist hierfür beliebt, da das erzeugte Bild dem ähnelt, was das SVG im Browser darstellen wird.

## Google Docs

URL: [www.google.com/google-d-s/drawings/](https://docs.google.com/drawings)

Zeichnungen aus Google Docs können als SVG exportiert werden.

## Wissenschaft

Die bekannten Plotting-Werkzeuge xfig und gnuplot unterstützen beide den Export als SVG. Um Diagramme im Web darzustellen, unterstützt [JSXGraph](https://jsxgraph.uni-bayreuth.de/wp/) VML, SVG und Canvas und entscheidet automatisch, welche Technologie basierend auf den Fähigkeiten des Browsers verwendet werden soll.

In GIS-Anwendungen (Geographic Information System) wird SVG häufig sowohl als Speicherformat als auch als Darstellungsformat verwendet. Weitere Informationen finden Sie unter [carto.net](https://carto.net/).

## Weitere Werkzeuge!

Das W3C bietet eine [Liste von Programmen](https://www.w3.org/Graphics/SVG/WG/wiki/Implementations), die SVG unterstützen.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Image_element", "Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS") }}
