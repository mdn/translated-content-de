---
title: "ServiceWorkerRegistration: pushManager Eigenschaft"
short-title: pushManager
slug: Web/API/ServiceWorkerRegistration/pushManager
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`pushManager`** schreibgeschützte Eigenschaft des
{{domxref("ServiceWorkerRegistration")}} Interfaces liefert eine Referenz auf das
{{domxref("PushManager")}} Interface zur Verwaltung von Push-Abonnements; dies umfasst
die Unterstützung für das Abonnieren, das Abrufen eines aktiven Abonnements und den Zugriff auf den Status der Push-Berechtigung.

## Wert

Ein {{domxref("PushManager")}} Objekt.

## Beispiele

```js
this.onpush = (event) => {
  console.log(event.data);
  // Von hier aus können wir die Daten in IndexedDB schreiben,
  // an beliebige offene Fenster senden, eine Benachrichtigung anzeigen, usw.
};

navigator.serviceWorker
  .register("serviceworker.js")
  .then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.pushManager.subscribe().then(
      (pushSubscription) => {
        console.log(pushSubscription.subscriptionId);
        console.log(pushSubscription.endpoint);
        // Die für den Anwendungsserver benötigten Details des Push-Abonnements
        // sind nun verfügbar und können z.B. mit der fetch() API an ihn gesendet werden.
      },
      (error) => {
        // Während der Entwicklung hilft es oft, Fehler im
        // Konsolenprotokoll zu verzeichnen. In einer Produktionsumgebung
        // könnte es sinnvoll sein, Informationen über Fehler auch
        // an den Anwendungsserver zurückzumelden.
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
