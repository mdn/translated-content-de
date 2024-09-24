---
title: "SpeechRecognition: end Ereignis"
short-title: end
slug: Web/API/SpeechRecognition/end_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Das **`end`**-Ereignis des [Web Speech API](/de/docs/Web/API/Web_Speech_API)-Objekts {{domxref("SpeechRecognition")}} wird ausgelöst, wenn der Sprach­erkennungs­dienst die Verbindung getrennt hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis­handler-Eigenschaft.

```js
addEventListener("end", (event) => {});

onend = (event) => {};
```

## Ereignistyp

Ein generisches {{DOMxRef("Event")}} ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `end`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("end", () => {
  console.log("Speech recognition service disconnected");
});
```

Oder verwenden Sie die `onend`-Ereignis­handler-Eigenschaft:

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
