---
title: "MediaStream: id-Eigenschaft"
short-title: id
slug: Web/API/MediaStream/id
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die schreibgeschützte **`id`**-Eigenschaft der {{domxref("MediaStream")}}-Schnittstelle ist ein
String, der 36 Zeichen enthält, die einen eindeutigen Bezeichner (GUID)
für das Objekt darstellen.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("MediaStream")}}, die Schnittstelle, zu der diese Eigenschaft gehört.
