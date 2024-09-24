---
title: "VideoEncoder: reset()-Methode"
short-title: reset()
slug: Web/API/VideoEncoder/reset
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`reset()`**-Methode der {{domxref("VideoEncoder")}}-Schnittstelle storniert synchron alle anstehenden Kodierungen und Rückrufe, gibt alle zugrundeliegenden Ressourcen frei und setzt den {{domxref("VideoEncoder.state", "Zustand")}} auf "unconfigured". Nach dem Aufruf von `reset()` muss {{domxref("VideoEncoder.configure()", "configure()")}} aufgerufen werden, bevor mit {{domxref("VideoEncoder.encode()", "encode()")}}-Aufrufen fortgefahren werden kann.

> [!NOTE]
> Um zu vermeiden, dass Rahmen, die über {{domxref("VideoEncoder.encode()", "encode()")}} in die Warteschlange gestellt wurden, verworfen werden, sollte {{domxref("VideoEncoder.flush()", "flush()")}} aufgerufen und abgeschlossen werden, bevor `reset()` aufgerufen wird.

## Syntax

```js-nolint
reset()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("VideoEncoder.state","Zustand")}} `"closed"` ist.

## Beispiele

Das folgende Beispiel setzt den `VideoEncoder` zurück.

```js
VideoEncoder.reset();
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
