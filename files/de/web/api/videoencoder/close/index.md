---
title: "VideoEncoder: Methode close()"
short-title: close()
slug: Web/API/VideoEncoder/close
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`close()`** Methode der Schnittstelle {{domxref("VideoEncoder")}} beendet alle laufenden Arbeiten und gibt Systemressourcen frei.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel schließt den `VideoEncoder`.

```js
VideoEncoder.close();
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
