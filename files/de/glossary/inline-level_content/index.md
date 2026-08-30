---
title: Inline-Inhalt
slug: Glossary/Inline-level_content
l10n:
  sourceCommit: c1821e3db21bba9f31b8d3396632fe23d2adfd4e
---

Im CSS bezeichnet man Inhalt, der am Inline-Layout teilnimmt, als **Inline-Inhalt**. Die meisten Textsequenzen, ersetzte Elemente und generierter Inhalt sind standardmäßig Inline-Inhalte.

Im Inline-Layout wird ein gemischter Datenstrom aus Text, {{Glossary("replaced_elements", "ersetzten Elementen")}} und anderen Inline-Boxen durch Fragmentierung in einen Stapel von Linienboxen angeordnet. Innerhalb jeder Linienbox sind Inline-Boxen entweder vertikal oder horizontal ausgerichtet, je nach Schreibrichtung. Typischerweise sind sie an den Baselines ihres Textes ausgerichtet. Dies kann mit CSS geändert werden.

> [!NOTE]
> HTML (_HyperText Markup Language_) Elemente wurden historisch entweder als "Block-Elemente" oder als "Inline-Elemente" kategorisiert. Als präsentationseigenschaft wird dies jetzt durch CSS spezifiziert.

![inline layout](inline_layout.png)

Das Diagramm zeigt, wie Inline-Inhalt innerhalb eines Blockcontainers angeordnet ist. Die _root inline box_ ist eine anonyme Box, die vom Blockcontainer generiert wird, um all seinen Inline-Inhalt, einschließlich Text und abgeleiteter Inline-Boxen, zu halten. Um mehr über die Konzepte in diesem Diagramm zu erfahren, wie _Linienboxen_, _Fragmentierung von Inline-Boxen_ und _Floats_, lesen Sie den CSS [Leitfaden zum Inline-Formatierungskontext](/de/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context).

## Beispiele

```html
<p>
  This span is an <span class="highlight">inline-level element</span>; its
  background has been colored to display both the beginning and end of the
  element's influence. Input elements, like <input type="radio" /> and
  <input type="checkbox" />, are also inline-level content.
</p>
```

In diesem Beispiel enthält das {{HTMLElement("p")}} Element etwas Text. Innerhalb dieses Textes befindet sich ein {{HTMLElement("span")}} Element und zwei {{HTMLElement("input")}} Elemente, die Inline-Elemente sind. Wenn sich das `<span>` über zwei Linien erstreckt, werden zwei Linienboxen generiert. Da diese Elemente inline sind, wird der Absatz korrekt als ein einzelner Absatz mit ununterbrochenem Textfluss gerendert:

```css hidden
body {
  margin: 0;
  padding: 4px;
  border: 1px solid #333333;
}

.highlight {
  background-color: #eeee33;
}
```

{{EmbedLiveSample("Examples")}}

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Block-level_content", "Block-Inhalt")}}
- [Inline-Formatierungskontext](/de/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context)
- {{cssxref("display")}}
