---
title: AudioEncoder
slug: Web/API/AudioEncoder
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`AudioEncoder`**-Interface der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) kodiert [`AudioData`](/de/docs/Web/API/AudioData)-Objekte.

{{InheritanceDiagram}}

## Konstruktor

- [`AudioEncoder()`](/de/docs/Web/API/AudioEncoder/AudioEncoder)
  - : Erstellt ein neues `AudioEncoder`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AudioEncoder.encodeQueueSize`](/de/docs/Web/API/AudioEncoder/encodeQueueSize) {{ReadOnlyInline}}
  - : Eine Ganzzahl, die die Anzahl der Anfragen in der Kodierungswarteschlange darstellt.
- [`AudioEncoder.state`](/de/docs/Web/API/AudioEncoder/state) {{ReadOnlyInline}}
  - : Repräsentiert den Status des zugrunde liegenden Codec und ob er für die Kodierung konfiguriert ist.

### Ereignisse

- [`dequeue`](/de/docs/Web/API/AudioEncoder/dequeue_event)
  - : Wird ausgelöst, um eine Verringerung der [`AudioEncoder.encodeQueueSize`](/de/docs/Web/API/AudioEncoder/encodeQueueSize) zu signalisieren.

## Statische Methoden

- [`AudioEncoder.isConfigSupported()`](/de/docs/Web/API/AudioEncoder/isConfigSupported_static)
  - : Gibt ein Promise zurück, das anzeigt, ob die bereitgestellte `AudioEncoderConfig` unterstützt wird.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AudioEncoder.configure()`](/de/docs/Web/API/AudioEncoder/configure)
  - : Stellt eine Steuerungsnachricht in die Warteschlange, um den Audio-Encoder zur Kodierung von Chunks zu konfigurieren.
- [`AudioEncoder.encode()`](/de/docs/Web/API/AudioEncoder/encode)
  - : Stellt eine Steuerungsnachricht in die Warteschlange, um gegebene [`AudioData`](/de/docs/Web/API/AudioData)-Objekte zu kodieren.
- [`AudioEncoder.flush()`](/de/docs/Web/API/AudioEncoder/flush)
  - : Gibt ein Promise zurück, das aufgelöst wird, sobald alle ausstehenden Nachrichten in der Warteschlange abgeschlossen sind.
- [`AudioEncoder.reset()`](/de/docs/Web/API/AudioEncoder/reset)
  - : Setzt alle Zustände einschließlich Konfiguration, Steuerungsnachrichten in der Steuerungsnachrichten-Warteschlange und alle ausstehenden Rückrufe zurück.
- [`AudioEncoder.close()`](/de/docs/Web/API/AudioEncoder/close)
  - : Beendet alle ausstehenden Arbeiten und gibt Systemressourcen frei.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
