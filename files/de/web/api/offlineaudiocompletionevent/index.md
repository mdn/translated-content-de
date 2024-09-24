---
title: OfflineAudioCompletionEvent
slug: Web/API/OfflineAudioCompletionEvent
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Audio API")}}

Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) `OfflineAudioCompletionEvent` Schnittstelle repräsentiert Ereignisse, die auftreten, wenn die Verarbeitung eines {{domxref("OfflineAudioContext")}} beendet ist. Das {{domxref("OfflineAudioContext/complete_event", "complete")}} Ereignis verwendet diese Schnittstelle.

> [!NOTE]
> Diese Schnittstelle ist als veraltet gekennzeichnet; sie wird aus Kompatibilitätsgründen weiterhin unterstützt, aber sie wird bald ersetzt werden, wenn die Promise-Version von {{domxref("OfflineAudioContext.startRendering")}} in Browsern unterstützt wird, die dies nicht mehr benötigen wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("OfflineAudioCompletionEvent.OfflineAudioCompletionEvent", "OfflineAudioCompletionEvent()")}}
  - : Erstellt eine neue Instanz eines `OfflineAudioCompletionEvent` Objekts.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten {{domxref("Event")}}._

- {{domxref("OfflineAudioCompletionEvent.renderedBuffer")}} {{ReadOnlyInline}}
  - : Ein {{domxref("AudioBuffer")}}, das das Ergebnis der Verarbeitung eines {{domxref("OfflineAudioContext")}} enthält.

## Instanz-Methoden

_Erbt Methoden von seinem übergeordneten {{domxref("Event")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
