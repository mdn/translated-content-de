---
title: "NavigationPreloadManager: enable()-Methode"
short-title: enable()
slug: Web/API/NavigationPreloadManager/enable
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`enable()`**-Methode des [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)-Interfaces wird genutzt, um das Vorladen von Ressourcen zu aktivieren, die vom Service Worker verwaltet werden. Sie gibt ein Promise zurück, das mit `undefined` aufgelöst wird.

Die Methode sollte im `activate`-Ereignishandler des Service Workers aufgerufen werden, was sicherstellt, dass sie ausgeführt wird, bevor jeglicher `fetch`-Ereignishandler ausgelöst werden kann.

## Syntax

```js-nolint
enable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref('undefined')}} aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Es gibt keinen aktiven Worker, der mit der Registrierung verbunden ist, zu der dieser [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager) gehört.

## Beispiele

Der untenstehende Code zeigt, wie man das Vorladen aktiviert, nachdem zuvor mit [`ServiceWorkerRegistration.navigationPreload`](/de/docs/Web/API/ServiceWorkerRegistration/navigationPreload) überprüft wurde, ob es unterstützt wird.

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

- [`NavigationPreloadManager.disable()`](/de/docs/Web/API/NavigationPreloadManager/disable)
