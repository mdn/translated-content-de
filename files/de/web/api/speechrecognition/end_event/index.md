---
title: "SpeechRecognition: end-Ereignis"
short-title: end
slug: Web/API/SpeechRecognition/end_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`end`**-Ereignis des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekts der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn die Verbindung zum Spracherkennungsdienst getrennt wurde.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("end", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `end`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.addEventListener("end", () => {
  console.log("Speech recognition service disconnected");
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onend` (beachten Sie jedoch, dass dadurch andere gegebenenfalls mit `onend` hinzugefügte Event-Listener ersetzt werden):

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
