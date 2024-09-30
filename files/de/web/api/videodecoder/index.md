---
title: VideoDecoder
slug: Web/API/VideoDecoder
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`VideoDecoder`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) dekodiert Videostücke.

{{InheritanceDiagram}}

## Konstruktor

- [`VideoDecoder()`](/de/docs/Web/API/VideoDecoder/VideoDecoder)
  - : Erstellt ein neues `VideoDecoder`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VideoDecoder.decodeQueueSize`](/de/docs/Web/API/VideoDecoder/decodeQueueSize) {{ReadOnlyInline}}
  - : Eine Ganzzahl, die die Anzahl der in der Warteschlange befindlichen Dekodierungsanfragen darstellt.
- [`VideoDecoder.state`](/de/docs/Web/API/VideoDecoder/state) {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand des Decoders an. Mögliche Werte sind:
    - `"unconfigured"`
    - `"configured"`
    - `"closed"`

### Ereignisse

- [`dequeue`](/de/docs/Web/API/VideoDecoder/dequeue_event)
  - : Wird ausgelöst, um eine Verringerung der [`VideoDecoder.decodeQueueSize`](/de/docs/Web/API/VideoDecoder/decodeQueueSize) zu signalisieren.

## Statische Methoden

- [`VideoDecoder.isConfigSupported()`](/de/docs/Web/API/VideoDecoder/isConfigSupported_static)
  - : Gibt ein Versprechen zurück, das anzeigt, ob die bereitgestellte `VideoDecoderConfig` unterstützt wird.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VideoDecoder.configure()`](/de/docs/Web/API/VideoDecoder/configure)
  - : Fügt eine Steuerbotschaft in die Warteschlange ein, um den Videodecoder für das Dekodieren von Stücken zu konfigurieren.
- [`VideoDecoder.decode()`](/de/docs/Web/API/VideoDecoder/decode)
  - : Fügt eine Steuerbotschaft in die Warteschlange ein, um ein gegebenes Videostück zu dekodieren.
- [`VideoDecoder.flush()`](/de/docs/Web/API/VideoDecoder/flush)
  - : Gibt ein Versprechen zurück, das erfüllt wird, sobald alle ausstehenden Botschaften in der Warteschlange abgeschlossen sind.
- [`VideoDecoder.reset()`](/de/docs/Web/API/VideoDecoder/reset)
  - : Setzt alle Zustände zurück, einschließlich Konfiguration, Steuerbotschaften in der Warteschlange für Steuerbotschaften und aller ausstehenden Rückrufe.
- [`VideoDecoder.close()`](/de/docs/Web/API/VideoDecoder/close)
  - : Beendet alle ausstehenden Arbeiten und gibt Systemressourcen frei.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Videobearbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs API Beispiele](https://w3c.github.io/webcodecs/samples/)
