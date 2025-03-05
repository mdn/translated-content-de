---
title: grid
slug: Web/CSS/grid
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`grid`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties), die alle expliziten und impliziten Gittereigenschaften in einer einzigen Deklaration festlegt.

Mit `grid` geben Sie eine Achse unter Verwendung von {{cssxref("grid-template-rows")}} oder {{cssxref("grid-template-columns")}} an, und dann spezifizieren Sie, wie der Inhalt auf der anderen Achse automatisch wiederholt werden soll, indem Sie die impliziten Gittereigenschaften verwenden: {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-flow")}}.

{{EmbedInteractiveExample("pages/css/grid.html")}}

> [!NOTE]
> Die Teil-Eigenschaften, die Sie nicht spezifizieren, werden auf ihren Initialwert gesetzt, wie es bei Kurzschreibweisen üblich ist. Außerdem werden die Zwischenraum-Eigenschaften von dieser Kurzschreibweise NICHT zurückgesetzt.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`grid-auto-columns`](/de/docs/Web/CSS/grid-auto-columns)
- [`grid-auto-flow`](/de/docs/Web/CSS/grid-auto-flow)
- [`grid-auto-rows`](/de/docs/Web/CSS/grid-auto-rows)
- [`grid-template-areas`](/de/docs/Web/CSS/grid-template-areas)
- [`grid-template-columns`](/de/docs/Web/CSS/grid-template-columns)
- [`grid-template-rows`](/de/docs/Web/CSS/grid-template-rows)

## Syntax

```css
/* <'grid-template'> values */
grid: none;
grid: "a" 100px "b" 1fr;
grid: [line-name1] "a" 100px [line-name2];
grid: "a" 200px "b" min-content;
grid: "a" minmax(100px, max-content) "b" 20%;
grid: 100px / 200px;
grid: minmax(400px, min-content) / repeat(auto-fill, 50px);

/* <'grid-template-rows'> /
   [ auto-flow && dense? ] <'grid-auto-columns'>? values */
grid: 200px / auto-flow;
grid: 30% / auto-flow dense;
grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;
grid: [line1] minmax(20em, max-content) / auto-flow dense 40%;

/* [ auto-flow && dense? ] <'grid-auto-rows'>? /
   <'grid-template-columns'> values */
grid: auto-flow / 200px;
grid: auto-flow dense / 30%;
grid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px);
grid: auto-flow dense 40% / [line1] minmax(20em, max-content);

/* Global values */
grid: inherit;
grid: initial;
grid: revert;
grid: revert-layer;
grid: unset;
```

### Werte

- `<'grid-template'>`
  - : Definiert das {{cssxref("grid-template")}} einschließlich {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-areas")}}.
- `<'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?`

  - : Richtet einen automatischen Fluss ein, indem die Zeilen mit der {{cssxref("grid-template-rows")}} Eigenschaft explizit festgelegt werden (und die {{cssxref("grid-template-columns")}} Eigenschaft auf `none` gesetzt wird) und spezifiziert, wie die Spalten mit {{cssxref("grid-auto-columns")}} automatisch wiederholt werden sollen (und {{cssxref("grid-auto-rows")}} auf `auto` gesetzt wird). Auch {{cssxref("grid-auto-flow")}} wird entsprechend auf `column` gesetzt, mit `dense`, falls es angegeben wird.

    Alle anderen `grid` Teil-Eigenschaften werden auf ihre Initialwerte zurückgesetzt.

- `[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`

  - : Richtet einen automatischen Fluss ein, indem die Spalten mit der {{cssxref("grid-template-columns")}} Eigenschaft explizit festgelegt werden (und die {{cssxref("grid-template-rows")}} Eigenschaft auf `none` gesetzt wird) und spezifiziert, wie die Zeilen mit {{cssxref("grid-auto-rows")}} automatisch wiederholt werden sollen (und {{cssxref("grid-auto-columns")}} auf `auto` gesetzt wird). Auch {{cssxref("grid-auto-flow")}} wird entsprechend auf `row` gesetzt, mit `dense`, falls es angegeben wird.

    Alle anderen `grid` Teil-Eigenschaften werden auf ihre Initialwerte zurückgesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellung eines Grid-Layouts

#### HTML

```html
<div id="container">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid: repeat(2, 60px) / auto-flow 80px;
}

#container > div {
  background-color: #8ca0ff;
  width: 50px;
  height: 50px;
}
```

#### Ergebnis

{{EmbedLiveSample("Creating_a_grid_layout", "100%", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-template")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- [Linienbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche: Definition von Kurzschreibweisen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
