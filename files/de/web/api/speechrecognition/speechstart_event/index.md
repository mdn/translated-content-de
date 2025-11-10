---
title: "SpeechRecognition: speechstart-Ereignis"
short-title: speechstart
slug: Web/API/SpeechRecognition/speechstart_event
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("Web Speech API")}}

Das **`speechstart`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn vom Spracherkennungsdienst als Sprache erkannter Ton erkannt wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js-nolint
addEventListener("speechstart", (event) => { })

onspeechstart = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `speechstart`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new (SpeechRecognition || webkitSpeechRecognition)();

recognition.addEventListener("speechstart", () => {
  console.log("Speech has been detected");
});
```

Oder Sie verwenden die `onspeechstart`-Ereigniseigenschaft:

```js
recognition.onspeechstart = () => {
  console.log("Speech has been detected");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
