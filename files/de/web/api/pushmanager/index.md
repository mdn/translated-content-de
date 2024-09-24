---
title: PushManager
slug: Web/API/PushManager
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`PushManager`**-Schnittstelle der [Push-API](/de/docs/Web/API/Push_API) bietet eine Möglichkeit, Benachrichtigungen von Drittanbieter-Servern zu empfangen und URLs für Push-Benachrichtigungen anzufordern.

Auf diese Schnittstelle wird über die {{domxref("ServiceWorkerRegistration.pushManager")}}-Eigenschaft zugegriffen.

## Statische Eigenschaften

- [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static)
  - : Gibt ein Array unterstützter Inhaltscodierungen zurück, die zur Verschlüsselung der Nutzlast einer Push-Nachricht verwendet werden können.

## Instanzmethoden

- {{domxref("PushManager.getSubscription()")}}
  - : Ruft ein vorhandenes Push-Abonnement ab. Es gibt ein {{jsxref("Promise")}} zurück, das zu einem {{domxref("PushSubscription")}}-Objekt aufgelöst wird, das Details eines vorhandenen Abonnements enthält. Wenn kein bestehendes Abonnement vorhanden ist, wird dies zu einem `null`-Wert aufgelöst.
- {{domxref("PushManager.permissionState()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das den Berechtigungsstatus des aktuellen `PushManager` auflöst, der einer von `'granted'`, `'denied'` oder `'prompt'` sein wird.
- {{domxref("PushManager.subscribe()")}}
  - : Abonniert einen Push-Dienst. Es gibt ein {{jsxref("Promise")}} zurück, das zu einem {{domxref("PushSubscription")}}-Objekt aufgelöst wird, das Details eines Push-Abonnements enthält. Ein neues Push-Abonnement wird erstellt, wenn der aktuelle Service Worker kein vorhandenes Abonnement hat.

### Veraltete Methoden

- {{domxref("PushManager.hasPermission()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das den `PushPermissionStatus` der anfragenden Webanwendung auflöst, der einer von `granted`, `denied` oder `default` sein wird. Ersetzt durch {{domxref("PushManager.permissionState()")}}.
- {{domxref("PushManager.register()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Abonniert ein Push-Abonnement. Ersetzt durch {{domxref("PushManager.subscribe()")}}.
- {{domxref("PushManager.registrations()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Ruft bestehende Push-Abonnements ab. Ersetzt durch {{domxref("PushManager.getSubscription()")}}.
- {{domxref("PushManager.unregister()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Heben Sie die Registrierung auf und löschen Sie einen angegebenen Abonnementendpunkt. In der aktualisierten API wird ein Abonnement abgemeldet, indem die {{domxref("PushSubscription.unsubscribe()")}}-Methode aufgerufen wird.

## Beispiel

```js
this.onpush = (event) => {
  console.log(event.data);
  // Von hier aus können wir die Daten in IndexedDB schreiben, sie an
  // offene Fenster senden, eine Benachrichtigung anzeigen usw.
};

navigator.serviceWorker
  .register("serviceworker.js")
  .then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.pushManager.subscribe().then(
      (pushSubscription) => {
        console.log(pushSubscription.endpoint);
        // Die für den Anwendungsserver erforderlichen Push-Abonnementdetails
        // sind jetzt verfügbar und können ihm beispielsweise
        // über die fetch() API gesendet werden.
      },
      (error) => {
        console.error(error);
      },
    );
  });
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Push-API](/de/docs/Web/API/Push_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
