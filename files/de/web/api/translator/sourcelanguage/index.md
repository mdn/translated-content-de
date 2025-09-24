---
title: "Translator: sourceLanguage-Eigenschaft"
short-title: sourceLanguage
slug: Web/API/Translator/sourceLanguage
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`sourceLanguage`** der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle gibt die erwartete Sprache des zu übersetzenden Eingabetextes zurück.

Die `sourceLanguage` eines `Translator`-Instanzen wird festgelegt, wenn sie über einen [`create()`](/de/docs/Web/API/Translator/create_static)-Aufruf erstellt wird.

## Wert

Ein String, der die Ausgangssprache angibt. Dies wird ein gültiger {{Glossary("BCP_47_language_tag", "BCP 47-Sprachcode")}} sein.

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
