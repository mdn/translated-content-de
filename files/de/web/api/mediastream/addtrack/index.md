---
title: "MediaStream: addTrack()-Methode"
short-title: addTrack()
slug: Web/API/MediaStream/addTrack
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("Media Capture and Streams")}}

Die **`addTrack()`**-Methode der [`MediaStream`](/de/docs/Web/API/MediaStream)-Schnittstelle fügt dem Stream ein neues Track hinzu. Das Track wird als Parameter vom Typ [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angegeben.

> [!NOTE]
> Wenn das angegebene Track bereits im Track-Set des Streams enthalten ist, hat diese Methode keine Wirkung.

## Syntax

```js-nolint
addTrack(track)
```

### Parameter

- `track`
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), das dem Stream hinzugefügt werden soll.

### Rückgabewert

None ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaStream`](/de/docs/Web/API/MediaStream), die Schnittstelle, zu der es gehört.
