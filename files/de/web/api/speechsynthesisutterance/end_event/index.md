---
title: "SpeechSynthesisUtterance: end event"
short-title: end
slug: Web/API/SpeechSynthesisUtterance/end_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Speech API")}}

Das **`end`** Ereignis des [Web Speech API](/de/docs/Web/API/Web_Speech_API) [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekts wird ausgelöst, wenn die Äußerung beendet wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("end", (event) => { })

onend = (event) => { }
```

## Ereignistyp

Ein [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften aus der Elternschnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`charIndex`](/de/docs/Web/API/SpeechSynthesisEvent/charIndex) {{ReadOnlyInline}}
  - : Gibt die Indexposition des Zeichens im [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) zurück, das gesprochen wurde, als das Ereignis ausgelöst wurde.
- [`elapsedTime`](/de/docs/Web/API/SpeechSynthesisEvent/elapsedTime) {{ReadOnlyInline}}
  - : Gibt die verstrichene Zeit in Sekunden zurück, nachdem das [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) zu sprechen begonnen hat, zu dem das Ereignis ausgelöst wurde.
- [`name`](/de/docs/Web/API/SpeechSynthesisEvent/name) {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der mit bestimmten Arten von Ereignissen in Verbindung steht, die auftreten, während das [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) gesprochen wird: den Namen des [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2)-Markers, der im Falle eines [`mark`](/de/docs/Web/API/SpeechSynthesisUtterance/mark_event)-Ereignisses erreicht wurde, oder den Typ der erreichten Grenze im Falle eines [`boundary`](/de/docs/Web/API/SpeechSynthesisUtterance/boundary_event)-Ereignisses.
- [`utterance`](/de/docs/Web/API/SpeechSynthesisEvent/utterance) {{ReadOnlyInline}}
  - : Gibt die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Instanz zurück, auf der das Ereignis ausgelöst wurde.

## Beispiele

Sie können das `end` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
utterThis.addEventListener("end", (event) => {
  console.log(
    `Utterance has finished being spoken after ${event.elapsedTime} seconds.`,
  );
});
```

Oder die `onend` Ereignishandler-Eigenschaft verwenden:

```js
utterThis.onend = (event) => {
  console.log(
    `Utterance has finished being spoken after ${event.elapsedTime} seconds.`,
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
