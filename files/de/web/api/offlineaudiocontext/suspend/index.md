---
title: "OfflineAudioContext: suspend()-Methode"
short-title: suspend()
slug: Web/API/OfflineAudioContext/suspend
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ APIRef("Web Audio API") }}

Die **`suspend()`**-Methode des {{domxref("OfflineAudioContext")}}-Interfaces plant eine Aussetzung des Zeitfortschritts im Audio-Kontext zu einem angegebenen Zeitpunkt und gibt ein Promise zurück. Dies ist im Allgemeinen nützlich bei der synchronen Manipulation des Audio-Graphen auf einem OfflineAudioContext.

Beachten Sie, dass die maximale Präzision der Aussetzung die Größe des Rendering-Quantum ist und die spezifizierte Aussetzungszeit auf die nächste Rendering-Quantum-Grenze abgerundet wird. Aus diesem Grund ist es nicht erlaubt, mehrere Aussetzungen auf demselben quantisierten Frame zu planen. Außerdem sollte die Planung erfolgen, während der Kontext nicht läuft, um die genaue Aussetzung sicherzustellen.

## Syntax

```js-nolint
suspend(suspendTime)
```

### Parameter

- `suspendTime`
  - : Eine Gleitkommazahl, die die Aussetzungszeit in Sekunden angibt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf {{jsxref('undefined')}} auflöst.

### Ausnahmen

Das Promise wird abgelehnt, wenn eine Ausnahme auftritt.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn die quantisierte Frame-Nummer einer der folgenden ist:
    - eine negative Zahl
    - kleiner oder gleich der aktuellen Zeit
    - größer oder gleich der gesamten Renderdauer
    - von einer anderen Aussetzung für dieselbe Zeit geplant

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
