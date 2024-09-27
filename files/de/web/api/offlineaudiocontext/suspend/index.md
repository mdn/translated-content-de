---
title: "OfflineAudioContext: suspend()-Methode"
short-title: suspend()
slug: Web/API/OfflineAudioContext/suspend
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ APIRef("Web Audio API") }}

Die **`suspend()`**-Methode des [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)-Interfaces plant eine Unterbrechung des Zeitfortschritts im Audio-Kontext zu einem angegebenen Zeitpunkt und gibt ein Promise zurück. Dies ist im Allgemeinen nützlich beim synchronen Manipulieren des Audio-Graphen auf einem OfflineAudioContext.

Beachten Sie, dass die maximale Präzision der Unterbrechung die Größe des Render-Quantums ist und die angegebene Unterbrechungszeit auf die nächste Grenze des Render-Quantums abgerundet wird. Aus diesem Grund ist es nicht erlaubt, mehrere Unterbrechungen zum gleichen quantisierten Frame zu planen. Auch sollte die Planung erfolgen, während der Kontext nicht läuft, um eine präzise Unterbrechung zu gewährleisten.

## Syntax

```js-nolint
suspend(suspendTime)
```

### Parameter

- `suspendTime`
  - : Eine Gleitkommazahl, die die Unterbrechungszeit in Sekunden angibt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu {{jsxref('undefined')}} aufgelöst wird.

### Ausnahmen

Das Promise wird abgelehnt, wenn eine Ausnahme auftritt.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die quantisierte Frame-Nummer eine der folgenden ist:
    - eine negative Zahl
    - kleiner als oder gleich der aktuellen Zeit
    - größer als oder gleich der gesamten Render-Dauer
    - durch eine andere Unterbrechung zur gleichen Zeit geplant

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
