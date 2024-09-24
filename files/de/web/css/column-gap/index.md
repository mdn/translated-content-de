---
title: column-gap
slug: Web/CSS/column-gap
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`column-gap`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe der Lücke ({{glossary("Gutters","gutter")}}) zwischen den Spalten eines Elements fest.

Ursprünglich ein Teil des [Multi-column Layout](/de/docs/Web/CSS/CSS_multicol_layout), wurde die Definition von `column-gap` erweitert, um mehrere Layout-Methoden einzuschließen. Jetzt in [CSS box alignment](/de/docs/Web/CSS/CSS_box_alignment) spezifiziert, kann es in Mehrspalten-, Flexbox- und Grid-Layouts verwendet werden.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-column-gap`, und um die Kompatibilität mit älteren Webseiten zu gewährleisten, akzeptieren Browser weiterhin `grid-column-gap` als Alias für `column-gap`.

{{EmbedInteractiveExample("pages/css/column-gap.html")}}

## Syntax

```css
/* Schlüsselwortwert */
column-gap: normal;

/* <length>-Werte */
column-gap: 3px;
column-gap: 2.5em;

/* <percentage>-Wert */
column-gap: 3%;

/* Globale Werte */
column-gap: inherit;
column-gap: initial;
column-gap: revert;
column-gap: revert-layer;
column-gap: unset;
```

Die `column-gap` Eigenschaft wird als einer der unten aufgeführten Werte spezifiziert.

### Werte

- `normal`
  - : Der Standardabstand des Browsers wird zwischen den Spalten verwendet. Für das Mehrspaltenlayout ist dies als `1em` definiert. Für alle anderen Layouttypen beträgt er 0.
- {{CSSxRef("&lt;length&gt;")}}
  - : Die Größe der Lücke zwischen den Spalten, definiert als eine {{CSSxRef("&lt;length&gt;")}}. Der Wert der {{CSSxRef("&lt;length&gt;")}}-Eigenschaft muss nicht negativ sein.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Die Größe der Lücke zwischen den Spalten, definiert als Prozentwert {{CSSxRef("&lt;percentage&gt;")}}. Der Wert der {{CSSxRef("&lt;percentage&gt;")}}-Eigenschaft muss nicht negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex-Layout

In diesem Beispiel enthält ein Flex-Container sechs Flex-Elemente mit zwei verschiedenen Breiten (`200px` und `300px`), wodurch Flex-Elemente erzeugt werden, die nicht als Raster angeordnet sind. Die `column-gap` Eigenschaft wird verwendet, um horizontalen Abstand zwischen den benachbarten Flex-Elementen hinzuzufügen.

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

Um einen Flex-Container zu erstellen, setzen wir seinen {{cssxref("display")}} Eigenschaftswert auf `flex`. Wir verwenden dann die {{cssxref("flex-flow")}} Kurzschreibweise, um die {{cssxref("flex-direction")}} auf Reihe (Standard) und {{cssxref("flex-wrap")}} auf `wrap` zu setzen, was es den Flex-Elementen ermöglicht, bei Bedarf in neue Zeilen zu fließen. Standardmäßig dehnen sich Flex-Elemente aus, um so hoch wie ihr Container zu sein. Durch das Setzen einer {{cssxref("height")}} sind auch die leeren Flex-Elemente `100px` hoch.

Um die `column-gap` Eigenschaft besser zu demonstrieren, haben die Flex-Elemente in diesem Beispiel zwei unterschiedliche Breiten. Die Breite der Flex-Elemente wird innerhalb der `<div>` Flex-Elemente festgelegt. Wir verwenden die {{cssxref("flex-basis")}} Komponente der {{cssxref("flex")}} Kurzschreibweise, um alle Flex-Elemente `200px` breit zu machen. Wir zielen dann auf jedes dritte Flex-Element mit dem {{cssxref(":nth-of-type", ":nth-of-type(3n)")}} Selektor ab, um sie auf `300px` zu erweitern.

Der `column-gap` Wert wird auf `20px` im Flex-Container gesetzt, um einen `20px`-Spalt zwischen den nebeneinanderliegenden Flex-Elementen in jeder Zeile zu erzeugen.

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
> Während es einen horizontalen Abstand zwischen benachbarten Flex-Elementen in jeder Flexreihe gibt, gibt es keinen Abstand zwischen den Zeilen. Um vertikalen Abstand zwischen Flex-Zeilen zu setzen, können Sie einen von Null verschiedenen Wert für die {{cssxref("row-gap")}} Eigenschaft angeben. Die {{cssxref("gap")}} Kurzschreibweise ist auch verfügbar, um sowohl `row-gap` als auch `column-gap` in einer Deklaration in dieser Reihenfolge festzulegen.

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
- [Grundkonzepte des Grid-Layouts: Rinnen](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [Styling Columns](/de/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
