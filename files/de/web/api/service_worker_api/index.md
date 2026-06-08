---
title: Service Worker API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

Service Worker fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (falls verfügbar) sitzen. Sie sind unter anderem dazu gedacht, effektive Offline-Erfahrungen zu ermöglichen, Netzwerkanfragen abzufangen und je nach Verfügbarkeit des Netzwerks geeignete Maßnahmen zu ergreifen sowie Assets auf dem Server zu aktualisieren. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Synchronisation-APIs.

> [!NOTE]
> Service Worker sind eine Art von Web Worker. Weitere Informationen zu Worker-Typen und Anwendungsfällen finden Sie unter [Web Workers](/de/docs/Web/API/Web_Workers_API).

## Service Worker-Konzepte und -Nutzung

Ein Service Worker ist ein ereignisgesteuerter [Worker](/de/docs/Web/API/Worker), der unter einem Ursprung und einem Pfad registriert ist. Er nimmt die Form einer JavaScript-Datei an, die die Webseite/Website, mit der er verbunden ist, steuern kann, indem er Navigations- und Ressourcenanforderungen abfängt und modifiziert und Ressourcen sehr detailliert zwischenspeichert, um Ihnen die vollständige Kontrolle darüber zu geben, wie sich Ihre App in bestimmten Situationen verhält (die offensichtlichste ist, wenn das Netzwerk nicht verfügbar ist).

Service Worker laufen in einem Worker-Kontext: Sie haben daher keinen DOM-Zugriff und laufen auf einem anderen Thread als das Haupt-JavaScript, das Ihre App antreibt. Sie sind nicht blockierend und so konzipiert, dass sie vollständig asynchron sind. Folglich können APIs wie synchrones [XHR](/de/docs/Web/API/XMLHttpRequest) und [Web Storage](/de/docs/Web/API/Web_Storage_API) nicht innerhalb eines Service Workers verwendet werden.

Service Worker können JavaScript-Module nicht dynamisch importieren, und [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) wird einen Fehler werfen, wenn es im globalen Scope eines Service Workers aufgerufen wird. Statische Importe mit der [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisung sind erlaubt.

Service Worker sind nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar: das bedeutet, dass ihr Dokument über HTTPS bereitgestellt wird, obwohl Browser `http://localhost` auch als sicheren Kontext behandeln, um die lokale Entwicklung zu erleichtern. HTTP-Verbindungen sind anfällig für böswillige Code-Injektionen durch {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe und solche Angriffe könnten schlimmer sein, wenn sie Zugriff auf diese leistungsstarken APIs erlaubt würden.

> [!NOTE]
> In Firefox können Sie für Testzwecke Service Worker über HTTP (unsicher) ausführen; aktivieren Sie einfach die Option **Enable Service Workers over HTTP (when toolbox is open)** in den Firefox DevTools-Optionen/Zahnradmenü.

> [!NOTE]
> Im Gegensatz zu früheren Versuchen in diesem Bereich wie [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/) treffen Service Worker keine Annahmen darüber, was Sie tun möchten, die dann scheitern, wenn diese Annahmen nicht genau richtig sind. Stattdessen geben Service Worker Ihnen viel detailliertere Kontrolle.

> [!NOTE]
> Service Worker nutzen ausführlich [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), da sie im Allgemeinen auf Antworten warten, nach denen sie mit einer Erfolgs- oder Fehlschlagsaktion reagieren. Die Promises-Architektur ist dafür ideal.

### Registrierung

Ein Service Worker wird zuerst mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Bei Erfolg wird Ihr Service Worker auf den Client heruntergeladen und versucht, die Installation/Aktivierung (siehe unten) für URLs, die der Benutzer unter dem gesamten Ursprung oder einem von Ihnen angegebenen Unterbereich aufruft, vorzunehmen.

### Download, Installation und Aktivierung

An diesem Punkt wird Ihr Service Worker den folgenden Lebenszyklus beobachten:

1. Download
2. Installation
3. Aktivierung

Der Service Worker wird sofort heruntergeladen, wenn ein Benutzer erstmalig eine von einem Service Worker gesteuerte Seite/Seite aufruft.

Danach wird er aktualisiert, wenn:

- Eine Navigation zu einer In-Scope-Seite erfolgt.
- Ein Ereignis am Service Worker ausgelöst wird und er in den letzten 24 Stunden nicht heruntergeladen wurde.

Eine Installation wird versucht, wenn die heruntergeladene Datei als neu befunden wird — entweder unterschiedlich zu einem vorhandenen Service Worker (byteweise verglichen) oder als der erste für diese Seite/Website gefundene Service Worker.

Wenn dies das erste Mal ist, dass ein Service Worker verfügbar gemacht wurde, wird der Versuch unternommen, ihn zu installieren, und nach einer erfolgreichen Installation wird er aktiviert.

Wenn ein vorhandener Service Worker verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert — zu diesem Zeitpunkt wird er als der _wartende Worker_ bezeichnet. Er wird erst aktiviert, wenn keine Seiten mehr geladen sind, die noch den alten Service Worker verwenden. Sobald keine Seiten mehr zu laden sind, aktiviert sich der neue Service Worker (wird zum _aktiven Worker_). Die Aktivierung kann früher erfolgen, indem [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) verwendet wird und vorhandene Seiten können vom aktiven Worker mittels [`Clients.claim()`](/de/docs/Web/API/Clients/claim) beansprucht werden.

Sie können auf das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis hören; eine Standardaktion ist es, Ihren Service Worker für die Verwendung vorzubereiten, wenn dieses ausgelöst wird, zum Beispiel indem Sie einen Cache mit der integrierten Speicher-API erstellen und darin Assets platzieren, die Sie zum Ausführen Ihrer App offline benötigen.

Es gibt auch ein [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignis. Der Punkt, an dem dieses Ereignis ausgelöst wird, ist im Allgemeinen ein guter Zeitpunkt, um alte Caches und andere Dinge, die mit der vorherigen Version Ihres Service Workers verbunden sind, aufzuräumen.

Ihr Service Worker kann auf Anfragen mit dem [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Ereignis antworten. Sie können die Antwort auf diese Anfragen mit der Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) auf beliebige Weise ändern.

> [!NOTE]
> Da `install`/`activate`-Ereignisse eine Weile dauern können, bis sie abgeschlossen sind, bietet die Service Worker-Spezifikation eine [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode. Sobald sie bei `install` oder `activate`-Ereignissen mit einem Promise aufgerufen wird, werden funktionale Ereignisse wie `fetch` und `push` warten, bis das Promise erfolgreich aufgelöst ist.

Für ein vollständiges Tutorial, das zeigt, wie Sie Ihr erstes einfaches Beispiel erstellen, lesen Sie [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

### Verwendung von statischem Routing zur Steuerung, wie Ressourcen abgerufen werden

Service Worker können unnötige Leistungs zu kosten verursachen — wenn eine Seite zum ersten Mal nach einer Weile geladen wird, muss der Browser darauf warten, dass der Service Worker startet und läuft, um zu wissen, welche Inhalte geladen werden sollen und ob sie aus einem Cache oder dem Netzwerk stammen sollten.

Wenn Sie bereits im Voraus wissen, woher bestimmte Inhalte abgerufen werden sollen, können Sie den Service Worker vollständig umgehen und Ressourcen sofort abrufen. Die Methode [`InstallEvent.addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes) kann verwendet werden, um diesen Anwendungsfall und mehr zu implementieren.

## Weitere Anwendungsfallideen

Service Worker sind auch dafür vorgesehen, für solche Zwecke verwendet zu werden wie:

- Hintergrund-Datensynchronisation.
- Beantworten von Ressourcenanforderungen von anderen Ursprüngen.
- Empfang zentralisierter Updates für schwer zu berechnende Daten wie Geolokalisation oder Gyroskop, sodass mehrere Seiten einen Daten satz verwenden können.
- Client-seitige Kompilierung und Abhängigkeitsverwaltung von CoffeeScript, Less, CJS/AMD-Modulen usw. zu Entwicklungszwecken.
- Hooks für Hintergrunddienste.
- Benutzerdefiniertes Templating basierend auf bestimmten URL-Mustern.
- Leistungsverbesserungen, zum Beispiel Vorabrufen von Ressourcen, die der Benutzer wahrscheinlich bald benötigt, wie die nächsten Bilder in einem Fotoalbum.
- API-Mocking.

In der Zukunft werden Service Worker in der Lage sein, mehrere andere nützliche Dinge für die Webplattform zu tun, die sie der Eignung für native Apps näher bringen. Interessanterweise können und werden andere Spezifikationen den Kontext eines Service Workers nutzen, zum Beispiel:

- [Hintergrund-Synchronisation](https://github.com/WICG/background-sync): Startet einen Service Worker, auch wenn keine Benutzer auf der Seite sind, damit Caches aktualisiert werden können usw.
- [Reaktion auf Push-Nachrichten](/de/docs/Web/API/Push_API): Startet einen Service Worker, um Benutzern eine Nachricht zu senden, dass neue Inhalte verfügbar sind.
- Reagieren auf eine bestimmte Uhrzeit und ein bestimmtes Datum.
- Betreten eines Geo-Zauns.

## Schnittstellen

- [`Cache`](/de/docs/Web/API/Cache)
  - : Repräsentiert den Speicher für [`Request`](/de/docs/Web/API/Request) / [`Response`](/de/docs/Web/API/Response)-Objektpaare, die als Teil des Lebenszyklus des [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zwischengespeichert werden.
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
  - : Repräsentiert den Speicher für [`Cache`](/de/docs/Web/API/Cache)-Objekte. Es bietet ein Hauptverzeichnis aller benannten Caches, auf die ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zugreifen kann, und verwaltet eine Zuordnung von Zeichenfolgenamen zu den entsprechenden [`Cache`](/de/docs/Web/API/Cache)-Objekten.
- [`Client`](/de/docs/Web/API/Client)
  - : Repräsentiert den Gültigkeitsbereich eines Service Worker-Clients. Ein Service Worker-Client ist entweder ein Dokument in einem Browser-Kontext oder ein [`SharedWorker`](/de/docs/Web/API/SharedWorker), der von einem aktiven Worker kontrolliert wird.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Repräsentiert einen Container für eine Liste von [`Client`](/de/docs/Web/API/Client)-Objekten; der Hauptweg, um die aktiven Service Worker-Clients am aktuellen Ursprung zuzugreifen.
- [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)
  - : Verlängert die Lebensdauer der `install` und `activate`-Ereignisse, die am [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) gesendet werden, als Teil des Service Worker-Lebenszyklus. Dies stellt sicher, dass keine funktionalen Ereignisse (wie [`FetchEvent`](/de/docs/Web/API/FetchEvent)) an den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet werden, bis er Datenbankschemata aktualisiert und veraltete Cache-Einträge gelöscht hat usw.
- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)
  - : Das Ereignisobjekt eines [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignisses, das auf einem Service Worker ausgelöst wird (wenn eine Kanalnachricht im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus einem anderen Kontext empfangen wird) — verlängert die Lebensdauer solcher Ereignisse.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Der Parameter, der an den [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Handler übergeben wird, `FetchEvent` repräsentiert eine Fetch-Aktion, die am [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Es enthält Informationen über die Anfrage und die resultierende Antwort und bietet die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith), die es uns ermöglicht, eine beliebige Antwort an die gesteuerte Seite zurückzugeben.
- [`InstallEvent`](/de/docs/Web/API/InstallEvent)
  - : Der Parameter, der an einen [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis-Handler übergeben wird, die `InstallEvent`-Schnittstelle repräsentiert eine Installationsaktion, die am [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Als Kind von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) stellt es sicher, dass funktionale Ereignisse wie [`FetchEvent`](/de/docs/Web/API/FetchEvent) während der Installation nicht gesendet werden.
- [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)
  - : Bietet Methoden zur Verwaltung des Vorladens von Ressourcen mit einem Service Worker.
- [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
  - : Repräsentiert einen Service Worker. Mehrere Browsing-Kontexte (z. B. Seiten, Worker usw.) können mit demselben `ServiceWorker`-Objekt verbunden sein.
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)
  - : Bietet ein Objekt, das den Service Worker als Gesamteinheit im Netzwerk-Ökosystem darstellt, einschließlich Einrichtungen zur Registrierung, Deregistrierung und Aktualisierung von Service Workern sowie Zugriff auf den Status von Service Workern und deren Registrierungen.
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
  - : Repräsentiert den globalen Ausführungskontext eines Service Workers.
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
  - : Repräsentiert eine Service Worker-Registrierung.
- [`WindowClient`](/de/docs/Web/API/WindowClient)
  - : Repräsentiert den Gültigkeitsbereich eines Service Worker-Clients, der ein Dokument in einem Browser-Kontext ist, das von einem aktiven Worker gesteuert wird. Dies ist ein spezieller Typ von [`Client`](/de/docs/Web/API/Client)-Objekt, mit einigen zusätzlichen Methoden und Eigenschaften.

### Erweiterungen anderer Schnittstellen

- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verbunden ist.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker)
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt zurück, das Zugriff auf die Registrierung, Entfernung, Aktualisierung und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekten für das [angehängte Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service Worker Lifecycle](https://web.dev/articles/service-worker-lifecycle)
- [Service Worker Basiscode Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Lokalnetzwerkzugang](/de/docs/Web/Security/Defenses/Local_network_access)
- Web-APIs, die mit der Service Worker API in Verbindung stehen:
  - [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - [Content Index API](/de/docs/Web/API/Content_Index_API)
  - [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
  - [Notifications API](/de/docs/Web/API/Notifications_API)
  - [Web-based Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API)
  - [Push API](/de/docs/Web/API/Push_API)
  - [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
