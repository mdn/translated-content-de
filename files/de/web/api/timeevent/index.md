---
title: TimeEvent
slug: Web/API/TimeEvent
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{APIRef("SVG")}}

Die **`TimeEvent`**-Schnittstelle, ein Teil der [SVG SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL) Animation, liefert spezifische Kontextinformationen, die mit Zeitereignissen assoziiert sind.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`TimeEvent.detail`](/de/docs/Web/API/TimeEvent/detail) {{ReadOnlyInline}}
  - : Ein `long`, das einige Detailinformationen über das Ereignis angibt, abhängig vom Typ des Ereignisses. Für diesen Ereignistyp zeigt es die Wiederholungsnummer der Animation an.
- [`TimeEvent.view`](/de/docs/Web/API/TimeEvent/view) {{ReadOnlyInline}}
  - : Ein [WindowProxy](/de/docs/Glossary/WindowProxy), das das Fenster identifiziert, von dem das Ereignis generiert wurde.

## Instanzmethoden

- [`TimeEvent.initTimeEvent()`](/de/docs/Web/API/TimeEvent/initTimeEvent)
  - : Wird verwendet, um den Wert eines TimeEvent zu initialisieren, das über die DocumentEvent-Schnittstelle erstellt wurde. Diese Methode darf nur aufgerufen werden, bevor das TimeEvent über die dispatchEvent-Methode gesendet wurde, kann jedoch bei Bedarf mehrmals während dieser Phase aufgerufen werden.
