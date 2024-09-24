---
title: Push-API
slug: Web/API/Push_API
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{DefaultAPISidebar("Push API")}}{{AvailableInWorkers}}

Die **Push-API** ermöglicht es Webanwendungen, Nachrichten von einem Server zu empfangen, unabhängig davon, ob die Webanwendung im Vordergrund ist oder derzeit im Benutzeragenten geladen ist. Dadurch können Entwickler asynchrone Benachrichtigungen und Updates an Nutzer senden, die sich dafür entscheiden, was zu einer besseren Interaktion mit zeitnahen neuen Inhalten führt.

## Push-Konzepte und Verwendung

> [!WARNING]
> Bei der Implementierung von PushManager-Abonnements ist es von entscheidender Bedeutung, sich gegen CSRF/XSRF-Probleme in Ihrer App zu schützen. Weitere Informationen finden Sie in den folgenden Artikeln:
>
> - [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
> - [Verhinderung von CSRF- und XSRF-Angriffen](https://blog.codinghorror.com/preventing-csrf-and-xsrf-attacks/)

Damit eine App Push-Nachrichten empfangen kann, muss sie einen aktiven [Service Worker](/de/docs/Web/API/Service_Worker_API) haben. Wenn der Service Worker aktiv ist, kann er sich für Push-Benachrichtigungen anmelden, indem er {{domxref("PushManager.subscribe()")}} verwendet.

Das resultierende {{domxref("PushSubscription")}} enthält alle Informationen, die die Anwendung zum Senden einer Push-Nachricht benötigt: eine Endpunkt-URL und den Verschlüsselungsschlüssel, der zum Senden von Daten benötigt wird.

Der Service Worker wird bei Bedarf aktiviert, um eingehende Push-Nachrichten zu verarbeiten, die an den {{domxref("ServiceWorkerGlobalScope.push_event", "onpush")}} Ereignishandler geliefert werden. Dies ermöglicht es Apps, auf eingehende Push-Nachrichten zu reagieren, zum Beispiel durch das Anzeigen einer Benachrichtigung (unter Verwendung von {{domxref("ServiceWorkerRegistration.showNotification()")}}.)

Jedes Abonnement ist einzigartig für einen Service Worker. Der Endpunkt für das Abonnement ist eine einzigartige [Capability-URL](https://www.w3.org/TR/capability-urls/): Die Kenntnis des Endpunkts ist alles, was erforderlich ist, um eine Nachricht an Ihre Anwendung zu senden. Die Endpunkt-URL muss daher geheim gehalten werden, da andere Anwendungen möglicherweise Push-Nachrichten an Ihre Anwendung senden könnten.

Das Aktivieren eines Service Workers zur Lieferung einer Push-Nachricht kann zu einem erhöhten Ressourcenverbrauch führen, insbesondere der Batterie. Verschiedene Browser haben unterschiedliche Mechanismen, um dies zu handhaben, es gibt derzeit keinen Standardmechanismus. Firefox erlaubt eine begrenzte Anzahl (Quote) von Push-Nachrichten, die an eine Anwendung gesendet werden können, obwohl Push-Nachrichten, die Benachrichtigungen generieren, von diesem Limit ausgenommen sind. Das Limit wird jedes Mal aktualisiert, wenn die Website besucht wird. In Chrome gibt es keine Begrenzungen.

## Schnittstellen

- {{domxref("PushEvent")}}
  - : Stellt eine Push-Aktion dar, die an den [globalen Bereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines {{domxref("ServiceWorker")}} gesendet wird. Es enthält Informationen, die von einer Anwendung an ein {{domxref("PushSubscription")}} gesendet werden.
- {{domxref("PushManager")}}
  - : Bietet eine Möglichkeit, Benachrichtigungen von Drittanbieter-Servern zu empfangen sowie URLs für Push-Benachrichtigungen anzufordern.
- {{domxref("PushMessageData")}}
  - : Bietet Zugriff auf Push-Daten, die von einem Server gesendet werden, und enthält Methoden zum Manipulieren der empfangenen Daten.
- {{domxref("PushSubscription")}}
  - : Stellt die URL-Endpunkt des Abonnements bereit und ermöglicht das Abbestellen eines Push-Dienstes.
- {{domxref("PushSubscriptionOptions")}}
  - : Repräsentiert die mit dem Push-Abonnement verbundenen Optionen.

## Ergänzungen für Service Workers

Die folgenden Ergänzungen zur [Service Worker-API](/de/docs/Web/API/Service_Worker_API) wurden in der Push-API-Spezifikation festgelegt, um einen Einstiegspunkt für die Verwendung von Push-Nachrichten bereitzustellen. Sie überwachen und reagieren auch auf Push- und Abonnementänderungsereignisse.

- {{domxref("ServiceWorkerRegistration.pushManager")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz zur {{domxref("PushManager")}} Schnittstelle zurück, um Push-Abonnements zu verwalten, einschließlich Abonnieren, Abrufen eines aktiven Abonnements und Zugriff auf den Push-Berechtigungsstatus. Dies ist der Einstiegspunkt für die Verwendung von Push-Nachrichten.
- {{domxref("ServiceWorkerGlobalScope.push_event", "onpush")}}
  - : Ein Ereignishandler, der jedes Mal ausgelöst wird, wenn ein {{domxref("ServiceWorkerGlobalScope/push_event", "push")}}-Ereignis auftritt; das heißt, jedes Mal, wenn eine Server-Push-Nachricht empfangen wird.
- {{domxref("ServiceWorkerGlobalScope.pushsubscriptionchange_event", "onpushsubscriptionchange")}}
  - : Ein Ereignishandler, der jedes Mal ausgelöst wird, wenn ein {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}}-Ereignis auftritt; zum Beispiel, wenn ein Push-Abonnement ungültig gemacht wurde oder ungültig gemacht wird (z.B. wenn ein Push-Dienst eine Ablaufzeit festlegt.)

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
