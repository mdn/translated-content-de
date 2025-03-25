---
title: TimeEvent
slug: Web/API/TimeEvent
l10n:
  sourceCommit: 46b0ecd3b5280fbff659d138e3a7eaaf0fd12a24
---

{{APIRef("SVG")}}

Die Schnittstelle **`TimeEvent`**, ein Teil der [SVG SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) Animation, stellt spezifische kontextbezogene Informationen bereit, die mit Time-Events verbunden sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`TimeEvent.detail`](/de/docs/Web/API/TimeEvent/detail) {{ReadOnlyInline}}
  - : Ein `long`, das einige Detailinformationen über das Ereignis angibt, abhängig vom Typ des Ereignisses. Für diesen Ereignistyp gibt es die Wiederholungsnummer der Animation an.
- [`TimeEvent.view`](/de/docs/Web/API/TimeEvent/view) {{ReadOnlyInline}}
  - : Ein {{Glossary("WindowProxy", "WindowProxy")}}, das das Fenster identifiziert, von dem das Ereignis erzeugt wurde.

## Instanz-Methoden

- [`TimeEvent.initTimeEvent()`](/de/docs/Web/API/TimeEvent/initTimeEvent)
  - : Wird verwendet, um den Wert eines TimeEvent zu initialisieren, das über das DocumentEvent-Interface erstellt wurde. Diese Methode darf nur aufgerufen werden, bevor das TimeEvent über die dispatchEvent-Methode versendet wurde, obwohl sie bei Bedarf mehrfach während dieser Phase aufgerufen werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
