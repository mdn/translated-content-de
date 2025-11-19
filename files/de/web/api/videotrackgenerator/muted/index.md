---
title: "VideoTrackGenerator: muted-Eigenschaft"
short-title: muted
slug: Web/API/VideoTrackGenerator/muted
l10n:
  sourceCommit: 62e6088450ab10db4697d190dd54d09dd9a0791a
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}

Die boolesche Eigenschaft **`muted`** der Schnittstelle [`VideoTrackGenerator`](/de/docs/Web/API/VideoTrackGenerator) kann verwendet werden, um die Erzeugung von Videoframes im Ausgabetrack vorübergehend zu stoppen oder fortzusetzen.

## Wert

Ein boolescher Wert.

## Beispiele

Um die Produktion von Videoframes anzuhalten:

```js
videoTrackGenerator.muted = true;
```

Um die Produktion von Videoframes fortzusetzen:

```js
videoTrackGenerator.muted = false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
