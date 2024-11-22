---
title: Service Worker API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

Service Worker fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (sofern verfügbar) sitzen. Sie sind unter anderem dafür vorgesehen, die Erstellung effektiver Offline-Erlebnisse zu ermöglichen, Netzwerk-Anfragen abzufangen und entsprechende Maßnahmen zu ergreifen, je nachdem, ob das Netzwerk verfügbar ist, und Assets auf dem Server zu aktualisieren. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Sync-APIs.

## Konzepte und Nutzung von Service Workern

Ein Service Worker ist ein ereignisgesteuerter [worker](/de/docs/Web/API/Worker), der gegen eine Origin und einen Pfad registriert wird. Er nimmt die Form einer JavaScript-Datei an, die die Webseite/das Webseitensegment, das ihr zugeordnet ist, steuern kann, indem sie Navigations- und Ressourcenanfragen abfängt und modifiziert und Ressourcen sehr detailliert zwischenspeichert, um Ihnen vollständige Kontrolle darüber zu geben, wie sich Ihre App in bestimmten Situationen verhält (die offensichtlichste ist, wenn das Netzwerk nicht verfügbar ist).

Service Worker laufen in einem Worker-Kontext: Daher haben sie keinen Zugriff auf das DOM und laufen in einem anderen Thread als das Haupt-JavaScript, das Ihre App betreibt. Sie sind nicht blockierend und für voll asynchrones Verhalten ausgelegt. Als Konsequenz können APIs wie synchrones [XHR](/de/docs/Web/API/XMLHttpRequest) und [Web Storage](/de/docs/Web/API/Web_Storage_API) nicht innerhalb eines Service Workers verwendet werden.

Service Worker können keine JavaScript-Module dynamisch importieren, und [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#browser_compatibility) wird einen Fehler auslösen, wenn es im globalen Kontext eines Service Workers aufgerufen wird. Statische Importe mit der [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisung sind jedoch erlaubt.

Service Worker laufen aus Sicherheitsgründen nur über HTTPS. Besonders HTTP-Verbindungen sind anfällig für böswillige Code-Injections durch {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe, und solche Angriffe könnten gefährlicher sein, wenn sie Zugang zu diesen leistungsstarken APIs erhalten. In Firefox sind Service Worker-APIs auch verborgen und können nicht verwendet werden, wenn der Benutzer im [Privaten Modus](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) ist.

> [!NOTE]
> In Firefox können Sie zu Testzwecken Service Worker über HTTP (unsicher) ausführen. Aktivieren Sie einfach die Option **Enable Service Workers over HTTP (when toolbox is open)** im Firefox DevTools Optionen-/Zahnradsymbol-Menü.

> [!NOTE]
> Im Gegensatz zu früheren Versuchen in diesem Bereich, wie [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/), gehen Service Worker nicht von bestimmten Annahmen darüber aus, was Sie tun möchten, um dann zu scheitern, wenn diese Annahmen nicht genau zutreffen. Stattdessen bieten Service Worker Ihnen eine viel detailliertere Kontrolle.

> [!NOTE]
> Service Worker nutzen [promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) intensiv, da sie in der Regel auf Antworten warten, die durchkommen, woraufhin sie mit einer Erfolgs- oder Fehlaktion antworten. Die Promises-Architektur ist dafür ideal.

### Registrierung

Ein Service Worker wird zuerst mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Bei Erfolg wird Ihr Service Worker auf den Client heruntergeladen und versucht, für vom Benutzer aufgerufene URLs innerhalb der gesamten Origin oder eines von Ihnen spezifizierten Teilbereichs die Installation/Aktivierung (siehe unten) durchzuführen.

### Download, Installation und Aktivierung

An diesem Punkt durchläuft Ihr Service Worker folgenden Lebenszyklus:

1. Download
2. Installation
3. Aktivierung

Der Service Worker wird sofort heruntergeladen, wenn ein Benutzer eine Seite/ein Segment aufruft, die/das vom Service Worker gesteuert wird.

Danach wird er aktualisiert, wenn:

- Eine Navigation zu einer im Geltungsbereich liegenden Seite erfolgt.
- Ein Ereignis auf dem Service Worker ausgelöst wird und er nicht in den letzten 24 Stunden heruntergeladen wurde.

Die Installation wird versucht, wenn die heruntergeladene Datei als neu erkannt wird – entweder anders als ein vorhandener Service Worker (byteweise Vergleiche), oder als der erste Service Worker, der für diese Seite/dieses Segment entdeckt wurde.

Wenn es das erste Mal ist, dass ein Service Worker verfügbar gemacht wird, wird die Installation versucht. Nach einer erfolgreichen Installation wird er aktiviert.

Wenn ein bestehender Service Worker verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert – in diesem Moment wird sie als _wartender Worker_ bezeichnet. Sie wird erst aktiviert, wenn keine Seiten mehr geladen sind, die den alten Service Worker noch verwenden. Sobald keine Seiten mehr geladen werden, wird der neue Service Worker aktiviert (wird der _aktive Worker_). Eine Aktivierung kann früher erfolgen, indem [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) und bestehende Seiten vom aktiven Worker beansprucht werden, indem [`Clients.claim()`](/de/docs/Web/API/Clients/claim) verwendet wird.

Sie können das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis abhören; eine Standardaktion besteht darin, Ihren Service Worker auf die Nutzung vorzubereiten, wenn dieses Ereignis eintritt, indem Sie z. B. einen Cache mit der eingebauten Speicher-API erstellen und Assets darin platzieren, die Sie für den Offline-Betrieb Ihrer App benötigen.

Es gibt auch ein [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignis. Der Zeitpunkt, zu dem dieses Ereignis eintritt, ist im Allgemeinen geeignet, alte Caches und andere Dinge zu bereinigen, die mit der vorherigen Version Ihres Service Workers in Verbindung stehen.

Ihr Service Worker kann auf Anfragen mit dem [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Ereignis antworten. Sie können die Antwort auf diese Anfragen auf beliebige Weise modifizieren, indem Sie die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) verwenden.

> [!NOTE]
> Da `install`/`activate`-Ereignisse eine Weile dauern können, bis sie abgeschlossen sind, bietet die Service Worker-Spezifikation eine [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode. Sobald sie bei `install`- oder `activate`-Ereignissen mit einem Promise aufgerufen wird, warten funktionale Ereignisse wie `fetch` und `push`, bis das Promise erfolgreich aufgelöst ist.

Für ein vollständiges Tutorial zum Aufbau Ihres ersten einfachen Beispiels lesen Sie [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

### Verwendung statischer Routen zur Steuerung, wie Ressourcen abgerufen werden

Service Worker können unnötige Leistungskosten verursachen – wenn eine Seite nach längerer Zeit zum ersten Mal geladen wird, muss der Browser warten, bis der Service Worker gestartet ist und läuft, um zu wissen, welche Inhalte geladen werden sollen und ob sie aus einem Cache oder dem Netzwerk kommen sollen.

Wenn Sie bereits im Voraus wissen, wo bestimmte Inhalte abgerufen werden sollen, können Sie den Service Worker vollständig umgehen und Ressourcen sofort abrufen. Die Methode [`InstallEvent.addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes) kann verwendet werden, um diesen Anwendungsfall und mehr zu implementieren.

## Andere Anwendungsfall-Ideen

Service Worker sollen auch für folgende Zwecke verwendet werden:

- Hintergrund-Daten-Synchronisation.
- Beantworten von Ressourcenanforderungen aus anderen Ursprüngen.
- Empfangen zentralisierter Updates für kostspielig zu berechnende Daten wie Geolokation oder Gyroskop, damit mehrere Seiten einen gemeinsamen Datensatz verwenden können.
- Client-seitiges Kompilieren und Abhängigkeitsmanagement von CoffeeScript, Less, CJS/AMD-Modulen etc. zu Entwicklungszwecken.
- Hooks für Hintergrunddienste.
- Benutzerdefiniertes Templating basierend auf bestimmten URL-Mustern.
- Leistungsverbesserungen, z. B. Vorabrufen von Ressourcen, die der Benutzer wahrscheinlich bald benötigt, wie die nächsten Bilder in einem Fotoalbum.
- API-Mocking.

In der Zukunft werden Service Worker einige andere nützliche Dinge für die Webplattform tun können, die sie der nativen App-Fähigkeit näherbringen. Interessanterweise können und werden auch andere Spezifikationen den Service Worker-Kontext nutzen, beispielsweise:

- [Hintergrund-Synchronisierung](https://github.com/WICG/background-sync): Starten Sie einen Service Worker, auch wenn keine Benutzer auf der Website sind, damit Caches aktualisiert werden können usw.
- [Reagieren auf Push-Nachrichten](/de/docs/Web/API/Push_API): Starten Sie einen Service Worker, um Benutzern eine Nachricht zu senden, dass neue Inhalte verfügbar sind.
- Reagieren auf eine bestimmte Zeit & Datum.
- Betreten eines Geo-Fence.

## Schnittstellen

- [`Cache`](/de/docs/Web/API/Cache)
  - : Repräsentiert die Speicherung von [`Request`](/de/docs/Web/API/Request) / [`Response`](/de/docs/Web/API/Response)-Objektpaaren, die im Rahmen des [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Lebenszyklus zwischengespeichert werden.
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
  - : Repräsentiert die Speicherung von [`Cache`](/de/docs/Web/API/Cache)-Objekten. Es bietet ein Hauptverzeichnis aller benannten Caches, auf die ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zugreifen kann, und pflegt eine Zuordnung von Zeichenfolgenamen zu entsprechenden [`Cache`](/de/docs/Web/API/Cache)-Objekten.
- [`Client`](/de/docs/Web/API/Client)
  - : Repräsentiert den Geltungsbereich eines Service Worker-Clients. Ein Service Worker-Client ist entweder ein Dokument in einem Browser-Kontext oder ein [`SharedWorker`](/de/docs/Web/API/SharedWorker), der von einem aktiven Worker gesteuert wird.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Repräsentiert einen Container für eine Liste von [`Client`](/de/docs/Web/API/Client)-Objekten; der Hauptweg, um auf die aktiven Service Worker-Clients im aktuellen Ursprung zuzugreifen.
- [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)
  - : Verlängert die Lebensdauer der `install`- und `activate`-Ereignisse, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) als Teil des Service Worker-Lebenszyklus ausgelöst werden. Dies stellt sicher, dass keine funktionalen Ereignisse (wie [`FetchEvent`](/de/docs/Web/API/FetchEvent)) an den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet werden, bevor die Datenbankschemata aktualisiert und veraltete Cache-Einträge gelöscht wurden.
- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)
  - : Das Ereignisobjekt eines [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignisses, das auf einem Service Worker ausgelöst wird (wenn eine Kanalmeldung im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus einem anderen Kontext empfangen wird) – verlängert die Lebensdauer solcher Ereignisse.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Der Parameter, der an den [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Handler übergeben wird. `FetchEvent` stellt eine Abrufaktion dar, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird. Es enthält Informationen über die Anforderung und die resultierende Antwort und bietet die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith), mit der wir eine beliebige Antwort an die gesteuerte Seite zurückgeben können.
- [`InstallEvent`](/de/docs/Web/API/InstallEvent)
  - : Der Parameter, der an eine [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis-Handlerfunktion übergeben wird, die `InstallEvent`-Schnittstelle stellt eine Installations-Aktion dar, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird. Als Kind von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) stellt es sicher, dass funktionale Ereignisse wie [`FetchEvent`](/de/docs/Web/API/FetchEvent) während der Installation nicht ausgelöst werden.
- [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)
  - : Bietet Methoden zum Verwalten des Vorladens von Ressourcen mit einem Service Worker.
- [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
  - : Repräsentiert einen Service Worker. Mehrere Darstellungskontexte (z. B. Seiten, Worker usw.) können mit demselben `ServiceWorker`-Objekt verknüpft sein.
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)
  - : Bietet ein Objekt, das den Service Worker als Gesamteinheit im Netzwerk-Ökosystem darstellt, einschließlich Möglichkeiten zur Registrierung, Aufhebung der Registrierung und Aktualisierung von Service Workern sowie zum Zugriff auf den Status von Service Workern und deren Registrierungen.
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
  - : Repräsentiert den globalen Ausführungskontext eines Service Workers.
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
  - : Repräsentiert eine Registrierung eines Service Workers.
- [`WindowClient`](/de/docs/Web/API/WindowClient)
  - : Repräsentiert den Geltungsbereich eines Service Worker-Clients, der ein Dokument in einem Browser-Kontext ist, das von einem aktiven Worker gesteuert wird. Dies ist ein spezieller Typ eines [`Client`](/de/docs/Web/API/Client)-Objekts, mit einigen zusätzlichen Methoden und Eigenschaften.

### Erweiterungen zu anderen Schnittstellen

- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker)
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt zurück, das Zugriff auf die Registrierung, Entfernung, Aktualisierung und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekten für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Lebenszyklus von Service Workern](https://web.dev/articles/service-worker-lifecycle)
- [Beispielcode für grundlegende Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- Web-APIs, die sich auf die Service Worker-API beziehen:
  - [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - [Hintergrund-Synchronisierungs-API](/de/docs/Web/API/Background_Synchronization_API)
  - [Content Index API](/de/docs/Web/API/Content_Index_API)
  - [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
  - [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API)
  - [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
  - [Push-API](/de/docs/Web/API/Push_API)
  - [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
