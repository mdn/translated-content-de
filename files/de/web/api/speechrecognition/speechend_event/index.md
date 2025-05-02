---
title: "SpeechRecognition: speechend Ereignis"
short-title: speechend
slug: Web/API/SpeechRecognition/speechend_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Speech API")}}

Das **`speechend`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn gesprochene Sprache, die vom Spracherkennungsdienst erkannt wurde, nicht mehr erkannt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignisbehandlungs-Eigenschaft fest.

```js-nolint
addEventListener("speechend", (event) => { })

onspeechend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `speechend`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("speechend", () => {
  console.log("Speech has stopped being detected");
});
```

Oder die `onspeechend`-Ereignisbehandlungs-Eigenschaft nutzen:

```js
recognition.onspeechend = () => {
  console.log("Speech has stopped being detected");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
