---
title: "SourceBuffer: Methode abort()"
short-title: abort()
slug: Web/API/SourceBuffer/abort
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{APIRef("Media Source Extensions")}}

Die **`abort()`**-Methode des {{domxref("SourceBuffer")}}-Interfaces bricht das aktuelle Segment ab und setzt den Segmentparser zurück.

## Syntax

```js-nolint
abort()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die {{domxref("MediaSource.readyState")}}-Eigenschaft der übergeordneten Medienquelle nicht gleich `open` ist oder dieses `SourceBuffer` aus der {{domxref("MediaSource")}} entfernt wurde.

## Beispiele

Die Spezifikationsbeschreibung von `abort()` ist etwas verwirrend – betrachten Sie zum Beispiel Schritt 1 von [Parser-Zustand zurücksetzen](https://w3c.github.io/media-source/index.html#sourcebuffer-reset-parser-state). Die MSE-API ist vollständig asynchron, aber dieser Schritt scheint eine synchrone (blockierende) Operation vorzuschlagen, was keinen Sinn ergibt.

Dennoch können aktuelle Implementierungen in bestimmten Situationen nützlich sein, wenn Sie die aktuelle Append- (oder sonstige) Operation auf einem SourceBuffer stoppen und dann sofort wieder Operationen darauf ausführen möchten. Betrachten Sie zum Beispiel diesen Code:

```js
sourceBuffer.addEventListener("updateend", (ev) => {
  // ...
});

sourceBuffer.appendBuffer(buf);
```

Angenommen, nach dem Aufruf von `appendBuffer`, ABER bevor das `updateend`-Ereignis ausgelöst wird (d. h. ein Puffer wird angefügt, aber die Operation ist noch nicht abgeschlossen), "scrubbt" ein Benutzer im Video und sucht nach einem neuen Zeitpunkt. In diesem Fall möchten Sie manuell `abort()` auf dem SourceBuffer aufrufen, um das Dekodieren des aktuellen Puffers zu stoppen, dann das neu angeforderte Segment abrufen und anhängen, das mit der aktuellen neuen Position des Videos zusammenhängt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
