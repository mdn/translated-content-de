---
title: "Summarizer: format-Eigenschaft"
short-title: format
slug: Web/API/Summarizer/format
l10n:
  sourceCommit: 406448379235e5d5e60e2527ff50e98039370015
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die schreibgeschützte **`format`**-Eigenschaft des [`Summarizer`](/de/docs/Web/API/Summarizer)-Interfaces gibt das Textformat zurück, in dem Zusammenfassungen bereitgestellt werden.

## Wert

Ein enumerierter Wert, der das Format der zurückgegebenen Zusammenfassungen angibt. Mögliche Werte sind:

- `markdown`
  - : Zusammenfassungen enthalten Markdown-Formatierungen (entsprechend der [CommonMark](https://spec.commonmark.org/)-Spezifikation).
- `plain-text`
  - : Zusammenfassungen enthalten keine Formatierungen.

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
