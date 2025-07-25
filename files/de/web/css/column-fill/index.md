---
title: column-fill
slug: Web/CSS/column-fill
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`column-fill`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie der Inhalt eines Elements ausgeglichen wird, wenn er in Spalten aufgeteilt wird.

{{InteractiveExample("CSS Demo: column-fill")}}

```css interactive-example-choice
column-fill: auto;
```

```css interactive-example-choice
column-fill: balance;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 100%;
  height: 90%;
  columns: 3;
  text-align: left;
}
```

## Syntax

```css
/* Keyword values */
column-fill: auto;
column-fill: balance;

/* Global values */
column-fill: inherit;
column-fill: initial;
column-fill: revert;
column-fill: revert-layer;
column-fill: unset;
```

Die `column-fill` Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben. Der Anfangswert ist `balance`, sodass der Inhalt gleichmäßig auf die Spalten verteilt wird.

### Werte

- `auto`
  - : Die Spalten werden der Reihe nach gefüllt. Der Inhalt nimmt nur den Platz ein, den er benötigt, was möglicherweise dazu führt, dass einige Spalten leer bleiben.
- `balance`
  - : Der Inhalt wird gleichmäßig auf die Spalten verteilt. In fragmentierten Kontexten, wie z.B. [seitengesteuerten Medien](/de/docs/Web/CSS/CSS_paged_media), wird nur das letzte Fragment ausgeglichen. Daher wird in seitengesteuerten Medien nur die letzte Seite ausgeglichen.

Die Spezifikation definiert einen `balance-all` Wert, bei dem der Inhalt in fragmentierten Kontexten, wie z.B. [seitengesteuerten Medien](/de/docs/Web/CSS/CSS_paged_media), gleichmäßig auf die Spalten verteilt wird. Dieser Wert wird noch von keinem Browser unterstützt.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Ausgleichen von Spalteninhalten

#### HTML

```html
<p class="fill-auto">
  This paragraph fills columns one at a time. Since all of the text can fit in
  the first column, the others are empty.
</p>

<p class="fill-balance">
  This paragraph attempts to balance the amount of content in each column.
</p>
```

#### CSS

```css
p {
  height: 7em;
  background: #ff9;
  columns: 3;
  column-rule: 1px solid;
}

p.fill-auto {
  column-fill: auto;
}

p.fill-balance {
  column-fill: balance;
}
```

#### Ergebnis

{{EmbedLiveSample('Balancing_column_content', 'auto', 320)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

> [!WARNING]
> Es gibt einige Interoperabilitätsprobleme und Fehler bei `column-fill` über verschiedene Browser hinweg, aufgrund ungelöster Probleme in der Spezifikation.
>
> Insbesondere bei Verwendung von `column-fill: auto` zum sequentiellen Füllen von Spalten wird Chrome diese Eigenschaft nur berücksichtigen, wenn der Multicol-Container eine Größe in der Blockdimension hat (z.B. Höhe im horizontalen Schreibmodus). Firefox wird diese Eigenschaft immer berücksichtigen und daher die erste Spalte mit dem gesamten Inhalt füllen, wenn keine Größe vorhanden ist.

## Siehe auch

- [Lernen: Mehrspaltiges Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-count")}}
- {{CSSXref("column-width")}}
