---
title: Notifications API
slug: Web/API/Notifications_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die Notifications API ermöglicht es Webseiten, die Anzeige von Systembenachrichtigungen für den Endbenutzer zu steuern. Diese befinden sich außerhalb des obersten Browsing-Kontext-Viewports und können daher auch angezeigt werden, wenn der Benutzer die Tabs gewechselt hat oder zu einer anderen App gegangen ist. Die API wurde entwickelt, um mit bestehenden Benachrichtigungssystemen auf verschiedenen Plattformen kompatibel zu sein.

## Konzepte und Anwendung

Auf unterstützten Plattformen umfasst das Anzeigen einer Systembenachrichtigung in der Regel zwei Dinge. Zuerst muss der Benutzer der aktuellen Quelle die Erlaubnis erteilen, Systembenachrichtigungen anzuzeigen, was normalerweise erfolgt, wenn die App oder Website initialisiert wird, und zwar mit der Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static).
Diese Methode sollte nur dann aufgerufen werden, wenn ein Benutzerereignis behandelt wird, beispielsweise bei einem Mausklick. Zum Beispiel:

```js
btn.addEventListener("click", () => {
  let promise = Notification.requestPermission();
  // wait for permission
});
```

Dies öffnet einen Anforderungsdialog, der folgendermaßen aussieht:

![Ein Dialogfeld, das den Benutzer fragt, ob er Benachrichtigungen von dieser Quelle zulassen möchte. Es gibt Optionen, Benachrichtigungen nie zu erlauben oder zu erlauben.](screen_shot_2019-12-11_at_9.59.14_am.png)

Hier kann der Benutzer wählen, ob er Benachrichtigungen von dieser Quelle zulassen oder blockieren möchte. Sobald eine Entscheidung getroffen wurde, bleibt die Einstellung in der Regel für die aktuelle Sitzung bestehen.

Als Nächstes wird eine neue Benachrichtigung mit dem [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor erstellt. Dieser muss ein Titel-Argument enthalten und kann optional ein Optionsobjekt erhalten, um Optionen wie Textausrichtung, Nachrichtentext, anzuzeigendes Symbol, abzuspielenden Benachrichtigungston und mehr anzugeben.

Darüber hinaus spezifiziert die Notifications API Spezifikation eine Reihe von Erweiterungen zur [ServiceWorker API](/de/docs/Web/API/Service_Worker_API), um es Service-Workern zu ermöglichen, Benachrichtigungen auszulösen.

> [!NOTE]
> Um mehr über die Verwendung von Benachrichtigungen in Ihrer eigenen App zu erfahren, lesen Sie [Using the Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API).

## Schnittstellen

- [`Notification`](/de/docs/Web/API/Notification)
  - : Definiert ein Benachrichtigungsobjekt.
- [`NotificationEvent`](/de/docs/Web/API/NotificationEvent)
  - : Repräsentiert ein Benachrichtigungsereignis, das im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird.

### Erweiterungen zu anderen Schnittstellen

- [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignis
  - : Tritt auf, wenn ein Benutzer auf eine angezeigte Benachrichtigung klickt.
- [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) Ereignis
  - : Tritt auf, wenn ein Benutzer eine angezeigte Benachrichtigung schließt.
- [`ServiceWorkerRegistration.getNotifications()`](/de/docs/Web/API/ServiceWorkerRegistration/getNotifications)
  - : Gibt eine Liste der Benachrichtigungen in der Reihenfolge zurück, in der sie von der aktuellen Quelle über die aktuelle Service-Worker-Registrierung erstellt wurden.
- [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)
  - : Zeigt die Benachrichtigung mit dem angeforderten Titel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
