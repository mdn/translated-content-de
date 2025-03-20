---
title: Inline-Ebene Inhalt
slug: Glossary/Inline-level_content
l10n:
  sourceCommit: 113279ab09692d869866519106e25cba8a20abb8
---

{{GlossarySidebar}}

Im CSS wird Inhalt, der am Inline-Layout teilnimmt, als **Inline-Ebene Inhalt** bezeichnet. Die meisten Textsequenzen, ersetzte Elemente und generierte Inhalte sind standardmäßig auf der Inline-Ebene.

Im Inline-Layout wird ein gemischter Strom von Text, {{Glossary("replaced_elements", "ersetzten Elementen")}} und anderen Inline-Boxen durch das Fragmentieren in einen Stapel von Zeilenboxen angelegt. Innerhalb jeder Zeilenbox sind die Inline-Ebene Boxen vertikal oder horizontal aneinander ausgerichtet, abhängig vom Schreibmodus. Typischerweise werden sie an den Grundlinien ihres Textes ausgerichtet. Dies kann mit CSS verändert werden.

![inline layout](inline_layout.png)

> [!NOTE]
> HTML (_HyperText Markup Language_) Elemente wurden historisch entweder als „Block-level“ Elemente oder „inline“ Elemente kategorisiert. Als präsentationelles Merkmal wird dies nun durch CSS spezifiziert.

## Beispiele

```html
<p>
  This span is an <span class="highlight">inline-level element</span>; its
  background has been colored to display both the beginning and end of the
  element's influence. Input elements, like <input type="radio" /> and
  <input type="checkbox" />, are also inline-level content.
</p>
```

In diesem Beispiel enthält das {{HTMLElement("p")}}-Element etwas Text. Innerhalb dieses Textes befindet sich ein {{HTMLElement("span")}}-Element und zwei {{HTMLElement("input")}}-Elemente, welche Inline-Ebene Elemente sind. Wenn sich das `<span>` über zwei Zeilen erstreckt, werden zwei Zeilenboxen generiert. Da diese Elemente Inline sind, wird der Absatz korrekt als ein einzelner Absatz mit ununterbrochenem Textfluss dargestellt:

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
  - {{Glossary("Block-level_content", "Block-Level Inhalt")}}
- [Inline-Formatierungskontext](/de/docs/Web/CSS/CSS_inline_layout/Inline_formatting_context)
- {{cssxref("display")}}
