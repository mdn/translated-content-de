---
title: "SpeechSynthesis: voiceschanged-Ereignis"
short-title: voiceschanged
slug: Web/API/SpeechSynthesis/voiceschanged_event
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Das **`voiceschanged`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn sich die Liste der [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte geändert hat, die durch die Methode [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) zurückgegeben werden würde (wenn das `voiceschanged`-Ereignis ausgelöst wird).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("voiceschanged", (event) => {});

onvoiceschanged = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Dies könnte verwendet werden, um eine Liste von Stimmen neu zu füllen, zwischen denen der Benutzer wählen kann, wenn das Ereignis ausgelöst wird. Sie können das `voiceschanged`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const synth = window.speechSynthesis;

synth.addEventListener("voiceschanged", () => {
  const voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
});
```

Oder verwenden Sie die `onvoiceschanged`-Ereignis-Handler-Eigenschaft:

```js
const synth = window.speechSynthesis;
synth.onvoiceschanged = () => {
  const voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
