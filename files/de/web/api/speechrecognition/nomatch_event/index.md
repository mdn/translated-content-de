---
title: "SpeechRecognition: nomatch-Ereignis"
short-title: nomatch
slug: Web/API/SpeechRecognition/nomatch_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`nomatch`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn der Spracherkennungsdienst ein endgültiges Ergebnis ohne hinreichend sichere Erkennung zurückgibt.

Dabei kann eine teilweise Erkennung vorliegen, deren Wert den Schwellenwert für [`confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence) jedoch nicht erreicht oder überschreitet.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("nomatch", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onnomatch = (event) => { }
```

## Ereignistyp

Ein [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechRecognitionEvent")}}

## Beispiele

Sie können das `nomatch`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.addEventListener("nomatch", () => {
  console.error("Speech not recognized");
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onnomatch` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onnomatch` hinzugefügte Event-Listener ersetzt werden):

```js
recognition.onnomatch = () => {
  console.error("Speech not recognized");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
