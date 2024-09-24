---
title: "SpeechRecognition: 'speechend'-Ereignis"
short-title: speechend
slug: Web/API/SpeechRecognition/speechend_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Das **`speechend`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn die vom Spracherkennungsdienst erkannte Sprache nicht mehr erkannt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("speechend", (event) => {});

onspeechend = (event) => {};
```

## Ereignistyp

Ein generisches {{DOMxRef("Event")}} ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `speechend`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("speechend", () => {
  console.log("Speech has stopped being detected");
});
```

Oder verwenden Sie die `onspeechend`-Ereignis-Handler-Eigenschaft:

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
