---
title: "SpeechRecognition: soundstart-Ereignis"
short-title: soundstart
slug: Web/API/SpeechRecognition/soundstart_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`soundstart`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn ein Geräusch erkannt wurde – unabhängig davon, ob es sich um erkennbare Sprache handelt oder nicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("soundstart", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onsoundstart = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können das `soundstart`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.addEventListener("soundstart", () => {
  console.log("Some sound is being received");
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onsoundstart`. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onsoundstart` hinzugefügte Ereignis-Listener ersetzt werden:

```js
recognition.onsoundstart = () => {
  console.log("Some sound is being received");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
