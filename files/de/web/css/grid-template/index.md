---
title: grid-template
slug: Web/CSS/grid-template
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`grid-template`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) zur Definition von {{glossary("grid column", "grid columns")}}, {{glossary("grid_row", "grid rows")}}, und {{glossary("grid areas", "grid areas")}}.

{{EmbedInteractiveExample("pages/css/grid-template.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist ein Shorthand für die folgenden CSS-Eigenschaften:

- [`grid-template-areas`](/de/docs/Web/CSS/grid-template-areas)
- [`grid-template-columns`](/de/docs/Web/CSS/grid-template-columns)
- [`grid-template-rows`](/de/docs/Web/CSS/grid-template-rows)

## Syntax

```css
/* Schlüsselwortwert */
grid-template: none;

/* Werte für grid-template-rows / grid-template-columns */
grid-template: 100px 1fr / 50px 1fr;
grid-template: auto 1fr / auto 1fr auto;
grid-template: [linename] 100px / [columnname1] 30% [columnname2] 70%;
grid-template: fit-content(100px) / fit-content(40%);

/* Werte für grid-template-areas grid-template-rows / grid-template-column */
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

/* Globale Werte */
grid-template: inherit;
grid-template: initial;
grid-template: revert;
grid-template: revert-layer;
grid-template: unset;
```

### Werte

- `none`
  - : Ist ein Schlüsselwort, das alle drei Langschreibweisen-Eigenschaften auf `none` setzt, was bedeutet, dass es kein explizites Grid gibt. Es gibt keine benannten Grid-Bereiche. Reihen und Spalten werden implizit erzeugt; ihre Größe wird durch die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} bestimmt.
- `<'grid-template-rows'> / <'grid-template-columns'>`
  - : Setzt {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} auf die angegebenen Werte und setzt {{cssxref("grid-template-areas")}} auf `none`.
- `[ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`

  - : Setzt {{cssxref("grid-template-areas")}} auf die aufgeführten Strings, {{cssxref("grid-template-rows")}} auf die nach jedem String folgenden Spurgrößen (automatisch auffüllend mit `auto` für jede fehlende Größe) und fügt die benannten Linien ein, die vor/nach jeder Größe definiert sind, und {{cssxref("grid-template-columns")}} auf die nach dem Schrägstrich spezifizierten Spurangaben (oder `none`, wenn nicht spezifiziert).

    > [!NOTE]
    > Die {{cssxref("repeat", "repeat()")}}-Funktion ist in diesen Spurangaben nicht erlaubt, da die Spuren visuell eins-zu-eins mit den Reihen/Spalten im "ASCII-Art" übereinstimmen sollen.

> [!NOTE]
> Der {{cssxref("grid")}} Shorthand akzeptiert die gleiche Syntax, setzt jedoch auch die impliziten Grid-Eigenschaften auf ihre Anfangswerte zurück. Verwenden Sie `grid` (im Gegensatz zu `grid-template`), um zu verhindern, dass diese Werte separat weitergegeben werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren einer Grid-Vorlage

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
- [Linienbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche: Grid-Definition-Shorthands](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
- Video: [Grid-Template-Shorthand](https://gridbyexample.com/video/grid-template-shorthand/)