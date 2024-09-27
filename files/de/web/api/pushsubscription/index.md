---
title: PushSubscription
slug: Web/API/PushSubscription
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `PushSubscription`-Interface der [Push-API](/de/docs/Web/API/Push_API) bietet einen URL-Endpunkt eines Abonnements und ermöglicht das Abmelden von einem Push-Dienst.

Eine Instanz dieses Interfaces kann serialisiert werden.

## Instanzeigenschaften

- [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint) {{ReadOnlyInline}}
  - : Ein String, der den mit dem Push-Abonnement verbundenen Endpunkt enthält.
- [`PushSubscription.expirationTime`](/de/docs/Web/API/PushSubscription/expirationTime) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) der Ablaufzeit des Abonnements, die mit dem Push-Abonnement verknüpft ist, falls vorhanden, oder andernfalls null.
- [`PushSubscription.options`](/de/docs/Web/API/PushSubscription/options) {{ReadOnlyInline}}
  - : Ein Objekt, das die Optionen enthält, die zum Erstellen des Abonnements verwendet wurden.
- [`PushSubscription.subscriptionId`](/de/docs/Web/API/PushSubscription/subscriptionId) {{deprecated_inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Ein String, der die mit dem Push-Abonnement verknüpfte Abonnement-ID enthält.

## Instanzmethoden

- [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey)
  - : Gibt ein {{jsxref("ArrayBuffer")}} zurück, welches den öffentlichen Schlüssel des Clients enthält, der dann an einen Server gesendet und zur Verschlüsselung von Push-Nachrichtendaten verwendet werden kann.
- [`PushSubscription.toJSON()`](/de/docs/Web/API/PushSubscription/toJSON)
  - : Standard-Serializer — gibt eine JSON-Darstellung der Abonnement-Eigenschaften zurück.
- [`PushSubscription.unsubscribe()`](/de/docs/Web/API/PushSubscription/unsubscribe)
  - : Startet den asynchronen Prozess der Abmeldung vom Push-Dienst, wobei ein {{jsxref("Promise")}} zurückgegeben wird, das sich zu einem booleschen Wert auflöst, wenn das aktuelle Abonnement erfolgreich abgemeldet wurde.

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

- [Push-API](/de/docs/Web/API/Push_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
