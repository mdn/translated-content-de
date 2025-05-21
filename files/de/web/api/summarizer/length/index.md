---
title: "Summarizer: length Eigenschaft"
short-title: length
slug: Web/API/Summarizer/length
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die **`length`** schreibgeschützte Eigenschaft des [`Summarizer`](/de/docs/Web/API/Summarizer) Interfaces gibt die relative Länge der generierten Zusammenfassungen zurück.

## Wert

Ein enumerierter Wert, der die relative Länge der generierten Zusammenfassungen angibt, deren genaue Natur vom `Summarizer` [`type`](/de/docs/Web/API/Summarizer/type) Wert abhängt.

Mögliche Werte sind:

- `short`
  - : Eine "kurze" Zusammenfassung
    - Bei `type` `tl;dr` und `teaser` sollte die Zusammenfassung in einen Satz passen.
    - Bei `type` `key-points` sollte die Zusammenfassung aus nicht mehr als drei Aufzählungspunkten bestehen.
    - Bei `type` `headline` sollte die Zusammenfassung aus nicht mehr als 12 Wörtern bestehen.
- `medium`
  - : Eine "mittlere" Zusammenfassung
    - Bei `type` `tl;dr` und `teaser` sollte die Zusammenfassung in einen kurzen Absatz passen.
    - Bei `type` `key-points` sollte die Zusammenfassung aus nicht mehr als fünf Aufzählungspunkten bestehen.
    - Bei `type` `headline` sollte die Zusammenfassung aus nicht mehr als 17 Wörtern bestehen.
- `long`
  - : Eine "lange" Zusammenfassung
    - Bei `type` `tl;dr` und `teaser` sollte die Zusammenfassung in einen Absatz passen.
    - Bei `type` `key-points` sollte die Zusammenfassung aus nicht mehr als sieben Aufzählungspunkten bestehen.
    - Bei `type` `headline` sollte die Zusammenfassung aus nicht mehr als 22 Wörtern bestehen.

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
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev.
