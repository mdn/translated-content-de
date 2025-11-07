---
title: "<dir>: Das Verzeichniselement"
slug: Web/HTML/Reference/Elements/dir
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Deprecated_Header}}

Das **`<dir>`** [HTML](/de/docs/Web/HTML)-Element wird als Container für ein Verzeichnis von Dateien und/oder Ordnern verwendet, möglicherweise mit vom {{Glossary("user_agent", "User-Agent")}} angewendeten Stilen und Symbolen. Verwenden Sie dieses veraltete Element nicht mehr; stattdessen sollten Sie das {{HTMLElement("ul")}}-Element für Listen, einschließlich Listen von Dateien, verwenden.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Obwohl es in frühen HTML-Spezifikationen vorhanden war, wurde es in HTML 4 als veraltet gekennzeichnet und seitdem vollständig entfernt.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLDirectoryElement`](/de/docs/Web/API/HTMLDirectoryElement)-Schnittstelle.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `compact` {{Deprecated_Inline}}
  - : Dieses boolesche Attribut deutet darauf hin, dass die Liste in einem kompakten Stil gerendert werden sollte. Die Interpretation dieses Attributs hängt vom User-Agent ab und funktioniert nicht in allen Browsern.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere listenbezogene HTML-Elemente: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}}, und {{HTMLElement("menu")}};
- CSS-Eigenschaften, die speziell nützlich sein könnten, um das `<dir>`-Element zu stylen:
  - Die {{cssxref('list-style')}}-Eigenschaft, nützlich, um die Art der Anzeige der Ordnungszahl zu wählen.
  - [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters), nützlich für die Handhabung komplexer verschachtelter Listen.
  - Die {{Cssxref('line-height')}}-Eigenschaft, nützlich, um das veraltete [`compact`](#compact)-Attribut zu simulieren.
  - Die {{cssxref('margin')}}-Eigenschaft, nützlich, um den Einzug der Liste zu steuern.
