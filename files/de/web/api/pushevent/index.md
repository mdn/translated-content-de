---
title: PushEvent
slug: Web/API/PushEvent
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die **`PushEvent`**-Schnittstelle des [Push-API](/de/docs/Web/API/Push_API) stellt eine eingegangene Push-Nachricht dar. Dieses Ereignis wird an den [globalen Gültigkeitsbereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines {{domxref("ServiceWorker")}} gesendet. Es enthält die Informationen, die von einem Anwendungsserver an ein {{domxref("PushSubscription")}} gesendet wurden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("PushEvent.PushEvent", "PushEvent()")}}
  - : Erstellt ein neues `PushEvent`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("ExtendableEvent")}}. Zusätzliche Eigenschaften:_

- {{domxref("PushEvent.data")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz zu einem {{domxref("PushMessageData")}}-Objekt zurück, das Daten enthält, die an das {{domxref("PushSubscription")}} gesendet wurden.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, {{domxref("ExtendableEvent")}}_.

## Beispiele

Das folgende Beispiel nimmt Daten von einem `PushEvent` und zeigt sie in allen Clients des Service Workers an.

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

- [Push API](/de/docs/Web/API/Push_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
