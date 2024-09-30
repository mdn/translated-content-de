---
title: PushSubscription
slug: Web/API/PushSubscription
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `PushSubscription`-Interface der [Push API](/de/docs/Web/API/Push_API) bietet die URL-Endpunkt einer Subscription und ermöglicht das Abmelden von einem Push-Dienst.

Eine Instanz dieses Interfaces kann serialisiert werden.

## Instanzeigenschaften

- [`PushSubscription.endpoint`](/de/docs/Web/API/PushSubscription/endpoint) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die den mit der Push-Subscription verknüpften Endpunkt enthält.
- [`PushSubscription.expirationTime`](/de/docs/Web/API/PushSubscription/expirationTime) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) der Ablaufzeit der Subscription, wenn vorhanden, oder null andernfalls.
- [`PushSubscription.options`](/de/docs/Web/API/PushSubscription/options) {{ReadOnlyInline}}
  - : Ein Objekt mit den Optionen, die zum Erstellen der Subscription verwendet wurden.
- [`PushSubscription.subscriptionId`](/de/docs/Web/API/PushSubscription/subscriptionId) {{deprecated_inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Eine Zeichenkette, die die mit der Push-Subscription verknüpfte Subscription-ID enthält.

## Instanzmethoden

- [`PushSubscription.getKey()`](/de/docs/Web/API/PushSubscription/getKey)
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der den öffentlichen Schlüssel des Clients enthält, der dann an einen Server gesendet und zur Verschlüsselung von Push-Nachrichtendaten verwendet werden kann.
- [`PushSubscription.toJSON()`](/de/docs/Web/API/PushSubscription/toJSON)
  - : Standard-Serializer — gibt eine JSON-Darstellung der Subscription-Eigenschaften zurück.
- [`PushSubscription.unsubscribe()`](/de/docs/Web/API/PushSubscription/unsubscribe)
  - : Startet den asynchronen Prozess des Abmeldens vom Push-Dienst und gibt ein {{jsxref("Promise")}} zurück, das sich zu einem booleschen Wert auflöst, wenn die aktuelle Subscription erfolgreich abgemeldet wurde.

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
