---
title: "HTMLMediaElement: defaultMuted-Eigenschaft"
short-title: defaultMuted
slug: Web/API/HTMLMediaElement/defaultMuted
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.defaultMuted`**-Eigenschaft spiegelt das [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted) HTML-Attribut wider, welches angibt, ob die Audioausgabe des Media-Elements standardmäßig stummgeschaltet werden soll. Diese Eigenschaft hat keine dynamische Wirkung. Um die Audioausgabe stumm zu schalten oder die Stummschaltung aufzuheben, verwenden Sie die [`muted`](/de/docs/Web/API/HTMLMediaElement/muted)-Eigenschaft.

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
