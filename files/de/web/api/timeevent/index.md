---
title: TimeEvent
slug: Web/API/TimeEvent
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{APIRef("SVG")}}

Die **`TimeEvent`**-Schnittstelle, ein Teil der [SVG SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL) Animation, bietet spezifische kontextbezogene Informationen, die mit Zeitereignissen verbunden sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("TimeEvent.detail")}} {{ReadOnlyInline}}
  - : Ein `long`, das je nach Typ des Ereignisses einige Detailinformationen über das Ereignis angibt. Für diesen Ereignistyp gibt es die Wiederholungsnummer der Animation an.
- {{domxref("TimeEvent.view")}} {{ReadOnlyInline}}
  - : Ein {{glossary("WindowProxy")}}, das das Fenster identifiziert, von dem das Ereignis ausgegangen ist.

## Instanz-Methoden

- {{domxref("TimeEvent.initTimeEvent()")}}
  - : Wird verwendet, um den Wert eines TimeEvent zu initialisieren, der über die DocumentEvent-Schnittstelle erstellt wurde. Diese Methode darf nur aufgerufen werden, bevor das TimeEvent über die dispatchEvent-Methode gesendet wurde, obwohl sie bei Bedarf während dieser Phase mehrfach aufgerufen werden kann.
