---
title: "SpeechRecognition: audiostart Ereignis"
short-title: audiostart
slug: Web/API/SpeechRecognition/audiostart_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Das **`audiostart`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn der Benutzeragent mit der Audioaufnahme zur Spracherkennung begonnen hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("audiostart", (event) => {});

onaudiostart = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `audiostart`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("audiostart", () => {
  console.log("Audio capturing started");
});
```

Oder verwenden Sie die `onaudiostart` Event-Handler-Eigenschaft:

```js
recognition.onaudiostart = () => {
  console.log("Audio capturing started");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
