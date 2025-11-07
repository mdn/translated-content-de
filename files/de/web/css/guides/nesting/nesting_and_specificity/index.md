---
title: CSS-Verschachtelung und Spezifität
short-title: Verschachtelung und Spezifität
slug: Web/CSS/Guides/Nesting/Nesting_and_specificity
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) des `&`-Verschachtelungsselectors wird anhand der höchsten Spezifität in der dazugehörigen Selektorliste berechnet. Dies ist identisch zu der Art, wie die Spezifität bei der Verwendung der {{cssxref(':is',':is()')}} Funktion berechnet wird.

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

In diesem Beispiel hat der ID-Selektor (`#a`) eine Spezifität von [`1-0-0`](/de/docs/Web/CSS/Guides/Cascade/Specificity#selector_weight_categories), während der Typ-Selektor (`b`) eine Spezifität von `0-0-1` besitzt. Der [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector) und die `:is()`-Pseudoklasse haben beide eine Spezifität von `1-0-0`, obwohl der `#a` ID-Selektor nie verwendet wird.

Der `.foo` Klassenselektor hat eine Spezifität von `0-1-0`. Dies ergibt eine Gesamtspezifität von `1-0-1` für `& i` und `0-1-1` für `.foo i`, was bedeutet, dass `color: blue;` gewinnt.

## Siehe auch

- [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) Modul
- [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [Verwendung der CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting/Using)
- [Verschachtelung von At-Regeln](/de/docs/Web/CSS/Guides/Nesting/At-rules)
