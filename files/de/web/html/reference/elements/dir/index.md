---
title: "`<dir>` HTML-Verzeichnis-Element"
short-title: <dir>
slug: Web/HTML/Reference/Elements/dir
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<dir>`** [HTML](/de/docs/Web/HTML)-Element wird als Container für ein Verzeichnis von Dateien und/oder Ordnern verwendet, möglicherweise mit vom {{Glossary("user_agent", "User-Agent")}} angewendeten Stilen und Icons. Verwenden Sie dieses veraltete Element nicht; stattdessen sollten Sie das {{HTMLElement("ul")}}-Element für Listen, einschließlich Dateilisten, verwenden.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Obwohl es in frühen HTML-Spezifikationen vorhanden war, wurde es in HTML 4 als veraltet markiert und seitdem vollständig entfernt.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLDirectoryElement`](/de/docs/Web/API/HTMLDirectoryElement)-Schnittstelle.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `compact` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Boolesche Attribut signalisiert, dass die Liste in einem kompakten Stil dargestellt werden soll. Die Interpretation dieses Attributs hängt vom User-Agent ab und es funktioniert nicht in allen Browsern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere listenbezogene HTML-Elemente: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}}, und {{HTMLElement("menu")}};
- CSS-Eigenschaften, die besonders nützlich sein können, um das `<dir>`-Element zu stylen:
  - Die {{cssxref('list-style')}}-Eigenschaft, nützlich zur Wahl der Darstellung der Ordnungszahl.
  - [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters), nützlich zur Handhabung komplexer verschachtelter Listen.
  - Die {{Cssxref('line-height')}}-Eigenschaft, nützlich zur Simulation des veralteten [`compact`](#compact)-Attributs.
  - Die {{cssxref('margin')}}-Eigenschaft, nützlich zur Kontrolle des Einzugs der Liste.
