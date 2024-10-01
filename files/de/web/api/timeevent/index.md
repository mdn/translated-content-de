---
title: TimeEvent
slug: Web/API/TimeEvent
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{APIRef("SVG")}}

Die **`TimeEvent`**-Schnittstelle, ein Teil der [SVG SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL) Animation, bietet spezifische kontextbezogene Informationen, die mit Time-Ereignissen verbunden sind.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`TimeEvent.detail`](/de/docs/Web/API/TimeEvent/detail) {{ReadOnlyInline}}
  - : Ein `long`, das je nach Typ des Ereignisses einige Detailinformationen über das Event angibt. Für diesen Ereignistyp zeigt es die Wiederholungsnummer der Animation an.
- [`TimeEvent.view`](/de/docs/Web/API/TimeEvent/view) {{ReadOnlyInline}}
  - : Ein {{Glossary("WindowProxy", "WindowProxy")}}, das das Fenster identifiziert, aus dem das Ereignis generiert wurde.

## Instanzmethoden

- [`TimeEvent.initTimeEvent()`](/de/docs/Web/API/TimeEvent/initTimeEvent)
  - : Wird verwendet, um den Wert eines TimeEvent zu initialisieren, das über die DocumentEvent-Schnittstelle erstellt wurde. Diese Methode darf nur aufgerufen werden, bevor das TimeEvent über die dispatchEvent-Methode gesendet wurde, obwohl sie bei Bedarf während dieser Phase mehrmals aufgerufen werden kann.
