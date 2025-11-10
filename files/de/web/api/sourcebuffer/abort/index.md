---
title: "SourceBuffer: abort()-Methode"
short-title: abort()
slug: Web/API/SourceBuffer/abort
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
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
  - : Wird ausgelöst, wenn die Eigenschaft [`MediaSource.readyState`](/de/docs/Web/API/MediaSource/readyState) der übergeordneten Medienquelle nicht gleich `open` ist oder dieser `SourceBuffer` aus der [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt wurde.

## Beispiele

Die Spezifikationsbeschreibung von `abort()` ist etwas verwirrend – betrachten Sie beispielsweise Schritt 1 von [reset parser state](https://w3c.github.io/media-source/index.html#sourcebuffer-reset-parser-state). Die MSE-API ist vollständig asynchron, aber dieser Schritt scheint eine synchrone (blockierende) Operation vorzuschlagen, was keinen Sinn ergibt.

Das gesagt, können aktuelle Implementierungen in bestimmten Situationen nützlich sein, wenn Sie die aktuelle Anhängeoperation (oder Ähnliches) stoppen möchten, die gerade auf einem Quellpuffer stattfindet, und dann sofort erneut Operationen darauf ausführen möchten. Betrachten Sie beispielsweise diesen Code:

```js
sourceBuffer.addEventListener("updateend", (ev) => {
  // …
});

sourceBuffer.appendBuffer(buf);
```

Angenommen, nach dem Aufruf von `appendBuffer`, aber bevor das `updateend`-Ereignis ausgelöst wird (d.h. ein Puffer wird angehängt, aber die Operation wurde noch nicht abgeschlossen), "scrubbt" ein Benutzer das Video und sucht zu einem neuen Zeitpunkt. In diesem Fall sollten Sie manuell `abort()` auf dem Quellpuffer aufrufen, um die Dekodierung des aktuellen Puffers zu stoppen, dann das neu angeforderte Segment abrufen und anhängen, das sich auf die aktuelle neue Position des Videos bezieht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
