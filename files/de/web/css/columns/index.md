---
title: columns
slug: Web/CSS/columns
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`columns`** [CSS](/de/docs/Web/CSS) Kurzschreibweise legt die Anzahl der Spalten fest, die bei der Darstellung des Inhalts eines Elements verwendet werden, sowie die Breiten dieser Spalten.

{{EmbedInteractiveExample("pages/css/columns.html")}}

## Bestandteile der Eigenschaften

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

Die `columns`-Eigenschaft kann mit einem oder zwei der unten aufgeführten Werte in beliebiger Reihenfolge angegeben werden.

### Werte

- `<'column-width'>`
  - : Die ideale Spaltenbreite, definiert als ein {{cssxref("&lt;length&gt;")}} oder das Schlüsselwort `auto`. Die tatsächliche Breite kann größer oder kleiner sein, um in den verfügbaren Raum zu passen. Siehe {{cssxref("column-width")}}.
- `<'column-count'>`
  - : Die ideale Anzahl von Spalten, in die der Inhalt des Elements fließen soll, definiert als ein {{cssxref("&lt;integer&gt;")}} oder das Schlüsselwort `auto`. Wenn weder dieser Wert noch die Breite der Spalten `auto` sind, wird lediglich die maximal zulässige Anzahl von Spalten angegeben. Siehe {{cssxref("column-count")}}.

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
- [Seitengestaltung für Medien](/de/docs/Web/CSS/CSS_paged_media)
- [Lernen: Mehrspaltiges Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
