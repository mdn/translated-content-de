---
title: "`column-fill` CSS property"
short-title: column-fill
slug: Web/CSS/Reference/Properties/column-fill
l10n:
  sourceCommit: a5531a7b1fa30ab1de952ffff619a9830eb1c1a9
---

Die **`column-fill`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, wie der Inhalt eines Elements ausgeglichen wird, wenn er in Spalten aufgeteilt wird.

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

### Werte

Diese Eigenschaft wird als eines der folgenden Schlüsselwörter angegeben:

- `auto`
  - : Spalten werden nacheinander gefüllt. Der Inhalt benötigt nur den Platz, den er tatsächlich beansprucht, was dazu führen kann, dass einige Spalten leer bleiben.
- `balance`
  - : Der Inhalt wird gleichmäßig auf die Spalten verteilt. In fragmentierten Kontexten, wie z.B. [Paginierte Medien](/de/docs/Web/CSS/Guides/Paged_media), wird nur das letzte Fragment ausgeglichen. Daher wäre in paginierten Medien nur die letzte Seite ausgeglichen. Dies ist der Standardwert.

Die Spezifikation definiert einen `balance-all`-Wert, bei dem der Inhalt in fragmentierten Kontexten, wie z.B. [Paginierte Medien](/de/docs/Web/CSS/Guides/Paged_media), gleichmäßig auf die Spalten verteilt wird. Dieser Wert wird derzeit in keinem Browser unterstützt.

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
  background: #ffff99;
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
> Es gibt einige Interoperabilitätsprobleme und Bugs bei `column-fill` in verschiedenen Browsern, aufgrund ungelöster Probleme in der Spezifikation.
>
> Insbesondere bei der Verwendung von `column-fill: auto`, um Spalten nacheinander zu füllen, wird Chrome diese Eigenschaft nur berücksichtigen, wenn der Multicol-Container eine Größe in der Blockdimension (z.B. Höhe im horizontalen Schreibmodus) hat. Firefox wird diese Eigenschaft immer berücksichtigen und daher die erste Spalte mit dem gesamten Inhalt füllen, falls keine Größe angegeben ist.

## Siehe auch

- [Lernen: Mehrspaltiges Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-count")}}
- {{CSSXref("column-width")}}
