---
title: grid
slug: Web/CSS/Reference/Properties/grid
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`grid`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties), die alle expliziten und impliziten Grid-Eigenschaften in einer einzigen Deklaration festlegt.

Mit `grid` können Sie eine Achse mit {{cssxref("grid-template-rows")}} oder {{cssxref("grid-template-columns")}} spezifizieren, anschließend legen Sie fest, wie der Inhalt in der anderen Achse automatisch wiederholt werden soll, unter Verwendung der impliziten Grid-Eigenschaften: {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-flow")}}.

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
> Die Untereigenschaften, die Sie nicht spezifizieren, werden auf ihren Anfangswert gesetzt, wie bei Kurzschreibweisen üblich. Außerdem werden die Gutter-Eigenschaften durch diese Kurzschreibweise NICHT zurückgesetzt.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`grid-auto-columns`](/de/docs/Web/CSS/Reference/Properties/grid-auto-columns)
- [`grid-auto-flow`](/de/docs/Web/CSS/Reference/Properties/grid-auto-flow)
- [`grid-auto-rows`](/de/docs/Web/CSS/Reference/Properties/grid-auto-rows)
- [`grid-template-areas`](/de/docs/Web/CSS/Reference/Properties/grid-template-areas)
- [`grid-template-columns`](/de/docs/Web/CSS/Reference/Properties/grid-template-columns)
- [`grid-template-rows`](/de/docs/Web/CSS/Reference/Properties/grid-template-rows)

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
  - : Definiert das {{cssxref("grid-template")}}, einschließlich {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-areas")}}.
- `<'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?`
  - : Richtet einen automatischen Ablauf ein, indem die Zeilen-Tracks explizit über die {{cssxref("grid-template-rows")}} Eigenschaft festgelegt werden (und die {{cssxref("grid-template-columns")}} Eigenschaft auf `none` gesetzt wird) und wie die Spalten-Tracks automatisch wiederholt werden sollen, über {{cssxref("grid-auto-columns")}} (und {{cssxref("grid-auto-rows")}} auf `auto` gesetzt wird). {{cssxref("grid-auto-flow")}} wird entsprechend auf `column` gesetzt, mit `dense`, wenn es spezifiziert ist.

    Alle anderen `grid` Untereigenschaften werden auf ihre Anfangswerte zurückgesetzt.

- `[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`
  - : Richtet einen automatischen Ablauf ein, indem die Spalten-Tracks explizit über die {{cssxref("grid-template-columns")}} Eigenschaft festgelegt werden (und die {{cssxref("grid-template-rows")}} Eigenschaft auf `none` gesetzt wird) und wie die Zeilen-Tracks automatisch wiederholt werden sollen, über {{cssxref("grid-auto-rows")}} (und {{cssxref("grid-auto-columns")}} auf `auto` gesetzt wird). {{cssxref("grid-auto-flow")}} wird entsprechend auf `row` gesetzt, mit `dense`, wenn es spezifiziert ist.

    Alle anderen `grid` Untereigenschaften werden auf ihre Anfangswerte zurückgesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen eines Grid-Layouts

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
- [Linienbasierte Platzierung mit CSS Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche: Grid-Definitions-Kurzschreibweisen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
