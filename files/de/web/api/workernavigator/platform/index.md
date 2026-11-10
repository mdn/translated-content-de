---
title: "WorkerNavigator: platform-Eigenschaft"
short-title: platform
slug: Web/API/WorkerNavigator/platform
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{ APIRef("HTML DOM") }}{{AvailableInWorkers("worker")}}

Gibt einen String zurück, der die Plattform des Browsers angibt. Die Spezifikation erlaubt es Browsern, immer einen leeren String zurückzugeben. Verlassen Sie sich daher nicht darauf, über diese Eigenschaft eine zuverlässige Antwort zu erhalten.

## Wert

Ein String, der die Plattform angibt, auf der der Browser ausgeführt wird, oder ein leerer String, wenn der Browser die Plattform nicht angeben möchte oder kann. `platform` muss ein leerer String oder ein String sein, der die Plattform angibt, auf der der Browser ausgeführt wird.

Zum Beispiel: `"MacIntel"`, `"Win32"`, `"FreeBSD i386"`, `"WebTV OS"`.

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
