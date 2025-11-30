---
title: Service Worker API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

Service Worker agieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (wenn verfügbar) sitzen. Sie sollen unter anderem die Erstellung effektiver Offline-Erlebnisse ermöglichen, Netzwerk-Anfragen abfangen und geeignete Maßnahmen basierend auf der Verfügbarkeit des Netzwerks treffen sowie Assets auf dem Server aktualisieren. Sie ermöglichen ebenfalls den Zugriff auf Push-Benachrichtigungen und Hintergrund-Synchronisations-APIs.

> [!NOTE]
> Service Worker sind eine Art von Web Worker. Siehe [Web Worker](/de/docs/Web/API/Web_Workers_API) für allgemeine Informationen über Workertypen und Anwendungsfälle.

## Konzepte und Nutzung von Service Workern

Ein Service Worker ist ein ereignisgesteuerter [Worker](/de/docs/Web/API/Worker), der gegen einen Ursprung und einen Pfad registriert ist. Er nimmt die Form einer JavaScript-Datei an, die die mit ihr verknüpfte Webseite/Website steuern kann, indem sie Navigations- und Ressourcenanforderungen abfängt und modifiziert und Ressourcen in sehr granularer Weise zwischenspeichert, um Ihnen die vollständige Kontrolle darüber zu geben, wie Ihre App in bestimmten Situationen (die offensichtlichste ist, wenn das Netzwerk nicht verfügbar ist) reagiert.

Service Worker laufen in einem Worker-Kontext: sie haben daher keinen DOM-Zugriff und laufen auf einem anderen Thread als das Haupt-JavaScript, das Ihre App betreibt. Sie sind nicht blockierend und darauf ausgelegt, vollständig asynchron zu arbeiten. Folglich können APIs wie synchrones [XHR](/de/docs/Web/API/XMLHttpRequest) und [Web Storage](/de/docs/Web/API/Web_Storage_API) nicht innerhalb eines Service Workers verwendet werden.

Service Worker können JavaScript-Module nicht dynamisch importieren, und [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) wird einen Fehler werfen, wenn es im globalen Scope des Service Workers aufgerufen wird. Statische Importe mit der [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisung sind erlaubt.

Service Worker sind nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar: das bedeutet, dass ihr Dokument über HTTPS bereitgestellt wird, obwohl Browser `http://localhost` ebenfalls als sicheren Kontext behandeln, um die lokale Entwicklung zu erleichtern. HTTP-Verbindungen sind anfällig für bösartige Code-Injektionen durch {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe, und solche Angriffe könnten schlimmer sein, wenn sie Zugang zu diesen leistungsstarken APIs erhalten.

> [!NOTE]
> In Firefox können Sie für Testzwecke Service Worker über HTTP (unsicher) ausführen; aktivieren Sie einfach die Option **Enable Service Workers over HTTP (when toolbox is open)** im Optionen-/Zahnradmenü der Firefox-Entwicklerwerkzeuge.

> [!NOTE]
> Anders als frühere Versuche in diesem Bereich, wie [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/), gehen Service Worker nicht von Annahmen darüber aus, was Sie versuchen zu tun, sondern geben dann nach, wenn diese Annahmen nicht genau richtig sind. Stattdessen geben Service Worker Ihnen eine viel granularere Kontrolle.

> [!NOTE]
> Service Worker machen intensiv Gebrauch von [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), da sie im Allgemeinen auf Antworten warten müssen, nach denen sie mit einer Erfolgs- oder Fehlermeldung reagieren. Die Promise-Architektur ist ideal dafür.

### Registrierung

Ein Service Worker wird zuerst mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Wenn dies erfolgreich ist, wird Ihr Service Worker zum Client heruntergeladen und versucht, für die vom Benutzer innerhalb des gesamten Ursprungs oder eines von Ihnen spezifizierten Teilbereichs aufgerufenen URLs installiert/aktiviert zu werden (siehe unten).

### Herunterladen, Installieren und Aktivieren

An diesem Punkt wird der Lebenszyklus Ihres Service Workers wie folgt ablaufen:

1. Herunterladen
2. Installieren
3. Aktivieren

Der Service Worker wird sofort heruntergeladen, wenn ein Benutzer eine von einem Service Worker kontrollierte Seite/Site das erste Mal aufruft.

Danach wird er aktualisiert, wen:

- Eine Navigation zu einer Seite innerhalb des Geltungsbereichs erfolgt.
- Ein Ereignis auf dem Service Worker ausgelöst wird und er in den letzten 24 Stunden nicht heruntergeladen wurde.

Die Installation wird versucht, wenn festgestellt wird, dass die heruntergeladene Datei neu ist — entweder anders als ein bestehender Service Worker (Byte-weise verglichen), oder der erste für diese Seite/Site gefundene Service Worker ist.

Wenn dies das erste Mal ist, dass ein Service Worker zur Verfügung gestellt wurde, wird die Installation versucht. Nach einer erfolgreichen Installation wird er aktiviert.

Wenn ein vorhandener Service Worker vorhanden ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert — an diesem Punkt wird er als _wartender Worker_ bezeichnet. Er wird erst dann aktiviert, wenn keine neu geladenen Seiten mehr vorhanden sind, die weiterhin den alten Service Worker verwenden. Sobald keine Seiten mehr zu laden sind, aktiviert sich der neue Service Worker (er wird der _aktive Worker_). Die Aktivierung kann früher durch Nutzung von [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) erfolgen und bestehende Seiten können vom aktiven Worker beansprucht werden, indem [`Clients.claim()`](/de/docs/Web/API/Clients/claim) verwendet wird.

Sie können auf das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignis lauschen; eine Standardaktion ist, Ihren Service Worker für die Nutzung vorzubereiten, wenn dies ausgelöst wird, indem Sie zum Beispiel einen Cache mit der integrierten Speicher-API erstellen und Assets darin platzieren, die Sie für den Offline-Betrieb Ihrer App benötigen.

Es gibt auch ein [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignis. Der Punkt, an dem dieses Ereignis ausgelöst wird, ist im Allgemeinen ein guter Zeitpunkt, um alte Caches und andere Dinge zu bereinigen, die mit der vorherigen Version Ihres Service Workers verbunden sind.

Ihr Service Worker kann auf Anforderungen mit dem [`FetchEvent`](/de/docs/Web/API/FetchEvent) Ereignis reagieren. Sie können die Antwort auf diese Anforderungen auf jede gewünschte Weise modifizieren, indem Sie die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) verwenden.

> [!NOTE]
> Da `install`/`activate`-Ereignisse eine Weile dauern können, um abgeschlossen zu werden, stellt die Service Worker-Spezifikation eine [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) Methode zur Verfügung. Sobald diese in `install` oder `activate`-Ereignissen mit einem Promise aufgerufen wird, werden funktionale Ereignisse wie `fetch` und `push` warten, bis das Promise erfolgreich gelöst wurde.

Für ein vollständiges Tutorial, um zu zeigen, wie Sie Ihr erstes einfaches Beispiel aufbauen können, lesen Sie [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

### Verwendung von statischem Routing, um zu kontrollieren, wie Ressourcen abgerufen werden

Service Worker können unnötige Leistungskosten verursachen — wenn eine Seite das erste Mal seit einiger Zeit geladen wird, muss der Browser warten, bis der Service Worker gestartet und ausgeführt wird, um zu wissen, welche Inhalte geladen werden sollen und ob sie aus einem Cache oder dem Netzwerk stammen sollen.

Wenn Sie bereits im Voraus wissen, woher bestimmte Inhalte bezogen werden sollen, können Sie den Service Worker ganz umgehen und Ressourcen sofort abrufen. Die Methode [`InstallEvent.addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes) kann verwendet werden, um diese Anwendungsfälle und mehr zu implementieren.

## Weitere Ideen für Anwendungsfälle

Service Worker sollen auch für Dinge wie folgende verwendet werden:

- Hintergrunddaten-Synchronisation.
- Reaktion auf Ressourcenanforderungen aus anderen Ursprüngen.
- Empfang zentralisierter Updates für Daten, deren Berechnung teuer ist, wie z. B. Geolokalisierung oder Gyroskop, sodass mehrere Seiten einen Satz Daten nutzen können.
- Client-seitige Kompilierung und Abhängigkeitsmanagement von CoffeeScript, Less, CJS/AMD-Modulen usw. für Entwicklungszwecke.
- Hooks für Hintergrunddienste.
- Benutzerdefinierte Templating basierend auf bestimmten URL-Mustern.
- Leistungsverbesserungen, z. B. Vorabrufen von Ressourcen, die der Benutzer wahrscheinlich bald benötigt, wie die nächsten Bilder in einem Fotoalbum.
- API-Mocking.

In Zukunft werden Service Worker in der Lage sein, mehrere andere nützliche Dinge für die Web-Plattform zu tun, die sie der Anwendungsfähigkeit nativer Apps näher bringen werden. Interessanterweise können und werden andere Spezifikationen anfangen, den Service Worker-Kontext zu nutzen, zum Beispiel:

- [Hintergrund-Synchronisierung](https://github.com/WICG/background-sync): Starten eines Service Workers, auch wenn keine Benutzer auf der Webseite sind, sodass Caches aktualisiert werden können usw.
- [Reagieren auf Push-Nachrichten](/de/docs/Web/API/Push_API): Starten eines Service Workers, um Benutzern eine Nachricht zu senden, dass neue Inhalte verfügbar sind.
- Reagieren auf ein bestimmtes Datum & Uhrzeit.
- Eintritt in einen Geofence.

## Schnittstellen

- [`Cache`](/de/docs/Web/API/Cache)
  - : Repräsentiert den Speicher für [`Request`](/de/docs/Web/API/Request) / [`Response`](/de/docs/Web/API/Response) Objektpaare, die als Teil des [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Lebenszyklus zwischengespeichert werden.
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
  - : Repräsentiert den Speicher für [`Cache`](/de/docs/Web/API/Cache) Objekte. Es bietet ein Hauptverzeichnis aller benannten Caches, auf die ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zugreifen kann, und pflegt eine Zuordnung von Namen zu den entsprechenden [`Cache`](/de/docs/Web/API/Cache) Objekten.
- [`Client`](/de/docs/Web/API/Client)
  - : Repräsentiert den Geltungsbereich eines Service Worker Clients. Ein Service Worker Client ist entweder ein Dokument in einem Browser-Kontext oder ein [`SharedWorker`](/de/docs/Web/API/SharedWorker), der von einem aktiven Worker gesteuert wird.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Repräsentiert einen Container für eine Liste von [`Client`](/de/docs/Web/API/Client) Objekten; der Hauptweg, um auf die aktiven Service Worker Clients am aktuellen Ursprung zuzugreifen.
- [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)
  - : Verlängert die Lebenszeit der `install` und `activate`-Ereignisse, die im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) als Teil des Service Worker-Lebenszyklus ausgelöst werden. Dies stellt sicher, dass keine funktionalen Ereignisse (wie [`FetchEvent`](/de/docs/Web/API/FetchEvent)) an den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet werden, bis er Datenbankschemata aktualisiert und veraltete Cache-Einträge löscht usw.
- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)
  - : Das Ereignisobjekt eines [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event) Ereignisses, das auf einem Service Worker ausgelöst wird (wenn eine Kanalnachricht im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus einem anderen Kontext empfangen wird) — verlängert die Lebenszeit solcher Ereignisse.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Der Parameter, der an den [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Handler übergeben wird, `FetchEvent` repräsentiert eine fetch-Aktion, die im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird. Es enthält Informationen über die Anfrage und die resultierende Antwort und bietet die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith), die es uns ermöglicht, eine beliebige Antwort zurück an die kontrollierte Seite zu liefern.
- [`InstallEvent`](/de/docs/Web/API/InstallEvent)
  - : Der Parameter, der an einen [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignishandler übergeben wird, die `InstallEvent`-Schnittstelle stellt eine Installationsaktion dar, die im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird. Als Kind von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) stellt es sicher, dass funktionale Ereignisse wie [`FetchEvent`](/de/docs/Web/API/FetchEvent) während der Installation nicht ausgelöst werden.
- [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)
  - : Bietet Methoden zur Verwaltung der Vorabladen von Ressourcen mit einem Service Worker.
- [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
  - : Repräsentiert einen Service Worker. Mehrere Browser-Kontexte (z. B. Seiten, Worker usw.) können mit demselben `ServiceWorker`-Objekt verbunden sein.
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)
  - : Bietet ein Objekt, das den Service Worker als eine gesamte Einheit im Netzwerk-Ökosystem darstellt, einschließlich Einrichtungen zum Registrieren, Abregistrieren und Aktualisieren von Service Workern sowie zum Zugriff auf den Zustand von Service Workern und deren Registrierungen.
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
  - : Repräsentiert den globalen Ausführungskontext eines Service Workers.
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
  - : Repräsentiert eine Service Worker-Registrierung.
- [`WindowClient`](/de/docs/Web/API/WindowClient)
  - : Repräsentiert den Geltungsbereich eines Service Worker Clients, das ein Dokument in einem Browser-Kontext ist, das von einem aktiven Worker gesteuert wird. Dies ist eine spezielle Art von [`Client`](/de/docs/Web/API/Client) Objekt, mit einigen zusätzlichen Methoden und Eigenschaften, die verfügbar sind.

### Erweiterungen anderer Schnittstellen

- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage) Objekt zurück, das mit dem aktuellen Kontext verbunden ist.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker)
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Objekt zurück, das Zugriff auf die Registrierung, Entfernung, Aktualisierung und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekten für das [verbundene Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Lebenszyklus von Service Workern](https://web.dev/articles/service-worker-lifecycle)
- [Grundlegendes Code-Beispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- Web-APIs, die mit der Service Worker API verwandt sind:
  - [Hintergrund-Fetch-API](/de/docs/Web/API/Background_Fetch_API)
  - [Hintergrund-Synchronisations-API](/de/docs/Web/API/Background_Synchronization_API)
  - [Inhalts-Index-API](/de/docs/Web/API/Content_Index_API)
  - [Cookie-Store-API](/de/docs/Web/API/Cookie_Store_API)
  - [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API)
  - [Zahlungsabwickler-API](/de/docs/Web/API/Payment_Handler_API)
  - [Push-API](/de/docs/Web/API/Push_API)
  - [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
