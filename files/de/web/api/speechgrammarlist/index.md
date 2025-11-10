---
title: SpeechGrammarList
slug: Web/API/SpeechGrammarList
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}{{deprecated_header}}

Das **`SpeechGrammarList`**-Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) stellt eine Liste von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten dar, die Wörter oder Muster von Wörtern enthalten, die der Erkennungsdienst erkennen soll.

Grammatik wird mit dem [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) definiert.

> [!NOTE]
> Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Verwandte Funktionen bleiben in der Spezifikation und werden weiterhin von unterstützenden Browsern zur Rückwärtskompatibilität erkannt, haben jedoch keinen Einfluss auf Sprachdienste.

## Konstruktor

- [`SpeechGrammarList()`](/de/docs/Web/API/SpeechGrammarList/SpeechGrammarList) {{deprecated_inline}}
  - : Erstellt ein neues `SpeechGrammarList`-Objekt.

## Instanz-Eigenschaften

- [`SpeechGrammarList.length`](/de/docs/Web/API/SpeechGrammarList/length) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt die Anzahl der [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte in der `SpeechGrammarList` zurück.

## Instanz-Methoden

- [`SpeechGrammarList.item()`](/de/docs/Web/API/SpeechGrammarList/item) {{deprecated_inline}}
  - : Standard-Getter — ermöglicht das Abrufen einzelner [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte aus der `SpeechGrammarList` unter Verwendung der Array-Syntax.
- [`SpeechGrammarList.addFromURI()`](/de/docs/Web/API/SpeechGrammarList/addFromURI) {{deprecated_inline}}
  - : Nimmt eine unter einer spezifischen URI vorhandene Grammatik und fügt sie der `SpeechGrammarList` als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt hinzu.
- [`SpeechGrammarList.addFromString()`](/de/docs/Web/API/SpeechGrammarList/addFromString) {{deprecated_inline}}
  - : Fügt eine Grammatik in Form eines Strings der `SpeechGrammarList` als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt hinzu.

## Beispiele

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
