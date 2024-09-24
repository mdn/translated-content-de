---
title: "TextTrackList: length Eigenschaft"
short-title: length
slug: Web/API/TextTrackList/length
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **{{domxref("TextTrackList")}}**-Eigenschaft **`length`** gibt die Anzahl der Einträge in der `TextTrackList` zurück, wobei jeder Eintrag ein {{domxref("TextTrack")}} darstellt, der einen Track im Medien-Element repräsentiert.

Ein Wert von 0 zeigt an, dass keine Texttracks im Medium vorhanden sind.

## Wert

Eine Zahl, die angibt, wie viele Texttracks in der `TextTrackList` enthalten sind. Jeder Track kann angesprochen werden, indem die `TextTrackList` als ein Array von Objekten des Typs {{domxref("TextTrack")}} behandelt wird.

## Beispiele

Dieser Codeausschnitt ermittelt die Anzahl der Texttracks im ersten Medien-Element, das im {{Glossary("DOM")}} mit {{domxref("Document.querySelector", "querySelector()")}} gefunden wird.

```js
const mediaElem = document.querySelector("video, audio");
let numTextTracks = 0;

if (mediaElem.textTracks) {
  numTextTracks = mediaElem.textTracks.length;
}
```

Beachten Sie, dass dieses Beispiel überprüft, ob {{domxref("HTMLMediaElement.textTracks")}} definiert ist, um ein Fehlschlagen in Browsern ohne Unterstützung für {{domxref("TextTrack")}} zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
