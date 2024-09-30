---
title: "SpeechSynthesisErrorEvent: error-Eigenschaft"
short-title: error
slug: Web/API/SpeechSynthesisErrorEvent/error
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die **`error`** Eigenschaft des
[`SpeechSynthesisErrorEvent`](/de/docs/Web/API/SpeechSynthesisErrorEvent)-Interfaces gibt einen Fehlercode zurück, der angibt, was bei einem Sprachsyntheseversuch schiefgelaufen ist.

## Wert

Ein String, der den Grund des Fehlers enthält. Mögliche Werte sind:

- `canceled`
  - : Ein Aufruf der Methode [`SpeechSynthesis.cancel`](/de/docs/Web/API/SpeechSynthesis/cancel) führte dazu, dass die
    [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) aus der Warteschlange entfernt wurde, bevor sie zu sprechen begann.
- `interrupted`
  - : Ein Aufruf der Methode [`SpeechSynthesis.cancel`](/de/docs/Web/API/SpeechSynthesis/cancel) führte dazu, dass die
    [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) unterbrochen wurde, nachdem sie zu sprechen begonnen hatte und bevor sie abgeschlossen wurde.
- `audio-busy`
  - : Der Vorgang konnte zu diesem Zeitpunkt nicht abgeschlossen werden, weil der User-Agent nicht auf das Audioausgabegerät zugreifen konnte (zum Beispiel muss der Benutzer möglicherweise eine andere Anwendung schließen).
- `audio-hardware`
  - : Der Vorgang konnte zu diesem Zeitpunkt nicht abgeschlossen werden, weil der User-Agent kein Audioausgabegerät identifizieren konnte (zum Beispiel muss der Benutzer möglicherweise einen Lautsprecher anschließen oder die Systemeinstellungen konfigurieren).
- `network`
  - : Der Vorgang konnte zu diesem Zeitpunkt nicht abgeschlossen werden, weil eine erforderliche Netzwerkkommunikation fehlgeschlagen ist.
- `synthesis-unavailable`
  - : Der Vorgang konnte zu diesem Zeitpunkt nicht abgeschlossen werden, weil keine Synthesemaschine verfügbar war (zum Beispiel muss der Benutzer möglicherweise eine Synthesemaschine installieren oder konfigurieren).
- `synthesis-failed`
  - : Der Vorgang schlug fehl, weil die Synthesemaschine einen Fehler verursacht hat.
- `language-unavailable`
  - : Keine passende Stimme war für die in [`SpeechSynthesisUtterance.lang`](/de/docs/Web/API/SpeechSynthesisUtterance/lang) gesetzte Sprache verfügbar. Sie können die Methode [`window.speechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) verwenden, um festzustellen, welche Stimmen und Sprachen im Browser des Benutzers unterstützt werden.
- `voice-unavailable`
  - : Die in [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice) gesetzte Stimme war nicht verfügbar.
- `text-too-long`
  - : Der Inhalt des Attributs [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) war zu lang, um synthetisiert zu werden.
- `invalid-argument`
  - : Der Inhalt der Eigenschaft [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate),
    [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch) oder
    [`SpeechSynthesisUtterance.volume`](/de/docs/Web/API/SpeechSynthesisUtterance/volume) war nicht gültig.
- `not-allowed`
  - : Der Start des Vorgangs war nicht erlaubt.

## Beispiele

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("input");
const voiceSelect = document.querySelector("select");

const voices = synth.getVoices();

// ...

inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
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
