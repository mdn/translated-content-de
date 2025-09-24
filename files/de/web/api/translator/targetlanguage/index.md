---
title: "Translator: targetLanguage-Eigenschaft"
short-title: targetLanguage
slug: Web/API/Translator/targetLanguage
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte **`targetLanguage`**-Eigenschaft der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle gibt die Sprache zurück, in die der Eingabetext übersetzt wird.

Die `targetLanguage` einer `Translator`-Instanz wird beim Erstellen über einen [`create()`](/de/docs/Web/API/Translator/create_static)-Aufruf festgelegt.

## Wert

Ein String, der die Quellsprache angibt. Dies wird ein gültiger {{Glossary("BCP_47_language_tag", "BCP 47-Sprachcode")}} sein.

## Beispiele

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

// Logs "ja"
console.log(translator.targetLanguage);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
