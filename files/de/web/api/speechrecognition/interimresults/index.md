---
title: "SpeechRecognition: interimResults-Eigenschaft"
short-title: interimResults
slug: Web/API/SpeechRecognition/interimResults
l10n:
  sourceCommit: 5eb216b5d534c09d94a087d166c2a7f49a428762
---

{{APIRef("Web Speech API")}}

Die **`interimResults`**-Eigenschaft des
[`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interfaces steuert, ob vorläufige Ergebnisse zurückgegeben werden sollen (`true`) oder nicht (`false`). Vorläufige Ergebnisse sind Ergebnisse, die noch nicht endgültig sind (z.B. ist die [`SpeechRecognitionResult.isFinal`](/de/docs/Web/API/SpeechRecognitionResult/isFinal)-Eigenschaft `false`).

Der Standardwert für **`interimResults`** ist `false`.

## Wert

Ein boolescher Wert, der den Status der aktuellen
`SpeechRecognition`-Zwischenergebnisse darstellt. `true` bedeutet, dass vorläufige Ergebnisse zurückgegeben werden, und `false` bedeutet, dass sie nicht zurückgegeben werden.

## Beispiele

Dieser Code ist ein Auszug aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

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
