---
title: "NavigationPreloadManager: enable() Methode"
short-title: enable()
slug: Web/API/NavigationPreloadManager/enable
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`enable()`**-Methode der [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)-Schnittstelle wird verwendet, um das Preloading von Ressourcen zu aktivieren, die vom Service Worker verwaltet werden. Sie gibt ein Promise zurück, das mit `undefined` erfüllt wird.

Die Methode sollte im `activate`-Event-Handler des Service Workers aufgerufen werden, was sicherstellt, dass sie aufgerufen wird, bevor ein `fetch`-Event-Handler ausgelöst werden kann.

## Syntax

```js-nolint
enable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref('undefined')}} erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Es gibt keinen aktiven Worker, der mit der Registrierung verbunden ist, zu der dieser [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager) gehört.

## Beispiele

Der untenstehende Code zeigt, wie das Preloading aktiviert werden kann, nachdem zunächst mit [`ServiceWorkerRegistration.navigationPreload`](/de/docs/Web/API/ServiceWorkerRegistration/navigationPreload) getestet wurde, ob es unterstützt wird.

```js
addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if (self.registration.navigationPreload) {
        // Enable navigation preloads!
        await self.registration.navigationPreload.enable();
      }
    })(),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`NavigationPreloadManager.disable()`](/de/docs/Web/API/NavigationPreloadManager/disable)
