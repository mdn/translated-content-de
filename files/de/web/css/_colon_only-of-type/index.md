---
title: ":only-of-type"
slug: Web/CSS/:only-of-type
l10n:
  sourceCommit: 71d9840f3da24005b015d3d103b358d4f9f46819
---

{{CSSRef}}

Die **`:only-of-type`** CSS [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das keine Geschwister desselben Typs hat.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-only-of-type.html", "tabbed-shorter")}}

## Syntax

```css
:only-of-type {
  /* ... */
}
```

## Beispiele

### Stilisierung von Elementen ohne Geschwister desselben Typs

#### HTML

```html
<main>
  <div>Ich bin `div` #1.</div>
  <p>Ich bin der einzige `p` unter meinen Geschwistern.</p>
  <div>Ich bin `div` #2.</div>
  <div>
    Ich bin `div` #3.
    <i>Ich bin das einzige `i` Kind.</i>
    <em>Ich bin `em` #1.</em>
    <em>Ich bin `em` #2.</em>
  </div>
</main>
```

#### CSS

```css
main :only-of-type {
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('Styling_elements_with_no_siblings_of_the_same_type','100%',180)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":only-child")}}
- {{Cssxref(":first-of-type")}}
- {{Cssxref(":last-of-type")}}
- {{Cssxref(":nth-of-type")}}
