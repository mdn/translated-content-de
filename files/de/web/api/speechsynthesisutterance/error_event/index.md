---
title: "SpeechSynthesisUtterance: error-Ereignis"
short-title: error
slug: Web/API/SpeechSynthesisUtterance/error_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`error`**-Ereignis des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekts der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn ein Fehler auftritt, der verhindert, dass die Äußerung erfolgreich gesprochen wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onerror = (event) => { }
```

## Ereignistyp

Ein [`SpeechSynthesisErrorEvent`](/de/docs/Web/API/SpeechSynthesisErrorEvent). Es erbt von [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechSynthesisErrorEvent")}}

## Beispiele

Sie können das `error`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
utterThis.addEventListener("error", (event) => {
  console.log(
    `An error has occurred with the speech synthesis: ${event.error}`,
  );
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onerror` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onerror` hinzugefügte Event-Listener ersetzt werden):

```js
utterThis.onerror = (event) => {
  console.log(
    `An error has occurred with the speech synthesis: ${event.error}`,
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
