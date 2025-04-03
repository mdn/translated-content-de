---
title: Service Worker API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

Service Worker dienen im Wesentlichen als Proxy-Server, die zwischen Web-Anwendungen, dem Browser und dem Netzwerk (wenn verfügbar) liegen. Sie sind unter anderem dazu gedacht, die Erstellung effektiver Offline-Erlebnisse zu ermöglichen, Netzwerk-Anfragen zu unterbrechen und angemessen zu reagieren, je nachdem, ob das Netzwerk verfügbar ist, sowie Assets auf dem Server zu aktualisieren. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Background Sync APIs.

## Service Worker Konzepte und Nutzung

Ein Service Worker ist ein ereignisgesteuerter [Worker](/de/docs/Web/API/Worker), der gegen einen Ursprung und einen Pfad registriert ist. Es handelt sich um eine JavaScript-Datei, die die Webseite bzw. -site, mit der sie verknüpft ist, steuern kann, indem sie Navigations- und Ressourcen-Anfragen abfängt und modifiziert und Ressourcen in sehr feiner Granularität zwischenspeichert, um Ihnen die vollständige Kontrolle darüber zu geben, wie Ihre App in bestimmten Situationen (am offensichtlichsten, wenn das Netzwerk nicht verfügbar ist) funktioniert.

Service Worker laufen in einem Worker-Kontext: Sie haben daher keinen DOM-Zugriff und laufen in einem anderen Thread als das Haupt-JavaScript, das Ihre App antreibt. Sie sind nicht blockierend und dafür ausgelegt, vollständig asynchron zu sein. Daher können APIs wie synchrones [XHR](/de/docs/Web/API/XMLHttpRequest) und [Web Storage](/de/docs/Web/API/Web_Storage_API) nicht innerhalb eines Service Workers verwendet werden.

Service Worker können keine JavaScript-Module dynamisch importieren, und [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#browser_compatibility) wird einen Fehler werfen, wenn es im globalen Kontext eines Service Workers aufgerufen wird. Statische Importe über die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Anweisung sind erlaubt.

Service Worker laufen nur über HTTPS, aus Sicherheitsgründen. Am bedeutendsten ist, dass HTTP-Verbindungen anfällig für die Injektion bösartigen Codes durch {{Glossary("MitM", "Man in the Middle")}} Angriffe sind, und solche Angriffe könnten schlimmer sein, wenn sie Zugang zu diesen mächtigen APIs erhalten würden. In Firefox sind Service Worker APIs auch verborgen und können nicht verwendet werden, wenn der Benutzer im [privaten Modus](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) browsed.

> [!NOTE]
> In Firefox können Sie für Testzwecke Service Worker über HTTP (unsicher) ausführen; aktivieren Sie einfach die Option **Service Workers über HTTP aktivieren (wenn der Werkzeugkasten geöffnet ist)** im Firefox DevTools Optionen-/Zahnradsmenü.

> [!NOTE]
> Im Gegensatz zu früheren Versuchen in diesem Bereich wie [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/) machen Service Worker keine Annahmen darüber, was Sie versuchen zu tun, um dann zu scheitern, wenn diese Annahmen nicht genau richtig sind. Stattdessen geben Ihnen Service Worker viel granularere Kontrolle.

> [!NOTE]
> Service Worker machen starken Gebrauch von [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), da sie im Allgemeinen darauf warten, dass Antworten eingehen, wonach sie mit einer Erfolgs- oder Fehler-Aktion antworten. Die Promises-Architektur ist hierfür ideal.

### Registrierung

Ein Service Worker wird zuerst mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Wenn dies erfolgreich ist, wird Ihr Service Worker auf den Client heruntergeladen und versucht die Installation/Aktivierung (siehe unten) für URLs, auf die der Nutzer im gesamten Ursprung oder einem von Ihnen angegebenen Teilbereich zugreift.

### Download, Installation und Aktivierung

An diesem Punkt wird Ihr Service Worker den folgenden Lebenszyklus beobachten:

1. Download
2. Installieren
3. Aktivieren

Der Service Worker wird sofort heruntergeladen, wenn ein Benutzer eine von einem Service Worker kontrollierte Site/Seite zum ersten Mal aufruft.

Danach wird er aktualisiert, wenn:

- Eine Navigation zu einer Seite im Geltungsbereich stattfindet.
- Ein Ereignis im Service Worker ausgelöst wird und er in den letzten 24 Stunden nicht heruntergeladen wurde.

Die Installation wird versucht, wenn die heruntergeladene Datei als neu befunden wird — entweder anders als ein bestehender Service Worker (byte-weise verglichen) oder der erste Service Worker, der für diese Seite/Site angetroffen wird.

Wenn es das erste Mal ist, dass ein Service Worker verfügbar gemacht wurde, wird die Installation versucht und nach einer erfolgreichen Installation wird er aktiviert.

Wenn ein bestehender Service Worker verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert — an diesem Punkt wird sie als _wartender Worker_ bezeichnet. Sie wird erst aktiviert, wenn keine Seiten mehr geladen sind, die noch den alten Service Worker verwenden. Sobald keine Seiten mehr geladen sind, aktiviert sich der neue Service Worker (wird zum _aktiven Worker_). Die Aktivierung kann früher mithilfe von [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) erfolgen und bestehende Seiten können vom aktiven Worker mit [`Clients.claim()`](/de/docs/Web/API/Clients/claim) übernommen werden.

Sie können auf das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignis lauschen; eine Standardaktion ist es, Ihren Service Worker für die Nutzung vorzubereiten, wenn dieses ausgelöst wird, zum Beispiel indem Sie einen Cache mit der eingebauten Speicher-API erstellen und Assets darin platzieren, die Sie für die Offline-Ausführung Ihrer App benötigen.

Es gibt auch ein [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignis. Der Punkt, an dem dieses Ereignis ausgelöst wird, ist im Allgemeinen eine gute Gelegenheit, alte Caches und andere Dinge, die mit der vorherigen Version Ihres Service Workers verbunden sind, zu bereinigen.

Ihr Service Worker kann auf Anfragen mit dem [`FetchEvent`](/de/docs/Web/API/FetchEvent) Ereignis reagieren. Sie können die Antwort auf diese Anfragen beliebig modifizieren, indem Sie die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) verwenden.

> [!NOTE]
> Da `install`/`activate` Ereignisse einige Zeit zum Abschluss benötigen könnten, bietet die Service Worker Spezifikation eine [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) Methode. Sobald sie bei `install` oder `activate` Ereignissen mit einem Promise aufgerufen wird, warten funktionale Ereignisse wie `fetch` und `push`, bis das Promise erfolgreich aufgelöst ist.

Für ein vollständiges Tutorial, wie Sie Ihr erstes einfaches Beispiel erstellen, lesen Sie [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

### Verwendung von statischem Routing zur Steuerung, wie Ressourcen abgerufen werden

Service Worker können zu unnötigen Leistungseinbußen führen — wenn eine Seite nach längerer Zeit zum ersten Mal geladen wird, muss der Browser warten, bis der Service Worker gestartet und ausgeführt wird, um zu wissen, welche Inhalte geladen werden sollen und ob sie aus dem Cache oder dem Netzwerk stammen sollen.

Wenn Sie bereits im Voraus wissen, wo bestimmte Inhalte abgerufen werden sollen, können Sie den Service Worker ganz umgehen und Ressourcen sofort abrufen. Die [`InstallEvent.addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes) Methode kann verwendet werden, um diesen Anwendungsfall und mehr zu implementieren.

## Weitere Anwendungsfallideen

Service Worker sollen auch für solche Dinge genutzt werden wie:

- Hintergrunddatensynchronisation.
- Reaktionen auf Ressourcenanfragen von anderen Ursprüngen.
- Empfang zentralisierter Updates zu kostspielig zu berechnenden Daten wie Geolokalisierung oder Kreisel, damit mehrere Seiten einen Satz von Daten verwenden können.
- Client-seitiges Kompilieren und Abhängigkeitsmanagement von CoffeeScript, Less, CJS/AMD-Modulen usw. für Entwicklungszwecke.
- Hooks für Hintergrunddienste.
- Benutzerdefinierte Templating basierend auf bestimmten URL-Mustern.
- Leistungsverbesserungen, zum Beispiel Vorababruf von Ressourcen, die der Benutzer wahrscheinlich bald benötigen wird, wie die nächsten Bilder in einem Fotoalbum.
- API-Mocking.

In Zukunft werden Service Worker noch viele andere nützliche Dinge für die Web-Plattform tun können, die sie näher an die Machbarkeit nativer Apps bringen. Interessanterweise können und werden andere Spezifikationen den Service Worker Kontext nutzen, beispielsweise:

- [Hintergrundsynchronisation](https://github.com/WICG/background-sync): Starten Sie einen Service Worker, auch wenn keine Benutzer auf der Site sind, damit Caches aktualisiert werden können usw.
- [Reaktion auf Push-Nachrichten](/de/docs/Web/API/Push_API): Starten Sie einen Service Worker, um Benutzern eine Nachricht zu senden, dass neue Inhalte verfügbar sind.
- Reaktion auf eine bestimmte Zeit & Datum.
- Eingabe in einen Geo-Zaun.

## Schnittstellen

- [`Cache`](/de/docs/Web/API/Cache)
  - : Repräsentiert den Speicher für [`Request`](/de/docs/Web/API/Request) / [`Response`](/de/docs/Web/API/Response) Objektpaare, die als Teil des [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Lebenszyklus zwischengespeichert werden.
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
  - : Repräsentiert den Speicher für [`Cache`](/de/docs/Web/API/Cache) Objekte. Es bietet ein Hauptverzeichnis aller benannten Caches, auf die ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zugreifen kann, und pflegt eine Zuordnung von Zeichenkettennamen zu entsprechenden [`Cache`](/de/docs/Web/API/Cache) Objekten.
- [`Client`](/de/docs/Web/API/Client)
  - : Repräsentiert den Bereich eines Service Worker Clients. Ein Service Worker Client ist entweder ein Dokument in einem Browserkontext oder ein [`SharedWorker`](/de/docs/Web/API/SharedWorker), der von einem aktiven Worker gesteuert wird.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Repräsentiert einen Container für eine Liste von [`Client`](/de/docs/Web/API/Client) Objekten; die Hauptmethode, um auf die aktiven Service Worker Clients am aktuellen Ursprung zuzugreifen.
- [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)
  - : Verlängert die Lebensdauer der `install` und `activate` Events, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) als Teil des Service Worker Lebenszyklus abgewickelt werden. Dies stellt sicher, dass keine funktionalen Ereignisse (wie [`FetchEvent`](/de/docs/Web/API/FetchEvent)) an den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet werden, bis es Datenbankschemata aktualisiert und veraltete Cache-Einträge gelöscht hat usw.
- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)
  - : Das Ereignisobjekt eines [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event) Ereignisses, das auf einem Service Worker ausgelöst wird (wenn eine Kanalnachricht auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus einem anderen Kontext empfangen wird) — verlängert die Lebensdauer solcher Ereignisse.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Der Parameter, der dem [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Handler übergeben wird, `FetchEvent` repräsentiert eine fetch Aktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird. Es enthält Informationen über die Anforderung und die resultierende Antwort und stellt die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) bereit, die es uns erlaubt, eine beliebige Antwort an die kontrollierte Seite zurückzugeben.
- [`InstallEvent`](/de/docs/Web/API/InstallEvent)
  - : Der Parameter, der in eine [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignishandlerfunktion übergeben wird, die `InstallEvent` Schnittstelle repräsentiert eine Installationsaktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) ausgelöst wird. Als Kind von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) stellt es sicher, dass funktionale Ereignisse wie [`FetchEvent`](/de/docs/Web/API/FetchEvent) während der Installation nicht gesendet werden.
- [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)
  - : Bietet Methoden zum Verwalten des Vorladens von Ressourcen mit einem Service Worker.
- [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
  - : Repräsentiert einen Service Worker. Mehrere Browserkontexte (z.B. Seiten, Worker usw.) können mit demselben `ServiceWorker` Objekt verbunden sein.
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)
  - : Stellt ein Objekt bereit, das den Service Worker als eine gesamte Einheit im Netzwerk-Ökosystem repräsentiert, einschließlich Möglichkeiten zur Registrierung, Aufhebung der Registrierung und Aktualisierung von Service Workern sowie zum Zugriff auf den Zustand von Service Workern und deren Registrierungen.
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
  - : Repräsentiert den globalen Ausführungskontext eines Service Workers.
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
  - : Repräsentiert eine Service Worker Registrierung.
- [`WindowClient`](/de/docs/Web/API/WindowClient)
  - : Repräsentiert den Bereich eines Service Worker Clients, der ein Dokument in einem Browserkontext ist, gesteuert von einem aktiven Worker. Dies ist eine spezielle Art von [`Client`](/de/docs/Web/API/Client) Objekt, mit einigen zusätzlichen Methoden und Eigenschaften verfügbar.

### Erweiterungen zu anderen Schnittstellen

- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage) Objekt zurück, das mit dem aktuellen Kontext verbunden ist.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker)
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Objekt zurück, das Zugriff auf Registrierung, Entfernung, Upgrade und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekten für das [verbundene Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service Worker Lebenszyklus](https://web.dev/articles/service-worker-lifecycle)
- [Service Workers grundlegendes Code-Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- Web-APIs, die mit der Service Worker API verwandt sind:
  - [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - [Content Index API](/de/docs/Web/API/Content_Index_API)
  - [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
  - [Notifications API](/de/docs/Web/API/Notifications_API)
  - [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
  - [Push API](/de/docs/Web/API/Push_API)
  - [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
