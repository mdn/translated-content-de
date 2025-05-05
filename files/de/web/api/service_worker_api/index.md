---
title: Service Worker API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 7b78b0aff4dbe69cf97e3032ed587f1378e886be
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

Service Worker fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (sofern verfügbar) sitzen. Sie sind unter anderem dazu gedacht, die Erstellung effizienter Offline-Erfahrungen zu ermöglichen, Netzwerk-Anfragen abzufangen und entsprechende Maßnahmen zu ergreifen, je nachdem ob das Netzwerk verfügbar ist, und Ressourcen, die sich auf dem Server befinden, zu aktualisieren. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Synchronisierungs-APIs.

## Konzepte und Einsatzmöglichkeiten von Service Workern

Ein Service Worker ist ein ereignisgesteuerter [Worker](/de/docs/Web/API/Worker), der für eine Origin und einen Pfad registriert ist. Er nimmt die Form einer JavaScript-Datei an, die die zugehörige Webseite/Seite steuern kann, indem sie Navigations- und Ressourcenanfragen abfängt und modifiziert sowie Ressourcen sehr detailliert zwischenspeichert, um Ihnen vollständige Kontrolle darüber zu geben, wie Ihre App in bestimmten Situationen reagiert (das offensichtlichste Beispiel ist, wenn das Netzwerk nicht verfügbar ist).

Service Worker laufen in einem Worker-Kontext: Daher haben sie keinen Zugriff auf das DOM und laufen in einem anderen Thread als das Haupt-JavaScript, das Ihre App betreibt. Sie sind nicht blockierend und wurden so konzipiert, dass sie vollständig asynchron arbeiten. Dadurch können APIs wie synchrone [XHR](/de/docs/Web/API/XMLHttpRequest) und [Web Storage](/de/docs/Web/API/Web_Storage_API) nicht innerhalb eines Service Workers verwendet werden.

Service Worker können keine JavaScript-Module dynamisch importieren, und [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#browser_compatibility) führt zu einem Fehler, wenn es im globalen Umfang eines Service Workers aufgerufen wird. Statische Importe mit der [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Anweisung sind erlaubt.

Service Worker laufen nur über HTTPS, aus Sicherheitsgründen. Am bedeutendsten ist, dass HTTP-Verbindungen anfällig für bösartige Code-Injektionen durch {{Glossary("MitM", "Man-in-the-Middle")}} Angriffe sind, und solche Angriffe könnten schwerwiegender sein, wenn sie Zugang zu diesen leistungsstarken APIs haben. In Firefox sind Service Worker APIs auch verborgen und können nicht verwendet werden, wenn der Nutzer im [privaten Browsing-Modus](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) ist.

> [!NOTE]
> In Firefox können Sie zum Testen Service Worker über HTTP (unsicher) ausführen; aktivieren Sie einfach die Option **Enable Service Workers over HTTP (when toolbox is open)** im Firefox DevTools Options/Gear-Menü.

> [!NOTE]
> Im Gegensatz zu früheren Ansätzen in diesem Bereich wie [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/) machen Service Worker keine Annahmen darüber, was Sie versuchen zu tun, um dann zu scheitern, wenn diese Annahmen nicht genau richtig sind. Stattdessen geben Ihnen Service Worker viel detailliertere Kontrolle.

> [!NOTE]
> Service Worker nutzen intensiv [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), da sie in der Regel auf die Antworten warten, die durchkommen, und anschließend mit einer Erfolg- oder Fehleraktion antworten. Die Promise-Architektur ist ideal dafür.

### Registrierung

Ein Service Worker wird zuerst mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Wenn dies erfolgreich ist, wird Ihr Service Worker auf den Client heruntergeladen und versucht, sich für die vom Nutzer innerhalb der gesamten Origin oder einem von Ihnen angegebenen Unterbereich aufgerufenen URLs zu installieren/aktivieren (siehe unten).

### Herunterladen, Installieren und Aktivieren

Zu diesem Zeitpunkt durchläuft Ihr Service Worker den folgenden Lebenszyklus:

1. Herunterladen
2. Installieren
3. Aktivieren

Der Service Worker wird sofort heruntergeladen, wenn ein Nutzer zum ersten Mal eine von einem Service Worker gesteuerte Seite/Website aufruft.

Danach wird er aktualisiert, wenn:

- Eine Navigation zu einer im Gültigkeitsbereich liegenden Seite erfolgt.
- Ein Ereignis im Service Worker ausgelöst wird und es in den letzten 24 Stunden nicht heruntergeladen wurde.

Die Installation wird versucht, wenn die heruntergeladene Datei neu ist — entweder anders als ein bestehender Service Worker (byteweise verglichen) oder der erste für diese Seite/Website gefundene Service Worker.

Wenn es das erste Mal ist, dass ein Service Worker verfügbar gemacht wurde, wird die Installation versucht, und nach einer erfolgreichen Installation wird er aktiviert.

Wenn bereits ein bestehender Service Worker verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert — zu diesem Zeitpunkt wird sie _wartender Worker_ genannt. Sie wird nur aktiviert, wenn keine Seiten mehr geladen sind, die noch den alten Service Worker verwenden. Sobald es keine zu ladenden Seiten mehr gibt, wird der neue Service Worker aktiviert (wird zum _aktiven Worker_). Die Aktivierung kann früher erfolgen, indem [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) verwendet wird und bestehende Seiten vom aktiven Worker beansprucht werden, indem [`Clients.claim()`](/de/docs/Web/API/Clients/claim) genutzt wird.

Sie können dem [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignis lauschen; eine Standardaktion ist es, Ihren Service Worker zur Verwendung vorzubereiten, wenn dieses Ereignis ausgelöst wird, zum Beispiel indem Sie ein Cache mit der integrierten Speicher-API erstellen und Ressourcen darin platzieren, die Sie für den Offline-Betrieb Ihrer App benötigen.

Es gibt auch ein [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignis. Der Zeitpunkt, an dem dieses Ereignis ausgelöst wird, ist in der Regel gut, um alte Caches und andere Dinge zu bereinigen, die mit der vorherigen Version Ihres Service Workers verbunden sind.

Ihr Service Worker kann auf Anfragen mit dem [`FetchEvent`](/de/docs/Web/API/FetchEvent) Ereignis antworten. Sie können die Antwort auf diese Anfragen in beliebiger Weise ändern, indem Sie die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) verwenden.

> [!NOTE]
> Da `install`- und `activate`-Ereignisse eine Weile dauern können, um abgeschlossen zu werden, bietet die Service Worker-Spezifikation eine Methode namens [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil). Sobald sie auf `install` oder `activate` Ereignisse mit einem Promise aufgerufen wird, warten funktionale Ereignisse wie `fetch` und `push`, bis das Promise erfolgreich aufgelöst ist.

Für ein komplettes Tutorial, das zeigt, wie Sie Ihr erstes einfaches Beispiel erstellen, lesen Sie [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

### Verwendung von statischem Routing zur Steuerung, wie Ressourcen abgerufen werden

Service Worker können unnötige Leistungskosten verursachen — wenn eine Seite zum ersten Mal nach längerer Zeit geladen wird, muss der Browser warten, bis der Service Worker gestartet und ausgeführt wird, um zu wissen, welche Inhalte geladen werden sollen und ob sie aus einem Cache oder dem Netzwerk stammen sollen.

Wenn Sie bereits im Voraus wissen, von wo bestimmte Inhalte abgerufen werden sollen, können Sie den Service Worker komplett umgehen und Ressourcen sofort abrufen. Die Methode [`InstallEvent.addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes) kann verwendet werden, um diesen Anwendungsfall und mehr zu implementieren.

## Weitere Anwendungsbeispiele

Service Worker sind auch für solche Dinge gedacht wie:

- Synchronisierung von Hintergrunddaten.
- Beantwortung von Ressourcenanfragen aus anderen Ursprüngen.
- Empfang zentralisierter Updates zu teuer zu berechnenden Daten wie Geolokalisierung oder Gyroskop, damit mehrere Seiten eine Datengrundlage nutzen können.
- Client-seitiges Kompilieren und Abhängigkeitsmanagement von CoffeeScript, less, CJS/AMD-Modulen usw. für Entwicklungszwecke.
- Hooks für Hintergrunddienste.
- Benutzerdefinierte Templating basierend auf bestimmten URL-Mustern.
- Leistungsverbesserungen, wie z.B. Vorabrufen von Ressourcen, die der Nutzer wahrscheinlich bald benötigt, wie die nächsten Bilder in einem Fotoalbum.
- API-Mocking.

In Zukunft werden Service Worker in der Lage sein, mehrere andere nützliche Dinge für die Web-Plattform zu tun, die sie näher an die Nativen App-Fähigkeit bringen. Interessanterweise können und werden auch andere Spezifikationen den Service Worker-Kontext nutzen, zum Beispiel:

- [Background synchronization](https://github.com/WICG/background-sync): Starten eines Service Workers, auch wenn keine Benutzer auf der Seite sind, damit Caches aktualisiert werden können, usw.
- [Reagieren auf Push-Benachrichtigungen](/de/docs/Web/API/Push_API): Starten eines Service Workers, um den Nutzern eine Nachricht zu senden, dass neue Inhalte verfügbar sind.
- Reagieren auf ein bestimmtes Datum und Uhrzeit.
- Eingabe in einen Geo-Zaun.

## Schnittstellen

- [`Cache`](/de/docs/Web/API/Cache)
  - : Repräsentiert den Speicher für [`Request`](/de/docs/Web/API/Request) / [`Response`](/de/docs/Web/API/Response) Objektpaare, die im Rahmen des Lebenszyklus des [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zwischengespeichert werden.
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
  - : Repräsentiert den Speicher für [`Cache`](/de/docs/Web/API/Cache) Objekte. Es bietet ein zentrales Verzeichnis aller benannten Caches, auf die ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zugreifen kann, und pflegt eine Zuordnung von String-Namen zu den entsprechenden [`Cache`](/de/docs/Web/API/Cache) Objekten.
- [`Client`](/de/docs/Web/API/Client)
  - : Repräsentiert den Gültigkeitsbereich eines Service Worker Clients. Ein Service Worker Client ist entweder ein Dokument in einem Browser-Kontext oder ein [`SharedWorker`](/de/docs/Web/API/SharedWorker), der von einem aktiven Worker gesteuert wird.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Repräsentiert einen Container für eine Liste von [`Client`](/de/docs/Web/API/Client) Objekten; der Hauptweg, um auf die aktiven Service Worker Clients im aktuellen Origin zuzugreifen.
- [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)
  - : Verlängert die Laufzeit der `install` und `activate` Ereignisse, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) als Teil des Service Worker Lebenszyklus gesendet werden. Dies stellt sicher, dass keine funktionalen Ereignisse (wie [`FetchEvent`](/de/docs/Web/API/FetchEvent)) an den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet werden, bis es Datenbankschemata aktualisiert und veraltete Cache-Einträge löscht, usw.
- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)
  - : Das Ereignisobjekt eines [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event) Ereignisses, das an einem Service Worker ausgelöst wird (wenn eine Kanalnachricht auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus einem anderen Kontext empfangen wird) — verlängert die Laufzeit solcher Ereignisse.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Der Parameter, der an den [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Handler übergeben wird, `FetchEvent` repräsentiert eine Abrufaktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Es enthält Informationen über die Anfrage und die resultierende Antwort und bietet die [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) Methode, die es uns ermöglicht, eine beliebige Antwort an die gesteuerte Seite zurückzusenden.
- [`InstallEvent`](/de/docs/Web/API/InstallEvent)
  - : Der Parameter, der an eine [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignishandlerfunktion übergeben wird, das `InstallEvent` Interface repräsentiert eine Installationsaktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Als Kind von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) stellt es sicher, dass funktionale Ereignisse wie [`FetchEvent`](/de/docs/Web/API/FetchEvent) während der Installation nicht gesendet werden.
- [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)
  - : Bietet Methoden zum Verwalten des Vorladens von Ressourcen mit einem Service Worker.
- [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
  - : Repräsentiert einen Service Worker. Mehrere Browser-Kontexte (z.B. Seiten, Worker, etc.) können mit demselben `ServiceWorker` Objekt assoziiert sein.
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)
  - : Bietet ein Objekt, das den Service Worker als Einheit im Netzwerk-Ökosystem repräsentiert, einschließlich Einrichtungen zur Registrierung, Deregistrierung und Aktualisierung von Service Workern sowie zum Zugriff auf den Status von Service Workern und deren Registrierungen.
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
  - : Repräsentiert den globalen Ausführungskontext eines Service Workers.
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
  - : Repräsentiert eine Service Worker Registrierung.
- [`WindowClient`](/de/docs/Web/API/WindowClient)
  - : Repräsentiert den Gültigkeitsbereich eines Service Worker Clients, der ein Dokument in einem Browser-Kontext ist, der von einem aktiven Worker gesteuert wird. Dies ist eine spezielle Art von [`Client`](/de/docs/Web/API/Client) Objekt, mit einigen zusätzlichen Methoden und Eigenschaften, die verfügbar sind.

### Erweiterungen zu anderen Schnittstellen

- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage) Objekt zurück, das mit dem aktuellen Kontext verbunden ist.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker)
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Objekt zurück, das Zugriff auf die Registrierung, Entfernung, Aktualisierung und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekten für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service Worker Lebenszyklus](https://web.dev/articles/service-worker-lifecycle)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- Web-APIs, die mit der Service Worker API zusammenhängen:
  - [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - [Content Index API](/de/docs/Web/API/Content_Index_API)
  - [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
  - [Notifications API](/de/docs/Web/API/Notifications_API)
  - [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
  - [Push API](/de/docs/Web/API/Push_API)
  - [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
