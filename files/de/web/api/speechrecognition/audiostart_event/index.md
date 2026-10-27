---
title: "SpeechRecognition: audiostart-Ereignis"
short-title: audiostart
slug: Web/API/SpeechRecognition/audiostart_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das Ereignis **`audiostart`** der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn der User Agent begonnen hat, Audio für die Spracherkennung aufzunehmen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("audiostart", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onaudiostart = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das Ereignis `audiostart` mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.addEventListener("audiostart", () => {
  console.log("Audio capturing started");
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onaudiostart` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onaudiostart` hinzugefügte Event-Listener ersetzt werden):

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
