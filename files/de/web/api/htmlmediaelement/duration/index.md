---
title: "HTMLMediaElement: duration-Eigenschaft"
short-title: duration
slug: Web/API/HTMLMediaElement/duration
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}

Die _schreibgeschützte_ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Eigenschaft **`duration`** gibt die Länge des Medienelements in Sekunden an.

## Wert

Ein Gleitkommawert doppelter Genauigkeit, der die Dauer des Mediums in Sekunden angibt. Wenn keine Mediendaten verfügbar sind, wird der Wert `NaN` zurückgegeben. Wenn das Medium des Elements keine bekannte Dauer hat — wie bei Live-Medienstreams — ist der Wert von `duration` `Infinity`.

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

- [Web-Medientechnologien](/de/docs/Web/Media)
- [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime): Die aktuelle Wiedergabeposition des Mediums
- Die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente
