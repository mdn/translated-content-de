---
title: "SourceBuffer: abort() Methode"
short-title: abort()
slug: Web/API/SourceBuffer/abort
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`abort()`** Methode der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle bricht das aktuelle Segment ab und setzt den Segmentparser zurück.

## Syntax

```js-nolint
abort()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`MediaSource.readyState`](/de/docs/Web/API/MediaSource/readyState)-Eigenschaft der übergeordneten Medienquelle nicht gleich `open` ist oder wenn dieser `SourceBuffer` aus der [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt wurde.

## Beispiele

Die Spezifikationsbeschreibung von `abort()` ist etwas verwirrend — betrachten Sie beispielsweise Schritt 1 der [Parser-Zustandszurücksetzung](https://w3c.github.io/media-source/index.html#sourcebuffer-reset-parser-state). Die MSE-API ist vollständig asynchron, aber dieser Schritt scheint eine synchrone (blockierende) Operation vorzuschlagen, was keinen Sinn ergibt.

Wenn man das sagt, können aktuelle Implementierungen in bestimmten Situationen nützlich sein, wenn Sie den aktuellen Anhang (oder was auch immer) auf einem Source-Buffer stoppen und dann sofort wieder Operationen darauf ausführen möchten. Zum Beispiel, betrachten Sie diesen Code:

```js
sourceBuffer.addEventListener("updateend", (ev) => {
  // ...
});

sourceBuffer.appendBuffer(buf);
```

Angenommen, nach dem Aufruf von `appendBuffer`, ABER bevor das `updateend`-Ereignis ausgelöst wird (d.h. ein Buffer wird angehängt, aber die Operation ist noch nicht abgeschlossen), "spult" ein Benutzer das Video zu einem neuen Zeitpunkt. In diesem Fall möchten Sie manuell `abort()` auf dem Source-Buffer aufrufen, um die Dekodierung des aktuellen Buffers zu stoppen und dann das neu angeforderte Segment abzurufen und anzuhängen, das zur aktuellen neuen Position des Videos gehört.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
