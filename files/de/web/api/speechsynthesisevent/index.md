---
title: SpeechSynthesisEvent
slug: Web/API/SpeechSynthesisEvent
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Speech API")}}

Die **`SpeechSynthesisEvent`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) enthält Informationen über den aktuellen Zustand von {{domxref("SpeechSynthesisUtterance")}}-Objekten, die im Sprachdienst verarbeitet wurden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("SpeechSynthesisEvent.SpeechSynthesisEvent", "SpeechSynthesisEvent()")}}
  - : Erstellt ein neues `SpeechSynthesisEvent`.

## Instanz-Eigenschaften

_Die `SpeechSynthesisEvent`-Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, {{domxref("Event")}}._

- {{domxref("SpeechSynthesisEvent.charIndex")}} {{ReadOnlyInline}}
  - : Gibt die Indexposition des Zeichens im {{domxref("SpeechSynthesisUtterance.text")}} zurück, das gesprochen wurde, als das Ereignis ausgelöst wurde.
- {{domxref("SpeechSynthesisEvent.charLength")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Zeichen zurück, die nach der `charIndex`-Position noch gesprochen werden müssen, falls die Sprach-Engine dies unterstützt. Gibt 0 zurück, wenn die Sprach-Engine die Information nicht bereitstellen kann.
- {{domxref("SpeechSynthesisEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : Gibt die verstrichene Zeit in Sekunden zurück, seit das {{domxref("SpeechSynthesisUtterance.text")}} zu sprechen begann, als das Ereignis ausgelöst wurde.
- {{domxref("SpeechSynthesisEvent.name")}} {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der mit bestimmten Arten von Ereignissen in Verbindung steht, die auftreten, während das {{domxref("SpeechSynthesisUtterance.text")}} gesprochen wird: den Namen des erreichten [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2)-Markers im Fall eines {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}}-Ereignisses oder die Art der erreichten Grenze im Fall eines {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}}-Ereignisses.
- {{domxref("SpeechSynthesisEvent.utterance")}} {{ReadOnlyInline}}
  - : Gibt die {{domxref("SpeechSynthesisUtterance")}}-Instanz zurück, auf der das Ereignis ausgelöst wurde.

## Instanz-Methoden

_Die `SpeechSynthesisEvent`-Schnittstelle erbt auch Methoden von ihrer Elternschnittstelle, {{domxref("Event")}}._

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
