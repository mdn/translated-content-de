---
title: Gitterzwischenräume
slug: Glossary/Gutters
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**Gitterzwischenräume** oder _Allee_ sind Abstände zwischen Inhalts- {{Glossary("grid_tracks", "Spuren")}}. Diese können im [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) mithilfe der Eigenschaften {{cssxref("column-gap")}}, {{cssxref("row-gap")}} oder {{cssxref("gap")}} erstellt werden.

## Beispiel

Im folgenden Beispiel haben wir ein Raster mit drei Spalten und zwei Zeilen, mit `20px` Abständen zwischen sowohl Spalten- als auch Zeilenspuren.

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

In Bezug auf die Rastergröße verhalten sich Lücken so, als wären sie eine reguläre Rasterspur, jedoch kann nichts in die Lücke platziert werden. Die Lücke verhält sich, als ob die Rasterlinie an dieser Stelle eine zusätzliche Größe erhalten hätte, sodass jedes Rasterelement, das nach dieser Linie platziert wird, am Ende der Lücke beginnt.

Die Eigenschaften `row-gap` und `column-gap` sind nicht die einzigen Dinge, die dazu führen können, dass sich Spuren auseinander bewegen. Ränder, Abstände oder die Verwendung der Raumverteilungseigenschaften in der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) können alle zum sichtbaren Abstand beitragen – daher sollten die Eigenschaften `row-gap` und `column-gap` nicht gleichbedeutend mit der "Gitterzwischenraumgröße" angesehen werden, es sei denn, Sie wissen, dass Ihr Design keinen zusätzlichen Raum mit einer dieser Methoden eingeführt hat.

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- Eigenschaftenreferenz

  - {{cssxref("column-gap")}}
  - {{cssxref("row-gap")}}
  - {{cssxref("gap")}}

- [Definition von Gitterzwischenräumen](https://drafts.csswg.org/css-grid/#gutters) in der CSS-Grid-Layout-Spezifikation
