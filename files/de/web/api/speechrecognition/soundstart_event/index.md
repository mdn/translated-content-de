---
title: "SpeechRecognition: soundstart Ereignis"
short-title: soundstart
slug: Web/API/SpeechRecognition/soundstart_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Speech API")}}

Das **`soundstart`** Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn irgendein Ton — erkennbarer Sprachinhalt oder nicht — festgestellt wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Eigenschaft für den Ereignis-Handler.

```js-nolint
addEventListener("soundstart", (event) => { })

onsoundstart = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `soundstart` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("soundstart", () => {
  console.log("Some sound is being received");
});
```

Oder verwenden Sie die `onsoundstart` Ereignis-Handler-Eigenschaft:

```js
recognition.onsoundstart = () => {
  console.log("Some sound is being received");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
