---
title: "SpeechGrammarList: SpeechGrammarList() Konstruktor"
short-title: SpeechGrammarList()
slug: Web/API/SpeechGrammarList/SpeechGrammarList
l10n:
  sourceCommit: ee348fc4da928b445f95660fae094269604b1b9c
---

{{APIRef("Web Speech API")}}{{deprecated_header}}

Der **`SpeechGrammarList()`**-Konstruktor erstellt eine neue `SpeechGrammarList`-Objektinstanz.

## Syntax

```js-nolint
new SpeechGrammarList()
```

### Parameter

Keine.

## Beispiele

In unserem einfachen Beispiel [Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) erstellen wir eine neue `SpeechRecognition`-Objektinstanz mit dem [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) Konstruktor, erstellen eine neue [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList), fügen unseren Grammatik-String mit der Methode [`SpeechGrammarList.addFromString`](/de/docs/Web/API/SpeechGrammarList/addFromString) hinzu und setzen sie als die Grammatik, die von der `SpeechRecognition`-Instanz erkannt wird, mithilfe der Eigenschaft [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars).

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
