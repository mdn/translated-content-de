---
title: grid
slug: Web/CSS/grid
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`grid`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties), die alle expliziten und impliziten Rastereigenschaften in einer einzigen Deklaration festlegt.

Mit `grid` geben Sie eine Achse mit {{cssxref("grid-template-rows")}} oder {{cssxref("grid-template-columns")}} an. Sie legen dann fest, wie Inhalte auf der anderen Achse mithilfe der impliziten Rastereigenschaften automatisch wiederholt werden sollen: {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-flow")}}.

{{InteractiveExample("CSS Demo: grid")}}

```css interactive-example-choice
grid: auto-flow / 1fr 1fr 1fr;
```

```css interactive-example-choice
grid: auto-flow dense / 40px 40px 1fr;
```

```css interactive-example-choice
grid: repeat(3, 80px) / auto-flow;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-gap: 10px;
  width: 200px;
}

#example-element :nth-child(1) {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}

#example-element :nth-child(2) {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
  grid-column: auto / span 3;
  grid-row: auto / span 2;
}

#example-element :nth-child(3) {
  background-color: rgb(94 255 0 / 0.2);
  border: 3px solid green;
  grid-column: auto / span 2;
}
```

> [!NOTE]
> Die Sub-Eigenschaften, die Sie nicht angeben, werden wie üblich für Kurzschreibweisen auf ihren Initialwert gesetzt. Auch die Abstandseigenschaften werden durch diese Kurzschreibweise NICHT zurückgesetzt.

## Zusätzliche Eigenschaften

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
  - : Definiert die {{cssxref("grid-template")}}, einschließlich {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-areas")}}.
- `<'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?`
  - : Richtet einen Auto-Flow ein, indem die Zeilen-Offsets explizit über die {{cssxref("grid-template-rows")}} Eigenschaft gesetzt werden (und die {{cssxref("grid-template-columns")}} Eigenschaft auf `none`) und festlegt, wie die Spalten-Offsets über {{cssxref("grid-auto-columns")}} automatisch wiederholt werden (und {{cssxref("grid-auto-rows")}} auf `auto` setzen). {{cssxref("grid-auto-flow")}} ist entsprechend auf `column` gesetzt, mit `dense` falls es angegeben ist.

    Alle anderen Sub-Eigenschaften von `grid` werden auf ihre Initialwerte zurückgesetzt.

- `[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`
  - : Richtet einen Auto-Flow ein, indem die Spalten-Offsets explizit über die {{cssxref("grid-template-columns")}} Eigenschaft gesetzt werden (und die {{cssxref("grid-template-rows")}} Eigenschaft auf `none`) und festlegt, wie die Zeilen-Offsets über {{cssxref("grid-auto-rows")}} automatisch wiederholt werden (und {{cssxref("grid-auto-columns")}} auf `auto` setzen). {{cssxref("grid-auto-flow")}} ist entsprechend auf `row` gesetzt, mit `dense` falls es angegeben ist.

    Alle anderen Sub-Eigenschaften von `grid` werden auf ihre Initialwerte zurückgesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen eines Rasterlayouts

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
- [Grid-Template-Bereiche: Grid-Definition-Kurzschreibweise](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
