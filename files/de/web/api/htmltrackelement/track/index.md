---
title: "HTMLTrackElement: track Eigenschaft"
short-title: track
slug: Web/API/HTMLTrackElement/track
l10n:
  sourceCommit: 0bf15d029fb052d3b20a2f249d4a6de8e29ea774
---

{{APIRef("HTML DOM")}}

Die readonly **`track`**-Eigenschaft der [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Schnittstelle gibt ein [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt zurück, das dem Texttrack des {{HTMLElement("track")}}-Elements entspricht.

## Wert

Ein [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt.

## Beispiel

```js
const trackElement = document.getElementById("exampleTrack");
console.dir(trackElement.track);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)
- [`textTrack`](/de/docs/Web/API/TextTrack)
- {{HTMLElement("track")}}
