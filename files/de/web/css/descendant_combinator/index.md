---
title: Nachfahre-Kombinator
slug: Web/CSS/Descendant_combinator
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **Nachfahre-Kombinator** – typischerweise durch ein einzelnes Leerzeichen (" ") dargestellt – kombiniert zwei Selektoren, sodass Elemente, die vom zweiten Selektor erfasst werden, ausgewählt werden, wenn sie ein Vorfahr-Element (Elternteil, Elternteil des Elternteils, Elternteil des Elternteils des Elternteils usw.) haben, das dem ersten Selektor entspricht. Selektoren, die einen Nachfahre-Kombinator verwenden, werden _Nachfahre-Selektoren_ genannt.

```css
/* List items that are descendants of the "my-things" list */
ul.my-things li {
  margin: 2em;
}
```

Der Nachfahre-Kombinator besteht technisch aus einem oder mehreren {{Glossary("CSS", "CSS")}} Leerzeichenzeichen – das Leerzeichen und/oder eines der vier Steuerzeichen: Wagenrücklauf, Formularvorschub, neue Zeile und Tabulatorzeichens – zwischen zwei Selektoren, wenn kein anderer Kombinator vorhanden ist. Außerdem können die Leerzeichenzeichen, aus denen der Kombinator besteht, beliebig viele CSS-Kommentare enthalten.

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

- [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator)
