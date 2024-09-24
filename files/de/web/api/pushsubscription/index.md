---
title: PushSubscription
slug: Web/API/PushSubscription
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `PushSubscription`-Interface der [Push API](/de/docs/Web/API/Push_API) bietet die URL-Endpunkt einer Abonnement und ermöglicht das Abmelden von einem Push-Dienst.

Eine Instanz dieses Interfaces kann serialisiert werden.

## Instanz-Eigenschaften

- {{domxref("PushSubscription.endpoint")}} {{ReadOnlyInline}}
  - : Ein String, der den Endpunkt enthält, der mit dem Push-Abonnement verbunden ist.
- {{domxref("PushSubscription.expirationTime")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}} der Ablaufzeit des Abonnements, falls vorhanden, andernfalls null.
- {{domxref("PushSubscription.options")}} {{ReadOnlyInline}}
  - : Ein Objekt, das die Optionen enthält, die zur Erstellung des Abonnements verwendet wurden.
- {{domxref("PushSubscription.subscriptionId")}} {{deprecated_inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Ein String, der die mit dem Push-Abonnement verbundene Abonnement-ID enthält.

## Instanz-Methoden

- {{domxref("PushSubscription.getKey()")}}
  - : Gibt ein {{jsxref("ArrayBuffer")}} zurück, das den öffentlichen Schlüssel des Clients enthält, der dann zu einem Server gesendet und zur Verschlüsselung von Push-Nachrichtendaten verwendet werden kann.
- {{domxref("PushSubscription.toJSON()")}}
  - : Standard-Serializer — gibt eine JSON-Darstellung der Abonnementeigenschaften zurück.
- {{domxref("PushSubscription.unsubscribe()")}}
  - : Startet den asynchronen Prozess des Abmeldens vom Push-Dienst und gibt ein {{jsxref("Promise")}} zurück, das sich auf einen booleschen Wert auflöst, wenn das aktuelle Abonnement erfolgreich abgemeldet wurde.

## Beispiel

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    subscription
      .unsubscribe()
      .then((successful) => {
        // You've successfully unsubscribed
      })
      .catch((e) => {
        // Unsubscribing failed
      });
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Push API](/de/docs/Web/API/Push_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
