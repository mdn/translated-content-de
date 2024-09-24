---
title: "SpeechSynthesisUtterance: Resume-Ereignis"
short-title: resume
slug: Web/API/SpeechSynthesisUtterance/resume_event
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Das **`resume`**-Ereignis des {{domxref("SpeechSynthesisUtterance")}}-Objekts der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn eine pausierte Äußerung fortgesetzt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("resume", (event) => {});

onresume = (event) => {};
```

## Ereignistyp

Ein {{domxref("SpeechSynthesisEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgelisteten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("SpeechSynthesisEvent.charIndex", "charIndex")}} {{ReadOnlyInline}}
  - : Gibt die Indexposition des Zeichens im {{domxref("SpeechSynthesisUtterance.text")}} zurück, das gesprochen wurde, als das Ereignis ausgelöst wurde.
- {{domxref("SpeechSynthesisEvent.elapsedTime", "elapsedTime")}} {{ReadOnlyInline}}
  - : Gibt die verstrichene Zeit in Sekunden zurück, nachdem das {{domxref("SpeechSynthesisUtterance.text")}} zu sprechen begonnen hatte und das Ereignis ausgelöst wurde.
- {{domxref("SpeechSynthesisEvent.name", "name")}} {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der mit bestimmten Arten von Ereignissen assoziiert ist, die auftreten, während das {{domxref("SpeechSynthesisUtterance.text")}} gesprochen wird: den Namen des erreichten [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2)-Markers im Falle eines {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}}-Ereignisses oder die Art der erreichten Grenze im Falle eines {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}}-Ereignisses.
- {{domxref("SpeechSynthesisEvent.utterance", "utterance")}} {{ReadOnlyInline}}
  - : Gibt die {{domxref("SpeechSynthesisUtterance")}}-Instanz zurück, auf der das Ereignis ausgelöst wurde.

## Beispiele

Sie können das `resume`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
utterThis.addEventListener("resume", (event) => {
  console.log(`Speech resumed after ${event.elapsedTime} seconds.`);
});
```

Oder verwenden Sie die `onresume`-Ereignis-Handler-Eigenschaft:

```js
utterThis.onresume = (event) => {
  console.log(`Speech resumed after ${event.elapsedTime} seconds.`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
