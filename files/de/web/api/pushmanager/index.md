---
title: PushManager
slug: Web/API/PushManager
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`PushManager`**-Interface der [Push-API](/de/docs/Web/API/Push_API) bietet eine Möglichkeit, Benachrichtigungen von Drittanbieter-Servern zu empfangen sowie URLs für Push-Benachrichtigungen anzufordern.

Auf dieses Interface wird über die [`ServiceWorkerRegistration.pushManager`](/de/docs/Web/API/ServiceWorkerRegistration/pushManager)-Eigenschaft zugegriffen.

## Statische Eigenschaften

- [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static)
  - : Gibt ein Array von unterstützten Inhaltskodierungen zurück, die verwendet werden können, um die Nutzlast einer Push-Nachricht zu verschlüsseln.

## Instanzmethoden

- [`PushManager.getSubscription()`](/de/docs/Web/API/PushManager/getSubscription)
  - : Ruft ein bestehendes Push-Abonnement ab. Es gibt ein {{jsxref("Promise")}} zurück, das in ein [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt mit Details zu einem bestehenden Abonnement aufgelöst wird. Falls kein bestehendes Abonnement existiert, wird dies in einen `null`-Wert aufgelöst.
- [`PushManager.permissionState()`](/de/docs/Web/API/PushManager/permissionState)
  - : Gibt ein {{jsxref("Promise")}} zurück, das in den Berechtigungsstatus des aktuellen `PushManager` aufgelöst wird, welcher einer der Werte `'granted'`, `'denied'` oder `'prompt'` sein wird.
- [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)
  - : Abonniert einen Push-Dienst. Es gibt ein {{jsxref("Promise")}} zurück, das in ein [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt aufgelöst wird, das Details zu einem Push-Abonnement enthält. Ein neues Push-Abonnement wird erstellt, falls der aktuelle Service Worker kein bestehendes Abonnement hat.

### Veraltete Methoden

- [`PushManager.hasPermission()`](/de/docs/Web/API/PushManager/hasPermission) {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das in den `PushPermissionStatus` der anfordernden Web-App aufgelöst wird, welcher einer der Werte `granted`, `denied` oder `default` sein wird. Ersetzt durch [`PushManager.permissionState()`](/de/docs/Web/API/PushManager/permissionState).
- [`PushManager.register()`](/de/docs/Web/API/PushManager/register) {{deprecated_inline}} {{non-standard_inline}}
  - : Abonniert ein Push-Abonnement. Ersetzt durch [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe).
- [`PushManager.registrations()`](/de/docs/Web/API/PushManager/registrations) {{deprecated_inline}} {{non-standard_inline}}
  - : Ruft bestehende Push-Abonnements ab. Ersetzt durch [`PushManager.getSubscription()`](/de/docs/Web/API/PushManager/getSubscription).
- [`PushManager.unregister()`](/de/docs/Web/API/PushManager/unregister) {{deprecated_inline}} {{non-standard_inline}}
  - : Hebt die Registrierung eines angegebenen Abonnementendpunkts auf und löscht ihn. Im aktualisierten API wird ein Abonnement aufgehoben, indem die [`PushSubscription.unsubscribe()`](/de/docs/Web/API/PushSubscription/unsubscribe)-Methode aufgerufen wird.

## Beispiel

```js
this.onpush = (event) => {
  console.log(event.data);
  // From here we can write the data to IndexedDB, send it to any open
  // windows, display a notification, etc.
};

navigator.serviceWorker
  .register("serviceworker.js")
  .then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.pushManager.subscribe().then(
      (pushSubscription) => {
        console.log(pushSubscription.endpoint);
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, the fetch() API.
      },
      (error) => {
        console.error(error);
      },
    );
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Push-API](/de/docs/Web/API/Push_API)
- [Service Worker-API](/de/docs/Web/API/Service_Worker_API)
