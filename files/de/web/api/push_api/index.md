---
title: Push API
slug: Web/API/Push_API
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{DefaultAPISidebar("Push API")}}{{AvailableInWorkers}}

Die **Push API** gibt Webanwendungen die Möglichkeit, Nachrichten von einem Server zu empfangen, unabhängig davon, ob die Webanwendung im Vordergrund ist oder sogar momentan geladen ist, in einem Benutzeragenten. Dies ermöglicht Entwicklern das Senden von asynchronen Benachrichtigungen und Updates an Benutzer, die sich dafür entscheiden, was zu besserer Interaktion mit zeitnahen neuen Inhalten führt.

## Push-Konzepte und Nutzung

> [!WARNING]
> Bei der Implementierung von `PushManager`-Abonnements ist es von entscheidender Bedeutung, dass Sie sich in Ihrer App gegen CSRF/XSRF-Probleme schützen. Weitere Informationen finden Sie in den folgenden Artikeln:
>
> - [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
> - [Verhinderung von CSRF- und XSRF-Angriffen](https://blog.codinghorror.com/preventing-csrf-and-xsrf-attacks/)

Damit eine App Push-Nachrichten empfangen kann, muss sie über einen aktiven [Service Worker](/de/docs/Web/API/Service_Worker_API) verfügen. Wenn der Service Worker aktiv ist, kann er sich für Push-Benachrichtigungen anmelden, indem er [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) verwendet.

Die resultierende [`PushSubscription`](/de/docs/Web/API/PushSubscription) enthält alle Informationen, die die Anwendung benötigt, um eine Push-Nachricht zu senden: einen Endpunkt und den Verschlüsselungsschlüssel, der zum Senden von Daten benötigt wird.

Der Service Worker wird bei Bedarf gestartet, um eingehende Push-Nachrichten zu bearbeiten, die an den [`onpush`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)-Ereignishandler geliefert werden. Dies ermöglicht es Apps, auf empfangene Push-Nachrichten zu reagieren, z. B. durch das Anzeigen einer Benachrichtigung (mithilfe von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).)

Jedes Abonnement ist einzigartig für einen Service Worker. Der Endpunkt für das Abonnement ist eine einzigartige [Capability-URL](https://www.w3.org/TR/capability-urls/): Das Wissen um den Endpunkt ist alles, was erforderlich ist, um eine Nachricht an Ihre Anwendung zu senden. Die Endpunkt-URL muss daher geheim gehalten werden, da ansonsten andere Anwendungen in der Lage sein könnten, Push-Nachrichten an Ihre Anwendung zu senden.

Das Aktivieren eines Service Workers zur Lieferung einer Push-Nachricht kann zu einem erhöhten Ressourcenverbrauch führen, insbesondere der Batterie. Verschiedene Browser haben unterschiedliche Mechanismen zur Handhabung dieses Problems, derzeit gibt es keinen Standardmechanismus. Firefox erlaubt eine begrenzte Anzahl (Kontingent) von Push-Nachrichten, die an eine Anwendung gesendet werden können, obwohl Push-Nachrichten, die Benachrichtigungen generieren, von diesem Limit befreit sind. Das Limit wird bei jedem Besuch der Site aktualisiert. In Chrome gibt es keine Begrenzungen.

## Schnittstellen

- [`PushEvent`](/de/docs/Web/API/PushEvent)
  - : Repräsentiert eine Push-Aktion, die an den [Global Scope](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Sie enthält Informationen, die von einer Anwendung an eine [`PushSubscription`](/de/docs/Web/API/PushSubscription) gesendet werden.
- [`PushManager`](/de/docs/Web/API/PushManager)
  - : Bietet eine Möglichkeit, Benachrichtigungen von Drittanbieter-Servern zu empfangen sowie URLs für Push-Benachrichtigungen anzufordern.
- [`PushMessageData`](/de/docs/Web/API/PushMessageData)
  - : Bietet Zugriff auf Push-Daten, die von einem Server gesendet werden, und enthält Methoden zur Bearbeitung der empfangenen Daten.
- [`PushSubscription`](/de/docs/Web/API/PushSubscription)
  - : Stellt die URL des Abonnementendpunkts bereit und ermöglicht das Abmelden von einem Push-Dienst.
- [`PushSubscriptionOptions`](/de/docs/Web/API/PushSubscriptionOptions)
  - : Repräsentiert die mit dem Push-Abonnement verbundenen Optionen.

## Ergänzungen für Service Worker

Die folgenden Ergänzungen zur [Service Worker API](/de/docs/Web/API/Service_Worker_API) wurden in der Push API-Spezifikation angegeben, um einen Einstiegspunkt für die Nutzung von Push-Nachrichten bereitzustellen. Sie überwachen und reagieren auch auf Push- und Abonnementänderungsereignisse.

- [`ServiceWorkerRegistration.pushManager`](/de/docs/Web/API/ServiceWorkerRegistration/pushManager) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf die [`PushManager`](/de/docs/Web/API/PushManager)-Schnittstelle zum Verwalten von Push-Abonnements zurück, einschließlich des Abonnierens, Abrufens eines aktiven Abonnements und Zugriffs auf den Push-Berechtigungsstatus. Dies ist der Einstiegspunkt in die Nutzung von Push-Nachrichten.
- [`onpush`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)
  - : Ein Ereignishandler, der jedes Mal ausgelöst wird, wenn ein [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)-Ereignis auftritt; das heißt, jedes Mal, wenn eine Server-Push-Nachricht empfangen wird.
- [`onpushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
  - : Ein Ereignishandler, der jedes Mal ausgelöst wird, wenn ein [`pushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)-Ereignis auftritt; zum Beispiel, wenn ein Push-Abonnement ungültig gemacht wurde oder kurz davor steht, ungültig gemacht zu werden (z.B. wenn ein Push-Dienst ein Ablaufdatum setzt.)

## Beispiele

Mozillas [ServiceWorker Cookbook](https://github.com/mdn/serviceworker-cookbook) enthält viele nützliche Push-Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Senden von VAPID-identifizierten WebPush-Benachrichtigungen über Mozillas Push-Dienst](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)
- [Überblick über Push-Benachrichtigungen](https://web.dev/articles/push-notifications-overview)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
