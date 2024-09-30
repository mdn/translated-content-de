---
title: Gutters
slug: Glossary/Gutters
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

**Gutters** oder _Bahnen_ sind Abstände zwischen Inhalts-[Tracks](/de/docs/Glossary/grid_tracks). Diese können im [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) mithilfe der Eigenschaften {{cssxref("column-gap")}}, {{cssxref("row-gap")}} oder {{cssxref("gap")}} erstellt werden.

## Beispiel

Im folgenden Beispiel haben wir ein Gitter mit drei Spalten- und zwei Zeilentracks, mit `20px` Abstand zwischen sowohl den Spaltentracks als auch den Zeilentracks.

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

In Bezug auf die Gittergrößen wirken Lücken, als ob sie ein regulärer Gitter-Track wären, es kann jedoch nichts in die Lücke platziert werden. Die Lücke wirkt, als ob die Gitterlinie an dieser Stelle zusätzliche Größe erhalten hätte, sodass jedes Gitterelement, das nach dieser Linie platziert wird, am Ende der Lücke beginnt.

Die Eigenschaften `row-gap` und `column-gap` sind nicht die einzigen Faktoren, die zu Abständen zwischen den Tracks führen können. Ränder, Abstände oder die Verwendung der Eigenschaft zur Verteilung des Raums im [Box Alignment](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) können alle zu sichtbaren Lücken beitragen – daher sollten die Eigenschaften `row-gap` und `column-gap` nicht als gleich groß wie die "Guttergröße" angesehen werden, es sei denn, Sie wissen, dass Ihr Design keinen zusätzlichen Raum mit einer dieser Methoden eingeführt hat.

## Siehe auch

- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- Eigenschaftenreferenz

  - {{cssxref("column-gap")}}
  - {{cssxref("row-gap")}}
  - {{cssxref("gap")}}

- [Definition von Gutters](https://drafts.csswg.org/css-grid/#gutters) in der CSS Grid Layout Spezifikation
