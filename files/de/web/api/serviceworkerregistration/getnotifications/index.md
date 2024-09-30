---
title: "ServiceWorkerRegistration: getNotifications() Methode"
short-title: getNotifications()
slug: Web/API/ServiceWorkerRegistration/getNotifications
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getNotifications()`**-Methode der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Schnittstelle gibt eine Liste der Benachrichtigungen in der Reihenfolge zurück, in der sie vom aktuellen Ursprung über die aktuelle Service Worker-Registrierung erstellt wurden. Ursprünge können viele aktive, aber unterschiedlich gescopte Service Worker-Registrierungen haben. Benachrichtigungen, die von einem Service Worker am selben Ursprung erstellt wurden, werden anderen aktiven Service Workern an demselben Ursprung nicht zur Verfügung stehen.

## Syntax

```js-nolint
getNotifications()
getNotifications(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen zum Filtern der zurückgegebenen Benachrichtigungen enthält. Die verfügbaren Optionen sind:

    - `tag` {{optional_inline}}
      - : Ein String, der einen Benachrichtigungstag darstellt. Wenn angegeben, werden nur Benachrichtigungen zurückgegeben, die dieses Tag haben.

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
