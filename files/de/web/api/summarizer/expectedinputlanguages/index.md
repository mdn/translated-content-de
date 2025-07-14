---
title: "Summarizer: expectedInputLanguages-Eigenschaft"
short-title: expectedInputLanguages
slug: Web/API/Summarizer/expectedInputLanguages
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`expectedInputLanguages`**-Schreibgeschützte Eigenschaft des [`Summarizer`](/de/docs/Web/API/Summarizer)-Interfaces gibt die Sprachen zurück, die der `Summarizer` unterstützen sollte.

## Wert

Ein Array von Zeichenfolgen, das die Sprachen angibt, die der `Summarizer` unterstützen sollte.

Die Zeichenfolgen sollten gültige [BCP 47 Sprach-Tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) festgelegt).

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

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
