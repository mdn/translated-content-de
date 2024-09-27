---
title: AudioDecoder
slug: Web/API/AudioDecoder
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`AudioDecoder`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) dekodiert Audio-Segmente.

{{InheritanceDiagram}}

## Konstruktor

- [`AudioDecoder()`](/de/docs/Web/API/AudioDecoder/AudioDecoder)
  - : Erstellt ein neues `AudioDecoder`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AudioDecoder.decodeQueueSize`](/de/docs/Web/API/AudioDecoder/decodeQueueSize) {{ReadOnlyInline}}
  - : Eine ganze Zahl, die die Anzahl der Anfragen in der Dekodierungsschlange darstellt.
- [`AudioDecoder.state`](/de/docs/Web/API/AudioDecoder/state) {{ReadOnlyInline}}
  - : Repräsentiert den Zustand des zugrunde liegenden Codecs und ob er für die Dekodierung konfiguriert ist.

### Ereignisse

- [`dequeue`](/de/docs/Web/API/AudioDecoder/dequeue_event)
  - : Wird ausgelöst, um eine Verringerung der [`AudioDecoder.decodeQueueSize`](/de/docs/Web/API/AudioDecoder/decodeQueueSize) anzuzeigen.

## Statische Methoden

- [`AudioDecoder.isConfigSupported()`](/de/docs/Web/API/AudioDecoder/isConfigSupported_static)
  - : Gibt ein Versprechen zurück, das anzeigt, ob die bereitgestellte `AudioDecoderConfig` unterstützt wird.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AudioDecoder.configure()`](/de/docs/Web/API/AudioDecoder/configure)
  - : Fügt eine Steuerungsnachricht zur Konfiguration des Audio-Decoders für die Dekodierung von Segmenten hinzu.
- [`AudioDecoder.decode()`](/de/docs/Web/API/AudioDecoder/decode)
  - : Fügt eine Steuerungsnachricht hinzu, um ein gegebenes Audio-Segment zu dekodieren.
- [`AudioDecoder.flush()`](/de/docs/Web/API/AudioDecoder/flush)
  - : Gibt ein Versprechen zurück, das sich auflöst, sobald alle ausstehenden Nachrichten in der Schlange abgeschlossen sind.
- [`AudioDecoder.reset()`](/de/docs/Web/API/AudioDecoder/reset)
  - : Setzt alle Zustände einschließlich Konfiguration, Steuerungsnachrichten in der Steuerungsnachrichtenschlange und alle ausstehenden Rückrufe zurück.
- [`AudioDecoder.close()`](/de/docs/Web/API/AudioDecoder/close)
  - : Beendet alle ausstehenden Arbeiten und gibt Systemressourcen frei.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
