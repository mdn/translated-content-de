---
title: "SpeechSynthesisUtterance: end Ereignis"
short-title: end
slug: Web/API/SpeechSynthesisUtterance/end_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Das **`end`**-Ereignis des [Web Speech API](/de/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}} Objekts wird ausgelöst, wenn die Äußerung zu Ende gesprochen wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("end", (event) => {});

onend = (event) => {};
```

## Ereignistyp

Ein {{domxref("SpeechSynthesisEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch die Eigenschaften der Elternschnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("SpeechSynthesisEvent.charIndex", "charIndex")}} {{ReadOnlyInline}}
  - : Gibt die Indexposition des Zeichens im {{domxref("SpeechSynthesisUtterance.text")}} zurück, das gesprochen wurde, als das Ereignis ausgelöst wurde.
- {{domxref("SpeechSynthesisEvent.elapsedTime", "elapsedTime")}} {{ReadOnlyInline}}
  - : Gibt die verstrichene Zeit in Sekunden zurück, nachdem das {{domxref("SpeechSynthesisUtterance.text")}} zu sprechen begann und das Ereignis ausgelöst wurde.
- {{domxref("SpeechSynthesisEvent.name", "name")}} {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der mit bestimmten Arten von Ereignissen verbunden ist, die auftreten, während das {{domxref("SpeechSynthesisUtterance.text")}} gesprochen wird: Der Name des erreichten [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2)-Markers im Fall eines {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}}-Ereignisses oder der Typ der erreichten Grenze im Fall eines {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}}-Ereignisses.
- {{domxref("SpeechSynthesisEvent.utterance", "utterance")}} {{ReadOnlyInline}}
  - : Gibt die {{domxref("SpeechSynthesisUtterance")}}-Instanz zurück, bei der das Ereignis ausgelöst wurde.

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
