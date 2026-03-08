---
title: Service Worker API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

Service-Worker fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (wenn verfügbar) sitzen. Sie sind unter anderem dazu gedacht, effektive Offline-Erlebnisse zu ermöglichen, Netzwerkanfragen abzufangen und je nach Verfügbarkeit des Netzwerks geeignete Maßnahmen zu ergreifen sowie auf dem Server befindliche Assets zu aktualisieren. Sie ermöglichen außerdem den Zugriff auf Push-Benachrichtigungen und Hintergrund-Synchronisierungs-APIs.

> [!NOTE]
> Service Workers sind eine Art von Web-Worker. Siehe [Web-Worker](/de/docs/Web/API/Web_Workers_API) für allgemeine Informationen zu Workertypen und Anwendungsfällen.

## Service-Worker-Konzepte und Verwendung

Ein Service-Worker ist ein ereignisgesteuerter [Worker](/de/docs/Web/API/Worker), der gegen eine Herkunft und einen Pfad registriert ist. Er nimmt die Form einer JavaScript-Datei an, die die zugehörige Webseite/Website steuern kann, Navigationen und Ressourcenanforderungen abfängt und modifiziert und Ressourcen sehr detailliert zwischenspeichert, um Ihnen die vollständige Kontrolle darüber zu geben, wie Ihre App in bestimmten Situationen (z. B. wenn das Netzwerk nicht verfügbar ist) reagiert.

Service-Worker laufen in einem Worker-Kontext: Daher haben sie keinen DOM-Zugriff und laufen in einem anderen Thread als das Haupt-JavaScript, das Ihre App antreibt. Sie sind nicht blockierend und dafür ausgelegt, vollständig asynchron zu sein. Folglich können APIs wie synchrones [XHR](/de/docs/Web/API/XMLHttpRequest) und [Web Storage](/de/docs/Web/API/Web_Storage_API) nicht innerhalb eines Service-Workers verwendet werden.

Service-Worker können keine JavaScript-Module dynamisch importieren, und [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) wird einen Fehler auslösen, wenn es im globalen Scope eines Service-Workers aufgerufen wird. Statische Importe mit der [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisung sind erlaubt.

Service-Worker sind nur in [gesicherten Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar: Diese bedeuten, dass ihr Dokument über HTTPS geliefert wird, obwohl Browser `http://localhost` auch als sicheren Kontext behandeln, um lokale Entwicklung zu erleichtern. HTTP-Verbindungen sind anfällig für bösartigen Codeeinschleusungen durch {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe, und solche Angriffe könnten noch schlimmer sein, wenn der Zugang zu diesen leistungsstarken APIs erlaubt wäre.

> [!NOTE]
> In Firefox können Sie Service-Worker für Testzwecke über HTTP (unsicher) ausführen; aktivieren Sie einfach die Option **Enable Service Workers over HTTP (when toolbox is open)** im Firefox DevTools-Options-/Zahnradsymbol-Menü.

> [!NOTE]
> Anders als bei früheren Versuchen in diesem Bereich, wie [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/), machen Service-Worker keine Annahmen darüber, was Sie versuchen zu tun, und scheitern dann, wenn diese Annahmen nicht genau zutreffen. Stattdessen geben Ihnen Service-Worker viel granularere Kontrolle.

> [!NOTE]
> Service-Worker nutzen intensiv [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), da sie in der Regel auf Antworten warten, nach denen sie mit einer Erfolg- oder Fehlaktion antworten. Die Promise-Architektur ist ideal dafür.

### Registrierung

Ein Service-Worker wird zuerst mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Bei Erfolg wird Ihr Service-Worker auf den Client heruntergeladen und versucht, für vom Benutzer innerhalb der gesamten Herkunft oder einem von Ihnen angegebenen Teilbereich aufgerufene URLs installiert/aktiviert zu werden.

### Download, Installation und Aktivierung

An diesem Punkt wird Ihr Service-Worker den folgenden Lebenszyklus beobachten:

1. Download
2. Installation
3. Aktivierung

Der Service-Worker wird sofort heruntergeladen, wenn ein Benutzer eine von einem Service-Worker kontrollierte Seite/Site das erste Mal aufruft.

Danach wird er aktualisiert, wenn:

- Eine Navigation zu einer in-Reichweite-Seite erfolgt.
- Ein Ereignis auf den Service-Worker ausgelöst wird und er nicht in den letzten 24 Stunden heruntergeladen wurde.

Die Installation wird versucht, wenn die heruntergeladene Datei neu ist - entweder anders als ein vorhandener Service-Worker (byteweise verglichen) oder der erste Service-Worker, der für diese Seite/Site entdeckt wurde.

Wenn dies das erste Mal ist, dass ein Service-Worker verfügbar gemacht wurde, wird die Installation versucht, und nach einer erfolgreichen Installation wird er aktiviert.

Wenn ein bestehender Service-Worker verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert - zu diesem Zeitpunkt wird er als _wartender Arbeiter_ bezeichnet. Er wird nur aktiviert, wenn keine Seiten mehr geladen sind, die noch den alten Service-Worker verwenden. Sobald keine Seiten mehr geladen sind, wird der neue Service-Worker aktiviert (wird zum _aktiven Arbeiter_). Die Aktivierung kann früher erfolgen durch die Verwendung von [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting), und bestehende Seiten können durch den aktiven Worker mit [`Clients.claim()`](/de/docs/Web/API/Clients/claim) beansprucht werden.

Sie können auf das Ereignis [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) hören; eine Standardaktion besteht darin, Ihren Service-Worker auf die Nutzung vorzubereiten, wenn dieses ausgelöst wird, z. B. durch Erstellen eines Caches mit der integrierten Speicher-API und Platzieren von Assets darin, die Sie für den Ausführungsbetrieb Ihrer App offline benötigen.

Es gibt auch ein [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignis. Der Punkt, an dem dieses Ereignis ausgelöst wird, ist im Allgemeinen ein guter Zeitpunkt, um alte Caches und andere Dinge zu bereinigen, die mit der vorherigen Version Ihres Service-Workers verbunden sind.

Ihr Service-Worker kann auf Anforderungen mit dem Ereignis [`FetchEvent`](/de/docs/Web/API/FetchEvent) antworten. Sie können die Antwort auf diese Anforderungen in beliebiger Weise ändern, indem Sie die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) verwenden.

> [!NOTE]
> Da `install`/`activate`-Ereignisse eine Weile dauern könnten, um abgeschlossen zu werden, bietet die Spezifikation für Service-Worker die Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil). Sobald diese bei `install` oder `activate`-Ereignissen mit einem Promise aufgerufen wird, warten funktionale Ereignisse wie `fetch` und `push`, bis das Promise erfolgreich aufgelöst wurde.

Für ein vollständiges Tutorial, um zu zeigen, wie Sie Ihr erstes grundlegendes Beispiel aufbauen, lesen Sie [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

### Verwendung von statischem Routing zur Steuerung, wie Ressourcen abgerufen werden

Service-Worker können unnötige Leistungskosten verursachen — wenn eine Seite nach langer Zeit zum ersten Mal geladen wird, muss der Browser darauf warten, dass der Service-Worker startet und läuft, um zu wissen, welche Inhalte geladen werden sollen und ob sie aus einem Cache oder über das Netzwerk kommen sollen.

Wenn Sie bereits im Voraus wissen, von wo bestimmte Inhalte abgerufen werden sollen, können Sie den Service-Worker vollständig umgehen und Ressourcen sofort abrufen. Die Methode [`InstallEvent.addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes) kann verwendet werden, um diesen Anwendungsfall und mehr zu implementieren.

## Weitere Anwendungsfall-Ideen

Service-Worker sind auch dafür gedacht, für solche Aufgaben verwendet zu werden wie:

- Synchronisieren von Daten im Hintergrund.
- Antworten auf Ressourcenanforderungen aus anderen Ursprüngen.
- Zentrale Updates für kostspielig zu berechnende Daten wie Standort oder Gyroskop empfangen, sodass mehrere Seiten einen Datensatz nutzen können.
- Client-seitiges Kompilieren und Abhängigkeitsmanagement von CoffeeScript, Less, CJS/AMD-Modulen usw. für Entwicklungszwecke.
- Hooks für Hintergrunddienste.
- Benutzerdefinierte Templating basierend auf bestimmten URL-Mustern.
- Leistungsverbesserungen, z. B. Vorabrufen von Ressourcen, die der Benutzer wahrscheinlich bald benötigt, wie die nächsten Bilder in einem Fotoalbum.
- API-Mocking.

In Zukunft werden Service-Worker in der Lage sein, mehrere andere nützliche Dinge für die Webplattform zu tun, die sie näher an die App-Fähigkeit nativer Anwendungen heranrücken lassen. Interessanterweise können und werden andere Spezifikationen beginnen, den Service-Worker-Kontext zu nutzen, z. B.:

- [Hintergrund-Synchronisation](https://github.com/WICG/background-sync): Starten Sie einen Service-Worker, auch wenn keine Benutzer auf der Seite sind, damit Caches aktualisiert werden können, usw.
- [Reagieren auf Push-Nachrichten](/de/docs/Web/API/Push_API): Starten Sie einen Service-Worker, um den Benutzern eine Nachricht zu senden, die ihnen mitteilt, dass neue Inhalte verfügbar sind.
- Reagieren auf ein bestimmtes Datum und Uhrzeit.
- Eintritt in einen Geofence.

## Schnittstellen

- [`Cache`](/de/docs/Web/API/Cache)
  - : Repräsentiert den Speicher für [`Request`](/de/docs/Web/API/Request) / [`Response`](/de/docs/Web/API/Response)-Objektpaare, die als Teil des [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Lebenszyklus zwischengespeichert werden.
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
  - : Repräsentiert den Speicher für [`Cache`](/de/docs/Web/API/Cache)-Objekte. Es bietet ein Hauptverzeichnis aller benannten Caches, auf die ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zugreifen kann, und pflegt eine Zuordnung von Zeichenfolgen zu entsprechenden [`Cache`](/de/docs/Web/API/Cache)-Objekten.
- [`Client`](/de/docs/Web/API/Client)
  - : Repräsentiert den Bereich eines Service-Worker-Clients. Ein Service-Worker-Client ist entweder ein Dokument in einem Browserkontext oder ein [`SharedWorker`](/de/docs/Web/API/SharedWorker), das von einem aktiven Worker gesteuert wird.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Repräsentiert einen Container für eine Liste von [`Client`](/de/docs/Web/API/Client)-Objekten; der Hauptweg, um auf die aktiven Service-Worker-Clients im aktuellen Ursprung zuzugreifen.
- [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)
  - : Verlängt die Lebensdauer der `install` und `activate`-Ereignisse, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) im Rahmen des Service-Worker-Lebenszyklus gesendet werden. Dies stellt sicher, dass funktionale Ereignisse (wie [`FetchEvent`](/de/docs/Web/API/FetchEvent)) nicht an den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet werden, bis Datenbankschemata aktualisiert, veraltete Cache-Einträge gelöscht usw. werden.
- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)
  - : Das Ereignisobjekt eines [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignisses, das auf einem Service-Worker ausgelöst wird (wenn eine Kanalnachricht im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus einem anderen Kontext empfangen wird) — verlängert die Lebensdauer solcher Ereignisse.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Das Parameter, das an den [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Handler übergeben wird, `FetchEvent` repräsentiert eine Abrufaktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Es enthält Informationen über die Anfrage und die resultierende Antwort und bietet die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith), die es uns ermöglicht, eine beliebige Antwort an die kontrollierte Seite zurückzugeben.
- [`InstallEvent`](/de/docs/Web/API/InstallEvent)
  - : Der Parameter, der in eine [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignishandlerfunktion übergeben wird, die `InstallEvent`-Schnittstelle repräsentiert eine Installationsaktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Als Kind von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) stellt es sicher, dass funktionale Ereignisse wie [`FetchEvent`](/de/docs/Web/API/FetchEvent) während der Installation nicht gesendet werden.
- [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)
  - : Bietet Methoden zum Verwalten des Vorladens von Ressourcen mit einem Service-Worker.
- [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
  - : Repräsentiert einen Service-Worker. Mehrere Browsing-Kontexte (z. B. Seiten, Worker usw.) können mit demselben `ServiceWorker`-Objekt verknüpft sein.
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)
  - : Bietet ein Objekt, das den Service-Worker als Gesamteinheit im Netzwerk-Ökosystem repräsentiert, einschließlich Einrichtungen zum Registrieren, Deregistrieren und Aktualisieren von Service-Workern sowie zum Zugriff auf den Status von Service-Workern und deren Registrierungen.
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
  - : Repräsentiert den globalen Ausführungskontext eines Service-Workers.
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
  - : Repräsentiert eine Service-Worker-Registrierung.
- [`WindowClient`](/de/docs/Web/API/WindowClient)
  - : Repräsentiert den Bereich eines Service-Worker-Clients, der ein Dokument in einem Browsing-Kontext ist, das von einem aktiven Worker gesteuert wird. Dies ist ein spezieller Typ eines [`Client`](/de/docs/Web/API/Client)-Objekts, mit einigen zusätzlichen Methoden und Eigenschaften.

### Erweiterungen für andere Schnittstellen

- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verbunden ist.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker)
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt zurück, das Zugriff auf die Registrierung, Entfernung, Aktualisierung und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekten für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service Worker Lifecycle](https://web.dev/articles/service-worker-lifecycle)
- [Service-Worker einfaches Codebeispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- Web-APIs, die mit der Service Worker API in Zusammenhang stehen:
  - [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - [Content Index API](/de/docs/Web/API/Content_Index_API)
  - [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
  - [Benachrichtigungen API](/de/docs/Web/API/Notifications_API)
  - [Web-basierte Zahlungshandler API](/de/docs/Web/API/Web-Based_Payment_Handler_API)
  - [Push API](/de/docs/Web/API/Push_API)
  - [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
