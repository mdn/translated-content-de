---
title: "SpeechSynthesisUtterance: mark-Ereignis"
short-title: mark
slug: Web/API/SpeechSynthesisUtterance/mark_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Web Speech API")}}

Das **`mark`**-Ereignis des [Web Speech API](/de/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}}-Objekts wird ausgelöst, wenn das gesprochene Utterance ein benanntes SSML-"mark"-Tag erreicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("mark", (event) => {});

onmark = (event) => {};
```

## Ereignistyp

Ein {{domxref("SpeechSynthesisEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgelisteten Eigenschaften stehen Eigenschaften der übergeordneten Schnittstelle {{domxref("Event")}} zur Verfügung._

- {{domxref("SpeechSynthesisEvent.charIndex", "charIndex")}} {{ReadOnlyInline}}
  - : Gibt die Indexposition des Zeichens in der {{domxref("SpeechSynthesisUtterance.text")}} zurück, das gesprochen wurde, als das Ereignis ausgelöst wurde.
- {{domxref("SpeechSynthesisEvent.elapsedTime", "elapsedTime")}} {{ReadOnlyInline}}
  - : Gibt die vergangene Zeit in Sekunden zurück, nachdem die {{domxref("SpeechSynthesisUtterance.text")}} zu sprechen begonnen hatte und das Ereignis ausgelöst wurde.
- {{domxref("SpeechSynthesisEvent.name", "name")}} {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der mit bestimmten Arten von Ereignissen verknüpft ist, die auftreten, während die {{domxref("SpeechSynthesisUtterance.text")}} gesprochen wird: der Name des [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2) Markers, der im Falle eines `mark`-Ereignisses erreicht wurde, oder die Art der Grenze, die im Falle eines {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}}-Ereignisses erreicht wurde.
- {{domxref("SpeechSynthesisEvent.utterance", "utterance")}} {{ReadOnlyInline}}
  - : Gibt die {{domxref("SpeechSynthesisUtterance")}}-Instanz zurück, auf der das Ereignis ausgelöst wurde.

## Beispiele

Sie können das `mark`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
utterThis.addEventListener("mark", (event) => {
  console.log(`A mark was reached: ${event.name}`);
});
```

Oder verwenden Sie die `onmark`-Ereignishandler-Eigenschaft:

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
