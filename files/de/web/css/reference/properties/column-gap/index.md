---
title: "`column-gap` CSS property"
short-title: column-gap
slug: Web/CSS/Reference/Properties/column-gap
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

Die **`column-gap`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe der Lücke ({{Glossary("Gutters", "Gutter")}}) zwischen den Spalten eines Elements in Mehrspalten-, Flexbox- und Grid-Layouts fest.

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

Diese Eigenschaft wird als ein einziger Wert aus der folgenden Liste angegeben:

- `normal`
  - : Für das Mehrspaltenlayout entspricht es `1em`; ansonsten `0`. Dies ist der Standardwert.
- {{CSSxRef("&lt;length&gt;")}}
  - : Die Größe der Lücke zwischen den Spalten, als nicht-negativer {{CSSxRef("&lt;length&gt;")}} Wert.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Die Größe der Lücke zwischen den Spalten, als nicht-negativer {{CSSxRef("&lt;percentage&gt;")}} Wert definiert.

## Beschreibung

Die `column-gap`-Eigenschaft legt die Größe der Lücke zwischen den Spalten eines Elements fest. Die Eigenschaft spezifiziert eine Gutter mit fester Länge zwischen Elementen in einem Container, die Boxen in der Inline-Achse des Containers trennt. Negative Werte sind ungültig. Der Standardwert `normal` entspricht `1em` bei Mehrspaltencontainern und ansonsten `0`.

Prozentsätze werden basierend auf der Größe des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) der Inline-Achse des Containerelements berechnet, wenn diese Größe fest ist, ansonsten basierend auf `0`, außer im Grid-Layout, bei dem zyklische Prozentgrößen sich gegen Null zur Bestimmung der {{Glossary("intrinsic_size", "intrinsischen Größe")}} beitragen, aber gegen den Inhaltsbereich des Elements auflösen, wenn der Inhalt angeordnet wird.

Die Spaltenlücke kann einen sichtbaren Separator als Dekoration enthalten. Wenn eine Linie zwischen den Spalten vorhanden ist, die mit der {{cssxref("column-rule")}}-Eigenschaft oder der {{cssxref("rule")}}-Kurzschrift gesetzt ist, erscheint sie in der Mitte der Lücke, hat jedoch keinen Einfluss auf die Größe der Lücken zwischen den Spalten.

Ein veraltetes `grid-column-gap` ist ein Alias für `column-gap`. Es wurde ursprünglich im [Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) definiert, um Lücken zwischen Rasterspalten zu erstellen.

Das `column-gap`, zusammen mit der {{cssxref("row-gap")}}-Eigenschaft, kann auch mit der {{cssxref("gap")}}-Kurzschrift gesetzt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex-Layout

In diesem Beispiel enthält ein Flexcontainer sechs Flex-Elemente mit zwei verschiedenen Breiten (`200px` und `300px`), wodurch Flex-Elemente entstehen, die nicht als Raster angeordnet sind. Die `column-gap`-Eigenschaft wird verwendet, um horizontalen Raum zwischen den angrenzenden Flex-Elementen hinzuzufügen.

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

Um einen Flex-Container zu erstellen, setzen wir seinen {{cssxref("display")}}-Wert auf `flex`. Wir verwenden dann die {{cssxref("flex-flow")}}-Kurzschrift, um die {{cssxref("flex-direction")}} auf Zeile (Standard) und {{cssxref("flex-wrap")}} auf `wrap` zu setzen, wodurch es den Flex-Elementen ermöglicht wird, bei Bedarf auf neue Zeilen zu fließen. Standardmäßig dehnen sich Flex-Elemente, um so hoch wie ihr Container zu sein. Durch Setzen einer {{cssxref("height")}} werden selbst leere Flex-Elemente `100px` hoch.

Um die `column-gap`-Eigenschaft besser zu demonstrieren, haben die Flex-Elemente in diesem Beispiel zwei verschiedene Breiten. Die Breite der Flex-Elemente wird innerhalb der `<div>`-Flex-Elemente festgelegt. Wir verwenden die {{cssxref("flex-basis")}}-Komponente der {{cssxref("flex")}}-Kurzschrift, um alle Flex-Elemente `200px` breit zu machen. Wir zielen dann auf jedes dritte Flex-Element mit dem {{cssxref(":nth-of-type", ":nth-of-type(3n)")}}-Selektor ab und erweitern sie auf `300px`.

Der `column-gap`-Wert wird auf `20px` am Flex-Container gesetzt, um eine `20px` Lücke zwischen den angrenzenden Flex-Elementen in jeder Zeile zu schaffen.

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
> Während es horizontalen Raum zwischen angrenzenden Flex-Elementen in jeder Flex-Zeile gibt, gibt es keinen Raum zwischen den Zeilen. Um vertikalen Raum zwischen Flex-Zeilen zu setzen, können Sie einen von `0` verschiedenen Wert für die {{cssxref("row-gap")}}-Eigenschaft angeben. Die {{cssxref("gap")}}-Kurzschrift ist auch verfügbar, um sowohl die `row-gap` als auch die `column-gap` in einer Anweisung zu setzen, in dieser Reihenfolge.

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
- [Grundkonzepte des Grid-Layouts: Gutters](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [Spalten stylen](/de/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
- [CSS Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
