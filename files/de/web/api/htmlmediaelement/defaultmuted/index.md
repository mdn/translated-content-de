---
title: "HTMLMediaElement: Eigenschaft defaultMuted"
short-title: defaultMuted
slug: Web/API/HTMLMediaElement/defaultMuted
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.defaultMuted`**-Eigenschaft spiegelt das [`muted`](/de/docs/Web/HTML/Element/video#muted)-HTML-Attribut wider, das angibt, ob die Audioausgabe des Media-Elements standardmäßig stummgeschaltet sein soll. Diese Eigenschaft hat keine dynamische Wirkung. Um die Audioausgabe stumm zu schalten und wieder einzuschalten, verwenden Sie die {{domxref("HTMLMediaElement.muted", "muted")}}-Eigenschaft.

## Wert

Ein boolescher Wert. Ein Wert von `true` bedeutet, dass die Audioausgabe standardmäßig stummgeschaltet ist.

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

- {{domxref("HTMLMediaElement")}}: Schnittstelle, die verwendet wird, um die `HTMLMediaElement.defaultMuted`-Eigenschaft zu definieren
- {{domxref("HTMLMediaElement.muted")}}
- {{domxref("HTMLMediaElement.volume")}}
