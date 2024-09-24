---
title: VideoEncoder
slug: Web/API/VideoEncoder
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`VideoEncoder`**-Schnittstelle der {{domxref('WebCodecs API', '', '', 1)}} kodiert {{domxref("VideoFrame")}} Objekte in {{domxref("EncodedVideoChunk")}}s.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("VideoEncoder.VideoEncoder", "VideoEncoder()")}}
  - : Erstellt ein neues `VideoEncoder` Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{DOMxRef("EventTarget")}}._

- {{domxref("VideoEncoder.encodeQueueSize")}} {{ReadOnlyInline}}
  - : Eine ganze Zahl, die die Anzahl der Anfragen in der Kodierungsschlange darstellt.
- {{domxref("VideoEncoder.state")}} {{ReadOnlyInline}}
  - : Repräsentiert den Zustand des zugrunde liegenden Codecs und ob er für die Kodierung konfiguriert ist.

### Ereignisse

- {{domxref("VideoEncoder.dequeue_event", "dequeue")}}
  - : Wird ausgelöst, um eine Verringerung von {{domxref("VideoEncoder.encodeQueueSize")}} zu signalisieren.

## Statische Methoden

- {{domxref("VideoEncoder.isConfigSupported_static", "VideoEncoder.isConfigSupported()")}}
  - : Gibt ein Versprechen zurück, das anzeigt, ob die bereitgestellte `VideoEncoderConfig` unterstützt wird.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, {{DOMxRef("EventTarget")}}._

- {{domxref("VideoEncoder.configure()")}}
  - : Bereitet den Encoder asynchron darauf vor, Videoframes zur Kodierung mit den angegebenen Parametern zu akzeptieren.
- {{domxref("VideoEncoder.encode()")}}
  - : Kodiert asynchron ein {{domxref("VideoFrame")}}.
- {{domxref("VideoEncoder.flush()")}}
  - : Gibt ein Versprechen zurück, das sich auflöst, sobald alle ausstehenden Kodierungen abgeschlossen sind.
- {{domxref("VideoEncoder.reset()")}}
  - : Bricht alle ausstehenden Kodierungen und Rückrufe ab.
- {{domxref("VideoEncoder.close()")}}
  - : Beendet alle ausstehenden Arbeiten und gibt Systemressourcen frei.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
