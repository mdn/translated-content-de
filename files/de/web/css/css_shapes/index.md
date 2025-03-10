---
title: CSS-Formen
slug: Web/CSS/CSS_shapes
l10n:
  sourceCommit: 7c783e1afbd34419569323235c4c7486d1d1d479
---

{{CSSRef}}

Das **CSS-Formen**-Modul beschreibt geometrische Formen. Es definiert auch CSS-Eigenschaften, die die Formen verwenden, um die Geometrie des Schwebe-Bereichs eines Elements zu steuern; dieser Bereich kann dann auf Ausnahmen angewendet oder zur Spezifizierung des Inhaltsbereichs eines Elements verwendet werden.

Die Spezifikation definiert mehrere Wege zur Erstellung von Formen. Inhalte können um eine Form herum oder innerhalb einer Form angeordnet werden, anstatt der standardmäßigen rechteckigen Form des Elementkastens zu folgen.

Formen definieren Geometrien, die als CSS-Werte verwendet werden können. Dieses Modul bietet Funktionen zur Erstellung von Ellipsen, Polygonen und beliebigen Geometrien. Andere CSS-Module können die in dieser Spezifikation definierten Formen verwenden, einschließlich [CSS motion path](/de/docs/Web/CSS/CSS_motion_path) und [CSS masking](/de/docs/Web/CSS/CSS_masking).

## CSS-Formen in Aktion

Das folgende Beispiel zeigt ein Bild, das nach links geschoben wurde, und die Anwendung der Eigenschaft `shape-outside` mit dem Wert `circle(50%)`. Dies erzeugt eine Kreisform, und der um das Schwebe-Element herum angeordnete Inhalt passt sich nun dieser Form an. Dies verändert die Länge der Umbruchszeilen des Textes. Sie können auf "Play" klicken, um den Code im MDN Playground zu bearbeiten.

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
> Das CSS-Formen-Modul führt die Eigenschaften `shape-inside` und `shape-padding` ein, die bisher noch nicht implementiert wurden.

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

- [Referenzkasten](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box)

## Leitfäden

- [Überblick über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)

  - : Definieren von Grundformen mit den Eigenschaften `shape-margin` und `clip-path`, sowie Debuggen von Grundformen mit
    den Entwickler-Tools.

- [Formen aus Kastenwerten](/de/docs/Web/CSS/CSS_shapes/From_box_values)

  - : Verwendung von `border-radius`-Krümmungen und CSS-Boxmodellwerten zur Erstellung von Formen.

- [Grundformen mit `shape-outside`](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

  - : Erstellen von Rechtecken, Kreisen, Ellipsen und Polygonen mit CSS-Formen, dem Referenzkasten und der Eigenschaft `shape-outside`.

- [Formen aus Bildern](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

  - : Erstellen von Formen aus halbtransparenten Bilddateien und CSS-Verläufen.

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

[CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul

- {{cssxref("border-radius")}} Kurzform

[CSS Box Modell](/de/docs/Web/CSS/CSS_box_model) Modul

- {{cssxref("box-edge")}} Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Formen-Ressourcen](https://codepen.io/KristopherVanSant/post/css-shapes-resources)
- [CSS Shapes 101](https://alistapart.com/article/css-shapes-101/) über alistapart.com (2014)
- [Erstellung nicht-rechteckiger Layouts mit CSS-Formen](https://www.sarasoueidan.com/blog/css-shapes/) über sarasoueidan.com (2013)
- [Anleitung zur Nutzung von CSS-Formen im Webdesign](https://webdesign.tutsplus.com/how-to-use-css-shapes-in-your-web-design--cms-27498t) über tutsplus.com (2016)
- [Anleitung zum Einstieg in CSS-Formen](https://www.webdesignerdepot.com/2015/03/how-to-get-started-with-css-shapes/) über webdesignerdepot.com (2015)
- [CSS-Formen mit dem Shape-Pfad-Editor bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) über mozilla.org (2018) ([Video](https://www.youtube.com/watch?v=u9bDe3Bw0sA))
