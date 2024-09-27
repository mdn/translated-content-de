---
title: "Benachrichtigung: Icon-Eigenschaft"
short-title: icon
slug: Web/API/Notification/icon
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`icon`** des [`Notification`](/de/docs/Web/API/Notification)-Interfaces enthält die URL eines Icons, das als Teil der Benachrichtigung angezeigt wird, wie im `icon`-Parameter des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors angegeben.

## Wert

Ein String.

## Beispiele

In unserer [To-do-Liste-App](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([die App live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)) verwenden wir den [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor, um eine Benachrichtigung auszulösen. Wir übergeben Argumente, um den Text, das Icon und den Titel zu spezifizieren, den wir möchten.

```js
const notification = new Notification("To do list", {
  body: text,
  icon: img,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
