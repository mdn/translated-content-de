---
title: Gutters
slug: Glossary/Gutters
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

**Gutters** oder _Stege_ sind Abstände zwischen Inhalts-[Tracks](/de/docs/Glossary/grid_tracks). Diese können im [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) mit den Eigenschaften {{cssxref("column-gap")}}, {{cssxref("row-gap")}} oder {{cssxref("gap")}} erstellt werden.

## Beispiel

Im folgenden Beispiel haben wir ein Raster mit drei Spalten-Tracks und zwei Zeilen-Tracks, mit `20px` Abständen zwischen den Spalten-Tracks und den Zeilen-Tracks.

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

Im Hinblick auf die Rastergröße verhalten sich Lücken so, als ob sie ein regulärer Raster-Track wären, aber es kann nichts in die Lücke eingefügt werden. Die Lücke wirkt so, als ob die Rasterlinie an dieser Stelle extra Größe erhalten hätte, sodass jedes Rasterelement, das nach dieser Linie platziert wird, am Ende der Lücke beginnt.

Die Eigenschaften `row-gap` und `column-gap` sind nicht die einzigen Dinge, die dazu führen können, dass Tracks auseinander liegen. Ränder, Abstände oder die Verwendung der Raumverteilungseigenschaften in der [Box Alignment](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) können alle zum sichtbaren Abstand beitragen - daher sollten die Eigenschaften `row-gap` und `column-gap` nicht als gleichbedeutend mit der "Guttergröße" angesehen werden, es sei denn, Sie wissen, dass Ihr Design mit keiner dieser Methoden zusätzlichen Raum eingeführt hat.

## Siehe auch

- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- Eigenschaftenreferenz

  - {{cssxref("column-gap")}}
  - {{cssxref("row-gap")}}
  - {{cssxref("gap")}}

- [Definition von Gutters](https://drafts.csswg.org/css-grid/#gutters) in der CSS Grid Layout Spezifikation
