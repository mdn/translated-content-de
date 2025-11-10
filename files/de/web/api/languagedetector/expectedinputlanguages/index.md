---
title: "LanguageDetector: expectedInputLanguages-Eigenschaft"
short-title: expectedInputLanguages
slug: Web/API/LanguageDetector/expectedInputLanguages
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte **`expectedInputLanguages`**-Eigenschaft der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle gibt die erwarteten Sprachen zurück, die im Eingabetext erkannt werden sollen. Das Angeben der erwarteten Eingabesprachen hilft, die Genauigkeit der Spracherkennung zu verbessern.

Die `expectedInputLanguages` einer `LanguageDetector`-Instanz werden beim Erstellen über einen Aufruf von [`create()`](/de/docs/Web/API/LanguageDetector/create_static) festgelegt.

## Wert

Ein Array von Zeichenfolgen, das die erwarteten Eingabesprachen angibt. Diese entsprechen gültigen {{Glossary("BCP_47_language_tag", "BCP 47-Language-Tags")}}.

## Beispiele

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});

// Logs ["en-US", "zh"]
console.log(detector.expectedInputLanguages);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
