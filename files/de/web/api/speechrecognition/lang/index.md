---
title: "SpeechRecognition: lang-Eigenschaft"
short-title: lang
slug: Web/API/SpeechRecognition/lang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Web Speech API")}}

Die **`lang`**-Eigenschaft des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interfaces gibt die Sprache der aktuellen `SpeechRecognition` zurück und legt sie fest. Wenn sie nicht spezifiziert ist, wird standardmäßig der Wert des HTML-Attributs [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) verwendet, oder die Spracheinstellung des User-Agents, falls auch diese nicht gesetzt ist.

## Wert

Ein String, der das {{Glossary("BCP_47_language_tag", "BCP 47 language tag")}} für die aktuelle `SpeechRecognition` darstellt.

## Beispiele

Dieser Code stammt aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
// recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
