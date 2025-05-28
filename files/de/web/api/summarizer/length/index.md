---
title: "Summarizer: `length`-Eigenschaft"
short-title: length
slug: Web/API/Summarizer/length
l10n:
  sourceCommit: 3e4f9ff802c6393edf7c17ff0d9c30d0de79663e
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die **`length`**-Eigenschaft des [`Summarizer`](/de/docs/Web/API/Summarizer)-Interfaces ist eine schreibgeschützte Eigenschaft, die die relative Länge der erzeugten Zusammenfassungen zurückgibt.

## Wert

Ein enumerierter Wert, der die relative Länge der erzeugten Zusammenfassungen angibt, wobei die genaue Art je nach `type`-Wert des `Summarizer` unterschiedlich ist.

Mögliche Werte sind:

- `short`
  - : Eine "kurze" Zusammenfassung
    - Für `type` `tldr` und `teaser` sollte die Zusammenfassung in einen Satz passen.
    - Für `type` `key-points` sollte die Zusammenfassung nicht mehr als drei Aufzählungspunkte umfassen.
    - Für `type` `headline` sollte die Zusammenfassung nicht mehr als 12 Wörter umfassen.
- `medium`
  - : Eine "mittlere" Zusammenfassung
    - Für `type` `tldr` und `teaser` sollte die Zusammenfassung in einen kurzen Absatz passen.
    - Für `type` `key-points` sollte die Zusammenfassung nicht mehr als fünf Aufzählungspunkte umfassen.
    - Für `type` `headline` sollte die Zusammenfassung nicht mehr als 17 Wörter umfassen.
- `long`
  - : Eine "lange" Zusammenfassung
    - Für `type` `tldr` und `teaser` sollte die Zusammenfassung in einen Absatz passen.
    - Für `type` `key-points` sollte die Zusammenfassung nicht mehr als sieben Aufzählungspunkte umfassen.
    - Für `type` `headline` sollte die Zusammenfassung nicht mehr als 22 Wörter umfassen.

## Beispiele

```js
const summarizer = await Summarizer.create({
  length: "medium",
  // ...
});

// Logs "medium"
console.log(summarizer.length);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev.
