---
title: Rasterbereiche
slug: Glossary/Grid_Areas
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Rasterbereich** ist eine oder mehrere {{Glossary("grid_cell", "Rasterzellen")}}, die einen rechteckigen Bereich im Raster bilden. Rasterbereiche entstehen, wenn Sie ein Element mit [linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) positionieren oder wenn Sie Bereiche mit [benannten Rasterbereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) definieren.

![Bild, das einen hervorgehobenen Rasterbereich zeigt](1_grid_area.png)

Rasterbereiche _müssen_ rechteckig sein; es ist beispielsweise nicht möglich, einen T- oder L-förmigen Rasterbereich zu erstellen.

## Beispiel

Im folgenden Beispiel habe ich einen Rastercontainer mit zwei Rasterelementen. Ich habe diese mit der {{cssxref("grid-area")}}-Eigenschaft benannt und dann mit {{cssxref("grid-template-areas")}} im Raster angeordnet. Dies erzeugt zwei Rasterbereiche, einer umfasst vier Rasterzellen, der andere zwei.

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

### Eigenschaftsreferenz

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-area")}}

### Weiterführende Informationen

- CSS-Rasterlayout-Leitfaden:
  - [Grundkonzepte des Rasterlayouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  - [Rastervorlagenbereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Definition von Rasterbereichen in der CSS-Rasterlayoutspezifikation](https://drafts.csswg.org/css-grid/#grid-area-concept)
