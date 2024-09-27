---
title: Inline-Level-Content
slug: Glossary/Inline-level_content
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Im CSS wird Inhalt, der am Inline-Layout teilnimmt, als **Inline-Level-Content** bezeichnet. Die meisten Textsequenzen, ersetzten Elemente und generierten Inhalte sind standardmäßig inline.

Im Inline-Layout wird ein gemischter Strom von Text, [ersetzten Elementen](/de/docs/Web/CSS/Replaced_element) und anderen Inline-Boxen durch Fragmentierung in einen Stapel von Zeilenboxen angeordnet. Innerhalb jeder Zeilenbox sind Inline-Level-Boxen entweder vertikal oder horizontal zueinander ausgerichtet, abhängig vom Schreibmodus. Typischerweise werden sie durch die Baselines ihres Textes ausgerichtet. Dies kann mit CSS geändert werden.

![inline layout](inline_layout.png)

> [!NOTE]
> HTML (_HyperText Markup Language_) Elemente wurden historisch als entweder "Block-Level-" oder "Inline"-Elemente kategorisiert. Als Präsentationseigenschaft wird dies jetzt durch CSS spezifiziert.

## Beispiele

```html
<p>
  This span is an <span class="highlight">inline-level element</span>; its
  background has been colored to display both the beginning and end of the
  element's influence. Input elements, like <input type="radio" /> and
  <input type="checkbox" />, are also inline-level content.
</p>
```

In diesem Beispiel enthält das {{HTMLElement("p")}}-Element etwas Text. Innerhalb dieses Textes befindet sich ein {{HTMLElement("span")}}-Element und zwei {{HTMLElement("input")}}-Elemente, die Inline-Level-Elemente sind. Wenn das `<span>` sich über zwei Zeilen erstreckt, werden zwei Zeilenboxen generiert. Da diese Elemente inline sind, wird der Absatz korrekt als ein einziger Absatz mit ununterbrochenem Textfluss gerendert:

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
  - [Block-Level-Content](/de/docs/Glossary/Block-level_content)
- [Inline-Formatierungskontext](/de/docs/Web/CSS/Inline_formatting_context)
- {{cssxref("display")}}
