---
title: PushManager
slug: Web/API/PushManager
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`PushManager`**-Interface der [Push API](/de/docs/Web/API/Push_API) ermöglicht es, Benachrichtigungen von Drittanbieter-Servern sowie Anfrage-URLs für Push-Benachrichtigungen zu empfangen.

Der Zugriff auf dieses Interface erfolgt über die Eigenschaft [`ServiceWorkerRegistration.pushManager`](/de/docs/Web/API/ServiceWorkerRegistration/pushManager).

## Statische Eigenschaften

- [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static) {{ReadOnlyInline}}
  - : Gibt ein Array der unterstützten Inhaltskodierungen zurück, die zum Verschlüsseln der Nutzdaten einer Push-Nachricht verwendet werden können.

## Instanzmethoden

- [`PushManager.getSubscription()`](/de/docs/Web/API/PushManager/getSubscription)
  - : Ruft ein bestehendes Push-Abonnement ab. Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt mit Details zu einem bestehenden Abonnement erfüllt wird. Wenn kein Abonnement besteht, wird das Promise mit dem Wert `null` erfüllt.
- [`PushManager.permissionState()`](/de/docs/Web/API/PushManager/permissionState)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit dem Berechtigungsstatus des aktuellen `PushManager` erfüllt wird. Dieser ist entweder `'granted'`, `'denied'` oder `'prompt'`.
- [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)
  - : Meldet den Service Worker bei einem Push-Dienst an. Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt mit Details zum Push-Abonnement erfüllt wird. Wenn für den aktuellen Service Worker noch kein Abonnement besteht, wird ein neues Push-Abonnement erstellt.

### Veraltete Methoden

- [`PushManager.hasPermission()`](/de/docs/Web/API/PushManager/hasPermission) {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit dem `PushPermissionStatus` der anfragenden Webanwendung erfüllt wird. Dieser ist entweder `granted`, `denied` oder `default`. Ersetzt durch [`PushManager.permissionState()`](/de/docs/Web/API/PushManager/permissionState).
- [`PushManager.register()`](/de/docs/Web/API/PushManager/register) {{deprecated_inline}} {{non-standard_inline}}
  - : Erstellt ein Push-Abonnement. Ersetzt durch [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe).
- [`PushManager.registrations()`](/de/docs/Web/API/PushManager/registrations) {{deprecated_inline}} {{non-standard_inline}}
  - : Ruft bestehende Push-Abonnements ab. Ersetzt durch [`PushManager.getSubscription()`](/de/docs/Web/API/PushManager/getSubscription).
- [`PushManager.unregister()`](/de/docs/Web/API/PushManager/unregister) {{deprecated_inline}} {{non-standard_inline}}
  - : Meldet einen angegebenen Abonnement-Endpunkt ab und löscht ihn. In der aktualisierten API wird ein Abonnement durch Aufrufen der Methode [`PushSubscription.unsubscribe()`](/de/docs/Web/API/PushSubscription/unsubscribe) abgemeldet.

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

- [Push API](/de/docs/Web/API/Push_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
