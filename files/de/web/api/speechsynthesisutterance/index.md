---
title: SpeechSynthesisUtterance
slug: Web/API/SpeechSynthesisUtterance
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Speech API")}}

Die **`SpeechSynthesisUtterance`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Sprachanforderung. Sie enthält den Inhalt, den der Sprachdienst lesen soll, und Informationen darüber, wie er gelesen werden soll (z. B. Sprache, Tonhöhe und Lautstärke).

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechSynthesisUtterance()`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance)
  - : Gibt eine neue `SpeechSynthesisUtterance`-Objektinstanz zurück.

## Instanz-Eigenschaften

_`SpeechSynthesisUtterance` erbt auch Eigenschaften von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechSynthesisUtterance.lang`](/de/docs/Web/API/SpeechSynthesisUtterance/lang)
  - : Ruft die Sprache der Äußerung ab und setzt sie.
- [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch)
  - : Ruft die Tonhöhe ab und setzt sie, in der die Äußerung gesprochen wird.
- [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate)
  - : Ruft die Geschwindigkeit ab und setzt sie, in der die Äußerung gesprochen wird.
- [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text)
  - : Ruft den Text ab und setzt ihn, der synthetisiert wird, wenn die Äußerung gesprochen wird.
- [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice)
  - : Ruft die Stimme ab und setzt sie, die zum Sprechen der Äußerung verwendet wird.
- [`SpeechSynthesisUtterance.volume`](/de/docs/Web/API/SpeechSynthesisUtterance/volume)
  - : Ruft die Lautstärke ab und setzt sie, in der die Äußerung gesprochen wird.

## Ereignisse

Sie können auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hören oder einen Ereignis-Listener zu der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`boundary`](/de/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
  - : Wird ausgelöst, wenn die gesprochene Äußerung eine Wort- oder Satzgrenze erreicht.
    Auch über die `onboundary`-Eigenschaft verfügbar.
- [`end`](/de/docs/Web/API/SpeechSynthesisUtterance/end_event)
  - : Wird ausgelöst, wenn die Äußerung fertig gesprochen wurde.
    Auch über die `onend`-Eigenschaft verfügbar.
- [`error`](/de/docs/Web/API/SpeechSynthesisUtterance/error_event)
  - : Wird ausgelöst, wenn ein Fehler auftritt, der verhindert, dass die Äußerung erfolgreich gesprochen wird.
    Auch über die `onerror`-Eigenschaft verfügbar.
- [`mark`](/de/docs/Web/API/SpeechSynthesisUtterance/mark_event)
  - : Wird ausgelöst, wenn die gesprochene Äußerung einen benannten SSML-"Mark"-Tag erreicht.
    Auch über die `onmark`-Eigenschaft verfügbar.
- [`pause`](/de/docs/Web/API/SpeechSynthesisUtterance/pause_event)
  - : Wird ausgelöst, wenn die Äußerung während des Sprechens pausiert wird.
    Auch über die `onpause`-Eigenschaft verfügbar.
- [`resume`](/de/docs/Web/API/SpeechSynthesisUtterance/resume_event)
  - : Wird ausgelöst, wenn eine pausierte Äußerung fortgesetzt wird.
    Auch über die `onresume`-Eigenschaft verfügbar.
- [`start`](/de/docs/Web/API/SpeechSynthesisUtterance/start_event)
  - : Wird ausgelöst, wenn die Äußerung begonnen hat, gesprochen zu werden.
    Auch über die `onstart`-Eigenschaft verfügbar.

## Beispiele

In unserem grundlegenden [Sprachsynthesizer-Demo](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) holen wir zuerst eine Referenz zum `SpeechSynthesis`-Controller mit `window.speechSynthesis`. Nach der Definition einiger notwendiger Variablen rufen wir mit [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) eine Liste der verfügbaren Stimmen ab und füllen damit ein Auswahlmenü, damit der Nutzer wählen kann, welche Stimme er möchte.

Im `inputForm.onsubmit`-Handler verhindern wir das Absenden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault), verwenden den [`constructor`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance), um eine neue Äußerungsinstanz mit dem Text aus dem Text-{{htmlelement("input")}} zu erstellen, setzen die Äußerungs-`voice` auf die im {{htmlelement("select")}}-Element ausgewählte Stimme und starten das Sprechen der Äußerung über die [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)-Methode.

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
