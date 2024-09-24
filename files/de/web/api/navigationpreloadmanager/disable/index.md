---
title: "NavigationPreloadManager: disable()-Methode"
short-title: disable()
slug: Web/API/NavigationPreloadManager/disable
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`disable()`**-Methode des {{domxref("NavigationPreloadManager")}}-Interfaces stoppt das automatische Vorladen von Ressourcen, die vom Service Worker verwaltet werden und zuvor mit {{domxref("NavigationPreloadManager.enable()","enable()")}} gestartet wurden. Sie gibt ein Versprechen zurück, das mit `undefined` aufgelöst wird.

Die Methode kann im `activate`-Ereignishandler des Service Workers aufgerufen werden (bevor der `fetch`-Ereignishandler aufgerufen werden kann).

## Syntax

```js-nolint
disable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref('undefined')}} aufgelöst wird.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Es gibt keinen aktiven Worker, der mit der Registrierung verbunden ist, zu der dieses {{domxref("NavigationPreloadManager")}} gehört.

## Beispiele

Der folgende Code zeigt, wie das Vorladen deaktiviert werden kann, nachdem zuerst {{domxref("ServiceWorkerRegistration.navigationPreload")}} verwendet wurde, um zu testen, ob es unterstützt wird.

```js
addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if (self.registration.navigationPreload) {
        // Navigation Preloads deaktivieren!
        await self.registration.navigationPreload.disable();
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

{{domxref("NavigationPreloadManager.enable()")}}
