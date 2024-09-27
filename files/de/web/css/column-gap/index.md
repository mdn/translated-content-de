---
title: column-gap
slug: Web/CSS/column-gap
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`column-gap`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Größe des Abstands ([Gutter](/de/docs/Glossary/Gutters)) zwischen den Spalten eines Elements fest.

Ursprünglich Teil des [Multi-column Layout](/de/docs/Web/CSS/CSS_multicol_layout), wurde die Definition von `column-gap` erweitert, um mehrere Layoutmethoden zu umfassen. Jetzt in der [CSS box alignment](/de/docs/Web/CSS/CSS_box_alignment) spezifiziert, kann es in Multi-Column-, Flexbox- und Grid-Layouts verwendet werden.

Frühere Versionen der Spezifikation bezeichneten diese Eigenschaft als `grid-column-gap`, und um die Kompatibilität mit älteren Websites zu gewährleisten, akzeptieren Browser weiterhin `grid-column-gap` als Alias für `column-gap`.

{{EmbedInteractiveExample("pages/css/column-gap.html")}}

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

Die `column-gap`-Eigenschaft wird als einer der unten aufgeführten Werte spezifiziert.

### Werte

- `normal`
  - : Der Standardabstand des Browsers wird zwischen den Spalten verwendet. Für das Multi-Column-Layout wird dieser als `1em` festgelegt. Für alle anderen Layouttypen beträgt er 0.
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

In diesem Beispiel enthält ein Flex-Container sechs Flex-Elemente mit zwei unterschiedlichen Breiten (`200px` und `300px`), wodurch Flex-Elemente entstehen, die nicht als Raster angeordnet sind. Die `column-gap`-Eigenschaft wird verwendet, um horizontalen Raum zwischen den benachbarten Flex-Elementen hinzuzufügen.

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

Um einen Flex-Container zu erstellen, setzen wir den Wert der {{cssxref("display")}}-Eigenschaft auf `flex`. Wir verwenden dann die {{cssxref("flex-flow")}}-Kurzschreibweise, um die {{cssxref("flex-direction")}} auf Zeile (Standard) und {{cssxref("flex-wrap")}} auf `wrap` einzustellen, sodass die Flex-Elemente bei Bedarf auf neue Zeilen übergehen können. Standardmäßig dehnen sich Flex-Elemente aus, um so hoch wie ihr Container zu sein. Durch das Setzen einer {{cssxref("height")}} sind auch die leeren Flex-Elemente `100px` hoch.

Um die `column-gap`-Eigenschaft besser zu veranschaulichen, haben die Flex-Elemente in diesem Beispiel zwei unterschiedliche Breitenwerte. Die Breite der Flex-Elemente wird innerhalb der `<div>`-Flex-Elemente festgelegt. Wir verwenden die {{cssxref("flex-basis")}}-Komponente der {{cssxref("flex")}}-Kurzschreibweise, um alle Flex-Elemente `200px` breit zu machen. Dann zielen wir mit dem {{cssxref(":nth-of-type", ":nth-of-type(3n)")}}-Selektor auf jedes dritte Flex-Element, um diese auf `300px` zu erweitern.

Der `column-gap`-Wert wird auf dem Flex-Container auf `20px` gesetzt, um einen `20px`-Abstand zwischen den benachbarten Flex-Elementen in jeder Reihe zu schaffen.

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
> Obwohl zwischen den benachbarten Flex-Elementen in jeder Flex-Zeile horizontaler Raum vorhanden ist, gibt es keinen Abstand zwischen den Zeilen. Um vertikalen Raum zwischen Flex-Zeilen festzulegen, können Sie einen von Null verschiedenen Wert für die {{cssxref("row-gap")}}-Eigenschaft angeben. Die {{cssxref("gap")}}-Kurzschreibweise ist ebenfalls verfügbar, um sowohl den `row-gap` als auch den `column-gap` in einer Deklaration festzulegen, in dieser Reihenfolge.

### Grid-Layout

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

### Multi-Column-Layout

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
- [Grundkonzepte des Grid-Layouts: Gutter](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [Styling von Spalten](/de/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
