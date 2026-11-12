---
title: Kindkombinator
slug: Web/CSS/Reference/Selectors/Child_combinator
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Der **Kindkombinator** (`>`) steht zwischen zwei CSS-Selektoren. Er erfasst nur die Elemente, die dem zweiten Selektor entsprechen und direkte Kinder von Elementen sind, die dem ersten Selektor entsprechen.

```css
/* List items that are children of the "my-things" list */
ul.my-things > li {
  margin: 2em;
}
```

Elemente, die dem zweiten Selektor entsprechen, müssen unmittelbare Kinder der Elemente sein, die dem ersten Selektor entsprechen. Das ist strenger als beim [Nachfahrenkombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator): Dieser erfasst alle Elemente, die dem zweiten Selektor entsprechen und einen Vorfahren haben, der dem ersten Selektor entspricht – unabhängig davon, wie viele Ebenen im DOM dazwischenliegen.

## Syntax

```css-nolint
/* The white space around the > combinator is optional but recommended. */
selector1 > selector2 { /* style properties */ }
```

## Beispiele

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

### CSS

```css
span {
  background-color: aqua;
}

div > span {
  background-color: yellow;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nachfahrenkombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator)
