---
title: CSS shapes
short-title: Shapes
slug: Web/CSS/Guides/Shapes
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS shapes** Modul beschreibt geometrische Formen. Es definiert auch CSS-Eigenschaften, die die Formen nutzen können, um die Geometrie des Fließbereichs eines Elements zu steuern; dieser Bereich kann dann auf Ausschlüsse angewendet oder verwendet werden, um den Inhaltsbereich eines Elements zu spezifizieren.

Die Spezifikation definiert mehrere Möglichkeiten, Formen zu erstellen. Inhalte können um eine Form herum oder innerhalb einer Form angeordnet werden, anstatt der Standard-Rechteckform des Elemente-Boxes zu folgen.

Formen definieren Geometrien, die als CSS-Werte verwendet werden können. Dieses Modul bietet Funktionen zum Erstellen von Ellipsen, Polygonen und beliebigen Geometrien. Andere CSS-Module können die in dieser Spezifikation definierten Formen nutzen, einschließlich [CSS Bewegungsbahn](/de/docs/Web/CSS/Guides/Motion_path) und [CSS Maskierung](/de/docs/Web/CSS/Guides/Masking).

## CSS shapes in der Praxis

Das folgende Beispiel zeigt ein Bild, das nach links schwebt, und die `shape-outside` Eigenschaft mit einem Wert von `circle(50%)` angewendet. Dies erzeugt eine Kreisform, und der um den Fließbereich gewickelte Inhalt wird nun um diese Form herum arrangiert. Dies ändert die Länge der Zeilenboxen des umwickelten Textes. Sie können auf "Play" klicken, um den Code im MDN Playground zu bearbeiten.

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

Das CSS shapes Modul führt auch die Eigenschaften `shape-inside` und `shape-padding` ein. Derzeit unterstützen keine Browser diese Features.

### Datentypen

- {{cssxref("basic-shape")}}

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

- [Referenzbox](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box)

## Leitfäden

- [Übersicht über Formen](/de/docs/Web/CSS/Guides/Shapes/Overview)
  - : Definieren von Basisformen mit den Eigenschaften `shape-margin` und `clip-path` und Debugging von Basisformen mit Entwicklertools.

- [Formen aus Box-Werten](/de/docs/Web/CSS/Guides/Shapes/From_box_values)
  - : Verwenden von `border-radius` Krümmungen und CSS-Boxmodell-Werten zum Erstellen von Formen.

- [Basisformen mit `shape-outside`](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
  - : Erstellen von Rechtecken, Kreisen, Ellipsen und Polygonen mit CSS-Formen, der Referenzbox und der `shape-outside` Eigenschaft.

- [Formen aus Bildern](/de/docs/Web/CSS/Guides/Shapes/From_images)
  - : Erstellen von Formen aus halbtransparenten Bilddateien und CSS-Verläufen.

## Verwandte Konzepte

[CSS Bewegungsbahn](/de/docs/Web/CSS/Guides/Motion_path) Modul

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
- {{cssxref("ray")}} Funktion

[CSS Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul

- {{cssxref("clip")}}
- {{cssxref("clip-path")}}
- {{SVGAttr("clip-rule")}}
- {{cssxref("mask")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}

[CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul

- {{cssxref("border-radius")}} Kurzform

[CSS Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Modul

- {{cssxref("box-edge")}} Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Formengenerator](/de/docs/Web/CSS/Guides/Shapes/Shape_generator)
- [CSS Shapes Ressourcen](https://codepen.io/KristopherVanSant/post/css-shapes-resources)
- [CSS Shapes 101](https://alistapart.com/article/css-shapes-101/) via alistapart.com (2014)
- [Nicht-rechteckige Layouts mit CSS Shapes erstellen](https://www.sarasoueidan.com/blog/css-shapes/) via sarasoueidan.com (2013)
- [Anleitung zur Verwendung von CSS Shapes im Webdesign](https://webdesign.tutsplus.com/how-to-use-css-shapes-in-your-web-design--cms-27498t) via tutsplus.com (2016)
- [Bearbeiten von CSS-Formen mit dem Form-Pfad-Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) via mozilla.org (2018) ([Video](https://www.youtube.com/watch?v=u9bDe3Bw0sA))
