---
title: "HTMLMediaElement: duration-Eigenschaft"
short-title: duration
slug: Web/API/HTMLMediaElement/duration
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die _schreibgeschützte_ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
Eigenschaft **`duration`** zeigt die Länge des Medienelements
in Sekunden an.

## Wert

Ein doppelt-genauer Gleitkommawert, der die Dauer des Mediums in Sekunden angibt. Wenn keine Mediendaten verfügbar sind, wird der Wert `NaN` zurückgegeben. Wenn das Medium des Elements keine bekannte Dauer hat—wie bei Live-Streams—ist der Wert von `duration` `+Infinity`.

## Beispiele

```js
const obj = document.createElement("video");
console.log(obj.duration); // NaN
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Medien-Technologien](/de/docs/Web/Media)
- [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime): Die aktuelle Wiedergabeposition des Mediums
- Die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente
