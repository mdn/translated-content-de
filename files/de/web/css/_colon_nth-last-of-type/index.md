---
title: ":nth-last-of-type()"
slug: Web/CSS/:nth-last-of-type
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`:nth-last-of-type()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente basierend auf ihrer Position unter Geschwistern desselben Typs (Tag-Name) aus, wobei von hinten gezählt wird.

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

Die Pseudoklasse `nth-last-of-type` wird mit einem einzelnen Argument spezifiziert, das das Muster für die Auswahl der Elemente darstellt, gezählt vom Ende.

Sehen Sie sich {{Cssxref(":nth-last-child")}} für eine detailliertere Erklärung der Syntax an.

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
