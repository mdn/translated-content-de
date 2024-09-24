---
title: "SpeechGrammar: Konstruktor SpeechGrammar()"
short-title: SpeechGrammar()
slug: Web/API/SpeechGrammar/SpeechGrammar
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}{{Non-standard_Header}}{{SeeCompatTable}}

Der **`SpeechGrammar()`**-Konstruktor der
{{domxref("SpeechGrammar")}}-Schnittstelle erstellt eine neue `SpeechGrammar`-Objektinstanz.

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
speechRecognitionList[1] = newGrammar; // sollte das neue SpeechGrammar-Objekt zur Liste hinzufügen
```

## Spezifikationen

Diese API hat keine offizielle W3C- oder WHATWG-Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
