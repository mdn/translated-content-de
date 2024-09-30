---
title: CSS shapes
slug: Web/CSS/CSS_shapes
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Das **CSS shapes** Modul beschreibt geometrische Formen. Es definiert auch CSS-Eigenschaften, die die Formen verwenden können, um die Geometrie des Fließbereichs eines Elements zu steuern; dieser Bereich kann dann auf Ausschlüsse angewendet werden oder den Inhaltsbereich eines Elements angeben.

Die Spezifikation definiert mehrere Möglichkeiten, Formen zu erstellen. Inhalte können um oder innerhalb einer Form herum angeordnet werden, anstatt der Standardrechteckform des Elementkastens zu folgen.

Formen definieren Geometrien, die als CSS-Werte verwendet werden können. Dieses Modul bietet Funktionen zum Erstellen von Ellipsen, Polygonen und beliebigen Geometrien. Andere CSS-Module können die in dieser Spezifikation definierten Formen nutzen, einschließlich [CSS motion path](/de/docs/Web/CSS/CSS_motion_path) und [CSS masking](/de/docs/Web/CSS/CSS_masking).

## CSS shapes in Aktion

Das folgende Beispiel zeigt ein Bild, das links geschwebt wurde, und die `shape-outside` Eigenschaft mit einem Wert von `circle(50%)` angewendet. Dies erzeugt eine Kreisform, und der Inhalt, der das Schweben umschließt, umgibt nun diese Form. Dies verändert die Länge der umschlossenen Textzeilenboxen.

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

## Referenz

### Eigenschaften

- {{cssxref("shape-image-threshold")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-outside")}}

> [!NOTE]
> Das CSS shapes Modul führt die Eigenschaften `shape-inside` und `shape-padding` ein, die noch nicht implementiert sind.

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

- [Referenzbox](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box)

## Leitfäden

- [Überblick über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)

  - : Definition von grundlegenden Formen mit den Eigenschaften `shape-margin` und `clip-path` und Debugging von grundlegenden Formen mit den Entwicklertools.

- [Formen aus Box-Werten](/de/docs/Web/CSS/CSS_shapes/From_box_values)

  - : Verwendung von `border-radius` Krümmungen und CSS-Boxmodellwerten zur Erstellung von Formen.

- [Grundlegende Formen mit `shape-outside`](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

  - : Erstellen von Rechtecken, Kreisen, Ellipsen und Polygonen mit CSS-Formen, der Referenzbox und der `shape-outside` Eigenschaft.

- [Formen aus Bildern](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

  - : Erstellung von Formen aus halbtransparenten Bilddateien und CSS-Verläufen.

## Verwandte Konzepte

Modul [CSS motion path](/de/docs/Web/CSS/CSS_motion_path)

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
- {{cssxref("ray")}} Funktion

Modul [CSS masking](/de/docs/Web/CSS/CSS_masking)

- {{cssxref("clip")}}
- {{cssxref("clip-path")}}
- {{SVGAttr("clip-rule")}}
- {{cssxref("mask")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}

Modul [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders)

- {{cssxref("border-radius")}} Kurzform

Modul [CSS box model](/de/docs/Web/CSS/CSS_box_model)

- {{cssxref("box-edge")}} Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Shapes Ressourcen](https://codepen.io/KristopherVanSant/post/css-shapes-resources)
- [CSS Shapes 101](https://alistapart.com/article/css-shapes-101/) über alistapart.com (2014)
- [Erstellung nicht-rechteckiger Layouts mit CSS Shapes](https://www.sarasoueidan.com/blog/css-shapes/) über sarasoueidan.com (2013)
- [Anleitung zur Verwendung von CSS Shapes im Webdesign](https://webdesign.tutsplus.com/how-to-use-css-shapes-in-your-web-design--cms-27498t) über tutsplus.com (2016)
- [Anleitung zum Einstieg mit CSS Shapes](https://www.webdesignerdepot.com/2015/03/how-to-get-started-with-css-shapes/) über webdesignerdepot.com (2015)
- [CSS-Formen mit dem Formpfad-Editor bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) über mozilla.org (2018) ([Video](https://www.youtube.com/watch?v=u9bDe3Bw0sA))
