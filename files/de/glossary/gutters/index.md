---
title: Rinnen
slug: Glossary/Gutters
l10n:
  sourceCommit: cee38200097c0261de3067165362100b830a580d
---

**Rinnen**, auch _Gassen_ genannt, sind Abstände zwischen den Inhalts-{{Glossary("grid_tracks", "Tracks")}}. Diese können im [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout), [Flex-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) mit den Eigenschaften {{cssxref("column-gap")}}, {{cssxref("row-gap")}}, oder {{cssxref("gap")}} erstellt werden.

## Beispiel

Im folgenden Beispiel haben wir ein Gitter mit drei Spalten und zwei Zeilen, mit `20px` Zwischenräumen sowohl zwischen den Spaltentracks als auch den Zeilentracks.

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

Bezüglich der Rastergrößen wirken Lücken wie ein regulärer Raster-Track, jedoch kann nichts in die Lücke platziert werden. Die Lücke wirkt, als ob die Rasterlinie an diesem Ort an Größe gewonnen hätte, so dass jedes Rasterelement, das nach dieser Linie platziert wird, am Ende der Lücke beginnt.

Die Eigenschaften `row-gap` und `column-gap` sind nicht die einzigen Dinge, die dazu führen können, dass Tracks sich auseinanderziehen. Ränder, Abstände oder die Verwendung von Raumausrichteeigenschaften in der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) können alle zur sichtbaren Lücke beitragen – daher sollten die Eigenschaften `row-gap` und `column-gap` nicht als gleichbedeutend mit der "Rinnengröße" angesehen werden, es sei denn, Sie wissen, dass Ihr Design keinen zusätzlichen Raum mit einer dieser Methoden eingeführt hat.

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- Eigenschaftsreferenz
  - {{cssxref("column-gap")}}
  - {{cssxref("row-gap")}}
  - {{cssxref("gap")}}

- [Definition von Rinnen](https://drafts.csswg.org/css-grid/#gutters) in der CSS-Grid-Layout-Spezifikation
