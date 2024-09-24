---
title: "SpeechRecognition: maxAlternatives-Eigenschaft"
short-title: maxAlternatives
slug: Web/API/SpeechRecognition/maxAlternatives
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Die **`maxAlternatives`**-Eigenschaft der
{{domxref("SpeechRecognition")}}-Schnittstelle legt die maximale Anzahl von
{{domxref("SpeechRecognitionAlternative")}}s fest, die pro
{{domxref("SpeechRecognitionResult")}} bereitgestellt werden.

Der Standardwert ist 1.

## Wert

Eine Zahl, die die maximale Anzahl der zurückgegebenen Alternativen für jedes Ergebnis darstellt.

## Beispiele

Dieser Code stammt aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
