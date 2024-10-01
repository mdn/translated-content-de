---
title: Descendant combinator
slug: Web/CSS/Descendant_combinator
l10n:
  sourceCommit: 7fa9b134e7a886b47bd8c6e3135ba329ee0ddf09
---

{{CSSRef}}

Der **Descendant-Kombinator** — typischerweise durch ein einzelnes Leerzeichen (" ") dargestellt — kombiniert zwei Selektoren so, dass Elemente, die vom zweiten Selektor getroffen werden, ausgewählt werden, wenn sie ein Vorfahrelement (Elternteil, Elternteil des Elternteils, Elternteil des Elternteils des Elternteils, usw.) haben, das dem ersten Selektor entspricht. Selektoren, die einen Descendant-Kombinator verwenden, werden _Descendant-Selektoren_ genannt.

```css
/* List items that are descendants of the "my-things" list */
ul.my-things li {
  margin: 2em;
}
```

Der Descendant-Kombinator besteht technisch aus einem oder mehreren {{Glossary("CSS", "CSS")}}-Leerzeichen — dem Leerzeichen oder einem von vier Steuerzeichen: Wagenrücklauf, Form Feed, Zeilenumbruch und Tabulatorzeichen — zwischen zwei Selektoren, wenn kein anderer Kombinator vorhanden ist. Zusätzlich können die Leerzeichen, aus denen der Kombinator besteht, beliebig viele CSS-Kommentare enthalten.

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

- [Child-Kombinator](/de/docs/Web/CSS/Child_combinator)
