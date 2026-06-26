---
title: "`column-gap` CSS property"
short-title: column-gap
slug: Web/CSS/Reference/Properties/column-gap
l10n:
  sourceCommit: 53745a2089268ce62bf79695d7d347bcbd0abe57
---

Die **`column-gap`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Größe des Abstands ({{Glossary("Gutters", "Gutter")}}) zwischen den Spalten eines Elements in Mehrspalten-, flexiblen Box- und Raster-Layouts fest.

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

/* <length-percentage> values */
column-gap: 3px;
column-gap: 2.5em;
column-gap: 3%;
column-gap: calc(3% - 6px);

/* Global values */
column-gap: inherit;
column-gap: initial;
column-gap: revert;
column-gap: revert-layer;
column-gap: unset;
```

### Werte

- `normal`
  - : Bei Mehrspalten-Layouts wird auf `1em` aufgelöst; andernfalls `0`. Dies ist der Standardwert.
- {{CSSxRef("&lt;length&gt;")}}
  - : Die Größe des Abstands zwischen den Spalten, als nicht-negativer {{CSSxRef("&lt;length&gt;")}}-Wert.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Die Größe des Abstands zwischen den Spalten, definiert als nicht-negativer {{CSSxRef("&lt;percentage&gt;")}}-Wert.

## Beschreibung

Die `column-gap`-Eigenschaft legt die Größe des Abstands zwischen den Spalten eines Elements fest. Die Eigenschaft gibt einen feste Länge des Gutter zwischen Elementen in einem Container an, die Boxen im Inline-Achse des Containers trennt. Negative Werte sind ungültig. Der Standardwert `normal` wird auf `1em` bei Mehrspalten-Containern aufgelöst und auf `0` an allen anderen Stellen.

Prozentwerte werden berechnet basierend auf der Größe des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) der Inline-Achse des Container-Elements, wenn diese Größe bestimmt ist, andernfalls gegen `0`, mit Ausnahme in Raster-Layouts, bei denen zyklische Prozentgrößen gegen null für die Bestimmung der {{Glossary("intrinsic_size", "intrinsischen Größe")}} aufgelöst werden, aber gegen den Inhaltsbereich des Elements, wenn die Inhalte angeordnet werden.

Der Spaltenabstand kann einen sichtbaren Separator als Dekoration enthalten. Wenn es eine Linie zwischen den Spalten gibt, festgelegt mit der {{cssxref("column-rule")}}-Eigenschaft oder der {{cssxref("rule")}}-Kurzschrift, erscheint sie in der Mitte des Abstands, hat jedoch keine Auswirkung auf die Größe der Abstände zwischen den Spalten.

Ein veraltetes `grid-column-gap` ist ein Alias für `column-gap`. Es wurde ursprünglich im [Raster-Layout](/de/docs/Web/CSS/Guides/Grid_layout) definiert, um Lücken zwischen Rasterspalten zu erstellen.

Der `column-gap`, zusammen mit der {{cssxref("row-gap")}}-Eigenschaft, kann auch mit der {{cssxref("gap")}}-Kurzschrift gesetzt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex-Layout

In diesem Beispiel enthält ein Flex-Container sechs Flex-Elemente mit zwei verschiedenen Breiten (`200px` und `300px`), wodurch Flex-Elemente entstehen, die nicht als Raster angeordnet sind. Die `column-gap`-Eigenschaft wird verwendet, um horizontalen Raum zwischen den angrenzenden Flex-Elementen hinzuzufügen.

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

Um einen Flex-Container zu erstellen, setzen wir seinen Wert der {{cssxref("display")}}-Eigenschaft auf `flex`. Wir verwenden dann die {{cssxref("flex-flow")}}-Kurzschrift, um die {{cssxref("flex-direction")}} auf Reihe (Standard) und {{cssxref("flex-wrap")}} auf `wrap` zu setzen, sodass die Flex-Elemente bei Bedarf auf neue Zeilen fließen können. Standardmäßig dehnen sich Flex-Elemente, um genauso hoch wie ihr Container zu sein. Durch das Setzen einer {{cssxref("height")}}, werden auch die leeren Flex-Elemente `100px` hoch.

Um die `column-gap`-Eigenschaft besser zu demonstrieren, haben die Flex-Elemente in diesem Beispiel zwei unterschiedliche Breitenwerte. Die Breite der Flex-Elemente wird innerhalb der `<div>`-Flex-Elemente festgelegt. Wir verwenden die {{cssxref("flex-basis")}}-Komponente der {{cssxref("flex")}}-Kurzschrift, um alle Flex-Elemente `200px` breit zu machen. Wir zielen dann auf jedes dritte Flex-Element ab, indem wir den {{cssxref(":nth-of-type", ":nth-of-type(3n)")}}-Selektor verwenden und sie auf `300px` erweitern.

Der `column-gap`-Wert wird auf `20px` am Flex-Container gesetzt, um einen `20px`-Abstand zwischen den angrenzenden Flex-Elementen in jeder Reihe zu erzeugen.

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
> Während es horizontalen Raum zwischen angrenzenden Flex-Elementen in jeder Flex-Reihe gibt, gibt es keinen Raum zwischen den Reihen. Um vertikalen Abstand zwischen Flex-Reihen zu setzen, können Sie einen von null verschiedenen Wert für die {{cssxref("row-gap")}}-Eigenschaft angeben. Die {{cssxref("gap")}}-Kurzschrift ist ebenfalls verfügbar, um sowohl den `row-gap` als auch den `column-gap` in einer Deklaration in dieser Reihenfolge zu setzen.

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
- [Grundlegende Konzepte des Raster-Layouts: Gutter](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [Spalten stylen](/de/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
- [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
