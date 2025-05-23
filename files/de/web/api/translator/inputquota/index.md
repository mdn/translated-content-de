---
title: "Translator: inputQuota-Eigenschaft"
short-title: inputQuota
slug: Web/API/Translator/inputQuota
l10n:
  sourceCommit: 19e7cdb9bbf52c909ba417c88e768fb287c38ad1
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

Die schreibgeschützte **`inputQuota`**-Eigenschaft der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle gibt das verfügbare Eingabelimit für den Browser zur Generierung von Übersetzungen zurück.

## Wert

Eine Zahl, die das verfügbare Eingabelimit spezifiziert.

Diese Zahl ist implementationsabhängig. Beispielsweise könnte sie {{jsxref("Infinity")}} sein, wenn es keine Beschränkungen über den Speicher des Benutzers und die maximale Länge von JavaScript-Strings hinaus gibt, oder sie könnte eine Anzahl von Tokens sein, im Fall von KI-Modellen, die ein Token/Kredit-System verwenden.

Die einzige Garantie ist, dass `inputQuota` - [`measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage) nicht negativ sein wird, wenn genügend Quota vorhanden ist, um den Text zu übersetzen.

## Beispiele

### Überprüfen, ob genügend Quota vorhanden ist

Im untenstehenden Beispiel erstellen wir eine neue `Translator`-Instanz mit [`create()`](/de/docs/Web/API/Translator/create_static), dann geben wir das gesamte Eingabelimit über `inputQuota` und die Eingabebegrenzung für die Übersetzung eines bestimmten Textstrings über [`measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage) zurück.

Wir prüfen dann, ob die individuelle Eingabenutzung für diesen String größer ist als das insgesamt verfügbare Limit. Falls ja, werfen wir einen entsprechenden Fehler; falls nein, beginnen wir mit der Übersetzung des Strings mit [`translate()`](/de/docs/Web/API/Translator/translate).

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

const totalInputQuota = translator.inputQuota;
const inputUsage = await translator.measureInputUsage(myTextString);

if (inputUsage > totalInputQuota) {
  throw new Error("Insufficient quota to translate.");
} else {
  console.log("Quota available to translate.");
  const translation = await translator.translate(myTextString);
  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator- und Language Detector-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
