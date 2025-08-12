---
title: Inhalt auf Inline-Ebene
slug: Glossary/Inline-level_content
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

In CSS wird Inhalt, der am Inline-Layout beteiligt ist, als **Inhalt auf Inline-Ebene** bezeichnet. Die meisten Textsequenzen, ersetzte Elemente und generierter Inhalt sind standardmäßig auf Inline-Ebene.

Im Inline-Layout wird ein gemischter Strom aus Text, {{Glossary("replaced_elements", "ersetzten Elementen")}} und anderen Inline-Boxen aufgebaut, indem sie in einen Stapel von Linienboxen fragmentiert werden. Innerhalb jeder Linienbox werden Inline-Boxen vertikal oder horizontal, abhängig vom Schreibmodus, miteinander ausgerichtet. Typischerweise werden sie an den Grundlinien ihres Textes ausgerichtet. Dies kann mit CSS verändert werden.

![Inline-Layout](inline_layout.png)

> [!NOTE]
> HTML (_HyperText Markup Language_) Elemente wurden historisch entweder als "Block-Level"-Elemente oder "Inline"-Elemente kategorisiert. Als Präsentationseigenschaft wird dies jetzt von CSS spezifiziert.

## Beispiele

```html
<p>
  This span is an <span class="highlight">inline-level element</span>; its
  background has been colored to display both the beginning and end of the
  element's influence. Input elements, like <input type="radio" /> and
  <input type="checkbox" />, are also inline-level content.
</p>
```

In diesem Beispiel enthält das {{HTMLElement("p")}}-Element etwas Text. Innerhalb dieses Textes befindet sich ein {{HTMLElement("span")}}-Element und zwei {{HTMLElement("input")}}-Elemente, die Inline-Elemente sind. Wenn das `<span>` über zwei Zeilen verteilt ist, werden zwei Linienboxen generiert. Da diese Elemente inline sind, wird der Absatz korrekt als einzelner Absatz mit ununterbrochenem Textfluss dargestellt:

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
  - {{Glossary("Block-level_content", "Inhalt auf Block-Ebene")}}
- [Inline-Formatierungskontext](/de/docs/Web/CSS/CSS_inline_layout/Inline_formatting_context)
- {{cssxref("display")}}
