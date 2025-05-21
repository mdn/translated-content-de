---
title: "Summarizer: outputLanguage-Eigenschaft"
short-title: outputLanguage
slug: Web/API/Summarizer/outputLanguage
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die schreibgeschützte **`outputLanguage`**-Eigenschaft des [`Summarizer`](/de/docs/Web/API/Summarizer)-Interfaces gibt die Sprache zurück, in der die Zusammenfassung generiert werden soll.

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
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
