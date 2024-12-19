---
title: VideoEncoder
slug: Web/API/VideoEncoder
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`VideoEncoder`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) kodiert [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekte in [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)s.

{{InheritanceDiagram}}

## Konstruktor

- [`VideoEncoder()`](/de/docs/Web/API/VideoEncoder/VideoEncoder)
  - : Erstellt ein neues `VideoEncoder`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VideoEncoder.encodeQueueSize`](/de/docs/Web/API/VideoEncoder/encodeQueueSize) {{ReadOnlyInline}}
  - : Eine ganze Zahl, die die Anzahl der Kodierungswarteschlangen-Anfragen darstellt.
- [`VideoEncoder.state`](/de/docs/Web/API/VideoEncoder/state) {{ReadOnlyInline}}
  - : Repräsentiert den Zustand des zugrunde liegenden Codecs und ob er für die Kodierung konfiguriert ist.

### Ereignisse

- [`dequeue`](/de/docs/Web/API/VideoEncoder/dequeue_event)
  - : Wird ausgelöst, um eine Verringerung der [`VideoEncoder.encodeQueueSize`](/de/docs/Web/API/VideoEncoder/encodeQueueSize) zu signalisieren.

## Statische Methoden

- [`VideoEncoder.isConfigSupported()`](/de/docs/Web/API/VideoEncoder/isConfigSupported_static)
  - : Gibt ein Promise zurück, das angibt, ob die bereitgestellte `VideoEncoderConfig` unterstützt wird.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VideoEncoder.configure()`](/de/docs/Web/API/VideoEncoder/configure)
  - : Bereitet den Encoder asynchron darauf vor, Videoframes mit den angegebenen Parametern zur Kodierung zu akzeptieren.
- [`VideoEncoder.encode()`](/de/docs/Web/API/VideoEncoder/encode)
  - : Kodiert asynchron einen [`VideoFrame`](/de/docs/Web/API/VideoFrame).
- [`VideoEncoder.flush()`](/de/docs/Web/API/VideoEncoder/flush)
  - : Gibt ein Promise zurück, das aufgelöst wird, sobald alle anstehenden Kodierungen abgeschlossen sind.
- [`VideoEncoder.reset()`](/de/docs/Web/API/VideoEncoder/reset)
  - : Bricht alle anstehenden Kodierungen und Rückrufe ab.
- [`VideoEncoder.close()`](/de/docs/Web/API/VideoEncoder/close)
  - : Beendet alle anstehenden Arbeiten und gibt Systemressourcen frei.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
