---
title: CSS-Formen
slug: Web/CSS/CSS_shapes
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS-Modul für Formen** beschreibt geometrische Formen. Es definiert auch CSS-Eigenschaften, die die Formen verwenden können, um die Geometrie des Fließbereichs eines Elements zu steuern; dieser Bereich kann dann auf Ausschlüsse angewendet oder als Inhaltsbereich eines Elements festgelegt werden.

Die Spezifikation definiert mehrere Möglichkeiten zur Erstellung von Formen. Inhalt kann um oder innerhalb einer Form herum angeordnet werden, anstatt der Standard-Rechteckform des Elementkastens zu folgen.

Formen definieren Geometrien, die als CSS-Werte verwendet werden können. Dieses Modul bietet Funktionen zum Erstellen von Ellipsen, Polygonen und beliebigen Geometrien. Andere CSS-Module können die in dieser Spezifikation definierten Formen verwenden, einschließlich [CSS-Bewegungspfad](/de/docs/Web/CSS/CSS_motion_path) und [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking).

## CSS-Formen in Aktion

Das folgende Beispiel zeigt ein Bild, das links fließt, und die `shape-outside`-Eigenschaft, die mit einem Wert von `circle(50%)` angewendet wurde. Dies erzeugt eine Kreisform, und der Inhalt, der das Fließobjekt umgibt, umschließt nun diese Form. Dies ändert die Länge der Linienboxen des umschließenden Textes. Sie können auf "Play" klicken, um den Code im MDN Playground zu bearbeiten.

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
> Das CSS-Formen-Modul führt die `shape-inside`- und `shape-padding`-Eigenschaften ein, die noch nicht implementiert wurden.

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

- [Bezugsbox](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box)

## Leitfäden

- [Überblick über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)

  - : Definieren von Grundformen mit den `shape-margin`- und `clip-path`-Eigenschaften und Debuggen von Grundformen mit
    Entwicklerwerkzeugen.

- [Formen aus Box-Werten](/de/docs/Web/CSS/CSS_shapes/From_box_values)

  - : Verwenden von `border-radius`-Krümmungen und CSS-Boxmodell-Werten zum Erstellen von Formen.

- [Grundformen mit `shape-outside`](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

  - : Erstellen von Rechtecken, Kreisen, Ellipsen und Polygonen mit CSS-Formen, der Bezugsbox und der `shape-outside`-Eigenschaft.

- [Formen aus Bildern](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)
  - : Erstellen von Formen aus halbtransparenten Bilddateien und CSS-Verläufen.

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

[CSS-Hintergründe und -Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul

- {{cssxref("border-radius")}} Kurzform

[CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul

- {{cssxref("box-edge")}} Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Formen-Ressourcen](https://codepen.io/KristopherVanSant/post/css-shapes-resources)
- [CSS Shapes 101](https://alistapart.com/article/css-shapes-101/) über alistapart.com (2014)
- [Erstellen nicht-rechteckiger Layouts mit CSS-Formen](https://www.sarasoueidan.com/blog/css-shapes/) über sarasoueidan.com (2013)
- [Anleitung zur Nutzung von CSS-Formen im Webdesign](https://webdesign.tutsplus.com/how-to-use-css-shapes-in-your-web-design--cms-27498t) über tutsplus.com (2016)
- [Anleitung zum Einstieg in CSS-Formen](https://webdesignerdepot.com/how-to-get-started-with-css-shapes/) über webdesignerdepot.com (2015)
- [Bearbeiten von CSS-Formen mit dem Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) über mozilla.org (2018) ([Video](https://www.youtube.com/watch?v=u9bDe3Bw0sA))
