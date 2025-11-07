---
title: Block-Level-Inhalt
slug: Glossary/Block-level_content
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In CSS wird Inhalt, der an einem Blocklayout teilnimmt, als **Block-Level-Inhalt** bezeichnet.

In einem Blocklayout werden Boxen hintereinander vertikal angeordnet, beginnend am oberen Rand eines umschließenden Blocks. Die linke Außenkante jeder Box berührt die linke Kante des umschließenden Blocks.\
Ein Block-Level-Element beginnt immer in einer neuen Zeile. In horizontalen Schreibrichtungen, wie Englisch oder Arabisch, nimmt es den gesamten horizontalen Raum seines Elternelements (Containers) ein und einen vertikalen Raum, der der Höhe seines Inhalts entspricht, wodurch ein "Block" entsteht.

> [!NOTE]
> Das oben beschriebene Verhalten des Blocklayouts ändert sich, wenn der [`writing-mode`](/de/docs/Web/CSS/Reference/Properties/writing-mode) des umschließenden Blocks auf einen anderen Wert als [den Standardwert](/de/docs/Web/CSS/Reference/Properties/writing-mode#formal_definition) gesetzt wird.

> [!NOTE]
> HTML (_HyperText Markup Language_) Elemente wurden historisch als entweder "Block-Level"-Elemente oder "Inline"-Elemente kategorisiert. Diese präsentationstechnische Eigenschaft wird nun durch CSS spezifiziert.

## Beispiele

In diesem Beispiel werden zwei Paragraph ({{HTMLElement("p")}}) Elemente in ein {{HTMLElement("div")}} gestellt.

```html
<div>
  <p>
    This the first paragraph. The background color of these paragraphs have been
    colored to distinguish them from their parent element.
  </p>
  <p>This is the second paragraph.</p>
</div>
```

Die Paragraph ({{HTMLElement("p")}}) Elemente sind standardmäßig Block-Level-Elemente. Deshalb werden sie im Blocklayout angezeigt:

```css hidden
p {
  background-color: #8abb55;
}
```

{{EmbedLiveSample("Examples")}}

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Inline-level_content", "Inline-Level-Inhalt")}}
- [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- {{cssxref("display")}}
- [`writing-mode`](/de/docs/Web/CSS/Reference/Properties/writing-mode)
