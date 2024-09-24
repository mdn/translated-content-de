---
title: "Benachrichtigung: body-Eigenschaft"
short-title: body
slug: Web/API/Notification/body
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`body`** schreibgeschützte Eigenschaft der
{{domxref("Notification")}} Schnittstelle gibt den Textkörper der Benachrichtigung an, wie
im `body`-Parameter des
{{domxref("Notification.Notification","Notification()")}} Konstruktors angegeben.

## Wert

Ein String.

## Beispiele

```js
function spawnNotification(theBody, theIcon, theTitle) {
  const options = {
    body: theBody,
    icon: theIcon,
  };
  const n = new Notification(theTitle, options);

  console.log(n.body);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
