---
title: "OfflineAudioContext: suspend() Methode"
short-title: suspend()
slug: Web/API/OfflineAudioContext/suspend
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ APIRef("Web Audio API") }}

Die **`suspend()`**-Methode des [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)-Interfaces plant eine Unterbrechung des Zeitfortschritts im Audio-Kontext zu einer angegebenen Zeit und gibt ein Promise zurück. Dies ist insbesondere nützlich, um den Audiograph synchron im OfflineAudioContext zu manipulieren.

Beachten Sie, dass die maximale Präzision der Unterbrechung durch die Größe des Render-Quantums bestimmt wird und die angegebene Unterbrechungszeit auf die nächste Grenze des Render-Quantums abgerundet wird. Aus diesem Grund ist es nicht erlaubt, mehrere Unterbrechungen am selben quantisierten Frame zu planen. Außerdem sollte die Planung erfolgen, während der Kontext nicht läuft, um die genaue Unterbrechung sicherzustellen.

## Syntax

```js-nolint
suspend(suspendTime)
```

### Parameter

- `suspendTime`
  - : Eine Gleitkommazahl, die die Unterbrechungszeit in Sekunden angibt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu {{jsxref('undefined')}} führt.

### Ausnahmen

Das Promise wird abgelehnt, wenn irgendeine Ausnahme auftritt.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die quantisierte Frame-Nummer eine der folgenden ist:
    - eine negative Zahl
    - kleiner oder gleich der aktuellen Zeit
    - größer oder gleich der gesamten Render-Dauer
    - für dieselbe Zeit von einer anderen Unterbrechung geplant

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
