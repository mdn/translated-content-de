---
title: columns
slug: Web/CSS/Reference/Properties/columns
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`columns`**-Kurzschreibweise der [CSS](/de/docs/Web/CSS) Eigenschaft legt die Anzahl der Spalten fest, die bei der Darstellung des Inhalts eines Elements verwendet werden sollen, sowie die Breite dieser Spalten.

{{InteractiveExample("CSS Demo: columns")}}

```css interactive-example-choice
columns: 2;
```

```css interactive-example-choice
columns: 6rem auto;
```

```css interactive-example-choice
columns: 12em;
```

```css interactive-example-choice
columns: 3;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  min-width: 21rem;
  text-align: left;
}
```

## Teil-Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`column-count`](/de/docs/Web/CSS/Reference/Properties/column-count)
- [`column-width`](/de/docs/Web/CSS/Reference/Properties/column-width)

## Syntax

```css
/* Column width */
columns: 18em;

/* Column count */
columns: auto;
columns: 2;

/* Both column width and count */
columns: 2 auto;
columns: auto 12em;
columns: auto auto;

/* Global values */
columns: inherit;
columns: initial;
columns: revert;
columns: revert-layer;
columns: unset;
```

Die `columns`-Eigenschaft kann als einer oder zwei der unten aufgeführten Werte angegeben werden, in beliebiger Reihenfolge.

### Werte

- `<'column-width'>`
  - : Die ideale Spaltenbreite, definiert als ein {{cssxref("&lt;length&gt;")}} oder das Schlüsselwort `auto`. Die tatsächliche Breite kann breiter oder schmaler sein, um in den verfügbaren Raum zu passen. Siehe {{cssxref("column-width")}}.
- `<'column-count'>`
  - : Die ideale Anzahl von Spalten, in die der Inhalt des Elements fließen soll, definiert als ein {{cssxref("&lt;integer&gt;")}} oder das Schlüsselwort `auto`. Wenn weder dieser Wert noch die Breite der Spalten `auto` sind, wird lediglich die maximal zulässige Anzahl von Spalten angegeben. Siehe {{cssxref("column-count")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von drei gleichen Spalten

#### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns using the CSS `columns`
  property. The text is equally distributed over the columns.
</p>
```

#### CSS

```css
.content-box {
  columns: 3 auto;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_three_equal_columns', 'auto', 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("widows")}}
- {{cssxref("orphans")}}
- [Paged media](/de/docs/Web/CSS/CSS_paged_media)
- [Lernen: Mehrspaltiges Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
