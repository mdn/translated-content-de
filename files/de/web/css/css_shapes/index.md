---
title: CSS shapes
slug: Web/CSS/CSS_shapes
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{CSSRef}}

Das **CSS Shapes**-Modul beschreibt geometrische Formen. Es definiert auch CSS-Eigenschaften, die die Formen verwenden können, um die Geometrie des Umflussbereichs eines Elements zu steuern; dieser Bereich kann dann auf Ausschlüsse angewendet werden oder den Inhaltsbereich eines Elements spezifizieren.

Die Spezifikation definiert mehrere Möglichkeiten zur Erstellung von Formen. Inhalte können um oder innerhalb einer Form herum angeordnet werden, anstatt der Standardrechteckform des Box-Elements zu folgen.

Formen definieren Geometrien, die als CSS-Werte verwendet werden können. Dieses Modul stellt Funktionen zum Erstellen von Ellipsen, Polygonen und beliebigen Geometrien bereit. Andere CSS-Module können Formen verwenden, die in dieser Spezifikation definiert sind, einschließlich [CSS motion path](/de/docs/Web/CSS/CSS_motion_path) und [CSS masking](/de/docs/Web/CSS/CSS_masking).

## CSS-Formen in Aktion

Das folgende Beispiel zeigt ein Bild, das nach links gefloatet wurde, und die `shape-outside`-Eigenschaft mit einem Wert von `circle(50%)` angewendet wurde. Dies erzeugt eine Kreisform, und der Inhalt, der den Float umfließt, umfließt nun diese Form. Dies verändert die Länge der Zeilenboxen des umfließenden Textes. Sie können auf "Play" klicken, um den Code im MDN Playground zu bearbeiten.

```html live-sample___circle hidden
<div class="box">
  <img
    alt="A hot air balloon"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___circle hidden
body {
  font: 1.2em / 1.5 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "300px")}}

## Referenz

### Eigenschaften

- {{cssxref("shape-image-threshold")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-outside")}}

> [!NOTE]
> Das CSS Shapes-Modul führt die Eigenschaften `shape-inside` und `shape-padding` ein, die bisher noch nicht implementiert wurden.

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

- [Overview of shapes](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)

  - : Definieren von Grundformen mit den Eigenschaften `shape-margin` und `clip-path`, und Debuggen von Grundformen mit
    Entwickler-Tools.

- [Shapes from box values](/de/docs/Web/CSS/CSS_shapes/From_box_values)

  - : Verwenden von `border-radius`-Krümmungen und CSS-Box-Modellwerten, um Formen zu erstellen.

- [Basic shapes with `shape-outside`](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

  - : Erstellen von Rechtecken, Kreisen, Ellipsen und Polygonen mit CSS-Formen, der Referenzbox und der `shape-outside`-Eigenschaft.

- [Shapes from images](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

  - : Erstellen von Formen aus halbtransparenten Bilddateien und CSS-Gradienten.

## Verwandte Konzepte

[CSS motion path](/de/docs/Web/CSS/CSS_motion_path) Modul

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
- {{cssxref("ray")}} Funktion

[CSS masking](/de/docs/Web/CSS/CSS_masking) Modul

- {{cssxref("clip")}}
- {{cssxref("clip-path")}}
- {{SVGAttr("clip-rule")}}
- {{cssxref("mask")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}

[CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul

- {{cssxref("border-radius")}} Kurzform

[CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul

- {{cssxref("box-edge")}} Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Shapes resources](https://codepen.io/KristopherVanSant/post/css-shapes-resources)
- [CSS Shapes 101](https://alistapart.com/article/css-shapes-101/) via alistapart.com (2014)
- [Creating non-rectangular layouts with CSS Shapes](https://www.sarasoueidan.com/blog/css-shapes/) via sarasoueidan.com (2013)
- [How to use CSS Shapes in your web design](https://webdesign.tutsplus.com/how-to-use-css-shapes-in-your-web-design--cms-27498t) via tutsplus.com (2016)
- [How to get started with CSS Shapes](https://www.webdesignerdepot.com/how-to-get-started-with-css-shapes/) via webdesignerdepot.com (2015)
- [Edit CSS shapes with the shape path editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) via mozilla.org (2018) ([Video](https://www.youtube.com/watch?v=u9bDe3Bw0sA))
