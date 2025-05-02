---
title: "SpeechRecognition: nomatch-Ereignis"
short-title: nomatch
slug: Web/API/SpeechRecognition/nomatch_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Speech API")}}

Das **`nomatch`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn der Sprach­erkennungs­dienst ein endgültiges Ergebnis ohne signifikante Erkennung zurückgibt.

Dies kann ein gewisses Maß an Erkennung beinhalten, das nicht die [`confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence)-Schwelle erreicht oder überschreitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("nomatch", (event) => { })

onnomatch = (event) => { }
```

## Ereignistyp

Ein [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechRecognitionEvent")}}

## Ereignis-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften aus der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`SpeechRecognitionEvent.emma`](/de/docs/Web/API/SpeechRecognitionEvent/emma) {{ReadOnlyInline}}
  - : Gibt eine Extensible MultiModal Annotation Markup Language (EMMA) — XML — Repräsentation des Ergebnisses zurück.
- [`SpeechRecognitionEvent.interpretation`](/de/docs/Web/API/SpeechRecognitionEvent/interpretation) {{ReadOnlyInline}}
  - : Gibt die semantische Bedeutung dessen zurück, was der Benutzer gesagt hat.
- [`SpeechRecognitionEvent.resultIndex`](/de/docs/Web/API/SpeechRecognitionEvent/resultIndex) {{ReadOnlyInline}}
  - : Gibt den niedrigsten Indexwerte-Ergebnis im [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList) "Array" zurück, das tatsächlich geändert wurde.
- [`SpeechRecognitionEvent.results`](/de/docs/Web/API/SpeechRecognitionEvent/results) {{ReadOnlyInline}}
  - : Gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList) Objekt zurück, das alle Spracherkennungsergebnisse für die aktuelle Sitzung darstellt.

## Beispiele

Sie können das `nomatch`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("nomatch", () => {
  console.error("Speech not recognized");
});
```

Oder Sie verwenden die `onnomatch`-Ereignis-Handler-Eigenschaft:

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
