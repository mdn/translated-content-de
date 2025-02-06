---
title: :only-child
slug: Web/CSS/:only-child
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:only-child`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element ohne Geschwister. Dies entspricht `:first-child:last-child` oder `:nth-child(1):nth-last-child(1)`, jedoch mit einer geringeren Spezifität.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-only-child.html", "tabbed-shorter")}}

## Syntax

```css
:only-child {
  /* ... */
}
```

## Beispiele

### Grundlegendes Beispiel

#### HTML

```html
<div>
  <div>I am an only child.</div>
</div>

<div>
  <div>I am the 1st sibling.</div>
  <div>I am the 2nd sibling.</div>
  <div>
    I am the 3rd sibling,
    <div>but this is an only child.</div>
  </div>
</div>
```

#### CSS

```css
div:only-child {
  color: red;
}

div {
  display: inline-block;
  margin: 6px;
  outline: 1px solid;
}
```

#### Ergebnis

{{EmbedLiveSample('Basic_example','100%',180)}}

### Ein Listenbeispiel

#### HTML

```html
<ol>
  <li>
    First
    <ul>
      <li>This list has just one element.</li>
    </ul>
  </li>
  <li>
    Second
    <ul>
      <li>This list has three elements.</li>
      <li>This list has three elements.</li>
      <li>This list has three elements.</li>
    </ul>
  </li>
</ol>
```

#### CSS

```css
li li {
  list-style-type: disc;
}

li:only-child {
  color: red;
  list-style-type: square;
}
```

#### Ergebnis

{{EmbedLiveSample('A_list_example', '100%', 210)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":only-of-type")}}
- {{Cssxref(":first-child")}}
- {{Cssxref(":last-child")}}
- {{Cssxref(":nth-child")}}
