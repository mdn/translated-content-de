---
title: "LanguageDetector: expectedInputLanguages-Eigenschaft"
short-title: expectedInputLanguages
slug: Web/API/LanguageDetector/expectedInputLanguages
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`expectedInputLanguages`** schreibgeschützte Eigenschaft des [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Interfaces gibt die zu erwartenden Sprachen zurück, die im Eingabetext erkannt werden sollen. Das Angeben erwarteter Eingabesprachen hilft, die Genauigkeit der Spracherkennung zu verbessern.

Die `expectedInputLanguages` einer `LanguageDetector`-Instanz werden bei der Erstellung über einen [`create()`](/de/docs/Web/API/LanguageDetector/create_static)-Aufruf festgelegt.

## Wert

Ein Array von Strings, das die erwarteten Eingabesprachen angibt. Diese sind gültige [BCP 47 Sprach-Tags](https://de.wikipedia.org/wiki/IETF-Sprachcode#Liste_h%C3%A4ufiger_prim%C3%A4rer_Sprachsubtags) (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert).

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
