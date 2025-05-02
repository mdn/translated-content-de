---
title: "SpeechRecognition: soundend-Ereignis"
short-title: soundend
slug: Web/API/SpeechRecognition/soundend_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Speech API")}}

Das **`soundend`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn ein Geräusch — ob erkennbarer Sprache oder nicht — nicht mehr erkannt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("soundend", (event) => { })

onsoundend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `soundend`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("soundend", (event) => {
  console.log("Sound has stopped being received");
});
```

Oder verwenden Sie die `onsoundend`-Ereignis-Handler-Eigenschaft:

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
