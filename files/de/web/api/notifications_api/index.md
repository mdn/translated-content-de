---
title: Notifications API
slug: Web/API/Notifications_API
l10n:
  sourceCommit: 8a6e8b53625bddb3af2cf2fb927cb3e430b12ba2
---

{{DefaultAPISidebar("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Das Notifications API ermöglicht es Webseiten, die Anzeige von Systembenachrichtigungen für den Endbenutzer zu steuern. Diese sind außerhalb des Ansichtsbereichs des obersten Browsing-Kontextes, sodass sie angezeigt werden können, selbst wenn der Benutzer die Tabs gewechselt hat oder zu einer anderen App gegangen ist. Das API ist darauf ausgelegt, mit vorhandenen Benachrichtigungssystemen auf verschiedenen Plattformen kompatibel zu sein.

## Konzepte und Nutzung

Das Anzeigen einer Systembenachrichtigung erfordert in der Regel zuerst die Erlaubnis des Benutzers, die Funktion zu nutzen, und dann das Erstellen einer Benachrichtigung.

### Benachrichtigungen erfordern Benutzererlaubnis

Um Benachrichtigungen zu nutzen, muss der Benutzer der aktuellen Herkunft die Erlaubnis erteilen, Systembenachrichtigungen anzuzeigen. Dies geschieht in der Regel, wenn die App oder Website initialisiert wird, mithilfe der Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static). Diese Methode sollte nur aufgerufen werden, wenn eine Benutzeraktion verarbeitet wird, wie z. B. das Verarbeiten eines Mausklicks. Zum Beispiel:

```js
btn.addEventListener("click", () => {
  let promise = Notification.requestPermission();
  // wait for permission
});
```

Dies wird ein Anforderungsdialogfeld erzeugen, ähnlich dem folgenden:

![Ein Dialogfeld, das den Benutzer fragt, ob Benachrichtigungen von dieser Herkunft zugelassen werden sollen. Es gibt Optionen, um Benachrichtigungen nie zuzulassen oder zuzulassen.](screen_shot_2019-12-11_at_9.59.14_am.png)

Von hier aus kann der Benutzer wählen, Benachrichtigungen von dieser Herkunft zuzulassen oder zu blockieren. Sobald eine Wahl getroffen wurde, wird die Einstellung normalerweise für die aktuelle Sitzung beibehalten.

### Anzeige und Verarbeitung von Benachrichtigungen

Benachrichtigungen werden mit dem Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification) erstellt. Dieser muss ein Title-Argument übergeben bekommen und kann optional ein Parameter erhalten, um Optionen wie Textausrichtung, Textinhalt, anzuzeigendes Symbol, abzuspielender Benachrichtigungston und mehr zu spezifizieren.

Zum Beispiel zeigt der folgende Code, wie Sie eine Benachrichtigung erstellen können, die die Option [`navigate`](/de/docs/Web/API/Notification/Notification#navigate) setzt, um eine URL zu spezifizieren, die geöffnet wird, wenn die Benachrichtigung akzeptiert wird (Sie können auch Klick-Handler definieren, um Benachrichtigungsaktionen zu verarbeiten).

```js
if (Notification.permission === "granted") {
  const notification = new Notification("New message from Alice", {
    body: "Hey, are you free for lunch?",
    navigate: "/messages/alice",
  });
}
```

Für weitere Anwendungsbeispiele siehe [Verwendung des Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API).

### Persistente und nicht-persistente Benachrichtigungen

Das Notifications API unterstützt zwei Arten von Benachrichtigungen:

- **Nicht-persistent Benachrichtigungen** werden in einem Browsing-Kontext erstellt, wie etwa einer Webseite oder einem Tab. Ihre Lebensdauer ist an die Lebensdauer der Seite gebunden – wenn die Seite geschlossen wird, kann nicht mehr mit der Benachrichtigung interagiert werden.

  Sie werden mit dem Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification) erstellt und lösen Ereignisse wie [`click`](/de/docs/Web/API/Notification/click_event) direkt auf der `Notification`-Instanz aus.

- **Persistente Benachrichtigungen** werden von einem Service Worker erstellt und können über die Lebensdauer einer einzelnen Seite hinaus interaktiv bleiben.

  Sie werden mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) von einem Service Worker erstellt und lösen [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) und [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) Ereignisse im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus.

## Schnittstellen

- [`Notification`](/de/docs/Web/API/Notification)
  - : Definiert ein Benachrichtigungsobjekt. Wenn aktiviert, löst eine nicht-persistent Benachrichtigung ein [`click`](/de/docs/Web/API/Notification/click_event) Ereignis aus, es sei denn, eine [`navigate`](/de/docs/Web/API/Notification/navigate) URL ist gesetzt, in diesem Fall navigiert der Benutzeragent stattdessen zu dieser URL.
- [`NotificationEvent`](/de/docs/Web/API/NotificationEvent)
  - : Repräsentiert ein Benachrichtigungsereignis, das im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird.

### Erweiterungen anderer Schnittstellen

- [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignis
  - : Tritt auf, wenn ein Benutzer auf eine angezeigte, persistente Benachrichtigung klickt, es sei denn, eine [`navigate`](/de/docs/Web/API/Notification/navigate) URL ist gesetzt.
- [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) Ereignis
  - : Tritt auf, wenn ein Benutzer eine angezeigte Benachrichtigung schließt.
- [`ServiceWorkerRegistration.getNotifications()`](/de/docs/Web/API/ServiceWorkerRegistration/getNotifications)
  - : Gibt eine Liste der Benachrichtigungen in der Reihenfolge zurück, in der sie von der aktuellen Herkunft über die aktuelle Service Worker Registratur erstellt wurden.
- [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)
  - : Zeigt die Benachrichtigung mit dem angeforderten Titel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung des Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
