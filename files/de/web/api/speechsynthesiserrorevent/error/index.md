---
title: "SpeechSynthesisErrorEvent: error-Eigenschaft"
short-title: error
slug: Web/API/SpeechSynthesisErrorEvent/error
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die **`error`**-Eigenschaft des
{{domxref("SpeechSynthesisErrorEvent")}}-Interfaces gibt einen Fehlercode zurück, der angibt, was bei einem Sprachsyntheseversuch schiefgelaufen ist.

## Wert

Ein Zeichenfolge, die den Grund des Fehlers enthält. Mögliche Werte sind:

- `canceled`
  - : Ein Aufruf der Methode {{domxref("SpeechSynthesis.cancel")}} führte dazu, dass das
    {{domxref("SpeechSynthesisUtterance")}} vor dem Beginn der Wiedergabe aus der Warteschlange entfernt wurde.
- `interrupted`
  - : Ein Aufruf der Methode {{domxref("SpeechSynthesis.cancel")}} führte dazu, dass das
    {{domxref("SpeechSynthesisUtterance")}} nach Beginn der Wiedergabe und vor deren Abschluss unterbrochen wurde.
- `audio-busy`
  - : Der Vorgang konnte zu diesem Zeitpunkt nicht abgeschlossen werden, weil der Benutzer-Agent das Audioausgabegerät nicht erreichen konnte (zum Beispiel muss der Benutzer möglicherweise eine andere Anwendung schließen).
- `audio-hardware`
  - : Der Vorgang konnte zu diesem Zeitpunkt nicht abgeschlossen werden, weil der Benutzer-Agent kein Audioausgabegerät identifizieren konnte (zum Beispiel muss der Benutzer möglicherweise einen Lautsprecher anschließen oder Systemeinstellungen konfigurieren).
- `network`
  - : Der Vorgang konnte zu diesem Zeitpunkt nicht abgeschlossen werden, weil eine erforderliche Netzwerkkommunikation fehlgeschlagen ist.
- `synthesis-unavailable`
  - : Der Vorgang konnte zu diesem Zeitpunkt nicht abgeschlossen werden, weil keine Synthesemaschine verfügbar war (zum Beispiel muss der Benutzer möglicherweise eine Synthesemaschine installieren oder konfigurieren).
- `synthesis-failed`
  - : Der Vorgang ist fehlgeschlagen, weil die Synthesemaschine einen Fehler verursacht hat.
- `language-unavailable`
  - : Keine geeignete Stimme war verfügbar für die in {{domxref("SpeechSynthesisUtterance.lang")}} angegebene Sprache. Sie können die Methode [`window.speechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) verwenden, um festzustellen, welche Stimmen und Sprachen im Browser des Benutzers unterstützt werden.
- `voice-unavailable`
  - : Die in {{domxref("SpeechSynthesisUtterance.voice")}} gesetzte Stimme war nicht verfügbar.
- `text-too-long`
  - : Der Inhalt des {{domxref("SpeechSynthesisUtterance.text")}}-Attributs war zu lang, um synthetisiert zu werden.
- `invalid-argument`
  - : Der Inhalt der Eigenschaften {{domxref("SpeechSynthesisUtterance.rate")}},
    {{domxref("SpeechSynthesisUtterance.pitch")}} oder
    {{domxref("SpeechSynthesisUtterance.volume")}} war ungültig.
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
