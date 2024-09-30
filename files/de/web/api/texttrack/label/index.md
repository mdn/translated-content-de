---
title: "TextTrack: label-Eigenschaft"
short-title: label
slug: Web/API/TextTrack/label
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die **`label`**-Eigenschaft des [`TextTrack`](/de/docs/Web/API/TextTrack)-Interfaces ist eine schreibgeschützte Eigenschaft, die ein menschenlesbares Label für den Texttrack zurückgibt, falls verfügbar.

## Wert

Ein String, der das `label` enthält, oder ein leerer String.

## Beispiele

Im folgenden Beispiel wird der Wert von `label` in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.label);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
