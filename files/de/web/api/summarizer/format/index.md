---
title: "Summarizer: `format`-Eigenschaft"
short-title: format
slug: Web/API/Summarizer/format
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die **`format`**-Eigenschaft der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle gibt das Textformat zurück, in dem Zusammenfassungen ausgegeben werden.

## Wert

Ein enumerierter Wert, der das Format der zurückgegebenen Zusammenfassungen angibt. Mögliche Werte sind:

- `markdown`
  - : Zusammenfassungen enthalten keine Formatierungen.
- `plain-text`
  - : Zusammenfassungen enthalten Markdown-Formatierung (entsprechend der [CommonMark](https://spec.commonmark.org/)-Spezifikation).

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
