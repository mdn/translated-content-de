---
title: "SourceBuffer: remove() Methode"
short-title: remove()
slug: Web/API/SourceBuffer/remove
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`remove()`**-Methode des [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces entfernt Mediensegmente innerhalb eines bestimmten Zeitbereichs aus dem `SourceBuffer`. Diese Methode kann nur aufgerufen werden, wenn [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) gleich `false` ist. Ist `SourceBuffer.updating` nicht gleich `false`, rufen Sie [`SourceBuffer.abort()`](/de/docs/Web/API/SourceBuffer/abort) auf.

## Syntax

```js-nolint
remove(start, end)
```

### Parameter

- `start`
  - : Ein Doppelwert, der den Beginn des Zeitbereichs in Sekunden darstellt.
- `end`
  - : Ein Doppelwert, der das Ende des Zeitbereichs in Sekunden darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder die Eigenschaft [`MediaSource.duration`](/de/docs/Web/API/MediaSource/duration) gleich `NaN` ist, der `start`-Parameter negativ oder größer als [`MediaSource.duration`](/de/docs/Web/API/MediaSource/duration) ist, oder der `end`-Parameter kleiner oder gleich `start` oder gleich `NaN` ist.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Eigenschaft [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) gleich `true` ist oder dieser `SourceBuffer` aus [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt wurde.

## Beispiele

TBD.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
