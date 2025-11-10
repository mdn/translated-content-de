---
title: "Summarizer: inputQuota-Eigenschaft"
short-title: inputQuota
slug: Web/API/Summarizer/inputQuota
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`inputQuota`**-Schreibgeschützte Eigenschaft der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle gibt das verfügbare Input-Kontingent für den Browser zum Generieren von Zusammenfassungen zurück.

## Wert

Eine Zahl, die das verfügbare Input-Kontingent spezifiziert. Diese Zahl ist implementierungsabhängig. Zum Beispiel könnte es {{jsxref("infinity")}} sein, wenn es keine Begrenzungen über den Speicher des Benutzers und die maximale Länge von JavaScript-Strings hinaus gibt, oder es könnte eine Anzahl von Token sein im Fall von KI-Modellen, die ein Token/Credits-Schema verwenden.

## Beispiele

### Überprüfen Sie, ob Sie ausreichendes Kontingent haben

Im folgenden Code-Snippet erstellen wir eine neue `Summarizer`-Instanz mit [`create()`](/de/docs/Web/API/Summarizer/create_static), dann geben wir das gesamte Input-Kontingent über `inputQuota` und die Input-Kontingent-Nutzung für die Zusammenfassung eines bestimmten Textstrings über [`measureInputUsage()`](/de/docs/Web/API/Summarizer/measureInputUsage) zurück.

Wir testen dann, ob die individuelle Input-Nutzung für diesen String größer ist als das insgesamt verfügbare Kontingent. Falls ja, werfen wir einen angemessenen Fehler; falls nein, beginnen wir mit der Zusammenfassung des Strings mittels [`summarize()`](/de/docs/Web/API/Summarizer/summarize).

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tldr",
  length: "short",
});

const totalInputQuota = summarizer.inputQuota;
const inputUsage = await summarizer.measureInputUsage(myTextString);

if (inputUsage > totalInputQuota) {
  throw new Error("Boo, insufficient quota to generate a summary.");
} else {
  console.log("Yay, quota available to generate a summary.");
  const summary = await summarizer.summarize(myTextString);
  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
