---
title: "<dir>: Das Directory-Element"
slug: Web/HTML/Element/dir
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<dir>`**-Element von [HTML](/de/docs/Web/HTML) wird als Container für ein Verzeichnis von Dateien und/oder Ordnern verwendet, möglicherweise mit vom [User Agent](/de/docs/Glossary/user_agent) angewendeten Stilen und Symbolen. Verwenden Sie dieses veraltete Element nicht; stattdessen sollten Sie das {{HTMLElement("ul")}}-Element für Listen benutzen, einschließlich Listen von Dateien.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Obwohl es in frühen HTML-Spezifikationen vorhanden war, wurde es in HTML 4 veraltet und seitdem vollständig entfernt.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLDirectoryElement`](/de/docs/Web/API/HTMLDirectoryElement)-Schnittstelle.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `compact` {{Deprecated_Inline}}
  - : Dieses boolesche Attribut deutet darauf hin, dass die Liste in einem kompakten Stil dargestellt werden soll. Die Interpretation dieses Attributs hängt vom User Agent ab und es funktioniert nicht in allen Browsern.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere listenbezogene HTML-Elemente: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}}, und {{HTMLElement("menu")}};
- CSS-Eigenschaften, die besonders nützlich sein können, um das `<dir>`-Element zu stylen:

  - Die {{cssxref('list-style')}}-Eigenschaft, die nützlich ist, um die Art und Weise zu wählen, wie die Ordnungszahlen angezeigt werden.
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), nützlich zur Handhabung komplexer verschachtelter Listen.
  - Die {{Cssxref('line-height')}}-Eigenschaft, nützlich zur Simulation des veralteten [`compact`](#compact)-Attributes.
  - Die {{cssxref('margin')}}-Eigenschaft, nützlich zur Steuerung des Einzugs der Liste.
