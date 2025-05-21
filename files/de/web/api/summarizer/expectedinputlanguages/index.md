---
title: "Summarizer: expectedInputLanguages Eigenschaft"
short-title: expectedInputLanguages
slug: Web/API/Summarizer/expectedInputLanguages
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`expectedInputLanguages`** des [`Summarizer`](/de/docs/Web/API/Summarizer)-Interfaces gibt die Sprachen zurück, die der `Summarizer` unterstützen sollte.

## Wert

Ein Array von Zeichenfolgen, die die Sprachen angeben, die der `Summarizer` unterstützen sollte.

Die Zeichenfolgen sollten gültige [BCP 47 Sprach-Tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert).

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

- [Die Summarizer API verwenden](/de/docs/Web/API/Summarizer_API/Using)
- [Web-AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
