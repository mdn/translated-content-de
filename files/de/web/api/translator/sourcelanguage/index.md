---
title: "Translator: sourceLanguage-Eigenschaft"
short-title: sourceLanguage
slug: Web/API/Translator/sourceLanguage
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte **`sourceLanguage`**-Eigenschaft der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle gibt die erwartete Sprache des übersetzenden Eingabetexts zurück.

Die `sourceLanguage` einer `Translator`-Instanz wird beim Erstellen über einen [`create()`](/de/docs/Web/API/Translator/create_static)-Aufruf festgelegt.

## Wert

Ein String, der die Quellsprache angibt. Dies wird ein gültiger [BCP 47-Sprachcode](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert).

## Beispiele

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

// Logs "en"
console.log(translator.sourceLanguage);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
