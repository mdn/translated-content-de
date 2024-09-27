---
title: VideoDecoder
slug: Web/API/VideoDecoder
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`VideoDecoder`**-Interface der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) dekodiert Videostückchen.

{{InheritanceDiagram}}

## Konstruktor

- [`VideoDecoder()`](/de/docs/Web/API/VideoDecoder/VideoDecoder)
  - : Erstellt ein neues `VideoDecoder`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VideoDecoder.decodeQueueSize`](/de/docs/Web/API/VideoDecoder/decodeQueueSize) {{ReadOnlyInline}}
  - : Eine ganze Zahl, die die Anzahl der in der Warteschlange befindlichen Dekodierungsanfragen darstellt.
- [`VideoDecoder.state`](/de/docs/Web/API/VideoDecoder/state) {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand des Decoders an. Mögliche Werte sind:
    - `"unconfigured"`
    - `"configured"`
    - `"closed"`

### Events

- [`dequeue`](/de/docs/Web/API/VideoDecoder/dequeue_event)
  - : Wird ausgelöst, um eine Verringerung der [`VideoDecoder.decodeQueueSize`](/de/docs/Web/API/VideoDecoder/decodeQueueSize) zu signalisieren.

## Statische Methoden

- [`VideoDecoder.isConfigSupported()`](/de/docs/Web/API/VideoDecoder/isConfigSupported_static)
  - : Gibt ein Promise zurück, das anzeigt, ob die bereitgestellte `VideoDecoderConfig` unterstützt wird.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VideoDecoder.configure()`](/de/docs/Web/API/VideoDecoder/configure)
  - : Stellt eine Kontrollnachricht in die Warteschlange, um den Videodecoder für die Dekodierung von Stückchen zu konfigurieren.
- [`VideoDecoder.decode()`](/de/docs/Web/API/VideoDecoder/decode)
  - : Stellt eine Kontrollnachricht in die Warteschlange, um ein gegebenes Videostück zu dekodieren.
- [`VideoDecoder.flush()`](/de/docs/Web/API/VideoDecoder/flush)
  - : Gibt ein Promise zurück, das aufgelöst wird, sobald alle ausstehenden Nachrichten in der Warteschlange abgeschlossen sind.
- [`VideoDecoder.reset()`](/de/docs/Web/API/VideoDecoder/reset)
  - : Setzt alle Zustände einschließlich Konfiguration, Kontrollnachrichten in der Kontrollnachrichten-Warteschlange und alle noch offenen Rückrufe zurück.
- [`VideoDecoder.close()`](/de/docs/Web/API/VideoDecoder/close)
  - : Beendet alle noch ausstehenden Arbeiten und gibt die Systemressourcen frei.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Videobearbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs API Beispiele](https://w3c.github.io/webcodecs/samples/)
