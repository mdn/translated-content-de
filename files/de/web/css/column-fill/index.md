---
title: Spaltenfüllung
slug: Web/CSS/column-fill
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`column-fill`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, wie der Inhalt eines Elements ausgeglichen wird, wenn er in Spalten aufgeteilt wird.

{{EmbedInteractiveExample("pages/css/column-fill.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
column-fill: auto;
column-fill: balance;

/* Globale Werte */
column-fill: inherit;
column-fill: initial;
column-fill: revert;
column-fill: revert-layer;
column-fill: unset;
```

Die `column-fill`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwörter angegeben. Der Standardwert ist `balance`, sodass der Inhalt gleichmäßig über die Spalten verteilt wird.

### Werte

- `auto`
  - : Spalten werden der Reihe nach gefüllt. Der Inhalt benötigt nur den Platz, den er braucht, was möglicherweise dazu führt, dass einige Spalten leer bleiben.
- `balance`
  - : Der Inhalt wird gleichmäßig zwischen den Spalten aufgeteilt. In fragmentierten Kontexten, wie bei [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media), wird nur das letzte Fragment ausgeglichen. Daher wird bei Seitenmedien nur die letzte Seite ausgeglichen.

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
> Es gibt einige Interoperabilitätsprobleme und Bugs mit `column-fill` in verschiedenen Browsern, bedingt durch ungelöste Probleme in der Spezifikation.
>
> Insbesondere bei der Verwendung von `column-fill: auto`, um Spalten der Reihe nach zu füllen, beachtet Chrome diese Eigenschaft nur, wenn der Container für Mehrspalten eine Größe in der Blockrichtung hat (z.B. Höhe bei einem horizontalen Schreibmodus). Firefox berücksichtigt diese Eigenschaft immer und füllt daher die erste Spalte mit dem gesamten Inhalt, wenn keine Größe vorhanden ist.

## Siehe auch

- [Layout mit mehreren Spalten](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-count")}}
- {{CSSXref("column-width")}}
