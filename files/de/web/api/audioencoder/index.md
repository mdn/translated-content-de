---
title: AudioEncoder
slug: Web/API/AudioEncoder
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`AudioEncoder`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) kodiert {{domxref("AudioData")}}-Objekte.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("AudioEncoder.AudioEncoder", "AudioEncoder()")}}
  - : Erstellt ein neues `AudioEncoder`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{DOMxRef("EventTarget")}}._

- {{domxref("AudioEncoder.encodeQueueSize")}} {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die Anzahl der Anfragen in der Kodierungswarteschlange darstellt.
- {{domxref("AudioEncoder.state")}} {{ReadOnlyInline}}
  - : Stellt den Zustand des zugrunde liegenden Codecs dar und ob er für die Kodierung konfiguriert ist.

### Ereignisse

- {{domxref("AudioEncoder.dequeue_event", "dequeue")}}
  - : Wird ausgelöst, um eine Verringerung der {{domxref("AudioEncoder.encodeQueueSize")}} zu signalisieren.

## Statische Methoden

- {{domxref("AudioEncoder.isConfigSupported_static", "AudioEncoder.isConfigSupported()")}}
  - : Gibt ein Versprechen zurück, das anzeigt, ob die bereitgestellte `AudioEncoderConfig` unterstützt wird.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{DOMxRef("EventTarget")}}._

- {{domxref("AudioEncoder.configure()")}}
  - : Fügt eine Steuerungsnachricht in die Warteschlange ein, um den Audio-Encoder für die Kodierung von Chunks zu konfigurieren.
- {{domxref("AudioEncoder.encode()")}}
  - : Fügt eine Steuerungsnachricht in die Warteschlange ein, um gegebene {{domxref("AudioData")}}-Objekte zu kodieren.
- {{domxref("AudioEncoder.flush()")}}
  - : Gibt ein Versprechen zurück, das aufgelöst wird, sobald alle ausstehenden Nachrichten in der Warteschlange abgeschlossen sind.
- {{domxref("AudioEncoder.reset()")}}
  - : Setzt alle Zustände einschließlich der Konfiguration, der Steuerungsnachrichten in der Steuerungsnachrichtenschlange und aller ausstehenden Rückrufe zurück.
- {{domxref("AudioEncoder.close()")}}
  - : Beendet alle ausstehenden Arbeiten und gibt Systemressourcen frei.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
