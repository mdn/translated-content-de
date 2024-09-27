---
title: Push API
slug: Web/API/Push_API
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{DefaultAPISidebar("Push API")}}{{AvailableInWorkers}}

Die **Push API** ermöglicht es Webanwendungen, Nachrichten von einem Server zu empfangen, unabhängig davon, ob die Web-App im Vordergrund oder überhaupt geladen ist, auf einem Benutzeragenten. Dies ermöglicht es Entwicklern, asynchrone Benachrichtigungen und Updates für Benutzer bereitzustellen, die zustimmen, was zu einer besseren Interaktion mit aktuellem neuen Inhalt führt.

## Push-Konzepte und -Verwendung

> [!WARNING]
> Bei der Implementierung von PushManager-Abonnements ist es äußerst wichtig, dass Sie Ihre App vor CSRF/XSRF-Problemen schützen. Lesen Sie die folgenden Artikel für weitere Informationen:
>
> - [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
> - [Verhinderung von CSRF- und XSRF-Angriffen](https://blog.codinghorror.com/preventing-csrf-and-xsrf-attacks/)

Damit eine App Push-Nachrichten empfangen kann, muss ein aktiver [Service Worker](/de/docs/Web/API/Service_Worker_API) vorhanden sein. Wenn der Service Worker aktiv ist, kann er Push-Benachrichtigungen abonnieren, indem er [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) verwendet.

Das resultierende [`PushSubscription`](/de/docs/Web/API/PushSubscription) enthält alle Informationen, die die Anwendung benötigt, um eine Push-Nachricht zu senden: einen Endpunkt und den Verschlüsselungsschlüssel, der zum Senden von Daten erforderlich ist.

Der Service Worker wird bei Bedarf gestartet, um eingehende Push-Nachrichten zu verarbeiten, die an den [`onpush`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) Ereignishandler geliefert werden. Dies ermöglicht es Apps, auf empfangene Push-Nachrichten zu reagieren, zum Beispiel durch Anzeige einer Benachrichtigung (mithilfe von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)).

Jedes Abonnement ist für einen Service Worker einzigartig. Der Endpunkt für das Abonnement ist eine einzigartige [Capability URL](https://www.w3.org/TR/capability-urls/): Die Kenntnis des Endpunkts ist alles, was notwendig ist, um eine Nachricht an Ihre Anwendung zu senden. Die Endpunkt-URL muss daher geheim gehalten werden, sonst könnten andere Anwendungen Push-Nachrichten an Ihre Anwendung senden.

Die Aktivierung eines Service Workers zur Zustellung einer Push-Nachricht kann zu einem erhöhten Ressourcenverbrauch führen, insbesondere des Akkus. Verschiedene Browser haben unterschiedliche Mechanismen dafür, es gibt derzeit keinen Standardmechanismus. Firefox erlaubt eine begrenzte Anzahl (Kontingent) von Push-Nachrichten, die an eine Anwendung gesendet werden dürfen, wobei Push-Nachrichten, die Benachrichtigungen erzeugen, von diesem Limit ausgenommen sind. Das Limit wird jedes Mal aktualisiert, wenn die Seite besucht wird. In Chrome gibt es keine Begrenzungen.

## Schnittstellen

- [`PushEvent`](/de/docs/Web/API/PushEvent)
  - : Repräsentiert eine Push-Aktion, die an den [globalen Scope](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Es enthält Informationen, die von einer Anwendung an ein [`PushSubscription`](/de/docs/Web/API/PushSubscription) gesendet werden.
- [`PushManager`](/de/docs/Web/API/PushManager)
  - : Bietet eine Möglichkeit, Benachrichtigungen von Drittanbieter-Servern zu empfangen und URLs für Push-Benachrichtigungen anzufordern.
- [`PushMessageData`](/de/docs/Web/API/PushMessageData)
  - : Bietet Zugriff auf Push-Daten, die von einem Server gesendet werden, und umfasst Methoden zur Manipulation der empfangenen Daten.
- [`PushSubscription`](/de/docs/Web/API/PushSubscription)
  - : Bietet die URL-Endpunkt eines Abonnements und ermöglicht das Abbestellen von einem Push-Dienst.
- [`PushSubscriptionOptions`](/de/docs/Web/API/PushSubscriptionOptions)
  - : Repräsentiert die mit dem Push-Abonnement verbundenen Optionen.

## Ergänzungen für Service Worker

Die folgenden Ergänzungen zur [Service Worker API](/de/docs/Web/API/Service_Worker_API) wurden in der Push API-Spezifikation festgelegt, um einen Einstiegspunkt für die Nutzung von Push-Nachrichten bereitzustellen. Sie überwachen und reagieren auch auf Push- und Abonnementänderungsereignisse.

- [`ServiceWorkerRegistration.pushManager`](/de/docs/Web/API/ServiceWorkerRegistration/pushManager) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf die [`PushManager`](/de/docs/Web/API/PushManager) Schnittstelle zurück, um Push-Abonnements zu verwalten, einschließlich des Abonnierens, Abrufens eines aktiven Abonnements und Zugriffs auf den Status der Push-Berechtigung. Dies ist der Einstiegspunkt für die Nutzung von Push-Messaging.
- [`onpush`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)
  - : Ein Ereignishandler, der immer dann ausgelöst wird, wenn ein [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) Ereignis eintritt; also immer dann, wenn eine Server-Push-Nachricht empfangen wird.
- [`onpushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
  - : Ein Ereignishandler, der immer dann ausgelöst wird, wenn ein [`pushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event) Ereignis auftritt; zum Beispiel, wenn ein Push-Abonnement ungültig gemacht wurde oder kurz davor steht, ungültig gemacht zu werden (z. B. wenn ein Push-Dienst eine Ablaufzeit festlegt).

## Beispiele

Mozillas [ServiceWorker Cookbook](https://github.com/mdn/serviceworker-cookbook) enthält viele nützliche Push-Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Versenden von VAPID-identifizierten WebPush-Benachrichtigungen über Mozillas Push-Dienst](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)
- [Überblick über Push-Benachrichtigungen](https://web.dev/articles/push-notifications-overview)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
