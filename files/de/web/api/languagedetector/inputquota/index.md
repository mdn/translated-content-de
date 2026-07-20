---
title: "LanguageDetector: inputQuota-Eigenschaft"
short-title: inputQuota
slug: Web/API/LanguageDetector/inputQuota
l10n:
  sourceCommit: 613cb65038a6b572f78ce5f83c711ec2611599fb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte **`inputQuota`**-Eigenschaft des [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Interfaces gibt das verfügbare Eingabelimit für den Browser zur Spracherkennung zurück.

## Wert

Eine Zahl, die die verfügbare Eingabekapazität angibt.

Diese Zahl ist implementierungsabhängig. Zum Beispiel könnte sie {{jsxref("Infinity")}} sein, wenn es keine Einschränkungen gibt, die über den Speicher des Benutzers und die maximale Länge von JavaScript-Strings hinausgehen, oder sie könnte eine Anzahl von Tokens sein im Fall von KI-Modellen, die ein Token-/Credits-Schema verwenden.

Die einzige Garantie ist, dass `inputQuota` - [`measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) nicht negativ sein wird, wenn ausreichend Kontingent vorhanden ist, um die Sprache des Textes zu erkennen.

## Beispiele

### Überprüfen, ob genügend Kontingent vorhanden ist

Im folgenden Codeausschnitt erstellen wir eine neue Instanz von `LanguageDetector` mit [`create()`](/de/docs/Web/API/LanguageDetector/create_static), geben dann das gesamte Eingabekontingent über `inputQuota` und den Eingabeverbrauch für die Erkennung der Sprache eines bestimmten Textstrings über [`measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) zurück.

Wir prüfen dann, ob der individuelle Eingabeverbrauch für diesen String größer ist als das insgesamt verfügbare Kontingent. Falls ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir, die Sprache des Strings mit [`detect()`](/de/docs/Web/API/LanguageDetector/detect) zu erkennen.

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
