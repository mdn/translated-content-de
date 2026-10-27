---
title: "SpeechRecognition: speechstart-Ereignis"
short-title: speechstart
slug: Web/API/SpeechRecognition/speechstart_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`speechstart`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn ein Geräusch erkannt wird, das der Spracherkennungsdienst als Sprache einstuft.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("speechstart", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onspeechstart = (event) => { }
```

## Ereignistyp

Ein allgemeines [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `speechstart`-Ereignis in einem [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufruf verwenden:

```js
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.addEventListener("speechstart", () => {
  console.log("Speech has been detected");
});
```

Oder verwenden Sie die `onspeechstart`-Event-Handler-Eigenschaft. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onspeechstart` hinzugefügte Event-Listener ersetzt werden:

```js
recognition.onspeechstart = () => {
  console.log("Speech has been detected");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
