---
title: Service Worker API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

Service Worker fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (wenn verfügbar) sitzen. Sie sollen unter anderem die Erstellung effektiver Offline-Erlebnisse ermöglichen, Netzwerk-Requests abfangen und geeignete Maßnahmen ergreifen, basierend darauf, ob das Netzwerk verfügbar ist, sowie die auf dem Server befindlichen Ressourcen aktualisieren. Zudem ermöglichen sie den Zugriff auf Push-Benachrichtigungen und Background-Sync-APIs.

## Konzepte und Nutzung von Service Workern

Ein Service Worker ist ein ereignisgesteuerter [worker](/de/docs/Web/API/Worker), der für einen Origin und einen Pfad registriert ist. Er nimmt die Form einer JavaScript-Datei an, die die zugehörige Webseite/Site steuern kann, indem sie Navigations- und Ressourcenanforderungen abfängt und ändert und Ressourcen sehr granular cacht, um Ihnen die volle Kontrolle darüber zu geben, wie sich Ihre App in bestimmten Situationen verhält (am offensichtlichsten, wenn das Netzwerk nicht verfügbar ist).

Service Worker laufen im Worker-Kontext: Sie haben daher keinen Zugriff auf das DOM und laufen in einem anderen Thread als das Haupt-JavaScript, das Ihre App antreibt. Sie blockieren nicht und sind so konzipiert, dass sie vollständig asynchron sind. Daher können APIs wie synchrones [XHR](/de/docs/Web/API/XMLHttpRequest) und [Web Storage](/de/docs/Web/API/Web_Storage_API) nicht innerhalb eines Service Workers verwendet werden.

Service Worker können JavaScript-Module nicht dynamisch importieren, und [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#browser_compatibility) wird einen Fehler auslösen, wenn es im globalen Scope des Service Workers aufgerufen wird. Statische Importe mit der [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Anweisung sind erlaubt.

Service Worker laufen aus Sicherheitsgründen nur über HTTPS. Am bedeutsamsten ist, dass HTTP-Verbindungen anfällig für böswillige Code-Injektionen durch {{Glossary("MitM", "man in the middle")}} Angriffe sind, und solche Angriffe könnten schlimmer sein, wenn sie Zugriff auf diese mächtigen APIs erhalten. In Firefox sind Service Worker APIs auch versteckt und können nicht verwendet werden, wenn der Benutzer im [privaten Surfen](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) ist.

> [!NOTE]
> In Firefox können Sie zum Testen Service Worker über HTTP (unsicher) ausführen; aktivieren Sie einfach die Option **Service Workers über HTTP aktivieren (wenn das Werkzeug geöffnet ist)** im Optionen/Zahnradsymbol-Menü von Firefox Devtools.

> [!NOTE]
> Im Gegensatz zu früheren Versuchen in diesem Bereich wie [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/), machen Service Worker keine Annahmen darüber, was Sie tun möchten, aber dann scheitern Sie, wenn diese Annahmen nicht genau richtig sind. Stattdessen geben Service Worker Ihnen viel granularere Kontrolle.

> [!NOTE]
> Service Worker nutzen intensiv [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), da sie im Allgemeinen darauf warten, dass Antworten eingehen, danach reagieren sie mit einer Erfolgs- oder Fehlermeldung. Die Promises-Architektur ist dafür ideal.

### Registrierung

Ein Service Worker wird zuerst mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Wenn dies erfolgreich ist, wird Ihr Service Worker auf den Client heruntergeladen und versucht, installiert/aktiviert zu werden (siehe unten) für URLs, auf die der Benutzer innerhalb des gesamten Origins oder eines von Ihnen festgelegten Teilbereichs zugegriffen hat.

### Herunterladen, Installieren und Aktivieren

Zu diesem Zeitpunkt wird Ihr Service Worker den folgenden Lebenszyklus beobachten:

1. Herunterladen
2. Installieren
3. Aktivieren

Der Service Worker wird sofort heruntergeladen, wenn ein Benutzer zum ersten Mal auf eine von einem Service Worker kontrollierte Site/Seite zugreift.

Danach wird er aktualisiert, wenn:

- Eine Navigation zu einer Seite im Geltungsbereich stattfindet.
- Ein Ereignis auf dem Service Worker ausgelöst wird und er in den letzten 24 Stunden nicht heruntergeladen wurde.

Die Installation wird versucht, wenn festgestellt wird, dass die heruntergeladene Datei neu ist - entweder anders als ein bestehender Service Worker (byteweise verglichen) oder der erste Service Worker, der für diese Seite/Site entdeckt wird.

Wenn dies das erste Mal ist, dass ein Service Worker verfügbar gemacht wird, wird die Installation versucht und nach einer erfolgreichen Installation wird er aktiviert.

Wenn ein bestehender Service Worker verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert – zu diesem Zeitpunkt wird sie _wartender Worker_ genannt. Sie wird erst aktiviert, wenn keine Seiten mehr geladen sind, die immer noch den alten Service Worker verwenden. Sobald keine Seiten mehr geladen werden, aktiviert sich der neue Service Worker (der _aktive Worker_). Die Aktivierung kann früher erfolgen mittels [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) und bestehende Seiten können vom aktiven Worker mit [`Clients.claim()`](/de/docs/Web/API/Clients/claim) beansprucht werden.

Sie können das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignis abhören; eine Standardaktion ist es, Ihren Service Worker bei dieser Auslösung für die Nutzung vorzubereiten, zum Beispiel, indem Sie einen Cache mit der integrierten Speicher-API erstellen und Ressourcen darin platzieren, die Sie für den Offline-Betrieb Ihrer App benötigen.

Es gibt auch ein [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignis. Der Punkt, an dem dieses Ereignis ausgelöst wird, ist im Allgemeinen ein guter Zeitpunkt, um alte Caches und andere Dinge, die mit der vorherigen Version Ihres Service Workers assoziiert sind, aufzuräumen.

Ihr Service Worker kann auf Anfragen mit dem [`FetchEvent`](/de/docs/Web/API/FetchEvent) Ereignis reagieren. Sie können die Antwort auf diese Anfragen in beliebiger Weise ändern, indem Sie die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) verwenden.

> [!NOTE]
> Da `install`/`activate` Ereignisse eine Weile dauern können, um abgeschlossen zu werden, stellt die Service Worker-Spezifikation eine [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) Methode bereit. Sobald sie auf `install` oder `activate` Ereignissen mit einem Promise aufgerufen wird, warten funktionale Ereignisse wie `fetch` und `push`, bis der Promise erfolgreich aufgelöst wird.

Für ein vollständiges Tutorial, um zu zeigen, wie Sie Ihr erstes grundlegendes Beispiel aufbauen, lesen Sie [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

### Verwendung von statischem Routing zur Steuerung der Ressourcenabrufe

Service Worker können unnötige Leistungskosten verursachen — wenn eine Seite das erste Mal seit einiger Zeit geladen wird, muss der Browser darauf warten, dass der Service Worker startet und ausgeführt wird, um zu wissen, welche Inhalte geladen werden sollen und ob sie aus dem Cache oder dem Netzwerk stammen sollen.

Wenn Sie bereits im Voraus wissen, wo bestimmte Inhalte abgerufen werden sollen, können Sie den Service Worker ganz umgehen und Ressourcen sofort abrufen. Die Methode [`InstallEvent.addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes) kann verwendet werden, um diesen Anwendungsfall und mehr zu implementieren.

## Weitere Anwendungsbeispiele

Service Worker sind auch beabsichtigt für Dinge wie:

- Synchronisierung von Hintergrunddaten.
- Reagieren auf Ressourcenerfordernisse aus anderen Ursprüngen.
- Zentrale Updates für Daten zu erhalten, deren Berechnung teuer ist, beispielsweise Geolokationen oder Gyroskope, damit mehrere Seiten ein Set von Daten verwenden können.
- Client-seitige Kompilierung und Abhängigkeitsmanagement von CoffeeScript, Less, CJS/AMD-Modulen etc. für Entwicklungszwecke.
- Hooks für Hintergrunddienste.
- Benutzerdefinierte Templating basierend auf bestimmten URL-Mustern.
- Leistungssteigerungen, z.B. Vorabladen von Ressourcen, die der Benutzer wahrscheinlich bald benötigt, wie die nächsten Bilder in einem Fotoalbum.
- API-Mocking.

In Zukunft werden Service Worker in der Lage sein, weitere nützliche Dinge für die Web-Plattform zu erledigen, die sie der nativen App-Leistungsfähigkeit näherbringen. Interessanterweise können und werden andere Spezifikationen beginnen, den Service Worker-Kontext zu nutzen, beispielsweise:

- [Hintergrund-Synchronisation](https://github.com/WICG/background-sync): Einen Service Worker starten, auch wenn keine Benutzer auf der Seite sind, damit Caches aktualisiert werden können, etc.
- [Reaktion auf Push-Nachrichten](/de/docs/Web/API/Push_API): Einen Service Worker starten, um Benutzern eine Nachricht zu senden, um ihnen mitzuteilen, dass neue Inhalte verfügbar sind.
- Reaktion auf eine bestimmte Zeit und Datum.
- Betreten eines Geofences.

## Schnittstellen

- [`Cache`](/de/docs/Web/API/Cache)
  - : Repräsentiert den Speicher für [`Request`](/de/docs/Web/API/Request) / [`Response`](/de/docs/Web/API/Response) Objektpaare, die als Teil des Lebenszyklus von [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zwischengespeichert werden.
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
  - : Repräsentiert den Speicher für [`Cache`](/de/docs/Web/API/Cache) Objekte. Es bietet ein zentrales Verzeichnis aller benannten Caches, auf die ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zugreifen kann, und pflegt eine Zuordnung von Stringnamen zu den entsprechenden [`Cache`](/de/docs/Web/API/Cache) Objekten.
- [`Client`](/de/docs/Web/API/Client)
  - : Repräsentiert den Bereich eines Service Worker-Clients. Ein Service Worker-Client ist entweder ein Dokument in einem Browser-Kontext oder ein [`SharedWorker`](/de/docs/Web/API/SharedWorker), das von einem aktiven Worker gesteuert wird.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Repräsentiert einen Container für eine Liste von [`Client`](/de/docs/Web/API/Client) Objekten; der Hauptweg zum Zugriff auf die aktiven Service Worker-Clients am aktuellen Origin.
- [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)
  - : Verlängert die Lebensdauer der `install` und `activate` Ereignisse, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) als Teil des Service Worker-Lebenszyklus gesendet werden. Dies stellt sicher, dass funktionale Ereignisse (wie [`FetchEvent`](/de/docs/Web/API/FetchEvent)) nicht an den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet werden, bis er Datenbankschemata aktualisiert und veraltete Cache-Einträge löscht usw.
- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)
  - : Das Ereignisobjekt eines [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event) Ereignisses, das auf einem Service Worker gesendet wird (wenn eine Nachricht auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) von einem anderen Kontext empfangen wird) — verlängert die Lebensdauer solcher Ereignisse.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Der Parameter, der in den [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Handler übergeben wird, `FetchEvent` repräsentiert eine Abrufaktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Es enthält Informationen über die Anfrage und die resultierende Antwort und bietet die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith), die es uns erlaubt, eine beliebige Antwort zurück an die kontrollierte Seite zu liefern.
- [`InstallEvent`](/de/docs/Web/API/InstallEvent)
  - : Der Parameter, der in eine [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignishandlerfunktion übergeben wird, die `InstallEvent` Schnittstelle repräsentiert eine Installationsaktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Als Kind von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) stellt es sicher, dass funktionale Ereignisse wie [`FetchEvent`](/de/docs/Web/API/FetchEvent) während der Installation nicht gesendet werden.
- [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)
  - : Bietet Methoden zum Verwalten der Vorladung von Ressourcen mit einem Service Worker.
- [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
  - : Repräsentiert einen Service Worker. Mehrere Browsing-Kontexte (z.B. Seiten, Worker usw.) können mit demselben `ServiceWorker` Objekt assoziiert sein.
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)
  - : Bietet ein Objekt, das den Service Worker als Gesamteinheit im Netzwerk-Ökosystem repräsentiert, einschließlich Einrichtungen zur Registrierung, Deregistrierung und Aktualisierung von Service Workern sowie zum Zugriff auf den Zustand von Service Workern und deren Registrierung.
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
  - : Repräsentiert den globalen Ausführungskontext eines Service Workers.
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
  - : Repräsentiert eine Registrierung eines Service Workers.
- [`WindowClient`](/de/docs/Web/API/WindowClient)
  - : Repräsentiert den Bereich eines Service Worker-Clients, der ein Dokument in einem Browser-Kontext ist, das von einem aktiven Worker gesteuert wird. Dies ist ein spezieller Typ von [`Client`](/de/docs/Web/API/Client) Objekt mit einigen zusätzlichen Methoden und Eigenschaften.

### Erweiterungen auf andere Schnittstellen

- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage) Objekt zurück, das mit dem aktuellen Kontext assoziiert ist.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker)
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Objekt zurück, das Zugriff auf Registrierung, Entfernung, Upgrade und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekten für das [assoziierte Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service Worker Lifecycle](https://web.dev/articles/service-worker-lifecycle)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- Web-APIs, die mit der Service Worker API verwandt sind:
  - [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - [Content Index API](/de/docs/Web/API/Content_Index_API)
  - [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
  - [Notifications API](/de/docs/Web/API/Notifications_API)
  - [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
  - [Push API](/de/docs/Web/API/Push_API)
  - [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
