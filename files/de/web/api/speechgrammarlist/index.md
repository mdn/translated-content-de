---
title: SpeechGrammarList
slug: Web/API/SpeechGrammarList
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die **`SpeechGrammarList`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Liste von {{domxref("SpeechGrammar")}}-Objekten, die Wörter oder Muster von Wörtern enthalten, die der Erkennungsdienst erkennen soll.

Die Grammatik wird unter Verwendung des [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) definiert. Andere Formate können in Zukunft ebenfalls unterstützt werden.

## Konstruktor

- {{domxref("SpeechGrammarList.SpeechGrammarList", "SpeechGrammarList()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `SpeechGrammarList`-Objekt.

## Instanz-Eigenschaften

- {{domxref("SpeechGrammarList.length")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Anzahl der {{domxref("SpeechGrammar")}}-Objekte in der `SpeechGrammarList` zurück.

## Instanz-Methoden

- {{domxref("SpeechGrammarList.item()")}} {{Experimental_Inline}}
  - : Standard-Getter — ermöglicht das Abrufen einzelner {{domxref("SpeechGrammar")}}-Objekte aus der `SpeechGrammarList` mithilfe von Array-Syntax.
- {{domxref("SpeechGrammarList.addFromURI()")}} {{Experimental_Inline}}
  - : Nimmt eine Grammatik, die an einer bestimmten URI vorhanden ist, und fügt sie der `SpeechGrammarList` als neues {{domxref("SpeechGrammar")}}-Objekt hinzu.
- {{domxref("SpeechGrammarList.addFromString()")}} {{Experimental_Inline}}
  - : Fügt eine Grammatik in einem String der `SpeechGrammarList` als neues {{domxref("SpeechGrammar")}}-Objekt hinzu.

## Beispiele

In unserem einfachen [Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) Beispiel erstellen wir eine neue Instanz des `SpeechRecognition`-Objekts mit dem {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}}-Konstruktor, erstellen eine neue `SpeechGrammarList`, fügen unsere Grammatikzeichenfolge mit der Methode {{domxref("SpeechGrammarList.addFromString")}} hinzu und legen fest, dass diese von der `SpeechRecognition`-Instanz mit der Eigenschaft {{domxref("SpeechRecognition.grammars")}} erkannt wird.

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
