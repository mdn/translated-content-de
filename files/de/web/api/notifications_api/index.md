---
title: Notifications API
slug: Web/API/Notifications_API
l10n:
  sourceCommit: 66be0a23be754791266009f1044e2238c27332b4
---

{{DefaultAPISidebar("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die Notifications API ermöglicht es Webseiten, die Anzeige von Systembenachrichtigungen für den Endbenutzer zu steuern.

## Konzepte und Verwendung

Eine Webbenachrichtigung ist ein Nachrichtenfenster, das verwendet wird, um Benutzer zu informieren, wenn Ereignisse in Webanwendungen auftreten. Webbenachrichtigungen werden durch das native Benachrichtigungssystem des Betriebssystems gerendert, wodurch sie genauso wie Benachrichtigungen von jeder anderen App auf der Plattform angezeigt werden. Da die zugrunde liegende OS-Webbenachrichtigungen rendert, sind sie außerhalb des Viewports des obersten Browsingkontextes und können angezeigt werden, selbst wenn der Benutzer die Tabs gewechselt oder zu einer anderen App gewechselt hat.

### Dauerhafte und nicht dauerhafte Benachrichtigungen

Die Notifications API unterstützt zwei Arten von Benachrichtigungen:

- **Nicht dauerhafte Benachrichtigungen** werden in einem Browsingkontext, wie einer Webseite oder einem Tab, erstellt.
  Ihre Lebensdauer ist an die Lebensdauer der Seite gebunden – wenn die Seite geschlossen wird, kann nicht mehr mit der Benachrichtigung interagiert werden.

  Sie werden mit dem [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor erstellt und lösen Ereignisse wie [`click`](/de/docs/Web/API/Notification/click_event) direkt auf der `Notification`-Instanz aus.

- **Dauerhafte Benachrichtigungen** werden von einem Service Worker erstellt und können über die Lebensdauer einer einzelnen Seite hinaus interaktiv bleiben.

  Sie werden durch Aufruf von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) innerhalb eines Service Workers erstellt und lösen [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)- und [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event)-Ereignisse auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus.

> [!NOTE]
> Wenn Ihr Code auf mobilen Geräten laufen muss, müssen Sie **dauerhafte Benachrichtigungen** verwenden!
> Der [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor wird in den meisten mobilen Browsern eine {{jsxref("TypeError")}} werfen.

### Benachrichtigungen erfordern Benutzererlaubnis

Um Benachrichtigungen verwenden zu können, muss der Benutzer der aktuellen Origin die Erlaubnis erteilen, Systembenachrichtigungen anzuzeigen.
Dies geschieht in der Regel, wenn die App oder die Seite initialisiert wird, mithilfe der Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static).
Diese Methode sollte nur aufgerufen werden, wenn eine Benutzeraktion ausgeführt wird, zum Beispiel bei der Behandlung eines Mausklicks.
Zum Beispiel:

```js
btn.addEventListener("click", () => {
  let promise = Notification.requestPermission();
  // wait for permission
});
```

Dies wird einen Anforderungsdialog wie folgt anzeigen:

![Ein Dialogfenster, das den Benutzer fragt, ob Benachrichtigungen von dieser Origin erlaubt werden sollen. Es gibt Optionen, um niemals zu erlauben oder Benachrichtigungen zu erlauben.](screen_shot_2019-12-11_at_9.59.14_am.png)

Hier kann der Benutzer entscheiden, ob Benachrichtigungen von dieser Origin erlaubt oder blockiert werden sollen.
Sobald eine Entscheidung getroffen wurde, bleibt die Einstellung in der Regel für die aktuelle Sitzung bestehen.

### Benachrichtigungsanzeige und -verarbeitung

Benachrichtigungen werden mit dem [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor erstellt.
Diesem muss ein Titelargument übergeben werden, und es kann optional ein Parameter übergeben werden, um Optionen wie Textausrichtung, Textkörper, anzuzeigendes Symbol, abzuspielender Benachrichtigungston und mehr anzugeben.

Zum Beispiel zeigt der folgende Code, wie Sie eine Benachrichtigung erstellen könnten, die die [`navigate`](/de/docs/Web/API/Notification/Notification#navigate)-Option festlegt und eine URL angibt, die geöffnet wird, wenn die Benachrichtigung akzeptiert wird (Sie können auch Klickhandler definieren, um Benachrichtigungsaktionen zu verarbeiten).

```js
if (Notification.permission === "granted") {
  const notification = new Notification("New message from Alice", {
    body: "Hey, are you free for lunch?",
    navigate: "/messages/alice",
  });
}
```

Für weitere Anwendungsbeispiele siehe [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API).

## Schnittstellen

- [`Notification`](/de/docs/Web/API/Notification)
  - : Definiert ein Benachrichtigungsobjekt.
    Wenn aktiviert, löst eine nicht dauerhafte Benachrichtigung ein [`click`](/de/docs/Web/API/Notification/click_event)-Ereignis aus, es sei denn, eine [`navigate`](/de/docs/Web/API/Notification/navigate)-URL ist festgelegt, in diesem Fall navigiert der User Agent zu dieser URL.
- [`NotificationEvent`](/de/docs/Web/API/NotificationEvent)
  - : Repräsentiert ein Benachrichtigungsereignis, das auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird.

### Erweiterungen zu anderen Schnittstellen

- [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignis
  - : Tritt auf, wenn ein Benutzer auf eine angezeigte dauerhafte Benachrichtigung klickt, es sei denn, eine [`navigate`](/de/docs/Web/API/Notification/navigate)-URL ist festgelegt.
- [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) Ereignis
  - : Tritt auf, wenn ein Benutzer eine angezeigte Benachrichtigung schließt.
- [`ServiceWorkerRegistration.getNotifications()`](/de/docs/Web/API/ServiceWorkerRegistration/getNotifications)
  - : Gibt eine Liste der Benachrichtigungen in der Reihenfolge zurück, in der sie von der aktuellen Origin über die aktuelle Service Worker Registrierung erstellt wurden.
- [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)
  - : Zeigt die Benachrichtigung mit dem angeforderten Titel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
