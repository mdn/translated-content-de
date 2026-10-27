---
title: "SpeechRecognition: speechend-Ereignis"
short-title: speechend
slug: Web/API/SpeechRecognition/speechend_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`speechend`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn die Spracherkennung keine Sprache mehr erkennt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("speechend", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle festlegen:

```js-nolint
onspeechend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `speechend`-Ereignis in der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.addEventListener("speechend", () => {
  console.log("Speech has stopped being detected");
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onspeechend`. Beachten Sie dabei, dass dies gegebenenfalls andere mit `onspeechend` hinzugefügte Event-Listener ersetzt:

```js
recognition.onspeechend = () => {
  console.log("Speech has stopped being detected");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
