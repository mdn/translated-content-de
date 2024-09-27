---
title: Block-Level-Inhalt
slug: Glossary/Block-level_content
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Im CSS wird Inhalt, der an der Block-Layout beteiligt ist, als **Block-Level-Inhalt** bezeichnet.

In einem Block-Layout werden Kästen nacheinander vertikal ab dem oberen Rand eines umschließenden Blocks angeordnet. Die linke Außenkante jedes Kastens berührt die linke Kante des umschließenden Blocks.\
Ein Block-Level-Element beginnt immer in einer neuen Zeile. In horizontalen Schreibrichtungen, wie Englisch oder Arabisch, belegt es den gesamten horizontalen Raum seines übergeordneten Elements (Containers) und einen vertikalen Raum, der der Höhe seines Inhalts entspricht und somit einen "Block" bildet.

> [!NOTE]
> Das oben beschriebene Verhalten des Block-Layouts ändert sich, wenn der [`writing-mode`](/de/docs/Web/CSS/writing-mode) des umschließenden Blocks auf einen anderen Wert als [den Standardwert](/de/docs/Web/CSS/writing-mode#formal_definition) gesetzt ist.

> [!NOTE]
> HTML (_HyperText Markup Language_) Elemente wurden historisch entweder als "Block-Level"-Elemente oder "Inline"-Elemente kategorisiert. Als Präsentationseigenschaft wird dies nun durch CSS spezifiziert.

## Beispiele

In diesem Beispiel werden zwei Absatzelemente ({{HTMLElement("p")}}) in einem {{HTMLElement("div")}} platziert.

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
  - [Inline-Level-Inhalt](/de/docs/Glossary/Inline-level_content)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- {{cssxref("display")}}
- [`writing-mode`](/de/docs/Web/CSS/writing-mode)
