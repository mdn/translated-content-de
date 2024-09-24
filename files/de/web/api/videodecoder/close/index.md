---
title: "VideoDecoder: close()-Methode"
short-title: close()
slug: Web/API/VideoDecoder/close
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`close()`**-Methode der {{domxref("VideoDecoder")}}-Schnittstelle beendet alle ausstehenden Arbeiten und gibt Systemressourcen frei.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel schließt den `VideoDecoder`.

```js
VideoDecoder.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
