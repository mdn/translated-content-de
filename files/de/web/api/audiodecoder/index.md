---
title: AudioDecoder
slug: Web/API/AudioDecoder
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`AudioDecoder`**-Interface der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) dekodiert Audio-Chunks.

{{InheritanceDiagram}}

## Konstruktor

- [`AudioDecoder()`](/de/docs/Web/API/AudioDecoder/AudioDecoder)
  - : Erstellt ein neues `AudioDecoder`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem übergeordneten Interface [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AudioDecoder.decodeQueueSize`](/de/docs/Web/API/AudioDecoder/decodeQueueSize) {{ReadOnlyInline}}
  - : Eine Ganzzahl, die die Anzahl der Anfragen in der Dekodierungswarteschlange angibt.
- [`AudioDecoder.state`](/de/docs/Web/API/AudioDecoder/state) {{ReadOnlyInline}}
  - : Gibt den Zustand des zugrunde liegenden Codecs an und ob er für die Dekodierung konfiguriert ist.

## Statische Methoden

- [`AudioDecoder.isConfigSupported()`](/de/docs/Web/API/AudioDecoder/isConfigSupported_static)
  - : Gibt ein Promise zurück, das angibt, ob die angegebene `AudioDecoderConfig` unterstützt wird.

## Instanzmethoden

_Erbt Methoden von seinem übergeordneten Interface [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AudioDecoder.configure()`](/de/docs/Web/API/AudioDecoder/configure)
  - : Reiht eine Kontrollnachricht ein, um den Audiodecoder für die Dekodierung von Chunks zu konfigurieren.
- [`AudioDecoder.decode()`](/de/docs/Web/API/AudioDecoder/decode)
  - : Reiht eine Kontrollnachricht ein, um einen bestimmten Audio-Chunk zu dekodieren.
- [`AudioDecoder.flush()`](/de/docs/Web/API/AudioDecoder/flush)
  - : Gibt ein Promise zurück, das erfüllt wird, sobald alle ausstehenden Nachrichten in der Warteschlange verarbeitet wurden.
- [`AudioDecoder.reset()`](/de/docs/Web/API/AudioDecoder/reset)
  - : Setzt alle Zustände zurück, einschließlich der Konfiguration, der Kontrollnachrichten in der Kontrollnachrichten-Warteschlange und aller ausstehenden Callbacks.
- [`AudioDecoder.close()`](/de/docs/Web/API/AudioDecoder/close)
  - : Beendet alle ausstehenden Aufgaben und gibt Systemressourcen frei.

## Ereignisse

- [`dequeue`](/de/docs/Web/API/AudioDecoder/dequeue_event)
  - : Wird ausgelöst, um eine Verringerung von [`AudioDecoder.decodeQueueSize`](/de/docs/Web/API/AudioDecoder/decodeQueueSize) anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
