---
title: "Translator: inputQuota-Eigenschaft"
short-title: inputQuota
slug: Web/API/Translator/inputQuota
l10n:
  sourceCommit: 613cb65038a6b572f78ce5f83c711ec2611599fb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte **`inputQuota`**-Eigenschaft des [`Translator`](/de/docs/Web/API/Translator)-Interfaces gibt das verfügbare Eingabekontingent des Browsers zur Generierung von Übersetzungen zurück.

## Wert

Eine Zahl, die das verfügbare Eingabekontingent angibt.

Diese Zahl ist implementierungsabhängig. Zum Beispiel könnte sie {{jsxref("Infinity")}} sein, wenn es keine anderen Einschränkungen als den Speicher des Benutzers und die maximale Länge von JavaScript-Strings gibt, oder es könnte sich um eine Anzahl von Token handeln, im Falle von AI-Modellen, die ein Token-/Kredit-Schema verwenden.

Die einzige Garantie ist, dass `inputQuota` - [`measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage) nicht negativ sein wird, wenn ausreichend Kontingent vorhanden ist, um den Text zu übersetzen.

## Beispiele

### Überprüfen, ob genügend Kontingent vorhanden ist

Im folgenden Codeausschnitt erstellen wir eine neue `Translator`-Instanz mit [`create()`](/de/docs/Web/API/Translator/create_static) und geben das gesamte Eingabekontingent über `inputQuota` sowie die Eingabekontingentnutzung für die Übersetzung eines bestimmten Textstrings über [`measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage) zurück.

Wir testen dann, ob die individuelle Eingabenutzung für diesen String größer ist als das insgesamt verfügbare Kontingent. Falls ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit der Übersetzung des Strings mittels [`translate()`](/de/docs/Web/API/Translator/translate).

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
