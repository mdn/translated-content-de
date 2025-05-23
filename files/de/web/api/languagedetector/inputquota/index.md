---
title: "LanguageDetector: inputQuota Eigenschaft"
short-title: inputQuota
slug: Web/API/LanguageDetector/inputQuota
l10n:
  sourceCommit: 19e7cdb9bbf52c909ba417c88e768fb287c38ad1
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`inputQuota`** des [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) Interfaces gibt das Eingabe-Kontingent an, das dem Browser für die Erkennung von Sprachen zur Verfügung steht.

## Wert

Eine Zahl, die das verfügbare Eingabe-Kontingent angibt.

Diese Zahl ist implementierungsabhängig. Zum Beispiel könnte sie {{jsxref("Infinity")}} sein, wenn es keine anderen Grenzen als den Speicher des Benutzers und die maximale Länge von JavaScript-Strings gibt, oder es könnte sich um eine Anzahl von Tokens handeln im Fall von KI-Modellen, die ein Token/Credits-Schema verwenden.

Die einzige Garantie ist, dass `inputQuota` - [`measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) nicht negativ sein wird, wenn es ausreichendes Kontingent gibt, um die Sprache des Textes zu erkennen.

## Beispiele

### Überprüfen, ob genug Kontingent vorhanden ist

Im untenstehenden Snippet erstellen wir eine neue `LanguageDetector` Instanz mit [`create()`](/de/docs/Web/API/LanguageDetector/create_static), dann geben wir das gesamte Eingabe-Kontingent über `inputQuota` und die Nutzung des Eingabe-Kontingents für die Erkennung der Sprache eines bestimmten Textstrings über [`measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) zurück.

Wir überprüfen dann, ob die individuelle Eingabenutzung für diesen String größer ist als das insgesamt verfügbare Kontingent. Ist dies der Fall, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit der Erkennung der Sprache des Strings mit [`detect()`](/de/docs/Web/API/LanguageDetector/detect).

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
