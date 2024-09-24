---
title: Benachrichtigungen API
slug: Web/API/Notifications_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die Benachrichtigungen API ermöglicht es Webseiten, die Anzeige von Systembenachrichtigungen für den Endbenutzer zu steuern. Diese befinden sich außerhalb des Ansichtsbereichs des obersten Browsing-Kontexts und können daher angezeigt werden, auch wenn der Benutzer die Registerkarte gewechselt oder zu einer anderen Anwendung gewechselt hat. Die API ist so konzipiert, dass sie mit vorhandenen Benachrichtigungssystemen auf verschiedenen Plattformen kompatibel ist.

## Konzepte und Verwendung

Auf unterstützten Plattformen erfordert das Anzeigen einer Systembenachrichtigung im Allgemeinen zwei Dinge. Zuerst muss der Benutzer der aktuellen Herkunft die Erlaubnis erteilen, Systembenachrichtigungen anzuzeigen, was in der Regel geschieht, wenn die App oder Website initialisiert wird, mithilfe der Methode {{domxref("Notification.requestPermission_static", "Notification.requestPermission()")}}.
Diese Methode sollte nur beim Umgang mit einer Benutzeraktion aufgerufen werden, wie zum Beispiel beim Umgang mit einem Mausklick. Zum Beispiel:

```js
btn.addEventListener("click", () => {
  let promise = Notification.requestPermission();
  // auf Erlaubnis warten
});
```

Dies wird einen Anforderungsdialog öffnen, ähnlich dem Folgenden:

![Ein Dialogfeld, das den Benutzer auffordert, Benachrichtigungen von dieser Herkunft zuzulassen. Es gibt Optionen, Benachrichtigungen nie zuzulassen oder zuzulassen.](screen_shot_2019-12-11_at_9.59.14_am.png)

Hier kann der Benutzer wählen, ob er Benachrichtigungen von dieser Herkunft zulassen oder blockieren möchte. Sobald eine Auswahl getroffen wurde, wird die Einstellung in der Regel für die aktuelle Sitzung beibehalten.

Als nächstes wird eine neue Benachrichtigung mit dem Konstruktor {{domxref("Notification.Notification","Notification()")}} erstellt. Dieser muss ein Titel-Argument übergeben werden und kann optional ein Optionsobjekt erhalten, um Optionen anzugeben, wie den Textfluss, den Haupttext, das anzuzeigende Symbol, den abzuspielenden Benachrichtigungston und mehr.

Darüber hinaus spezifiziert die Benachrichtigungen API-Spezifikation eine Reihe von Ergänzungen zur [ServiceWorker API](/de/docs/Web/API/Service_Worker_API), um es Service Workern zu ermöglichen, Benachrichtigungen auszulösen.

> [!NOTE]
> Um mehr über die Verwendung von Benachrichtigungen in Ihrer eigenen App zu erfahren, lesen Sie [Verwendung der Benachrichtigungen API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API).

## Schnittstellen

- {{domxref("Notification")}}
  - : Definiert ein Benachrichtigungsobjekt.
- {{domxref("NotificationEvent")}}
  - : Repräsentiert ein Benachrichtigungsereignis, das im {{domxref("ServiceWorkerGlobalScope")}} eines {{domxref("ServiceWorker")}} ausgelöst wird.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("ServiceWorkerGlobalScope/notificationclick_event", "notificationclick")}} Ereignis
  - : Tritt auf, wenn ein Benutzer auf eine angezeigte Benachrichtigung klickt.
- {{domxref("ServiceWorkerGlobalScope/notificationclose_event", "notificationclose")}} Ereignis
  - : Tritt auf, wenn ein Benutzer eine angezeigte Benachrichtigung schließt.
- {{domxref("ServiceWorkerRegistration.getNotifications()")}}
  - : Gibt eine Liste der Benachrichtigungen in der Reihenfolge zurück, in der sie von der aktuellen Herkunft über die aktuelle Service Worker-Registrierung erstellt wurden.
- {{domxref("ServiceWorkerRegistration.showNotification()")}}
  - : Zeigt die Benachrichtigung mit dem angeforderten Titel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Benachrichtigungen API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
