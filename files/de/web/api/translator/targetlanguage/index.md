---
title: "Translator: targetLanguage-Eigenschaft"
short-title: targetLanguage
slug: Web/API/Translator/targetLanguage
l10n:
  sourceCommit: 19e7cdb9bbf52c909ba417c88e768fb287c38ad1
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`targetLanguage`** des [`Translator`](/de/docs/Web/API/Translator)-Interfaces gibt die Sprache zurück, in die der Eingabetext übersetzt wird.

Die `targetLanguage` eines `Translator`-Objekts wird beim Erstellen über einen [`create()`](/de/docs/Web/API/Translator/create_static)-Aufruf festgelegt.

## Wert

Ein String, der die Ausgangssprache angibt. Dies wird ein gültiges [BCP 47-Sprach-Tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) festgelegt).

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
