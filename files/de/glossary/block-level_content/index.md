---
title: Block-Inhalt
slug: Glossary/Block-level_content
l10n:
  sourceCommit: 96a73163513476fe49bfba695acedb7622135354
---

In CSS wird Inhalt, der an der Block-Layout-Teilnahme beteiligt ist, als **Block-Inhalt** bezeichnet.

In einem Block-Layout werden Boxen nacheinander vertikal angeordnet, beginnend oben in einem enthaltenden Block. Die linke Außenkante jeder Box berührt die linke Kante des enthaltenden Blocks.\
Ein Block-Element beginnt immer auf einer neuen Zeile. In horizontalen Schreibrichtungen, wie Englisch oder Arabisch, nimmt es den gesamten horizontalen Raum seines Elternelements (Containers) ein und den vertikalen Raum, der der Höhe seines Inhalts entspricht, wodurch ein "Block" entsteht.

> [!NOTE]
> Das oben beschriebene Verhalten des Block-Layouts ändert sich, wenn der {{cssxref("writing-mode")}} des enthaltenden Blocks auf einen anderen Wert als [den Standardwert](/de/docs/Web/CSS/Reference/Properties/writing-mode#formal_definition) gesetzt ist.

> [!NOTE]
> HTML (_HyperText Markup Language_) Elemente wurden historisch entweder als "Block-Level"-Elemente oder "Inline"-Elemente kategorisiert. Als präsentationstechnisches Merkmal wird dies jetzt durch CSS festgelegt.

## Beispiele

In diesem Beispiel werden zwei Absatz- ({{HTMLElement("p")}}) Elemente in einem {{HTMLElement("div")}} platziert.

```html
<div>
  <p>
    This the first paragraph. The background color of these paragraphs have been
    colored to distinguish them from their parent element.
  </p>
  <p>This is the second paragraph.</p>
</div>
```

Die Absatz- ({{HTMLElement("p")}}) Elemente sind standardmäßig blockmäßig. Deshalb werden sie im Block-Layout angezeigt:

```css hidden
p {
  background-color: #8abb55;
}
```

{{EmbedLiveSample("Examples")}}

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Inline-level_content", "Inline-Inhalt")}}
- [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- {{cssxref("display")}}
- {{cssxref("writing-mode")}}
