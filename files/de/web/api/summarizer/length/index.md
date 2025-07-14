---
title: "Summarizer: length-Eigenschaft"
short-title: length
slug: Web/API/Summarizer/length
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`length`** schreibgeschützte Eigenschaft der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle gibt die relative Länge der generierten Zusammenfassungen zurück.

## Wert

Ein enumerierter Wert, der die relative Länge der generierten Zusammenfassungen spezifiziert, wobei die genaue Natur vom `type`-Wert des `Summarizer` [`type`](/de/docs/Web/API/Summarizer/type) abhängt.

Mögliche Werte sind:

- `short`
  - : Eine "kurze" Zusammenfassung
    - Für `type` `tldr` und `teaser` sollte die Zusammenfassung in einen Satz passen.
    - Für `type` `key-points` sollte die Zusammenfassung nicht mehr als drei Aufzählungspunkte haben.
    - Für `type` `headline` sollte die Zusammenfassung nicht mehr als 12 Wörter umfassen.
- `medium`
  - : Eine "mittlere" Zusammenfassung
    - Für `type` `tldr` und `teaser` sollte die Zusammenfassung in einen kurzen Absatz passen.
    - Für `type` `key-points` sollte die Zusammenfassung nicht mehr als fünf Aufzählungspunkte haben.
    - Für `type` `headline` sollte die Zusammenfassung nicht mehr als 17 Wörter umfassen.
- `long`
  - : Eine "lange" Zusammenfassung
    - Für `type` `tldr` und `teaser` sollte die Zusammenfassung in einen Absatz passen.
    - Für `type` `key-points` sollte die Zusammenfassung nicht mehr als sieben Aufzählungspunkte haben.
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
- [Web-AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev.
