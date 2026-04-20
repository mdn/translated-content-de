---
title: "`grid-template-areas` CSS property"
short-title: grid-template-areas
slug: Web/CSS/Reference/Properties/grid-template-areas
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`grid-template-areas`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt benannte {{Glossary("grid_areas", "Gitternetzbereiche")}} fest, indem sie die Zellen im Raster definiert und ihnen Namen zuweist.

{{InteractiveExample("CSS Demo: grid-template-areas")}}

```css interactive-example-choice
grid-template-areas:
  "a a a"
  "b c c"
  "b c c";
```

```css interactive-example-choice
grid-template-areas:
  "b b a"
  "b b c"
  "b b c";
```

```css interactive-example-choice
grid-template-areas:
  "a a ."
  "a a ."
  ". b c";
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One (a)</div>
      <div>Two (b)</div>
      <div>Three (c)</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
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

Diese Bereiche sind keinem bestimmten Gitternetz-Element zugeordnet, können aber in den Gitterplatzierungs-Eigenschaften {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}} und deren Kurzformen {{cssxref("grid-row")}}, {{cssxref("grid-column")}} und {{cssxref("grid-area")}} referenziert werden.

## Syntax

```css
/* Keyword value */
grid-template-areas: none;

/* <string> values */
grid-template-areas: "a b";
grid-template-areas:
  "a b ."
  "a c d";

/* Global values */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: revert;
grid-template-areas: revert-layer;
grid-template-areas: unset;
```

### Werte

- `none`
  - : Der Gitter-Container definiert keine benannten Gitternetzbereiche.
- {{cssxref("&lt;string&gt;")}}
  - : Für jede separate, aufgeführte Zeichenkette wird eine Zeile erstellt, und für jede Zelle in der Zeichenkette wird eine Spalte erstellt. Mehrere Zell-Tokens mit demselben Namen innerhalb und zwischen den Zeilen erstellen einen einzelnen benannten Gitternetzbereich, der die entsprechenden Gitternetz-Zellen umspannt. Sofern diese Zellen kein Rechteck bilden, ist die Deklaration ungültig.

    Alle verbleibenden unbenannten Bereiche in einem Gitter können mit _Null-Zell-Tokens_ referenziert werden. Ein Null-Zell-Token ist eine Folge von einem oder mehreren `.` (U+002E FULL STOP) Zeichen, z.B. `.`, `...` oder `.....` usw. Ein Null-Zell-Token kann verwendet werden, um leere Räume im Gitter zu erstellen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Benannte Gitternetzbereiche festlegen

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
  height: 250px;
  grid-template-areas:
    "head head"
    "nav  main"
    ".  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#page > header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page > main {
  grid-area: main;
  background-color: #ffff64;
}

#page > footer {
  grid-area: foot;
  background-color: #8cffa0;
}
```

Im obigen Code wurde ein Null-Token (`.`) verwendet, um einen unbenannten Bereich im Gitter-Container zu erstellen, den wir benutzt haben, um einen leeren Raum in der unteren linken Ecke des Gitters zu schaffen.

#### Ergebnis

{{EmbedLiveSample("Specifying_named_grid_areas", "100%", "285px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template")}}
- [Gitternetz-Vorlagenbereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- Video: [Grid template areas](https://gridbyexample.com/video/grid-template-areas/)
