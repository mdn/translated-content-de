---
title: SpeechSynthesisUtterance
slug: Web/API/SpeechSynthesisUtterance
l10n:
  sourceCommit: 3bf44d4b0197665d6609fef7d32f6d78c21964e9
---

{{APIRef("Web Speech API")}}

Die **`SpeechSynthesisUtterance`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) stellt eine Sprachaufforderung dar.
Sie enthält den Inhalt, den der Sprachdienst vorlesen soll, sowie Informationen darüber, wie dies geschehen soll (z. B. Sprache, Tonhöhe und Lautstärke).

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechSynthesisUtterance()`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance)
  - : Gibt eine neue `SpeechSynthesisUtterance`-Objektinstanz zurück.

## Instanz-Eigenschaften

_`SpeechSynthesisUtterance` erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechSynthesisUtterance.lang`](/de/docs/Web/API/SpeechSynthesisUtterance/lang)
  - : Ruft die Sprache der Äußerung ab und legt diese fest.
- [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch)
  - : Ruft die Tonhöhe ab, mit der die Äußerung gesprochen wird, und legt diese fest.
- [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate)
  - : Ruft die Geschwindigkeit ab, mit der die Äußerung gesprochen wird, und legt diese fest.
- [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text)
  - : Ruft den Text ab, der synthetisiert wird, wenn die Äußerung gesprochen wird, und legt diesen fest.
- [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice)
  - : Ruft die Stimme ab, die zum Sprechen der Äußerung verwendet wird, und legt diese fest.
- [`SpeechSynthesisUtterance.volume`](/de/docs/Web/API/SpeechSynthesisUtterance/volume)
  - : Ruft die Lautstärke ab, mit der die Äußerung gesprochen wird, und legt diese fest.

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abgehört werden oder durch Zuweisung eines Ereignis-Listeners an die Eigenschaft `oneventname` dieser Schnittstelle.

- [`boundary`](/de/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
  - : Wird ausgelöst, wenn die gesprochene Äußerung eine Wort- oder Satzgrenze erreicht.
    Auch über die `onboundary`-Eigenschaft verfügbar.
- [`end`](/de/docs/Web/API/SpeechSynthesisUtterance/end_event)
  - : Wird ausgelöst, wenn die Äußerung beendet ist.
    Auch über die `onend`-Eigenschaft verfügbar.
- [`error`](/de/docs/Web/API/SpeechSynthesisUtterance/error_event)
  - : Wird ausgelöst, wenn ein Fehler auftritt, der verhindert, dass die Äußerung erfolgreich gesprochen wird.
    Auch über die `onerror`-Eigenschaft verfügbar.
- [`mark`](/de/docs/Web/API/SpeechSynthesisUtterance/mark_event)
  - : Wird ausgelöst, wenn die gesprochene Äußerung einen benannten SSML-"mark"-Tag erreicht.
    Auch über die `onmark`-Eigenschaft verfügbar.
- [`pause`](/de/docs/Web/API/SpeechSynthesisUtterance/pause_event)
  - : Wird ausgelöst, wenn die Äußerung in der Mitte angehalten wird.
    Auch über die `onpause`-Eigenschaft verfügbar.
- [`resume`](/de/docs/Web/API/SpeechSynthesisUtterance/resume_event)
  - : Wird ausgelöst, wenn eine pausierte Äußerung fortgesetzt wird.
    Auch über die `onresume`-Eigenschaft verfügbar.
- [`start`](/de/docs/Web/API/SpeechSynthesisUtterance/start_event)
  - : Wird ausgelöst, wenn die Äußerung begonnen hat, gesprochen zu werden.
    Auch über die `onstart`-Eigenschaft verfügbar.

## Beispiele

In unserem grundlegenden [Sprachsynthesedemo](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) holen wir uns zunächst einen Verweis auf den SpeechSynthesis-Controller mit `window.speechSynthesis`.
Nachdem wir einige notwendige Variablen definiert haben, rufen wir eine Liste der verfügbaren Stimmen mit [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) ab und füllen ein Auswahlmenü, sodass der Benutzer die gewünschte Stimme auswählen kann.

Im Handler `inputForm.onsubmit` verhindern wir das Absenden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault), verwenden den [`Konstruktor`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance), um eine neue Instanz der Äußerung zu erstellen, die den Text aus dem Text-{{htmlelement("input")}} enthält, setzen die [`voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice)-Eigenschaft der Äußerung auf die im {{htmlelement("select")}}-Element ausgewählte Stimme und starten die Äußerung über die Methode [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak).

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
