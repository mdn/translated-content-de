---
title: "WorkerNavigator: platform-Eigenschaft"
short-title: platform
slug: Web/API/WorkerNavigator/platform
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ APIRef("HTML DOM") }} {{Deprecated_Header}}{{AvailableInWorkers("worker")}}

Gibt einen String zurück, der die Plattform des Browsers darstellt. Die Spezifikation erlaubt es den Browsern, immer den leeren String zurückzugeben, sodass Sie sich nicht auf diese Eigenschaft verlassen sollten, um eine zuverlässige Antwort zu erhalten.

## Wert

Ein String, der die Plattform identifiziert, auf der der Browser läuft, oder ein leerer String, falls der Browser die Plattform nicht identifizieren möchte (oder nicht in der Lage ist, sie zu identifizieren). `platform` ist ein String, der entweder ein leerer String oder ein String sein muss, der die Plattform beschreibt, auf der der Browser ausgeführt wird.

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
