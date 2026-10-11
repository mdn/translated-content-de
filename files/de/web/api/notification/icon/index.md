---
title: "Notification: Eigenschaft icon"
short-title: icon
slug: Web/API/Notification/icon
l10n:
  sourceCommit: 922949d1d9793e97e4cf9f2513a967e74b0171cf
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`icon`** der Schnittstelle [`Notification`](/de/docs/Web/API/Notification) gibt einen String mit der URL eines kleinen Bildes zurück, das die Benachrichtigung ergänzt – beispielsweise ein App-Logo oder ein Foto der Person, die die Nachricht gesendet hat. Das Bild wird neben dem Titel und dem Text der Benachrichtigung angezeigt.

Unter [Benachrichtigungen mit verschiedenen Bildern](/de/docs/Web/API/ServiceWorkerRegistration/showNotification#notifications_with_different_images) finden Sie einen Vergleich der drei Bildoptionen.

## Wert

Ein String.

## Beispiele

In unserer [To-do-Listen-App](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([App live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)) verwenden wir den Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification), um eine Benachrichtigung auszulösen. Dabei übergeben wir Argumente, mit denen wir den gewünschten Text, das Symbol und den Titel festlegen.

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
