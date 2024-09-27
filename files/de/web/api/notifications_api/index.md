---
title: Notifications API
slug: Web/API/Notifications_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die Notifications API ermöglicht es Webseiten, die Anzeige von Systembenachrichtigungen für den Endnutzer zu steuern. Diese liegen außerhalb des Viewports des obersten Browsing-Kontexts, sodass sie auch angezeigt werden können, wenn der Benutzer die Tabs gewechselt hat oder zu einer anderen App gewechselt ist. Die API ist so konzipiert, dass sie mit bestehenden Benachrichtigungssystemen auf verschiedenen Plattformen kompatibel ist.

## Konzepte und Verwendung

Auf unterstützten Plattformen umfasst das Anzeigen einer Systembenachrichtigung im Allgemeinen zwei Dinge. Zuerst muss der Benutzer der aktuellen Herkunft die Erlaubnis erteilen, Systembenachrichtigungen anzuzeigen, was in der Regel erfolgt, wenn die App oder Website initialisiert wird, mithilfe der Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static).
Diese Methode sollte nur beim Handling einer Benutzeraktion aufgerufen werden, z. B. bei der Verarbeitung eines Mausklicks. Zum Beispiel:

```js
btn.addEventListener("click", () => {
  let promise = Notification.requestPermission();
  // wait for permission
});
```

Dies wird einen Anfragendialog erzeugen, ähnlich wie:

![Ein Dialogfeld, das den Benutzer fragt, ob er Benachrichtigungen von dieser Herkunft erlauben möchte. Es gibt Optionen, Benachrichtigungen niemals oder zu erlauben.](screen_shot_2019-12-11_at_9.59.14_am.png)

Von hier aus kann der Benutzer wählen, ob er Benachrichtigungen von dieser Herkunft zulassen oder blockieren möchte. Sobald eine Entscheidung getroffen wurde, bleibt die Einstellung in der Regel für die aktuelle Sitzung bestehen.

Als Nächstes wird eine neue Benachrichtigung mit dem [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor erstellt. Dieser muss ein Titelargument erhalten und kann optional mit einem Optionsobjekt übergeben werden, um Optionen wie Textrichtung, Mitteilungstext, anzuzeigendes Symbol, abzuspielenden Benachrichtigungston und mehr anzugeben.

Darüber hinaus spezifiziert die Notifications API-Spezifikation eine Reihe von Ergänzungen zur [ServiceWorker API](/de/docs/Web/API/Service_Worker_API), um Service Worker zu ermöglichen, Benachrichtigungen auszulösen.

> [!NOTE]
> Um mehr über die Verwendung von Benachrichtigungen in Ihrer eigenen App zu erfahren, lesen Sie [Using the Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API).

## Schnittstellen

- [`Notification`](/de/docs/Web/API/Notification)
  - : Definiert ein Benachrichtigungsobjekt.
- [`NotificationEvent`](/de/docs/Web/API/NotificationEvent)
  - : Repräsentiert ein Benachrichtigungsereignis, das auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird.

### Erweiterungen zu anderen Schnittstellen

- [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) Ereignis
  - : Tritt auf, wenn ein Benutzer auf eine angezeigte Benachrichtigung klickt.
- [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) Ereignis
  - : Tritt auf, wenn ein Benutzer eine angezeigte Benachrichtigung schließt.
- [`ServiceWorkerRegistration.getNotifications()`](/de/docs/Web/API/ServiceWorkerRegistration/getNotifications)
  - : Gibt eine Liste der Benachrichtigungen in der Reihenfolge zurück, in der sie von der aktuellen Herkunft über die aktuelle Service Worker-Registrierung erstellt wurden.
- [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)
  - : Zeigt die Benachrichtigung mit dem angeforderten Titel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
