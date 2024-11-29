---
title: "HTMLTrackElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLTrackElement/src
l10n:
  sourceCommit: 0bf15d029fb052d3b20a2f249d4a6de8e29ea774
---

{{APIRef("HTML DOM")}}

Die **`src`**-Eigenschaft des [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Interfaces spiegelt den Wert des [`src`](/de/docs/Web/HTML/Element/track#src)-Attributs des {{HTMLElement("track")}}-Elements wider, welcher die URL der Textspur-Daten angibt.

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
