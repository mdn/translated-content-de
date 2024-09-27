---
title: Service Worker API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

Service Worker fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (wenn verfügbar) sitzen. Sie sollen unter anderem dazu genutzt werden, effektive Offline-Erfahrungen zu schaffen, Netzwerkanfragen abzufangen und je nach Verfügbarkeit des Netzwerks geeignete Maßnahmen zu ergreifen sowie auf dem Server befindliche Assets zu aktualisieren. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Synchronisierungs-APIs.

## Konzepte und Verwendung von Service Worker

Ein Service Worker ist ein ereignisgesteuerter [Worker](/de/docs/Web/API/Worker), der gegen eine Herkunft und einen Pfad registriert ist. Es handelt sich um eine JavaScript-Datei, die die Webseite/-seite, mit der sie verknüpft ist, steuern kann. Sie fängt Navigations- und Ressourcenanfragen ab und modifiziert diese und kann Ressourcen sehr granular zwischenspeichern, um Ihnen vollständige Kontrolle darüber zu geben, wie sich Ihre App in bestimmten Situationen verhält (die offensichtlichste ist, wenn das Netzwerk nicht verfügbar ist).

Service Worker laufen in einem Worker-Kontext: Daher haben sie keinen Zugriff auf das DOM und laufen in einem anderen Thread als das Haupt-JavaScript, das Ihre App antreibt. Sie sind nicht blockierend und dafür ausgelegt, vollständig asynchron zu sein. Infolgedessen können APIs wie synchrones [XHR](/de/docs/Web/API/XMLHttpRequest) und [Web Storage](/de/docs/Web/API/Web_Storage_API) nicht innerhalb eines Service Workers verwendet werden.

Service Worker können keine JavaScript-Module dynamisch importieren und `import()` wird einen Fehler auslösen, wenn es im globalen Kontext eines Service Workers aufgerufen wird. Statische Importe mit der `import`-Anweisung sind erlaubt.

Service Worker laufen nur über HTTPS, aus Sicherheitsgründen. Am bedeutendsten ist, dass HTTP-Verbindungen anfällig für bösartigen Codeeinschleusungen durch [Man-in-the-Middle](/de/docs/Glossary/MitM)-Angriffe sind, und solche Angriffe könnten schlimmer sein, wenn sie Zugang zu diesen leistungsstarken APIs erhalten. In Firefox sind die APIs für Service Worker ebenfalls verborgen und können nicht verwendet werden, wenn der Benutzer im [Privatmodus](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) surft.

> [!NOTE]
> In Firefox können Sie zum Testen Service Worker unsicher über HTTP ausführen; aktivieren Sie einfach die Option **Aktivieren Sie Service Worker über HTTP (wenn das Werkzeugkasten geöffnet ist)** im Firefox-Entwicklerwerkzeuge-Optionen-/Zahnrad-Menü.

> [!NOTE]
> Im Gegensatz zu früheren Versuchen in diesem Bereich wie [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/) gehen Service Worker keine Annahmen darüber ein, was Sie tun möchten, die dann scheitern, wenn diese Annahmen nicht genau stimmen. Stattdessen geben Ihnen Service Worker eine viel feinere Kontrolle.

> [!NOTE]
> Service Worker nutzen intensiv [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), da sie in der Regel auf Antworten warten, nach denen sie mit einer Erfolgsmeldung oder einer Fehleraktion antworten. Die Versprechen-Architektur ist ideal dafür.

### Registrierung

Ein Service Worker wird zuerst mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Bei Erfolg wird Ihr Service Worker auf den Client heruntergeladen und versucht dann, je nach den von Ihnen angegebenen URLs, die vom Benutzer innerhalb der gesamten Herkunft oder eines von Ihnen angegebenen Unterbereichs aufgerufen werden, installiert/aktiviert zu werden (siehe unten).

### Download, Installation und Aktivierung

Zu diesem Zeitpunkt durchläuft Ihr Service Worker den folgenden Lebenszyklus:

1. Download
2. Installation
3. Aktivierung

Der Service Worker wird sofort heruntergeladen, wenn ein Benutzer eine von einem Service Worker kontrollierte Seite/Website zum ersten Mal aufruft.

Danach wird er aktualisiert, wenn:

- Eine Navigation zu einer Seite im Geltungsbereich erfolgt.
- Ein Ereignis an den Service Worker gesendet wird, und er in den letzten 24 Stunden nicht heruntergeladen wurde.

Die Installation wird versucht, wenn die heruntergeladene Datei als neu befunden wird — entweder anders als ein vorhandener Service Worker (byteweise verglichen) oder der erste Service Worker, der für diese Seite/Site erkannt wird.

Wenn zum ersten Mal ein Service Worker verfügbar gemacht wird, wird die Installation versucht, und nach einer erfolgreichen Installation wird er aktiviert.

Wenn ein vorhandener Service Worker verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert — zu diesem Zeitpunkt wird sie als _wartender Worker_ bezeichnet. Sie wird nur aktiviert, wenn keine Seiten mehr geladen sind, die noch den alten Service Worker verwenden. Sobald keine Seiten mehr geladen werden müssen, aktiviert sich der neue Service Worker (wird zum _aktiven Worker_). Die Aktivierung kann früher erfolgen, indem [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) verwendet wird, und vorhandene Seiten können vom aktiven Worker mit [`Clients.claim()`](/de/docs/Web/API/Clients/claim) beansprucht werden.

Sie können auf das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis hören; eine Standardaktion ist es, Ihren Service Worker für die Verwendung vorzubereiten, wenn dieses Ereignis ausgelöst wird, zum Beispiel durch das Erstellen eines Caches mithilfe der integrierten Speicher-API und das Ablegen von Assets darin, die Sie für den Betrieb Ihrer App offline benötigen.

Es gibt auch ein [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignis. Der Punkt, an dem dieses Ereignis ausgelöst wird, ist im Allgemeinen ein guter Zeitpunkt, um alte Caches und andere Dinge zu bereinigen, die mit der vorherigen Version Ihres Service Workers verbunden sind.

Ihr Service Worker kann auf Anfragen über das [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Ereignis antworten. Sie können die Antwort auf diese Anfragen in beliebiger Weise mit der [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode ändern.

> [!NOTE]
> Da `install`/`activate`-Ereignisse eine Weile dauern könnten, gibt die Spezifikation des Service Workers eine [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode an. Sobald sie bei `install` oder `activate`-Ereignissen mit einem Versprechen aufgerufen wird, warten funktionelle Ereignisse wie `fetch` und `push` darauf, dass das Versprechen erfolgreich aufgelöst wird.

Für ein vollständiges Tutorial, wie Sie Ihr erstes grundlegendes Beispiel erstellen, lesen Sie [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

### Verwendung von statischem Routing zur Steuerung, wie Ressourcen abgerufen werden

Service Worker können unnötige Leistungskosten verursachen — wenn eine Seite zum ersten Mal seit langer Zeit geladen wird, muss der Browser darauf warten, dass der Service Worker startet und ausgeführt wird, um zu wissen, welche Inhalte geladen werden sollen und ob sie aus dem Cache oder aus dem Netzwerk kommen sollen.

Wenn Sie im Voraus wissen, woher bestimmte Inhalte abgerufen werden sollen, können Sie den Service Worker vollständig umgehen und Ressourcen sofort abrufen. Die Methode [`InstallEvent.addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes) kann verwendet werden, um diesen Anwendungsfall und mehr zu implementieren.

## Weitere Anwendungsfall-Ideen

Service Worker sollen auch für solche Dinge verwendet werden wie:

- Daten-Synchronisation im Hintergrund.
- Reaktionen auf Ressourcenanfragen von anderen Ursprüngen.
- Empfang zentraler Aktualisierungen für teuer zu berechnende Daten wie Geolokation oder Gyroskope, damit mehrere Seiten ein einziges Set von Daten nutzen können.
- Client-seitiges Kompilieren und Abhängigkeitsmanagement von CoffeeScript, weniger, CJS/AMD-Modulen usw. für Entwicklungszwecke.
- Hooks für Hintergrunddienste.
- Benutzerdefiniertes Templating basierend auf bestimmten URL-Mustern.
- Leistungsverbesserungen, zum Beispiel Vorabrufen von Ressourcen, die der Benutzer wahrscheinlich bald benötigen wird, wie die nächsten Bilder in einem Fotoalbum.
- API-Mocking.

In Zukunft werden Service Worker in der Lage sein, einige andere nützliche Dinge für die Webplattform zu tun, die sie der Realisierung nativer Apps näherbringen. Interessanterweise können und werden andere Spezifikationen beginnen, den Service Worker-Kontext zu nutzen, zum Beispiel:

- [Hintergrundsynchronisierung](https://github.com/WICG/background-sync): Starten Sie einen Service Worker auch dann, wenn keine Benutzer auf der Website sind, damit Caches aktualisiert werden können usw.
- [Reagieren auf Push-Nachrichten](/de/docs/Web/API/Push_API): Starten Sie einen Service Worker, um Benutzern eine Nachricht zu senden, dass neue Inhalte verfügbar sind.
- Reaktion auf ein bestimmtes Datum/Uhrzeit.
- Eintritt in einen Geo-Zaun.

## Schnittstellen

- [`Cache`](/de/docs/Web/API/Cache)
  - : Repräsentiert den Speicher für [`Request`](/de/docs/Web/API/Request)/[`Response`](/de/docs/Web/API/Response)-Objektpaare, die als Teil des Lebenszyklus eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zwischengespeichert werden.
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
  - : Repräsentiert den Speicher für [`Cache`](/de/docs/Web/API/Cache)-Objekte. Es bietet ein Hauptverzeichnis aller benannten Caches, auf die ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zugreifen kann, und verwaltet eine Zuordnung von String-Namen zu den entsprechenden [`Cache`](/de/docs/Web/API/Cache)-Objekten.
- [`Client`](/de/docs/Web/API/Client)
  - : Repräsentiert den Geltungsbereich eines Service Worker-Clients. Ein Service Worker-Client ist entweder ein Dokument in einem Browserkontext oder ein [`SharedWorker`](/de/docs/Web/API/SharedWorker), der von einem aktiven Worker gesteuert wird.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Repräsentiert einen Container für eine Liste von [`Client`](/de/docs/Web/API/Client)-Objekten; der Hauptweg, um die aktiven Service Worker-Clients am aktuellen Ursprung zu erreichen.
- [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)
  - : Verlängert die Lebensdauer der `install`- und `activate`-Ereignisse, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) als Teil des Service Worker-Lebenszyklus gesendet werden. Dies stellt sicher, dass keine funktionellen Ereignisse (wie [`FetchEvent`](/de/docs/Web/API/FetchEvent)) an den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet werden, bis es Upgrade-Datenbankschemata, veraltete Cache-Einträge gelöscht usw. gibt.
- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)
  - : Das Ereignisobjekt eines [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignisses, das auf einem Service Worker ausgelöst wird (wenn eine Kanalmeldung auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus einem anderen Kontext empfangen wird) — verlängert die Lebensdauer solcher Ereignisse.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Der Parameter, der an den [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Handler übergeben wird, `FetchEvent` repräsentiert eine Abrufaktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Es enthält Informationen über die Anfrage und die resultierende Antwort und bietet die [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode, mit der wir eine beliebige Antwort an die kontrollierte Seite zurückgeben können.
- [`InstallEvent`](/de/docs/Web/API/InstallEvent)
  - : Der Parameter, der in eine [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignishandler-Funktion übergeben wird, die `InstallEvent`-Schnittstelle repräsentiert eine Installationsaktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Als Kind von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) stellt es sicher, dass funktionelle Ereignisse wie [`FetchEvent`](/de/docs/Web/API/FetchEvent) während der Installation nicht gesendet werden.
- [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)
  - : Bietet Methoden zur Verwaltung des Vorladens von Ressourcen mit einem Service Worker.
- [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
  - : Repräsentiert einen Service Worker. Mehrere Browserkontexte (z. B. Seiten, Worker usw.) können mit demselben `ServiceWorker`-Objekt verknüpft sein.
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)
  - : Bietet ein Objekt, das den Service Worker als Gesamteinheit im Netzwerkökosystem darstellt, einschließlich Möglichkeiten zur Registrierung, Deregistrierung und Aktualisierung von Service Workern sowie zum Zugriff auf den Zustand von Service Workern und ihren Registrierungen.
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
  - : Repräsentiert den globalen Ausführungskontext eines Service Workers.
- [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
  - : Repräsentiert eine Service Worker-Registrierung.
- [`WindowClient`](/de/docs/Web/API/WindowClient)
  - : Repräsentiert den Geltungsbereich eines Service Worker-Clients, das ein Dokument in einem Browserkontext ist, gesteuert von einem aktiven Worker. Dies ist eine besondere Art von [`Client`](/de/docs/Web/API/Client)-Objekt, mit einigen zusätzlichen verfügbaren Methoden und Eigenschaften.

### Erweiterungen für andere Schnittstellen

- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist.
- [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker)
  - : Gibt ein [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt zurück, das Zugriff auf die Registrierung, Entfernung, Aktualisierung und Kommunikation mit den [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekten für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service Worker Lifecycle](https://web.dev/articles/service-worker-lifecycle)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- Web-APIs, die mit der Service Worker API zusammenhängen:
  - [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - [Content Index API](/de/docs/Web/API/Content_Index_API)
  - [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
  - [Notifications API](/de/docs/Web/API/Notifications_API)
  - [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
  - [Push API](/de/docs/Web/API/Push_API)
  - [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
