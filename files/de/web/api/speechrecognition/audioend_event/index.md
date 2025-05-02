---
title: "SpeechRecognition: audioend Ereignis"
short-title: audioend
slug: Web/API/SpeechRecognition/audioend_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Speech API")}}

Das **`audioend`** Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn der Benutzeragent das Erfassen von Audio für die Spracherkennung abgeschlossen hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("audioend", (event) => { })

onaudioend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `audioend` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode nutzen:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("audioend", () => {
  console.log("Audio capturing ended");
});
```

Oder Sie verwenden die `onaudioend` Ereignishandler-Eigenschaft:

```js
recognition.onaudioend = () => {
  console.log("Audio capturing ended");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
