---
title: "SpeechSynthesisUtterance: end-Ereignis"
short-title: end
slug: Web/API/SpeechSynthesisUtterance/end_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Das **`end`**-Ereignis des [Web Speech API](/de/docs/Web/API/Web_Speech_API) [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekts wird ausgelöst, wenn das Sprechen der Äußerung beendet ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("end", (event) => {});

onend = (event) => {};
```

## Ereignistyp

Ein [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind Eigenschaften aus dem übergeordneten Interface, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`charIndex`](/de/docs/Web/API/SpeechSynthesisEvent/charIndex) {{ReadOnlyInline}}
  - : Gibt die Indexposition des Zeichens in [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) zurück, das gesprochen wurde, als das Ereignis ausgelöst wurde.
- [`elapsedTime`](/de/docs/Web/API/SpeechSynthesisEvent/elapsedTime) {{ReadOnlyInline}}
  - : Gibt die verstrichene Zeit in Sekunden zurück, nachdem [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) gesprochen wurde, als das Ereignis ausgelöst wurde.
- [`name`](/de/docs/Web/API/SpeechSynthesisEvent/name) {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der bestimmten Arten von Ereignissen zugeordnet ist, die auftreten, während [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) gesprochen wird: der Name des [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2)-Markers, der im Fall eines [`mark`](/de/docs/Web/API/SpeechSynthesisUtterance/mark_event)-Ereignisses erreicht wurde, oder der Typ der Begrenzung, die im Fall eines [`boundary`](/de/docs/Web/API/SpeechSynthesisUtterance/boundary_event)-Ereignisses erreicht wurde.
- [`utterance`](/de/docs/Web/API/SpeechSynthesisEvent/utterance) {{ReadOnlyInline}}
  - : Gibt die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Instanz zurück, auf der das Ereignis ausgelöst wurde.

## Beispiele

Sie können das `end`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
utterThis.addEventListener("end", (event) => {
  console.log(
    `Utterance has finished being spoken after ${event.elapsedTime} seconds.`,
  );
});
```

Oder verwenden Sie die `onend`-Ereignishandlereigenschaft:

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
