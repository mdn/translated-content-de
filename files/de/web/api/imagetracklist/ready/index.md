---
title: "ImageTrackList: ready-Eigenschaft"
short-title: ready
slug: Web/API/ImageTrackList/ready
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`ready`**-Eigenschaft des [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die `ImageTrackList` mit [`tracks`](/de/docs/Web/API/ImageTrack) gefüllt ist.

## Wert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird.

## Beispiele

Das folgende Beispiel gibt den Wert von `ready` in der Konsole aus. Dieser Wert wird `undefined` sein, sobald das Promise aufgelöst wird.

```js
let tracks = imageDecoder.tracks;
let ready = await tracks.ready;
console.log(ready);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
