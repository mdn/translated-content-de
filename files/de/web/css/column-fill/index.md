---
title: column-fill
slug: Web/CSS/column-fill
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`column-fill`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, wie der Inhalt eines Elements aufgeteilt wird, wenn er in Spalten aufgebrochen wird.

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

Die `column-fill`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte spezifiziert. Der Anfangswert ist `balance`, sodass der Inhalt über die Spalten hinweg ausgeglichen wird.

### Werte

- `auto`
  - : Spalten werden der Reihe nach gefüllt. Der Inhalt nimmt nur den benötigten Platz ein, was möglicherweise dazu führt, dass einige Spalten leer bleiben.
- `balance`
  - : Der Inhalt wird gleichmäßig auf die Spalten verteilt. In fragmentierten Kontexten, wie z. B. [paged media](/de/docs/Web/CSS/CSS_paged_media), wird nur das letzte Fragment ausgeglichen. Daher wird in paged media nur die letzte Seite ausgeglichen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

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
> Bei `column-fill` gibt es aufgrund ungelöster Probleme in der Spezifikation einige Interoperabilitätsprobleme und Fehler in verschiedenen Browsern.
>
> Insbesondere beim Verwenden von `column-fill: auto`, um Spalten der Reihe nach zu füllen, wird Chrome diese Eigenschaft nur berücksichtigen, wenn das mehrspaltige Container-Element eine Größe in der Blockdimension hat (z. B. Höhe in einem horizontalen Schreibmodus). Firefox wird diese Eigenschaft immer berücksichtigen und daher die erste Spalte mit dem gesamten Inhalt füllen, wenn keine Größe vorliegt.

## Siehe auch

- [Mehrspaltiges Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-count")}}
- {{CSSXref("column-width")}}
