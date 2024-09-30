---
title: Grid Areas
slug: Glossary/Grid_Areas
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

Ein **Grid-Bereich** ist eine oder mehrere [Grid-Zellen](/de/docs/Glossary/grid_cell), die zusammen einen rechteckigen Bereich im Grid bilden. Grid-Bereiche werden erstellt, wenn Sie ein Element mithilfe der [linienbasierten Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) platzieren oder Bereiche mit [benannten Grid-Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) definieren.

![Bild zeigt einen hervorgehobenen Grid-Bereich](1_grid_area.png)

Grid-Bereiche _müssen_ rechteckig sein; es ist nicht möglich, zum Beispiel einen T- oder L-förmigen Grid-Bereich zu erstellen.

## Beispiel

Im untenstehenden Beispiel habe ich ein Grid-Container mit zwei Grid-Elementen. Ich habe diese mit der {{cssxref("grid-area")}} Eigenschaft benannt und dann mit {{cssxref("grid-template-areas")}} im Grid angeordnet. Dies erstellt zwei Grid-Bereiche, einer, der vier Grid-Zellen umfasst, der andere zwei.

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
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
  grid-template-areas:
    "a a b"
    "a a b";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
```

```html
<div class="wrapper">
  <div class="item1">Item</div>
  <div class="item2">Item</div>
</div>
```

{{ EmbedLiveSample('Example', '300', '280') }}

## Siehe auch

### Property-Referenz

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-area")}}

### Weiterführende Literatur

- CSS Grid-Layout-Leitfaden:
  - [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  - [Grid Template Areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Definition von Grid-Bereichen in der CSS Grid-Layout-Spezifikation](https://drafts.csswg.org/css-grid/#grid-area-concept)
