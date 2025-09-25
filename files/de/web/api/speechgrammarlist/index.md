---
title: SpeechGrammarList
slug: Web/API/SpeechGrammarList
l10n:
  sourceCommit: ee348fc4da928b445f95660fae094269604b1b9c
---

{{APIRef("Web Speech API")}}{{deprecated_header}}

Die **`SpeechGrammarList`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Liste von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten, die Wörter oder Muster von Wörtern enthalten, die der Erkennungsdienst erkennen soll.

Grammatiken werden im [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) definiert. Andere Formate könnten in Zukunft ebenfalls unterstützt werden.

## Konstruktor

- [`SpeechGrammarList()`](/de/docs/Web/API/SpeechGrammarList/SpeechGrammarList) {{deprecated_inline}}
  - : Erstellt ein neues `SpeechGrammarList`-Objekt.

## Instanz-Eigenschaften

- [`SpeechGrammarList.length`](/de/docs/Web/API/SpeechGrammarList/length) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt die Anzahl der [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte zurück, die in der `SpeechGrammarList` enthalten sind.

## Instanz-Methoden

- [`SpeechGrammarList.item()`](/de/docs/Web/API/SpeechGrammarList/item) {{deprecated_inline}}
  - : Standardgetter — ermöglicht es, einzelne [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte aus der `SpeechGrammarList` mit Array-Syntax abzurufen.
- [`SpeechGrammarList.addFromURI()`](/de/docs/Web/API/SpeechGrammarList/addFromURI) {{deprecated_inline}}
  - : Nimmt eine Grammatik von einem bestimmten URI und fügt sie der `SpeechGrammarList` als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt hinzu.
- [`SpeechGrammarList.addFromString()`](/de/docs/Web/API/SpeechGrammarList/addFromString) {{deprecated_inline}}
  - : Fügt eine Grammatik in einem String der `SpeechGrammarList` als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt hinzu.

## Beispiele

In unserem einfachen [Speech-Color-Changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer)-Beispiel erstellen wir eine neue Instanz eines `SpeechRecognition`-Objekts mithilfe des [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)-Konstruktors, erstellen eine neue `SpeechGrammarList`, fügen unsere Grammatikzeichenfolge mit der [`SpeechGrammarList.addFromString`](/de/docs/Web/API/SpeechGrammarList/addFromString)-Methode hinzu und setzen sie als die Grammatik, die von der `SpeechRecognition`-Instanz erkannt wird, indem wir die [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)-Eigenschaft verwenden.

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
