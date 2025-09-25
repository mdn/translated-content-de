---
title: "SpeechGrammarList: item() Methode"
short-title: item()
slug: Web/API/SpeechGrammarList/item
l10n:
  sourceCommit: ee348fc4da928b445f95660fae094269604b1b9c
---

{{APIRef("Web Speech API")}}{{deprecated_header}}

Der **`item`** Getter der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList)-Schnittstelle ist ein Standard-Getter — er ermöglicht es, einzelne [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte durch Array-Syntax aus der `SpeechGrammarList` abzurufen.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Index des abzurufenden Elements.

### Rückgabewert

Ein [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt.

## Beispiele

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

const myFirstGrammar = speechRecognitionList[0]; // variable contain the object created above
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
