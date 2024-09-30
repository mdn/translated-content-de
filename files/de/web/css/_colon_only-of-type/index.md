---
title: ":only-of-type"
slug: Web/CSS/:only-of-type
l10n:
  sourceCommit: 71d9840f3da24005b015d3d103b358d4f9f46819
---

{{CSSRef}}

Die **`:only-of-type`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das keine Geschwister des gleichen Typs hat.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-only-of-type.html", "tabbed-shorter")}}

## Syntax

```css
:only-of-type {
  /* ... */
}
```

## Beispiele

### Stile für Elemente ohne Geschwister des gleichen Typs

#### HTML

```html
<main>
  <div>I am `div` #1.</div>
  <p>I am the only `p` among my siblings.</p>
  <div>I am `div` #2.</div>
  <div>
    I am `div` #3.
    <i>I am the only `i` child.</i>
    <em>I am `em` #1.</em>
    <em>I am `em` #2.</em>
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
