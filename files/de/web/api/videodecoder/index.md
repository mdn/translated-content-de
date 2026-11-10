---
title: VideoDecoder
slug: Web/API/VideoDecoder
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die Schnittstelle **`VideoDecoder`** der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) dekodiert Videodatenblöcke.

{{InheritanceDiagram}}

## Konstruktor

- [`VideoDecoder()`](/de/docs/Web/API/VideoDecoder/VideoDecoder)
  - : Erstellt ein neues `VideoDecoder`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VideoDecoder.decodeQueueSize`](/de/docs/Web/API/VideoDecoder/decodeQueueSize) {{ReadOnlyInline}}
  - : Eine Ganzzahl, die die Anzahl der in der Warteschlange befindlichen Dekodierungsanfragen angibt.
- [`VideoDecoder.state`](/de/docs/Web/API/VideoDecoder/state) {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand des Decoders an. Mögliche Werte sind:
    - `"unconfigured"`
    - `"configured"`
    - `"closed"`

## Statische Methoden

- [`VideoDecoder.isConfigSupported()`](/de/docs/Web/API/VideoDecoder/isConfigSupported_static)
  - : Gibt ein Promise zurück, das angibt, ob die übergebene `VideoDecoderConfig` unterstützt wird.

## Instanzmethoden

_Erbt Methoden von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VideoDecoder.configure()`](/de/docs/Web/API/VideoDecoder/configure)
  - : Reiht eine Steuernachricht ein, um den Videodecoder für die Dekodierung von Videodatenblöcken zu konfigurieren.
- [`VideoDecoder.decode()`](/de/docs/Web/API/VideoDecoder/decode)
  - : Reiht eine Steuernachricht ein, um einen bestimmten Videodatenblock zu dekodieren.
- [`VideoDecoder.flush()`](/de/docs/Web/API/VideoDecoder/flush)
  - : Gibt ein Promise zurück, das erfüllt wird, sobald alle ausstehenden Nachrichten in der Warteschlange verarbeitet wurden.
- [`VideoDecoder.reset()`](/de/docs/Web/API/VideoDecoder/reset)
  - : Setzt alle Zustände zurück, einschließlich der Konfiguration, der Steuernachrichten in der Steuernachrichten-Warteschlange und aller ausstehenden Rückruffunktionen.
- [`VideoDecoder.close()`](/de/docs/Web/API/VideoDecoder/close)
  - : Beendet alle ausstehenden Vorgänge und gibt Systemressourcen frei.

## Ereignisse

- [`dequeue`](/de/docs/Web/API/VideoDecoder/dequeue_event)
  - : Wird ausgelöst, um eine Verringerung von [`VideoDecoder.decodeQueueSize`](/de/docs/Web/API/VideoDecoder/decodeQueueSize) anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [Beispiele für die WebCodecs API](https://w3c.github.io/webcodecs/samples/)
