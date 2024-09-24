---
title: "WakeLockSentinel: released-Eigenschaft"
short-title: released
slug: Web/API/WakeLockSentinel/released
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Die schreibgeschützte **`released`**-Eigenschaft der {{domxref("WakeLockSentinel")}}-Schnittstelle gibt einen boolean zurück, der anzeigt, ob ein {{domxref("WakeLockSentinel")}} freigegeben wurde.

Das `WakeLockSentinel` wird freigegeben, wenn der zugehörige Plattform-Bildschirmwachmodus widerrufen wird; danach gibt `released` immer `true` zurück. Wenn ein nachfolgender Bildschirmwachmodus erforderlich ist, muss die Anwendung einen neuen Bildschirmwachmodus anfordern (das aktuelle `WakeLockSentinel` kann nicht wiederverwendet werden).

## Wert

Ein boolean-Wert, der `false` ist, bis das {{domxref("WakeLockSentinel")}} freigegeben wurde (entweder durch einen Aufruf von {{domxref("WakeLockSentinel.release()")}} oder weil der Modus automatisch freigegeben wurde) und das {{domxref("WakeLockSentinel/release_event", "release")}}-Ereignis ausgelöst wurde. Danach wird der Wert `true` und ändert sich nicht mehr.

## Beispiele

Dieses Beispiel zeigt, wie sich der Wert der `released`-Eigenschaft innerhalb des Lebenszyklus eines {{domxref("WakeLockSentinel")}} ändert.

```js
const sentinel = await navigator.wakeLock.request("screen");
console.log(sentinel.released); // Protokolliert "false"

sentinel.onrelease = () => {
  console.log(sentinel.released); // Protokolliert "true"
};

await sentinel.release();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Wach bleiben mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
