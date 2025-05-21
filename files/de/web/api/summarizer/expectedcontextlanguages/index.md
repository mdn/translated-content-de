---
title: "Summarizer: expectedContextLanguages-Eigenschaft"
short-title: expectedContextLanguages
slug: Web/API/Summarizer/expectedContextLanguages
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die nur-lesbare **`expectedContextLanguages`**-Eigenschaft des [`Summarizer`](/de/docs/Web/API/Summarizer)-Interfaces gibt die Sprachen zurück, in denen die Kontext-Strings geschrieben sein sollten.

## Wert

Ein Array von Strings, das die erwarteten Sprachen der bereitgestellten Kontext-Strings angibt (entweder der [`Summarizer.sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) oder ein `context`, der während eines Aufrufs von [`summarize()`](/de/docs/Web/API/Summarizer/summarize) oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) angegeben wird).

Die Strings sollten gültige [BCP 47 Sprachtags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert) sein.

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
