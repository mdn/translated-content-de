---
title: Rinnen
slug: Glossary/Gutters
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

{{GlossarySidebar}}

**Rinnen** oder _Gassen_ sind Abstände zwischen {{Glossary("grid_tracks", "Tracks")}}. Diese können im [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) mit den Eigenschaften {{cssxref("column-gap")}}, {{cssxref("row-gap")}} oder {{cssxref("gap")}} erstellt werden.

## Beispiel

Im untenstehenden Beispiel haben wir ein Raster mit drei Spalten- und zwei Zeilen-Tracks, bei dem `20px` Abstände sowohl zwischen den Spalten-Tracks als auch zwischen den Zeilen-Tracks eingefügt sind.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #fff8f8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1.2fr);
  grid-auto-rows: 45%;
  column-gap: 20px;
  row-gap: 20px;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{EmbedLiveSample('Example', '300', '280')}}

In Bezug auf die Rastergröße wirken Lücken (Gaps) so, als wären sie ein regulärer Raster-Track, jedoch kann nichts in die Lücke eingefügt werden. Die Lücke verhält sich, als ob die Rasterlinie an dieser Stelle zusätzliche Größe erhalten hätte, sodass jedes Rasterelement, das nach dieser Linie platziert wird, am Ende der Lücke beginnt.

Die Eigenschaften `row-gap` und `column-gap` sind nicht die einzigen Dinge, die Tracks auseinanderziehen können. Abstände, Innenabstände (Padding) oder die Verwendung der Verteilungseigenschaften im [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) können ebenfalls zu sichtbaren Lücken beitragen – daher sollten die Eigenschaften `row-gap` und `column-gap` nicht als gleichbedeutend mit der "Rinnengröße" betrachtet werden, es sei denn, Sie wissen, dass in Ihrem Design keine zusätzlichen Räume mit einer dieser Methoden eingeführt wurden.

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- Eigenschaftsreferenz

  - {{cssxref("column-gap")}}
  - {{cssxref("row-gap")}}
  - {{cssxref("gap")}}

- [Definition von Rinnen](https://drafts.csswg.org/css-grid/#gutters) in der CSS-Grid-Layout-Spezifikation
