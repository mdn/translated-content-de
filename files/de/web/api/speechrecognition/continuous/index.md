---
title: "SpeechRecognition: continuous-Eigenschaft"
short-title: continuous
slug: Web/API/SpeechRecognition/continuous
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Die **`continuous`**-Eigenschaft des
[`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interfaces steuert, ob kontinuierliche Ergebnisse für jede Erkennung zurückgegeben werden oder nur ein einzelnes Ergebnis.

Standardmäßig ist sie auf einzelne Ergebnisse (`false`) eingestellt.

## Wert

Ein boolescher Wert, der den aktuellen kontinuierlichen Status der `SpeechRecognition` repräsentiert. `true` bedeutet kontinuierlich, und `false` bedeutet nicht kontinuierlich (einzelnes Ergebnis jedes Mal).

## Beispiele

Dieser Code ist aus unserem [Sprachfarbwechsler](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel entnommen.

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
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
