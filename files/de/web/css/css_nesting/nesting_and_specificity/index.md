---
title: CSS-Nesting und Spezifität
short-title: Verschachtelung und Spezifität
slug: Web/CSS/CSS_nesting/Nesting_and_specificity
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) des `&`-Verschachtelungsselektors wird anhand der größten Spezifität in der zugehörigen Selektorliste berechnet. Dies ist identisch mit der Berechnung der Spezifität, wenn die {{cssxref(':is',':is()')}}-Funktion verwendet wird.

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

In diesem Beispiel hat der ID-Selektor (`#a`) eine Spezifität von [`1-0-0`](/de/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories), während der Typselektor (`b`) eine Spezifität von `0-0-1` hat. Der [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector) und die `:is()`-Pseudo-Klasse nehmen beide eine Spezifität von `1-0-0` an, obwohl der `#a` ID-Selektor nie verwendet wird.

Der `.foo` Klassenselektor hat eine Spezifität von `0-1-0`. Dies ergibt eine Gesamtspezifität von `1-0-1` für `& i` und `0-1-1` für `.foo i`, was bedeutet, dass `color: blue;` gewinnt.

## Siehe auch

- [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) Modul
- [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector)
- [Verwendung von CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Verschachtelung von At-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
