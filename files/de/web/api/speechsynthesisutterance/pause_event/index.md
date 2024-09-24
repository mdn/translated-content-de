---
title: "SpeechSynthesisUtterance: pause-Ereignis"
short-title: pause
slug: Web/API/SpeechSynthesisUtterance/pause_event
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Das **`pause`**-Ereignis des {{domxref("SpeechSynthesisUtterance")}}-Objekts der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn die Wiedergabe der Äußerung in der Mitte pausiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("pause", (event) => {});

onpause = (event) => {};
```

## Ereignistyp

Ein {{domxref("SpeechSynthesisEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der Elternschnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("SpeechSynthesisEvent.charIndex", "charIndex")}} {{ReadOnlyInline}}
  - : Gibt die Indexposition des Zeichens in der {{domxref("SpeechSynthesisUtterance.text")}} zurück, das gesprochen wurde, als das Ereignis ausgelöst wurde.
- {{domxref("SpeechSynthesisEvent.elapsedTime", "elapsedTime")}} {{ReadOnlyInline}}
  - : Gibt die verstrichene Zeit in Sekunden zurück, nachdem die {{domxref("SpeechSynthesisUtterance.text")}} zu sprechen begann, als das Ereignis ausgelöst wurde.
- {{domxref("SpeechSynthesisEvent.name", "name")}} {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der mit bestimmten Arten von Ereignissen verknüpft ist, die auftreten, während die {{domxref("SpeechSynthesisUtterance.text")}} gesprochen wird: Der Name des [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2)-Markers, der im Falle eines {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}}-Ereignisses erreicht wurde, oder die Art der Grenze, die im Falle eines {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}}-Ereignisses erreicht wurde.
- {{domxref("SpeechSynthesisEvent.utterance", "utterance")}} {{ReadOnlyInline}}
  - : Gibt die {{domxref("SpeechSynthesisUtterance")}}-Instanz zurück, bei der das Ereignis ausgelöst wurde.

## Beispiele

Sie können das `pause`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
utterThis.addEventListener("pause", (event) => {
  console.log(`Speech paused after ${event.elapsedTime} seconds.`);
});
```

Oder verwenden Sie die `onpause`-Ereignis-Handler-Eigenschaft:

```js
utterThis.onpause = (event) => {
  console.log(`Speech paused after ${event.elapsedTime} seconds.`);
};
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
