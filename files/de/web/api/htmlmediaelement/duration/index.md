---
title: "HTMLMediaElement: duration-Eigenschaft"
short-title: duration
slug: Web/API/HTMLMediaElement/duration
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die _schreibgeschützte_ {{domxref("HTMLMediaElement")}} Eigenschaft **`duration`** gibt die Länge des Medieninhalts des Elements in Sekunden an.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der die Dauer des Medieninhalts in Sekunden angibt. Wenn keine Mediendaten verfügbar sind, wird der Wert `NaN` zurückgegeben. Hat das Medienelement keine bekannte Dauer – wie z.B. bei Live-Medienstreams – so ist der Wert von `duration` `+Infinity`.

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
- {{domxref("HTMLMediaElement.currentTime")}}: Die aktuelle Wiedergabeposition des Medieninhalts
- Die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente
