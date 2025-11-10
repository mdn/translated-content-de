---
title: "Summarizer: expectedContextLanguages-Eigenschaft"
short-title: expectedContextLanguages
slug: Web/API/Summarizer/expectedContextLanguages
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`expectedContextLanguages`** des [`Summarizer`](/de/docs/Web/API/Summarizer)-Interfaces gibt die Sprachen zurück, in denen die Kontextstrings verfasst sein sollten.

## Wert

Ein Array von Zeichenketten, die die erwarteten Sprachen der bereitgestellten Kontextstrings angeben (entweder der [`Summarizer.sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) oder ein `context`, das während eines Aufrufs von [`summarize()`](/de/docs/Web/API/Summarizer/summarize) oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) angegeben wird).

Die Zeichenketten sollten gültige {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tags")}} sein.

## Beispiele

```js
const summarizer = await Summarizer.create({
  expectedContextLanguages: ["en-US", "fr"],
  // ...
});

// Logs "en-US"
console.log(summarizer.expectedContextLanguages[0]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
