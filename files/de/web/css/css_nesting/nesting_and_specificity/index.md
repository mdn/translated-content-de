---
title: CSS-Verschachtelung und Spezifität
slug: Web/CSS/CSS_nesting/Nesting_and_specificity
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

{{CSSRef}}

Die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) des `&`-Verschachtelungsselektors wird mit der höchsten Spezifität in der zugehörigen Selektorliste berechnet. Dies ist identisch mit der Berechnung der Spezifität bei Verwendung der {{cssxref(':is',':is()')}}-Funktion.

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

In diesem Beispiel hat der ID-Selektor (`#a`) eine Spezifität von [`1-0-0`](/de/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories), während der Typselektor (`b`) eine Spezifität von `0-0-1` aufweist. Der [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector) und die `:is()`-Pseudoklasse nehmen beide eine Spezifität von `1-0-0` an, obwohl der `#a`-ID-Selektor nie verwendet wird.

Der `.foo`-Klassenselektor hat eine Spezifität von `0-1-0`. Dies macht die Gesamtspezifität zu `1-0-1` für `& i` und `0-1-1` für `.foo i`, was bedeutet, dass `color: blue;` gewinnt.

## Siehe auch

- [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) Modul
- [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector)
- [Verwendung von CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Verschachteln von At-Rules](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
