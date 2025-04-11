---
title: "SpeechRecognition: lang-Eigenschaft"
short-title: lang
slug: Web/API/SpeechRecognition/lang
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Web Speech API")}}

Die **`lang`**-Eigenschaft des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interfaces gibt die Sprache der aktuellen `SpeechRecognition` zurück und legt sie fest. Falls nicht angegeben, wird standardmäßig der Wert des HTML-Attributes [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) verwendet oder die Spracheinstellung des Benutzeragenten, falls das auch nicht festgelegt ist.

## Wert

Ein String, der den BCP 47-Sprachcode für die aktuelle `SpeechRecognition` darstellt.

## Beispiele

Dieser Code stammt aus unserem Beispiel [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js).

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
