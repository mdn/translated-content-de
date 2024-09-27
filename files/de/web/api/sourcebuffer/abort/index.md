---
title: "SourceBuffer: abort()-Methode"
short-title: abort()
slug: Web/API/SourceBuffer/abort
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`abort()`**-Methode des [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces bricht das aktuelle Segment ab und setzt den Segmentparser zurück.

## Syntax

```js-nolint
abort()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Eigenschaft [`MediaSource.readyState`](/de/docs/Web/API/MediaSource/readyState) der übergeordneten Medienquelle nicht `open` ist oder wenn dieser `SourceBuffer` von der [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt wurde.

## Beispiele

Die Spezifikationsbeschreibung von `abort()` ist etwas verwirrend — betrachten Sie beispielsweise Schritt 1 von [reset parser state](https://w3c.github.io/media-source/index.html#sourcebuffer-reset-parser-state). Die MSE API ist vollständig asynchron, aber dieser Schritt scheint eine synchrone (blockierende) Operation vorzuschlagen, was keinen Sinn ergibt.

Trotzdem können aktuelle Implementierungen in bestimmten Situationen nützlich sein, wenn Sie den aktuellen Append- (oder was auch immer) Vorgang auf einem Sourcebuffer stoppen und dann sofort wieder mit Operationen darauf beginnen möchten. Betrachten Sie zum Beispiel diesen Code:

```js
sourceBuffer.addEventListener("updateend", (ev) => {
  // ...
});

sourceBuffer.appendBuffer(buf);
```

Angenommen, nach dem Aufruf von `appendBuffer`, ABER bevor das `updateend`-Ereignis ausgelöst wird (d. h. ein Puffer wird angehängt, aber die Operation ist noch nicht abgeschlossen), "scrubbt" ein Benutzer das Video, indem er zu einem neuen Zeitpunkt springt. In diesem Fall möchten Sie manuell `abort()` auf dem Sourcebuffer aufrufen, um die Dekodierung des aktuellen Puffers zu stoppen, und dann das neu angeforderte Segment abrufen und anhängen, das sich auf die aktuelle neue Position des Videos bezieht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
