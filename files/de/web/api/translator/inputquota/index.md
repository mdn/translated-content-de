---
title: "Translator: inputQuota-Eigenschaft"
short-title: inputQuota
slug: Web/API/Translator/inputQuota
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`inputQuota`** schreibgeschützte Eigenschaft der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle gibt die verfügbare Eingabequote des Browsers zur Generierung von Übersetzungen zurück.

## Wert

Eine Zahl, die die verfügbare Eingabequote angibt.

Diese Zahl ist implementationsabhängig. Zum Beispiel könnte sie {{jsxref("Infinity")}} sein, wenn es keine Beschränkungen über den Speicher des Benutzers und die maximale Länge von JavaScript-Strings hinaus gibt, oder es könnte eine Anzahl von Tokens sein, im Falle von KI-Modellen, die ein Token/Credits-System verwenden.

Die einzige Garantie ist, dass `inputQuota` - [`measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage) nicht negativ sein wird, wenn eine ausreichende Quote vorhanden ist, um den Text zu übersetzen.

## Beispiele

### Überprüfen, ob Sie genügend Quote haben

Im folgenden Code-Snippet erstellen wir eine neue `Translator`-Instanz mit [`create()`](/de/docs/Web/API/Translator/create_static), geben dann die gesamte Eingabequote über `inputQuota` und die Eingabequoten-Nutzung für die Übersetzung eines bestimmten Textstrings über [`measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage) zurück.

Wir prüfen dann, ob die individuelle Eingabenutzung für diesen String größer ist als die insgesamt verfügbare Quote. Falls ja, werfen wir einen entsprechenden Fehler; falls nicht, beginnen wir mit der Übersetzung des Strings mittels [`translate()`](/de/docs/Web/API/Translator/translate).

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

- [Verwendung der Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
