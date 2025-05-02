---
title: "SpeechRecognition: start-Ereignis"
short-title: start
slug: Web/API/SpeechRecognition/start_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Speech API")}}

Das **`start`**-Ereignis des [Web Speech API](/de/docs/Web/API/Web_Speech_API) [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekts wird ausgelöst, wenn der Spracherkennungsdienst begonnen hat, eingehende Audiodaten abzuhören, mit dem Ziel, Grammatiken zu erkennen, die mit dem aktuellen `SpeechRecognition` verbunden sind.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("start", (event) => { })

onstart = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `start`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("start", () => {
  console.log("Speech recognition service has started");
});
```

Oder verwenden Sie die `onstart`-Ereignishandler-Eigenschaft:

```js
recognition.onstart = () => {
  console.log("Speech recognition service has started");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
