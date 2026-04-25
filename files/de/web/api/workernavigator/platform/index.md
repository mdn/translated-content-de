---
title: "WorkerNavigator: platform-Eigenschaft"
short-title: platform
slug: Web/API/WorkerNavigator/platform
l10n:
  sourceCommit: 0266df57cb5eb52a057e305ba12d49c93f0edb7e
---

{{ APIRef("HTML DOM") }}{{AvailableInWorkers("worker")}}

Gibt einen String zurück, der die Plattform des Browsers darstellt. Die Spezifikation erlaubt es den Browsern, immer den leeren String zurückzugeben, daher sollten Sie sich nicht auf diese Eigenschaft verlassen, um eine zuverlässige Antwort zu erhalten.

## Wert

Ein String, der die Plattform identifiziert, auf der der Browser läuft, oder
ein leerer String, wenn der Browser es ablehnt (oder nicht in der Lage ist), die Plattform zu identifizieren.
`platform` ist ein String, der entweder ein leerer String oder ein String sein muss, der die Plattform darstellt, auf der der Browser ausgeführt wird.

Zum Beispiel: `"MacIntel"`, `"Win32"`, `"FreeBSD i386"`, `"WebTV OS"`.

## Beispiele

```js
console.log(navigator.platform);
```

## Hinweise zur Verwendung

Unter Windows geben moderne Browser `"Win32"` zurück, selbst wenn sie auf einer 64-Bit-Version von Windows ausgeführt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
