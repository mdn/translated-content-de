---
title: "TextTrackList: length Eigenschaft"
short-title: length
slug: Web/API/TextTrackList/length
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **[`TextTrackList`](/de/docs/Web/API/TextTrackList)**
Eigenschaft **`length`** gibt die Anzahl der Einträge in der
`TextTrackList` zurück, von denen jeder ein [`TextTrack`](/de/docs/Web/API/TextTrack) darstellt, das eine Spur im Medien-Element repräsentiert.

Ein Wert von 0 zeigt an, dass keine Textspuren im Medium vorhanden sind.

## Wert

Eine Zahl, die angibt, wie viele Textspuren in der
`TextTrackList` enthalten sind. Jede Spur kann durch Behandeln der
`TextTrackList` als ein Array von Objekten des Typs [`TextTrack`](/de/docs/Web/API/TextTrack) zugegriffen werden.

## Beispiele

Dieses Beispiel ermittelt die Anzahl der Textspuren im ersten Medien-Element, das im
{{Glossary("DOM", "DOM")}} durch [`querySelector()`](/de/docs/Web/API/Document/querySelector) gefunden wird.

```js
const mediaElem = document.querySelector("video, audio");
let numTextTracks = 0;

if (mediaElem.textTracks) {
  numTextTracks = mediaElem.textTracks.length;
}
```

Beachten Sie, dass dieses Beispiel prüft, ob [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) definiert ist, um zu vermeiden, dass es in Browsern ohne Unterstützung für [`TextTrack`](/de/docs/Web/API/TextTrack) fehlschlägt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
