---
title: "SpeechSynthesisErrorEvent: error-Eigenschaft"
short-title: error
slug: Web/API/SpeechSynthesisErrorEvent/error
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

Die **`error`**-Eigenschaft der [`SpeechSynthesisErrorEvent`](/de/docs/Web/API/SpeechSynthesisErrorEvent)-Schnittstelle gibt einen Fehlercode zurück, der angibt, was bei einem Versuch der Sprachsynthese schiefgelaufen ist.

## Wert

Ein String, der den Grund des Fehlers enthält. Mögliche Werte sind:

- `canceled`
  - : Ein Aufruf der Methode [`SpeechSynthesis.cancel`](/de/docs/Web/API/SpeechSynthesis/cancel) führte dazu, dass die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) aus der Warteschlange entfernt wurde, bevor sie begonnen hat, gesprochen zu werden.
- `interrupted`
  - : Ein Aufruf der Methode [`SpeechSynthesis.cancel`](/de/docs/Web/API/SpeechSynthesis/cancel) führte dazu, dass die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) unterbrochen wurde, nachdem sie begonnen hat, gesprochen zu werden und bevor sie abgeschlossen wurde.
- `audio-busy`
  - : Der Vorgang konnte momentan nicht abgeschlossen werden, da der Benutzeragent das Audioausgabegerät nicht zugreifen konnte (zum Beispiel muss der Benutzer möglicherweise eine andere Anwendung schließen, um dies zu beheben).
- `audio-hardware`
  - : Der Vorgang konnte momentan nicht abgeschlossen werden, da der Benutzeragent kein Audioausgabegerät identifizieren konnte (zum Beispiel muss der Benutzer möglicherweise einen Lautsprecher anschließen oder Systemeinstellungen konfigurieren).
- `network`
  - : Der Vorgang konnte momentan nicht abgeschlossen werden, da eine erforderliche Netzwerkkommunikation fehlgeschlagen ist.
- `synthesis-unavailable`
  - : Der Vorgang konnte momentan nicht abgeschlossen werden, weil keine Synthesemaschine verfügbar war (zum Beispiel muss der Benutzer möglicherweise eine Synthesemaschine installieren oder konfigurieren).
- `synthesis-failed`
  - : Der Vorgang schlug fehl, weil die Synthesemaschine einen Fehler gemeldet hat.
- `language-unavailable`
  - : Es war keine geeignete Stimme für die in [`SpeechSynthesisUtterance.lang`](/de/docs/Web/API/SpeechSynthesisUtterance/lang) gesetzte Sprache verfügbar. Sie können die Methode [`window.speechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) verwenden, um festzustellen, welche Stimmen und Sprachen im Browser des Benutzers unterstützt werden.
- `voice-unavailable`
  - : Die in [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice) gesetzte Stimme war nicht verfügbar.
- `text-too-long`
  - : Der Inhalt des Attributs [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) war zu lang, um synthetisiert zu werden.
- `invalid-argument`
  - : Der Inhalt der Eigenschaft [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate), [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch) oder [`SpeechSynthesisUtterance.volume`](/de/docs/Web/API/SpeechSynthesisUtterance/volume) war nicht gültig.
- `not-allowed`
  - : Der Start des Vorgangs war nicht erlaubt.

## Beispiele

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("input");
const voiceSelect = document.querySelector("select");

const voices = synth.getVoices();

// …

inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (const voice of voices) {
    if (voice.name === selectedOption) {
      utterThis.voice = voice;
    }
  }

  synth.speak(utterThis);

  utterThis.onerror = (event) => {
    console.error(
      `An error has occurred with the speech synthesis: ${event.error}`,
    );
  };

  inputTxt.blur();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
