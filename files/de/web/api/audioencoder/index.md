---
title: AudioEncoder
slug: Web/API/AudioEncoder
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`AudioEncoder`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) kodiert [`AudioData`](/de/docs/Web/API/AudioData)-Objekte.

{{InheritanceDiagram}}

## Konstruktor

- [`AudioEncoder()`](/de/docs/Web/API/AudioEncoder/AudioEncoder)
  - : Erstellt ein neues `AudioEncoder`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AudioEncoder.encodeQueueSize`](/de/docs/Web/API/AudioEncoder/encodeQueueSize) {{ReadOnlyInline}}
  - : Eine Ganzzahl, die die Anzahl der Anfragen in der Kodierungswarteschlange angibt.
- [`AudioEncoder.state`](/de/docs/Web/API/AudioEncoder/state) {{ReadOnlyInline}}
  - : Gibt den Zustand des zugrunde liegenden Codecs an und ob er für die Kodierung konfiguriert ist.

## Statische Methoden

- [`AudioEncoder.isConfigSupported()`](/de/docs/Web/API/AudioEncoder/isConfigSupported_static)
  - : Gibt ein Promise zurück, das angibt, ob die angegebene `AudioEncoderConfig` unterstützt wird.

## Instanzmethoden

_Erbt Methoden von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AudioEncoder.configure()`](/de/docs/Web/API/AudioEncoder/configure)
  - : Reiht eine Steuernachricht ein, um den Audio-Encoder für die Kodierung von Chunks zu konfigurieren.
- [`AudioEncoder.encode()`](/de/docs/Web/API/AudioEncoder/encode)
  - : Reiht eine Steuernachricht ein, um ein angegebenes [`AudioData`](/de/docs/Web/API/AudioData)-Objekt zu kodieren.
- [`AudioEncoder.flush()`](/de/docs/Web/API/AudioEncoder/flush)
  - : Gibt ein Promise zurück, das erfüllt wird, sobald alle ausstehenden Nachrichten in der Warteschlange abgearbeitet wurden.
- [`AudioEncoder.reset()`](/de/docs/Web/API/AudioEncoder/reset)
  - : Setzt sämtliche Zustände zurück, einschließlich der Konfiguration, der Steuernachrichten in der Steuernachrichtenwarteschlange und aller ausstehenden Callbacks.
- [`AudioEncoder.close()`](/de/docs/Web/API/AudioEncoder/close)
  - : Beendet alle ausstehenden Arbeiten und gibt Systemressourcen frei.

## Ereignisse

- [`dequeue`](/de/docs/Web/API/AudioEncoder/dequeue_event)
  - : Wird ausgelöst, um eine Verringerung von [`AudioEncoder.encodeQueueSize`](/de/docs/Web/API/AudioEncoder/encodeQueueSize) zu signalisieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
