---
title: "Summarizer: type-Eigenschaft"
short-title: type
slug: Web/API/Summarizer/type
l10n:
  sourceCommit: d80455b193a5e5f1789e4c941aaaecaae3034d5b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die schreibgeschützte **`type`**-Eigenschaft der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle gibt den Typ der Zusammenfassung zurück, die vom `Summarizer` erstellt wird.

## Wert

Ein enumerierter Wert, der die Form der zu erstellenden Zusammenfassung angibt; mögliche Werte sind:

- `headline`
  - : Eine einzelne Satzüberschrift des Artikels, die den Hauptpunkt des eingegebenen Textes erfasst.
- `key-points`
  - : Eine Aufzählungsliste, die die wichtigsten im eingegebenen Text präsentierten Punkte angibt.
- `teaser`
  - : Ein "Teaser"-Absatz, der die interessantesten oder spannendsten Punkte des eingegebenen Textes zusammenfasst und darauf abzielt, den Leser dazu zu bewegen, mehr zu lesen.
- `tldr`
  - : Eine kurze, prägnante Übersicht, die als Zusammenfassung für einen vielbeschäftigten Leser gedacht ist.

## Beispiele

```js
const summarizer = await Summarizer.create({
  type: "tldr",
  // ...
});

// Logs "tldr"
console.log(summarizer.type);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web-AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
