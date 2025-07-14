---
title: "Translator: targetLanguage property"
short-title: targetLanguage
slug: Web/API/Translator/targetLanguage
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`targetLanguage`** des [`Translator`](/de/docs/Web/API/Translator) Schnittstelle gibt die Sprache zurück, in die der Eingabetext übersetzt wird.

Die `targetLanguage` eines `Translator`-Instanz wird beim Erstellen dieser Instanz über einen [`create()`](/de/docs/Web/API/Translator/create_static) Aufruf festgelegt.

## Wert

Ein String, der die Quellsprache angibt. Dies ist ein gültiges [BCP 47 Sprach-Tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert).

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
