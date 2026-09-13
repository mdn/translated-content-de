---
title: "Summarizer: type-Eigenschaft"
short-title: type
slug: Web/API/Summarizer/type
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte **`type`**-Eigenschaft des [`Summarizer`](/de/docs/Web/API/Summarizer)-Interfaces gibt den Typ der Zusammenfassung zurück, die vom `Summarizer` generiert wird.

## Wert

Ein aufgezählter Wert, der die Form angibt, in der die Zusammenfassung erstellt wird; mögliche Werte sind:

- `headline`
  - : Eine einzelne Satz-Artikelüberschrift, die den Hauptpunkt des Eingangstextes erfasst.
- `key-points`
  - : Eine Liste mit Aufzählungspunkten, die die wichtigsten Punkte des Eingangstextes angibt.
- `teaser`
  - : Ein "Teaser"-Absatz, der die interessantesten oder faszinierendsten Punkte des Eingangstextes zusammenfasst, um den Leser dazu zu verleiten, mehr zu lesen.
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
