---
title: SpeechGrammarList
slug: Web/API/SpeechGrammarList
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Die **`SpeechGrammarList`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) stellt eine Liste von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten dar, die Wörter oder Wortmuster enthalten, welche der Spracherkennungsdienst erkennen soll.

Die Grammatik wird im [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) definiert.

> [!NOTE]
> Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Zugehörige Funktionen sind weiterhin in der Spezifikation enthalten und werden von unterstützenden Browsern aus Gründen der Abwärtskompatibilität noch erkannt, haben aber keine Auswirkung auf Spracherkennungsdienste.

## Konstruktor

- [`SpeechGrammarList()`](/de/docs/Web/API/SpeechGrammarList/SpeechGrammarList) {{deprecated_inline}}
  - : Erstellt ein neues `SpeechGrammarList`-Objekt.

## Instanzeigenschaften

- [`SpeechGrammarList.length`](/de/docs/Web/API/SpeechGrammarList/length) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt die Anzahl der [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte in der `SpeechGrammarList` zurück.

## Instanzmethoden

- [`SpeechGrammarList.item()`](/de/docs/Web/API/SpeechGrammarList/item) {{deprecated_inline}}
  - : Standard-Getter – ermöglicht es, einzelne [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte mithilfe der Array-Syntax aus der `SpeechGrammarList` abzurufen.
- [`SpeechGrammarList.addFromUri()`](/de/docs/Web/API/SpeechGrammarList/addFromUri) {{deprecated_inline}}
  - : Übernimmt eine unter einem bestimmten URI verfügbare Grammatik und fügt sie der `SpeechGrammarList` als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt hinzu.
- [`SpeechGrammarList.addFromString()`](/de/docs/Web/API/SpeechGrammarList/addFromString) {{deprecated_inline}}
  - : Fügt eine als Zeichenfolge vorliegende Grammatik der `SpeechGrammarList` als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt hinzu.

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
