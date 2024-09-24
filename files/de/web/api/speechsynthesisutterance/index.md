---
title: SpeechSynthesisUtterance
slug: Web/API/SpeechSynthesisUtterance
l10n:
  sourceCommit: 3bf44d4b0197665d6609fef7d32f6d78c21964e9
---

{{APIRef("Web Speech API")}}

Die **`SpeechSynthesisUtterance`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Sprachanforderung. Sie enthält den Inhalt, den der Sprachdienst lesen soll, sowie Informationen darüber, wie er gelesen werden soll (z. B. Sprache, Tonhöhe und Lautstärke).

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance", "SpeechSynthesisUtterance()")}}
  - : Gibt eine neue `SpeechSynthesisUtterance`-Objektinstanz zurück.

## Instanz-Eigenschaften

_`SpeechSynthesisUtterance` erbt auch Eigenschaften von seiner Elternschnittstelle, {{domxref("EventTarget")}}._

- {{domxref("SpeechSynthesisUtterance.lang")}}
  - : Ruft die Sprache der Äußerung ab und legt sie fest.
- {{domxref("SpeechSynthesisUtterance.pitch")}}
  - : Ruft die Tonhöhe ab und legt sie fest, in der die Äußerung gesprochen wird.
- {{domxref("SpeechSynthesisUtterance.rate")}}
  - : Ruft die Geschwindigkeit ab und legt sie fest, in der die Äußerung gesprochen wird.
- {{domxref("SpeechSynthesisUtterance.text")}}
  - : Ruft den Text ab und legt ihn fest, der beim Sprechen der Äußerung synthetisiert wird.
- {{domxref("SpeechSynthesisUtterance.voice")}}
  - : Ruft die Stimme ab und legt sie fest, die zur Wiedergabe der Äußerung verwendet wird.
- {{domxref("SpeechSynthesisUtterance.volume")}}
  - : Ruft die Lautstärke ab und legt sie fest, mit der die Äußerung gesprochen wird.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener an die `oneventname` Eigenschaft dieser Schnittstelle zuweisen.

- [`boundary`](/de/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
  - : Wird ausgelöst, wenn die gesprochene Äußerung eine Wort- oder Satzgrenze erreicht. Auch über die `onboundary`-Eigenschaft verfügbar.
- [`end`](/de/docs/Web/API/SpeechSynthesisUtterance/end_event)
  - : Wird ausgelöst, wenn das Sprechen der Äußerung beendet ist. Auch über die `onend`-Eigenschaft verfügbar.
- [`error`](/de/docs/Web/API/SpeechSynthesisUtterance/error_event)
  - : Wird ausgelöst, wenn ein Fehler auftritt, der verhindert, dass die Äußerung erfolgreich gesprochen wird. Auch über die `onerror`-Eigenschaft verfügbar.
- [`mark`](/de/docs/Web/API/SpeechSynthesisUtterance/mark_event)
  - : Wird ausgelöst, wenn die gesprochene Äußerung einen benannten SSML-"Mark"-Tag erreicht. Auch über die `onmark`-Eigenschaft verfügbar.
- [`pause`](/de/docs/Web/API/SpeechSynthesisUtterance/pause_event)
  - : Wird ausgelöst, wenn die Äußerung in der Mitte pausiert wird. Auch über die `onpause`-Eigenschaft verfügbar.
- [`resume`](/de/docs/Web/API/SpeechSynthesisUtterance/resume_event)
  - : Wird ausgelöst, wenn eine pausierte Äußerung fortgesetzt wird. Auch über die `onresume`-Eigenschaft verfügbar.
- [`start`](/de/docs/Web/API/SpeechSynthesisUtterance/start_event)
  - : Wird ausgelöst, wenn das Sprechen der Äußerung begonnen hat. Auch über die `onstart`-Eigenschaft verfügbar.

## Beispiele

In unserem grundlegenden [Sprachsynthesizer-Demo](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) holen wir zuerst eine Referenz zum SpeechSynthesis-Controller über `window.speechSynthesis`. Nach dem Definieren einiger notwendiger Variablen holen wir eine Liste der verfügbaren Stimmen mit {{domxref("SpeechSynthesis.getVoices()")}} und füllen ein Auswahlmenü mit ihnen, damit der Benutzer die gewünschte Stimme auswählen kann.

Innerhalb des `inputForm.onsubmit`-Handlers stoppen wir das Übermitteln des Formulars mit {{domxref("Event.preventDefault","preventDefault()")}}, verwenden den {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()", "Konstruktor")}}, um eine neue Äußerungsinstanz mit dem Text aus dem Text-{{htmlelement("input")}} zu erstellen, setzen die {{domxref("SpeechSynthesisUtterance.voice","Stimme")}} der Äußerung auf die im {{htmlelement("select")}}-Element ausgewählte Stimme und starten das Sprechen der Äußerung über die {{domxref("SpeechSynthesis.speak()")}}-Methode.

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
