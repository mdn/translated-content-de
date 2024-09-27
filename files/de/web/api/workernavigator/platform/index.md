---
title: "WorkerNavigator: platform-Eigenschaft"
short-title: platform
slug: Web/API/WorkerNavigator/platform
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ APIRef("HTML DOM") }} {{Deprecated_Header}}{{AvailableInWorkers("worker")}}

Gibt einen String zurück, der die Plattform des Browsers darstellt. Die Spezifikation erlaubt es, dass Browser immer den leeren String zurückgeben, daher sollten Sie sich nicht darauf verlassen, dass diese Eigenschaft eine zuverlässige Antwort liefert.

## Wert

Ein String, der die Plattform identifiziert, auf der der Browser ausgeführt wird, oder ein leerer String, wenn der Browser es ablehnt (oder nicht in der Lage ist), die Plattform zu identifizieren. `platform` ist ein String, der ein leerer String sein muss oder einen String, der die Plattform darstellt, auf der der Browser ausgeführt wird.

Zum Beispiel: `"MacIntel"`, `"Win32"`, `"FreeBSD i386"`, `"WebTV OS"`.

## Beispiele

```js
console.log(navigator.platform);
```

## Verwendungshinweise

Unter Windows geben moderne Browser `"Win32"` zurück, selbst wenn sie auf einer 64-Bit-Version von Windows laufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
