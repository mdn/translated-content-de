---
title: Gridbereiche
slug: Glossary/Grid_Areas
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein **Gridbereich** besteht aus einer oder mehreren {{Glossary("grid_cell", "Gridzellen")}}, die zusammen einen rechteckigen Bereich im Grid bilden. Gridbereiche werden erstellt, wenn Sie ein Element mit [linienbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) positionieren oder wenn Sie Bereiche mit [benannten Gridbereichen](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas) definieren.

![Bild mit hervorgehobenem Gridbereich](1_grid_area.png)

Gridbereiche _müssen_ rechteckig sein; es ist nicht möglich, zum Beispiel einen T- oder L-förmigen Gridbereich zu erstellen.

## Beispiel

Im folgenden Beispiel habe ich einen Grid-Container mit zwei Grid-Elementen. Ich habe diese mit der {{cssxref("grid-area")}}-Eigenschaft benannt und sie dann mithilfe von {{cssxref("grid-template-areas")}} im Grid angeordnet. Dies erzeugt zwei Gridbereiche, einen der vier Gridzellen abdeckt und einen weiteren mit zwei.

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

### Eigenschaftenreferenz

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-area")}}

### Weiterführende Literatur

- CSS-Grid-Layout-Leitfaden:
  - [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
  - [Grid-Template-Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [Definition von Gridbereichen in der CSS-Grid-Layout-Spezifikation](https://drafts.csswg.org/css-grid/#grid-area-concept)
