---
title: CSS-Verschachtelung und Spezifität
short-title: Verschachtelung und Spezifität
slug: Web/CSS/CSS_nesting/Nesting_and_specificity
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) des `&`-Verschachtelungsselectors wird unter Verwendung der größten Spezifität in der zugehörigen Selektorliste berechnet. Dies ist identisch mit der Art und Weise, wie die Spezifität unter Verwendung der {{cssxref(':is', ':is()')}}-Funktion berechnet wird.

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

In diesem Beispiel hat der ID-Selektor (`#a`) eine Spezifität von [`1-0-0`](/de/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories), während der Typ-Selektor (`b`) eine Spezifität von `0-0-1` hat. Sowohl der [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector) als auch die `:is()`-Pseudoklasse nehmen eine Spezifität von `1-0-0` an, obwohl der `#a` ID-Selektor nie verwendet wird.

Der `.foo`-Klassenselektor hat eine Spezifität von `0-1-0`. Dies macht die Gesamtspezifität zu `1-0-1` für `& i` und `0-1-1` für `.foo i`, was bedeutet, dass `color: blue;` gewinnt.

## Siehe auch

- [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting)-Modul
- [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector)
- [Verwendung von CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Verschachtelung von At-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
