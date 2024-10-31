---
title: "ImageDecoder: tracks-Eigenschaft"
short-title: tracks
slug: Web/API/ImageDecoder/tracks
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`tracks`** schreibgeschützte Eigenschaft des [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Interfaces gibt eine Liste der Spuren in den codierten Bilddaten zurück.

## Wert

Eine [`ImageTrackList`](/de/docs/Web/API/ImageTrackList).

## Beispiele

Das folgende Beispiel gibt den Wert von `tracks` in der Konsole aus. Dies wird ein [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)-Objekt sein.

```js
console.log(imageDecoder.tracks);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
