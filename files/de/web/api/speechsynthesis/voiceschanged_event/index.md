---
title: "SpeechSynthesis: voiceschanged-Ereignis"
short-title: voiceschanged
slug: Web/API/SpeechSynthesis/voiceschanged_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("Web Speech API")}}

Das **`voiceschanged`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn sich die Liste der [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte geändert hat, die von der Methode [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) zurückgegeben würde.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("voiceschanged", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onvoiceschanged = (event) => { }
```

## Ereignistyp

Ein allgemeines [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Wenn das Ereignis ausgelöst wird, können Sie damit eine Liste von Stimmen neu befüllen, aus denen Benutzer wählen können. Sie können das `voiceschanged`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
const synth = window.speechSynthesis;

synth.addEventListener("voiceschanged", () => {
  const voices = synth.getVoices();
  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onvoiceschanged`. Beachten Sie jedoch, dass dies gegebenenfalls andere mit `onvoiceschanged` hinzugefügte Event-Listener ersetzt:

```js
const synth = window.speechSynthesis;
synth.onvoiceschanged = () => {
  const voices = synth.getVoices();
  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
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
