---
title: "SpeechRecognition: lang-Eigenschaft"
short-title: lang
slug: Web/API/SpeechRecognition/lang
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{APIRef("Web Speech API")}}

Die **`lang`**-Eigenschaft des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interfaces gibt die Sprache der aktuellen `SpeechRecognition` zurück und setzt diese. Wenn nicht angegeben, wird standardmäßig der Wert des HTML-`lang`-Attributs verwendet oder die Spracheinstellung des Benutzeragenten, falls auch diese nicht festgelegt ist.

## Wert

Ein String, der den BCP 47-Sprachcode für die aktuelle `SpeechRecognition` darstellt.

## Beispiele

Dieser Code ist ein Ausschnitt aus unserem [Sprachfarbwechsler](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
