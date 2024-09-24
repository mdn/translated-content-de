---
title: "MediaSource: removeSourceBuffer()-Methode"
short-title: removeSourceBuffer()
slug: Web/API/MediaSource/removeSourceBuffer
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Source Extensions")}}

Die **`removeSourceBuffer()`**-Methode der {{domxref("MediaSource")}}-Schnittstelle entfernt den angegebenen {{domxref("SourceBuffer")}} aus der {{domxref("SourceBufferList")}}, die mit diesem `MediaSource`-Objekt verknüpft ist.

## Syntax

```js-nolint
removeSourceBuffer(sourceBuffer)
```

### Parameter

- `sourceBuffer`
  - : Das {{domxref("SourceBuffer")}}-Objekt, das entfernt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene sourceBuffer nicht in {{domxref("MediaSource.sourceBuffers")}} existiert.

## Beispiele

```js
for (let i = 0; i < 10; i++) {
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
}

mediaSource.removeSourceBuffer(mediaSource.sourceBuffers[0]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
