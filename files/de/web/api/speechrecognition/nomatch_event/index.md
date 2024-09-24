---
title: "SpeechRecognition: nomatch-Ereignis"
short-title: nomatch
slug: Web/API/SpeechRecognition/nomatch_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Das **`nomatch`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn der Spracherkennungsdienst ein endgültiges Ergebnis liefert, das keine signifikante Erkennung enthält.

Dies kann ein gewisses Maß an Erkennung umfassen, das den {{domxref("SpeechRecognitionAlternative.confidence","confidence")}}-Schwellenwert nicht erreicht oder überschreitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("nomatch", (event) => {});

onnomatch = (event) => {};
```

## Ereignistyp

Ein {{domxref("SpeechRecognitionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("SpeechRecognitionEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("SpeechRecognitionEvent.emma")}} {{ReadOnlyInline}}
  - : Gibt eine XML-Darstellung im Extensible MultiModal Annotation Markup Language (EMMA) Format des Ergebnisses zurück.
- {{domxref("SpeechRecognitionEvent.interpretation")}} {{ReadOnlyInline}}
  - : Gibt die semantische Bedeutung dessen zurück, was der Benutzer gesagt hat.
- {{domxref("SpeechRecognitionEvent.resultIndex")}} {{ReadOnlyInline}}
  - : Gibt den niedrigsten Indexwert des Ergebnisses in der {{domxref("SpeechRecognitionResultList")}}-"Array" zurück, das tatsächlich geändert wurde.
- {{domxref("SpeechRecognitionEvent.results")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SpeechRecognitionResultList")}}-Objekt zurück, das alle Spracherkennungsergebnisse für die aktuelle Sitzung darstellt.

## Beispiele

Sie können das `nomatch`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("nomatch", () => {
  console.error("Speech not recognized");
});
```

Oder verwenden Sie die `onnomatch`-Ereignishandler-Eigenschaft:

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
