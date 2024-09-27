---
title: "MediaStream: id Eigenschaft"
short-title: id
slug: Web/API/MediaStream/id
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die **`id`** schreibgeschützte Eigenschaft der [`MediaStream`](/de/docs/Web/API/MediaStream)-Schnittstelle ist ein String, der 36 Zeichen enthält und eine eindeutige Kennung (GUID) für das Objekt angibt.

## Wert

Ein String.

## Beispiele

```js
const promise = navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true,
});

promise.then((stream) => {
  console.log(stream.id);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaStream`](/de/docs/Web/API/MediaStream), die Schnittstelle, zu der diese Eigenschaft gehört.
