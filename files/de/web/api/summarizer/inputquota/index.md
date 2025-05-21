---
title: "Summarizer: inputQuota-Eigenschaft"
short-title: inputQuota
slug: Web/API/Summarizer/inputQuota
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die schreibgeschützte **`inputQuota`**-Eigenschaft der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle gibt das verfügbare Eingabe-Kontingent zurück, das dem Browser für das Erstellen von Zusammenfassungen zur Verfügung steht.

## Wert

Eine Zahl, die das verfügbare Eingabe-Kontingent angibt. Diese Zahl ist abhängig von der Implementierung. Zum Beispiel könnte es {{jsxref("infinity")}} sein, wenn es keine anderen Grenzen außer dem Speicher des Benutzers und der maximalen Länge von JavaScript-Strings gibt, oder es könnte eine Anzahl von Tokens sein im Fall von KI-Modellen, die ein Token-/Credits-Schema verwenden.

## Beispiele

### Überprüfen, ob ausreichend Kontingent vorhanden ist

Im folgenden Code-Snippet erstellen wir eine neue `Summarizer`-Instanz mit [`create()`](/de/docs/Web/API/Summarizer/create_static), dann geben wir das gesamte Eingabe-Kontingent über `inputQuota` sowie die Eingabe-Kontingentnutzung für die Zusammenfassung eines bestimmten Textstrings mit [`measureInputUsage()`](/de/docs/Web/API/Summarizer/measureInputUsage) zurück.

Anschließend prüfen wir, ob die individuelle Eingabenutzung für diesen String größer ist als das insgesamt verfügbare Kontingent. Falls ja, werfen wir einen entsprechenden Fehler; falls nicht, beginnen wir mit der Zusammenfassung des Strings mit [`summarize()`](/de/docs/Web/API/Summarizer/summarize).

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
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
- [Web AI demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
