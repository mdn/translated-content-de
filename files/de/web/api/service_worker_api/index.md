---
title: Service Worker API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 8faebcb722f63febdcce0d5f27f68f8cc2b3533e
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

Service Worker agieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (wenn verfügbar) sitzen. Sie sollen unter anderem das Erstellen effektiver Offline-Erfahrungen ermöglichen, Netzwerk-Anfragen abfangen und entsprechende Maßnahmen basierend darauf ergreifen, ob das Netzwerk verfügbar ist und Assets, die sich auf dem Server befinden, aktualisieren. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Background Sync APIs.

> [!NOTE]
> Service Worker sind eine Art von Web Worker. Siehe [Webworkers](/de/docs/Web/API/Web_Workers_API) für allgemeine Informationen zu Workertypen und Anwendungsfällen.

## Konzepte und Nutzung von Service Workern

Ein Service Worker ist ein ereignisgesteuerter [Worker](/de/docs/Web/API/Worker), der gegen eine Origin und einen Pfad registriert wird. Er nimmt die Form einer JavaScript-Datei an, die die zugehörige Webseite bzw. -site steuern kann, indem er Navigations- und Ressourcenanfragen abfängt und modifiziert und Ressourcen auf sehr granulare Weise zwischenspeichert, um Ihnen komplette Kontrolle darüber zu geben, wie sich Ihre App in bestimmten Situationen verhält (die offensichtlichste ist, wenn das Netzwerk nicht verfügbar ist).

Service Worker laufen in einem Worker-Kontext: Daher haben sie keinen DOM-Zugriff und laufen in einem anderen Thread als das Haupt-JavaScript, das Ihre App antreibt. Sie sind nicht blockierend und dafür ausgelegt, vollständig asynchron zu sein. Infolgedessen können APIs wie das synchronisierte [XHR](/de/docs/Web/API/XMLHttpRequest) und der [Web Storage](/de/docs/Web/API/Web_Storage_API) nicht innerhalb eines Service Workers verwendet werden.

Service Worker können keine JavaScript-Module dynamisch importieren, und [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) löst einen Fehler aus, wenn es im globalen Scope eines Service Workers aufgerufen wird. Statische Importe mit der [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisung sind erlaubt.

Service Worker sind nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar: Das bedeutet, dass ihr Dokument über HTTPS bereitgestellt wird, obwohl Browser auch `http://localhost` als sicheren Kontext behandeln, um die lokale Entwicklung zu erleichtern. HTTP-Verbindungen sind anfällig für eine bösartige Code-Injektion durch {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe, und solche Angriffe könnten schlimmer sein, wenn sie Zugang zu diesen mächtigen APIs hätten.

> [!NOTE]
> In Firefox können Sie für Tests Service Worker über HTTP (unsicher) betreiben; aktivieren Sie einfach die Option **Enable Service Workers over HTTP (when toolbox is open)** im Firefox DevTools-Optionen-/Zahnrad-Menü.

> [!NOTE]
> Anders als frühere Versuche in diesem Bereich wie [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/) treffen Service Worker keine Annahmen darüber, was Sie zu tun versuchen, die dann fehlschlagen, wenn diese Annahmen nicht genau richtig sind. Stattdessen geben Service Worker Ihnen eine viel granularere Kontrolle.

> [!NOTE]
> Service Worker machen starken Gebrauch von [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), da sie im Allgemeinen darauf warten, dass Antworten eintreffen, nach denen sie mit einer Erfolg- oder Fehlschlagaktion reagieren. Die Architektur von Promises ist hierfür ideal.

### Registrierung

Ein Service Worker wird zuerst mit der [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register)-Methode registriert. Bei Erfolg wird Ihr Service Worker zum Client heruntergeladen und versucht, die Installation/Aktivierung (siehe unten) für URLs, die vom Benutzer innerhalb der gesamten Origin oder eines von Ihnen angegebenen Subsets abgerufen werden, durchzuführen.

### Herunterladen, installieren und aktivieren

An diesem Punkt folgt der Lebenszyklus Ihres Service Workers folgenden Schritten:

1. Herunterladen
2. Installieren
3. Aktivieren

Der Service Worker wird sofort heruntergeladen, wenn ein Benutzer erstmals eine von einem Service Worker gesteuerte Webseite/-seite aufruft.

Danach wird er aktualisiert, wenn:

- Eine Navigation zu einer in-Scope-Seite stattfindet.
- Ein Ereignis auf dem Service Worker ausgelöst wird und er in den letzten 24 Stunden nicht heruntergeladen wurde.

Die Installation wird versucht, wenn die heruntergeladene Datei als neu erkannt wird — entweder im Vergleich zu einem bestehenden Service Worker (byteweise verglichen) oder dem ersten Service Worker, der für diese Seite/Site gefunden wurde.

Wenn dies das erste Mal ist, dass ein Service Worker verfügbar gemacht wird, wird die Installation versucht und nach einer erfolgreichen Installation wird er aktiviert.

Wenn ein bestehender Service Worker verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert - in diesem Moment wird sie als _wartender Worker_ bezeichnet. Sie wird erst aktiviert, wenn keine Seiten mehr geladen sind, die noch den alten Service Worker verwenden. Sobald keine weiteren Seiten mehr geladen sind, wird der neue Service Worker aktiviert (wird zum _aktiven Worker_). Die Aktivierung kann früher erfolgen, indem [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) verwendet wird, und bestehende Seiten können durch den aktiven Worker mit [`Clients.claim()`](/de/docs/Web/API/Clients/claim) beansprucht werden.

Sie können auf das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis hören; eine Standardaktion besteht darin, Ihren Service Worker bei der Auslösung auf die Nutzung vorzubereiten, zum Beispiel durch das Erstellen eines Caches mithilfe der eingebauten Speicher-API und das Platzieren der Assets darin, die Sie benötigen, um Ihre App offline auszuführen.

Es gibt auch ein [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignis. Der Zeitpunkt, an dem dieses Ereignis ausgelöst wird, ist im Allgemeinen eine gute Gelegenheit, alte Caches und andere mit der vorherigen Version Ihres Service Workers verknüpfte Dinge zu bereinigen.

Ihr Service Worker kann auf Anfragen mit dem [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Ereignis reagieren. Sie können die Antwort auf diese Anfragen nach Belieben ändern, indem Sie die [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode verwenden.

> [!NOTE]
> Weil `install`- und `activate`-Ereignisse einige Zeit dauern können, stellt die Service Worker Spezifikation eine [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode zur Verfügung. Sobald sie auf `install` oder `activate`-Ereignissen mit einem Promise aufgerufen wird, warten funktionale Ereignisse wie `fetch` und `push`, bis das Promise erfolgreich aufgelöst wird.

Für ein vollständiges Tutorial, das Ihnen zeigt, wie Sie Ihr erstes einfaches Beispiel aufbauen, lesen Sie [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

### Statisches Routing zur Steuerung der Ressourcenabrufe verwenden

Service Worker können unnötige Leistungskosten verursachen — wenn eine Seite nach langer Zeit zum ersten Mal geladen wird, muss der Browser warten, bis der Service Worker gestartet und ausgeführt ist, um zu wissen, welche Inhalte geladen werden sollen und ob sie aus einem Cache oder dem Netzwerk stammen sollen.

Wenn Sie bereits im Voraus wissen, wo bestimmte Inhalte abgerufen werden sollen, können Sie den Service Worker ganz umgehen und die Ressourcen sofort abrufen. Die [`InstallEvent.addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes)-Methode kann verwendet werden, um diesen Anwendungsfall und mehr zu implementieren.

## Ideen für weitere Anwendungsfälle

Service Worker sind auch dafür gedacht, für Dinge wie Folgendes verwendet zu werden:

- Hintergrund-Datensynchronisation.
- Antwort auf Ressourcenanforderungen aus anderen Ursprüngen.
- Empfang zentralisierter Aktualisierungen für aufwändig zu berechnende Daten wie Geolokation oder Gyroskop, sodass mehrere Seiten einen Satz von Daten verwenden können.
- Client-seitiges Kompilieren und Abhängigkeitsmanagement von CoffeeScript, Less, CJS/AMD-Modulen usw. für Entwicklungszwecke.
- Hooks für Hintergrunddienste.
- Benutzerdefiniertes Templating basierend auf bestimmten URL-Mustern.
- Leistungsverbesserungen, beispielsweise vorab zu laden, was der Benutzer wahrscheinlich bald benötigt, z.B. die nächsten Bilder in einem Fotoalbum.
- API-Mocking.

In Zukunft werden Service Worker in der Lage sein, verschiedene andere nützliche Dinge für die Webplattform zu tun, die es auf die native Anwendbarkeit bringen. Interessanterweise können und werden andere Spezifikationen beginnen, den Service Worker-Kontext zu nutzen, zum Beispiel:

- [Hintergrundsynchronisation](https://github.com/WICG/background-sync): Einen Service Worker auch dann starten, wenn keine Benutzer auf der Seite sind, damit Caches aktualisiert werden können, usw.
- [Reaktion auf Push-Nachrichten](/de/docs/Web/API/Push_API): Einen Service Worker starten, um Benutzer eine Nachricht zu senden und Ihnen mitzuteilen, dass neue Inhalte verfügbar sind.
- Reaktion auf eine bestimmte Zeit und Datum.
- Eintreten in einen Geofence.

## Schnittstellen

- [`Cache`](/de/docs/Web/API/Cache)
  - : Repräsentiert den Speicher für [`Request`](/de/docs/Web/API/Request)/[`Response`](/de/docs/Web/API/Response)-Objektpaare, die als Teil des Lebenszyklus des [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zwischengespeichert werden.
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
  - : Repräsentiert den Speicher für [`Cache`](/de/docs/Web/API/Cache)-Objekte. Es bietet ein zentrales Verzeichnis von allen benannten Caches, auf die ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zugreifen kann, und behält eine Zuordnung von String-Namen zu entsprechenden [`Cache`](/de/docs/Web/API/Cache)-Objekten bei.
- [`Client`](/de/docs/Web/API/Client)
  - : Repräsentiert den Umfang eines Service Worker-Clients. Ein Service Worker-Client ist entweder ein Dokument in einem Browserkontext oder ein [`SharedWorker`](/de/docs/Web/API/SharedWorker), das von einem aktiven Worker gesteuert wird.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Repräsentiert einen Container für eine Liste von [`Client`](/de/docs/Web/API/Client)-Objekten; die hauptsächliche Methode, um Zugriff auf die aktiven Service Worker-Clients am aktuellen Ursprung zu erhalten.
- [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)
  - : Verlängert die Lebensdauer der `install`- und `activate`-Ereignisse, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) als Teil des Lebenszyklus eines Service Workers ausgelöst werden. Es sorgt dafür, dass funktionale Ereignisse (wie [`FetchEvent`](/de/docs/Web/API/FetchEvent)) nicht an den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet werden, bevor es Datenbankschemata aktualisiert und veraltete Cache-Einträge löscht usw.
- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)
  - : Das Ereignis-Objekt eines [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignisses, das auf einem Service Worker ausgelöst wird (wenn eine Kanalnachricht auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus einem anderen Kontext eingeht) — verlängert die Lebensdauer solcher Ereignisse.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Der Parameter, der in den [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Handler übergeben wird, `FetchEvent` repräsentiert eine Abrufaktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird. Es enthält Informationen über die Anfrage und die resultierende Antwort und bietet die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith), die es uns ermöglicht, eine willkürliche Antwort an die gesteuerte Seite zurückzugeben.
- [`InstallEvent`](/de/docs/Web/API/InstallEvent)
  - : Der Parameter, der an eine [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis-Handler-Funktion übergeben wird, die `InstallEvent`-Schnittstelle repräsentiert eine Installationsaktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird. Als Kind von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) stellt sie sicher, dass funktionale Ereignisse wie [`FetchEvent`](/de/docs/Web/API/FetchEvent) während der Installation nicht ausgelöst werden.
- [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)
  - : Bietet Methoden zum Verwalten des Vorladens von Ressourcen mit einem Service Worker.
- [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
  - : Repräsentiert einen Service Worker. Mehrere Browsing-Kontexte (z.B. Seiten, Worker usw.) können mit demselben `ServiceWorker`-Objekt assoziiert sein.
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)
  - : Bietet ein Objekt, das den Service Worker als gesamte Einheit im Netzwerk-Ökosystem repräsentiert, einschließlich Funktionen zum Registrieren, Deregistrieren und Aktualisieren von Service Workern sowie zum Zugriff auf den Status von Service Workern und deren Registrierungen.
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
  - : Repräsentiert den globalen Ausführungskontext eines Service Workers.
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
  - : Repräsentiert eine Service Worker-Registrierung.
- [`WindowClient`](/de/docs/Web/API/WindowClient)
  - : Repräsentiert den Umfang eines Service Worker-Clients, das ein Dokument in einem Browserkontext ist, gesteuert von einem aktiven Worker. Dies ist eine spezielle Art von [`Client`](/de/docs/Web/API/Client)-Objekt, mit einigen zusätzlichen Methoden und Eigenschaften verfügbar.

### Erweiterungen zu anderen Schnittstellen

- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt für den aktuellen Kontext zurück.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker)
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt zurück, das Zugang zur Registrierung, Entfernung, Aktualisierung und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekten für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Lebenszyklus eines Service Workers](https://web.dev/articles/service-worker-lifecycle)
- [Beispiel für einfachen Service Worker-Code](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- Web-APIs, die mit der Service Worker API zusammenhängen:
  - [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - [Content Index API](/de/docs/Web/API/Content_Index_API)
  - [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
  - [Notifications API](/de/docs/Web/API/Notifications_API)
  - [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
  - [Push API](/de/docs/Web/API/Push_API)
  - [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
