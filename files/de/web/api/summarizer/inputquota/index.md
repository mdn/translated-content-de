---
title: "Summarizer: inputQuota-Eigenschaft"
short-title: inputQuota
slug: Web/API/Summarizer/inputQuota
l10n:
  sourceCommit: 690498c3dbaebcf8b9a21220fbb23d192a30a225
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte **`inputQuota`**-Eigenschaft des [`Summarizer`](/de/docs/Web/API/Summarizer)-Interfaces gibt das verfügbare Input-Limit für den Browser zum Generieren von Zusammenfassungen zurück.

## Wert

Eine Zahl, die das verfügbare Input-Limit angibt. Diese Zahl ist von der Implementierung abhängig. Beispielsweise könnte sie {{jsxref("Infinity")}} sein, wenn es keine anderen Beschränkungen als den Speicher des Benutzers und die maximale Länge von JavaScript-Strings gibt, oder es könnte sich um eine Anzahl von Tokens handeln im Fall von KI-Modellen, die ein Tokens-/Guthabenschema verwenden.

## Beispiele

### Überprüfen, ob genügend Quota zur Verfügung steht

Im folgenden Abschnitt erstellen wir eine neue `Summarizer`-Instanz mithilfe von [`create()`](/de/docs/Web/API/Summarizer/create_static), dann geben wir das gesamte Input-Limit über `inputQuota` und die Input-Limit-Nutzung für das Zusammenfassen eines bestimmten Textstrings über [`measureInputUsage()`](/de/docs/Web/API/Summarizer/measureInputUsage) zurück.

Wir überprüfen dann, ob die individuelle Input-Nutzung für diesen String größer ist als das insgesamt verfügbare Limit. Falls ja, werfen wir einen entsprechenden Fehler; falls nein, beginnen wir mit dem Zusammenfassen des Strings mithilfe von [`summarize()`](/de/docs/Web/API/Summarizer/summarize).

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

- [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
