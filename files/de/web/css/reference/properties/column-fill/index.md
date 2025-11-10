---
title: column-fill
slug: Web/CSS/Reference/Properties/column-fill
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`column-fill`**-Eigenschaft von [CSS](/de/docs/Web/CSS) steuert, wie der Inhalt eines Elements ausbalanciert wird, wenn er in Spalten aufgeteilt wird.

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

Die `column-fill`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben. Der anfängliche Wert ist `balance`, sodass der Inhalt über die Spalten hinweg ausbalanciert wird.

### Werte

- `auto`
  - : Die Spalten werden nacheinander gefüllt. Der Inhalt beansprucht nur den benötigten Platz, was möglicherweise dazu führt, dass einige Spalten leer bleiben.
- `balance`
  - : Der Inhalt wird gleichmäßig auf die Spalten verteilt. In fragmentierten Kontexten, wie [Seitenmedien](/de/docs/Web/CSS/Guides/Paged_media), wird nur das letzte Fragment ausbalanciert. Daher wird im Seitenmedium nur die letzte Seite ausbalanciert.

Die Spezifikation definiert einen `balance-all`-Wert, bei dem der Inhalt in fragmentierten Kontexten, wie [Seitenmedien](/de/docs/Web/CSS/Guides/Paged_media), gleichmäßig auf die Spalten verteilt wird. Dieser Wert wird derzeit in keinem Browser unterstützt.

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
> Es gibt einige Interoperabilitätsprobleme und Fehler mit `column-fill` über verschiedene Browser hinweg, aufgrund ungelöster Fragen in der Spezifikation.
>
> Insbesondere bei der Verwendung von `column-fill: auto`, um Spalten der Reihe nach zu füllen, wird Chrome diese Eigenschaft nur berücksichtigen, wenn der Multicol-Container eine Größe in der Blockdimension hat (z.B. Höhe in einem horizontalen Schreibmodus). Firefox wird diese Eigenschaft immer berücksichtigen, wodurch die erste Spalte mit dem gesamten Inhalt gefüllt wird, wenn keine Größe angegeben ist.

## Siehe auch

- [Lernen: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-count")}}
- {{CSSXref("column-width")}}
