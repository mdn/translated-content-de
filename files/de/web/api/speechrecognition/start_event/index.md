---
title: "SpeechRecognition: Start-Ereignis"
short-title: Start
slug: Web/API/SpeechRecognition/start_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Das **`start`**-Ereignis des [Web Speech API](/de/docs/Web/API/Web_Speech_API) {{domxref("SpeechRecognition")}}-Objekts wird ausgelöst, wenn der Sprachservice beginnt, eingehende Audiosignale mit der Absicht zu hören, die mit der aktuellen `SpeechRecognition` verbundenen Grammatiken zu erkennen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("start", (event) => {});

onstart = (event) => {};
```

## Ereignistyp

Ein generisches {{DOMxRef("Event")}} ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `start`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("start", () => {
  console.log("Speech recognition service has started");
});
```

Oder verwenden Sie die `onstart`-Ereignis-Handler-Eigenschaft:

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
