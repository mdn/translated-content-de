---
title: ":only-child"
slug: Web/CSS/:only-child
l10n:
  sourceCommit: 71d9840f3da24005b015d3d103b358d4f9f46819
---

{{CSSRef}}

Die **`:only-child`** CSS [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element ohne Geschwister. Dies entspricht `:first-child:last-child` oder `:nth-child(1):nth-last-child(1)`, jedoch mit einer geringeren Spezifität.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-only-child.html", "tabbed-shorter")}}

## Syntax

```css
:only-child {
  /* ... */
}
```

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<div>
  <div>Ich bin ein Einzelkind.</div>
</div>

<div>
  <div>Ich bin das 1. Geschwisterkind.</div>
  <div>Ich bin das 2. Geschwisterkind.</div>
  <div>
    Ich bin das 3. Geschwisterkind,
    <div>aber dies ist ein Einzelkind.</div>
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
    Erste
    <ul>
      <li>Diese Liste hat nur ein Element.</li>
    </ul>
  </li>
  <li>
    Zweite
    <ul>
      <li>Diese Liste hat drei Elemente.</li>
      <li>Diese Liste hat drei Elemente.</li>
      <li>Diese Liste hat drei Elemente.</li>
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
