---
title: "LanguageDetector: expectedInputLanguages-Eigenschaft"
short-title: expectedInputLanguages
slug: Web/API/LanguageDetector/expectedInputLanguages
l10n:
  sourceCommit: 19e7cdb9bbf52c909ba417c88e768fb287c38ad1
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`expectedInputLanguages`** des [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Interfaces gibt die erwarteten Sprachen zurück, die im Eingabetext erkannt werden sollen. Die Angabe erwarteter Eingabesprachen trägt zur Verbesserung der Genauigkeit der Spracherkennung bei.

Die `expectedInputLanguages` einer `LanguageDetector`-Instanz werden festgelegt, wenn sie über einen [`create()`](/de/docs/Web/API/LanguageDetector/create_static)-Aufruf erstellt wird.

## Wert

Ein Array von Zeichenfolgen, das die erwarteten Eingabesprachen angibt. Diese werden gültige [BCP 47-Sprachtags](https://de.wikipedia.org/wiki/IETF-Sprachtag#Liste_der_g%C3%A4ngigen_prim%C3%A4ren_Sprachsubtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert).

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
