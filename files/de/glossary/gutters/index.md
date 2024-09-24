---
title: Rinnen
slug: Glossary/Gutters
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

**Gutters** oder _Alleys_ sind Abstände zwischen Inhalts-{{glossary("grid_tracks", "Spuren")}}. Diese können im [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) mithilfe der Eigenschaften {{cssxref("column-gap")}}, {{cssxref("row-gap")}} oder {{cssxref("gap")}} erstellt werden.

## Beispiel

Im untenstehenden Beispiel haben wir ein Raster mit drei Spalten und zwei Zeilen, mit `20px` Abständen zwischen den Spalten- und Zeilenspuren.

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

In Bezug auf die Rastergrößen verhalten sich Abstände, als ob sie eine normale Rasterspur wären, jedoch kann nichts in den Abstand platziert werden. Der Abstand wirkt, als ob die Rasterlinie an dieser Stelle zusätzliche Größe erhalten hat, sodass jedes Rasterelement, das nach dieser Linie platziert wird, am Ende des Abstands beginnt.

Die Eigenschaften `row-gap` und `column-gap` sind nicht die einzigen Dinge, die dazu führen können, dass Spuren auseinander gehen. Ränder, Abstände oder die Verwendung der Raumverteilungseigenschaften in der [Box-Ausrichtung](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) können alle zum sichtbaren Abstand beitragen – daher sollten die Eigenschaften `row-gap` und `column-gap` nicht als gleichbedeutend mit der "Rinnengröße" angesehen werden, es sei denn, Sie wissen, dass Ihr Design keinen zusätzlichen Raum durch eine dieser Methoden eingeführt hat.

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- Eigenschaftsreferenz

  - {{cssxref("column-gap")}}
  - {{cssxref("row-gap")}}
  - {{cssxref("gap")}}

- [Definition von Rinnen](https://drafts.csswg.org/css-grid/#gutters) in der CSS-Grid-Layout-Spezifikation
