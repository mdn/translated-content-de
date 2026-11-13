---
title: "WorkerNavigator: platform-Eigenschaft"
short-title: platform
slug: Web/API/WorkerNavigator/platform
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{ APIRef("HTML DOM") }}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`platform`** der Schnittstelle [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) gibt einen String zurück, der die Plattform des Browsers angibt. Die Spezifikation erlaubt Browsern, immer einen leeren String zurückzugeben. Verlassen Sie sich daher nicht auf diese Eigenschaft, wenn Sie eine verlässliche Angabe zur Plattform benötigen.

## Wert

Ein String, der die Plattform angibt, auf der der Browser ausgeführt wird, oder ein leerer String, wenn der Browser die Plattform nicht angeben möchte oder kann. Der Wert von `platform` muss entweder ein leerer String oder ein String sein, der die Plattform angibt, auf der der Browser ausgeführt wird.

Beispiele: `"MacIntel"`, `"Win32"`, `"FreeBSD i386"`, `"WebTV OS"`.

> [!NOTE]
> Unter Windows geben moderne Browser `"Win32"` zurück, selbst wenn sie auf einer 64-Bit-Version von Windows ausgeführt werden.

## Beispiele

```js
console.log(navigator.platform);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
