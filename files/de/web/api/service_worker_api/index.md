---
title: Service Worker API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 5bfda76696a61ed92cbaafac78f439b7b927ef8f
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

Service Worker fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (wenn verfügbar) arbeiten. Sie sind unter anderem dazu gedacht, die Erstellung effektiver Offline-Erlebnisse zu ermöglichen, Netzwerk-Anfragen abzufangen und geeignete Maßnahmen zu ergreifen, je nachdem, ob das Netzwerk verfügbar ist, und Assets auf dem Server zu aktualisieren. Zudem ermöglichen sie den Zugriff auf Push-Benachrichtigungen und Hintergrund-Sync-APIs.

## Konzepte und Nutzung von Service Worker

Ein Service Worker ist ein ereignisgesteuerter [Worker](/de/docs/Web/API/Worker), der für einen Ursprung und einen Pfad registriert ist. Er hat die Form einer JavaScript-Datei, die die mit ihr verbundene Webseite/-seite steuern kann, indem sie Navigations- und Ressourcenanfragen abfängt und modifiziert und in einem sehr granularen Umfang Ressourcen cached, um Ihnen die vollständige Kontrolle zu geben, wie Ihre App in bestimmten Situationen funktioniert (die offensichtlichste ist, wenn das Netzwerk nicht verfügbar ist).

Service Worker laufen in einem Worker-Kontext: Sie haben daher keinen Zugriff auf das DOM und laufen in einem anderen Thread als das Haupt-JavaScript, das Ihre App antreibt. Sie sind nicht blockierend und wurden so konzipiert, dass sie vollständig asynchron laufen. Daher können APIs wie synchroner [XHR](/de/docs/Web/API/XMLHttpRequest) und [Web Storage](/de/docs/Web/API/Web_Storage_API) nicht in einem Service Worker verwendet werden.

Service Worker können keine JavaScript-Module dynamisch importieren, und [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#browser_compatibility) wird einen Fehler auslösen, wenn es im globalen Bereich eines Service Workers aufgerufen wird. Statische Importe mit der [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisung sind erlaubt.

Service Worker sind nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar: Das bedeutet, dass ihre Dokumente über HTTPS bereitgestellt werden müssen, obwohl Browser `http://localhost` auch als sicheren Kontext behandeln, um die lokale Entwicklung zu erleichtern. HTTP-Verbindungen sind anfällig für die Einschleusung von schädlichem Code durch {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe, und solche Angriffe könnten schlimmer sein, wenn der Zugriff auf diese mächtigen APIs erlaubt wäre.

> [!NOTE]
> In Firefox können Service Worker zu Testzwecken auch über HTTP (unsicher) ausgeführt werden; aktivieren Sie einfach die Option **Service Workers über HTTP aktivieren (wenn das Toolbox geöffnet ist)** in den Firefox-DevTools-Optionen-/Zahnradeinstellungen.

> [!NOTE]
> Anders als frühere Versuche in diesem Bereich, wie [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/), treffen Service Worker keine Annahmen darüber, was Sie versuchen zu tun, um dann bei ungenauen Annahmen nicht zu funktionieren. Stattdessen bieten Service Worker eine viel feinere Kontrolle.

> [!NOTE]
> Service Worker nutzen [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) intensiv, da sie in der Regel auf Antworten warten, auf die sie dann mit einer Aktion bei Erfolg oder Misserfolg reagieren können. Die Promise-Architektur eignet sich ideal dafür.

### Registrierung

Ein Service Worker wird zuerst mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Wenn erfolgreich, wird Ihr Service Worker zum Client heruntergeladen und versucht, Installation/Aktivierung (siehe unten) für URLs, die vom Benutzer innerhalb des gesamten Ursprungs oder eines von Ihnen angegebenen Subsets aufgerufen werden.

### Herunterladen, installieren und aktivieren

An diesem Punkt folgt Ihr Service Worker dem folgenden Lebenszyklus:

1. Herunterladen
2. Installation
3. Aktivierung

Der Service Worker wird sofort heruntergeladen, wenn ein Nutzer eine von einem Service Worker kontrollierte Seite zum ersten Mal besucht.

Danach wird er aktualisiert, wenn:

- Eine Navigation zu einer im Gültigkeitsbereich liegenden Seite erfolgt.
- Ein Ereignis für den Service Worker ausgelöst wird und er in den letzten 24 Stunden nicht heruntergeladen wurde.

Die Installation wird versucht, wenn die heruntergeladene Datei neu ist – entweder anders als ein bestehender Service Worker (byteweise verglichen) oder der erste für diese Seite/Site gefundene Service Worker.

Wenn es das erste Mal ist, dass ein Service Worker verfügbar gemacht wurde, wird die Installation versucht und nach einer erfolgreichen Installation wird er aktiviert.

Wenn ein bestehender Service Worker verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert – zu diesem Zeitpunkt wird er der _wartende Worker_ genannt. Er wird nur aktiviert, wenn keine Seiten mehr geladen sind, die den alten Service Worker noch nutzen. Sobald keine Seiten mehr zu laden sind, aktiviert sich der neue Service Worker (wird zum _aktiven Worker_). Eine schnellere Aktivierung kann mit [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) erzielt werden und vorhandene Seiten können vom aktiven Worker mit [`Clients.claim()`](/de/docs/Web/API/Clients/claim) beansprucht werden.

Sie können auf das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis horchen; eine Standardaktion besteht darin, Ihren Service Worker für die Nutzung vorzubereiten, wenn dieses Ereignis ausgelöst wird, beispielsweise durch das Erstellen eines Caches mit der eingebauten Speicher-API und das Ablegen von Assets darin, die Sie für den Offline-Betrieb Ihrer Anwendung benötigen.

Es gibt auch ein [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignis. Der Punkt, an dem dieses Ereignis eintritt, ist in der Regel ein guter Moment, um alte Caches und andere mit der vorherigen Version Ihres Service Workers verbundene Dinge aufzuräumen.

Ihr Service Worker kann auf Anfragen mit dem [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Ereignis reagieren. Sie können die Antwort auf diese Anfragen nach Belieben ändern, indem Sie die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) verwenden.

> [!NOTE]
> Da `install`/`activate`-Ereignisse einige Zeit in Anspruch nehmen könnten, bietet die Service Worker-Spezifikation eine [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode. Sobald diese auf `install`- oder `activate`-Ereignissen mit einem Promise aufgerufen wird, warten Funktionsevents wie `fetch` und `push` bis das Promise erfolgreich aufgelöst ist.

Für ein vollständiges Tutorial, das zeigt, wie Sie Ihr erstes grundlegendes Beispiel aufbauen, lesen Sie [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

### Verwendung von statischem Routing zur Steuerung, wie Ressourcen abgerufen werden

Service Worker können unnötige Leistungskosten verursachen – wenn eine Seite das erste Mal seit einiger Zeit geladen wird, muss der Browser warten, bis der Service Worker gestartet wird und läuft, um zu wissen, welche Inhalte geladen werden sollen und ob sie aus einem Cache oder dem Netzwerk stammen sollen.

Wenn Sie bereits im Voraus wissen, wo bestimmte Inhalte abgerufen werden sollen, können Sie den Service Worker ganz umgehen und Ressourcen sofort abrufen. Die Methode [`InstallEvent.addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes) kann verwendet werden, um diesen Anwendungsfall und mehr zu implementieren.

## Weitere Nutzungsideen

Service Worker sind auch für folgende Dinge gedacht:

- Synchronisation von Daten im Hintergrund.
- Anfragen nach Ressourcen von anderen Ursprüngen bearbeiten.
- Zentralisierte Updates für kostenintensive Daten wie Geolokation oder Gyroskop empfangen, sodass mehrere Seiten einen einzigen Datensatz nutzen können.
- Client-seitiges Kompilieren und Abhängigkeitsmanagement von CoffeeScript, Less, CJS/AMD-Modulen etc. zu Entwicklungszwecken.
- Hooks für Hintergrundservices.
- Benutzerdefiniertes Templating basierend auf bestimmten URL-Mustern.
- Leistungsverbesserungen, beispielsweise Pre-Fetching von Ressourcen, die der Nutzer bald benötigen könnte, wie die nächsten Bilder in einem Fotoalbum.
- API-Mocking.

In Zukunft werden Service Worker in der Lage sein, mehrere andere nützliche Dinge für die Webplattform zu tun, die sie näher an die Machbarkeit nativer Apps bringen. Interessanterweise können und werden andere Spezifikationen den Service Worker-Kontext nutzen, zum Beispiel:

- [Hintergrundsynchronisation](https://github.com/WICG/background-sync): Starten Sie einen Service Worker, auch wenn keine Benutzer auf der Seite sind, damit Caches aktualisiert werden können, etc.
- [Reaktion auf Push-Nachrichten](/de/docs/Web/API/Push_API): Starten Sie einen Service Worker, um Nutzern eine Nachricht zu senden, die ihnen mitteilt, dass neue Inhalte verfügbar sind.
- Reaktion auf eine bestimmte Zeit und Datum.
- Eintritt in einen Geo-Zaun.

## Schnittstellen

- [`Cache`](/de/docs/Web/API/Cache)
  - : Repräsentiert den Speicher für [`Request`](/de/docs/Web/API/Request) / [`Response`](/de/docs/Web/API/Response)-Objektpaare, die als Teil des [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Lebenszyklus zwischengespeichert werden.
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
  - : Repräsentiert den Speicher für [`Cache`](/de/docs/Web/API/Cache)-Objekte. Es bietet ein Hauptverzeichnis aller benannten Caches, die ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zugänglich hat, und pflegt eine Zuordnung von Zeichenfolgenamen zu entsprechenden [`Cache`](/de/docs/Web/API/Cache)-Objekten.
- [`Client`](/de/docs/Web/API/Client)
  - : Repräsentiert den Gültigkeitsbereich eines Service Worker-Clients. Ein Service Worker-Client ist entweder ein Dokument in einem Browser-Kontext oder ein [`SharedWorker`](/de/docs/Web/API/SharedWorker), das von einem aktiven Worker gesteuert wird.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Repräsentiert einen Container für eine Liste von [`Client`](/de/docs/Web/API/Client)-Objekten; der Hauptweg, um auf die aktiven Service Worker-Clients am aktuellen Ursprung zuzugreifen.
- [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)
  - : Verlängert die Lebensdauer der `install` und `activate`-Ereignisse, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) als Teil des Service Worker-Lebenszyklus ausgelöst werden. Dies stellt sicher, dass keine funktionalen Ereignisse (wie [`FetchEvent`](/de/docs/Web/API/FetchEvent)) an den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet werden, bis er Datenbankschemata aktualisiert und veraltete Cache-Einträge löscht, usw.
- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)
  - : Das Ereignisobjekt eines [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignisses, das bei einem Service Worker ausgelöst wird (wenn eine Kanalnachricht im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus einem anderen Kontext empfangen wird) – verlängert die Lebensdauer solcher Ereignisse.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Der Parameter, der an den [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Handler übergeben wird, `FetchEvent` repräsentiert einen Abrufvorgang, der auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird. Es enthält Informationen über die Anfrage und die resultierende Antwort und bietet die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith), die es uns ermöglicht, eine beliebige Antwort zurück an die kontrollierte Seite zu liefern.
- [`InstallEvent`](/de/docs/Web/API/InstallEvent)
  - : Der Parameter, der an eine [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignishandlerfunktion übergeben wird, die `InstallEvent`-Schnittstelle repräsentiert einen Installationsvorgang, der auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird. Als Kind von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) stellt es sicher, dass funktionale Ereignisse wie [`FetchEvent`](/de/docs/Web/API/FetchEvent) während der Installation nicht ausgelöst werden.
- [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)
  - : Bietet Methoden zum Verwalten des Vorladens von Ressourcen mit einem Service Worker.
- [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
  - : Repräsentiert einen Service Worker. Mehrere Browsing-Kontexte (z. B. Seiten, Worker usw.) können mit demselben `ServiceWorker`-Objekt verbunden sein.
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)
  - : Bietet ein Objekt, das den Service Worker als Gesamteinheit im Netzwerk-Ökosystem repräsentiert, einschließlich Einrichtungen zum Registrieren, Deregistrieren und Aktualisieren von Service Workern sowie zum Zugreifen auf den Status von Service Workern und deren Registrierungen.
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
  - : Repräsentiert den globalen Ausführungskontext eines Service Workers.
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
  - : Repräsentiert eine Service Worker-Registrierung.
- [`WindowClient`](/de/docs/Web/API/WindowClient)
  - : Repräsentiert den Gültigkeitsbereich eines Service Worker-Clients, der ein Dokument in einem Browser-Kontext ist und von einem aktiven Worker kontrolliert wird. Dies ist eine spezielle Art von [`Client`](/de/docs/Web/API/Client)-Objekt, mit einigen zusätzlichen Methoden und Eigenschaften.

### Erweiterungen zu anderen Schnittstellen

- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das dem aktuellen Kontext zugeordnet ist.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker)
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt zurück, das Zugriff auf die Registrierung, Entfernung, Aktualisierung und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekten für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service Worker Lifecycle](https://web.dev/articles/service-worker-lifecycle)
- [Basisbeispiel für Service Worker-Code](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- Web-APIs, die mit der Service Worker-API verbunden sind:
  - [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - [Content Index API](/de/docs/Web/API/Content_Index_API)
  - [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
  - [Notifications API](/de/docs/Web/API/Notifications_API)
  - [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
  - [Push API](/de/docs/Web/API/Push_API)
  - [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
