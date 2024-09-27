---
title: "SpeechSynthesisErrorEvent: SpeechSynthesisErrorEvent() Konstruktor"
short-title: SpeechSynthesisErrorEvent()
slug: Web/API/SpeechSynthesisErrorEvent/SpeechSynthesisErrorEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Speech API")}}

Der **`SpeechSynthesisErrorEvent()`** Konstruktor erstellt ein neues [`SpeechSynthesisErrorEvent`](/de/docs/Web/API/SpeechSynthesisErrorEvent) Objekt.

> [!NOTE]
> Ein Webentwickler muss diesen Konstruktor in der Regel nicht aufrufen, da der Browser diese Objekte selbst erstellt, wenn Ereignisse ausgelöst werden.

## Syntax

```js-nolint
new SpeechSynthesisErrorEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitive und Browser setzen es auf `error`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`SpeechSynthesisEvent()`](/de/docs/Web/API/SpeechSynthesisEvent/SpeechSynthesisEvent) definierten Eigenschaften_ die folgenden Eigenschaften hat:
    - `error`
      - : Ein String, der den Grund für den Fehler enthält. Mögliche Werte sind:
        - `canceled`
          - : Ein Aufruf der Methode [`SpeechSynthesis.cancel`](/de/docs/Web/API/SpeechSynthesis/cancel) hat dazu geführt, dass das [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) vor Beginn der Sprachausgabe aus der Warteschlange entfernt wurde.
        - `interrupted`
          - : Ein Aufruf der Methode [`SpeechSynthesis.cancel`](/de/docs/Web/API/SpeechSynthesis/cancel) hat dazu geführt, dass das [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) unterbrochen wurde, nachdem die Sprachausgabe begonnen hatte, aber bevor sie abgeschlossen war.
        - `audio-busy`
          - : Der Vorgang konnte zu diesem Zeitpunkt nicht abgeschlossen werden, weil der User-Agent nicht auf das Audioausgabegerät zugreifen konnte (zum Beispiel muss der Benutzer möglicherweise eine andere Anwendung schließen).
        - `audio-hardware`
          - : Der Vorgang konnte zu diesem Zeitpunkt nicht abgeschlossen werden, weil der User-Agent kein Audioausgabegerät identifizieren konnte (zum Beispiel muss der Benutzer möglicherweise einen Lautsprecher anschließen oder Systemeinstellungen konfigurieren).
        - `network`
          - : Der Vorgang konnte zu diesem Zeitpunkt nicht abgeschlossen werden, weil eine erforderliche Netzwerkkommunikation fehlgeschlagen ist.
        - `synthesis-unavailable`
          - : Der Vorgang konnte zu diesem Zeitpunkt nicht abgeschlossen werden, weil keine Synthese-Engine verfügbar war (zum Beispiel muss der Benutzer möglicherweise eine Synthese-Engine installieren oder konfigurieren).
        - `synthesis-failed`
          - : Der Vorgang schlug fehl, weil die Synthese-Engine einen Fehler verursachte.
        - `language-unavailable`
          - : Keine geeignete Stimme war für die in [`SpeechSynthesisUtterance.lang`](/de/docs/Web/API/SpeechSynthesisUtterance/lang) gesetzte Sprache verfügbar. Sie können die Methode [`window.speechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) verwenden, um festzustellen, welche Stimmen und Sprachen im Browser des Benutzers unterstützt werden.
        - `voice-unavailable`
          - : Die in [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice) gesetzte Stimme war nicht verfügbar.
        - `text-too-long`
          - : Der Inhalt des Attributs [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) war zu lang, um synthetisiert zu werden.
        - `invalid-argument`
          - : Der Inhalt der Eigenschaft [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate), [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch) oder [`SpeechSynthesisUtterance.volume`](/de/docs/Web/API/SpeechSynthesisUtterance/volume) war nicht gültig.
        - `not-allowed`
          - : Der Start des Vorgangs war nicht erlaubt.

### Rückgabewert

Ein neues [`SpeechSynthesisErrorEvent`](/de/docs/Web/API/SpeechSynthesisErrorEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent)
