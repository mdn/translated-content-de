---
title: columns
slug: Web/CSS/columns
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`columns`** [CSS](/de/docs/Web/CSS) Kurzschreibweise legt die Anzahl der Spalten fest, die verwendet werden sollen, um die Inhalte eines Elements darzustellen, sowie die Breiten dieser Spalten.

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

## Bestandskomponenten

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`column-count`](/de/docs/Web/CSS/column-count)
- [`column-width`](/de/docs/Web/CSS/column-width)

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

Die `columns`-Eigenschaft kann in beliebiger Reihenfolge als einer oder zwei der unten aufgeführten Werte angegeben werden.

### Werte

- `<'column-width'>`
  - : Die ideale Spaltenbreite, definiert als ein {{cssxref("&lt;length&gt;")}} oder das Schlüsselwort `auto`. Die tatsächliche Breite kann breiter oder schmaler sein, um den verfügbaren Platz anzupassen. Siehe {{cssxref("column-width")}}.
- `<'column-count'>`
  - : Die ideale Anzahl von Spalten, in die der Inhalt eines Elements geflossen werden soll, definiert als ein {{cssxref("&lt;integer&gt;")}} oder das Schlüsselwort `auto`. Wenn weder dieser Wert noch die Breite der Spalte `auto` sind, gibt er lediglich die maximal zulässige Anzahl von Spalten an. Siehe {{cssxref("column-count")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei gleichmäßige Spalten festlegen

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
- [Seitenaufrufe-Medien](/de/docs/Web/CSS/CSS_paged_media)
- [Lernen: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
