---
title: Service Worker API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 35b99b8ae226707484d9c9b356c098070ae0f202
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

Service Worker fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (wenn verfügbar) sitzen. Sie sollen unter anderem die Erstellung effektiver Offline-Erlebnisse ermöglichen, Netzwerk-Anfragen abfangen und je nach Verfügbarkeit des Netzwerks entsprechende Maßnahmen ergreifen sowie Assets auf dem Server aktualisieren. Sie ermöglichen zudem den Zugriff auf Push-Benachrichtigungen und Hintergrund-Sync-APIs.

## Konzepte und Verwendung von Service Workern

Ein Service Worker ist ein ereignisgesteuerter [Worker](/de/docs/Web/API/Worker), der gegen eine Herkunft (`origin`) und einen Pfad registriert ist. Er nimmt die Form einer JavaScript-Datei an, die die mit ihr verbundene Webseite oder -seite steuern kann, indem sie Navigations- und Ressourcenanfragen abfängt und modifiziert und Ressourcen sehr feingranular zwischenspeichert, um Ihnen vollständige Kontrolle darüber zu geben, wie Ihre App in bestimmten Situationen funktioniert (die offensichtlichste ist, wenn das Netzwerk nicht verfügbar ist).

Service Worker laufen in einem Worker-Kontext: Sie haben daher keinen Zugriff auf das DOM und laufen in einem anderen Thread als das Haupt-JavaScript, das Ihre App antreibt. Sie sind nicht blockierend und wurden entwickelt, um vollständig asynchron zu sein. Daher können APIs wie synchrones [XHR](/de/docs/Web/API/XMLHttpRequest) und [Web Storage](/de/docs/Web/API/Web_Storage_API) nicht innerhalb eines Service Workers verwendet werden.

Service Worker können keine JavaScript-Module dynamisch importieren, und ein Aufruf von [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) im globalen Geltungsbereich eines Service Workers wird einen Fehler werfen. Statische Importe mittels der [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisung sind jedoch erlaubt.

Service Worker sind nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar: Das bedeutet, dass ihr Dokument über HTTPS bereitgestellt wird, obwohl Browser `http://localhost` ebenfalls als sicheren Kontext behandeln, um lokale Entwicklung zu erleichtern. HTTP-Verbindungen sind anfällig für bösartige Code-Injektionen durch {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe, und solche Angriffe könnten schlimmer sein, wenn sie Zugriff auf diese leistungsstarken APIs hätten.

> [!NOTE]
> In Firefox können Sie zum Testen Service Worker über HTTP (unsicher) ausführen; aktivieren Sie einfach die Option **Service Workers over HTTP (when toolbox is open)** in den Firefox DevTools-Optionen/Zahnradmenü.

> [!NOTE]
> Im Gegensatz zu früheren Versuchen auf diesem Gebiet wie [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/) machen Service Worker keine Annahmen darüber, was Sie zu tun versuchen, und funktionieren dann nicht mehr, wenn diese Annahmen nicht genau richtig sind. Stattdessen geben Ihnen Service Worker eine viel feinere Kontrolle.

> [!NOTE]
> Service Worker nutzen intensiv [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), da sie im Allgemeinen auf Antworten warten, die kommen, und danach mit einer Erfolg- oder Fehlaktion antworten. Die Architektur von Promises ist dafür ideal.

### Registrierung

Ein Service Worker wird zunächst mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Bei Erfolg wird Ihr Service Worker auf den Client heruntergeladen und versucht, die Installation/Aktivierung (siehe unten) für URLs, die vom Benutzer innerhalb der gesamten Herkunft oder einen von Ihnen angegebenen Teilbereich aufgerufen werden, durchzuführen.

### Download, Installation und Aktivierung

An diesem Punkt wird Ihr Service Worker den folgenden Lebenszyklus beobachten:

1. Download
2. Installation
3. Aktivierung

Der Service Worker wird sofort heruntergeladen, wenn ein Benutzer zum ersten Mal eine von einem Service Worker kontrollierte Seite/Site aufruft.

Danach wird er aktualisiert, wenn:

- Eine Navigation zu einer In-Scope-Seite erfolgt.
- Ein Ereignis auf dem Service Worker ausgelöst wird und er nicht innerhalb der letzten 24 Stunden heruntergeladen wurde.

Die Installation wird versucht, wenn festgestellt wird, dass die heruntergeladene Datei neu ist — entweder anders als ein bestehender Service Worker (byteweise verglichen) oder der erste Service Worker, der für diese Seite/Site gefunden wurde.

Falls es das erste Mal ist, dass ein Service Worker verfügbar gemacht wurde, wird die Installation versucht, dann nach einer erfolgreichen Installation wird er aktiviert.

Wenn ein bestehender Service Worker verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert — in diesem Stadium wird sie als _worker in waiting_ bezeichnet. Sie wird erst aktiviert, wenn keine Seiten mehr geladen sind, die noch den alten Service Worker verwenden. Sobald keine weiteren Seiten geladen werden müssen, wird der neue Service Worker aktiviert (wird zum _aktiven Worker_). Die Aktivierung kann früher erfolgen, indem [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) verwendet wird, und bestehende Seiten können durch den aktiven Worker mittels [`Clients.claim()`](/de/docs/Web/API/Clients/claim) beansprucht werden.

Sie können das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis abhören; eine Standardaktion ist es, Ihren Service Worker auf die Nutzung vorzubereiten, wenn dieses ausgelöst wird, z.B. durch das Erstellen eines Caches mit der integrierten Speicher-API und das Platzieren von Assets darin, die Sie für den Offline-Betrieb Ihrer App benötigen.

Es gibt auch ein [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignis. Der Punkt, an dem dieses Ereignis ausgelöst wird, ist im Allgemeinen eine gute Gelegenheit, alte Caches und andere mit der vorherigen Version Ihres Service Workers verbundene Dinge aufzuräumen.

Ihr Service Worker kann auf Anfragen über das [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Ereignis reagieren. Sie können die Antwort auf diese Anfragen in beliebiger Weise ändern, indem Sie die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) verwenden.

> [!NOTE]
> Da `install`/`activate`-Ereignisse einige Zeit in Anspruch nehmen könnten, bietet die Spezifikation für Service Worker eine [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode. Sobald sie bei `install` oder `activate`-Ereignissen mit einem Promise aufgerufen wird, warten funktionale Ereignisse wie `fetch` und `push` bis das Promise erfolgreich aufgelöst wird.

Für ein vollständiges Tutorial, wie Sie Ihr erstes einfaches Beispiel erstellen, lesen Sie [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

### Statisches Routing zur Steuerung, wie Ressourcen abgerufen werden

Service Worker können unnötige Leistungskosten verursachen — wenn eine Seite nach längerer Zeit zum ersten Mal geladen wird, muss der Browser warten, bis der Service Worker gestartet und ausgeführt wird, um zu wissen, welche Inhalte geladen werden sollen und ob diese aus einem Cache oder dem Netzwerk stammen sollten.

Wenn Sie bereits im Voraus wissen, wo bestimmte Inhalte abgerufen werden sollen, können Sie den Service Worker ganz umgehen und Ressourcen sofort abrufen. Die Methode [`InstallEvent.addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes) kann für diese und andere Anwendungsfälle verwendet werden.

## Weitere Anwendungsfall-Ideen

Service Worker sind auch für die Verwendung folgender Dinge gedacht:

- Hintergrund-Datenabgleich.
- Reagieren auf Ressourcenanfragen von anderen Ursprüngen.
- Empfang zentralisierter Updates für kostenintensive Daten wie z.B. Geolocation oder Gyroskop, sodass mehrere Seiten einen Datensatz nutzen können.
- Client-seitiges Kompilieren und Abhängigkeitsmanagement von CoffeeScript, weniger, CJS/AMD-Modulen usw. für Entwicklungszwecke.
- Hooks für Hintergrunddienste.
- Benutzerdefinierte Vorlagen basierend auf bestimmten URL-Mustern.
- Leistungsverbesserungen, z.B. Präfluten von Ressourcen, die der Benutzer wahrscheinlich bald benötigen wird, wie die nächsten Bilder in einem Fotoalbum.
- API-Simulation.

In Zukunft werden Service Worker in der Lage sein, einige andere nützliche Dinge für die Webplattform zu tun, die diese näher an die Tragfähigkeit nativer Apps heranbringen. Interessanterweise können und werden andere Spezifikationen beginnen, den Kontext des Service Workers zu nutzen, z.B.:

- [Hintergrundsynchronisation](https://github.com/WICG/background-sync): Starten eines Service Workers, auch wenn keine Benutzer auf der Seite sind, damit Caches aktualisiert werden können usw.
- [Reagieren auf Push-Nachrichten](/de/docs/Web/API/Push_API): Starten eines Service Workers, um Benutzern eine Nachricht zu senden, um sie über neue Inhalte zu informieren.
- Reagieren auf ein bestimmtes Datum & Uhrzeit.
- Eintritt in ein Geofence.

## Schnittstellen

- [`Cache`](/de/docs/Web/API/Cache)
  - : Repräsentiert den Speicher für [`Request`](/de/docs/Web/API/Request) / [`Response`](/de/docs/Web/API/Response)-Objektpaare, die als Teil des Lebenszyklus des [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zwischengespeichert werden.
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
  - : Repräsentiert den Speicher für [`Cache`](/de/docs/Web/API/Cache)-Objekte. Es bietet ein zentrales Verzeichnis aller benannten Caches, auf die ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zugreifen kann, und enthält eine Zuordnung von Zeichenfolgenamen zu entsprechenden [`Cache`](/de/docs/Web/API/Cache)-Objekten.
- [`Client`](/de/docs/Web/API/Client)
  - : Repräsentiert den Gültigkeitsbereich eines Service Worker-Clients. Ein Service Worker-Client ist entweder ein Dokument in einem Browser-Kontext oder ein [`SharedWorker`](/de/docs/Web/API/SharedWorker), der von einem aktiven Worker gesteuert wird.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Repräsentiert einen Container für eine Liste von [`Client`](/de/docs/Web/API/Client)-Objekten; der Hauptweg, um auf die aktiven Service Worker-Clients der aktuellen Herkunft zuzugreifen.
- [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)
  - : Verlängert die Lebensdauer der `install`- und `activate`-Ereignisse, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) im Rahmen des Lebenszyklus des Service Workers ausgelöst werden. Dies stellt sicher, dass keine funktionalen Ereignisse (wie [`FetchEvent`](/de/docs/Web/API/FetchEvent)) an den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet werden, bis es Datenbank-Schemata aktualisiert und veraltete Cache-Einträge gelöscht hat usw.
- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)
  - : Das Ereignisobjekt eines [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignisses, das auf einem Service Worker ausgelöst wird (wenn eine Kanalnachricht auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) von einem anderen Kontext empfangen wird) — verlängert die Lebensdauer solcher Ereignisse.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Der Parameter, der in den [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Handler übergeben wird, `FetchEvent` repräsentiert eine Fetch-Aktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird. Es enthält Informationen über die Anfrage und die resultierende Antwort und bietet die [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode, die es uns ermöglicht, eine beliebige Antwort an die kontrollierte Seite zurückzugeben.
- [`InstallEvent`](/de/docs/Web/API/InstallEvent)
  - : Der Parameter, der in eine [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis-Handlerfunktion übergeben wird, die `InstallEvent`-Schnittstelle repräsentiert eine Installationsaktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird. Als Kind von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) stellt es sicher, dass funktionale Ereignisse wie [`FetchEvent`](/de/docs/Web/API/FetchEvent) während der Installation nicht gesendet werden.
- [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)
  - : Bietet Methoden zur Verwaltung des Vorausladens von Ressourcen mit einem Service Worker.
- [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
  - : Repräsentiert einen Service Worker. Mehrere Browsing-Kontexte (z.B. Seiten, Worker usw.) können mit demselben `ServiceWorker`-Objekt verbunden sein.
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)
  - : Bietet ein Objekt, das den Service Worker als Gesamteinheit im Netzwerk-Ökosystem repräsentiert, einschließlich Funktionen zum Registrieren, Abmelden und Aktualisieren von Service Workern sowie zum Zugriff auf den Status von Service Workern und deren Registrierungen.
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
  - : Repräsentiert den globalen Ausführungskontext eines Service Workers.
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
  - : Repräsentiert eine Service Worker-Registrierung.
- [`WindowClient`](/de/docs/Web/API/WindowClient)
  - : Repräsentiert den Gültigkeitsbereich eines Service Worker-Clients, der ein Dokument in einem Browser-Kontext ist, das von einem aktiven Worker gesteuert wird. Dies ist ein spezieller Typ von [`Client`](/de/docs/Web/API/Client)-Objekt, mit einigen zusätzlichen verfügbaren Methoden und Eigenschaften.

### Erweiterungen zu anderen Schnittstellen

- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verbunden ist.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker)
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt zurück, das Zugriff auf die Registrierung, Entfernung, Aktualisierung und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekten für das [verbundene Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Lebenszyklus eines Service Workers](https://web.dev/articles/service-worker-lifecycle)
- [Beispiel für grundlegenden Code von Service Workern](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- Web-APIs, die mit der Service Worker-API verbunden sind:
  - [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - [Content Index API](/de/docs/Web/API/Content_Index_API)
  - [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
  - [Benachrichtigungen-API](/de/docs/Web/API/Notifications_API)
  - [Zahlungsabwickler-API](/de/docs/Web/API/Payment_Handler_API)
  - [Push-API](/de/docs/Web/API/Push_API)
  - [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
