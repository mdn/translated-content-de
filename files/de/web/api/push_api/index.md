---
title: Push API
slug: Web/API/Push_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Push API")}}{{AvailableInWorkers}}

Die **Push-API** ermöglicht es Webanwendungen, Nachrichten von einem Server zu empfangen, unabhängig davon, ob die Webanwendung im Vordergrund ist oder sogar derzeit im Benutzeragenten geladen ist. Dies ermöglicht es Entwicklern, asynchrone Benachrichtigungen und Aktualisierungen an Benutzer zu liefern, die sich dafür anmelden, was zu einer besseren Interaktion mit aktuellen Inhalten führt.

## Push-Konzepte und Nutzung

> [!WARNING]
> Bei der Implementierung von PushManager-Abonnements ist es äußerst wichtig, dass Sie Ihre App gegen CSRF/XSRF-Probleme schützen. Weitere Informationen finden Sie in den folgenden Artikeln:
>
> - [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
> - [Preventing CSRF and XSRF Attacks](https://blog.codinghorror.com/preventing-csrf-and-xsrf-attacks/)

Damit eine App Push-Nachrichten empfangen kann, muss ein aktiver [Service Worker](/de/docs/Web/API/Service_Worker_API) vorhanden sein. Wenn der Service Worker aktiv ist, kann er Push-Benachrichtigungen abonnieren, indem [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) verwendet wird.

Das resultierende [`PushSubscription`](/de/docs/Web/API/PushSubscription) enthält alle Informationen, die die Anwendung benötigt, um eine Push-Nachricht zu senden: ein Endpunkt und den Verschlüsselungsschlüssel, der zum Senden von Daten erforderlich ist.

Der Service Worker wird bei Bedarf gestartet, um eingehende Push-Nachrichten zu bearbeiten, die an den [`onpush`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)-Ereignishandler übermittelt werden. Dadurch können Apps auf empfangene Push-Nachrichten reagieren, zum Beispiel durch Anzeigen einer Benachrichtigung (unter Verwendung von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)).

Jedes Abonnement ist einzigartig für einen Service Worker. Der Endpunkt des Abonnements ist eine einzigartige [Capability-URL](https://www.w3.org/TR/capability-urls/): Das Wissen über den Endpunkt ist alles, was nötig ist, um eine Nachricht an Ihre Anwendung zu senden. Die Endpunkt-URL muss daher geheim gehalten werden, sonst könnten andere Anwendungen Push-Nachrichten an Ihre Anwendung senden.

Das Aktivieren eines Service Workers zur Zustellung einer Push-Nachricht kann zu einem erhöhten Ressourcenverbrauch führen, insbesondere der Batterie. Verschiedene Browser haben unterschiedliche Mechanismen zur Handhabung, es gibt derzeit keinen Standardmechanismus. Firefox erlaubt eine begrenzte Anzahl (Kontingent) an Push-Nachrichten, die an eine Anwendung gesendet werden dürfen, obwohl Push-Nachrichten, die Benachrichtigungen erzeugen, von diesem Limit ausgenommen sind. Das Limit wird jedes Mal zurückgesetzt, wenn die Seite besucht wird. In Chrome gibt es keine Limits.

## Schnittstellen

- [`PushEvent`](/de/docs/Web/API/PushEvent)
  - : Stellt eine Push-Aktion dar, die an den [Global Scope](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Es enthält Informationen, die von einer Anwendung an eine [`PushSubscription`](/de/docs/Web/API/PushSubscription) gesendet werden.
- [`PushManager`](/de/docs/Web/API/PushManager)
  - : Bietet eine Möglichkeit, Benachrichtigungen von Drittservern zu empfangen sowie URLs für Push-Benachrichtigungen anzufordern.
- [`PushMessageData`](/de/docs/Web/API/PushMessageData)
  - : Bietet Zugriff auf vom Server gesendete Push-Daten und enthält Methoden zur Bearbeitung der empfangenen Daten.
- [`PushSubscription`](/de/docs/Web/API/PushSubscription)
  - : Bietet die URL-Endpunkt eines Abonnements und ermöglicht das Abbestellen eines Push-Dienstes.
- [`PushSubscriptionOptions`](/de/docs/Web/API/PushSubscriptionOptions)
  - : Stellt die mit dem Push-Abonnement verbundenen Optionen dar.

## Service Worker-Erweiterungen

Die folgenden Erweiterungen der [Service Worker API](/de/docs/Web/API/Service_Worker_API) wurden in der Push-API-Spezifikation festgelegt, um einen Einstiegspunkt für die Nutzung von Push-Nachrichten bereitzustellen. Sie überwachen auch und reagieren auf Push- und Abonnementänderungs-Ereignisse.

- [`ServiceWorkerRegistration.pushManager`](/de/docs/Web/API/ServiceWorkerRegistration/pushManager) {{ReadOnlyInline}}
  - : Gibt einen Verweis auf die [`PushManager`](/de/docs/Web/API/PushManager)-Schnittstelle zurück, um Push-Abonnements zu verwalten, einschließlich Abonnieren, Abrufen eines aktiven Abonnements und Zugriff auf den Push-Berechtigungsstatus. Dies ist der Einstiegspunkt in die Nutzung von Push-Nachrichten.
- [`onpush`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)
  - : Ein Ereignishandler, der immer ausgelöst wird, wenn ein [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)-Ereignis auftritt; das heißt, wann immer eine Server-Push-Nachricht empfangen wird.
- [`onpushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
  - : Ein Ereignishandler, der immer dann ausgelöst wird, wenn ein [`pushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)-Ereignis auftritt; zum Beispiel, wenn ein Push-Abonnement ungültig geworden ist oder kurz davor steht, ungültig zu werden (z. B. wenn ein Push-Dienst ein Ablaufdatum festlegt).

## Beispiele

Das [ServiceWorker Cookbook](https://github.com/mdn/serviceworker-cookbook) von Mozilla enthält viele nützliche Push-Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Senden von VAPID-identifizierten WebPush-Benachrichtigungen über Mozillas Push-Dienst](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)
- [Überblick über Push-Benachrichtigungen](https://web.dev/articles/push-notifications-overview)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
