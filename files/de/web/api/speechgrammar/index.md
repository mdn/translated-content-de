---
title: SpeechGrammar
slug: Web/API/SpeechGrammar
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die **`SpeechGrammar`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Menge von Wörtern oder Wortmustern, die der Erkennungsdienst erkennen soll.

Grammatik wird unter Verwendung des [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) definiert. Andere Formate könnten in der Zukunft ebenfalls unterstützt werden.

## Konstruktor

- [`SpeechGrammar()`](/de/docs/Web/API/SpeechGrammar/SpeechGrammar) {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Erstellt ein neues `SpeechGrammar`-Objekt.

## Instanz-Eigenschaften

- [`SpeechGrammar.src`](/de/docs/Web/API/SpeechGrammar/src) {{Experimental_Inline}}
  - : Setzt und gibt einen String zurück, der die Grammatik aus der `SpeechGrammar`-Objektinstanz enthält.
- [`SpeechGrammar.weight`](/de/docs/Web/API/SpeechGrammar/weight) {{Optional_Inline}} {{Experimental_Inline}}
  - : Setzt und gibt das Gewicht des `SpeechGrammar`-Objekts zurück.

## Beispiele

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

console.log(speechRecognitionList[0].src); // should return the same as the contents of the grammar variable
console.log(speechRecognitionList[0].weight); // should return 1 - the same as the weight set in addFromString.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
