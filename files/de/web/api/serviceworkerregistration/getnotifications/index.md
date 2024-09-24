---
title: "ServiceWorkerRegistration: Die Methode getNotifications()"
short-title: getNotifications()
slug: Web/API/ServiceWorkerRegistration/getNotifications
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getNotifications()`** Methode der {{domxref("ServiceWorkerRegistration")}}-Schnittstelle gibt eine Liste der Benachrichtigungen in der Reihenfolge zurück, in der sie vom aktuellen Ursprung über die aktuelle Service Worker-Registrierung erstellt wurden. Ursprünge können viele aktive, aber unterschiedlich umfangreiche Service Worker-Registrierungen haben. Benachrichtigungen, die von einem Service Worker am gleichen Ursprung erstellt wurden, sind für andere aktive Service Worker am gleichen Ursprung nicht verfügbar.

## Syntax

```js-nolint
getNotifications()
getNotifications(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit Optionen, um die zurückgegebenen Benachrichtigungen zu filtern. Die verfügbaren Optionen sind:

    - `tag` {{optional_inline}}
      - : Ein String, der ein Benachrichtigungstag darstellt. Wenn angegeben, werden nur Benachrichtigungen zurückgegeben, die dieses Tag haben.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einer Liste von {{domxref("Notification")}} Objekten aufgelöst wird.

## Beispiele

```js
navigator.serviceWorker.register("sw.js");

const options = { tag: "user_alerts" };

navigator.serviceWorker.ready.then((registration) => {
  registration.getNotifications(options).then((notifications) => {
    // etwas mit Ihren Benachrichtigungen tun
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
