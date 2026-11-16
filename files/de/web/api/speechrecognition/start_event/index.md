---
title: "SpeechRecognition: start-Ereignis"
short-title: start
slug: Web/API/SpeechRecognition/start_event
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Das **`start`**-Ereignis der [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Schnittstelle wird ausgelöst, wenn der Spracherkennungsdienst begonnen hat, eingehende Audiodaten zu empfangen, um Sprache zu erkennen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("start", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

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

Oder verwenden Sie die Event-Handler-Eigenschaft `onstart`. Beachten Sie dabei, dass dadurch gegebenenfalls andere über `onstart` hinzugefügte Event-Listener ersetzt werden:

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
