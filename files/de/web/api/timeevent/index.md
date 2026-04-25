---
title: TimeEvent
slug: Web/API/TimeEvent
l10n:
  sourceCommit: b57f79da1b90404fd0af82730cde8a0cdae51713
---

{{APIRef("SVG")}}

Das **`TimeEvent`**-Interface, ein Teil der [SVG SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)-Animation, bietet spezifische kontextbezogene Informationen im Zusammenhang mit Zeitereignissen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`TimeEvent.detail`](/de/docs/Web/API/TimeEvent/detail) {{ReadOnlyInline}}
  - : Ein `long`, das einige detaillierte Informationen über das Ereignis angibt, abhängig vom Typ des Ereignisses. Für diesen Ereignistyp gibt es die Wiederholungsnummer der Animation an.
- [`TimeEvent.view`](/de/docs/Web/API/TimeEvent/view) {{ReadOnlyInline}}
  - : Ein {{Glossary("WindowProxy", "WindowProxy")}}, der das Fenster identifiziert, aus dem das Ereignis generiert wurde.

## Instanz-Methoden

- [`TimeEvent.initTimeEvent()`](/de/docs/Web/API/TimeEvent/initTimeEvent)
  - : Initialisiert den Wert eines mit [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellten [`TimeEvent`](/de/docs/Web/API/TimeEvent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
