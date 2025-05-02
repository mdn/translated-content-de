---
title: "SpeechRecognition: speechstart-Ereignis"
short-title: speechstart
slug: Web/API/SpeechRecognition/speechstart_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Speech API")}}

Das **`speechstart`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn vom Spracherkennungsdienst erkannter Ton als Sprache erkannt wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js-nolint
addEventListener("speechstart", (event) => { })

onspeechstart = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `speechstart`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("speechstart", () => {
  console.log("Speech has been detected");
});
```

Oder verwenden Sie die `onspeechstart`-Ereignishandlereigenschaft:

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
