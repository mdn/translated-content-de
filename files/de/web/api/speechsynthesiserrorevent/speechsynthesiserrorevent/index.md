---
title: "SpeechSynthesisErrorEvent: SpeechSynthesisErrorEvent() Konstruktor"
short-title: SpeechSynthesisErrorEvent()
slug: Web/API/SpeechSynthesisErrorEvent/SpeechSynthesisErrorEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Speech API")}}

Der **`SpeechSynthesisErrorEvent()`** Konstruktor erstellt ein neues {{domxref("SpeechSynthesisErrorEvent")}} Objekt.

> [!NOTE]
> Ein Webentwickler muss diesen Konstruktor normalerweise nicht aufrufen, da der Browser diese Objekte bei der Auslösung von Ereignissen selbst erstellt.

## Syntax

```js-nolint
new SpeechSynthesisErrorEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist case-sensitive und wird von den Browsern auf `error` gesetzt.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("SpeechSynthesisEvent/SpeechSynthesisEvent", "SpeechSynthesisEvent()")}} definierten Eigenschaften_ die folgenden Eigenschaften enthält:
    - `error`
      - : Ein String, der den Grund des Fehlers enthält. Mögliche Werte sind:
        - `canceled`
          - : Ein Aufruf der Methode {{domxref("SpeechSynthesis.cancel")}} führte dazu, dass die {{domxref("SpeechSynthesisUtterance")}} aus der Warteschlange entfernt wurde, bevor die Ausgabe gestartet wurde.
        - `interrupted`
          - : Ein Aufruf der Methode {{domxref("SpeechSynthesis.cancel")}} führte dazu, dass die {{domxref("SpeechSynthesisUtterance")}} unterbrochen wurde, nachdem die Ausgabe begonnen hatte, aber bevor sie abgeschlossen wurde.
        - `audio-busy`
          - : Die Operation konnte zu diesem Zeitpunkt nicht abgeschlossen werden, da der User-Agent nicht auf das Audioausgabegerät zugreifen konnte (zum Beispiel muss der Benutzer möglicherweise eine andere Anwendung schließen).
        - `audio-hardware`
          - : Die Operation konnte zu diesem Zeitpunkt nicht abgeschlossen werden, da der User-Agent kein Audioausgabegerät identifizieren konnte (zum Beispiel muss der Benutzer möglicherweise einen Lautsprecher anschließen oder die Systemeinstellungen konfigurieren).
        - `network`
          - : Die Operation konnte zu diesem Zeitpunkt nicht abgeschlossen werden, da eine erforderliche Netzwerkommunikation fehlgeschlagen ist.
        - `synthesis-unavailable`
          - : Die Operation konnte zu diesem Zeitpunkt nicht abgeschlossen werden, da keine Synthese-Engine verfügbar war (zum Beispiel muss der Benutzer möglicherweise eine Synthese-Engine installieren oder konfigurieren).
        - `synthesis-failed`
          - : Die Operation ist fehlgeschlagen, weil die Synthese-Engine einen Fehler gemeldet hat.
        - `language-unavailable`
          - : Es war keine geeignete Stimme für die in {{domxref("SpeechSynthesisUtterance.lang")}} festgelegte Sprache verfügbar. Sie können die Methode [`window.speechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) verwenden, um zu bestimmen, welche Stimmen und Sprachen im Browser des Benutzers unterstützt werden.
        - `voice-unavailable`
          - : Die in {{domxref("SpeechSynthesisUtterance.voice")}} festgelegte Stimme war nicht verfügbar.
        - `text-too-long`
          - : Der Inhalt des Attributs {{domxref("SpeechSynthesisUtterance.text")}} war zu lang, um synthetisiert zu werden.
        - `invalid-argument`
          - : Der Inhalt der Eigenschaften {{domxref("SpeechSynthesisUtterance.rate")}}, {{domxref("SpeechSynthesisUtterance.pitch")}} oder {{domxref("SpeechSynthesisUtterance.volume")}} war ungültig.
        - `not-allowed`
          - : Der Start der Operation war nicht erlaubt.

### Rückgabewert

Ein neues {{domxref("SpeechSynthesisErrorEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SpeechSynthesisEvent")}}
