---
title: "Summarizer: expectedContextLanguages Eigenschaft"
short-title: expectedContextLanguages
slug: Web/API/Summarizer/expectedContextLanguages
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`expectedContextLanguages`** schreibgeschützte Eigenschaft der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle gibt die Sprachen zurück, in denen die Kontextstrings geschrieben sein sollten.

## Wert

Ein Array von Zeichenfolgen, die die erwarteten Sprachen der bereitgestellten Kontextstrings spezifizieren (entweder der [`Summarizer.sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) oder ein `context`, der während eines [`summarize()`](/de/docs/Web/API/Summarizer/summarize) oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) Aufrufs angegeben wird).

Die Zeichenfolgen sollten gültige [BCP 47 Sprach-Tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) festgelegt).

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
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
