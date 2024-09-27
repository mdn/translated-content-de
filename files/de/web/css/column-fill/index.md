---
title: column-fill
slug: Web/CSS/column-fill
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`column-fill`**-Eigenschaft von [CSS](/de/docs/Web/CSS) steuert, wie der Inhalt eines Elements ausgeglichen wird, wenn es in Spalten aufgeteilt wird.

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

Die `column-fill`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben. Der Anfangswert ist `balance`, sodass der Inhalt über die Spalten ausgeglichen wird.

### Werte

- `auto`
  - : Spalten werden nacheinander gefüllt. Der Inhalt benötigt nur den Raum, den er braucht, was möglicherweise dazu führt, dass einige Spalten leer bleiben.
- `balance`
  - : Der Inhalt wird gleichmäßig auf die Spalten verteilt. In fragmentierten Kontexten wie [Seitenausgabe](/de/docs/Web/CSS/CSS_paged_media) wird nur das letzte Fragment ausgeglichen. Daher wird in der Seitenausgabe nur die letzte Seite ausgeglichen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ausgleichen des Spalteninhalts

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
> Es gibt einige Interoperabilitätsprobleme und Fehler mit `column-fill` in verschiedenen Browsern aufgrund ungelöster Probleme in der Spezifikation.
>
> Insbesondere bei Verwendung von `column-fill: auto`, um Spalten nacheinander zu füllen, wird Chrome diese Eigenschaft nur berücksichtigen, wenn der Multicol-Container im Blockmaß (z.B. Höhe in einem horizontalen Schreibmodus) eine Größe hat. Firefox wird diese Eigenschaft immer berücksichtigen und daher die erste Spalte mit dem gesamten Inhalt füllen, wenn keine Größe vorhanden ist.

## Siehe auch

- [Mehrspaltiges Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-count")}}
- {{CSSXref("column-width")}}
