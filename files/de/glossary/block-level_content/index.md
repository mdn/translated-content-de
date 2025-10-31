---
title: Block-Element-Inhalt
slug: Glossary/Block-level_content
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

In CSS wird Inhalt, der am Block-Layout teilnimmt, als **Block-Element-Inhalt** bezeichnet.

In einem Block-Layout werden die Boxen nacheinander vertikal, beginnend am oberen Rand eines umschließenden Blocks, angeordnet. Die linke Außenkante jeder Box berührt die linke Kante des umschließenden Blocks.\
Ein Block-Element beginnt immer in einer neuen Zeile. In horizontalen Schreibrichtungen, wie Englisch oder Arabisch, nimmt es den gesamten horizontalen Raum seines Elternelements (Containers) ein und vertikalen Raum, der der Höhe seines Inhalts entspricht, wodurch ein "Block" entsteht.

> [!NOTE]
> Das oben beschriebene Verhalten des Block-Layouts ändert sich, wenn der [`writing-mode`](/de/docs/Web/CSS/Reference/Properties/writing-mode) des umschließenden Blocks auf einen anderen Wert als [den Standardwert](/de/docs/Web/CSS/Reference/Properties/writing-mode#formal_definition) gesetzt wird.

> [!NOTE]
> HTML (_HyperText Markup Language_) Elemente wurden historisch entweder als "Block-Level"-Elemente oder "Inline"-Elemente kategorisiert. Als eine präsentative Eigenschaft wird dies jetzt durch CSS spezifiziert.

## Beispiele

In diesem Beispiel werden zwei Absatz-({{HTMLElement("p")}}) Elemente in ein {{HTMLElement("div")}} gesetzt.

```html
<div>
  <p>
    This the first paragraph. The background color of these paragraphs have been
    colored to distinguish them from their parent element.
  </p>
  <p>This is the second paragraph.</p>
</div>
```

Die Absatz-({{HTMLElement("p")}}) Elemente sind standardmäßig Block-Elemente. Deshalb werden sie im Block-Layout angezeigt:

```css hidden
p {
  background-color: #8abb55;
}
```

{{EmbedLiveSample("Examples")}}

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Inline-level_content", "Inline-Level-Inhalt")}}
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- {{cssxref("display")}}
- [`writing-mode`](/de/docs/Web/CSS/Reference/Properties/writing-mode)
