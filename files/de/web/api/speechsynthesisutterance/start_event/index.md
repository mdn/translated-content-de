---
title: "SpeechSynthesisUtterance: start-Event"
short-title: start
slug: Web/API/SpeechSynthesisUtterance/start_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Speech API")}}

Das **`start`**-Event des [Web Speech API](/de/docs/Web/API/Web_Speech_API) [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekts wird ausgelöst, wenn das Sprechen des Ausdrucks begonnen hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("start", (event) => { })

onstart = (event) => { }
```

## Ereignistyp

Ein [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften aus der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`charIndex`](/de/docs/Web/API/SpeechSynthesisEvent/charIndex) {{ReadOnlyInline}}
  - : Gibt die Indexposition des Zeichens im [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) zurück, das gesprochen wurde, als das Ereignis ausgelöst wurde.
- [`elapsedTime`](/de/docs/Web/API/SpeechSynthesisEvent/elapsedTime) {{ReadOnlyInline}}
  - : Gibt die verstrichene Zeit in Sekunden zurück, nachdem das [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) zu sprechen begonnen wurde und das Ereignis ausgelöst wurde.
- [`name`](/de/docs/Web/API/SpeechSynthesisEvent/name) {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der mit bestimmten Typen von Ereignissen verknüpft ist, die auftreten, während das [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) gesprochen wird: der Name des im [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2) erreichten Markers im Fall eines [`mark`](/de/docs/Web/API/SpeechSynthesisUtterance/mark_event)-Ereignisses oder der Typ der Grenze, die im Fall eines [`boundary`](/de/docs/Web/API/SpeechSynthesisUtterance/boundary_event)-Ereignisses erreicht wurde.
- [`utterance`](/de/docs/Web/API/SpeechSynthesisEvent/utterance) {{ReadOnlyInline}}
  - : Gibt die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Instanz zurück, auf der das Ereignis ausgelöst wurde.

## Beispiele

Sie können das `start`-Event in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
utterThis.addEventListener("start", (event) => {
  console.log(`We have started uttering this speech: ${event.utterance.text}`);
});
```

Oder die `onstart`-Ereignishandler-Eigenschaft verwenden:

```js
utterThis.onstart = (event) => {
  console.log(`We have started uttering this speech: ${event.utterance.text}`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
