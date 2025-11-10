---
title: "SpeechSynthesisUtterance: error-Event"
short-title: error
slug: Web/API/SpeechSynthesisUtterance/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Speech API")}}

Das **`error`**-Event des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekts der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn ein Fehler auftritt, der verhindert, dass der Ausdruck erfolgreich gesprochen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein [`SpeechSynthesisErrorEvent`](/de/docs/Web/API/SpeechSynthesisErrorEvent). Erbt von [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechSynthesisErrorEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der Super-Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`charIndex`](/de/docs/Web/API/SpeechSynthesisEvent/charIndex) {{ReadOnlyInline}}
  - : Gibt die Indexposition des Zeichens im [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) zurück, das gesprochen wurde, als das Ereignis ausgelöst wurde.
- [`elapsedTime`](/de/docs/Web/API/SpeechSynthesisEvent/elapsedTime) {{ReadOnlyInline}}
  - : Gibt die verstrichene Zeit in Sekunden zurück, nachdem das [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) zu sprechen begonnen hat, die das Ereignis ausgelöst hat.
- [`error`](/de/docs/Web/API/SpeechSynthesisErrorEvent/error) {{ReadOnlyInline}}
  - : Gibt einen Fehlercode zurück, der angibt, was bei einem Sprachsynthesisversuch schief gelaufen ist.
- [`name`](/de/docs/Web/API/SpeechSynthesisEvent/name) {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der mit bestimmten Ereignisarten verbunden ist, die bei der Aussprache des [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) auftreten: der Name des [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2)-Markers, der bei einem [`mark`](/de/docs/Web/API/SpeechSynthesisUtterance/mark_event)-Ereignis erreicht wurde, oder die Art der Grenze, die im Fall eines [`boundary`](/de/docs/Web/API/SpeechSynthesisUtterance/boundary_event)-Ereignisses erreicht wird.
- [`utterance`](/de/docs/Web/API/SpeechSynthesisEvent/utterance) {{ReadOnlyInline}}
  - : Gibt die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Instanz zurück, auf der das Ereignis ausgelöst wurde.

## Beispiele

Sie können das `error`-Event in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
utterThis.addEventListener("error", (event) => {
  console.log(
    `An error has occurred with the speech synthesis: ${event.error}`,
  );
});
```

Oder die `onerror`-Ereignishandler-Eigenschaft verwenden:

```js
utterThis.onerror = (event) => {
  console.log(
    `An error has occurred with the speech synthesis: ${event.error}`,
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
