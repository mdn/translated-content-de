---
title: Service Worker API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 972c6cc542e271e4c00def9465d7a0cc81011378
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

Service Worker agieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (wenn verfügbar) liegen. Sie dienen unter anderem dazu, die Erstellung effektiver Offline-Erlebnisse zu ermöglichen, Netzwerk-Anfragen abzufangen und basierend auf der Verfügbarkeit des Netzwerks geeignete Maßnahmen zu ergreifen sowie Assets auf dem Server zu aktualisieren. Zudem ermöglichen sie den Zugriff auf Push-Benachrichtigungen und Hintergrund-Sync-APIs.

> [!NOTE]
> Service Worker sind eine Art von Web Worker. Sehen Sie sich [Web Workers](/de/docs/Web/API/Web_Workers_API) für allgemeine Informationen über Workertypen und Einsatzmöglichkeiten an.

## Konzepte und Verwendung von Service Workern

Ein Service Worker ist ein ereignisgesteuerter [Worker](/de/docs/Web/API/Worker), der gegen eine Origin und einen Pfad registriert ist. Er besteht aus einer JavaScript-Datei, die die zugehörige Webseite oder -site steuern kann. Dabei werden Navigations- und Ressourcenzugriffe abgefangen und modifiziert, sowie Ressourcen sehr granular zwischengespeichert, um Ihnen die vollständige Kontrolle darüber zu geben, wie Ihre App in bestimmten Situationen reagiert (die offensichtlichste davon ist, wenn das Netzwerk nicht verfügbar ist).

Service Worker laufen in einem Worker-Kontext: Daher haben sie keinen Zugriff auf das DOM und laufen auf einem anderen Thread als das Haupt-JavaScript, das Ihre App antreibt. Sie sind nicht blockierend und für vollständige Asynchronität ausgelegt. Daher können APIs wie synchrones [XHR](/de/docs/Web/API/XMLHttpRequest) und [Web Storage](/de/docs/Web/API/Web_Storage_API) nicht innerhalb eines Service Workers verwendet werden.

Service Worker können keine JavaScript-Module dynamisch importieren, und [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) wird einen Fehler verursachen, wenn es im globalen Bereich eines Service Workers aufgerufen wird. Statische Importe mit der [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisung sind erlaubt.

Service Worker sind nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar: Das bedeutet, dass ihr Dokument über HTTPS bereitgestellt wird, obwohl Browser auch `http://localhost` als sicheren Kontext behandeln, um die lokale Entwicklung zu erleichtern. HTTP-Verbindungen sind anfällig für bösartige Code-Injektionen durch [Manipulator-in-the-Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)-Angriffe, und solche Angriffe könnten schlimmer sein, wenn diese leistungsstarken APIs Zugriff gewähren.

> [!NOTE]
> In Firefox können Sie Service Worker zu Testzwecken über HTTP (unsicher) ausführen; aktivieren Sie einfach die Option **Enable Service Workers over HTTP (when toolbox is open)** im Options- / Zahnradmenü der Firefox DevTools.

> [!NOTE]
> Im Gegensatz zu früheren Versuchen in diesem Bereich wie [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/), machen Service Worker keine Annahmen darüber, was Sie zu tun versuchen, die dann scheitern, wenn diese Annahmen nicht genau richtig sind. Stattdessen geben Service Worker Ihnen viel größere Kontrolle.

> [!NOTE]
> Service Worker verwenden intensiv [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), da sie im Allgemeinen auf Antworten warten werden, nach denen sie mit einer erfolgten oder fehlgeschlagenen Aktion reagieren. Die Architektur von Promises ist ideal dafür.

### Registrierung

Ein Service Worker wird zunächst über die Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Bei Erfolg wird Ihr Service Worker auf den Client heruntergeladen und versucht, eine Installation/Aktivierung (siehe unten) für vom Benutzer in der gesamten Origin oder einem von Ihnen angegebenen Teilbereich aufgerufene URLs vorzunehmen.

### Download, Installation und Aktivierung

An diesem Punkt folgt Ihr Service Worker dem folgenden Lebenszyklus:

1. Download
2. Installation
3. Aktivierung

Der Service Worker wird sofort heruntergeladen, wenn ein Benutzer zum ersten Mal eine von einem Service Worker kontrollierte Seite aufruft.

Danach wird er aktualisiert, wenn:

- Eine Navigation zu einer Seite im Geltungsbereich erfolgt.
- Ein Ereignis auf dem Service Worker ausgelöst wird und er in den letzten 24 Stunden nicht heruntergeladen wurde.

Eine Installation wird versucht, wenn festgestellt wird, dass die heruntergeladene Datei neu ist – entweder abweichend von einem bestehenden Service Worker (byteweise verglichen) oder der erste Service Worker, der auf dieser Seite/Site entdeckt wurde.

Wenn dies das erste Mal ist, dass ein Service Worker verfügbar gemacht wurde, wird die Installation versucht, und nach einer erfolgreichen Installation wird er aktiviert.

Wenn ein vorhandener Service Worker verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert – zu diesem Zeitpunkt wird sie als _wartender Worker_ bezeichnet. Sie wird erst aktiviert, wenn keine weiteren Seiten geladen sind, die noch den alten Service Worker verwenden. Sobald keine weiteren Seiten geladen werden müssen, aktiviert sich der neue Service Worker (wird zum _aktiven Worker_). Die Aktivierung kann früher erfolgen, indem [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) verwendet wird und bestehende Seiten vom aktiven Worker mit [`Clients.claim()`](/de/docs/Web/API/Clients/claim) beansprucht werden können.

Sie können das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis abhören; eine Standardaktion besteht darin, Ihren Service Worker bei dessen Auslösung zur Nutzung vorzubereiten, zum Beispiel durch Erstellen eines Caches mit der eingebauten Speicher-API und dem Platzieren von Assets darin, die Sie für den Offline-Betrieb Ihrer App benötigen.

Es gibt auch ein [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignis. Der Zeitpunkt, an dem dieses Ereignis ausgelöst wird, ist im Allgemeinen eine gute Gelegenheit, alte Caches und andere mit der vorherigen Version Ihres Service Workers verknüpfte Dinge zu bereinigen.

Ihr Service Worker kann auf Anfragen über das [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Ereignis reagieren. Sie können die Antwort auf diese Anfragen beliebig modifizieren, indem Sie die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) verwenden.

> [!NOTE]
> Da `install`-/`activate`-Ereignisse eine Weile dauern können, bis sie abgeschlossen sind, bietet die Service Worker-Spezifikation eine [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode. Sobald sie für `install` oder `activate`-Ereignisse mit einem Promise aufgerufen wird, werden funktionale Ereignisse wie `fetch` und `push` warten, bis das Promise erfolgreich aufgelöst ist.

Für ein vollständiges Tutorial, das zeigt, wie Sie Ihr erstes einfaches Beispiel aufbauen, lesen Sie [Verwendung von Service Worker](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

### Verwendung von statischem Routing, um zu kontrollieren, wie Ressourcen abgerufen werden

Service Worker können unnötige Leistungskosten verursachen – wenn eine Seite nach längerer Zeit zum ersten Mal geladen wird, muss der Browser warten, bis der Service Worker hochfährt und läuft, um zu wissen, welche Inhalte geladen werden sollen und ob sie aus einem Cache oder dem Netzwerk stammen sollen.

Wenn Sie bereits im Voraus wissen, wo bestimmte Inhalte abgerufen werden sollen, können Sie den Service Worker vollständig umgehen und Ressourcen sofort abrufen. Die Methode [`InstallEvent.addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes) kann verwendet werden, um diese und andere Anwendungsfälle zu implementieren.

## Weitere Anwendungsideen

Service Worker sollen auch für solche Dinge verwendet werden, wie:

- Hintergrund-Datensynchronisation.
- Beantworten von Ressourzanfragen von anderen Origin.
- Zentrale Updates für teuer zu berechnende Daten wie Geolocation oder Gyroskop erhalten, damit mehrere Seiten einen Datensatz nutzen können.
- Clientseitige Kompilierung und Abhängigkeitsverwaltung von CoffeeScript, Less, CJS/AMD-Modulen usw. für Entwicklungszwecke.
- Hooks für Hintergrunddienste.
- Benutzerdefinierte Templating basierend auf bestimmten URL-Mustern.
- Leistungssteigerungen, beispielsweise das Vorabrufen von Ressourcen, die der Benutzer wahrscheinlich bald benötigt, wie die nächsten Bilder in einem Fotoalbum.
- API-Mocking.

In Zukunft werden Service Worker in der Lage sein, mehrere andere nützliche Dinge für die Webplattform zu tun, die sie näher an die Machbarkeit nativer Apps bringen. Interessanterweise können und werden andere Spezifikationen beginnen, den Service Worker-Kontext zu nutzen, z.B.:

- [Background Synchronization](https://github.com/WICG/background-sync): Einen Service Worker starten, auch wenn keine Benutzer auf der Seite sind, damit Caches aktualisiert werden können usw.
- [Auf Push-Nachrichten reagieren](/de/docs/Web/API/Push_API): Einen Service Worker starten, um Benutzern eine Nachricht zu senden, dass neue Inhalte verfügbar sind.
- Auf ein bestimmtes Datum und eine bestimmte Uhrzeit reagieren.
- Einen Geofence betreten.

## Schnittstellen

- [`Cache`](/de/docs/Web/API/Cache)
  - : Repräsentiert den Speicher für [`Request`](/de/docs/Web/API/Request) / [`Response`](/de/docs/Web/API/Response) Objektpaare, die als Teil des Lebenszyklus eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zwischengespeichert werden.
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
  - : Repräsentiert den Speicher für [`Cache`](/de/docs/Web/API/Cache) Objekte. Es liefert ein Hauptverzeichnis aller benannten Caches, auf die ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zugreifen kann, und pflegt eine Zuordnung von Zeichenfolgennamen zu entsprechenden [`Cache`](/de/docs/Web/API/Cache) Objekten.
- [`Client`](/de/docs/Web/API/Client)
  - : Repräsentiert den Anwendungsbereich eines Service Worker-Clients. Ein Service Worker-Client ist entweder ein Dokument in einem Browserkontext oder ein [`SharedWorker`](/de/docs/Web/API/SharedWorker), der von einem aktiven Worker gesteuert wird.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Repräsentiert einen Container für eine Liste von [`Client`](/de/docs/Web/API/Client) Objekten; die Hauptmethode, um auf die aktiven Service Worker-Clients an der aktuellen Origin zuzugreifen.
- [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)
  - : Verlängert die Lebensdauer der `install` und `activate` Ereignisse, die auf den [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) gesendet werden, als Teil des Lebenszyklus des Service Workers. Dies stellt sicher, dass keine funktionalen Ereignisse (wie [`FetchEvent`](/de/docs/Web/API/FetchEvent)) an den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet werden, bevor es Datenbankschemata aktualisiert, veraltete Cacheeinträge löscht usw.
- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)
  - : Das Ereignisobjekt eines [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event) Ereignisses, das auf einen Service Worker ausgelöst wird (wenn eine Kanalnachricht im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) von einem anderen Kontext empfangen wird) — verlängert die Lebensdauer solcher Ereignisse.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Der Parameter, der an den [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Handler übergeben wird, `FetchEvent` repräsentiert eine Abrufaktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird. Es enthält Informationen über die Anfrage und die resultierende Antwort sowie die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith), die es uns ermöglicht, eine beliebige Antwort an die kontrollierte Seite zurückzugeben.
- [`InstallEvent`](/de/docs/Web/API/InstallEvent)
  - : Der Parameter, der an eine [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Event-Handler-Funktion übergeben wird, die `InstallEvent` Schnittstelle repräsentiert eine Installationsaktion, die im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird. Als Kind von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) stellt es sicher, dass funktionale Ereignisse wie [`FetchEvent`](/de/docs/Web/API/FetchEvent) während der Installation nicht gesendet werden.
- [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)
  - : Bietet Methoden zur Verwaltung des Preloadens von Ressourcen mit einem Service Worker.
- [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
  - : Repräsentiert einen Service Worker. Mehrere Browsing-Kontexte (z.B. Seiten, Worker etc.) können mit demselben `ServiceWorker` Objekt assoziiert sein.
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)
  - : Bietet ein Objekt, das den Service Worker als Gesamteinheit im Netzwerksystem darstellt, einschließlich Möglichkeiten zur Registrierung, Abmeldung und Aktualisierung von Service Workern sowie zum Zugriff auf den Status von Service Workern und ihren Registrierungen.
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
  - : Repräsentiert den globalen Ausführungskontext eines Service Workers.
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
  - : Repräsentiert eine Service Worker-Registrierung.
- [`WindowClient`](/de/docs/Web/API/WindowClient)
  - : Repräsentiert den Anwendungsbereich eines Service Worker-Clients, der ein Dokument in einem Browserkontext ist, kontrolliert von einem aktiven Worker. Dies ist eine spezielle Art von [`Client`](/de/docs/Web/API/Client) Objekt, mit einigen zusätzlichen Methoden und Eigenschaften.

### Erweiterungen zu anderen Schnittstellen

- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage) Objekt zurück, das mit dem aktuellen Kontext verknüpft ist.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker)
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Objekt zurück, das Zugriff auf die Registrierung, Entfernung, Aktualisierung und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekten für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service Worker Lebenszyklus](https://web.dev/articles/service-worker-lifecycle)
- [Beispielcode für grundlegende Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Lokaler Netzwerkzugriff](/de/docs/Web/Security/Defenses/Local_network_access)
- Web-APIs, die mit der Service Worker API in Zusammenhang stehen:
  - [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - [Content Index API](/de/docs/Web/API/Content_Index_API)
  - [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
  - [Notifications API](/de/docs/Web/API/Notifications_API)
  - [Web-basierte Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API)
  - [Push API](/de/docs/Web/API/Push_API)
  - [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
