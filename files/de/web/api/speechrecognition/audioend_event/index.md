---
title: "SpeechRecognition: audioend-Ereignis"
short-title: audioend
slug: Web/API/SpeechRecognition/audioend_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`audioend`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn der User Agent die Audioaufnahme für die Spracherkennung beendet hat.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("audioend", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onaudioend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `audioend`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.addEventListener("audioend", () => {
  console.log("Audio capturing ended");
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onaudioend`. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onaudioend` hinzugefügte Ereignis-Listener ersetzt werden:

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
