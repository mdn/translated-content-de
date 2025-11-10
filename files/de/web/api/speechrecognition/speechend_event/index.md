---
title: "SpeechRecognition: `speechend`-Ereignis"
short-title: speechend
slug: Web/API/SpeechRecognition/speechend_event
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("Web Speech API")}}

Das **`speechend`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn die vom Spracherkennungsdienst erkannte Sprache nicht mehr erkannt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("speechend", (event) => { })

onspeechend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `speechend`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new (SpeechRecognition || webkitSpeechRecognition)();

recognition.addEventListener("speechend", () => {
  console.log("Speech has stopped being detected");
});
```

Oder die `onspeechend`-Ereignishandler-Eigenschaft nutzen:

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
