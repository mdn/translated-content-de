---
title: "SpeechSynthesisUtterance: mark-Ereignis"
short-title: mark
slug: Web/API/SpeechSynthesisUtterance/mark_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`mark`**-Ereignis des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekts der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn die gesprochene Äußerung ein benanntes SSML-„mark“-Tag erreicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("mark", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmark = (event) => { }
```

## Ereignistyp

Ein [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Beispiele

Sie können das `mark`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
utterThis.addEventListener("mark", (event) => {
  console.log(`A mark was reached: ${event.name}`);
});
```

Oder verwenden Sie die `onmark`-Event-Handler-Eigenschaft. Beachten Sie jedoch, dass dadurch andere Ereignis-Listener ersetzt werden, die gegebenenfalls über `onmark` hinzugefügt wurden:

```js
utterThis.onmark = (event) => {
  console.log(`A mark was reached: ${event.name}`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
