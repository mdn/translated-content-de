---
title: "MediaStream: MediaStream() Konstruktor"
short-title: MediaStream()
slug: Web/API/MediaStream/MediaStream
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

Der **`MediaStream()`** Konstruktor gibt ein neu erstelltes [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, das als eine Sammlung von Medientracks dient, wobei jeder Track durch ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekt repräsentiert wird.

Wenn Parameter angegeben werden, werden die spezifizierten Tracks dem neuen Stream hinzugefügt. Andernfalls hat der Stream keine Tracks.

## Syntax

```js-nolint
new MediaStream()
new MediaStream(stream)
new MediaStream(tracks)
```

### Parameter

- `stream` {{optional_inline}}
  - : Ein anderes [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt, dessen Tracks automatisch zum neu erstellten Stream hinzugefügt werden. Die Tracks werden nicht aus dem ursprünglichen Stream entfernt, sodass sie von beiden Streams gemeinsam genutzt werden.
- `tracks` {{optional_inline}}
  - : Ein {{jsxref("Array")}} von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekten, eines für jeden Track, der dem Stream hinzugefügt werden soll.

### Rückgabewert

Ein neu erstelltes [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt, entweder leer oder mit den bereitgestellten Tracks, falls vorhanden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaStream`](/de/docs/Web/API/MediaStream)
