---
title: "ImageDecoder: tracks-Eigenschaft"
short-title: tracks
slug: Web/API/ImageDecoder/tracks
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`tracks`** schreibgeschützte Eigenschaft des {{domxref("ImageDecoder")}}-Interfaces gibt eine Liste der Tracks in den kodierten Bilddaten zurück.

## Wert

Ein {{domxref("ImageTrackList")}}.

## Beispiele

Im folgenden Beispiel wird der Wert von `tracks` in die Konsole ausgegeben. Dies wird ein {{domxref("ImageTrackList")}}-Objekt sein.

```js
console.log(imageDecoder.tracks);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
