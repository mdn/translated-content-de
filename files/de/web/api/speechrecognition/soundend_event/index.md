---
title: "SpeechRecognition: soundend-Ereignis"
short-title: soundend
slug: Web/API/SpeechRecognition/soundend_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Das **`soundend`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn ein beliebiges Geräusch – erkennbarer Sprache oder nicht – nicht mehr erkannt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder legen Sie eine Event-Handler-Eigenschaft fest.

```js
addEventListener("soundend", (event) => {});

onsoundend = (event) => {};
```

## Ereignistyp

Ein generisches {{DOMxRef("Event")}} ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `soundend`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("soundend", (event) => {
  console.log("Sound has stopped being received");
});
```

Oder verwenden Sie die `onsoundend`-Event-Handler-Eigenschaft:

```js
recognition.onsoundend = (event) => {
  console.log("Sound has stopped being received");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
