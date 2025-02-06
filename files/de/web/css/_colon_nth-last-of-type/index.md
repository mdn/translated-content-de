---
title: :nth-last-of-type()
slug: Web/CSS/:nth-last-of-type
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:nth-last-of-type()`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente basierend auf ihrer Position unter Geschwistern des gleichen Typs (Tag-Name) aus, wobei von hinten gezählt wird.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-last-of-type.html", "tabbed-shorter")}}

## Syntax

Die `nth-last-of-type`-Pseudoklasse wird mit einem einzigen Argument spezifiziert, das das Muster für die Übereinstimmung der Elemente darstellt, wobei von hinten gezählt wird.

Sehen Sie {{Cssxref(":nth-last-child")}} für eine detailliertere Erklärung der Syntax.

```css-nolint
:nth-last-of-type(<An+B> | even | odd) {
  /* ... */
}
```

## Beispiele

### HTML

```html
<div>
  <span>This is a span.</span>
  <span>This is another span.</span>
  <em>This is emphasized.</em>
  <span>Wow, this span gets limed!!!</span>
  <del>This is struck through.</del>
  <span>Here is one last span.</span>
</div>
```

### CSS

```css
span:nth-last-of-type(2) {
  background-color: lime;
}
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":nth-last-child")}}, {{Cssxref(":nth-of-type")}}
