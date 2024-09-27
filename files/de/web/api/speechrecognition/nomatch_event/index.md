---
title: "SpeechRecognition: nomatch-Ereignis"
short-title: nomatch
slug: Web/API/SpeechRecognition/nomatch_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Das **`nomatch`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn der Spracherkennungsdienst ein endgültiges Ergebnis ohne signifikante Erkennung zurückgibt.

Dies kann ein gewisses Maß an Erkennung umfassen, das jedoch nicht den [`confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence)-Schwellenwert erreicht oder überschreitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("nomatch", (event) => {});

onnomatch = (event) => {};
```

## Ereignistyp

Ein [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechRecognitionEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`SpeechRecognitionEvent.emma`](/de/docs/Web/API/SpeechRecognitionEvent/emma) {{ReadOnlyInline}}
  - : Gibt eine Extensible MultiModal Annotation Markup Language (EMMA) — XML — Darstellung des Ergebnisses zurück.
- [`SpeechRecognitionEvent.interpretation`](/de/docs/Web/API/SpeechRecognitionEvent/interpretation) {{ReadOnlyInline}}
  - : Gibt die semantische Bedeutung dessen zurück, was der Benutzer gesagt hat.
- [`SpeechRecognitionEvent.resultIndex`](/de/docs/Web/API/SpeechRecognitionEvent/resultIndex) {{ReadOnlyInline}}
  - : Gibt den niedrigsten Indexwert des Ergebnisses in dem "Array" von [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList) zurück, das tatsächlich geändert wurde.
- [`SpeechRecognitionEvent.results`](/de/docs/Web/API/SpeechRecognitionEvent/results) {{ReadOnlyInline}}
  - : Gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Objekt zurück, das alle Spracherkennungsergebnisse für die aktuelle Sitzung darstellt.

## Beispiele

Sie können das `nomatch`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("nomatch", () => {
  console.error("Speech not recognized");
});
```

Oder verwenden Sie die `onnomatch`-Ereignishandlereigenschaft:

```js
recognition.onnomatch = () => {
  console.error("Speech not recognized");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
