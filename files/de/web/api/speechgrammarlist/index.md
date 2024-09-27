---
title: SpeechGrammarList
slug: Web/API/SpeechGrammarList
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die **`SpeechGrammarList`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Liste von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten, die Wörter oder Wörtergruppen enthalten, die der Erkennungsdienst erkennen soll.

Grammatik wird mit dem [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) definiert. Andere Formate könnten in Zukunft ebenfalls unterstützt werden.

## Konstruktor

- [`SpeechGrammarList()`](/de/docs/Web/API/SpeechGrammarList/SpeechGrammarList) {{Experimental_Inline}}
  - : Erstellt ein neues `SpeechGrammarList`-Objekt.

## Instanzeigenschaften

- [`SpeechGrammarList.length`](/de/docs/Web/API/SpeechGrammarList/length) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Anzahl der [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte zurück, die in der `SpeechGrammarList` enthalten sind.

## Instanzmethoden

- [`SpeechGrammarList.item()`](/de/docs/Web/API/SpeechGrammarList/item) {{Experimental_Inline}}
  - : Standard-Gatter — ermöglicht das Abrufen einzelner [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte aus der `SpeechGrammarList` mittels Array-Syntax.
- [`SpeechGrammarList.addFromURI()`](/de/docs/Web/API/SpeechGrammarList/addFromURI) {{Experimental_Inline}}
  - : Nimmt eine Grammatik von einer bestimmten URI und fügt sie der `SpeechGrammarList` als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt hinzu.
- [`SpeechGrammarList.addFromString()`](/de/docs/Web/API/SpeechGrammarList/addFromString) {{Experimental_Inline}}
  - : Fügt eine Grammatik als Zeichenfolge der `SpeechGrammarList` als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt hinzu.

## Beispiele

In unserem einfachen Beispiel [Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) erstellen wir eine neue `SpeechRecognition`-Objektinstanz mit dem [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) Konstruktor, erstellen eine neue `SpeechGrammarList`, fügen unsere Grammatik-Zeichenfolge mit der Methode [`SpeechGrammarList.addFromString`](/de/docs/Web/API/SpeechGrammarList/addFromString) hinzu und setzen sie als die Grammatik, die von der `SpeechRecognition`-Instanz mit der Eigenschaft [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars) erkannt wird.

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
