---
title: TimeEvent
slug: Web/API/TimeEvent
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

{{APIRef("SVG")}}

Die **`TimeEvent`**-Schnittstelle, ein Teil der [SVG SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) Animation, liefert spezifische kontextbezogene Informationen, die mit Zeit-Ereignissen verbunden sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`TimeEvent.detail`](/de/docs/Web/API/TimeEvent/detail) {{ReadOnlyInline}}
  - : Ein `long`, das bestimmte Detailinformationen über das Ereignis angibt, abhängig vom Typ des Ereignisses. Für diesen Ereignistyp wird die Wiederholungsnummer der Animation angegeben.
- [`TimeEvent.view`](/de/docs/Web/API/TimeEvent/view) {{ReadOnlyInline}}
  - : Ein {{Glossary("WindowProxy", "WindowProxy")}}, das das Fenster identifiziert, aus dem das Ereignis generiert wurde.

## Instanz-Methoden

- [`TimeEvent.initTimeEvent()`](/de/docs/Web/API/TimeEvent/initTimeEvent)
  - : Initialisiert den Wert eines `TimeEvent`, das mit Hilfe von [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
