---
title: :nth-last-of-type()
slug: Web/CSS/Reference/Selectors/:nth-last-of-type
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:nth-last-of-type()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt Elemente basierend auf ihrer Position unter Geschwistern des gleichen Typs (Tag-Name) aus, wobei vom Ende gezählt wird.

{{InteractiveExample("CSS Demo: :nth-last-of-type", "tabbed-shorter")}}

```css interactive-example
dt {
  font-weight: bold;
}

dd {
  margin: 3px;
}

dd:nth-last-of-type(3n) {
  border: 2px solid orange;
}
```

```html interactive-example
<dl>
  <dt>Vegetables:</dt>
  <dd>1. Tomatoes</dd>
  <dd>2. Cucumbers</dd>
  <dd>3. Mushrooms</dd>
  <dt>Fruits:</dt>
  <dd>4. Apples</dd>
  <dd>5. Mangos</dd>
  <dd>6. Pears</dd>
  <dd>7. Oranges</dd>
</dl>
```

## Syntax

```css-nolint
:nth-last-of-type(<An+B> | even | odd) {
  /* ... */
}
```

### Parameter

Die `:nth-last-of-type()` Pseudoklasse wird mit einem einzigen Argument spezifiziert, das das Muster zur Übereinstimmung von Elementen darstellt, wobei vom Ende gezählt wird.

Siehe {{Cssxref(":nth-last-child")}} für eine ausführlichere Erklärung seiner Syntax.

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
