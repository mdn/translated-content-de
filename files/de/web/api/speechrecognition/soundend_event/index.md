---
title: "SpeechRecognition: soundend-Ereignis"
short-title: soundend
slug: Web/API/SpeechRecognition/soundend_event
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("Web Speech API")}}

Das **`soundend`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn ein beliebiges Geräusch – erkennbares Sprechen oder nicht – nicht mehr erkannt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("soundend", (event) => { })

onsoundend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `soundend`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new (SpeechRecognition || webkitSpeechRecognition)();

recognition.addEventListener("soundend", (event) => {
  console.log("Sound has stopped being received");
});
```

Oder die `onsoundend`-Ereignishandler-Eigenschaft verwenden:

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
