---
title: Abstände
slug: Glossary/Gutters
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{GlossarySidebar}}

**Abstände** oder _Gassen_ sind der Raum zwischen den {{Glossary("grid_tracks", "Tracks")}} von Inhalten. Diese können im [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) mithilfe der {{cssxref("column-gap")}}, {{cssxref("row-gap")}} oder {{cssxref("gap")}} Eigenschaften erstellt werden.

## Beispiel

Im untenstehenden Beispiel haben wir ein Raster mit drei Spalten- und zwei Zeilen-Tracks mit `20px` Lücken zwischen den Spalten- und Zeilen-Tracks.

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

In Bezug auf die Rastergröße wirken Lücken so, als ob sie ein regulärer Grid-Track wären, jedoch kann nichts in die Lücke platziert werden. Die Lücke wirkt, als ob die Gitterlinie an dieser Stelle zusätzliche Größe erhalten hat, sodass jedes Rasterelement, das nach dieser Linie platziert wird, am Ende der Lücke beginnt.

Die Eigenschaften `row-gap` und `column-gap` sind nicht die einzigen Dinge, die zu einer Vergrößerung der Stäcke führen können. Ränder, Auffüllungen oder die Verwendung der Raumverteilungseigenschaften in der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) können ebenfalls zum sichtbaren Abstand beitragen – daher sollten die Eigenschaften `row-gap` und `column-gap` nicht als gleichbedeutend mit der "Größe der Gasse" angesehen werden, es sei denn, Sie wissen, dass Ihr Design keinen zusätzlichen Raum mit einer dieser Methoden eingeführt hat.

## Siehe auch

- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- Eigenschaftenreferenz

  - {{cssxref("column-gap")}}
  - {{cssxref("row-gap")}}
  - {{cssxref("gap")}}

- [Definition von Abständen](https://drafts.csswg.org/css-grid/#gutters) in der CSS Grid Layout Spezifikation
