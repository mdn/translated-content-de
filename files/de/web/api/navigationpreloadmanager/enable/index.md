---
title: "NavigationPreloadManager: enable()-Methode"
short-title: enable()
slug: Web/API/NavigationPreloadManager/enable
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`enable()`**-Methode der Schnittstelle {{domxref("NavigationPreloadManager")}} wird verwendet, um das Preloading von Ressourcen zu aktivieren, die vom Service Worker verwaltet werden. Sie gibt ein Promise zurück, das sich mit `undefined` auflöst.

Die Methode sollte im `activate`-Event-Handler des Service Workers aufgerufen werden, um sicherzustellen, dass sie vor dem Auslösen eines `fetch`-Event-Handlers aufgerufen wird.

## Syntax

```js-nolint
enable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref('undefined')}} auflöst.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Es gibt keinen aktiven Worker, der mit der Registrierung assoziiert ist, zu der dieses {{domxref("NavigationPreloadManager")}} gehört.

## Beispiele

Der folgende Code zeigt, wie das Preloading aktiviert wird, nachdem zunächst mithilfe von {{domxref("ServiceWorkerRegistration.navigationPreload")}} getestet wurde, dass es unterstützt wird.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

{{domxref("NavigationPreloadManager.disable()")}}
