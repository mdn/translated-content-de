---
title: WakeLock
slug: Web/API/WakeLock
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Das **`WakeLock`**-Interface der [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) kann verwendet werden, um eine Sperre anzufordern, die verhindert, dass Bildschirme von Geräten verdunkeln oder gesperrt werden, wenn eine Anwendung weiterlaufen muss.

Dieses Interface und somit die System-Wake-Lock wird über die {{domxref("Navigator.wakeLock")}}-Eigenschaft bereitgestellt.

## Instanzmethoden

- {{domxref("WakeLock.request", "request()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("WakeLockSentinel")}} Objekt erfüllt wird, wenn der Bildschirm-Wake-Lock gewährt wird.

## Beispiele

Folgender Code `awaitet` die Anfrage für ein {{domxref("WakeLockSentinel")}}-Objekt und setzt fort, wenn die Anfrage gewährt wird.

Die {{domxref("WakeLock.request", "WakeLock.request()")}}-Methode ist in eine `try...catch`-Anweisung eingebettet, um [Fälle abzufangen, in denen das Versprechen abgelehnt werden könnte](/de/docs/Web/API/WakeLock/request#exceptions), zum Beispiel aufgrund niedriger Gerätebatterie.

```js
try {
  const wakeLock = await navigator.wakeLock.request("screen");
} catch (err) {
  // die Wake-Lock-Anfrage schlägt fehl - normalerweise systembedingt, wie z.B. bei niedriger Batterieleistung
  console.log(`${err.name}, ${err.message}`);
}
```

Beachten Sie, dass der Bildschirm-Wake-Lock vom Gerät widerrufen werden kann, nachdem er gewährt wurde.
Das zurückgegebene {{domxref("WakeLockSentinel")}} kann verwendet werden, um den Status der Sperre zu überprüfen und/oder einen gehaltenen Bildschirm-Wake-Lock manuell zu kündigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bleiben Sie wach mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
