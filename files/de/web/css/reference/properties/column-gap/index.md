---
title: column-gap
slug: Web/CSS/Reference/Properties/column-gap
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`column-gap`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Größe des Abstands ({{Glossary("Gutters", "Einzug")}}) zwischen den Spalten eines Elements fest.

Ursprünglich ein Teil des [Mehrspalten-Layouts](/de/docs/Web/CSS/Guides/Multicol_layout), wurde die Definition von `column-gap` erweitert, um mehrere Layoutmethoden zu umfassen. Es wird jetzt im [CSS-Kasten-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) spezifiziert und kann in Mehrspalten-, flexiblen Box- und Raster-Layouts verwendet werden.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-column-gap`, und um die Kompatibilität mit älteren Websites zu wahren, akzeptieren Browser weiterhin `grid-column-gap` als Alias für `column-gap`.

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

Die Eigenschaft `column-gap` wird als einer der unten aufgeführten Werte angegeben.

### Werte

- `normal`
  - : Der Standardabstand des Browsers wird zwischen den Spalten verwendet. Für das Mehrspalten-Layout ist dieser als `1em` angegeben. Für alle anderen Layouttypen ist es 0.
- {{CSSxRef("&lt;length&gt;")}}
  - : Die Größe des Abstands zwischen den Spalten wird als {{CSSxRef("&lt;length&gt;")}} definiert. Der Wert der {{CSSxRef("&lt;length&gt;")}}-Eigenschaft muss nicht negativ sein.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Die Größe des Abstands zwischen den Spalten wird als {{CSSxRef("&lt;percentage&gt;")}} definiert. Der Wert der {{CSSxRef("&lt;percentage&gt;")}}-Eigenschaft muss nicht negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex-Layout

In diesem Beispiel enthält ein Flex-Container sechs Flex-Elemente unterschiedlicher Breiten (`200px` und `300px`), wodurch Flex-Elemente entstehen, die nicht als Raster angeordnet sind. Die Eigenschaft `column-gap` wird verwendet, um horizontalen Abstand zwischen den angrenzenden Flex-Elementen hinzuzufügen.

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

Um einen Flex-Container zu erstellen, setzen wir den Wert der {{cssxref("display")}}-Eigenschaft auf `flex`. Wir verwenden dann die {{cssxref("flex-flow")}} Kurzform-Eigenschaft, um die {{cssxref("flex-direction")}} auf Zeile (der Standardwert) und {{cssxref("flex-wrap")}} auf `wrap` einzustellen, damit die Flex-Elemente bei Bedarf auf neue Zeilen fließen können. Standardmäßig dehnen sich Flex-Elemente, um so hoch wie ihr Container zu sein. Durch das Festlegen einer {{cssxref("height")}}, werden sogar die leeren Flex-Elemente `100px` hoch sein.

Um die `column-gap`-Eigenschaft besser zu veranschaulichen, haben die Flex-Elemente in diesem Beispiel zwei unterschiedliche Breitenwerte. Die Breite der Flex-Elemente wird innerhalb der `<div>` Flex-Elemente festgelegt. Wir verwenden die {{cssxref("flex-basis")}} Komponente der {{cssxref("flex")}} Kurzform-Eigenschaft, um alle Flex-Elemente `200px` breit zu machen. Wir richten dann jedes dritte Flex-Element mit dem {{cssxref(":nth-of-type", ":nth-of-type(3n)")}} Selektor aus, indem wir sie auf `300px` erweitern.

Der `column-gap`-Wert wird auf dem Flex-Container als `20px` festgelegt, um einen `20px`-Abstand zwischen den angrenzenden Flex-Elementen in jeder Zeile zu schaffen.

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
> Während es horizontalen Abstand zwischen den angrenzenden Flex-Elementen in jeder Flex-Reihe gibt, gibt es keinen Abstand zwischen den Reihen. Um vertikalen Abstand zwischen Flex-Reihen festzulegen, können Sie einen von null verschiedenen Wert für die {{cssxref("row-gap")}}-Eigenschaft angeben. Die {{cssxref("gap")}} Kurzform-Eigenschaft steht ebenfalls zur Verfügung, um sowohl den `row-gap` als auch den `column-gap` in einer Deklaration festzulegen, in dieser Reihenfolge.

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

### Multi-Spalten-Layout

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
- [Grundlagen des Rasterlayouts: Einzüge](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [Styling von Spalten](/de/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
