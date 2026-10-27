---
title: "SpeechRecognition: start-Ereignis"
short-title: start
slug: Web/API/SpeechRecognition/start_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`start`**-Ereignis des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekts der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn der Spracherkennungsdienst beginnt, eingehende Audiodaten abzuhören, um Grammatiken zu erkennen, die der aktuellen `SpeechRecognition` zugeordnet sind.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("start", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onstart = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `start`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.addEventListener("start", () => {
  console.log("Speech recognition service has started");
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onstart` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onstart` hinzugefügte Ereignis-Listener ersetzt werden):

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
