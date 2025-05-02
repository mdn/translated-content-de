---
title: "SpeechSynthesisUtterance: pause Ereignis"
short-title: pause
slug: Web/API/SpeechSynthesisUtterance/pause_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Speech API")}}

Das **`pause`**-Ereignis des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekts der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn die Äußerung mitten im Verlauf pausiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js-nolint
addEventListener("pause", (event) => { })

onpause = (event) => { }
```

## Ereignistyp

Ein [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgelisteten Eigenschaften sind auch die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`charIndex`](/de/docs/Web/API/SpeechSynthesisEvent/charIndex) {{ReadOnlyInline}}
  - : Gibt die Indexposition des Zeichens in [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) zurück, das gesprochen wurde, als das Ereignis ausgelöst wurde.
- [`elapsedTime`](/de/docs/Web/API/SpeechSynthesisEvent/elapsedTime) {{ReadOnlyInline}}
  - : Gibt die vergangene Zeit in Sekunden zurück, nachdem [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) zu sprechen begonnen wurde, als das Ereignis ausgelöst wurde.
- [`name`](/de/docs/Web/API/SpeechSynthesisEvent/name) {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der mit bestimmten Arten von Ereignissen verknüpft ist, die auftreten, während [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) gesprochen wird: den Namen des [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2)-Markers, der im Falle eines [`mark`](/de/docs/Web/API/SpeechSynthesisUtterance/mark_event)-Ereignisses erreicht wurde, oder die Art der Grenze, die im Falle eines [`boundary`](/de/docs/Web/API/SpeechSynthesisUtterance/boundary_event)-Ereignisses erreicht wurde.
- [`utterance`](/de/docs/Web/API/SpeechSynthesisEvent/utterance) {{ReadOnlyInline}}
  - : Gibt die Instanz von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) zurück, auf die das Ereignis ausgelöst wurde.

## Beispiele

Sie können das `pause`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
utterThis.addEventListener("pause", (event) => {
  console.log(`Speech paused after ${event.elapsedTime} seconds.`);
});
```

Oder verwenden Sie die `onpause`-Ereignisbehandlungs-Eigenschaft:

```js
utterThis.onpause = (event) => {
  console.log(`Speech paused after ${event.elapsedTime} seconds.`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
