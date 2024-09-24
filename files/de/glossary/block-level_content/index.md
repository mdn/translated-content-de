---
title: Block-Inhalt
slug: Glossary/Block-level_content
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Im CSS wird Inhalt, der an der Block-Layout-Verarbeitung teilnimmt, als **Block-Inhalt** bezeichnet.

In einem Block-Layout werden Boxen eine nach der anderen vertikal angeordnet, beginnend am oberen Rand eines umgebenden Blocks. Die linke Außenkante jeder Box berührt die linke Kante des umgebenden Blocks.\
Ein Block-Element beginnt immer in einer neuen Zeile. In horizontalen Schriftsystemen, wie Englisch oder Arabisch, nimmt es den gesamten horizontalen Raum seines Elternelements (Containers) und den vertikalen Raum entsprechend der Höhe seines Inhalts ein, wodurch ein "Block" entsteht.

> [!NOTE]
> Das oben beschriebene Verhalten des Block-Layouts ändert sich, wenn der [`writing-mode`](/de/docs/Web/CSS/writing-mode) des umgebenden Blocks auf einen anderen Wert als [den Standardwert](/de/docs/Web/CSS/writing-mode#formal_definition) gesetzt wird.

> [!NOTE]
> HTML (_HyperText Markup Language_)-Elemente wurden historisch entweder als "Block-Elemente" oder "Inline-Elemente" kategorisiert. Als präsentationstechnisches Merkmal wird dies jetzt durch CSS spezifiziert.

## Beispiele

In diesem Beispiel werden zwei Absatzelemente ({{HTMLElement("p")}}) in ein {{HTMLElement("div")}} eingefügt.

```html
<div>
  <p>
    This the first paragraph. The background color of these paragraphs have been
    colored to distinguish them from their parent element.
  </p>
  <p>This is the second paragraph.</p>
</div>
```

Die Absatzelemente ({{HTMLElement("p")}}) sind standardmäßig Block-Elemente. Deshalb werden sie im Block-Layout angezeigt:

```css hidden
p {
  background-color: #8abb55;
}
```

{{EmbedLiveSample("Examples")}}

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{glossary("Inline-level content")}}
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- {{cssxref("display")}}
- [`writing-mode`](/de/docs/Web/CSS/writing-mode)
