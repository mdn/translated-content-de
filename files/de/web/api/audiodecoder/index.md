---
title: AudioDecoder
slug: Web/API/AudioDecoder
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`AudioDecoder`**-Schnittstelle der {{domxref('WebCodecs API','','',' ')}} dekodiert Audiostücke.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("AudioDecoder.AudioDecoder", "AudioDecoder()")}}
  - : Erstellt ein neues `AudioDecoder`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{DOMxRef("EventTarget")}}._

- {{domxref("AudioDecoder.decodeQueueSize")}} {{ReadOnlyInline}}
  - : Eine Ganzzahl, die die Anzahl der Anfragen in der Dekodierungswarteschlange darstellt.
- {{domxref("AudioDecoder.state")}} {{ReadOnlyInline}}
  - : Repräsentiert den Zustand des zugrunde liegenden Codecs und ob er für die Dekodierung konfiguriert ist.

### Ereignisse

- {{domxref("AudioDecoder.dequeue_event", "dequeue")}}
  - : Wird ausgelöst, um eine Verringerung von {{domxref("AudioDecoder.decodeQueueSize")}} zu signalisieren.

## Statische Methoden

- {{domxref("AudioDecoder/isConfigSupported_static", "AudioDecoder.isConfigSupported()")}}
  - : Gibt ein Versprechen zurück, das angibt, ob die bereitgestellte `AudioDecoderConfig` unterstützt wird.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil {{DOMxRef("EventTarget")}}._

- {{domxref("AudioDecoder.configure()")}}
  - : Stellt eine Steuerungsnachricht in die Warteschlange, um den Audio-Decoder zur Dekodierung von Stücken zu konfigurieren.
- {{domxref("AudioDecoder.decode()")}}
  - : Stellt eine Steuerungsnachricht in die Warteschlange, um ein gegebenes Audiostück zu dekodieren.
- {{domxref("AudioDecoder.flush()")}}
  - : Gibt ein Versprechen zurück, das aufgelöst wird, sobald alle ausstehenden Nachrichten in der Warteschlange abgeschlossen sind.
- {{domxref("AudioDecoder.reset()")}}
  - : Setzt alle Zustände zurück, einschließlich Konfiguration, Steuerungsnachrichten in der Steuerungsnachrichtenwarteschlange und alle ausstehenden Rückrufe.
- {{domxref("AudioDecoder.close()")}}
  - : Beendet alle ausstehenden Arbeiten und gibt Systemressourcen frei.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
