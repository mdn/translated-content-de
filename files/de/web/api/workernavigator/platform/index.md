---
title: "WorkerNavigator: platform-Eigenschaft"
short-title: platform
slug: Web/API/WorkerNavigator/platform
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ APIRef("HTML DOM") }} {{Deprecated_Header}}{{AvailableInWorkers("worker")}}

Gibt einen String zurück, der die Plattform des Browsers darstellt. Die Spezifikation erlaubt es Browsern, immer den leeren String zurückzugeben. Verlassen Sie sich daher nicht auf diese Eigenschaft, um eine verlässliche Antwort zu erhalten.

## Wert

Ein String, der die Plattform identifiziert, auf der der Browser läuft, oder ein leerer String, wenn der Browser sich entscheidet (oder nicht in der Lage ist), die Plattform zu identifizieren. `platform` ist ein String, der entweder ein leerer String oder ein String sein muss, der die Plattform darstellt, auf der der Browser ausgeführt wird.

Zum Beispiel: "`MacIntel`", "`Win32`", "`FreeBSD i386`", "`WebTV OS`".

## Beispiele

```js
console.log(navigator.platform);
```

## Nutzungshinweise

Unter Windows geben moderne Browser `"Win32"` zurück, auch wenn sie auf einer 64-Bit-Version von Windows ausgeführt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
