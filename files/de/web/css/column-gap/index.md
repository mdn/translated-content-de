---
title: column-gap
slug: Web/CSS/column-gap
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`column-gap`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Größe des Abstands ({{Glossary("Gutters", "Gutter")}}) zwischen den Spalten eines Elements fest.

Ursprünglich Teil des [Multi-column Layout](/de/docs/Web/CSS/CSS_multicol_layout), wurde die Definition von `column-gap` erweitert, um mehrere Layout-Methoden einzuschließen. Jetzt in der [CSS box alignment](/de/docs/Web/CSS/CSS_box_alignment) angegeben, kann es in mehrspaltigen, flexiblen Box- und Raster-Layouts verwendet werden.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-column-gap`, und um die Kompatibilität mit älteren Websites zu gewährleisten, akzeptieren Browser immer noch `grid-column-gap` als Alias für `column-gap`.

{{InteractiveExample("CSS Demo: column-gap")}}

```css interactive-example-choice
column-gap: 0;
```

```css interactive-example-choice
column-gap: 10%;
```

```css interactive-example-choice
column-gap: 1em;
```

```css interactive-example-choice
column-gap: 20px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 200px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntax

```css
/* Keyword value */
column-gap: normal;

/* <length> values */
column-gap: 3px;
column-gap: 2.5em;

/* <percentage> value */
column-gap: 3%;

/* Global values */
column-gap: inherit;
column-gap: initial;
column-gap: revert;
column-gap: revert-layer;
column-gap: unset;
```

Die `column-gap`-Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte

- `normal`
  - : Der Standardabstand des Browsers wird zwischen den Spalten verwendet. Bei mehrspaltigem Layout wird dies als `1em` angegeben. Für alle anderen Layouttypen beträgt er 0.
- {{CSSxRef("&lt;length&gt;")}}
  - : Die Größe des Abstands zwischen den Spalten, definiert als {{CSSxRef("&lt;length&gt;")}}. Der Wert der {{CSSxRef("&lt;length&gt;")}}-Eigenschaft muss nicht negativ sein.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Die Größe des Abstands zwischen den Spalten, definiert als {{CSSxRef("&lt;percentage&gt;")}}. Der Wert der {{CSSxRef("&lt;percentage&gt;")}}-Eigenschaft muss nicht negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex-Layout

In diesem Beispiel enthält ein Flex-Container sechs Flex-Elemente mit zwei unterschiedlichen Breiten (`200px` und `300px`), wodurch Flex-Elemente entstehen, die nicht als Raster angeordnet sind. Die `column-gap`-Eigenschaft wird verwendet, um horizontalen Abstand zwischen den angrenzenden Flex-Elementen hinzuzufügen.

#### HTML

```html
<div class="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

Um einen Flex-Container zu erstellen, setzen wir seinen Wert der {{cssxref("display")}}-Eigenschaft auf `flex`. Wir verwenden dann die {{cssxref("flex-flow")}}-Kurzform-Eigenschaft, um die {{cssxref("flex-direction")}} auf Reihe (Standard) und {{cssxref("flex-wrap")}} auf `wrap` zu setzen, wodurch die Flex-Elemente bei Bedarf auf neue Zeilen fließen können. Standardmäßig dehnen sich Flex-Elemente so aus, dass sie so hoch sind wie ihr Container. Durch das Setzen einer {{cssxref("height")}}, sind auch leere Flex-Elemente `100px` hoch.

Um die `column-gap`-Eigenschaft besser zu demonstrieren, haben die Flex-Elemente in diesem Beispiel zwei verschiedene Breiten. Die Breite der Flex-Elemente wird innerhalb der `<div>`-Flex-Elemente festgelegt. Wir verwenden die {{cssxref("flex-basis")}} Komponente der {{cssxref("flex")}}-Kurzform-Eigenschaft, um alle Flex-Elemente `200px` breit zu machen. Wir zielen dann jedes dritte Flex-Element mit dem {{cssxref(":nth-of-type", ":nth-of-type(3n)")}}-Selektor an und erweitern es auf `300px`.

Der Wert von `column-gap` wird auf `20px` im Flex-Container gesetzt, um einen `20px` Abstand zwischen den angrenzenden Flex-Elementen in jeder Reihe zu erzeugen.

```css
.flexbox {
  display: flex;
  flex-flow: row wrap;
  height: 100px;
  column-gap: 20px;
}

.flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 200px;
}
div:nth-of-type(3n) {
  flex: 300px;
}
```

#### Ergebnis

{{EmbedLiveSample("Flex_layout", "auto", "220px")}}

> [!NOTE]
> Während es horizontalen Raum zwischen angrenzenden Flex-Elementen in jeder Flex-Reihe gibt, gibt es keinen Raum zwischen den Reihen. Um vertikalen Raum zwischen Flex-Reihen zu setzen, können Sie einen Wert ungleich Null für die {{cssxref("row-gap")}}-Eigenschaft angeben. Die {{cssxref("gap")}}-Kurzform-Eigenschaft steht auch zur Verfügung, um sowohl `row-gap` als auch `column-gap` in einer Deklaration zu setzen, in dieser Reihenfolge.

### Raster-Layout

#### HTML

```html
<div id="grid">
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
#grid {
  display: grid;
  height: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  column-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Ergebnis

{{EmbedLiveSample("Grid_layout", "auto", "220px")}}

### Mehrspalten-Layout

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column gap created with the CSS
  `column-gap` property. Don't you think that's fun and exciting? I sure do!
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  column-gap: 40px;
}
```

#### Ergebnis

{{EmbedLiveSample("Multi-column_layout", "auto", "120px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("gap")}}
- [Grundkonzepte des Raster-Layouts: Rinnen (Gutters)](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [Styling von Spalten](/de/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
