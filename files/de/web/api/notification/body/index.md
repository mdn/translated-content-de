---
title: "Notification: body-Eigenschaft"
short-title: body
slug: Web/API/Notification/body
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die schreibgeschützte **`body`**-Eigenschaft des [`Notification`](/de/docs/Web/API/Notification)-Interfaces gibt den Textkörper der Benachrichtigung an, wie in der `body`-Option des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors angegeben.

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
