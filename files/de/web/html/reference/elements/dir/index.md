---
title: "<dir>: Das Directory-Element"
slug: Web/HTML/Reference/Elements/dir
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<dir>`** [HTML](/de/docs/Web/HTML)-Element wird als Container für ein Verzeichnis von Dateien und/oder Ordnern verwendet, möglicherweise mit vom {{Glossary("user_agent", "Nutzeragenten")}} angewandten Stilen und Symbolen. Verwenden Sie dieses veraltete Element nicht; stattdessen sollten Sie das {{HTMLElement("ul")}}-Element für Listen, einschließlich Listen von Dateien, verwenden.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Obwohl es in frühen HTML-Spezifikationen vorhanden war, wurde es in HTML 4 als veraltet markiert und wurde seitdem vollständig entfernt.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLDirectoryElement`](/de/docs/Web/API/HTMLDirectoryElement)-Schnittstelle.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `compact` {{Deprecated_Inline}}
  - : Dieses Boolesche Attribut deutet darauf hin, dass die Liste in einem kompakten Stil angezeigt werden sollte. Die Interpretation dieses Attributs hängt vom Nutzeragenten ab und es funktioniert nicht in allen Browsern.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere listenbezogene HTML-Elemente: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}} und {{HTMLElement("menu")}};
- CSS-Eigenschaften, die speziell nützlich sein könnten, um das `<dir>`-Element zu stylen:
  - Die {{cssxref('list-style')}}-Eigenschaft, nützlich, um die Anzeige der Ordnungsnummer zu wählen.
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), nützlich, um komplexe verschachtelte Listen zu verwalten.
  - Die {{Cssxref('line-height')}}-Eigenschaft, nützlich, um das veraltete [`compact`](#compact)-Attribut zu simulieren.
  - Die {{cssxref('margin')}}-Eigenschaft, nützlich, um den Einzug der Liste zu kontrollieren.
