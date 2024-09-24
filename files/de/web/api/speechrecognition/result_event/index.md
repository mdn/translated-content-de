---
title: "SpeechRecognition: result Ereignis"
short-title: result
slug: Web/API/SpeechRecognition/result_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Das **`result`** Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn der Spracherkennungsdienst ein Ergebnis zurückgibt – ein Wort oder eine Phrase wurde positiv erkannt und dies wurde der Anwendung zurückgemeldet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js
addEventListener("result", (event) => {});

onresult = (event) => {};
```

## Ereignistyp

Ein {{domxref("SpeechRecognitionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("SpeechRecognitionEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("SpeechRecognitionEvent.emma")}} {{ReadOnlyInline}}
  - : Gibt eine Extensible MultiModal Annotation Markupsprache (EMMA) — XML — Darstellung des Ergebnisses zurück.
- {{domxref("SpeechRecognitionEvent.interpretation")}} {{ReadOnlyInline}}
  - : Gibt die semantische Bedeutung dessen zurück, was der Benutzer gesagt hat.
- {{domxref("SpeechRecognitionEvent.resultIndex")}} {{ReadOnlyInline}}
  - : Gibt den niedrigsten Indexwert zurück, der sich tatsächlich im {{domxref("SpeechRecognitionResultList")}} „Array“ geändert hat.
- {{domxref("SpeechRecognitionEvent.results")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SpeechRecognitionResultList")}} Objekt zurück, das alle Spracherkennungsergebnisse für die aktuelle Sitzung darstellt.

## Beispiele

Dieser Code ist ein Auszug aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) Beispiel.

Sie können das `result` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode verwenden:

```js
const recognition = new SpeechRecognition();

recognition.addEventListener("result", (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
});
```

Oder verwenden Sie die `onresult` Ereignisseigenschaft:

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
