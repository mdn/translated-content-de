---
title: "MediaSource: removeSourceBuffer() Methode"
short-title: removeSourceBuffer()
slug: Web/API/MediaSource/removeSourceBuffer
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`removeSourceBuffer()`** Methode der [`MediaSource`](/de/docs/Web/API/MediaSource) Schnittstelle entfernt den angegebenen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus der [`SourceBufferList`](/de/docs/Web/API/SourceBufferList), die mit diesem `MediaSource`-Objekt verknüpft ist.

## Syntax

```js-nolint
removeSourceBuffer(sourceBuffer)
```

### Parameter

- `sourceBuffer`
  - : Das [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Objekt, das entfernt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte sourceBuffer nicht in [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) vorhanden ist.

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

- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
