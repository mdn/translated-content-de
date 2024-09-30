---
title: column-gap
slug: Web/CSS/column-gap
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`column-gap`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe des Abstands ([Rinne](/de/docs/Glossary/Gutters)) zwischen den Spalten eines Elements fest.

Ursprünglich Teil des [Multi-column Layouts](/de/docs/Web/CSS/CSS_multicol_layout), wurde die Definition von `column-gap` erweitert, um mehrere Layout-Methoden einzuschließen. Jetzt in [CSS box alignment](/de/docs/Web/CSS/CSS_box_alignment) spezifiziert, kann es in mehrspaltigen, flexiblen Box- und Rasterlayouts verwendet werden.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-column-gap`, und um die Kompatibilität mit älteren Websites aufrechtzuerhalten, akzeptieren Browser weiterhin `grid-column-gap` als Alias für `column-gap`.

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

Die Eigenschaft `column-gap` wird als einer der unten aufgeführten Werte angegeben.

### Werte

- `normal`
  - : Der Standardabstand des Browsers wird zwischen den Spalten verwendet. Für das mehrspaltige Layout ist dieser als `1em` angegeben. Für alle anderen Layouttypen beträgt er 0.
- {{CSSxRef("&lt;length&gt;")}}
  - : Die Größe des Abstands zwischen den Spalten, definiert als {{CSSxRef("&lt;length&gt;")}}. Der Wert der Eigenschaft {{CSSxRef("&lt;length&gt;")}} muss nicht negativ sein.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Die Größe des Abstands zwischen den Spalten, definiert als {{CSSxRef("&lt;percentage&gt;")}}. Der Wert der Eigenschaft {{CSSxRef("&lt;percentage&gt;")}} muss nicht negativ sein.

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

Um einen Flex-Container zu erstellen, setzen wir den Wert der {{cssxref("display")}}-Eigenschaft auf `flex`. Wir verwenden dann die {{cssxref("flex-flow")}} Kurzschreibweise, um die {{cssxref("flex-direction")}} auf Zeile (Standard) und {{cssxref("flex-wrap")}} auf `wrap` zu setzen, was das Fließen der Flex-Elemente auf neue Zeilen ermöglicht, wenn nötig. Standardmäßig dehnen sich Flex-Elemente, um ebenso hoch wie ihr Container zu sein. Durch Setzen einer {{cssxref("height")}} sind selbst die leeren Flex-Elemente `100px` hoch.

Um die `column-gap`-Eigenschaft besser zu demonstrieren, haben die Flex-Elemente in diesem Beispiel zwei unterschiedliche Breitenwerte. Die Breite der Flex-Elemente wird innerhalb der `<div>` Flex-Elemente festgelegt. Wir verwenden die {{cssxref("flex-basis")}} Komponente der {{cssxref("flex")}} Kurzschreibweise, um alle Flex-Elemente `200px` breit zu machen. Dann zielen wir mit dem {{cssxref(":nth-of-type", ":nth-of-type(3n)")}} Selektor jedes dritte Flex-Element an, um sie auf `300px` zu erweitern.

Der `column-gap` Wert ist im Flex-Container auf `20px` gesetzt, um einen `20px` Abstand zwischen den angrenzenden Flex-Elementen in jeder Zeile zu schaffen.

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
> Während horizontaler Abstand zwischen angrenzenden Flex-Elementen in jeder Flex-Zeile besteht, gibt es keinen Abstand zwischen den Zeilen. Um vertikalen Abstand zwischen Flex-Zeilen zu setzen, können Sie einen Wert ungleich null für die {{cssxref("row-gap")}}-Eigenschaft angeben. Die {{cssxref("gap")}} Kurzschreibweise ist ebenfalls verfügbar, um sowohl `row-gap` als auch `column-gap` in einer Deklaration festzulegen, in dieser Reihenfolge.

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

### Mehrspaltiges Layout

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
- [Grundlegende Konzepte des Rasterlayouts: Rinnen](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [Spalten gestalten](/de/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
