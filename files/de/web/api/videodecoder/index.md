---
title: VideoDecoder
slug: Web/API/VideoDecoder
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`VideoDecoder`**-Schnittstelle der {{domxref('WebCodecs API','','','true')}} dekodiert Video-Chunks.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("VideoDecoder.VideoDecoder", "VideoDecoder()")}}
  - : Erstellt ein neues `VideoDecoder`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{DOMxRef("EventTarget")}}._

- {{domxref("VideoDecoder.decodeQueueSize")}} {{ReadOnlyInline}}
  - : Eine ganze Zahl, die die Anzahl der eingereihten Dekodierungsanfragen darstellt.
- {{domxref("VideoDecoder.state")}} {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand des Decoders an. Mögliche Werte sind:
    - `"unconfigured"`
    - `"configured"`
    - `"closed"`

### Ereignisse

- {{domxref("VideoDecoder.dequeue_event", "dequeue")}}
  - : Wird ausgelöst, um eine Verringerung von {{domxref("VideoDecoder.decodeQueueSize")}} zu signalisieren.

## Statische Methoden

- {{domxref("VideoDecoder.isConfigSupported_static", "VideoDecoder.isConfigSupported()")}}
  - : Gibt ein Promise zurück, das anzeigt, ob die bereitgestellte `VideoDecoderConfig` unterstützt wird.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, {{DOMxRef("EventTarget")}}._

- {{domxref("VideoDecoder.configure()")}}
  - : Stellt eine Steuerungsnachricht in die Warteschlange, um den Videodecoder zur Dekodierung von Chunks zu konfigurieren.
- {{domxref("VideoDecoder.decode()")}}
  - : Stellt eine Steuerungsnachricht in die Warteschlange, um einen gegebenen Video-Chunk zu dekodieren.
- {{domxref("VideoDecoder.flush()")}}
  - : Gibt ein Promise zurück, das aufgelöst wird, sobald alle ausstehenden Nachrichten in der Warteschlange abgeschlossen sind.
- {{domxref("VideoDecoder.reset()")}}
  - : Setzt alle Zustände zurück, einschließlich der Konfiguration, Steuerungsnachrichten in der Steuerungsnachrichten-Warteschlange und aller ausstehenden Rückrufe.
- {{domxref("VideoDecoder.close()")}}
  - : Beendet alle ausstehenden Arbeiten und gibt Systemressourcen frei.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Videobearbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs API Beispiele](https://w3c.github.io/webcodecs/samples/)
