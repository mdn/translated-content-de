---
title: "SpeechRecognition: end-Ereignis"
short-title: end
slug: Web/API/SpeechRecognition/end_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Speech API")}}

Das **`end`**-Ereignis des [Web Speech API](/de/docs/Web/API/Web_Speech_API) [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekts wird ausgelöst, wenn der Spracherkennungsdienst die Verbindung getrennt hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("end", (event) => { })

onend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `end`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("end", () => {
  console.log("Speech recognition service disconnected");
});
```

Oder die `onend`-Ereignis-Handler-Eigenschaft nutzen:

```js
recognition.onend = () => {
  console.log("Speech recognition service disconnected");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
