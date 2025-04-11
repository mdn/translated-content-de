---
title: "HTMLTrackElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLTrackElement/src
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`src`**-Eigenschaft des [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Interfaces spiegelt den Wert des [`src`](/de/docs/Web/HTML/Reference/Elements/track#src)-Attributs des {{HTMLElement("track")}}-Elements wider, welches die URL der Textspur-Daten angibt.

## Wert

Ein String, der die URL der Textspur-Daten enthält.

## Beispiel

```js
const trackElement = document.getElementById("exampleTrack");
console.log(`Track's URL: ${trackElement.src}`);
trackElement.src = "newTrack.vtt";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)
- {{HTMLElement("track")}}
