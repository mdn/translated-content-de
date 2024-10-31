---
title: "ImageTrackList: ready-Eigenschaft"
short-title: ready
slug: Web/API/ImageTrackList/ready
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`ready`**-Eigenschaft der [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die `ImageTrackList` mit [`tracks`](/de/docs/Web/API/ImageTrack) gefüllt ist.

## Wert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird.

## Beispiele

Das folgende Beispiel gibt den Wert von `ready` in der Konsole aus; dies wird `undefined` sein, sobald das Versprechen aufgelöst ist.

```js
let tracks = imageDecoder.tracks;
let ready = await tracks.ready;
console.log(ready);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
