---
title: CSS-Verschachtelung und Spezifität
slug: Web/CSS/CSS_nesting/Nesting_and_specificity
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{CSSRef}}

Die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) des `&`-Verschachtelungs-Selektors wird basierend auf der höchsten Spezifität in der zugehörigen Selektorliste berechnet. Dies ist identisch mit der Art und Weise, wie die Spezifität bei der Verwendung der {{cssxref(':is', ':is()')}}-Funktion berechnet wird.

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

In diesem Beispiel hat der ID-Selektor (`#a`) eine Spezifität von [`1-0-0`](/de/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories), während der Typ-Selektor (`b`) eine Spezifität von `0-0-1` hat. Der [`&`-Verschachtelungs-Selektor](/de/docs/Web/CSS/Nesting_selector) und die `:is()`-Pseudo-Klasse haben beide eine Spezifität von `1-0-0`, obwohl der `#a`-ID-Selektor nie verwendet wird.

Der `.foo`-Klassen-Selektor hat eine Spezifität von `0-1-0`. Dies ergibt eine Gesamtspezifität von `1-0-1` für `& c` und `0-1-1` für `.foo c`, was bedeutet, dass `color: blue;` Vorrang hat.

## Siehe auch

- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)  
- [`&`-Verschachtelungs-Selektor](/de/docs/Web/CSS/Nesting_selector)
- [Verwendung von CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Verschachtelung von At-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
