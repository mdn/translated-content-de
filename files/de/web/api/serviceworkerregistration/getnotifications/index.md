---
title: "ServiceWorkerRegistration: getNotifications()-Methode"
short-title: getNotifications()
slug: Web/API/ServiceWorkerRegistration/getNotifications
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getNotifications()`**-Methode der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Schnittstelle gibt eine Liste der Benachrichtigungen in der Reihenfolge zurück, in der sie von der aktuellen Herkunft über die aktuelle Service Worker-Registrierung erstellt wurden. Herkünfte können viele aktive, aber unterschiedlich abgestufte Service Worker-Registrierungen haben. Benachrichtigungen, die von einem Service Worker auf derselben Herkunft erstellt wurden, stehen anderen aktiven Service Workern auf derselben Herkunft nicht zur Verfügung.

## Syntax

```js-nolint
getNotifications()
getNotifications(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen zum Filtern der zurückgegebenen Benachrichtigungen enthält. Die verfügbaren Optionen sind:
    - `tag` {{optional_inline}}
      - : Ein String, der eine Benachrichtigungstag repräsentiert. Wenn angegeben, werden nur Benachrichtigungen mit diesem Tag zurückgegeben.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einer Liste von [`Notification`](/de/docs/Web/API/Notification)-Objekten aufgelöst wird.

## Beispiele

```js
navigator.serviceWorker.register("sw.js");

const options = { tag: "user_alerts" };

navigator.serviceWorker.ready.then((registration) => {
  registration.getNotifications(options).then((notifications) => {
    // do something with your notifications
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
