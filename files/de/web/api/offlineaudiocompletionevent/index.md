---
title: OfflineAudioCompletionEvent
slug: Web/API/OfflineAudioCompletionEvent
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Audio API")}}

Die Schnittstelle `OfflineAudioCompletionEvent` der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert Ereignisse, die auftreten, wenn die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet wird. Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) Ereignis verwendet diese Schnittstelle.

> [!NOTE]
> Diese Schnittstelle ist als veraltet markiert; sie wird aus Kompatibilitätsgründen weiterhin unterstützt, aber sie wird bald abgelöst, wenn die Promise-Version von [`OfflineAudioContext.startRendering`](/de/docs/Web/API/OfflineAudioContext/startRendering) in Browsern unterstützt wird, die sie nicht mehr benötigen werden.

{{InheritanceDiagram}}

## Konstruktor

- [`OfflineAudioCompletionEvent()`](/de/docs/Web/API/OfflineAudioCompletionEvent/OfflineAudioCompletionEvent)
  - : Erstellt eine neue Instanz des `OfflineAudioCompletionEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)_.

- [`OfflineAudioCompletionEvent.renderedBuffer`](/de/docs/Web/API/OfflineAudioCompletionEvent/renderedBuffer) {{ReadOnlyInline}}
  - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der das Ergebnis der Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) enthält.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
