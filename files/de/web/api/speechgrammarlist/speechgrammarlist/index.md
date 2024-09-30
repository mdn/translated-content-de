---
title: "SpeechGrammarList: SpeechGrammarList() Konstruktor"
short-title: SpeechGrammarList()
slug: Web/API/SpeechGrammarList/SpeechGrammarList
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

Der **`SpeechGrammarList()`** Konstruktor erstellt eine neue Instanz eines `SpeechGrammarList` Objekts.

## Syntax

```js-nolint
new SpeechGrammarList()
```

### Parameter

Keine.

## Beispiele

In unserem einfachen [Sprachfarbwechsler](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer)-Beispiel erstellen wir eine neue Instanz eines `SpeechRecognition` Objekts mit dem [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) Konstruktor, erstellen eine neue [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList), fügen unser Grammatik-String mit der Methode [`SpeechGrammarList.addFromString`](/de/docs/Web/API/SpeechGrammarList/addFromString) hinzu und setzen sie als Grammatik, die von der `SpeechRecognition` Instanz erkannt wird, mithilfe der [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars) Eigenschaft.

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
