---
title: Inline-Level-Inhalt
slug: Glossary/Inline-level_content
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{GlossarySidebar}}

In CSS wird Inhalt, der an einem Inline-Layout teilnimmt, als **Inline-Level-Inhalt** bezeichnet. Die meisten Textsequenzen, ersetzten Elemente und generierter Inhalt sind standardmäßig auf Inline-Level.

Im Inline-Layout wird ein gemischter Strom von Text, {{Glossary("replaced_elements", "ersetzten Elementen")}} und anderen Inline-Boxen durch Fragmentierung in einen Stapel von Zeilenboxen angeordnet. Innerhalb jeder Zeilenbox werden Inline-Level-Boxen vertikal oder horizontal zueinander ausgerichtet, abhängig vom Schreibmodus. Typischerweise werden sie an den Basen ihrer Texte ausgerichtet. Dies kann mit CSS geändert werden.

![inline layout](inline_layout.png)

> [!NOTE]
> HTML (_HyperText Markup Language_) Elemente wurden historisch entweder als "Block-Level" Elemente oder als "Inline" Elemente kategorisiert. Als Präsentationsmerkmal wird dies nun durch CSS spezifiziert.

## Beispiele

```html
<p>
  This span is an <span class="highlight">inline-level element</span>; its
  background has been colored to display both the beginning and end of the
  element's influence. Input elements, like <input type="radio" /> and
  <input type="checkbox" />, are also inline-level content.
</p>
```

In diesem Beispiel enthält das {{HTMLElement("p")}}-Element etwas Text. Innerhalb dieses Textes befindet sich ein {{HTMLElement("span")}}-Element und zwei {{HTMLElement("input")}}-Elemente, die Inline-Level-Elemente sind. Wenn sich das `<span>` über zwei Zeilen erstreckt, werden zwei Zeilenboxen erzeugt. Da diese Elemente inline sind, rendert der Absatz korrekt als ein einzelner Absatz mit ununterbrochenem Textfluss:

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
  - {{Glossary("Block-level_content", "Block-Level-Inhalt")}}
- [Inline-Formatierungskontext](/de/docs/Web/CSS/Inline_formatting_context)
- {{cssxref("display")}}
