---
title: Kindkombinator
slug: Web/CSS/Child_combinator
l10n:
  sourceCommit: 7fa9b134e7a886b47bd8c6e3135ba329ee0ddf09
---

{{CSSRef}}

Der **Kindkombinator** (`>`) steht zwischen zwei CSS-Selektoren. Er trifft nur auf jene Elemente zu, die vom zweiten Selektor erfasst werden und direkte Kinder der Elemente sind, die vom ersten Selektor erfasst werden.

```css
/* Listenelemente, die Kinder der "my-things"-Liste sind */
ul.my-things > li {
  margin: 2em;
}
```

Elemente, die vom zweiten Selektor erfasst werden, müssen unmittelbare Kinder der Elemente sein, die vom ersten Selektor erfasst werden. Dies ist strikter als der [Nachfahrenkombinator](/de/docs/Web/CSS/Descendant_combinator), der alle Elemente erfasst, für die ein Vorfahre existiert, der vom ersten Selektor erfasst wird, unabhängig von der Anzahl der Schritte im DOM.

## Syntax

```css-nolint
/* Der Leerraum um den > Kombinator ist optional, aber empfohlen. */
selector1 > selector2 { /* Stil-Eigenschaften */ }
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
    Span #1, im div.
    <span>Span #2, im span, das im div ist.</span>
  </span>
</div>
<span>Span #3, überhaupt nicht im div.</span>
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nachfahrenkombinator](/de/docs/Web/CSS/Descendant_combinator)
