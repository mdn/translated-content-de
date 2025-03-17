---
title: "SourceBuffer: abort() Methode"
short-title: abort()
slug: Web/API/SourceBuffer/abort
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`abort()`**-Methode des [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
Interfaces bricht das aktuelle Segment ab und setzt den Segmentparser zurück.

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
  - : Wird ausgelöst, wenn die Eigenschaft [`MediaSource.readyState`](/de/docs/Web/API/MediaSource/readyState) der übergeordneten Mediaquelle nicht `open` ist, oder dieser `SourceBuffer` aus der [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt wurde.

## Beispiele

Die Spezifikationsbeschreibung von `abort()` ist etwas verwirrend — betrachten Sie zum Beispiel Schritt 1 von [Reset Parser State](https://w3c.github.io/media-source/index.html#sourcebuffer-reset-parser-state). Die MSE-API ist vollständig asynchron, aber dieser Schritt scheint eine synchrone (blockierende) Operation vorzuschlagen, was keinen Sinn ergibt.

Das gesagt, können aktuelle Implementierungen in bestimmten Situationen nützlich sein, wenn Sie den aktuellen Anhängevorgang (oder was auch immer) auf einem Quellpuffer stoppen und dann sofort erneut Operationen darauf durchführen möchten. Betrachten Sie zum Beispiel diesen Code:

```js
sourceBuffer.addEventListener("updateend", (ev) => {
  // ...
});

sourceBuffer.appendBuffer(buf);
```

Angenommen, nach dem Aufruf von `appendBuffer`, ABER bevor das `updateend`-Ereignis ausgelöst wird (d.h. ein Puffer wird angehängt, aber der Vorgang ist noch nicht abgeschlossen), "scrubbt" ein Benutzer das Video und sucht einen neuen Zeitpunkt. In diesem Fall sollten Sie manuell `abort()` auf dem Quellpuffer aufrufen, um das Dekodieren des aktuellen Puffers zu stoppen, dann das neu angeforderte Segment abrufen und anhängen, das sich auf die aktuelle neue Position des Videos bezieht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
