---
title: PushEvent
slug: Web/API/PushEvent
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`PushEvent`**-Interface der [Push-API](/de/docs/Web/API/Push_API) repräsentiert eine empfangene Push-Nachricht. Dieses Ereignis wird an den [globalen Bereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet. Es enthält die Informationen, die von einem Anwendungsserver an ein [`PushSubscription`](/de/docs/Web/API/PushSubscription) gesendet wurden.

{{InheritanceDiagram}}

## Konstruktor

- [`PushEvent()`](/de/docs/Web/API/PushEvent/PushEvent)
  - : Erstellt ein neues `PushEvent`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent). Zusätzliche Eigenschaften:_

- [`PushEvent.data`](/de/docs/Web/API/PushEvent/data) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf ein [`PushMessageData`](/de/docs/Web/API/PushMessageData)-Objekt zurück, das Daten enthält, die an das [`PushSubscription`](/de/docs/Web/API/PushSubscription) gesendet wurden.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

## Beispiele

Das folgende Beispiel entnimmt Daten aus einem `PushEvent` und zeigt diese auf allen Clients des Service Workers an.

```js
self.addEventListener("push", (event) => {
  if (!(self.Notification && self.Notification.permission === "granted")) {
    return;
  }

  const data = event.data?.json() ?? {};
  const title = data.title || "Something Has Happened";
  const message =
    data.message || "Here's something you might want to check out.";
  const icon = "images/new-notification.png";

  const notification = new self.Notification(title, {
    body: message,
    tag: "simple-push-demo-notification",
    icon,
  });

  notification.addEventListener("click", () => {
    clients.openWindow(
      "https://example.blog.com/2015/03/04/something-new.html",
    );
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
