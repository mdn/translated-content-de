---
title: "SpeechRecognition: error-Ereignis"
short-title: error
slug: Web/API/SpeechRecognition/error_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`error`**-Ereignis des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekts der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn bei der Spracherkennung ein Fehler auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onerror = (event) => { }
```

## Ereignistyp

Ein [`SpeechRecognitionErrorEvent`](/de/docs/Web/API/SpeechRecognitionErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechRecognitionErrorEvent")}}

## Beispiele

Sie können das `error`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.addEventListener("error", (event) => {
  console.error(`Speech recognition error detected: ${event.error}`);
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onerror` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onerror` hinzugefügte Ereignis-Listener ersetzt werden):

```js
recognition.onerror = (event) => {
  console.error(`Speech recognition error detected: ${event.error}`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
