---
title: "MediaSource: Methode removeSourceBuffer()"
short-title: removeSourceBuffer()
slug: Web/API/MediaSource/removeSourceBuffer
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`removeSourceBuffer()`**-Methode des [`MediaSource`](/de/docs/Web/API/MediaSource)-Interfaces entfernt den angegebenen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus der [`SourceBufferList`](/de/docs/Web/API/SourceBufferList), die mit diesem `MediaSource`-Objekt verbunden ist.

## Syntax

```js-nolint
removeSourceBuffer(sourceBuffer)
```

### Parameter

- `sourceBuffer`
  - : Das zu entfernende [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene sourceBuffer nicht in [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) existiert.

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
