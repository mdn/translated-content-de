---
title: Block-level content
slug: Glossary/Block-level_content
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Im CSS wird Inhalt, der am Block-Layout beteiligt ist, als **Block-Level-Inhalt** bezeichnet.

In einem Block-Layout werden Boxen nacheinander vertikal angeordnet, beginnend am oberen Rand eines umschließenden Blocks. Die linke Außenkante jeder Box berührt die linke Kante des umschließenden Blocks.\
Ein Block-Level-Element beginnt immer in einer neuen Zeile. In horizontalen Schreibrichtungen, wie Englisch oder Arabisch, nimmt es den gesamten horizontalen Raum seines Elternelements (Containers) ein und den vertikalen Raum, der der Höhe seiner Inhalte entspricht, wodurch ein "Block" entsteht.

> [!NOTE]
> Das oben beschriebene Verhalten des Block-Layouts ändert sich, wenn der [`writing-mode`](/de/docs/Web/CSS/writing-mode) des umschließenden Blocks auf einen anderen Wert als [den Standardwert](/de/docs/Web/CSS/writing-mode#formal_definition) gesetzt wird.

> [!NOTE]
> HTML (_HyperText Markup Language_) Elemente wurden historisch entweder als "Block-Level"-Elemente oder "Inline"-Elemente kategorisiert. Als Präsentationseigenschaft wird dies jetzt durch CSS spezifiziert.

## Beispiele

In diesem Beispiel werden zwei Absatz-({{HTMLElement("p")}}) Elemente in ein {{HTMLElement("div")}} eingefügt.

```html
<div>
  <p>
    This the first paragraph. The background color of these paragraphs have been
    colored to distinguish them from their parent element.
  </p>
  <p>This is the second paragraph.</p>
</div>
```

Die Absatz({{HTMLElement("p")}})-Elemente sind standardmäßig Block-Level. Deshalb werden sie im Block-Layout angezeigt:

```css hidden
p {
  background-color: #8abb55;
}
```

{{EmbedLiveSample("Examples")}}

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Inline-level_content", "Inline-level content")}}
- [Block formatting context](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- {{cssxref("display")}}
- [`writing-mode`](/de/docs/Web/CSS/writing-mode)
