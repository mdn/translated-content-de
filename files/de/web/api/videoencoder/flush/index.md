---
title: "VideoEncoder: Methode flush()"
short-title: flush()
slug: Web/API/VideoEncoder/flush
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`flush()`** Methode der {{domxref("VideoEncoder")}}-Schnittstelle erzwingt das Abschließen aller ausstehenden Kodierungen.

## Syntax

```js-nolint
flush()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, sobald die Initialisierung des Encoders abgeschlossen ist und alle ausstehenden {{domxref("EncodedVideoChunk")}}s zurückgegeben werden.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn das Promise abgelehnt wird, weil der {{domxref("VideoEncoder.state","state")}} nicht `configured` ist.

## Beispiele

Das folgende Beispiel leert den `VideoEncoder`.

```js
VideoEncoder.flush();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
