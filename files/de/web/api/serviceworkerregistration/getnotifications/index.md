---
title: "ServiceWorkerRegistration: getNotifications()-Methode"
short-title: getNotifications()
slug: Web/API/ServiceWorkerRegistration/getNotifications
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getNotifications()`**-Methode der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Schnittstelle gibt eine Liste der Benachrichtigungen in der Reihenfolge zurück, in der sie von der aktuellen Herkunft über die aktuelle Service Worker-Registrierung erstellt wurden. Herkünfte können viele aktive, aber unterschiedlich abgegrenzte Service Worker-Registrierungen haben. Benachrichtigungen, die von einem Service Worker auf derselben Herkunft erstellt wurden, sind für andere aktive Service Worker auf dieser gleichen Herkunft nicht verfügbar.

## Syntax

```js-nolint
getNotifications()
getNotifications(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen enthält, um die zurückgegebenen Benachrichtigungen zu filtern. Die verfügbaren Optionen sind:

    - `tag` {{optional_inline}}
      - : Ein String, der ein Benachrichtigungstag darstellt. Wenn angegeben, werden nur Benachrichtigungen zurückgegeben, die dieses Tag haben.

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
