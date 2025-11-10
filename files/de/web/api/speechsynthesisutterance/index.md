---
title: SpeechSynthesisUtterance
slug: Web/API/SpeechSynthesisUtterance
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

Das **`SpeechSynthesisUtterance`** Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Sprachaufforderung. Es enthält den Inhalt, den der Sprachdienst lesen soll, und Informationen darüber, wie er gelesen werden soll (z. B. Sprache, Tonhöhe und Lautstärke).

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechSynthesisUtterance()`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance)
  - : Gibt eine neue Instanz eines `SpeechSynthesisUtterance`-Objekts zurück.

## Instanz-Eigenschaften

_`SpeechSynthesisUtterance` erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechSynthesisUtterance.lang`](/de/docs/Web/API/SpeechSynthesisUtterance/lang)
  - : Ruft die Sprache der Äußerung ab und legt sie fest.
- [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch)
  - : Ruft die Tonhöhe ab und legt fest, mit der die Äußerung gesprochen wird.
- [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate)
  - : Ruft die Geschwindigkeit ab und legt fest, mit der die Äußerung gesprochen wird.
- [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text)
  - : Ruft den Text ab und legt ihn fest, der synthetisiert wird, wenn die Äußerung gesprochen wird.
- [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice)
  - : Ruft die Stimme ab und legt fest, die für das Sprechen der Äußerung verwendet wird.
- [`SpeechSynthesisUtterance.volume`](/de/docs/Web/API/SpeechSynthesisUtterance/volume)
  - : Ruft die Lautstärke ab und legt fest, mit der die Äußerung gesprochen wird.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`boundary`](/de/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
  - : Wird ausgelöst, wenn die gesprochene Äußerung einen Wort- oder Satzgrenze erreicht. Ebenfalls verfügbar über die `onboundary`-Eigenschaft.
- [`end`](/de/docs/Web/API/SpeechSynthesisUtterance/end_event)
  - : Wird ausgelöst, wenn die Äußerung fertig gesprochen wurde. Ebenfalls verfügbar über die `onend`-Eigenschaft.
- [`error`](/de/docs/Web/API/SpeechSynthesisUtterance/error_event)
  - : Wird ausgelöst, wenn ein Fehler auftritt, der verhindert, dass die Äußerung erfolgreich gesprochen wird. Ebenfalls verfügbar über die `onerror`-Eigenschaft
- [`mark`](/de/docs/Web/API/SpeechSynthesisUtterance/mark_event)
  - : Wird ausgelöst, wenn die gesprochene Äußerung ein benanntes SSML „mark“-Tag erreicht. Ebenfalls verfügbar über die `onmark`-Eigenschaft.
- [`pause`](/de/docs/Web/API/SpeechSynthesisUtterance/pause_event)
  - : Wird ausgelöst, wenn die Äußerung unterwegs pausiert wird. Ebenfalls verfügbar über die `onpause`-Eigenschaft.
- [`resume`](/de/docs/Web/API/SpeechSynthesisUtterance/resume_event)
  - : Wird ausgelöst, wenn eine pausierte Äußerung fortgesetzt wird. Ebenfalls verfügbar über die `onresume`-Eigenschaft.
- [`start`](/de/docs/Web/API/SpeechSynthesisUtterance/start_event)
  - : Wird ausgelöst, wenn die Äußerung zu sprechen begonnen hat. Ebenfalls verfügbar über die `onstart`-Eigenschaft.

## Beispiele

In unserem grundlegenden [Sprachsynthesizer-Demo](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) erhalten wir zuerst eine Referenz zum `SpeechSynthesis` Controller mit `window.speechSynthesis`. Nach der Definition einiger notwendiger Variablen rufen wir eine Liste der verfügbaren Stimmen mit [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) ab und füllen ein Auswahlmenü damit, sodass der Benutzer die gewünschte Stimme auswählen kann.

Innerhalb des `inputForm.onsubmit` Handlers verhindern wir, dass das Formular abgeschickt wird, indem wir [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) verwenden. Mit dem [`constructor`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance) erstellen wir eine neue Instanz der Äußerung, die den Text aus dem Text {{htmlelement("input")}} enthält, setzen die [`voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice) der Äußerung auf die im {{htmlelement("select")}} Element ausgewählte Stimme und starten die Äußerung über die Methode [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak).

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("input");
const voiceSelect = document.querySelector("select");

let voices;

function loadVoices() {
  voices = synth.getVoices();
  for (const [i, voice] of voices.entries()) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.value = i;
    voiceSelect.appendChild(option);
  }
}

// in Google Chrome the voices are not ready on page load
if ("onvoiceschanged" in synth) {
  synth.onvoiceschanged = loadVoices;
} else {
  loadVoices();
}

inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  utterThis.voice = voices[voiceSelect.value];
  synth.speak(utterThis);
  inputTxt.blur();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
