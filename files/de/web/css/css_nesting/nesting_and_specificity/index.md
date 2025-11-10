---
title: CSS-Verschachtelung und Spezifität
short-title: Verschachtelung und Spezifität
slug: Web/CSS/CSS_nesting/Nesting_and_specificity
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) des `&`-Verschachtelungsselectors wird basierend auf der größten Spezifität in der zugehörigen Selector-Liste berechnet. Dies ist identisch mit der Berechnung der Spezifität bei Verwendung der {{cssxref(':is', ':is()')}}-Funktion.

```html
<b class="foo">
  <i>Blue text</i>
</b>
```

## `&`-Verschachtelungssyntax

```css-nolint
#a, b {
  & i {
    color: blue;
  }
}

.foo i {
  color: red;
}
```

## `:is()`-Syntax

```css
:is(#a, b) {
  & i {
    color: blue;
  }
}

.foo i {
  color: red;
}
```

In diesem Beispiel hat der ID-Selector (`#a`) eine Spezifität von [`1-0-0`](/de/docs/Web/CSS/Guides/Cascade/Specificity#selector_weight_categories), während der Typen-Selector (`b`) eine Spezifität von `0-0-1` hat. Der [`&`-Verschachtelungsselector](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector) und die `:is()`-Pseudoklasse haben beide eine Spezifität von `1-0-0`, obwohl der `#a`-ID-Selector nie verwendet wird.

Der `.foo`-Klassenselektor hat eine Spezifität von `0-1-0`. Dadurch ergibt sich eine Gesamtspezifität von `1-0-1` für `& i` und `0-1-1` für `.foo i`, was bedeutet, dass `color: blue;` gewinnt.

## Siehe auch

- [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting)-Modul
- [`&`-Verschachtelungsselector](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [Verwenden der CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting/Using)
- [Verschachtelung von At-Regeln](/de/docs/Web/CSS/Guides/Nesting/At-rules)
