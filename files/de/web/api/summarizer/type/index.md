---
title: "Summarizer: type-Eigenschaft"
short-title: type
slug: Web/API/Summarizer/type
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte **`type`**-Eigenschaft der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle gibt den Typ der Zusammenfassung zurück, die vom `Summarizer` erzeugt wird.

## Wert

Ein enumerierter Wert, der die Form angibt, in der die Zusammenfassung erzeugt wird; mögliche Werte sind:

- `headline`
  - : Eine einzeln formulierte Überschrift eines Artikels, die den Hauptgedanken des eingegebenen Textes erfasst.
- `key-points`
  - : Eine Aufzählungsliste, die die wichtigsten im eingegebenen Text präsentierten Punkte angibt.
- `teaser`
  - : Ein "Teaser"-Absatz, der die interessantesten oder faszinierendsten Punkte des eingegebenen Textes zusammenfasst, um den Leser zu animieren, mehr zu lesen.
- `tldr`
  - : Eine kurze, prägnante Übersicht, konzipiert als Zusammenfassung für einen beschäftigten Leser.

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
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
