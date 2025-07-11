---
title: Block-Level-Inhalt
slug: Glossary/Block-level_content
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In CSS wird Inhalt, der an der Blockausrichtung teilnimmt, als **Block-Level-Inhalt** bezeichnet.

In einer Blockausrichtung werden Boxen vertikal, eine nach der anderen, vom oberen Rand eines umgebenden Blocks aus angeordnet. Die linke Außenkante jeder Box berührt die linke Kante des umgebenden Blocks.\
Ein Block-Element beginnt immer in einer neuen Zeile. In horizontalen Schreibmodi, wie Englisch oder Arabisch, nimmt es den gesamten horizontalen Raum seines Elternelements (Containers) ein und vertikalen Raum, der der Höhe seines Inhalts entspricht, und bildet dadurch einen "Block".

> [!NOTE]
> Das oben beschriebene Verhalten der Blockausrichtung ändert sich, wenn für den umgebenden Block der [`writing-mode`](/de/docs/Web/CSS/writing-mode) auf einen Wert gesetzt wird, der vom [Standardwert](/de/docs/Web/CSS/writing-mode#formal_definition) abweicht.

> [!NOTE]
> HTML (_HyperText Markup Language_)-Elemente wurden historisch entweder als "Block-Level"- oder "Inline"-Elemente kategorisiert. Diese Darstellungscharakteristik wird jetzt durch CSS festgelegt.

## Beispiele

In diesem Beispiel werden zwei Absatz- ({{HTMLElement("p")}}) Elemente in ein {{HTMLElement("div")}} eingefügt.

```html
<div>
  <p>
    This the first paragraph. The background color of these paragraphs have been
    colored to distinguish them from their parent element.
  </p>
  <p>This is the second paragraph.</p>
</div>
```

Die Absatz- ({{HTMLElement("p")}}) Elemente sind standardmäßig auf Block-Level. Aus diesem Grund werden sie in Blockausrichtung angezeigt:

```css hidden
p {
  background-color: #8abb55;
}
```

{{EmbedLiveSample("Examples")}}

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Inline-level_content", "Inline-Level-Inhalt")}}
- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- {{cssxref("display")}}
- [`writing-mode`](/de/docs/Web/CSS/writing-mode)
