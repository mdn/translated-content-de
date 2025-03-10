---
title: column-fill
slug: Web/CSS/column-fill
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`column-fill`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, wie der Inhalt eines Elements aufgeteilt wird, wenn er in Spalten gebrochen wird.

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

Die `column-fill`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben. Der Anfangswert ist `balance`, sodass der Inhalt über die Spalten hinweg ausgeglichen wird.

### Werte

- `auto`
  - : Spalten werden nacheinander gefüllt. Der Inhalt nimmt nur den Platz ein, den er benötigt, was möglicherweise dazu führt, dass einige Spalten leer bleiben.
- `balance`
  - : Der Inhalt wird gleichmäßig zwischen den Spalten aufgeteilt. In fragmentierten Kontexten, wie z. B. [Paginierte Medien](/de/docs/Web/CSS/CSS_paged_media), wird nur das letzte Fragment ausgeglichen. Daher würde bei paginierten Medien nur die letzte Seite ausgeglichen.

Die Spezifikation definiert einen Wert `balance-all`, bei dem der Inhalt in fragmentierten Kontexten, wie [Paginierte Medien](/de/docs/Web/CSS/CSS_paged_media), gleichmäßig zwischen den Spalten aufgeteilt wird. Dieser Wert wird derzeit in keinem Browser unterstützt.

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
> Es gibt einige Interoperabilitätsprobleme und Fehler mit `column-fill` in verschiedenen Browsern, bedingt durch ungelöste Probleme in der Spezifikation.
>
> Insbesondere wenn `column-fill: auto` verwendet wird, um die Spalten nacheinander zu füllen, wird Chrome diese Eigenschaft nur berücksichtigen, wenn der Multicol-Container eine Größe in der Blockdimension hat (z.B. Höhe in einem horizontalen Schreibmodus). Firefox wird diese Eigenschaft immer berücksichtigen und dadurch die erste Spalte mit dem gesamten Inhalt füllen, wenn keine Größe vorhanden ist.

## Siehe auch

- [Lernen: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-count")}}
- {{CSSXref("column-width")}}
