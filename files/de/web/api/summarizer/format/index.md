---
title: "Summarizer: format-Eigenschaft"
short-title: format
slug: Web/API/Summarizer/format
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`format`** schreibgeschützte Eigenschaft der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle gibt das Textformat zurück, in dem Zusammenfassungen bereitgestellt werden.

## Wert

Ein enumerierter Wert, der das Format der zurückgegebenen Zusammenfassungen angibt. Mögliche Werte sind:

- `markdown`
  - : Zusammenfassungen enthalten Markdown-Formatierung (konform zur [CommonMark](https://spec.commonmark.org/) Spezifikation).
- `plain-text`
  - : Zusammenfassungen enthalten keine Formatierung.

## Beispiele

```js
const summarizer = await Summarizer.create({
  format: "plain-text",
  // ...
});

// Logs "plain-text"
console.log(summarizer.format);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
