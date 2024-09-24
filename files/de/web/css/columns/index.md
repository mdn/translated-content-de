---
title: Spalten
slug: Web/CSS/columns
l10n:
  sourceCommit: 421deed53984505909884b3b290002b228d29e7b
---

{{CSSRef}}

Die **`columns`** [CSS](/de/docs/Web/CSS) Kurzschreibweise legt die Anzahl der Spalten fest, die beim Zeichnen der Inhalte eines Elements verwendet werden sollen, sowie die Breite dieser Spalten.

{{EmbedInteractiveExample("pages/css/columns.html")}}

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`column-count`](/de/docs/Web/CSS/column-count)
- [`column-width`](/de/docs/Web/CSS/column-width)

## Syntax

```css
/* Spaltenbreite */
columns: 18em;

/* Spaltenanzahl */
columns: auto;
columns: 2;

/* Sowohl Spaltenbreite als auch Anzahl */
columns: 2 auto;
columns: auto 12em;
columns: auto auto;

/* Globale Werte */
columns: inherit;
columns: initial;
columns: revert;
columns: revert-layer;
columns: unset;
```

Die `columns`-Eigenschaft kann als einer oder zwei der unten aufgeführten Werte angegeben werden, in beliebiger Reihenfolge.

### Werte

- `<'column-width'>`
  - : Die ideale Spaltenbreite, definiert als ein {{cssxref("&lt;length&gt;")}} oder das Schlüsselwort `auto`. Die tatsächliche Breite kann breiter oder schmaler sein, um den verfügbaren Platz auszufüllen. Siehe {{cssxref("column-width")}}.
- `<'column-count'>`
  - : Die ideale Anzahl der Spalten, in die der Inhalt des Elements fließen soll, definiert als ein {{cssxref("&lt;integer&gt;")}} oder das Schlüsselwort `auto`. Wenn weder dieser Wert noch die Spaltenbreite `auto` sind, wird lediglich die maximal zulässige Anzahl von Spalten angegeben. Siehe {{cssxref("column-count")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei gleiche Spalten festlegen

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
- [Mehrspaltiges Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
