---
title: CSS-Formen
short-title: Shapes
slug: Web/CSS/Guides/Shapes
l10n:
  sourceCommit: cd0970bc03cf30a9a8089954cc542a17dbe9eba3
---

Das **CSS-Formen**-Modul beschreibt geometrische Formen. Es definiert auch CSS-Eigenschaften, die die Formen nutzen können, um die Geometrie des Umflussbereichs eines Elements zu steuern; dieser Bereich kann dann auf Exklusionen angewendet werden oder den Inhaltsbereich eines Elements spezifizieren.

Die Spezifikation definiert mehrere Möglichkeiten, Formen zu erstellen. Inhalte können um oder innerhalb einer Form herumfließen, anstatt der Standardrechteckform des Elementkastens zu folgen.

Formen definieren Geometrien, die als CSS-Werte genutzt werden können. Dieses Modul bietet Funktionen zum Erstellen von Ellipsen, Polygonen und beliebigen Geometrien. Andere CSS-Module können Formen nutzen, die in dieser Spezifikation definiert sind, einschließlich [CSS-Bewegungspfad](/de/docs/Web/CSS/Guides/Motion_path) und [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking).

## CSS-Formen in Aktion

Das folgende Beispiel zeigt ein Bild, das links gefloatet ist und der `shape-outside`-Eigenschaft mit einem Wert von `circle(50%)` angewendet wurde. Dies erzeugt eine Kreisform, und der den Float umfließende Inhalt fließt nun um diese Form. Dies verändert die Länge der Linienboxen des umfließenden Texts. Sie können auf "Play" klicken, um den Code im MDN-Playground zu bearbeiten.

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

Das CSS-Formen-Modul führt auch die Eigenschaften `shape-inside` und `shape-padding` ein. Derzeit unterstützen keine Browser diese Funktionen.

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

- [Referenzkasten](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box)

## Leitfäden

- [Überblick über Formen](/de/docs/Web/CSS/Guides/Shapes/Overview)
  - : Definieren von Grundformen mit den Eigenschaften `shape-margin` und `clip-path` und Debuggen von Grundformen mit Entwicklertools.

- [Formen aus Kastenwerten](/de/docs/Web/CSS/Guides/Shapes/From_box_values)
  - : Verwendung von `border-radius`-Krümmungen und CSS-Kastenmodellwerten zur Erstellung von Formen.

- [Grundformen mit `shape-outside`](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
  - : Erstellen von Rechtecken, Kreisen, Ellipsen und Polygonen mit CSS-Formen, dem Referenzkasten und der Eigenschaft `shape-outside`.

- [Formen aus Bildern](/de/docs/Web/CSS/Guides/Shapes/From_images)
  - : Formen aus halbtransparenten Bilddateien und CSS-Verläufen erstellen.

## Verwandte Konzepte

[CSS-Bewegungspfad](/de/docs/Web/CSS/Guides/Motion_path) Modul

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
- {{cssxref("ray")}} Funktion

[CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul

- {{cssxref("clip")}}
- {{cssxref("clip-path")}}
- {{SVGAttr("clip-rule")}}
- {{cssxref("mask")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}

[CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul

- {{cssxref("border-radius")}} Kurzform

[CSS-Rahmen und Kastendekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul

- {{cssxref("border-shape")}}

[CSS-Kastenmodell](/de/docs/Web/CSS/Guides/Box_model) Modul

- {{cssxref("box-edge")}} Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Formgenerator](/de/docs/Web/CSS/Guides/Shapes/Shape_generator)
- [CSS-Formen Ressourcen](https://codepen.io/KristopherVanSant/post/css-shapes-resources)
- [CSS-Formen 101](https://alistapart.com/article/css-shapes-101/) über alistapart.com (2014)
- [Nicht-rechteckige Layouts mit CSS-Formen erstellen](https://www.sarasoueidan.com/blog/css-shapes/) über sarasoueidan.com (2013)
- [Wie Sie CSS-Formen in Ihrem Webdesign verwenden](https://webdesign.tutsplus.com/how-to-use-css-shapes-in-your-web-design--cms-27498t) über tutsplus.com (2016)
- [CSS-Formen mit dem Pfad-Editor bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) über mozilla.org (2018) ([Video](https://www.youtube.com/watch?v=u9bDe3Bw0sA))
