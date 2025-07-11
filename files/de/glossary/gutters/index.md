---
title: Rinnen
slug: Glossary/Gutters
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Rinnen** oder _Zwischenräume_ sind Abstände zwischen Inhalts{{Glossary("grid_tracks", "spuren")}}. Diese können im [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) mit den Eigenschaften {{cssxref("column-gap")}}, {{cssxref("row-gap")}} oder {{cssxref("gap")}} erstellt werden.

## Beispiel

Im untenstehenden Beispiel haben wir ein Raster mit drei Spalten- und zwei Zeilenspuren, mit `20px` Abständen zwischen den Spalten- und Zeilenspuren.

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

Hinsichtlich der Rastergrößen wirken Lücken so, als wären sie eine reguläre Rasterspur, in die jedoch nichts platziert werden kann. Die Lücke verhält sich so, als hätte die Rasterlinie an dieser Stelle zusätzliche Größe gewonnen, sodass jedes Rasterelement, das nach dieser Linie platziert wird, am Ende der Lücke beginnt.

Die Eigenschaften `row-gap` und `column-gap` sind nicht die einzigen Dinge, die Spuren auseinanderziehen können. Ränder, Abstände oder die Verwendung der Verteilungseigenschaften im [CSS-Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) können alle zu dem sichtbaren Abstand beitragen – daher sollten die Eigenschaften `row-gap` und `column-gap` nicht als gleichbedeutend mit der "Rinnengröße" angesehen werden, es sei denn, Sie wissen, dass Ihr Design keinen zusätzlichen Raum mit einer dieser Methoden eingeführt hat.

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- Eigenschaftsreferenz
  - {{cssxref("column-gap")}}
  - {{cssxref("row-gap")}}
  - {{cssxref("gap")}}

- [Definition von Rinnen](https://drafts.csswg.org/css-grid/#gutters) in der CSS-Grid-Layout-Spezifikation
