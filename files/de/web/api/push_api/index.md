---
title: Push API
slug: Web/API/Push_API
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{DefaultAPISidebar("Push API")}}{{AvailableInWorkers}}

Die **Push-API** ermöglicht es Webanwendungen, Nachrichten von einem Server zu empfangen, unabhängig davon, ob sich die Web-App im Vordergrund befindet oder aktuell in einem Benutzeragenten geladen ist. Dadurch können Entwickler asynchrone Benachrichtigungen und Updates an Benutzer senden, die sich dafür entschieden haben, was zu einer besseren Interaktion mit zeitgerechten neuen Inhalten führt.

## Push-Konzepte und Nutzung

> [!WARNING]
> Beim Implementieren von `PushManager`-Abonnements ist es äußerst wichtig, dass Sie sich in Ihrer App gegen CSRF/XSRF-Probleme schützen. Siehe die folgenden Artikel für weitere Informationen:
>
> - [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
> - [Preventing CSRF and XSRF Attacks](https://blog.codinghorror.com/preventing-csrf-and-xsrf-attacks/)

Damit eine App Push-Nachrichten empfangen kann, muss ein aktiver [Service Worker](/de/docs/Web/API/Service_Worker_API) vorhanden sein. Wenn der Service Worker aktiv ist, kann er sich für Push-Benachrichtigungen mithilfe von [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) anmelden.

Das resultierende [`PushSubscription`](/de/docs/Web/API/PushSubscription) enthält alle Informationen, die die Anwendung benötigt, um eine Push-Nachricht zu senden: einen Endpunkt und den Verschlüsselungsschlüssel, der zum Senden von Daten erforderlich ist.

Der Service Worker wird bei Bedarf gestartet, um eingehende Push-Nachrichten zu verarbeiten, die an den [`onpush`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)-Ereignishandler geliefert werden. Dadurch können Apps reagieren, wenn Push-Nachrichten empfangen werden, beispielsweise indem eine Benachrichtigung angezeigt wird (mithilfe von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)).

Jedes Abonnement ist einzigartig für einen Service Worker. Der Endpunkt des Abonnements ist eine einzigartige [Capability-URL](https://w3ctag.github.io/capability-urls/): Das Wissen um den Endpunkt ist alles, was erforderlich ist, um eine Nachricht an Ihre Anwendung zu senden. Die Endpunkt-URL muss daher geheim gehalten werden, da sonst andere Anwendungen möglicherweise Push-Nachrichten an Ihre Anwendung senden können.

Das Aktivieren eines Service Workers zur Zustellung einer Push-Nachricht kann zu einem erhöhten Ressourcenverbrauch führen, insbesondere der Batterie. Verschiedene Browser haben unterschiedliche Methoden, um dies zu handhaben, es gibt derzeit keinen Standardmechanismus. Firefox erlaubt eine begrenzte Anzahl (Quote) von Push-Nachrichten an eine Anwendung, obwohl Push-Nachrichten, die Benachrichtigungen generieren, von diesem Limit ausgenommen sind. Das Limit wird jedes Mal erneuert, wenn die Seite besucht wird. In Chrome gibt es keine Limits.

## Schnittstellen

- [`PushEvent`](/de/docs/Web/API/PushEvent)
  - : Repräsentiert eine Push-Aktion, die an den [globalen Bereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Es enthält Informationen, die von einer Anwendung an eine [`PushSubscription`](/de/docs/Web/API/PushSubscription) gesendet werden.
- [`PushManager`](/de/docs/Web/API/PushManager)
  - : Bietet eine Möglichkeit, Benachrichtigungen von Drittanbieter-Servern zu erhalten sowie URLs für Push-Benachrichtigungen anzufordern.
- [`PushMessageData`](/de/docs/Web/API/PushMessageData)
  - : Bietet Zugriff auf Push-Daten, die von einem Server gesendet werden, und enthält Methoden zur Manipulation der empfangenen Daten.
- [`PushSubscription`](/de/docs/Web/API/PushSubscription)
  - : Bietet einen URL-Endpunkt eines Abonnements und ermöglicht das Abbestellen von einem Push-Dienst.
- [`PushSubscriptionOptions`](/de/docs/Web/API/PushSubscriptionOptions)
  - : Repräsentiert die mit dem Push-Abonnement verbundenen Optionen.

## Ergänzungen im Service Worker

Die folgenden Ergänzungen zur [Service Worker-API](/de/docs/Web/API/Service_Worker_API) wurden in der Push-API-Spezifikation festgelegt, um einen Einstiegspunkt für die Verwendung von Push-Nachrichten bereitzustellen. Sie überwachen auch und reagieren auf Push- und Abonnementänderungsereignisse.

- [`ServiceWorkerRegistration.pushManager`](/de/docs/Web/API/ServiceWorkerRegistration/pushManager) {{ReadOnlyInline}}
  - : Gibt eine Referenz zur [`PushManager`](/de/docs/Web/API/PushManager)-Schnittstelle zurück, um Push-Abonnements zu verwalten, einschließlich Anmelden, Abrufen eines aktiven Abonnements und Zugriff auf den Push-Berechtigungsstatus. Dies ist der Einstiegspunkt für die Nutzung von Push-Nachrichten.
- [`onpush`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)
  - : Ein Ereignishandler, der jedes Mal ausgelöst wird, wenn ein [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)-Ereignis auftritt, das heißt, wann immer eine Server-Push-Nachricht empfangen wird.
- [`onpushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
  - : Ein Ereignishandler, der ausgelöst wird, wenn ein [`pushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)-Ereignis auftritt; zum Beispiel, wenn ein Push-Abonnement ungültig geworden ist oder bald ungültig wird (z. B. wenn ein Push-Dienst ein Ablaufdatum festlegt).

## Beispiele

Mozillas [ServiceWorker Cookbook](https://github.com/mdn/serviceworker-cookbook) enthält viele nützliche Push-Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Versenden von VAPID-identifizierten WebPush-Benachrichtigungen über Mozillas Push-Dienst](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)
- [Übersicht über Push-Benachrichtigungen](https://web.dev/articles/push-notifications-overview)
- [Service Worker-API](/de/docs/Web/API/Service_Worker_API)
