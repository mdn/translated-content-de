---
title: "SpeechRecognition: soundend-Ereignis"
short-title: soundend
slug: Web/API/SpeechRecognition/soundend_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`soundend`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn kein Ton mehr erkannt wird – unabhängig davon, ob es sich um erkennbare Sprache handelt oder nicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("soundend", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onsoundend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `soundend`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.addEventListener("soundend", (event) => {
  console.log("Sound has stopped being received");
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onsoundend`. Beachten Sie jedoch, dass dadurch andere über `onsoundend` hinzugefügte Event-Listener ersetzt werden, sofern vorhanden:

```js
recognition.onsoundend = (event) => {
  console.log("Sound has stopped being received");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
