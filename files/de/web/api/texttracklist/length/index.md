---
title: "TextTrackList: length-Eigenschaft"
short-title: length
slug: Web/API/TextTrackList/length
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **[`TextTrackList`](/de/docs/Web/API/TextTrackList)**
Eigenschaft **`length`** gibt die Anzahl der Einträge in der
`TextTrackList` zurück, von denen jeder ein [`TextTrack`](/de/docs/Web/API/TextTrack) darstellt, das eine Spur im Media-Element repräsentiert.

Ein Wert von 0 gibt an, dass keine Textspuren im Medium vorhanden sind.

## Wert

Eine Zahl, die angibt, wie viele Textspuren in der
`TextTrackList` enthalten sind. Auf jede Spur kann zugegriffen werden, indem die
`TextTrackList` wie ein Array von Objekten vom Typ [`TextTrack`](/de/docs/Web/API/TextTrack) behandelt wird.

## Beispiele

Dieses Codebeispiel ermittelt die Anzahl der Textspuren im ersten Media-Element, das im [DOM](/de/docs/Glossary/DOM) mithilfe von [`querySelector()`](/de/docs/Web/API/Document/querySelector) gefunden wird.

```js
const mediaElem = document.querySelector("video, audio");
let numTextTracks = 0;

if (mediaElem.textTracks) {
  numTextTracks = mediaElem.textTracks.length;
}
```

Beachten Sie, dass dieses Beispiel sicherstellt, dass [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) definiert ist, um zu vermeiden, dass es bei Browsern ohne Unterstützung für [`TextTrack`](/de/docs/Web/API/TextTrack) fehlschlägt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
