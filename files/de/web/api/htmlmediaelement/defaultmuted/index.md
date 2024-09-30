---
title: "HTMLMediaElement: defaultMuted-Eigenschaft"
short-title: defaultMuted
slug: Web/API/HTMLMediaElement/defaultMuted
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.defaultMuted`**-Eigenschaft entspricht dem HTML-Attribut [`muted`](/de/docs/Web/HTML/Element/video#muted), das angibt, ob die Audioausgabe des Medien-Elements standardmäßig stummgeschaltet sein soll. Diese Eigenschaft hat keine dynamische Wirkung. Um die Audioausgabe stummzuschalten oder zu aktivieren, verwenden Sie die [`muted`](/de/docs/Web/API/HTMLMediaElement/muted)-Eigenschaft.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der `HTMLMediaElement.defaultMuted`-Eigenschaft
- [`HTMLMediaElement.muted`](/de/docs/Web/API/HTMLMediaElement/muted)
- [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume)
