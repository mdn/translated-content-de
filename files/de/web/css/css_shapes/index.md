---
title: CSS-Formen
slug: Web/CSS/CSS_shapes
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Das **CSS shapes**-Modul beschreibt geometrische Formen. Es definiert auch CSS-Eigenschaften, die diese Formen nutzen können, um die Geometrie des Bereichs eines Elementes zu steuern; dieser Bereich kann dann auf Ausschlüsse angewendet werden oder den Inhaltsbereich eines Elementes spezifizieren.

Die Spezifikation definiert mehrere Möglichkeiten zur Erstellung von Formen. Der Inhalt kann um eine Form herum oder innerhalb einer Form angeordnet werden, anstatt der Standardrechteckform des Elementkastens zu folgen.

Formen definieren Geometrien, die als CSS-Werte verwendet werden können. Dieses Modul bietet Funktionen zur Erstellung von Ellipsen, Polygonen und beliebigen Geometrien. Andere CSS-Module können die in dieser Spezifikation definierten Formen verwenden, einschließlich [CSS-Bewegungspfad](/de/docs/Web/CSS/CSS_motion_path) und [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking).

## CSS-Formen in Aktion

Das untenstehende Beispiel zeigt ein Bild, das nach links verschoben wurde, und die `shape-outside`-Eigenschaft mit einem Wert von `circle(50%)` angewendet. Dies erzeugt eine Kreisform, und der Inhalt, der den Umfluss bildet, umschließt jetzt diese Form. Dies verändert die Länge der Textzeilenboxen, die den Umfluss bilden.

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

## Referenz

### Eigenschaften

- {{cssxref("shape-image-threshold")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-outside")}}

> [!NOTE]
> Das CSS shapes-Modul führt die `shape-inside`- und `shape-padding`-Eigenschaften ein, die noch nicht implementiert wurden.

### Datentypen

- {{cssxref("&lt;basic-shape&gt;")}}

### Funktionen

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

### Begriffe

- [Bezugsrahmen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box)

## Leitfäden

- [Überblick über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)

  - : Definieren von Grundformen mit den Eigenschaften `shape-margin` und `clip-path` und Debuggen von Grundformen mit
    Entwicklertools.

- [Formen aus Kastenwerten](/de/docs/Web/CSS/CSS_shapes/From_box_values)

  - : Verwenden von `border-radius`-Krümmungen und CSS-Kastenmodellwerten, um Formen zu erstellen.

- [Grundformen mit `shape-outside`](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

  - : Erstellen von Rechtecken, Kreisen, Ellipsen und Polygonen mit CSS-Formen, dem Bezugsrahmen und der `shape-outside`-Eigenschaft.

- [Formen aus Bildern](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

  - : Erstellen von Formen aus semi-transparenten Bilddateien und CSS-Verläufen.

## Verwandte Konzepte

[CSS-Bewegungspfad](/de/docs/Web/CSS/CSS_motion_path) Modul

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
- {{cssxref("ray")}} Funktion

[CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul

- {{cssxref("clip")}}
- {{cssxref("clip-path")}}
- {{SVGAttr("clip-rule")}}
- {{cssxref("mask")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}

[CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul

- {{cssxref("border-radius")}} Kurzform

[CSS-Kastenmodell](/de/docs/Web/CSS/CSS_box_model) Modul

- {{cssxref("box-edge")}} Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Formen-Ressourcen](https://codepen.io/KristopherVanSant/post/css-shapes-resources)
- [CSS Shapes 101](https://alistapart.com/article/css-shapes-101/) via alistapart.com (2014)
- [Nicht-rechteckige Layouts mit CSS Shapes erstellen](https://www.sarasoueidan.com/blog/css-shapes/) via sarasoueidan.com (2013)
- [So verwenden Sie CSS Shapes in Ihrem Webdesign](https://webdesign.tutsplus.com/how-to-use-css-shapes-in-your-web-design--cms-27498t) via tutsplus.com (2016)
- [Wie Sie mit CSS Shapes beginnen](https://www.webdesignerdepot.com/2015/03/how-to-get-started-with-css-shapes/) via webdesignerdepot.com (2015)
- [CSS-Formen mit dem Shape-Pfad-Editor bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) via mozilla.org (2018) ([Video](https://www.youtube.com/watch?v=u9bDe3Bw0sA))
