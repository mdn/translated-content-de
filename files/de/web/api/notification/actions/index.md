---
title: "Notification: actions Eigenschaft"
short-title: actions
slug: Web/API/Notification/actions
l10n:
  sourceCommit: 66be0a23be754791266009f1044e2238c27332b4
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`actions`**-Eigenschaft des [`Notification`](/de/docs/Web/API/Notification)-Interfaces stellt die Aktionen zur Verfügung, die Benutzer beim Interagieren mit der Benachrichtigung auswählen können.

## Wert

Ein schreibgeschütztes Array von Aktionen.
Jedes Element im Array ist ein Objekt mit den folgenden Komponenten:

- `action`
  - : Ein String zur Identifizierung einer Benutzeraktion, die in der Benachrichtigung angezeigt wird.
- `title`
  - : Ein String, der den Aktionstext enthält, der dem Benutzer angezeigt werden soll.
- `icon`
  - : Ein String, der die URL eines Symbols enthält, das mit der Aktion angezeigt wird.
- `navigate` {{optional_inline}} {{experimental_inline}}
  - : Ein String, der eine URL enthält, zu der navigiert werden soll, wenn der Benutzer diese Aktion aktiviert.
    Wenn festgelegt, navigiert der Benutzeragent zu dieser URL, anstatt das [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)-Ereignis auszulösen.
    Weitere Informationen finden Sie unter [`Notification.navigate`](/de/docs/Web/API/Notification/navigate).

## Beschreibung

Benachrichtigungsaktionen sind Schaltflächen oder Steuerelemente, die innerhalb von [persistenten Benachrichtigungen](/de/docs/Web/API/Notifications_API#persistent_and_non-persistent_notifications) erscheinen.
Sie werden mit der [`actions`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification#actions)-Option des zweiten Arguments der [`showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)-Methode gesetzt.
Beachten Sie, dass Aktionen für nicht-persistente Benachrichtigungen nicht verfügbar sind.
Wenn Sie ein `options`-Objekt mit einer `actions`-Eigenschaft an den [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor übergeben, die nicht `null` ist, wird ein `TypeError` ausgelöst.

Das Klicken auf die Schaltfläche, die einer Aktion zugeordnet ist, navigiert zu der im [`navigate`](#navigate)-Attribut angegebenen URL, falls eine festgelegt ist.
Andernfalls löst es ein [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)-Ereignis im Service Worker aus, das die ausgewählte Aktion (und die zugehörige `Notification`-Instanz) einschließt, sodass der Worker damit umgehen kann, ohne dass der Benutzer jemals zu Ihrer Seite wechseln muss.

> [!NOTE]
> Browser beschränken typischerweise die maximale Anzahl an Aktionen, die sie für eine bestimmte Benachrichtigung anzeigen.
> Überprüfen Sie die statische [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static)-Eigenschaft, um die Grenze zu bestimmen.

## Beispiele

### Grundlegende Verwendung

Der folgende Code zeigt, wie ein Service Worker auf das `notificationclick`-Ereignis horchen könnte und es verwendet, um sowohl die geklickte Aktion als auch ein Array aller Aktionen abzurufen.

```js
// sw.js
self.addEventListener("notificationclick", (event) => {
  const clickedAction = event.action; // e.g. "reply" or "" if body was clicked

  // Read all defined actions
  const notification = event.notification; // the Notification object
  console.log(notification.actions); // full array of action objects

  notification.close();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static)
