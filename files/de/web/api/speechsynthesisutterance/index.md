---
title: SpeechSynthesisUtterance
slug: Web/API/SpeechSynthesisUtterance
l10n:
  sourceCommit: 3bf44d4b0197665d6609fef7d32f6d78c21964e9
---

{{APIRef("Web Speech API")}}

Das **`SpeechSynthesisUtterance`** Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Sprachaufforderung.
Es enthält den Inhalt, den der Sprachdienst lesen soll, und Informationen darüber, wie er gelesen werden soll (z.B. Sprache, Tonhöhe und Lautstärke).

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechSynthesisUtterance()`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance)
  - : Gibt eine neue Instanz des Objekts `SpeechSynthesisUtterance` zurück.

## Instanzeigenschaften

_`SpeechSynthesisUtterance` erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechSynthesisUtterance.lang`](/de/docs/Web/API/SpeechSynthesisUtterance/lang)
  - : Ruft die Sprache der Äußerung ab und setzt sie.
- [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch)
  - : Ruft die Tonhöhe ab und setzt sie, mit der die Äußerung gesprochen wird.
- [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate)
  - : Ruft die Geschwindigkeit ab und setzt sie, mit der die Äußerung gesprochen wird.
- [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text)
  - : Ruft den Text ab und setzt ihn, der synthetisiert wird, wenn die Äußerung gesprochen wird.
- [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice)
  - : Ruft die Stimme ab und setzt sie, die verwendet wird, um die Äußerung zu sprechen.
- [`SpeechSynthesisUtterance.volume`](/de/docs/Web/API/SpeechSynthesisUtterance/volume)
  - : Ruft die Lautstärke ab und setzt sie, mit der die Äußerung gesprochen wird.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ab oder indem Sie einen Ereignislistener der Eigenschaft `oneventname` dieses Interfaces zuweisen.

- [`boundary`](/de/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
  - : Wird ausgelöst, wenn die gesprochene Äußerung einen Wort- oder Satzgrenze erreicht.
    Auch verfügbar über die `onboundary`-Eigenschaft.
- [`end`](/de/docs/Web/API/SpeechSynthesisUtterance/end_event)
  - : Wird ausgelöst, wenn die Äußerung fertig gesprochen wurde.
    Auch verfügbar über die `onend`-Eigenschaft.
- [`error`](/de/docs/Web/API/SpeechSynthesisUtterance/error_event)
  - : Wird ausgelöst, wenn ein Fehler auftritt, der verhindert, dass die Äußerung erfolgreich gesprochen wird.
    Auch verfügbar über die `onerror`-Eigenschaft.
- [`mark`](/de/docs/Web/API/SpeechSynthesisUtterance/mark_event)
  - : Wird ausgelöst, wenn die gesprochene Äußerung einen benannten SSML "mark" Tag erreicht.
    Auch verfügbar über die `onmark`-Eigenschaft.
- [`pause`](/de/docs/Web/API/SpeechSynthesisUtterance/pause_event)
  - : Wird ausgelöst, wenn die Äußerung in der Mitte unterbrochen wird.
    Auch verfügbar über die `onpause`-Eigenschaft.
- [`resume`](/de/docs/Web/API/SpeechSynthesisUtterance/resume_event)
  - : Wird ausgelöst, wenn eine pausierte Äußerung fortgesetzt wird.
    Auch verfügbar über die `onresume`-Eigenschaft.
- [`start`](/de/docs/Web/API/SpeechSynthesisUtterance/start_event)
  - : Wird ausgelöst, wenn die Äußerung begonnen hat, gesprochen zu werden.
    Auch verfügbar über die `onstart`-Eigenschaft.

## Beispiele

In unserem einfachen [Sprachsynthesizer-Demo](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) holen wir zunächst eine Referenz zum SpeechSynthesis-Controller mit `window.speechSynthesis`.
Nachdem wir einige notwendige Variablen definiert haben, rufen wir eine Liste der verfügbaren Stimmen mit [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) ab und füllen ein Auswahlmenü mit ihnen, sodass der Benutzer auswählen kann, welche Stimme er möchte.

Im `inputForm.onsubmit` Handler verhindern wir das Absenden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault), verwenden den [`constructor`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance), um eine neue Instanz der Äußerung mit dem Text aus dem Text-{{htmlelement("input")}} zu erstellen, setzen die [`voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice) der Äußerung auf die im {{htmlelement("select")}} Element ausgewählte Stimme und starten die Äußerung mit der Methode [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak).

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("input");
const voiceSelect = document.querySelector("select");

let voices;

function loadVoices() {
  voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
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
