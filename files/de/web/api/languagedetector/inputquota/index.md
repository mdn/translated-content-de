---
title: "LanguageDetector: inputQuota-Eigenschaft"
short-title: inputQuota
slug: Web/API/LanguageDetector/inputQuota
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`inputQuota`**-Eigenschaft des [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Interfaces gibt die verfügbare Eingabequote des Browsers zur Sprachenerkennung zurück.

## Wert

Eine Zahl, die die verfügbare Eingabequote angibt.

Diese Zahl ist implementationsabhängig. Beispielsweise könnte sie {{jsxref("Infinity")}} sein, wenn es keine Begrenzungen außer dem Speicher des Nutzers und der maximalen Länge von JavaScript-Strings gibt, oder es könnte sich um eine Anzahl von Tokens handeln, im Fall von KI-Modellen, die ein Token-/Creditschema verwenden.

Die einzige Garantie ist, dass `inputQuota` - [`measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) nicht negativ ist, wenn genügend Quote vorhanden ist, um die Sprache des Textes zu erkennen.

## Beispiele

### Überprüfen, ob genügend Quote vorhanden ist

Im folgenden Ausschnitt erstellen wir eine neue `LanguageDetector`-Instanz über [`create()`](/de/docs/Web/API/LanguageDetector/create_static), geben dann die gesamte Eingabequote über `inputQuota` und die Eingabequotennutzung zur Erkennung der Sprache eines bestimmten Textstrings über [`measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) zurück.

Wir testen dann, ob die individuelle Eingabenutzung für diesen String größer ist als die insgesamt verfügbare Quote. Falls ja, werfen wir einen entsprechenden Fehler; falls nicht, beginnen wir mit der Erkennung der Sprache des Strings mit [`detect()`](/de/docs/Web/API/LanguageDetector/detect).

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});

const totalInputQuota = detector.inputQuota;
const inputUsage = await detector.measureInputUsage(myTextString);

if (inputUsage > totalInputQuota) {
  throw new Error("Insufficient quota to detect languages.");
} else {
  console.log("Quota available to detect languages.");
  const results = await detector.detect(myTextString);
  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
