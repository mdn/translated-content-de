---
title: "CycleTracker: Service Workers"
short-title: Offline-Unterstützung mit Service Workers
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Bisher haben wir das HTML, CSS und JavaScript für CycleTracker geschrieben. Wir haben eine Manifestdatei hinzugefügt, die Farben, Icons, URL und andere App-Features definiert. Wir haben ein funktionierendes PWA! Aber es funktioniert noch nicht offline. In diesem Abschnitt werden wir das JavaScript schreiben, das erforderlich ist, um unsere voll funktionsfähige Web-Anwendung in ein PWA zu verwandeln, das als eigenständige App vertrieben werden kann und nahtlos offline funktioniert.

Falls Sie es noch nicht getan haben, kopieren Sie das [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/index.html), [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/style.css), [JavaScript](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/app.js) und die [manifest](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/cycletracker.json) JSON-Datei. Speichern Sie diese in Dateien mit den Namen `index.html`, `style.css`, `app.js` und `cycletracker.json`.

In diesem Abschnitt erstellen wir `sw.js`, das Service Worker-Skript, das unsere Web-App in ein PWA umwandelt. Wir haben bereits eine JavaScript-Datei; die letzte Zeile in der HTML-Datei ruft die `app.js` auf. Dieses JavaScript bietet alle Funktionen für die Standard-Features der Webanwendung. Anstatt die `sw.js`-Datei wie die `app.js`-Datei mit dem `src`-Attribut von {{HTMLElement("script")}} aufzurufen, werden wir eine Beziehung zwischen der Web-App und ihrem Service Worker erstellen, indem wir den Service Worker registrieren.

Am Ende dieser Lektion werden Sie ein voll funktionsfähiges PWA haben; eine progressiv verbesserte Webanwendung, die vollständig installierbar ist und auch dann funktioniert, wenn der Benutzer offline ist.

## Aufgaben des Service Workers

Der Service Worker sorgt dafür, dass die Anwendung offline funktioniert, während er sicherstellt, dass die Anwendung immer auf dem neuesten Stand ist. Um dies gut zu machen, sollte der Service Worker Folgendes beinhalten:

- Versionsnummer (oder andere Kennung).
- Liste der zu cachenden Ressourcen.
- Cachename.

Der Service Worker ist auch verantwortlich für:

- Installieren des Caches, wenn die App installiert wird.
- Aktualisieren sich selbst und der anderen Anwendungsdateien bei Bedarf.
- Entfernen von gecachten Dateien, die nicht mehr verwendet werden.

Diese Aufgaben erreichen wir, indem wir auf drei Service Worker-Events reagieren, einschließlich

- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event),
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event), und
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Events.

### Versionsnummer

Sobald das PWA auf dem Rechner des Nutzers installiert ist, ist es der einzige Weg, dem Browser mitzuteilen, dass aktualisierte Dateien abgerufen werden sollen, indem es eine Änderung im Service Worker gibt. Wenn eine Änderung an irgendeiner anderen PWA-Ressource vorgenommen wird — wenn das HTML aktualisiert wird, ein Fehler im CSS behoben wird, eine Funktion zu `app.js` hinzugefügt wird, ein Bild komprimiert wird, um die Dateispeicherung zu reduzieren, etc. — wird der Service Worker Ihrer installierten PWA nicht wissen, dass er aktualisierte Ressourcen herunterladen muss. Nur wenn der Service Worker in irgendeiner Weise geändert wird, wird die PWA wissen, dass es an der Zeit sein könnte, den Cache zu aktualisieren; das ist die Aufgabe des Service Workers, dies zu initiieren.

Obwohl das Ändern eines beliebigen Zeichens technisch ausreichend sein mag, ist eine Best Practice für PWAs, eine Versionsnummer-Konstante zu erstellen, die sequentiell aktualisiert wird, um ein Update der Datei anzuzeigen. Das Aktualisieren einer Versionsnummer (oder eines Datums) sorgt für eine offizielle Bearbeitung des Service Workers, selbst wenn sonst nichts im Service Worker selbst geändert wird, und bietet Entwicklern eine Möglichkeit, App-Versionen zu identifizieren.

#### Aufgabe

Beginnen Sie eine JavaScript-Datei mit der Angabe einer Versionsnummer:

```js
const VERSION = "v1";
```

Speichern Sie die Datei als `sw.js`

### Liste der Offline-Ressourcen

Für eine gute Offline-Erfahrung sollte die Liste der gecachten Dateien alle Ressourcen beinhalten, die innerhalb der Offline-Erfahrung des PWA verwendet werden. Während die Manifestdatei eine Vielzahl von Icons in verschiedenen Größen auflisten kann, muss der Anwendungscache nur die Assets beinhalten, die von der App im Offline-Modus verwendet werden.

```js
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon-512x512.png",
];
```

Sie müssen nicht die verschiedenen Icons einbeziehen, die von all den verschiedenen Betriebssystemen und Geräten verwendet werden, aber schließen Sie alle Bilder ein, die innerhalb der App verwendet werden, einschließlich der Assets, die in Splash-Seiten verwendet werden können, die sichtbar sein können, wenn die App langsam lädt oder in "Sie müssen eine Internetverbindung herstellen, um das volle Erlebnis zu erhalten" Seiten verwendet werden.

Schließen Sie die Service Worker-Datei nicht in die Liste der zu cachenden Ressourcen ein.

#### Aufgabe

Fügen Sie die Liste der zu cachenden Ressourcen für das CycleTracker PWA zu `sw.js` hinzu.

#### Beispiel-Lösung

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

Wir haben das `wheel.svg`-Icon eingeschlossen, obwohl unsere aktuelle Anwendung es nicht verwendet, falls Sie die Benutzeroberfläche des PWA erweitern, z.B. durch die Anzeige des Logos, wenn keine Periodendaten vorhanden sind.

### Name des Anwendungs-Caches

Wir haben eine Versionsnummer und die Dateien, die gecacht werden müssen. Bevor wir die Dateien cachen, müssen wir einen Namen des Caches erstellen, der verwendet wird, um die statischen Ressourcen der App zu speichern. Dieser Cachename sollte versioniert werden, um sicherzustellen, dass, wenn die App aktualisiert wird, ein neuer Cache erstellt wird und der alte gelöscht wird.

#### Aufgabe

Verwenden Sie die `VERSION`-Nummer, um einen versionierten `CACHE_NAME` zu erstellen und fügen Sie ihn als Konstante zu `sw.js` hinzu.

#### Beispiel-Lösung

Wir benennen unseren Cache `period-tracker-` mit der aktuellen `VERSION` angehängt. Da die Konstante in einer Zeile deklariert wird, setzen wir sie vor das Array von Ressourcen für bessere Lesbarkeit.

```js
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [
  // …
];
```

Wir haben erfolgreich unsere Konstanten deklariert; eine eindeutige Kennung, die Liste von Offline-Ressourcen als Array und den Cachename der Anwendung, der sich jedes Mal ändert, wenn die Kennung aktualisiert wird. Nun konzentrieren wir uns auf die Installation, Aktualisierung und das Löschen ungenutzter gecachter Ressourcen.

### Speichern des Caches bei der PWA-Installation

Wenn ein Benutzer eine Webseite mit einem Service Worker installiert oder einfach besucht, wird ein `install`-Ereignis im Service Worker-Bereich ausgelöst. Wir möchten dieses Ereignis beobachten und den Cache bei der Installation mit den statischen Ressourcen der PWA füllen. Jedes Mal, wenn die Service Worker-Version aktualisiert wird, installiert der Browser den neuen Service Worker und das Installationsereignis tritt auf.

Das `install`-Ereignis tritt auf, wenn die App zum ersten Mal verwendet wird oder wenn eine neue Version des Service Workers vom Browser erkannt wird. Wenn ein älterer Service Worker durch einen neuen ersetzt wird, wird der alte Service Worker als Service Worker der PWA verwendet, bis der neue aktiviert wird.

Nur in sicheren Kontexten verfügbar, gibt die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft ein [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext assoziiert ist. Die [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open)-Methode gibt ein {{jsxref("Promise")}} zurück, das zu dem Cache-Objekt namens der Cache aufgelöst wird, das als Parameter übergeben wird.

Die [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) Methode nimmt ein Array von URLs als Parameter an, ruft sie ab und fügt die Antworten zu dem gegebenen Cache hinzu. Die [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode informiert den Browser, dass Arbeit im Gange ist, bis das Promise abgeschlossen ist, und er sollte den Service Worker nicht beenden, wenn er möchte, dass diese Arbeit abgeschlossen wird. Während Browser für die Ausführung und das Beenden von Service Workern bei Bedarf verantwortlich sind, ist die `waitUntil`-Methode eine Anfrage an den Browser, den Service Worker nicht zu beenden, während eine Aufgabe ausgeführt wird.

```js
self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open("cacheName_identifier");
      cache.addAll(["/", "/index.html", "/style.css", "/app.js"]);
    })(),
  );
});
```

#### Aufgabe

Fügen Sie einen Installations-Event-Listener hinzu, der die in `APP_STATIC_RESOURCES` aufgelisteten Dateien abruft und im Cache mit dem Namen `CACHE_NAME` speichert.

#### Beispiel-Lösung

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

### Aktualisieren des PWA und Löschen alter Caches

Wie erwähnt, wenn ein vorhandener Service Worker durch einen neuen ersetzt wird, wird der vorhandene Service Worker als PWA-Service Worker verwendet, bis der neue aktiviert wird. Wir verwenden das `activate`-Ereignis, um alte Caches zu löschen, um zu vermeiden, dass der Speicherplatz ausgeht. Wir durchlaufen benannte [Cache](/de/docs/Web/API/Cache) Objekte und löschen alle außer dem aktuellen, und setzen dann den Service Worker als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für die PWA.

Wir lauschen auf das `activate`-Ereignis des aktuellen Service Workers im globalen Bereich.

Wir erhalten die Namen der vorhandenen benannten Caches. Wir verwenden die [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys)-Methode (wiederum Zugriff auf `CacheStorage` durch die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft), die ein {{jsxref("Promise")}} zurückgibt, das mit einem Array von Strings aufgelöst wird, die den Namen aller benannten [Cache](/de/docs/Web/API/Cache)-Objekte in der Reihenfolge entsprechen, in der sie erstellt wurden.

Wir verwenden die [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) Methode, um durch diese Liste von Cache-Namen-Promises zu iterieren. Die `all()`-Methode nimmt eine Liste von iterierbaren Promises als Eingabe an und gibt ein einziges `Promise` zurück. Für jeden Namen in der Liste der benannten Caches prüfen wir, ob der Cache der derzeit aktive Cache ist. Wenn nicht, löschen wir ihn mit der `Cache` [`delete()`](/de/docs/Web/API/Cache/delete)-Methode.

Die letzte Zeile, das `await clients.claim()` verwendet die [`claim()`](/de/docs/Web/API/Clients/claim)-Methode der [`Clients`](/de/docs/Web/API/Clients)-Schnittstelle, um unserem Service Worker zu ermöglichen, sich selbst als Controller für unseren Client zu setzen; der "Client" bezieht sich auf eine laufende Instanz des PWA. Die `claim()`-Methode ermöglicht es dem Service Worker, "Steuerung" aller Clients innerhalb seines Bereichs zu "beanspruchen". Auf diese Weise müssen Clients, die im selben Bereich geladen sind, nicht neu geladen werden.

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
          return undefined;
        }),
      );
      await clients.claim();
    })(),
  );
});
```

#### Aufgabe

Fügen Sie den obigen `activate`-EventListener zu Ihrer `sw.js`-Datei hinzu.

### Das Fetch-Ereignis

Wir können das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Ereignis nutzen, um zu verhindern, dass ein installiertes PWA Anfragen stellt, wenn der Benutzer online ist. Das Lauschen des Fetch-Ereignisses ermöglicht es, alle Anfragen zu verhindern und Antworten mit gecachten Antworten zu versehen, anstatt ins Netzwerk zu gehen. Die meisten Anwendungen benötigen dieses Verhalten nicht. Tatsächlich möchten viele Geschäftsmodelle, dass Benutzer regelmäßig Serveranfragen stellen, um Tracking- und Marketingzwecke zu ermöglichen. Während das Abfangen von Anfragen für einige ein Anti-Muster sein kann, wollen wir zur Verbesserung der Privatsphäre unserer CycleTracker-App nicht, dass die App unnötige Server-Anfragen stellt.

Da unser PWA aus einer einzigen Seite besteht, gehen wir für Seitennavigationsanfragen zur `index.html` Startseite zurück. Es gibt keine anderen Seiten und wir möchten nie auf den Server gehen. Wenn die readonly [`mode`](/de/docs/Web/API/Request/mode) Eigenschaft der Fetch API's [`Request`](/de/docs/Web/API/Request) `navigate` ist, bedeutet das, dass nach einer Webseite gesucht wird. In diesem Fall verwenden wir die [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) Methode des FetchEvents, um das Standardverhalten des Fetch des Browsers zu verhindern. Wir stellen eine eigene Antwort zurück, die das [`caches.match()`](/de/docs/Web/API/CacheStorage/match) Methode verwendet.

Für alle anderen Anfrage-Modi öffnen wir die Caches, wie im [install event response](#speichern_des_caches_bei_der_pwa-installation) beschrieben, indem wir die Ereignisanfrage an die gleiche `match()` Methode übergeben. Sie prüft, ob die Anfrage ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Wenn ja, gibt sie die gecachte Antwort zurück. Wenn nicht, geben wir eine [404 Status](/de/docs/Web/HTTP/Reference/Status/404) als Antwort zurück.

Die Verwendung des [`Response()`](/de/docs/Web/API/Response/Response) Konstruktors, um einen `null` Body und eine `status: 404` als Optionen zu übergeben, bedeutet nicht, dass es einen Fehler in unserem PWA gibt. Vielmehr sollte alles, was wir benötigen, bereits im Cache sein, und wenn nicht, gehen wir nicht zum Server, um dieses Problem zu lösen.

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

Ihre `sw.js`-Datei sollte ähnlich wie das folgende JavaScript aussehen. Beachten Sie, dass beim Aktualisieren einer der in der `APP_STATIC_RESOURCES`-Array aufgelisteten Ressourcen die einzige Konstante oder Funktion, die innerhalb dieses Service Workers aktualisiert werden muss, der Wert von `VERSION` ist.

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
          return undefined;
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

Beim Aktualisieren eines Service Workers muss die VERSION-Konstante nicht aktualisiert werden, da jede Änderung des Inhalts des Service Worker-Skripts selbst den Browser dazu veranlasst, den neuen Service Worker zu installieren. Es ist jedoch eine gute Praxis, die Versionsnummer zu aktualisieren, da es Entwicklern, einschließlich Ihnen selbst, erleichtert, zu sehen, welche Version des Service Workers derzeit im Browser läuft, indem Sie [den Namen des Caches im Anwendungstool überprüfen](#mit_entwicklerwerkzeuge) (oder Quellwerkzeug).

> [!NOTE]
> Das Aktualisieren von VERSION ist wichtig beim Vornehmen von Änderungen an einer Anwendungsressource, einschließlich des CSS, HTML und JS-Codes sowie Bildressourcen. Die Versionsnummer oder eine Änderung der Service Worker-Datei ist die einzige Möglichkeit, ein Update der App für Ihre Benutzer zu erzwingen.

## Service Worker registrieren

Jetzt, da unser Service Worker-Skript vollständig ist, müssen wir den Service Worker registrieren.

Wir beginnen, indem wir prüfen, ob der Browser die [Service Worker API](/de/docs/Web/API/Service_Worker_API) unterstützt, indem wir [Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#the_concept_of_feature_detection) verwenden, um das Vorhandensein der [`serviceWorker`](/de/docs/Web/API/ServiceWorker)-Eigenschaft auf dem globalen [`navigator`](/de/docs/Web/API/Navigator)-Objekt zu prüfen:

```html
<script>
  // Does "serviceWorker" exist
  if ("serviceWorker" in navigator) {
    // If yes, we register the service worker
  }
</script>
```

Wenn die Eigenschaft unterstützt wird, können wir dann die [`register()`](/de/docs/Web/API/ServiceWorkerContainer/register)-Methode der Service Worker API's [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Schnittstelle verwenden.

```html
<script>
  if ("serviceWorker" in navigator) {
    // Register the app's service worker
    // Passing the filename where that worker is defined.
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Obwohl oben genügend für die Bedürfnisse der CycleTracker-App ist, gibt die `register()`-Methode ein {{jsxref("Promise")}} zurück, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird. Für eine robustere Anwendung, prüfen Sie die Registrierung auf Fehler:

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

Öffnen Sie `index.html` und fügen Sie das folgende {{HTMLElement("script")}} nach dem Skript hinzu, um `app.js` einzuschließen, und vor dem schließenden `</body>`-Tag.

```html
<!-- Register the app's service worker. -->
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Sie können die voll funktionsfähige [CycleTracker Perioden-Tracking-Web-App](https://mdn.github.io/pwa-examples/cycletracker/service_workers/) ausprobieren und den [Quellcode der Web-App](https://github.com/mdn/pwa-examples/tree/main/cycletracker/service_workers) auf GitHub ansehen. Ja, es funktioniert, und es ist jetzt offiziell ein PWA!

## Debugging von Service Workers

Aufgrund der Art und Weise, wie wir den Service Worker eingerichtet haben, wird nach der Registrierung bei jeder Anfrage der Cache anstelle neuer Inhalte geladen. Beim Entwickeln werden Sie Ihren Code häufig bearbeiten. Sie möchten wahrscheinlich Ihre Änderungen regelmäßig im Browser testen; wahrscheinlich bei jedem Speichern.

### Durch Aktualisieren der Versionsnummer und einen Hard-Reset

Um einen neuen Cache zu erhalten, können Sie die [Versionsnummer](#versionsnummer) ändern und dann einen Hard-Browser-Refresh durchführen. Die Art und Weise, wie Sie einen Hard-Refresh durchführen, hängt vom Browser und Betriebssystem ab:

- Auf Windows: Strg+F5, Umschalt+F5 oder Strg+Umschalt+R.
- Auf macOS: Umschalt+Befehl+R.
- Safari auf macOS: Option+Befehl+E, um den Cache zu leeren, dann Option+Befehl+R.
- Auf Mobilgeräten: Gehe zu den Einstellungen des Browsers (Android) oder Betriebssystems (Samsung, iOS), finden Sie unter den erweiterten Einstellungen den Browser (iOS) oder die Website-Daten (Android, Samsung) Site-Einstellungen, und löschen Sie die Daten für CycleTracker, bevor Sie die Seite neu laden.

### Mit Entwicklerwerkzeugen

Sie möchten wahrscheinlich nicht die Versionsnummer bei jedem Speichern aktualisieren. Bis Sie bereit sind, eine neue Version Ihres PWA in Produktion zu bringen und allen eine neue Version Ihres PWA zu geben, können Sie anstelle der Änderung der Versionsnummer bei jedem Speichern den Service Worker abmelden.

Sie können einen Service Worker abmelden, indem Sie auf die Schaltfläche `abmelden` in den [Browser-Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) klicken. Ein hartes Aktualisieren der Seite meldet den Service Worker wieder an und erstellt einen neuen Cache.

![Firefox Developer Tools Anwendungsfenster mit einem gestoppten Service Worker und einer Abmelde-Schaltfläche](firefox_sw.jpg)

In einigen Entwicklerwerkzeugen können Sie einen Service Worker manuell abmelden, oder Sie aktivieren die Option "Update bei Neuladen" im Service Worker, die darauf abzielt, die Entwicklerwerkzeuge so einzustellen, dass der Service Worker bei jedem Neuladen zurückgesetzt und erneut aktiviert wird, solange die Entwicklerwerkzeuge geöffnet sind. Es gibt auch eine Option, den Service Worker zu umgehen und Ressourcen aus dem Netzwerk zu laden. Dieses Panel enthält Funktionen, die wir in diesem Tutorial nicht abdecken, die aber hilfreich sein werden, wenn Sie fortgeschrittenere PWAs erstellen, die [Syncing](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#periodic_background_sync) und [Push](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#push) umfassen, die beide im [Offline- und Hintergrundbetriebs-Leitfaden](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) behandelt werden.

![Edge Developer Tools, die das Anwendungsfenster im Service Worker-Modus zeigen](edge_sw.jpg)

Das Service Worker-Fenster innerhalb des Anwendungsfensters der DevTools bietet einen Link, um auf ein Popup-Fenster zuzugreifen, das eine Liste aller registrierten Service Worker für den Browser enthält; nicht nur der Service Worker der Anwendung, die im aktuellen Tab geöffnet ist. Jede Liste von Workern hat Schaltflächen, um diesen einzelnen Service Worker zu stoppen, zu starten oder abzumelden.

![Zwei Service Worker existieren unter localhost:8080. Sie können aus der Liste der Service Worker abgemeldet werden](edge_sw_list.jpg)

Mit anderen Worten, während Sie an Ihrem PWA arbeiten, müssen Sie die Versionsnummer nicht für jede App-Ansicht aktualisieren. Aber denken Sie daran, wenn Sie mit all Ihren Änderungen fertig sind, aktualisieren Sie den Wert der Service Worker VERSION, bevor Sie die aktualisierte Version Ihres PWA verteilen. Wenn Sie das vergessen, wird niemand, der Ihre App bereits installiert hat oder sogar Ihr Online-PWA besucht hat, ohne es zu installieren, jemals Ihre Änderungen sehen!

## Wir sind fertig!

Kernstück eines PWA ist eine Webanwendung, die installiert werden kann und progressiv verbessert wird, um offline zu funktionieren. Wir haben eine voll funktionsfähige Webanwendung erstellt. Dann haben wir die beiden Funktionen hinzugefügt - eine Manifestdatei und einen Service Worker - die erforderlich sind, um es in ein PWA zu verwandeln. Wenn Sie Ihre App mit anderen teilen möchten, machen Sie sie über eine sichere Verbindung verfügbar. Alternativ, wenn Sie nur den Zyklus-Tracker für sich selbst verwenden möchten, [erstellen Sie eine lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), [installieren Sie das PWA](/de/docs/Web/Progressive_web_apps/Guides/Installing) und genießen Sie! Sobald es installiert ist, müssen Sie localhost nicht mehr ausführen.

Herzlichen Glückwunsch!

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
