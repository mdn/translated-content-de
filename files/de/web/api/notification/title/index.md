---
title: "Notification: title-Eigenschaft"
short-title: title
slug: Web/API/Notification/title
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`title`** schreibgeschützte Eigenschaft der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle gibt den Titel der Benachrichtigung an, wie im `title`-Parameter des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors angegeben.

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

  console.log(n.title);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
