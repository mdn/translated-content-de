---
title: WakeLock
slug: Web/API/WakeLock
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Das **`WakeLock`**-Interface der [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) kann verwendet werden, um eine Sperre anzufordern, die verhindert, dass Geräteschirme abdimmen oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.

Dieses Interface und damit die System-Wach-Sperre wird über die [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock)-Eigenschaft bereitgestellt.

## Instanzmethoden

- [`request()`](/de/docs/Web/API/WakeLock/request)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekt erfüllt wird, wenn die Bildschirm-Wach-Sperre gewährt wird.

## Beispiele

Der folgende Code `await` die Anforderung eines [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Objekts und fährt fort, wenn die Anforderung gewährt wird.

Die Methode [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request) ist in einer `try...catch`-Anweisung eingeschlossen, um [Fälle zu erfassen, in denen das Promise abgelehnt werden könnte](/de/docs/Web/API/WakeLock/request#exceptions), wie z.B. aufgrund eines niedrigen Gerätestroms.

```js
try {
  const wakeLock = await navigator.wakeLock.request("screen");
} catch (err) {
  // the wake lock request fails - usually system related, such being low on battery
  console.log(`${err.name}, ${err.message}`);
}
```

Beachten Sie, dass die Bildschirm-Wach-Sperre vom Gerät widerrufen werden kann, nachdem sie gewährt wurde.
Der zurückgegebene [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) kann verwendet werden, um den Status der Sperre zu überprüfen und/oder um eine gehaltene Bildschirm-Wach-Sperre manuell aufzuheben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bleiben Sie wach mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
