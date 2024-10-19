---
title: column-fill
slug: Web/CSS/column-fill
l10n:
  sourceCommit: 0e5565b100dc7965e2d168fb51e915d979e85cdb
---

{{CSSRef}}

Die **`column-fill`**-[CSS](/de/docs/Web/CSS)-Eigenschaft steuert, wie der Inhalt eines Elements ausgeglichen wird, wenn er in Spalten aufgeteilt wird.

{{EmbedInteractiveExample("pages/css/column-fill.html")}}

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

Die Eigenschaft `column-fill` wird als eines der unten aufgeführten Schlüsselwortwerte angegeben. Der Anfangswert ist `balance`, sodass der Inhalt über die Spalten ausgewogen wird.

### Werte

- `auto`
  - : Spalten werden der Reihe nach gefüllt. Der Inhalt nimmt nur den benötigten Platz ein, was möglicherweise dazu führt, dass einige Spalten leer bleiben.
- `balance`
  - : Der Inhalt wird gleichmäßig zwischen den Spalten aufgeteilt. In fragmentierten Kontexten, wie z.B. [Paginierte Medien](/de/docs/Web/CSS/CSS_paged_media), wird nur das letzte Fragment ausbalanciert. Daher würde in paginierten Medien nur die letzte Seite ausbalanciert werden.

Die Spezifikation definiert einen `balance-all`-Wert, bei dem der Inhalt in fragmentierten Kontexten, wie z.B. [Paginierte Medien](/de/docs/Web/CSS/CSS_paged_media), gleichmäßig zwischen den Spalten aufgeteilt wird. Dieser Wert wird derzeit von keinem Browser unterstützt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ausbalancieren von Spalteninhalten

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
> Es gibt einige Interoperabilitätsprobleme und Fehler bei `column-fill` in verschiedenen Browsern aufgrund ungelöster Probleme in der Spezifikation.
>
> Insbesondere wenn `column-fill: auto` verwendet wird, um Spalten der Reihe nach zu füllen, wird Chrome diese Eigenschaft nur berücksichtigen, wenn der Multicol-Container eine Größe in der Block-Dimension hat (z.B. Höhe in einer horizontalen Schreibrichtung). Firefox wird diese Eigenschaft immer berücksichtigen und daher die erste Spalte mit dem gesamten Inhalt füllen, wenn keine Größe angegeben ist.

## Siehe auch

- [Mehrspalten-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-count")}}
- {{CSSXref("column-width")}}
