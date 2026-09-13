---
title: "`grid` CSS-Eigenschaft"
short-title: grid
slug: Web/CSS/Reference/Properties/grid
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`grid`** [CSS](/de/docs/Web/CSS)-[Kurznotation](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt alle expliziten und impliziten Rastereigenschaften in einer einzigen Deklaration.

Mit `grid` spezifizieren Sie eine Achse mithilfe von {{cssxref("grid-template-rows")}} oder {{cssxref("grid-template-columns")}}, und dann legen Sie fest, wie der Inhalt auf der anderen Achse automatisch wiederholt werden soll, indem Sie die impliziten Rastereigenschaften verwenden: {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-flow")}}.

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
> Die Untereigenschaften, die Sie nicht spezifizieren, werden auf ihren Anfangswert gesetzt, wie es bei Kurznotationen üblich ist. Außerdem werden die Abstandseigenschaften durch diese Kurznotation NICHT zurückgesetzt.

## Zusätzliche Eigenschaften

Diese Eigenschaft ist eine Kurznotation für die folgenden CSS-Eigenschaften:

- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}

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
grid: repeat(3, 200px) / auto-flow 300px;
grid: [line1] minmax(20em, max-content) / auto-flow dense 40%;

/* [ auto-flow && dense? ] <'grid-auto-rows'>? /
   <'grid-template-columns'> values */
grid: auto-flow / 200px;
grid: auto-flow dense / 30%;
grid: auto-flow 300px / repeat(3, 200px);
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
  - : Richtet einen automatischen Fluss ein, indem die Zeilenstücke explizit über die {{cssxref("grid-template-rows")}}-Eigenschaft (und die {{cssxref("grid-template-columns")}}-Eigenschaft auf `none`) festgelegt werden und wie die Spaltenstücke über {{cssxref("grid-auto-columns")}} automatisch wiederholt werden sollen (und {{cssxref("grid-auto-rows")}} auf `auto` gesetzt wird). {{cssxref("grid-auto-flow")}} wird entsprechend auf `column` gesetzt, mit `dense`, falls es angegeben ist.

    Alle anderen Untereigenschaften von `grid` werden auf ihre Anfangswerte zurückgesetzt.

- `[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`
  - : Richtet einen automatischen Fluss ein, indem die Spaltenstücke explizit über die {{cssxref("grid-template-columns")}}-Eigenschaft (und die {{cssxref("grid-template-rows")}}-Eigenschaft auf `none`) festgelegt werden und wie die Zeilenstücke über {{cssxref("grid-auto-rows")}} automatisch wiederholt werden sollen (und {{cssxref("grid-auto-columns")}} auf `auto` gesetzt wird). {{cssxref("grid-auto-flow")}} wird entsprechend auf `row` gesetzt, mit `dense`, falls es angegeben ist.

    Alle anderen Untereigenschaften von `grid` werden auf ihre Anfangswerte zurückgesetzt.

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
- [Linienbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Rastervorlagenbereiche: Kurznotationen der Rasterdefinition](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#grid_definition_shorthands)
