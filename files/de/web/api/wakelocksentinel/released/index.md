---
title: "WakeLockSentinel: released-Eigenschaft"
short-title: released
slug: Web/API/WakeLockSentinel/released
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Die schreibgeschützte **`released`**-Eigenschaft der [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob eine [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) freigegeben wurde.

Der `WakeLockSentinel` wird freigegeben, wenn die zugehörige Plattform-Bildschirmwachhaltefunktion widerrufen wird; danach wird `released` immer `true` zurückgeben. Wenn ein weiterer Bildschirmwachhalthalt erforderlich ist, muss die Anwendung eine neue Bildschirmwachhalthalt-Anforderung stellen (der aktuelle `WakeLockSentinel` kann nicht wiederverwendet werden).

## Wert

Ein boolescher Wert, der `false` ist, bis die [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) freigegeben wurde (entweder durch einen Aufruf von [`WakeLockSentinel.release()`](/de/docs/Web/API/WakeLockSentinel/release) oder weil die Sperre automatisch freigegeben wurde) und das [`release`](/de/docs/Web/API/WakeLockSentinel/release_event)-Ereignis ausgesendet wurde, danach wird er `true` und ändert sich nicht mehr.

## Beispiele

Dieses Beispiel zeigt, wie sich der Wert der `released`-Eigenschaft innerhalb des Lebenszyklus eines [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) ändert.

```js
const sentinel = await navigator.wakeLock.request("screen");
console.log(sentinel.released); // Logs "false"

sentinel.onrelease = () => {
  console.log(sentinel.released); // Logs "true"
};

await sentinel.release();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Wach bleiben mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
