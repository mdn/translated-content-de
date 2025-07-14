---
title: "Summarizer: outputLanguage-Eigenschaft"
short-title: outputLanguage
slug: Web/API/Summarizer/outputLanguage
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`outputLanguage`** der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle gibt die Sprache zurück, in der die Zusammenfassung generiert werden soll.

## Wert

Ein String, der die Sprache angibt, in der die Zusammenfassung generiert werden soll.

Der String sollte ein gültiges [BCP 47-Sprachtag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert).

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
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
