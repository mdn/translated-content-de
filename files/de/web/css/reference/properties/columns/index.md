---
title: "`columns` CSS-Eigenschaft"
short-title: columns
slug: Web/CSS/Reference/Properties/columns
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`columns`** [CSS](/de/docs/Web/CSS)-Kurzschreibweise legt die maximale Anzahl von Spalten fest, die beim Zeichnen des Inhalts eines Elements verwendet werden sollen, zusammen mit der minimalen Breite und der maximalen Höhe der Spalten des Elements.

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

## Konsistente Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("column-count")}}
- {{cssxref("column-width")}}
- {{cssxref("column-height")}}

## Syntax

```css
/* Column width */
columns: 18em;

/* Column count */
columns: auto;
columns: 2;

/* Column width and count */
columns: 2 auto;
columns: auto 12em;
columns: auto auto;

/* Column width and/or count, and column height */
columns: 18em / 10em;
columns: 2 / 90vh;
columns: 2 auto / 300px;

/* Global values */
columns: inherit;
columns: initial;
columns: revert;
columns: revert-layer;
columns: unset;
```

Der Wert der `columns`-Eigenschaft kann als [`<column-count>`](/de/docs/Web/CSS/Reference/Properties/column-count) und/oder als [`<column-width>`](/de/docs/Web/CSS/Reference/Properties/column-width)-Wert angegeben werden, in beliebiger Reihenfolge, optional gefolgt von einem [`<column-height>`](/de/docs/Web/CSS/Reference/Properties/column-height)-Wert, der durch einen Schrägstrich (`/`) vorangestellt ist.

### Werte

- `<'column-width'>`
  - : Die ideale Spaltenbreite, definiert als {{cssxref("&lt;length&gt;")}} oder das Schlüsselwort `auto`. Die tatsächliche Breite kann breiter oder schmaler sein, um in den verfügbaren Raum zu passen. Siehe {{cssxref("column-width")}}.
- `<'column-count'>`
  - : Die ideale Anzahl von Spalten, in die der Inhalt des Elements aufgeteilt werden soll, definiert als {{cssxref("&lt;integer&gt;")}} oder das Schlüsselwort `auto`. Wird dies als `<integer>` angegeben, wird die maximal zulässige Anzahl von Spalten festgelegt. Siehe {{cssxref("column-count")}}.
- `<'column-height'>`
  - : Die Höhe der Spalten, definiert als {{cssxref("&lt;length&gt;")}} oder das Schlüsselwort `auto`. Siehe {{cssxref("column-height")}}.

> [!NOTE]
> Das Setzen eines `<column-height>`-Wertes setzt die {{cssxref("column-wrap")}}-Eigenschaft auf ihren ursprünglichen Wert `auto` zurück. Wenn `<column-height>` auf einen `<length>` gesetzt ist, wird der `auto`-Wert von {{cssxref("column-wrap")}} zu `wrap` aufgelöst. Wenn `<column-height>` auf `auto` gesetzt ist, wird es zu `nowrap` aufgelöst.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei gleiche Spalten einstellen

Dieses Beispiel zeigt, wie man einen Textcontainer in drei gleiche Spalten aufteilt.

#### HTML

Wir fügen ein grundlegendes {{htmlelement("p")}}-Element mit Textinhalt ein.

```html live-sample___three_equal_columns
<p class="content-box">
  This is a bunch of text split into three columns using the CSS
  <code>columns</code>
  property. The text is equally distributed over the columns.
</p>
```

#### CSS

Wir setzen einen `columns`-Eigenschaftswert im Absatz, der einen `<column-count>`-Wert von `3` und einen `<column-width>`-Wert von `auto` enthält.

```css hidden live-sample___three_equal_columns
body {
  width: 60%;
  margin: 0 auto;
}
```

```css live-sample___three_equal_columns
.content-box {
  columns: 3 auto;
}
```

#### Ergebnis

{{EmbedLiveSample('three_equal_columns', 'auto', 120)}}

Beachten Sie, wie der Text in drei Spalten aufgeteilt wird.

### Erstellen von umbrechenden, fixen Höhen-Spalten

Dieses Beispiel zeigt, wie ein `<column-height>`-Wert mit der `columns`-Kurzschreibweise hinzugefügt wird, um einen Textcontainer in Spalten mit fester Höhe zu unterteilen, die auf neue Zeilen umschlagen, wenn die Inline-Kante des Containers erreicht ist.

#### HTML

Wir fügen ein grundlegendes {{htmlelement("p")}}-Element mit etwas Text ein.

```html live-sample___fixed-height
<p class="content-box">
  This is a bunch of text split into three columns using the CSS
  <code>columns</code> property. This includes a <code>column-count</code> value
  of <code>3</code>, a <code>column-width</code> value of <code>auto</code>, and
  a <code>column-height</code> value of <code>5em</code>. The
  <code>column-wrap</code> value is set to its initial value, <code>auto</code>;
  when a <code>column-height</code> value is included,
  <code>column-wrap: auto</code> resolves to <code>wrap</code>, which allows the
  columns to wrap onto multiple rows. The text is equally distributed over the
  columns, and placed into multiple rows.
</p>
```

#### CSS

Wir setzen einen `columns`-Eigenschaftswert im Absatz, der einen `<column-count>`-Wert von `3`, einen `<column-width>`-Wert von `auto` und einen `<column-height>`-Wert von `5em` enthält. Da `<column-height>` auf einen `<length>` gesetzt ist, berechnet sich der {{cssxref("column-wrap")}}-Wert des Absatzes zu `wrap`, was es den Spalten ermöglicht, auf mehrere Zeilen umzubrechen.

```css live-sample___fixed-height
.content-box {
  columns: 3 auto / 5em;
}
```

```css hidden live-sample___fixed-height
body {
  width: 60%;
  margin: 0 auto;
}
```

```css hidden live-sample___fixed-height
@supports not (columns: 3 auto / 5em) {
  body::before {
    content: "Your browser does not support the 'column-height' property.";
    background-color: wheat;
    position: fixed;
    inset: 40% 0;
    height: fit-content;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Ergebnis

{{EmbedLiveSample('fixed-height', 'auto', 320)}}

Beachten Sie, wie der Text in drei Spalten aufgeteilt wird. Jede Spalte ist `5em` hoch. Nach jeder dritten Spalte schlagen die Spalten in Blockrichtung auf eine neue Zeile um.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("widows")}}
- {{cssxref("orphans")}}
- [Paginierte Medien](/de/docs/Web/CSS/Guides/Paged_media)
- [Lernen: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
