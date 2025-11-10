---
title: Inline-Inhalt
slug: Glossary/Inline-level_content
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Im CSS wird Inhalt, der am Inline-Layout teilnimmt, als **Inline-Inhalt** bezeichnet. Die meisten Textsequenzen, ersetzte Elemente und generierte Inhalte sind standardmäßig Inline-Level.

Im Inline-Layout wird ein gemischter Strom von Text, {{Glossary("replaced_elements", "ersetzten Elementen")}} und anderen Inline-Boxen durch Fragmentierung in einen Stapel von Zeilenboxen angeordnet. Innerhalb jeder Zeilenbox sind Inline-Level-Boxen vertikal oder horizontal aneinander ausgerichtet, abhängig vom Schreibmodus. In der Regel sind sie an den Baselines ihres Textes ausgerichtet. Dies kann mit CSS geändert werden.

![Inline-Layout](inline_layout.png)

> [!NOTE]
> HTML (_HyperText Markup Language_) Elemente wurden historisch entweder als "Block-Level" oder "Inline" Elemente kategorisiert. Diese Präsentationseigenschaft wird jetzt von CSS spezifiziert.

## Beispiele

```html
<p>
  This span is an <span class="highlight">inline-level element</span>; its
  background has been colored to display both the beginning and end of the
  element's influence. Input elements, like <input type="radio" /> and
  <input type="checkbox" />, are also inline-level content.
</p>
```

In diesem Beispiel enthält das {{HTMLElement("p")}}-Element etwas Text. Innerhalb dieses Textes befindet sich ein {{HTMLElement("span")}}-Element und zwei {{HTMLElement("input")}}-Elemente, die Inline-Level-Elemente sind. Wenn sich das `<span>` über zwei Zeilen erstreckt, werden zwei Zeilenboxen erzeugt. Da diese Elemente inline sind, rendert der Absatz korrekt als ein einziger Absatz mit ununterbrochenem Textfluss:

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
  - {{Glossary("Block-level_content", "Block-Level-Inhalt")}}
- [Inline-Formatierungskontext](/de/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context)
- {{cssxref("display")}}
