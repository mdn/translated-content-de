---
title: SpeechSynthesisEvent
slug: Web/API/SpeechSynthesisEvent
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Speech API")}}

Die **`SpeechSynthesisEvent`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) enthält Informationen über den aktuellen Zustand von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekten, die im Sprachdienst verarbeitet wurden.

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechSynthesisEvent()`](/de/docs/Web/API/SpeechSynthesisEvent/SpeechSynthesisEvent)
  - : Erstellt ein neues `SpeechSynthesisEvent`.

## Instanz-Eigenschaften

_Die `SpeechSynthesisEvent`-Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`SpeechSynthesisEvent.charIndex`](/de/docs/Web/API/SpeechSynthesisEvent/charIndex) {{ReadOnlyInline}}
  - : Gibt die Indexposition des Zeichens im [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) zurück, das gerade gesprochen wurde, als das Ereignis ausgelöst wurde.
- [`SpeechSynthesisEvent.charLength`](/de/docs/Web/API/SpeechSynthesisEvent/charLength) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Zeichen zurück, die nach der `charIndex`-Position noch gesprochen werden müssen, falls die Sprachmaschine dies unterstützt. Gibt 0 zurück, wenn die Sprachmaschine die Informationen nicht bereitstellen kann.
- [`SpeechSynthesisEvent.elapsedTime`](/de/docs/Web/API/SpeechSynthesisEvent/elapsedTime) {{ReadOnlyInline}}
  - : Gibt die vergangene Zeit in Sekunden zurück, nachdem die [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) zu sprechen begonnen hat, als das Ereignis ausgelöst wurde.
- [`SpeechSynthesisEvent.name`](/de/docs/Web/API/SpeechSynthesisEvent/name) {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der mit bestimmten Arten von Ereignissen verbunden ist, die auftreten, während [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) gesprochen wird: Der Name des [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2)-Markers, der im Fall eines [`mark`](/de/docs/Web/API/SpeechSynthesisUtterance/mark_event) Ereignisses erreicht wurde, oder die Art von Grenze, die im Fall eines [`boundary`](/de/docs/Web/API/SpeechSynthesisUtterance/boundary_event) Ereignisses erreicht wurde.
- [`SpeechSynthesisEvent.utterance`](/de/docs/Web/API/SpeechSynthesisEvent/utterance) {{ReadOnlyInline}}
  - : Gibt die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Instanz zurück, bei der das Ereignis ausgelöst wurde.

## Instanz-Methoden

_Die `SpeechSynthesisEvent`-Schnittstelle erbt auch Methoden von ihrer übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

```js
utterThis.onpause = (event) => {
  const char = event.utterance.text.charAt(event.charIndex);
  console.log(
    `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`,
  );
};

utterThis.onboundary = (event) => {
  console.log(
    `${event.name} boundary reached after ${event.elapsedTime} seconds.`,
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
