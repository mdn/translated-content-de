---
title: ":first-child"
slug: Web/CSS/:first-child
l10n:
  sourceCommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

{{CSSRef}}

Die **`:first-child`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert das erste Element innerhalb einer Gruppe von Geschwisterelementen.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-first-child.html", "tabbed-shorter")}}

## Syntax

```css
:first-child {
  /* ... */
}
```

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<div>
  <p>Dieser Text wird ausgewählt!</p>
  <p>Dieser Text wird nicht ausgewählt.</p>
</div>

<div>
  <h2>Dieser Text wird nicht ausgewählt: Es ist kein `p`.</h2>
  <p>Dieser Text wird nicht ausgewählt.</p>
</div>
```

#### CSS

```css
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

#### Ergebnis

{{EmbedLiveSample('Basic_example', 500, 200)}}

### Eine Liste stylen

#### HTML

```html
<ul>
  <li>Element 1</li>
  <li>Element 2</li>
  <li>
    Element 3
    <ul>
      <li>Element 3.1</li>
      <li>Element 3.2</li>
      <li>Element 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css
ul li {
  color: blue;
}

ul li:first-child {
  color: red;
  font-weight: bold;
}
```

#### Ergebnis

{{EmbedLiveSample('Styling_a_list')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":-moz-first-node")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
