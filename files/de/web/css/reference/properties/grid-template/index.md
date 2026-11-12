---
title: CSS-Eigenschaft `grid-template`
short-title: grid-template
slug: Web/CSS/Reference/Properties/grid-template
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`grid-template`** legt die {{Glossary("grid_column", "Grid-Spalten")}}, {{Glossary("grid_row", "Grid-Zeilen")}} und {{Glossary("grid_areas", "Grid-Bereiche")}} fest.

{{InteractiveExample("CSS Demo: grid-template")}}

```css interactive-example-choice
grid-template:
  "a a a" 40px
  "b c c" 40px
  "b c c" 40px / 1fr 1fr 1fr;
```

```css interactive-example-choice
grid-template:
  "b b a" auto
  "b b c" 2ch
  "b b c" 1em / 20% 20px 1fr;
```

```css interactive-example-choice
grid-template:
  "a a ." minmax(50px, auto)
  "a a ." 80px
  "b b c" auto / 2em 3em auto;
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
  grid-area: a;
}

#example-element :nth-child(2) {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
  grid-area: b;
}

#example-element :nth-child(3) {
  background-color: rgb(94 255 0 / 0.2);
  border: 3px solid green;
  grid-area: c;
}
```

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}

## Syntax

```css
/* Keyword value */
grid-template: none;

/* grid-template-rows / grid-template-columns values */
grid-template: 100px 1fr / 50px 1fr;
grid-template: auto 1fr / auto 1fr auto;
grid-template: [line-name] 100px / [column-name1] 30% [column-name2] 70%;
grid-template: fit-content(100px) / fit-content(40%);

/* grid-template-areas grid-template-rows / grid-template-column values */
grid-template:
  "a a a"
  "b b b";
grid-template:
  "a a a" 20%
  "b b b" auto;
grid-template:
  [header-top] "a a a" [header-bottom]
  [main-top] "b b b" 1fr [main-bottom]
  / auto 1fr auto;

/* Global values */
grid-template: inherit;
grid-template: initial;
grid-template: revert;
grid-template: revert-layer;
grid-template: unset;
```

### Werte

- `none`
  - : Setzt alle drei ausgeschriebenen Eigenschaften auf `none`. Das bedeutet, dass kein explizites Grid und keine benannten Grid-Bereiche vorhanden sind. Zeilen und Spalten werden implizit erzeugt; ihre Größe wird durch die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} bestimmt. Dies ist der Standardwert.
- `<'grid-template-rows'> / <'grid-template-columns'>`
  - : Setzt {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} auf die angegebenen Werte und {{cssxref("grid-template-areas")}} auf `none`.
- `[ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`
  - : Setzt {{cssxref("grid-template-areas")}} auf die aufgeführten Zeichenfolgen und {{cssxref("grid-template-rows")}} auf die Track-Größen, die auf die jeweilige Zeichenfolge folgen. Fehlende Größen werden dabei durch `auto` ergänzt und die vor oder nach der jeweiligen Größe definierten benannten Linien eingefügt. {{cssxref("grid-template-columns")}} wird auf die nach dem Schrägstrich angegebene Track-Liste gesetzt (oder auf `none`, falls keine angegeben ist).

    > [!NOTE]
    > Die Funktion {{cssxref("repeat()")}} ist in diesen Track-Listen nicht zulässig, da die Tracks visuell eins zu eins den Zeilen und Spalten der „ASCII-Grafik“ entsprechen sollen.

> [!NOTE]
> Die Kurzschreibweise {{cssxref("grid")}} akzeptiert dieselbe Syntax, setzt aber zusätzlich die Eigenschaften des impliziten Grids auf ihre Anfangswerte zurück. Verwenden Sie `grid` statt `grid-template`, um zu verhindern, dass Werte für diese Eigenschaften separat durch die Kaskade übernommen werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Grid-Vorlage definieren

#### HTML

```html
<div id="page">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main area</main>
  <footer>Footer</footer>
</div>
```

#### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 200px;
  grid-template:
    [header-left] "head head" 30px [header-right]
    [main-left] "nav  main" 1fr [main-right]
    [footer-left] "nav  foot" 30px [footer-right]
    / 120px 1fr;
}

header {
  background-color: lime;
  grid-area: head;
}

nav {
  background-color: lightblue;
  grid-area: nav;
}

main {
  background-color: yellow;
  grid-area: main;
}

footer {
  background-color: red;
  grid-area: foot;
}
```

#### Ergebnis

{{EmbedLiveSample("Defining_a_grid_template", "100%", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- [Linienbasierte Platzierung mit CSS Grid](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Grid-Vorlagenbereiche: Kurzschreibweisen für die Grid-Definition](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#grid_definition_shorthands)
- Video: [Die Kurzschreibweise für Grid-Vorlagen](https://gridbyexample.com/video/grid-template-shorthand/)
