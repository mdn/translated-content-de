---
title: Inline-Elemente
slug: Glossary/Inline-level_content
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In CSS wird Inhalt, der am Inline-Layout teilnimmt, als **Inline-Inhalt** bezeichnet. Die meisten Textsequenzen, ersetzte Elemente und generierte Inhalte sind standardmäßig Inline-Inhalt.

Im Inline-Layout wird ein gemischter Datenstrom aus Text, {{Glossary("replaced_elements", "ersetzten Elementen")}} und anderen Inline-Boxen so layoutet, dass sie in Fragmente zerlegt zu einer Stapelung von Zeilenboxen werden. Innerhalb jeder Zeilenbox sind die Inline-Boxen vertikal oder horizontal aneinander ausgerichtet, abhängig vom Schreibmodus. Typischerweise sind sie an den Grundlinien ihres Textes ausgerichtet. Dies kann mit CSS geändert werden.

![inline layout](inline_layout.png)

> [!NOTE]
> HTML (_HyperText Markup Language_) Elemente wurden historisch als "Block-Level"-Elemente oder "Inline"-Elemente kategorisiert. Als präsentatives Merkmal wird dies nun durch CSS spezifiziert.

## Beispiele

```html
<p>
  This span is an <span class="highlight">inline-level element</span>; its
  background has been colored to display both the beginning and end of the
  element's influence. Input elements, like <input type="radio" /> and
  <input type="checkbox" />, are also inline-level content.
</p>
```

In diesem Beispiel enthält das {{HTMLElement("p")}}-Element etwas Text. Innerhalb dieses Textes befindet sich ein {{HTMLElement("span")}}-Element sowie zwei {{HTMLElement("input")}}-Elemente, die Inline-Elemente sind. Wenn das `<span>` über zwei Zeilen verteilt ist, werden zwei Zeilenboxen generiert. Da diese Elemente inline sind, wird der Absatz korrekt als einzelner Absatz mit ungebrochener Textfluss dargestellt:

```css hidden
body {
  margin: 0;
  padding: 4px;
  border: 1px solid #333;
}

.highlight {
  background-color: #ee3;
}
```

{{EmbedLiveSample("Examples")}}

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Block-level_content", "Block-LeveInhalt")}}
- [Inline formatting context](/de/docs/Web/CSS/CSS_inline_layout/Inline_formatting_context)
- {{cssxref("display")}}
