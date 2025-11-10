---
title: "Summarizer: expectedInputLanguages-Eigenschaft"
short-title: expectedInputLanguages
slug: Web/API/Summarizer/expectedInputLanguages
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`expectedInputLanguages`** der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle gibt die Sprachen zurück, die der `Summarizer` unterstützen sollte.

## Wert

Ein Array von Zeichenfolgen, das die Sprachen angibt, die der `Summarizer` unterstützen sollte.

Die Zeichenfolgen sollten gültige {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} sein.

## Beispiele

```js
const summarizer = await Summarizer.create({
  expectedInputLanguages: ["en-US", "fr"],
  // ...
});

// Logs "en-US"
console.log(summarizer.expectedInputLanguages[0]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
