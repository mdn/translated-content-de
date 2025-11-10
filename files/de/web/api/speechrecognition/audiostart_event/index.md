---
title: "SpeechRecognition: audiostart-Ereignis"
short-title: audiostart
slug: Web/API/SpeechRecognition/audiostart_event
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("Web Speech API")}}

Das **`audiostart`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn der Benutzeragent beginnt, Audio für die Spracherkennung aufzunehmen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("audiostart", (event) => { })

onaudiostart = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `audiostart`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new (SpeechRecognition || webkitSpeechRecognition)();

recognition.addEventListener("audiostart", () => {
  console.log("Audio capturing started");
});
```

Oder Sie verwenden die `onaudiostart`-Ereignis-Handler-Eigenschaft:

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
