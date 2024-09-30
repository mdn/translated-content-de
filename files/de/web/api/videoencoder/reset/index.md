---
title: "VideoEncoder: reset()-Methode"
short-title: reset()
slug: Web/API/VideoEncoder/reset
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`reset()`**-Methode des [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Interfaces storniert synchron alle anstehenden Codierungen und Rückrufe, gibt alle zugrundeliegenden Ressourcen frei und setzt den [`state`](/de/docs/Web/API/VideoEncoder/state) auf "unconfigured".
Nach dem Aufruf von `reset()` muss [`configure()`](/de/docs/Web/API/VideoEncoder/configure) aufgerufen werden, bevor Sie mit den Aufrufen von [`encode()`](/de/docs/Web/API/VideoEncoder/encode) fortfahren können.

> [!NOTE]
> Um zu vermeiden, dass über [`encode()`](/de/docs/Web/API/VideoEncoder/encode) in die Warteschlange gestellte Frames verworfen werden, sollte [`flush()`](/de/docs/Web/API/VideoEncoder/flush) aufgerufen und abgeschlossen werden, bevor `reset()` aufgerufen wird.

## Syntax

```js-nolint
reset()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoEncoder/state) `"closed"` ist.

## Beispiele

Das folgende Beispiel setzt den `VideoEncoder` zurück.

```js
VideoEncoder.reset();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
