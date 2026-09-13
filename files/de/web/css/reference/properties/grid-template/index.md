---
title: "`grid-template` CSS-Eigenschaft"
short-title: grid-template
slug: Web/CSS/Reference/Properties/grid-template
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`grid-template`** [CSS](/de/docs/Web/CSS) [Kurzschrift](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) Eigenschaft spezifiziert die {{Glossary("grid_column", "Gitterspalten")}}, {{Glossary("grid_row", "Gitterzeilen")}} und {{Glossary("grid_areas", "Gitterflächen")}}.

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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

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
  - : Setzt alle drei Langformen auf `none`, was bedeutet, dass kein explizites Gitter vorhanden ist. Es gibt keine benannten Gitterflächen. Zeilen und Spalten werden implizit generiert; ihre Größe wird durch die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} bestimmt. Dies ist der Standardwert.
- `<'grid-template-rows'> / <'grid-template-columns'>`
  - : Setzt {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} auf die angegebenen Werte und setzt {{cssxref("grid-template-areas")}} auf `none`.
- `[ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`
  - : Setzt {{cssxref("grid-template-areas")}} auf die aufgeführten Zeichenketten, {{cssxref("grid-template-rows")}} auf die nach jeder Zeichenkette folgenden Spurgrößen (fügt `auto` für fehlende Größen ein), und fügt die benannten Linien ein, die vor/nach jeder Größe definiert sind, und {{cssxref("grid-template-columns")}} auf die nach dem Schrägstrich angegebene Auflistung (oder `none`, falls nicht angegeben).

    > [!NOTE]
    > Die {{cssxref("repeat()")}} Funktion ist in diesen Spurauflistungen nicht erlaubt, da die Spuren visuell eins-zu-eins mit den Zeilen/Spalten im "ASCII Art" ausgerichtet sein sollen.

> [!NOTE]
> Die {{cssxref("grid")}} Kurzschrift akzeptiert dieselbe Syntax, setzt jedoch auch die impliziten Gittereigenschaften auf ihre Anfangswerte zurück. Verwenden Sie `grid` (anstatt `grid-template`), um zu verhindern, dass diese Werte separat vererbt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition einer Gittervorlage

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

#### HTML

```html
<div id="page">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main area</main>
  <footer>Footer</footer>
</div>
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
- [Zeilenbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Gittervorlagebereiche: Definition von Gitter-Kurzschriften](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#grid_definition_shorthands)
- Video: [Grid-Vorlagen-Kurzschrift](https://gridbyexample.com/video/grid-template-shorthand/)
