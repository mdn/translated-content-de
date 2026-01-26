---
title: WakeLock
slug: Web/API/WakeLock
l10n:
  sourceCommit: daa20da731748454675985dbcda02b2a0db3013a
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Das **`WakeLock`**-Interface der [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) kann verwendet werden, um eine Sperre anzufordern, die verhindert, dass sich Bildschirme von Geräten abdunkeln oder sperren, wenn eine Anwendung weiterlaufen muss.

Dieses Interface und damit die System-Wake-Sperre wird über die [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock)-Eigenschaft bereitgestellt.

## Instanzmethoden

- [`request()`](/de/docs/Web/API/WakeLock/request)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt erfüllt wird, wenn die Bildschirm-Wake-Sperre gewährt wird.

## Beispiele

Der folgende Code erwartet das `await` einer Anfrage für ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt und fährt fort, wenn die Anfrage gewährt wird.

Die [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request)-Methode ist in eine `try...catch`-Anweisung eingebettet, um [Fälle zu erfassen, in denen das Promise zurückgewiesen werden könnte](/de/docs/Web/API/WakeLock/request#exceptions), beispielsweise aufgrund von niedrigem Gerätestrom.

```js
try {
  const wakeLock = await navigator.wakeLock.request("screen");
} catch (err) {
  // the wake lock request fails - usually system related, such being low on battery
  console.log(`${err.name}, ${err.message}`);
}
```

Beachten Sie, dass die Bildschirm-Wake-Sperre vom Gerät widerrufen werden kann, nachdem sie gewährt wurde. Das zurückgegebene [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) kann verwendet werden, um den Status der Sperre zu überprüfen und/oder um eine gehaltene Bildschirm-Wake-Sperre manuell zu beenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Wach bleiben mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
