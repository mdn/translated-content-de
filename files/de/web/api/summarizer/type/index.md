---
title: "Summarizer: type-Eigenschaft"
short-title: type
slug: Web/API/Summarizer/type
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die schreibgeschützte **`type`**-Eigenschaft des [`Summarizer`](/de/docs/Web/API/Summarizer)-Interfaces gibt den Typ der Zusammenfassung zurück, die vom `Summarizer` generiert wird.

## Wert

Ein enumerierter Wert, der angibt, in welcher Form die Zusammenfassung generiert wird; mögliche Werte sind:

- `headline`
  - : Eine einzelne Satzüberschrift, die den Hauptpunkt des Eingabetextes erfasst.
- `key-points`
  - : Eine Liste mit Aufzählungszeichen, die die wichtigsten im Eingabetext präsentierten Punkte angibt.
- `teaser`
  - : Ein "Teaser"-Absatz, der die interessantesten oder fesselndsten Punkte des Eingabetextes zusammenfasst und den Leser dazu motiviert, mehr zu lesen.
- `tl;dr`
  - : Eine kurze, prägnante Übersicht, die als Zusammenfassung für vielbeschäftigte Leser gedacht ist.

## Beispiele

```js
const summarizer = await Summarizer.create({
  type: "tl;dr",
  // ...
});

// Logs "tl;dr"
console.log(summarizer.type);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI-Demonstrationen](https://chrome.dev/web-ai-demos/) auf chrome.dev
