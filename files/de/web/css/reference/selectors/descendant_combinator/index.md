---
title: Nachfahrkombinator
slug: Web/CSS/Reference/Selectors/Descendant_combinator
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Der **Nachfahrkombinator** — typischerweise durch ein einzelnes Leerzeichen (" ") dargestellt — kombiniert zwei Selektoren so, dass Elemente, die dem zweiten Selektor entsprechen, ausgewählt werden, wenn sie ein Vorfahrelement (Elternteil, Elternteil des Elternteils, Elternteil des Elternteils des Elternteils usw.) haben, das dem ersten Selektor entspricht. Selektoren, die einen Nachfahrkombinator nutzen, werden _Nachfahrselektoren_ genannt.

```css
/* List items that are descendants of the "my-things" list */
ul.my-things li {
  margin: 2em;
}
```

Der Nachfahrkombinator besteht technisch aus einem oder mehreren {{Glossary("CSS", "CSS")}}-Leerzeichen — dem Leerzeichen und/oder einem von vier Steuerzeichen: Wagenrücklauf, Formularvorschub, neue Zeile und Tabulatorzeichen — zwischen zwei Selektoren in Abwesenheit eines anderen Kombinators. Darüber hinaus können die Leerzeichen, aus denen der Kombinator besteht, beliebig viele CSS-Kommentare enthalten.

## Syntax

```css
selector1 selector2 {
  /* property declarations */
}
```

## Beispiele

### CSS

```css
li {
  list-style-type: disc;
}

li li {
  list-style-type: circle;
}
```

### HTML

```html
<ul>
  <li>
    <div>Item 1</div>
    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>
  </li>
  <li>
    <div>Item 2</div>
    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>
  </li>
</ul>
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kindkombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator)
