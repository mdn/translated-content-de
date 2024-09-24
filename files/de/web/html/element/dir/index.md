---
title: "<dir>: Das Verzeichniselement"
slug: Web/HTML/Element/dir
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<dir>`** [HTML](/de/docs/Web/HTML)-Element wird als Container für ein Verzeichnis von Dateien und/oder Ordnern verwendet, möglicherweise mit Stilen und Symbolen, die durch den {{Glossary("user agent")}} angewendet werden. Verwenden Sie dieses veraltete Element nicht; stattdessen sollten Sie das {{HTMLElement("ul")}}-Element für Listen verwenden, einschließlich Listen von Dateien.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Obwohl es in frühen HTML-Spezifikationen vorhanden war, wurde es in HTML 4 als veraltet markiert und seitdem vollständig entfernt.

## DOM-Schnittstelle

Dieses Element implementiert die {{domxref("HTMLDirectoryElement")}}-Schnittstelle.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `compact` {{Deprecated_Inline}}
  - : Dieses boolesche Attribut deutet darauf hin, dass die Liste in einem kompakten Stil angezeigt werden sollte. Die Interpretation dieses Attributs hängt vom User Agent ab und es funktioniert nicht in allen Browsern.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere listenbezogene HTML-Elemente: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}}, und {{HTMLElement("menu")}};
- CSS-Eigenschaften, die besonders nützlich sein können, um das `<dir>`-Element zu stylen:

  - Die {{cssxref('list-style')}}-Eigenschaft, nützlich zur Auswahl der Anzeigeweise der Ordnungszeichen.
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), nützlich zur Handhabung komplexer verschachtelter Listen.
  - Die {{Cssxref('line-height')}}-Eigenschaft, nützlich, um das veraltete [`compact`](#compact)-Attribut zu simulieren.
  - Die {{cssxref('margin')}}-Eigenschaft, nützlich zur Steuerung des Einzugs der Liste.
