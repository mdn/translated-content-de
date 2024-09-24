---
title: Inhalt auf Inline-Ebene
slug: Glossary/Inline-level_content
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

In CSS wird Inhalt, der am Inline-Layout teilnimmt, als **Inhalt auf Inline-Ebene** bezeichnet. Die meisten Textfolgen, ersetzten Elemente und generierte Inhalte sind standardmäßig auf Inline-Ebene.

Im Inline-Layout wird ein gemischter Strom von Text, [ersetzten Elementen](/de/docs/Web/CSS/Replaced_element) und anderen Inline-Boxen durch das Aufteilen in einen Stapel von Linienboxen angeordnet. Innerhalb jeder Linienbox werden Inline-Level-Boxen entweder vertikal oder horizontal zueinander ausgerichtet, je nach Schreibmodus. Typischerweise werden sie an den Grundlinien ihres Textes ausgerichtet. Dies kann mit CSS geändert werden.

![inline-layout](inline_layout.png)

> [!NOTE]
> HTML (_HyperText Markup Language_) Elemente wurden historisch entweder als "Block-Level"-Elemente oder "Inline"-Elemente kategorisiert. Als Präsentationseigenschaft wird dies jetzt durch CSS spezifiziert.

## Beispiele

```html
<p>
  This span is an <span class="highlight">inline-level element</span>; its
  background has been colored to display both the beginning and end of the
  element's influence. Input elements, like <input type="radio" /> and
  <input type="checkbox" />, are also inline-level content.
</p>
```

In diesem Beispiel enthält das {{HTMLElement("p")}}-Element etwas Text. Innerhalb dieses Textes befindet sich ein {{HTMLElement("span")}}-Element und zwei {{HTMLElement("input")}}-Elemente, die Inline-Level-Elemente sind. Wenn sich das `<span>` über zwei Linien erstreckt, werden zwei Linienboxen generiert. Weil diese Elemente inline sind, wird der Absatz korrekt als ein einzelner Absatz mit ungebrochener Textfluss dargestellt:

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
  - {{Glossary("Block-level content")}}
- [Inline Formatting Context](/de/docs/Web/CSS/Inline_formatting_context)
- {{cssxref("display")}}
