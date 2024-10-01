---
title: Inline-level Inhalt
slug: Glossary/Inline-level_content
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

In CSS wird Inhalt, der am Inline-Layout teilnimmt, als **Inline-level Inhalt** bezeichnet. Die meisten Textsequenzen, ersetzten Elemente und generierten Inhalte sind standardmäßig inline-level.

Im Inline-Layout wird ein gemischter Strom von Text, [ersetzten Elementen](/de/docs/Web/CSS/Replaced_element) und anderen Inline-Boxen durch Fragmentierung in einen Stapel von Zeilenboxen angeordnet. Innerhalb jeder Zeilenbox werden Inline-Level-Boxen je nach Schreibmodus vertikal oder horizontal aneinander ausgerichtet. Typischerweise werden sie an den Baselines ihres Textes ausgerichtet. Dies kann mit CSS geändert werden.

![inline layout](inline_layout.png)

> [!NOTE]
> HTML (_HyperText Markup Language_) Elemente wurden historisch entweder als "Block-Level"-Elemente oder "Inline"-Elemente kategorisiert. Als Präsentationsmerkmal wird dies jetzt durch CSS festgelegt.

## Beispiele

```html
<p>
  This span is an <span class="highlight">inline-level element</span>; its
  background has been colored to display both the beginning and end of the
  element's influence. Input elements, like <input type="radio" /> and
  <input type="checkbox" />, are also inline-level content.
</p>
```

In diesem Beispiel enthält das {{HTMLElement("p")}} Element etwas Text. Innerhalb dieses Textes befindet sich ein {{HTMLElement("span")}} Element und zwei {{HTMLElement("input")}} Elemente, die Inline-Level-Elemente sind. Wenn sich das `<span>` über zwei Zeilen erstreckt, werden zwei Zeilenboxen erzeugt. Da diese Elemente inline sind, rendert der Absatz korrekt als einzelner Absatz aus ununterbrochenem Textfluss:

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
- [Inline-Formatierungskontext](/de/docs/Web/CSS/Inline_formatting_context)
- {{cssxref("display")}}
