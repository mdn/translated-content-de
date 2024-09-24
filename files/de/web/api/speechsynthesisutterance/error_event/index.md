---
title: "SpeechSynthesisUtterance: Fehlerereignis"
short-title: Fehler
slug: Web/API/SpeechSynthesisUtterance/error_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Das **`error`**-Ereignis des [Web Speech API](/de/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}}-Objekts wird ausgelöst, wenn ein Fehler auftritt, der das erfolgreiche Aussprechen des Satzes verhindert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein {{domxref("SpeechSynthesisErrorEvent")}}. Erbt von {{domxref("SpeechSynthesisEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("SpeechSynthesisErrorEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgelisteten Eigenschaften stehen auch die Eigenschaften der übergeordneten Schnittstelle, {{domxref("Event")}}, zur Verfügung._

- {{domxref("SpeechSynthesisEvent.charIndex", "charIndex")}} {{ReadOnlyInline}}
  - : Gibt die Indexposition des Zeichens in der {{domxref("SpeechSynthesisUtterance.text")}} zurück, das gesprochen wurde, als das Ereignis ausgelöst wurde.
- {{domxref("SpeechSynthesisEvent.elapsedTime", "elapsedTime")}} {{ReadOnlyInline}}
  - : Gibt die Zeitspanne in Sekunden zurück, die seit dem Beginn des Sprechens der {{domxref("SpeechSynthesisUtterance.text")}} vergangen ist, als das Ereignis ausgelöst wurde.
- {{domxref("SpeechSynthesisErrorEvent.error", "error")}} {{ReadOnlyInline}}
  - : Gibt einen Fehlercode zurück, der angibt, was bei einem Sprachsyntheseversuch schiefgelaufen ist.
- {{domxref("SpeechSynthesisEvent.name", "name")}} {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der mit bestimmten Arten von Ereignissen verbunden ist, die während des Sprechens der {{domxref("SpeechSynthesisUtterance.text")}} auftreten: den Namen des [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2)-Markers, der im Falle eines {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}}-Ereignisses erreicht wurde, oder die Art der Grenze, die im Falle eines {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}}-Ereignisses erreicht wurde.
- {{domxref("SpeechSynthesisEvent.utterance", "utterance")}} {{ReadOnlyInline}}
  - : Gibt die {{domxref("SpeechSynthesisUtterance")}}-Instanz zurück, auf der das Ereignis ausgelöst wurde.

## Beispiele

Sie können das `error`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
utterThis.addEventListener("error", (event) => {
  console.log(
    `An error has occurred with the speech synthesis: ${event.error}`,
  );
});
```

Oder Sie verwenden die `onerror`-Ereignishandler-Eigenschaft:

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
