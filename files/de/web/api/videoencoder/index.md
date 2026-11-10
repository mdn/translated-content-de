---
title: VideoEncoder
slug: Web/API/VideoEncoder
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die Schnittstelle **`VideoEncoder`** der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) kodiert [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekte zu [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekten.

{{InheritanceDiagram}}

## Konstruktor

- [`VideoEncoder()`](/de/docs/Web/API/VideoEncoder/VideoEncoder)
  - : Erstellt ein neues `VideoEncoder`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VideoEncoder.encodeQueueSize`](/de/docs/Web/API/VideoEncoder/encodeQueueSize) {{ReadOnlyInline}}
  - : Eine Ganzzahl, die die Anzahl der Anfragen in der Kodierungswarteschlange angibt.
- [`VideoEncoder.state`](/de/docs/Web/API/VideoEncoder/state) {{ReadOnlyInline}}
  - : Gibt den Zustand des zugrunde liegenden Codecs an und ob er für die Kodierung konfiguriert ist.

## Statische Methoden

- [`VideoEncoder.isConfigSupported()`](/de/docs/Web/API/VideoEncoder/isConfigSupported_static)
  - : Gibt ein Promise zurück, das angibt, ob die angegebene `VideoEncoderConfig` unterstützt wird.

## Instanzmethoden

_Erbt Methoden von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VideoEncoder.configure()`](/de/docs/Web/API/VideoEncoder/configure)
  - : Bereitet den Encoder asynchron darauf vor, Videoframes mit den angegebenen Parametern zur Kodierung entgegenzunehmen.
- [`VideoEncoder.encode()`](/de/docs/Web/API/VideoEncoder/encode)
  - : Kodiert einen [`VideoFrame`](/de/docs/Web/API/VideoFrame) asynchron.
- [`VideoEncoder.flush()`](/de/docs/Web/API/VideoEncoder/flush)
  - : Gibt ein Promise zurück, das erfüllt wird, sobald alle ausstehenden Kodierungen abgeschlossen sind.
- [`VideoEncoder.reset()`](/de/docs/Web/API/VideoEncoder/reset)
  - : Bricht alle ausstehenden Kodierungen und Callbacks ab.
- [`VideoEncoder.close()`](/de/docs/Web/API/VideoEncoder/close)
  - : Beendet alle ausstehenden Vorgänge und gibt Systemressourcen frei.

## Ereignisse

- [`dequeue`](/de/docs/Web/API/VideoEncoder/dequeue_event)
  - : Wird ausgelöst, um eine Verringerung von [`VideoEncoder.encodeQueueSize`](/de/docs/Web/API/VideoEncoder/encodeQueueSize) anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
