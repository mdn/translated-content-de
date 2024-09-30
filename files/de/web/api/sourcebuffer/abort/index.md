---
title: "SourceBuffer: abort()-Methode"
short-title: abort()
slug: Web/API/SourceBuffer/abort
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`abort()`**-Methode der Schnittstelle [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
bricht das aktuelle Segment ab und setzt den Segementparser zurück.

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
  - : Wird ausgelöst, wenn die Eigenschaft [`MediaSource.readyState`](/de/docs/Web/API/MediaSource/readyState) der
    übergeordneten Media-Quelle nicht gleich `open` ist, oder dieser
    `SourceBuffer` aus der [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt wurde.

## Beispiele

Die Spezifikationsbeschreibung von `abort()` ist etwas verwirrend — betrachten Sie
zum Beispiel Schritt 1 von [Reset Parser State](https://w3c.github.io/media-source/index.html#sourcebuffer-reset-parser-state). Die MSE-API ist vollständig asynchron, aber dieser Schritt scheint eine
synchrone (blockierende) Operation vorzuschlagen, was keinen Sinn ergibt.

Trotzdem können aktuelle Implementierungen in bestimmten Situationen nützlich sein, wenn Sie
die aktuelle Append- (oder eine andere) Operation beenden möchten, die auf einem Sourcebuffer erfolgt, und dann
sofort wieder beginnen möchten, Operationen darauf durchzuführen. Beispielsweise betrachten Sie diesen Code:

```js
sourceBuffer.addEventListener("updateend", (ev) => {
  // ...
});

sourceBuffer.appendBuffer(buf);
```

Angenommen, nach dem Aufruf von `appendBuffer`, ABER bevor das
`updateend`-Ereignis ausgelöst wird (d. h. ein Puffer wird angehängt, aber die Operation
ist noch nicht abgeschlossen), "spult" ein Benutzer das Video zu einem neuen Zeitpunkt. In
diesem Fall möchten Sie manuell `abort()` auf dem Source-Buffer aufrufen, um
das Decodieren des aktuellen Puffers zu stoppen und dann das neu angeforderte
Segment abzurufen und anzuhängen, das der neuen aktuellen Position des Videos entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
