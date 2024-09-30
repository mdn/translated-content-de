---
title: ":nth-last-of-type()"
slug: Web/CSS/:nth-last-of-type
l10n:
  sourceCommit: 10b1919ecf203ab486c5b6fd218805020fd06f12
---

{{CSSRef}}

Die **`:nth-last-of-type()`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) selektiert Elemente basierend auf ihrer Position unter den Geschwistern desselben Typs (Tag-Name), gezählt vom Ende her.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-last-of-type.html", "tabbed-shorter")}}

## Syntax

Die `nth-last-of-type` Pseudo-Klasse wird mit einem einzigen Argument spezifiziert, das das Muster zur Übereinstimmung von Elementen vom Ende her darstellt.

Sehen Sie sich {{Cssxref(":nth-last-child")}} für eine detailliertere Erklärung seiner Syntax an.

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
