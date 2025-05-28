---
title: "Summarizer: inputQuota-Eigenschaft"
short-title: inputQuota
slug: Web/API/Summarizer/inputQuota
l10n:
  sourceCommit: 3e4f9ff802c6393edf7c17ff0d9c30d0de79663e
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die **`inputQuota`**-Schreibgeschützte Eigenschaft der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle gibt das verfügbare Eingabe-Kontingent des Browsers für die Erstellung von Zusammenfassungen zurück.

## Wert

Eine Zahl, die das verfügbare Eingabe-Kontingent angibt. Diese Zahl hängt von der Implementierung ab. Zum Beispiel könnte es {{jsxref("infinity")}} sein, wenn es keine anderen Einschränkungen außer dem Speicher des Nutzers und der maximalen Länge von JavaScript-Strings gibt, oder es könnte eine Anzahl von Tokens im Fall von KI-Modellen sein, die ein Token-/Kreditsystem verwenden.

## Beispiele

### Überprüfen, ob genügend Kontingent vorhanden ist

Im untenstehenden Beispiel erstellen wir eine neue `Summarizer`-Instanz mit Hilfe von [`create()`](/de/docs/Web/API/Summarizer/create_static), dann geben wir das gesamte Eingabe-Kontingent über `inputQuota` und die Eingabe-Kontingentsnutzung für die Zusammenfassung eines bestimmten Textstrings über [`measureInputUsage()`](/de/docs/Web/API/Summarizer/measureInputUsage) zurück.

Wir testen dann, ob die individuelle Eingabenutzung für diesen String größer ist als das insgesamt verfügbare Kontingent. Falls ja, werfen wir einen entsprechenden Fehler; falls nein, beginnen wir mit der Zusammenfassung des Strings mittels [`summarize()`](/de/docs/Web/API/Summarizer/summarize).

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
