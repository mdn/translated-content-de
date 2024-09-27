---
title: "PushEvent: data-Eigenschaft"
short-title: data
slug: Web/API/PushEvent/data
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die schreibgeschützte `data`-Eigenschaft der **`PushEvent`**-Schnittstelle gibt eine Referenz auf ein [`PushMessageData`](/de/docs/Web/API/PushMessageData)-Objekt zurück, das die an das [`PushSubscription`](/de/docs/Web/API/PushSubscription) gesendeten Daten enthält.

## Wert

Ein [`PushMessageData`](/de/docs/Web/API/PushMessageData)-Objekt oder `null`, wenn während der Initialisierung der Ereignisinstanz kein `data`-Mitglied übergeben wird.

## Beispiele

Das folgende Beispiel entnimmt die Daten aus einem PushEvent und zeigt sie in allen Clients der Service Worker an.

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

  const notification = new Notification(title, {
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
