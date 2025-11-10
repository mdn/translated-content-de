---
title: "Summarizer: outputLanguage-Eigenschaft"
short-title: outputLanguage
slug: Web/API/Summarizer/outputLanguage
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte **`outputLanguage`**-Eigenschaft der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle gibt die Sprache zurück, in der die Zusammenfassung erstellt werden soll.

## Wert

Ein String, der die Sprache angibt, in der die Zusammenfassung erstellt werden soll.

Der String sollte ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47-Sprachkennzeichen")}} sein.

## Beispiele

```js
const summarizer = await Summarizer.create({
  outputLanguage: "en-US",
  // ...
});

// Logs "en-US"
console.log(summarizer.outputLanguage);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
