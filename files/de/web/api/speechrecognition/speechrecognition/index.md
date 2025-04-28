---
title: "SpeechRecognition: SpeechRecognition() Konstruktor"
short-title: SpeechRecognition()
slug: Web/API/SpeechRecognition/SpeechRecognition
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Web Speech API")}}

Der **`SpeechRecognition()`** Konstruktor erzeugt eine neue
[`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) Objektinstanz.

## Syntax

```js-nolint
new SpeechRecognition()
```

### Parameter

Keine.

## Beispiele

Dieser Code ist aus unserem [Beispiel zur Sprachgesteuerten Farbumschaltung](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) entnommen.

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
