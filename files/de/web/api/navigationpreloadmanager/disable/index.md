---
title: "NavigationPreloadManager: disable()-Methode"
short-title: disable()
slug: Web/API/NavigationPreloadManager/disable
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`disable()`**-Methode der [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)-Schnittstelle stoppt das automatische Vorladen von Ressourcen, die durch den Service-Worker verwaltet werden und zuvor mit [`enable()`](/de/docs/Web/API/NavigationPreloadManager/enable) gestartet wurden. Sie gibt ein Promise zurück, das mit `undefined` aufgelöst wird.

Die Methode kann im `activate`-Event-Handler des Service-Workers aufgerufen werden (bevor der `fetch`-Event-Handler aufgerufen werden kann).

## Syntax

```js-nolint
disable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref('undefined')}} aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Es gibt keinen aktiven Worker, der mit der Registrierung verbunden ist, zu der dieser [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager) gehört.

## Beispiele

Der folgende Code zeigt, wie das Vorladen deaktiviert wird, nachdem zuerst mit [`ServiceWorkerRegistration.navigationPreload`](/de/docs/Web/API/ServiceWorkerRegistration/navigationPreload) getestet wurde, ob es unterstützt wird.

```js
addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if (self.registration.navigationPreload) {
        // Disable navigation preloads!
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

[`NavigationPreloadManager.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable)
