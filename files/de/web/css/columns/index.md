---
title: columns
slug: Web/CSS/columns
l10n:
  sourceCommit: 421deed53984505909884b3b290002b228d29e7b
---

{{CSSRef}}

Die **`columns`**-Eigenschaft der [CSS](/de/docs/Web/CSS) Kurznomenklatur legt die Anzahl der Spalten fest, die beim Zeichnen des Inhalts eines Elements verwendet werden sollen, sowie die Breiten dieser Spalten.

{{EmbedInteractiveExample("pages/css/columns.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Die `columns`-Eigenschaft kann in beliebiger Reihenfolge als einer oder zwei der nachfolgend aufgeführten Werte angegeben werden.

### Werte

- `<'column-width'>`
  - : Die ideale Spaltenbreite, definiert als {{cssxref("&lt;length&gt;")}} oder das Schlüsselwort `auto`. Die tatsächliche Breite kann breiter oder schmaler sein, um den verfügbaren Platz auszufüllen. Siehe {{cssxref("column-width")}}.
- `<'column-count'>`
  - : Die ideale Anzahl von Spalten, in die der Inhalt des Elements fließen sollte, definiert als {{cssxref("&lt;integer&gt;")}} oder das Schlüsselwort `auto`. Wenn weder dieser Wert noch die Spaltenbreite `auto` sind, gibt dies lediglich die maximal zulässige Anzahl von Spalten an. Siehe {{cssxref("column-count")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drei gleiche Spalten einstellen

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
- [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media)
- [Mehrspalten-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
