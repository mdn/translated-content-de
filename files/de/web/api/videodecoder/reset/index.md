---
title: "VideoDecoder: reset()-Methode"
short-title: reset()
slug: Web/API/VideoDecoder/reset
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`reset()`**-Methode der {{domxref("VideoDecoder")}}-Schnittstelle setzt alle Zustände zurück, einschließlich der Konfiguration, Steuerungsnachrichten in der Steuerungsnachrichtenwarteschlange und aller ausstehenden Rückrufe.

## Syntax

```js-nolint
reset()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel setzt den `VideoDecoder` zurück.

```js
VideoDecoder.reset();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
