---
title: AudioDecoder
slug: Web/API/AudioDecoder
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`AudioDecoder`**-Interface der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) dekodiert Audiodatenblöcke.

{{InheritanceDiagram}}

## Konstruktor

- [`AudioDecoder()`](/de/docs/Web/API/AudioDecoder/AudioDecoder)
  - : Erstellt ein neues `AudioDecoder`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem übergeordneten Element, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AudioDecoder.decodeQueueSize`](/de/docs/Web/API/AudioDecoder/decodeQueueSize) {{ReadOnlyInline}}
  - : Eine ganze Zahl, die die Anzahl der Dekodierwarteschlangenanforderungen darstellt.
- [`AudioDecoder.state`](/de/docs/Web/API/AudioDecoder/state) {{ReadOnlyInline}}
  - : Stellt den Zustand des zugrunde liegenden Codecs dar und ob dieser für das Dekodieren konfiguriert ist.

### Ereignisse

- [`dequeue`](/de/docs/Web/API/AudioDecoder/dequeue_event)
  - : Wird ausgelöst, um eine Abnahme in [`AudioDecoder.decodeQueueSize`](/de/docs/Web/API/AudioDecoder/decodeQueueSize) zu signalisieren.

## Statische Methoden

- [`AudioDecoder.isConfigSupported()`](/de/docs/Web/API/AudioDecoder/isConfigSupported_static)
  - : Gibt ein Promise zurück, das angibt, ob die bereitgestellte `AudioDecoderConfig` unterstützt wird.

## Instanzmethoden

_Erbt Methoden von seinem übergeordneten Element, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AudioDecoder.configure()`](/de/docs/Web/API/AudioDecoder/configure)
  - : Stellt eine Steuerungsnachricht in die Warteschlange, um den Audiodecoder für das Dekodieren von Audiodatenblöcken zu konfigurieren.
- [`AudioDecoder.decode()`](/de/docs/Web/API/AudioDecoder/decode)
  - : Stellt eine Steuerungsnachricht in die Warteschlange, um einen gegebenen Audiodatenblock zu dekodieren.
- [`AudioDecoder.flush()`](/de/docs/Web/API/AudioDecoder/flush)
  - : Gibt ein Promise zurück, das aufgelöst wird, sobald alle ausstehenden Nachrichten in der Warteschlange abgeschlossen sind.
- [`AudioDecoder.reset()`](/de/docs/Web/API/AudioDecoder/reset)
  - : Setzt alle Zustände zurück, einschließlich Konfiguration, Steuerungsnachrichten in der Steuerungsnachrichtenwarteschlange und aller ausstehenden Rückrufe.
- [`AudioDecoder.close()`](/de/docs/Web/API/AudioDecoder/close)
  - : Beendet alle ausstehenden Arbeiten und gibt Systemressourcen frei.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
