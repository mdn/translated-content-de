---
title: Nachfahren-Kombinator
slug: Web/CSS/Reference/Selectors/Descendant_combinator
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Der **Nachfahren-Kombinator** – üblicherweise durch ein einzelnes Leerzeichen (" ") dargestellt – verbindet zwei Selektoren. Elemente, auf die der zweite Selektor zutrifft, werden ausgewählt, wenn sie ein Vorfahrenelement (Elternelement, Elternelement des Elternelements usw.) haben, auf das der erste Selektor zutrifft. Selektoren, die einen Nachfahren-Kombinator verwenden, heißen _Nachfahren-Selektoren_.

```css
/* List items that are descendants of the "my-things" list */
ul.my-things li {
  margin: 2em;
}
```

Technisch gesehen besteht der Nachfahren-Kombinator aus einem oder mehreren {{Glossary("CSS", "CSS")}}-Whitespace-Zeichen zwischen zwei Selektoren, sofern kein anderer Kombinator vorhanden ist. Dazu zählen das Leerzeichen und vier Steuerzeichen: Wagenrücklauf, Seitenvorschub, Zeilenumbruch und Tabulator. Zwischen den Whitespace-Zeichen des Kombinators können sich außerdem beliebig viele CSS-Kommentare befinden.

## Syntax

```css
selector1 selector2 {
  /* property declarations */
}
```

## Beispiele

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

### CSS

```css
li {
  list-style-type: disc;
}

li li {
  list-style-type: circle;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kind-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator)
