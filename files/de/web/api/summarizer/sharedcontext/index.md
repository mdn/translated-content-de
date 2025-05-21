---
title: "Summarizer: sharedContext-Eigenschaft"
short-title: sharedContext
slug: Web/API/Summarizer/sharedContext
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die schreibgeschützte **`sharedContext`**-Eigenschaft der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle gibt einen String zurück, der den Kontext beschreibt, in dem die zu zusammenfassenden Textstücke verwendet werden. Dies hilft dem `Summarizer`, geeignetere Zusammenfassungen zu erstellen.

## Wert

Ein String.

## Beispiele

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  // ...
});

// Logs "A general summary to help a user ..."
console.log(summarizer.sharedContext);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
