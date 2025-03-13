---
title: "CycleTracker: Service Workers"
short-title: Service Workers
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{PWASidebar}}

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Bisher haben wir das HTML, CSS und JavaScript für CycleTracker geschrieben. Wir haben eine Manifest-Datei hinzugefügt, die Farben, Symbole, URL und andere App-Funktionen definiert. Wir haben eine funktionierende PWA! Aber sie funktioniert noch nicht offline. In diesem Abschnitt werden wir das notwendige JavaScript schreiben, um unsere voll funktionsfähige Webanwendung in eine PWA zu verwandeln, die als eigenständige App verteilt werden kann und nahtlos offline funktioniert.

Wenn Sie es noch nicht getan haben, kopieren Sie die [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/index.html), [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/style.css), [JavaScript](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/app.js) und [Manifest](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/cycletracker.json) JSON-Datei. Speichern Sie sie als `index.html`, `style.css`, `app.js` und `cycletracker.json`.

In diesem Abschnitt erstellen wir `sw.js`, das Service-Worker-Skript, das unsere Web-App in eine PWA umwandeln wird. Wir haben bereits eine JavaScript-Datei; die letzte Zeile in der HTML-Datei ruft die `app.js` auf. Dieses JavaScript bietet alle Funktionen für die Standard-Webanwendungsmerkmale. Anstatt die `sw.js`-Datei wie die `app.js`-Datei mit dem `src`-Attribut von {{HTMLElement("script")}} aufzurufen, werden wir eine Beziehung zwischen der Web-App und ihrem Service-Worker herstellen, indem wir den Service-Worker registrieren.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige PWA; eine progressiv verbesserte Webanwendung, die vollständig installierbar ist und auch dann funktioniert, wenn der Nutzer offline ist.

## Aufgaben des Service Workers

Der Service Worker sorgt dafür, dass die Anwendung offline funktioniert und stellt sicher, dass die Anwendung immer auf dem neuesten Stand ist. Um dies gut zu machen, sollte der Service Worker Folgendes beinhalten:

- Versionsnummer (oder andere Kennung).
- Liste der zu cachenden Ressourcen.
- Cache-Versionsname.

Der Service Worker ist auch verantwortlich für:

- Installieren des Caches, wenn die App installiert wird.
- Sich selbst und die anderen Anwendungsdateien bei Bedarf zu aktualisieren.
- Entfernen von gecachten Dateien, die nicht mehr verwendet werden.

Diese Aufgaben erreichen wir, indem wir auf drei Service-Worker-Ereignisse reagieren, einschließlich der

- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event),
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) und
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignisse.

### Versionsnummer

Sobald die PWA auf dem Computer des Nutzers installiert ist, ist die einzige Möglichkeit, dem Browser mitzuteilen, dass aktualisierte Dateien abgerufen werden sollen, eine Änderung am Service Worker. Wenn eine Änderung an einer anderen PWA-Ressource vorgenommen wird - wenn das HTML aktualisiert wird, ein Fehler im CSS behoben wird, eine Funktion zu `app.js` hinzugefügt wird, ein Bild komprimiert wird, um die Dateigröße zu reduzieren usw. - wird der Service Worker Ihrer installierten PWA nicht wissen, dass er aktualisierte Ressourcen herunterladen muss. Nur wenn der Service Worker in irgendeiner Weise verändert wird, weiß die PWA, dass es Zeit sein könnte, den Cache zu aktualisieren; was die Aufgabe des Service Workers ist, zu initiieren.

Obwohl das Ändern eines beliebigen Zeichens technisch ausreicht, ist eine PWA-Best-Practice, eine Konstanten-Versionsnummer zu erstellen, die sequentiell aktualisiert wird, um eine Dateiaktualisierung anzuzeigen. Das Aktualisieren einer Versionsnummer (oder eines Datums) stellt eine offizielle Bearbeitung des Service Workers dar, selbst wenn sonst nichts daran geändert wird, und bietet Entwicklern eine Möglichkeit, App-Versionen zu identifizieren.

#### Aufgabe

Beginnen Sie die JavaScript-Datei, indem Sie eine Versionsnummer einfügen:

```js
const VERSION = "v1";
```

Speichern Sie die Datei als `sw.js`

### Offline-Ressourcenliste

Für eine gute Offline-Erfahrung sollte die Liste der gecachten Dateien alle Ressourcen beinhalten, die innerhalb der Offline-Erfahrung der PWA verwendet werden. Während die Manifest-Datei eine Vielzahl von Symbolen in verschiedenen Größen auflisten kann, muss der Anwendungscache nur die Ressourcen enthalten, die von der App im Offline-Modus verwendet werden.

```js
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon-512x512.png",
];
```

Sie müssen nicht die verschiedenen Symbole einbeziehen, die von allen verschiedenen Betriebssystemen und Geräten verwendet werden, aber Sie sollten alle Bilder einbeziehen, die innerhalb der App verwendet werden, einschließlich der Ressourcen, die in jedem Begrüßungsbildschirm verwendet werden können, der sichtbar ist, wenn die App langsam lädt oder in jedem "Sie müssen sich mit dem Internet verbinden, um die volle Erfahrung zu erhalten"-Typ von Seiten verwendet wird.

Fügen Sie die Service-Worker-Datei nicht in die Liste der zu cachenden Ressourcen ein.

#### Aufgabe

Fügen Sie die Liste der zu cachenden Ressourcen für die CycleTracker PWA zu `sw.js` hinzu.

#### Beispiel Lösung

Wir schließen die statischen Ressourcen ein, die in anderen Abschnitten dieses Tutorials erstellt wurden und die CycleTracker benötigt, um offline zu funktionieren. Unsere aktuelle `sw.js`-Datei ist:

```js
const VERSION = "v1";

const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/cycletracker.json",
  "/icons/wheel.svg",
];
```

Wir haben das Symbol `wheel.svg` eingeschlossen, auch wenn unsere aktuelle Anwendung es nicht verwendet, falls Sie die PWA-Benutzeroberfläche erweitern, z. B. das Logo anzeigen, wenn keine Periodendaten vorhanden sind.

### Anwendungs-Cache-Name

Wir haben eine Versionsnummer und die Dateien, die gecacht werden müssen. Bevor wir die Dateien cachen, müssen wir einen Namen des Caches erstellen, der verwendet wird, um die statischen Ressourcen der App zu speichern. Dieser Cache-Name sollte versioniert sein, damit beim Aktualisieren der App ein neuer Cache erstellt und der alte gelöscht wird.

#### Aufgabe

Verwenden Sie die `VERSION`-Nummer, um einen versionierten `CACHE_NAME` zu erstellen und fügen Sie ihn als Konstante in `sw.js` ein.

#### Beispiel Lösung

Wir benennen unseren Cache `period-tracker-` mit der aktuellen `VERSION` angehängt. Da die Konstanterklärung in einer einzigen Zeile erfolgt, setzen wir sie vor das Array der Ressourcen-Konstante, um die Lesbarkeit zu verbessern.

```js
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [ ... ];
```

Wir haben erfolgreich unsere Konstanten deklariert; ein eindeutiger Bezeichner, die Liste der Offline-Ressourcen als Array und den Cache-Namen der Anwendung, der sich jedes Mal ändert, wenn der Bezeichner aktualisiert wird. Jetzt konzentrieren wir uns auf das Installieren, Aktualisieren und Löschen von nicht verwendeten gecachten Ressourcen.

### Den Cache bei PWA-Installation speichern

Wenn ein Nutzer eine Website mit einem Service Worker installiert oder einfach besucht, wird ein `install`-Ereignis im Geltungsbereich des Service Workers ausgelöst. Wir möchten auf dieses Ereignis hören und den Cache mit den statischen Ressourcen der PWA bei der Installation füllen. Jedes Mal, wenn die Version des Service Workers aktualisiert wird, installiert der Browser den neuen Service Worker und das Installationsereignis tritt ein.

Das `install`-Ereignis tritt auf, wenn die App zum ersten Mal verwendet wird oder wenn der Browser einen neuen Service Worker entdeckt. Wenn ein älterer Service Worker durch einen neuen ersetzt wird, wird der alte Service Worker als PWA-Service Worker verwendet, bis der neue Service Worker aktiviert wird.

Nur in sicheren Kontexten verfügbar, gibt die Eigenschaft [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) ein [`CacheStorage`](/de/docs/Web/API/CacheStorage) Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open) gibt ein {{jsxref("Promise")}} zurück, das in das [`Cache`](/de/docs/Web/API/Cache) Objekt aufgelöst wird, das den Namen des Caches entspricht, der als Parameter übergeben wird.

Die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) nimmt ein Array von URLs als Parameter, ruft diese ab und fügt die Antworten dem gegebenen Cache hinzu. Die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) teilt dem Browser mit, dass die Arbeit im Gange ist, bis das Versprechen erfüllt ist, und dass er den Service Worker nicht beenden sollte, wenn er möchte, dass diese Arbeit abgeschlossen wird. Obwohl die Browser für das Ausführen und Beenden von Service Workern verantwortlich sind, wenn dies erforderlich ist, ist die `waitUntil`-Methode eine Aufforderung an den Browser, den Service Worker nicht zu beenden, während eine Aufgabe ausgeführt wird.

```js
self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
      const cache = await caches.open("cacheName_identifier");
      cache.addAll([
        "/",
        "/index.html"
        "/style.css"
        "/app.js"
      ]);
    })()
  );
});
```

#### Aufgabe

Fügen Sie einen Installations-Ereignis-Listener hinzu, der die in `APP_STATIC_RESOURCES` aufgelisteten Dateien abruft und im Cache mit dem Namen `CACHE_NAME` speichert.

#### Beispiel Lösung

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(APP_STATIC_RESOURCES);
    })(),
  );
});
```

### Aktualisieren der PWA und Löschen alter Caches

Wie erwähnt, wird, wenn ein vorhandener Service Worker durch einen neuen ersetzt wird, der vorhandene Service Worker als PWA-Service Worker verwendet, bis der neue Service Worker aktiviert wird. Wir verwenden das `activate`-Ereignis, um alte Caches zu löschen, um zu vermeiden, dass der Speicherplatz ausgeht. Wir durchlaufen benannte [`Cache`](/de/docs/Web/API/Cache) Objekte, löschen alle außer dem aktuellen, und setzen dann den Service Worker als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für die PWA ein.

Wir hören auf das `activate`-Ereignis des aktuellen Service Worker Global Scope.

Wir erhalten die Namen der vorhandenen benannten Caches. Wir verwenden die Methode [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys) (wieder über die Eigenschaft [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) auf die `CacheStorage` zugreifend), die ein {{jsxref("Promise")}} zurückgibt, das mit einem Array aufgelöst wird, das Strings enthält, die allen benannten [`Cache`](/de/docs/Web/API/Cache) Objekten in der Reihenfolge entsprechen, in der sie erstellt wurden.

Wir verwenden die Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um diese Liste von Name-Cache-Versprechen zu durchlaufen. Die `all()`-Methode nimmt eine Liste von iterablen Versprechen als Eingabe und gibt ein einzelnes `Promise` zurück. Für jeden Namen in der Liste der benannten Caches prüfen wir, ob der Cache der derzeit aktive Cache ist. Wenn nicht, löschen wir ihn mit der Methode `Cache` [`delete()`](/de/docs/Web/API/Cache/delete).

Die letzte Zeile, das `await clients.claim()`, verwendet die Methode [`claim()`](/de/docs/Web/API/Clients/claim) der [`Clients`](/de/docs/Web/API/Clients) Schnittstelle, um unserem Service Worker zu ermöglichen, sich selbst als Controller für unseren Client einzusetzen; bei dem "Client" auf eine laufende Instanz der PWA verwiesen wird. Die `claim()`-Methode ermöglicht es dem Service Worker, die Kontrolle über alle Clients in seinem Geltungsbereich zu übernehmen. Auf diese Weise müssen Clients, die im selben Bereich geladen werden, nicht neu geladen werden.

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        }),
      );
      await clients.claim();
    })(),
  );
});
```

#### Aufgabe

Fügen Sie den oben genannten `activate`-EventListener zu Ihrer `sw.js`-Datei hinzu.

### Das fetch-Ereignis

Wir können die Vorteile des [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Ereignisses nutzen, um zu verhindern, dass eine installierte PWA Anfragen macht, wenn der Benutzer online ist. Das Hören auf das fetch-Ereignis ermöglicht es, alle Anfragen abzufangen und mit gecachten Antworten zu antworten, anstatt zum Netzwerk zu gehen. Die meisten Anwendungen benötigen dieses Verhalten nicht. Tatsächlich möchten viele Geschäftsmodelle, dass Benutzer regelmäßig Serveranfragen stellen, um Tracking- und Marketingzwecke erfüllen zu können. Während also das Abfangen von Anfragen für einige ein Anti-Muster sein kann, um die Privatsphäre unserer CycleTracker-App zu verbessern, wollen wir nicht, dass die App unnötige Serveranfragen stellt.

Da unsere PWA aus einer einzigen Seite besteht, gehen wir bei Seitennavigationsanfragen zurück zur `index.html`-Startseite. Es gibt keine anderen Seiten, und wir wollen niemals zum Server gehen. Wenn die schreibgeschützte [`mode`](/de/docs/Web/API/Request/mode) Eigenschaft des Fetch-API [`Request`](/de/docs/Web/API/Request) `navigate` ist, was bedeutet, dass sie eine Webseite sucht, verwenden wir die Methode [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) des FetchEvents, um die Standard-fetch-Behandlung des Browsers zu verhindern und ein eigenes Antwortversprechen mit der Methode [`caches.match()`](/de/docs/Web/API/CacheStorage/match) zu geben.

Für alle anderen Anforderungsmodi öffnen wir die Caches, wie im Anwort der [install Events](#den_cache_bei_pwa-installation_speichern), und übergeben die Anforderungsdaten des Ereignisses an dieselbe `match()`-Methode. Sie überprüft, ob die Anforderung ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Wenn ja, gibt sie die gecachte Antwort zurück. Wenn nicht, geben wir eine [404-Status](/de/docs/Web/HTTP/Reference/Status/404) als Antwort zurück.

Die Verwendung des [`Response()`](/de/docs/Web/API/Response/Response) Konstruktors, um einen `null` Körper und einen `status: 404` als Optionen zu übergeben, bedeutet nicht, dass es einen Fehler in unserer PWA gibt. Vielmehr sollte alles, was wir benötigen, bereits im Cache vorhanden sein, und wenn nicht, werden wir nicht zum Server gehen, um dieses Nicht-Problem zu lösen.

```js
self.addEventListener("fetch", (event) => {
  // when seeking an HTML page
  if (event.request.mode === "navigate") {
    // Return to the index.html page
    event.respondWith(caches.match("/"));
    return;
  }

  // For every other request type
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request.url);
      if (cachedResponse) {
        // Return the cached response if it's available.
        return cachedResponse;
      }
      // Respond with a HTTP 404 response status.
      return new Response(null, { status: 404 });
    })(),
  );
});
```

## Vollständige Service Worker-Datei

Ihre `sw.js`-Datei sollte ähnlich dem folgenden JavaScript aussehen. Beachten Sie, dass beim Aktualisieren einer der in der `APP_STATIC_RESOURCES`-Array aufgeführten Ressourcen nur die Konstante oder Funktion, die in diesem Service Worker aktualisiert werden muss, der Wert von `VERSION` ist.

```js
// The version of the cache.
const VERSION = "v1";

// The name of the cache
const CACHE_NAME = `period-tracker-${VERSION}`;

// The static resources that the app needs to function.
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/app.js",
  "/style.css",
  "/icons/wheel.svg",
];

// On install, cache the static resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(APP_STATIC_RESOURCES);
    })(),
  );
});

// delete old caches on activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        }),
      );
      await clients.claim();
    })(),
  );
});

// On fetch, intercept server requests
// and respond with cached responses instead of going to network
self.addEventListener("fetch", (event) => {
  // As a single page app, direct app to always go to cached home page.
  if (event.request.mode === "navigate") {
    event.respondWith(caches.match("/"));
    return;
  }

  // For all other requests, go to the cache first, and then the network.
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request.url);
      if (cachedResponse) {
        // Return the cached response if it's available.
        return cachedResponse;
      }
      // If resource isn't in the cache, return a 404.
      return new Response(null, { status: 404 });
    })(),
  );
});
```

Beim Aktualisieren eines Service Workers muss die CONSTANT für die Version nicht aktualisiert werden, da jede Änderung des Inhalts des Service Worker-Skripts selbst den Browser dazu veranlasst, den neuen Service Worker zu installieren. Es ist jedoch eine gute Praxis, die Versionsnummer zu aktualisieren, da sie es den Entwicklern, einschließlich Ihnen selbst, erleichtert zu sehen, welche Version des Service Workers derzeit im Browser läuft, indem Sie den Namen des Cache im Anwendungstool [überprüfen](#mit_entwicklerwerkzeugen) (oder Quellen-Tool).

> [!NOTE]
> Das Aktualisieren von VERSION ist wichtig, wenn Änderungen an einer Anwendungsressource vorgenommen werden, einschließlich des CSS, HTML und des JS-Codes sowie der Bildressourcen. Die Versionsnummer oder eine beliebige Änderung an der Service-Worker-Datei ist der einzige Weg, um eine Aktualisierung der App für Ihre Benutzer zu erzwingen.

## Registrieren des Service Workers

Nachdem unser Service Worker-Skript komplett ist, müssen wir den Service Worker registrieren.

Wir beginnen damit zu überprüfen, ob der Browser die [Service Worker API](/de/docs/Web/API/Service_Worker_API) unterstützt, indem wir die [Feature-Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#das_konzept_der_feature-detection) für die Präsenz der [`serviceWorker`](/de/docs/Web/API/ServiceWorker) Eigenschaft im globalen [`navigator`](/de/docs/Web/API/Navigator) Objekt verwenden:

```html
<script>
  // Does "serviceWorker" exist
  if ("serviceWorker" in navigator) {
    // If yes, we register the service worker
  }
</script>
```

Wenn die Eigenschaft unterstützt wird, können wir dann die Methode [`register()`](/de/docs/Web/API/ServiceWorkerContainer/register) der `ServiceWorkerContainer`-Schnittstelle der Service Worker API verwenden.

```html
<script>
  if ("serviceWorker" in navigator) {
    // Register the app's service worker
    // Passing the filename where that worker is defined.
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Während das oben Gesagte für die Bedürfnisse der CycleTracker-App ausreichend ist, gibt die Methode `register()` ein {{jsxref("Promise")}} zurück, das im Erfolgsfall ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Objekt zurückgibt. Für eine robusterer Anwendung überprüfen Sie die Registrierung auf Fehler:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(
    (registration) => {
      console.log("Service worker registration successful:", registration);
    },
    (error) => {
      console.error(`Service worker registration failed: ${error}`);
    },
  );
} else {
  console.error("Service workers are not supported.");
}
```

### Aufgabe

Öffnen Sie `index.html` und fügen Sie das folgende {{HTMLElement("script")}} nach dem Skript zum Einbinden von `app.js` und vor dem schließenden `</body>`-Tag hinzu.

```html
<!-- Register the app's service worker. -->
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Sie können die voll funktionsfähige [CycleTracker Periodentracking-Web-App](https://mdn.github.io/pwa-examples/cycletracker/service_workers/) ausprobieren und den [Quellcode der Web-App](https://github.com/mdn/pwa-examples/tree/main/cycletracker/service_workers) auf GitHub ansehen. Ja, es funktioniert, und es ist jetzt offiziell eine PWA!

## Debugging von Service Workern

Aufgrund der Art und Weise, wie wir den Service Worker eingerichtet haben, wird beim Abruf jeder Anfrage aus dem Cache geladen, anstatt neue Inhalte zu laden. Beim Entwickeln werden Sie häufig Ihre Codeänderungen bearbeiten. Sie möchten Ihre Änderungen wahrscheinlich regelmäßig im Browser testen; wahrscheinlich bei jedem Speichern.

### Durch Aktualisieren der Versionsnummer und einen Hard-Reset

Um einen neuen Cache zu erhalten, können Sie die [Versionsnummer](#versionsnummer) ändern und dann einen harten Browser-Refresh durchführen. Die Art und Weise, wie Sie einen harten Refresh durchführen, hängt vom Browser und Betriebssystem ab:

- Auf Windows: Strg+F5, Umschalt+F5 oder Strg+Umschalt+R.
- Auf macOS: Umschalt+Befehl+R.
- Safari auf macOS: Option+Befehl+E um den Cache zu leeren, dann Option+Befehl+R.
- Auf Mobilgeräten: Gehen Sie zu den Browsereinstellungen (Android) oder Betriebssystemeinstellungen (Samsung, iOS), finden Sie unter den erweiterten Einstellungen den Browser (iOS) oder die Websitedaten (Android, Samsung) und löschen Sie die Daten für CycleTracker, bevor Sie die Seite neu laden.

### Mit Entwicklerwerkzeugen

Sie möchten wahrscheinlich nicht bei jedem Speichern die Versionsnummer ändern. Bis Sie bereit sind, eine neue Version Ihrer PWA in die Produktion zu geben und jedem eine neue Version Ihrer PWA zur Verfügung zu stellen, können Sie stattdessen den Service Worker abmelden.

Sie können einen Service Worker abmelden, indem Sie auf die Schaltfläche `unregister` in den [Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) klicken. Ein hartes Neuladen der Seite registriert den Service Worker erneut und erstellt einen neuen Cache.

![Firefox-Entwicklertools-Anwendungspanel mit einem gestoppten Service Worker und einer Abmelde-Schaltfläche](firefox_sw.jpg)

In einigen Entwicklertools können Sie einen Service Worker manuell abmelden oder die Option "Service Workers 'Update on Reload'" auswählen, die die Entwicklertools so einstellt, dass der Service Worker bei jedem Neuladen zurückgesetzt und reaktiviert wird, solange die Entwicklertools geöffnet sind. Es gibt auch eine Option, um den Service Worker zu umgehen und Ressourcen aus dem Netzwerk zu laden. Dieses Panel enthält Funktionen, die wir in diesem Tutorial nicht behandeln, aber hilfreich sind, wenn Sie komplexere PWAs erstellen, die [Synchronisieren](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#periodischer_hintergrundsync) und [Push](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#push) umfassen, die beide im [Offline- und Hintergrundbetriebsleitfaden](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) behandelt werden.

![Edge-Entwicklertools zeigt das Anwendungspanel auf einen Service-Worker eingestellt](edge_sw.jpg)

Das Service-Worker-Fenster im DevTools' Anwendungspanel bietet einen Link, um ein Popup-Fenster zu öffnen, das eine Liste aller registrierten Service Worker für den Browser enthält; nicht nur der Service Worker für die Anwendung, die im aktuellen Tab geöffnet ist. Jede Service-Worker-Liste zeigt Arbeitskräfte, die gestoppt, gestartet oder abgemeldet werden können.

![Zwei Service Worker existieren auf localhost:8080. Sie können aus der Liste der Service Worker abgemeldet werden](edge_sw_list.jpg)

Mit anderen Worten, während Sie an Ihrer PWA arbeiten, müssen Sie nicht die Versionsnummer für jede App-Ansicht aktualisieren. Aber denken Sie daran, wenn Sie mit allen Ihren Änderungen fertig sind, aktualisieren Sie den Wert der Service-Worker-VERSION, bevor Sie die aktualisierte Version Ihrer PWA verteilen. Wenn Sie das vergessen, wird niemand, der Ihre App bereits installiert hat oder sogar Ihre Online-PWA besucht hat, ohne sie zu installieren, jemals Ihre Änderungen sehen!

## Wir sind fertig!

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und die progressiv verbessert wird, um offline zu funktionieren. Wir haben eine voll funktionsfähige Webanwendung erstellt. Wir haben dann die beiden benötigten Funktionen hinzugefügt - eine Manifestdatei und einen Service Worker - um sie in eine PWA zu konvertieren. Wenn Sie Ihre App mit anderen teilen möchten, stellen Sie sie über eine sichere Verbindung bereit. Alternativ, wenn Sie den Zyklus-Tracker nur selbst nutzen möchten, [erstellen Sie eine lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), [installieren Sie die PWA](/de/docs/Web/Progressive_web_apps/Guides/Installing) und genießen Sie! Sobald sie installiert ist, müssen Sie nicht mehr localhost ausführen.

Herzlichen Glückwunsch!

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
