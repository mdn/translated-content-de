---
title: "PushEvent: data-Eigenschaft"
short-title: data
slug: Web/API/PushEvent/data
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die schreibgeschützte Eigenschaft `data` der **`PushEvent`**-Schnittstelle gibt eine Referenz auf ein {{domxref("PushMessageData")}}-Objekt zurück, das Daten enthält, die an das {{domxref("PushSubscription")}} gesendet wurden.

## Wert

Ein {{domxref("PushMessageData")}}-Objekt oder `null`, wenn kein `data`-Element übergeben wird, wenn die Ereignisinstanz initialisiert wird.

## Beispiele

Das folgende Beispiel nimmt Daten von einem PushEvent und zeigt sie auf allen Clients der Service Workers an.

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
