---
title: "`<dir>` HTML-Verzeichniselement"
short-title: <dir>
slug: Web/HTML/Reference/Elements/dir
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{Deprecated_Header}}

Das **`<dir>`** [HTML](/de/docs/Web/HTML)-Element wird als Container für ein Verzeichnis von Dateien und/oder Ordnern verwendet, möglicherweise mit vom {{Glossary("user_agent", "Benutzeragenten")}} angewendeten Stilen und Symbolen. Verwenden Sie dieses veraltete Element nicht; stattdessen sollten Sie das {{HTMLElement("ul")}}-Element für Listen verwenden, einschließlich Listen von Dateien.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Obwohl es in frühen HTML-Spezifikationen vorhanden war, wurde es in HTML 4 veraltet und anschließend vollständig entfernt.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLDirectoryElement`](/de/docs/Web/API/HTMLDirectoryElement)-Schnittstelle.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `compact` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses boolesche Attribut deutet an, dass die Liste in einem kompakten Stil dargestellt werden soll. Die Interpretation dieses Attributs hängt vom Benutzeragenten ab und funktioniert nicht in allen Browsern.

<!-- ## Technical summary -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere listenbezogene HTML-Elemente: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}}, und {{HTMLElement("menu")}};
- CSS-Eigenschaften, die speziell nützlich sein könnten, um das `<dir>`-Element zu gestalten:
  - Die {{cssxref('list-style')}}-Eigenschaft, nützlich zur Auswahl der Darstellung der Ordinalzahlen.
  - [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters), nützlich zur Handhabung komplexer verschachtelter Listen.
  - Die {{cssxref('line-height')}}-Eigenschaft, nützlich, um das veraltete [`compact`](#compact)-Attribut zu simulieren.
  - Die {{cssxref('margin')}}-Eigenschaft, nützlich zur Kontrolle des Einzugs der Liste.
