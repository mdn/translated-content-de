---
title: TimeEvent
slug: Web/API/TimeEvent
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`TimeEvent`**-Schnittstelle ist Teil der [SVG SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)-Animation und bietet spezifische kontextuelle Informationen, die mit Zeitereignissen verbunden sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`TimeEvent.detail`](/de/docs/Web/API/TimeEvent/detail) {{ReadOnlyInline}}
  - : Ein `long`, das einige Detailinformationen über das Ereignis angibt, abhängig vom Typ des Ereignisses. Für diesen Ereignistyp gibt es die Wiederholungsnummer der Animation an.
- [`TimeEvent.view`](/de/docs/Web/API/TimeEvent/view) {{ReadOnlyInline}}
  - : Ein {{Glossary("WindowProxy", "WindowProxy")}}, das das Fenster identifiziert, aus dem das Ereignis generiert wurde.

## Instanz-Methoden

- [`TimeEvent.initTimeEvent()`](/de/docs/Web/API/TimeEvent/initTimeEvent)
  - : Wird verwendet, um den Wert eines TimeEvent zu initialisieren, das über die DocumentEvent-Schnittstelle erstellt wurde. Diese Methode darf nur aufgerufen werden, bevor das TimeEvent über die dispatchEvent-Methode versendet wurde, obwohl sie in dieser Phase bei Bedarf mehrfach aufgerufen werden kann.
