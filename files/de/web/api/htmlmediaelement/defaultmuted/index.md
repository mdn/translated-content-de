---
title: "HTMLMediaElement: Eigenschaft defaultMuted"
short-title: defaultMuted
slug: Web/API/HTMLMediaElement/defaultMuted
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.defaultMuted`**-Eigenschaft spiegelt das [`muted`](/de/docs/Web/HTML/Element/video#muted) HTML-Attribut wider, das angibt, ob die Audioausgabe des Medienelements standardmäßig stummgeschaltet sein soll. Diese Eigenschaft hat keine dynamische Wirkung. Um die Audioausgabe stummzuschalten und wieder einzuschalten, verwenden Sie die [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) Eigenschaft.

## Wert

Ein boolescher Wert. Ein Wert von `true` bedeutet, dass die Audioausgabe standardmäßig stummgeschaltet wird.

## Beispiele

```js
const videoEle = document.createElement("video");
videoEle.defaultMuted = true;
console.log(videoEle.outerHTML); // <video muted=""></video>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die zur Definition der `HTMLMediaElement.defaultMuted`-Eigenschaft verwendet wird
- [`HTMLMediaElement.muted`](/de/docs/Web/API/HTMLMediaElement/muted)
- [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume)
