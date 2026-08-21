---
title: SpeechGrammarList
slug: Web/API/SpeechGrammarList
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Web Speech API")}}

Das **`SpeechGrammarList`**-Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Liste von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten, die Wörter oder Wortmuster enthalten, die der Erkennungsdienst erkennen soll.

Grammatik wird mit dem [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) definiert.

> [!NOTE]
> Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Verwandte Funktionen bleiben in der Spezifikation und werden von unterstützenden Browsern aus Gründen der Abwärtskompatibilität weiterhin erkannt, haben jedoch keinen Einfluss auf Spracherkennungsdienste.

## Konstruktor

- [`SpeechGrammarList()`](/de/docs/Web/API/SpeechGrammarList/SpeechGrammarList) {{deprecated_inline}}
  - : Erstellt ein neues `SpeechGrammarList`-Objekt.

## Instanz-Eigenschaften

- [`SpeechGrammarList.length`](/de/docs/Web/API/SpeechGrammarList/length) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt die Anzahl der in der `SpeechGrammarList` enthaltenen [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte zurück.

## Instanz-Methoden

- [`SpeechGrammarList.item()`](/de/docs/Web/API/SpeechGrammarList/item) {{deprecated_inline}}
  - : Standard-Getter – ermöglicht das Abrufen einzelner [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte aus der `SpeechGrammarList` mittels Array-Syntax.
- [`SpeechGrammarList.addFromURI()`](/de/docs/Web/API/SpeechGrammarList/addFromURI) {{deprecated_inline}}
  - : Nimmt eine an einer bestimmten URI vorhandene Grammatik und fügt sie der `SpeechGrammarList` als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt hinzu.
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
