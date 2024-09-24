---
title: "SpeechRecognition: audioend Ereignis"
short-title: audioend
slug: Web/API/SpeechRecognition/audioend_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Das **`audioend`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn der Benutzeragent das Aufnehmen von Audio für die Spracherkennung beendet hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("audioend", (event) => {});

onaudioend = (event) => {};
```

## Ereignistyp

Ein generisches {{DOMxRef("Event")}} ohne hinzugefügte Eigenschaften.

## Beispiele

Sie können das `audioend`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("audioend", () => {
  console.log("Audio capturing ended");
});
```

Oder die `onaudioend`-Ereignis-Handler-Eigenschaft nutzen:

```js
recognition.onaudioend = () => {
  console.log("Audio capturing ended");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
