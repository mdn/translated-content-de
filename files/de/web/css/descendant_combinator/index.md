---
title: Nachkommen-Kombinator
slug: Web/CSS/Descendant_combinator
l10n:
  sourceCommit: 7fa9b134e7a886b47bd8c6e3135ba329ee0ddf09
---

{{CSSRef}}

Der **Nachkommen-Kombinator** — typischerweise durch ein einzelnes Leerzeichen (" ") dargestellt — kombiniert zwei Selektoren so, dass Elemente, die vom zweiten Selektor erfasst werden, ausgewählt werden, wenn sie einen Vorfahren (Elternteil, Elternteil des Elternteils, Elternteil des Elternteils des Elternteils usw.) haben, der dem ersten Selektor entspricht. Selektoren, die einen Nachkommen-Kombinator verwenden, werden _Nachkommen-Selektoren_ genannt.

```css
/* Listenelemente, die Nachkommen der "my-things"-Liste sind */
ul.my-things li {
  margin: 2em;
}
```

Der Nachkommen-Kombinator besteht technisch gesehen aus einem oder mehreren {{Glossary("CSS")}} Leerzeichen — dem Leerzeichen oder einem von vier Steuerzeichen: Wagenrücklauf, Seitenumbruch, Zeilenumbruch und Tabulatorzeichen — zwischen zwei Selektoren, falls kein anderer Kombinator vorhanden ist. Zusätzlich können die Leerzeichen, aus denen der Kombinator besteht, beliebig viele CSS-Kommentare enthalten.

## Syntax

```css
selector1 selector2 {
  /* Eigenschaftsdeklarationen */
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