---
title: "SpeechRecognition: result Ereignis"
short-title: result
slug: Web/API/SpeechRecognition/result_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Das **`result`** Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn der Spracherkennungsdienst ein Ergebnis zurückgibt – ein Wort oder eine Phrase wurde positiv erkannt und dies wurde an die App zurückgemeldet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("result", (event) => {});

onresult = (event) => {};
```

## Ereignistyp

Ein [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechRecognitionEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`SpeechRecognitionEvent.emma`](/de/docs/Web/API/SpeechRecognitionEvent/emma) {{ReadOnlyInline}}
  - : Gibt eine Extensible MultiModal Annotation-Markup-Sprache (EMMA) — XML — Darstellung des Ergebnisses zurück.
- [`SpeechRecognitionEvent.interpretation`](/de/docs/Web/API/SpeechRecognitionEvent/interpretation) {{ReadOnlyInline}}
  - : Gibt die semantische Bedeutung dessen zurück, was der Benutzer gesagt hat.
- [`SpeechRecognitionEvent.resultIndex`](/de/docs/Web/API/SpeechRecognitionEvent/resultIndex) {{ReadOnlyInline}}
  - : Gibt den niedrigsten Indexwert im Ergebnis innerhalb des [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList) "Arrays" zurück, das tatsächlich geändert wurde.
- [`SpeechRecognitionEvent.results`](/de/docs/Web/API/SpeechRecognitionEvent/results) {{ReadOnlyInline}}
  - : Gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Objekt zurück, das alle Spracherkennungsergebnisse der aktuellen Sitzung darstellt.

## Beispiele

Dieser Code ist ein Auszug aus unserem [Sprachfarbwechsler](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

Sie können das `result` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new SpeechRecognition();

recognition.addEventListener("result", (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
});
```

Oder verwenden Sie die `onresult` Ereignishandler-Eigenschaft:

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
