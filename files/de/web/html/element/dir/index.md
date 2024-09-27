---
title: "<dir>: Das Directory-Element"
slug: Web/HTML/Element/dir
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<dir>`**-[HTML](/de/docs/Web/HTML)-Element wird als Container für ein Verzeichnis von Dateien und/oder Ordnern verwendet, möglicherweise mit vom [Benutzeragenten](/de/docs/Glossary/user_agent) angewendeten Stilen und Symbolen. Verwenden Sie dieses veraltete Element nicht; stattdessen sollten Sie das {{HTMLElement("ul")}}-Element für Listen, einschließlich Dateilisten, verwenden.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Trotz seiner Existenz in frühen HTML-Spezifikationen wurde es in HTML 4 als veraltet erklärt und seither vollständig entfernt.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLDirectoryElement`](/de/docs/Web/API/HTMLDirectoryElement)-Schnittstelle.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `compact` {{Deprecated_Inline}}
  - : Dieses Boolean-Attribut deutet an, dass die Liste in einem kompakten Stil gerendert werden sollte. Die Interpretation dieses Attributs hängt vom Benutzeragenten ab und funktioniert nicht in allen Browsern.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere HTML-Elemente in Zusammenhang mit Listen: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}} und {{HTMLElement("menu")}};
- CSS-Eigenschaften, die besonders nützlich sein können, um das `<dir>`-Element zu stylen:

  - Die {{cssxref('list-style')}}-Eigenschaft, nützlich, um die Art der Anzeige des Ordnungszeichens zu wählen.
  - [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), nützlich für den Umgang mit komplexen verschachtelten Listen.
  - Die {{Cssxref('line-height')}}-Eigenschaft, nützlich, um das veraltete [`compact`](#compact)-Attribut zu simulieren.
  - Die {{cssxref('margin')}}-Eigenschaft, nützlich, um den Einzug der Liste zu steuern.
