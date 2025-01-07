---
title: "HTMLTrackElement: track-Eigenschaft"
short-title: track
slug: Web/API/HTMLTrackElement/track
l10n:
  sourceCommit: 3dd7df0af3b0ada1a7c5784cc2bc5448adcda8af
---

{{APIRef("HTML DOM")}}

Die **`track`**-Eigenschaft der [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Schnittstelle ist schreibgeschützt und gibt ein [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt zurück, das der Textspur des {{HTMLElement("track")}}-Elements entspricht.

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
