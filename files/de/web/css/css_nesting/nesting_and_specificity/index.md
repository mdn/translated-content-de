---
title: CSS-Verschachtelung und Spezifität
slug: Web/CSS/CSS_nesting/Nesting_and_specificity
l10n:
  sourceCommit: 7e1956dbec8369ae5533be89e21cbce2d5a2ae1c
---

{{CSSRef}}

Die {{cssxref('specificity')}} des `&`-Verschachtelungsselektors wird mit der größten Spezifität in der zugehörigen Selektorliste berechnet. Dies ist identisch mit der Berechnung der Spezifität bei Verwendung der {{cssxref(':is',':is()')}}-Funktion.

```html
<b class="foo">
  <c>Blue text</c>
</b>
```

## `&`-Verschachtelungssyntax

```css-nolint
#a, b {
  & c {
    color: blue;
  }
}

.foo c {
  color: red;
}
```

## `:is()`-Syntax

```css
:is(#a, b) {
  & c {
    color: blue;
  }
}

.foo c {
  color: red;
}
```

In diesem Beispiel hat der ID-Selektor (`#a`) eine Spezifität von [`1-0-0`](/de/docs/Web/CSS/Specificity#selector_weight_categories), während der Typselektor (`b`) eine Spezifität von `0-0-1` hat. Der [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector) und die `:is()`-Pseudo-Klasse nehmen beide eine Spezifität von `1-0-0` an, obwohl der `#a` ID-Selektor nie verwendet wird.

Der `.foo` Klassen-Selektor hat eine Spezifität von `0-1-0`. Dies ergibt eine Gesamtspezifität von `1-0-1` für `& c` und `0-1-1` für `.foo c`, was bedeutet, dass `color: blue;` gewinnt.

## Siehe auch

- [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) Modul
- [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector)
- [Verwendung der CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Verschachtelung von At-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)