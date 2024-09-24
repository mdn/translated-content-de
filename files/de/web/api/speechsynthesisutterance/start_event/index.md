---
title: "SpeechSynthesisUtterance: start-Ereignis"
short-title: start
slug: Web/API/SpeechSynthesisUtterance/start_event
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Das **`start`**-Ereignis des {{domxref("SpeechSynthesisUtterance")}}-Objekts der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn das gesprochene Wort begonnen hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("start", (event) => {});

onstart = (event) => {};
```

## Ereignistyp

Ein {{domxref("SpeechSynthesisEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der Elternschnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("SpeechSynthesisEvent.charIndex", "charIndex")}} {{ReadOnlyInline}}
  - : Gibt die Indexposition des Zeichens in der {{domxref("SpeechSynthesisUtterance.text")}} zurück, das gesprochen wurde, als das Ereignis ausgelöst wurde.
- {{domxref("SpeechSynthesisEvent.elapsedTime", "elapsedTime")}} {{ReadOnlyInline}}
  - : Gibt die verstrichene Zeit in Sekunden zurück, nachdem die {{domxref("SpeechSynthesisUtterance.text")}} zu sprechen begonnen hat, die das Ereignis ausgelöst hat.
- {{domxref("SpeechSynthesisEvent.name", "name")}} {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der mit bestimmten Arten von Ereignissen verbunden ist, die auftreten, während die {{domxref("SpeechSynthesisUtterance.text")}} gesprochen wird: den Namen des [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2)-Markers, der im Fall eines {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}}-Ereignisses erreicht wurde, oder die Art der Grenze, die im Fall eines {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}}-Ereignisses erreicht wurde.
- {{domxref("SpeechSynthesisEvent.utterance", "utterance")}} {{ReadOnlyInline}}
  - : Gibt die {{domxref("SpeechSynthesisUtterance")}}-Instanz zurück, auf der das Ereignis ausgelöst wurde.

## Beispiele

Sie können das `start`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

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
