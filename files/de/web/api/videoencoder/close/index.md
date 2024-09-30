---
title: "VideoEncoder: close() Methode"
short-title: close()
slug: Web/API/VideoEncoder/close
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`close()`** Methode des [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Interfaces beendet alle ausstehenden Arbeiten und gibt Systemressourcen frei.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel schließt den `VideoEncoder`.

```js
VideoEncoder.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
