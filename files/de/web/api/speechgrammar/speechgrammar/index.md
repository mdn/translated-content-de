---
title: "SpeechGrammar: SpeechGrammar() Konstruktor"
short-title: SpeechGrammar()
slug: Web/API/SpeechGrammar/SpeechGrammar
l10n:
  sourceCommit: 706cbf21987296c604cc96b7f95095ed7aba6bb8
---

{{APIRef("Web Speech API")}}{{Non-standard_Header}}{{deprecated_header}}

Der **`SpeechGrammar()`** Konstruktor der
[`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar) Schnittstelle erstellt eine neue `SpeechGrammar` Objektinstanz.

## Syntax

```js-nolint
new SpeechGrammar()
```

### Parameter

Keine.

## Beispiele

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

const newGrammar = new SpeechGrammar();
newGrammar.src =
  "#JSGF V1.0; grammar names; public <name> = chris | kirsty | mike;";
speechRecognitionList[1] = newGrammar; // should add the new SpeechGrammar object to the list
```

## Spezifikationen

Diese API hat keine offizielle W3C- oder WHATWG-Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
