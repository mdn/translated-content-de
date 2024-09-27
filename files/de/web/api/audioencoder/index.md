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

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Element, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AudioEncoder.encodeQueueSize`](/de/docs/Web/API/AudioEncoder/encodeQueueSize) {{ReadOnlyInline}}
  - : Eine ganze Zahl, die die Anzahl der Codierungsanfragen in der Warteschlange darstellt.
- [`AudioEncoder.state`](/de/docs/Web/API/AudioEncoder/state) {{ReadOnlyInline}}
  - : Repräsentiert den Zustand des zugrundeliegenden Codecs und ob er für die Kodierung konfiguriert ist.

### Ereignisse

- [`dequeue`](/de/docs/Web/API/AudioEncoder/dequeue_event)
  - : Wird ausgelöst, um eine Verringerung der [`AudioEncoder.encodeQueueSize`](/de/docs/Web/API/AudioEncoder/encodeQueueSize) zu signalisieren.

## Statische Methoden

- [`AudioEncoder.isConfigSupported()`](/de/docs/Web/API/AudioEncoder/isConfigSupported_static)
  - : Gibt ein Versprechen zurück, das angibt, ob die bereitgestellte `AudioEncoderConfig` unterstützt wird.

## Instanz-Methoden

_Erbt Methoden von seinem übergeordneten Element, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AudioEncoder.configure()`](/de/docs/Web/API/AudioEncoder/configure)
  - : Stellt eine Steuerungsnachricht in die Warteschlange, um den Audio-Encoder für die Kodierung von Chunks zu konfigurieren.
- [`AudioEncoder.encode()`](/de/docs/Web/API/AudioEncoder/encode)
  - : Stellt eine Steuerungsnachricht in die Warteschlange, um ein gegebenes [`AudioData`](/de/docs/Web/API/AudioData)-Objekt zu kodieren.
- [`AudioEncoder.flush()`](/de/docs/Web/API/AudioEncoder/flush)
  - : Gibt ein Versprechen zurück, das aufgelöst wird, sobald alle ausstehenden Nachrichten in der Warteschlange abgeschlossen sind.
- [`AudioEncoder.reset()`](/de/docs/Web/API/AudioEncoder/reset)
  - : Setzt alle Zustände zurück, einschließlich Konfiguration, Steuerungsnachrichten in der Steuerungsnachrichtenwarteschlange und aller ausstehenden Rückrufe.
- [`AudioEncoder.close()`](/de/docs/Web/API/AudioEncoder/close)
  - : Beendet alle ausstehenden Arbeiten und gibt Systemressourcen frei.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
