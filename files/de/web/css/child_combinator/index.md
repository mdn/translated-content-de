---
title: Child-Kombinator
slug: Web/CSS/Child_combinator
l10n:
  sourceCommit: 7fa9b134e7a886b47bd8c6e3135ba329ee0ddf09
---

{{CSSRef}}

Der **Child-Kombinator** (`>`) wird zwischen zwei CSS-Selektoren platziert. Er trifft nur auf diejenigen Elemente zu, die vom zweiten Selektor erfasst werden und die direkten Kinder von Elementen sind, die vom ersten Selektor erfasst werden.

```css
/* List items that are children of the "my-things" list */
ul.my-things > li {
  margin: 2em;
}
```

Elemente, die vom zweiten Selektor erfasst werden, müssen unmittelbare Kinder der Elemente sein, die vom ersten Selektor erfasst werden. Dies ist strikter als der [Descendant-Kombinator](/de/docs/Web/CSS/Descendant_combinator), der alle vom zweiten Selektor erfassten Elemente trifft, für die es ein Vorfahrenelement gibt, das vom ersten Selektor erfasst wird, unabhängig von der Anzahl der "Sprünge" im DOM.

## Syntax

```css-nolint
/* The white space around the > combinator is optional but recommended. */
selector1 > selector2 { /* style properties */ }
```

## Beispiele

### CSS

```css
span {
  background-color: aqua;
}

div > span {
  background-color: yellow;
}
```

### HTML

```html
<div>
  <span>
    Span #1, in the div.
    <span>Span #2, in the span that's in the div.</span>
  </span>
</div>
<span>Span #3, not in the div at all.</span>
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Descendant-Kombinator](/de/docs/Web/CSS/Descendant_combinator)
