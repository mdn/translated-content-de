---
title: Gitternetz-Bereiche
slug: Glossary/Grid_Areas
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

Ein **Gitternetz-Bereich** besteht aus einem oder mehreren {{Glossary("grid_cell", "Gitterzellen")}}, die zusammen einen rechteckigen Bereich im Gitternetz bilden. Gitternetz-Bereiche werden erstellt, wenn Sie ein Element mithilfe der [linienbasierten Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) positionieren oder wenn Sie Bereiche unter Verwendung von [benannten Gitternetz-Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) definieren.

![Bild, das einen hervorgehobenen Gitternetz-Bereich zeigt](1_grid_area.png)

Gitternetz-Bereiche _müssen_ rechteckig sein; es ist nicht möglich, z.B. einen T- oder L-förmigen Gitternetz-Bereich zu erstellen.

## Beispiel

Im Beispiel unten habe ich einen Gitternetz-Container mit zwei Gitternetz-Elementen. Ich habe diese mit der {{cssxref("grid-area")}} Eigenschaft benannt und sie dann auf dem Gitternetz mit {{cssxref("grid-template-areas")}} angeordnet. Dadurch entstehen zwei Gitternetz-Bereiche, einer, der vier Gitterzellen abdeckt, und ein anderer, der zwei abdeckt.

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

### Weiterführende Literatur

- CSS-Grid-Layout-Leitfaden:
  - [Grundlegende Konzepte des Gitternetz-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  - [Gitternetz-Bereichsvorlagen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Definition von Gitternetz-Bereichen in der CSS-Grid-Layout-Spezifikation](https://drafts.csswg.org/css-grid/#grid-area-concept)
