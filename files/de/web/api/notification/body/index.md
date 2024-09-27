---
title: "Benachrichtigung: body-Eigenschaft"
short-title: body
slug: Web/API/Notification/body
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`body`** der Schnittstelle [`Notification`](/de/docs/Web/API/Notification) gibt den Textkörper der Benachrichtigung an, wie in der `body`-Option des Konstruktors [`Notification()`](/de/docs/Web/API/Notification/Notification) angegeben.

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
