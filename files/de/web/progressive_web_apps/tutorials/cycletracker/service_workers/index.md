---
title: "CycleTracker: Service Workers"
short-title: Service Workers
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{PWASidebar}}

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Bisher haben wir das HTML, CSS und JavaScript für CycleTracker geschrieben. Wir haben eine Manifestdatei hinzugefügt, die Farben, Symbole, URL und andere App-Features definiert. Wir haben eine funktionierende PWA! Aber sie funktioniert noch nicht offline. In diesem Abschnitt werden wir das JavaScript schreiben, das erforderlich ist, um unsere voll funktionsfähige Webanwendung in eine PWA zu verwandeln, die als eigenständige App verteilt werden kann und nahtlos offline funktioniert.

Wenn Sie dies noch nicht getan haben, kopieren Sie die [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/index.html), [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/style.css), [JavaScript](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/app.js) und [Manifest](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/cycletracker.json) JSON-Datei. Speichern Sie sie als Dateien mit den Namen `index.html`, `style.css`, `app.js` und `cycletracker.json`.

In diesem Abschnitt erstellen wir `sw.js`, das Service Worker Skript, das unsere Web-App in eine PWA umwandelt. Wir haben bereits eine JavaScript-Datei; die letzte Zeile in der HTML-Datei ruft die `app.js` auf. Dieses JavaScript bietet alle Funktionen für die Standard-Webanwendungsfunktionen. Anstatt die Datei `sw.js` wie die Datei `app.js` mit dem `src`-Attribut des {{HTMLElement("script")}} aufzurufen, werden wir eine Beziehung zwischen der Web-App und ihrem Service Worker herstellen, indem wir den Service Worker registrieren.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige PWA; eine progressiv verbesserte Webanwendung, die vollständig installierbar ist und auch dann funktioniert, wenn der Benutzer offline ist.

## Aufgaben des Service Workers

Der Service Worker sorgt dafür, dass die Anwendung offline funktioniert, während er sicherstellt, dass die Anwendung immer auf dem neuesten Stand ist. Um dies gut zu machen, sollte der Service Worker Folgendes enthalten:

- Versionsnummer (oder andere Kennung).
- Liste der zu cachenden Ressourcen.
- Cache-Versionsname.

Der Service Worker ist außerdem verantwortlich für:

- Installation des Caches, wenn die App installiert wird.
- Aktualisierung von sich selbst und den anderen Anwendungsdateien bei Bedarf.
- Entfernen von gecachten Dateien, die nicht mehr verwendet werden.

Wir erreichen diese Aufgaben, indem wir auf drei Service Worker-Ereignisse reagieren, darunter die

- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event),
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) und
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignisse.

### Versionsnummer

Sobald die PWA auf dem Rechner des Benutzers installiert ist, kann der Browser nur dann darüber informiert werden, dass aktualisierte Dateien abzurufen sind, wenn es eine Änderung im Service Worker gibt. Wenn eine Änderung an einer anderen PWA-Ressource vorgenommen wird - wenn das HTML aktualisiert wird, ein Fehler im CSS behoben wird, eine Funktion zu `app.js` hinzugefügt wird, ein Bild komprimiert wird, um den Speicherbedarf zu reduzieren, etc. - wird der Service Worker der installierten PWA nicht wissen, dass er aktualisierte Ressourcen herunterladen muss. Nur wenn der Service Worker auf irgendeine Weise geändert wird, wird die PWA wissen, dass es Zeit sein könnte, den Cache zu aktualisieren; was die Aufgabe des Service Workers ist.

Obwohl das Ändern eines beliebigen Zeichens technisch ausreichen kann, ist es eine bewährte Praxis für PWA, eine Versionsnummer als Konstante zu erstellen, die sequenziell aktualisiert wird, um eine Dateiaktualisierung anzuzeigen. Das Aktualisieren einer Versionsnummer (oder des Datums) bietet eine offizielle Bearbeitung des Service Workers, selbst wenn sonst nichts am Service Worker geändert wird, und bietet Entwicklern eine Möglichkeit, App-Versionen zu identifizieren.

#### Aufgabe

Beginnen Sie eine JavaScript-Datei, indem Sie eine Versionsnummer einfügen:

```js
const VERSION = "v1";
```

Speichern Sie die Datei als `sw.js`

### Liste der Offline-Ressourcen

Für ein gutes Offline-Erlebnis sollte die Liste der gecachten Dateien alle Ressourcen umfassen, die innerhalb der Offline-Erfahrung der PWA verwendet werden. Während die Manifestdatei möglicherweise eine Vielzahl von Symbolen in verschiedenen Größen auflistet, muss der App-Cache nur die in Offline-Modus von der App verwendeten Ressourcen enthalten.

```js
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon-512x512.png",
];
```

Sie müssen nicht die verschiedenen Symbole einbeziehen, die von allen verschiedenen Betriebssystemen und Geräten verwendet werden. Aber fügen Sie alle im Rahmen der App verwendeten Bilder ein, einschließlich Ressourcen, die auf Splash-Seiten sichtbar sein mögen, wenn die App langsam lädt oder auf Seiten, die anzeigen "Sie müssen mit dem Internet verbunden sein, um das volle Erlebnis zu erhalten".

Schließen Sie die Service Worker-Datei nicht in die Liste der zu cachenden Ressourcen ein.

#### Aufgabe

Fügen Sie die Liste der zu cachenden Ressourcen für die CycleTracker PWA zu `sw.js` hinzu.

#### Beispiel Lösung

Wir schließen die statischen Ressourcen ein, die in anderen Abschnitten dieses Tutorials erstellt wurden und die CycleTracker benötigt, um offline zu funktionieren. Unsere aktuelle `sw.js` Datei ist:

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

Wir haben das `wheel.svg` Symbol aufgenommen, obwohl unsere aktuelle Anwendung es nicht verwendet, für den Fall, dass Sie die Benutzeroberfläche der PWA verbessern, z. B. das Logo anzeigen, wenn keine Periodendaten vorliegen.

### Name des Anwendungscaches

Wir haben eine Versionsnummer und die zu cachenden Dateien. Bevor wir die Dateien cachen, müssen wir einen Namen für den Cache erstellen, der zum Speichern der statischen Ressourcen der App verwendet wird. Dieser Cachenamen sollte versioniert sein, um sicherzustellen, dass bei einem Update der App ein neuer Cache erstellt und der alte gelöscht wird.

#### Aufgabe

Verwenden Sie die `VERSION` Nummer, um einen versionierten `CACHE_NAME` zu erstellen und fügen Sie ihn als Konstante zu `sw.js` hinzu.

#### Beispiel Lösung

Wir benennen unseren Cache `period-tracker-` mit der aktuellen angehängten `VERSION`. Da die Konstante auf einer einzelnen Zeile deklariert ist, setzen wir sie vor die Ressourcen-Array-Konstante, um die Lesbarkeit zu verbessern.

```js
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [ ... ];
```

Wir haben unsere Konstanten erfolgreich deklariert; einen eindeutigen Identifikator, die Liste der Offline-Ressourcen als Array und den Anwendungscachenamen, der sich jedes Mal ändert, wenn der Identifikator aktualisiert wird. Konzentrieren wir uns nun auf die Installation, Aktualisierung und das Löschen nicht verwendeter gecachter Ressourcen.

### Speichern des Caches bei PWA-Installation

Wenn ein Benutzer eine Website mit einem Service Worker besucht oder diese installiert, wird ein `install` Ereignis im Service Worker-Bereich ausgelöst. Wir wollen auf dieses Ereignis hören und den Cache bei der Installation mit den statischen Ressourcen der PWA füllen. Jedes Mal, wenn die Service Worker-Version aktualisiert wird, installiert der Browser den neuen Service Worker und das Instalereignis tritt auf.

Das `install` Ereignis tritt bei der erstmaligen Nutzung der App auf oder wenn der Browser einen neuen Service Worker entdeckt. Wenn ein älterer Service Worker durch einen neuen ersetzt wird, wird der alte Service Worker als PWA-Service Worker verwendet, bis der neue Service Worker aktiviert wird.

Nur in sicheren Kontexten verfügbar, gibt die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft ein [`CacheStorage`](/de/docs/Web/API/CacheStorage) Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Die [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open) Methode gibt ein {{jsxref("Promise")}} zurück, das sich zu dem [`Cache`](/de/docs/Web/API/Cache) Objekt auflöst, dessen Name als Parameter übergeben wurde.

Die [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) Methode nimmt ein Array von URLs als Parameter, ruft sie ab und fügt dann die Antworten zum gegebenen Cache hinzu. Die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) teilt dem Browser mit, dass Arbeit im Gange ist, bis sich das Versprechen erfüllt, und er den Service Worker nicht beenden sollte, wenn er will, dass die Arbeit abgeschlossen wird. Während Browser dafür verantwortlich sind, Service Worker bei Bedarf auszuführen und zu beenden, ist die `waitUntil` Methode eine Anfrage an den Browser, den Service Worker nicht zu beenden, während eine Aufgabe ausgeführt wird.

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

Fügen Sie einen Installationsereignis-Listener hinzu, der die im `APP_STATIC_RESOURCES` gelisteten Dateien in den Cache mit dem Namen `CACHE_NAME` abruft und speichert.

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

Wie bereits erwähnt, wird der vorhandene Service Worker verwendet, bis ein neuer aktiviert wird, wenn ein vorhandener durch einen neuen ersetzt wird. Wir verwenden das `activate` Ereignis, um alte Caches zu löschen, um zu vermeiden, dass der Speicherplatz ausgeht. Wir iterieren über benannte [`Cache`](/de/docs/Web/API/Cache) Objekte, löschen alle außer dem aktuellen und setzen dann den Service Worker als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für die PWA.

Wir hören auf das `activate` Ereignis des aktuellen Service Worker Global Scopes.

Wir rufen die Namen der vorhandenen benannten Caches ab. Wir verwenden die [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys) Methode (wieder Zugriff auf `CacheStorage` über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft), die ein {{jsxref("Promise")}} zurückgibt, das sich mit einem Array auflöst, das Strings enthält, die allen benannten [`Cache`](/de/docs/Web/API/Cache) Objekten in der Reihenfolge entsprechen, in der sie erstellt wurden.

Wir verwenden die [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) Methode, um durch diese Liste von Namen-Cache-Promises zu iterieren. Die `all()` Methode nimmt eine Liste von iterierbaren Promises als Eingabe und gibt ein einziges Versprechen zurück. Für jeden Namen in der Liste der benannten Caches überprüfen wir, ob der Cache der derzeit aktive Cache ist. Wenn nicht, löschen wir ihn mit der `Cache` [`delete()`](/de/docs/Web/API/Cache/delete) Methode.

Die letzte Zeile, das `await clients.claim()` verwendet die [`claim()`](/de/docs/Web/API/Clients/claim) Methode der [`Clients`](/de/docs/Web/API/Clients) Schnittstelle, um unseren Service Worker zu ermöglichen, sich selbst als Controller für unseren Client einzurichten; der "Client" bezieht sich auf eine laufende Instanz der PWA. Die `claim()` Methode ermöglicht es dem Service Worker, die Kontrolle über alle Clients in seinem Scope zu übernehmen. Auf diese Weise müssen Clients, die im selben Scope geladen werden, nicht neu geladen werden.

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

Fügen Sie den obigen `activate` Ereignis-Listener zu Ihrer `sw.js` Datei hinzu.

### Das Fetch-Ereignis

Wir können das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Ereignis nutzen, um zu verhindern, dass eine installierte PWA Anfragen stellt, wenn der Benutzer online ist. Das Abhören des Fetch-Ereignisses ermöglicht es, alle Anfragen abzufangen und mit gecachten Antworten zu reagieren, anstatt ins Netzwerk zu gehen. Die meisten Anwendungen benötigen dieses Verhalten nicht. Tatsächlich möchten viele Geschäftsmodelle, dass Benutzer regelmäßig Serveranfragen stellen, um Tracking- und Marketingzwecke zu erfüllen. Während das Abfangen von Anfragen möglicherweise für einige ein Anti-Pattern ist, wollen wir, um die Privatsphäre unserer CycleTracker-App zu verbessern, nicht, dass die App unnötige Serveranfragen stellt.

Da unsere PWA aus einer einzigen Seite besteht, kehren wir für Seiten-Navigationsanfragen zur `index.html` Startseite zurück. Es gibt keine anderen Seiten und wir wollen niemals zum Server gehen. Wenn die [`Request`](/de/docs/Web/API/Request) readonly [`mode`](/de/docs/Web/API/Request/mode) Eigenschaft der Fetch-API `navigate` ist, d. h., sie sucht nach einer Webseite, verwenden wir die FetchEvent [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) Methode, um das Standard-Fetch-Handling des Browsers zu verhindern und unser eigenes Antwortversprechen unter Verwendung der [`caches.match()`](/de/docs/Web/API/CacheStorage/match) Methode bereitzustellen.

Für alle anderen Anfragemodi öffnen wir die Caches, wie im [Installationsereignis](#speichern_des_caches_bei_pwa-installation) beschrieben, indem wir die Ereignisanfrage an die gleiche `match()` Methode übergeben. Es wird überprüft, ob die Anfrage ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Wenn ja, gibt sie die gecachte Antwort zurück. Wenn nicht, geben wir eine [404 Status](/de/docs/Web/HTTP/Status/404) als Antwort zurück.

Die Verwendung des [`Response()`](/de/docs/Web/API/Response/Response) Konstruktors, um einen `null` Körper und einen `status: 404` als Optionen zu übergeben, bedeutet nicht, dass ein Fehler in unserer PWA vorliegt. Tatsächlich sollte alles, was wir benötigen, bereits im Cache sein, und wenn nicht, gehen wir nicht zum Server, um dieses Nicht-Problem zu lösen.

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

## Vollständige Service Worker Datei

Ihre `sw.js` Datei sollte ähnlich wie das folgende JavaScript aussehen. Beachten Sie, dass beim Aktualisieren einer der in `APP_STATIC_RESOURCES` gelisteten Ressourcen die einzige Konstante oder Funktion, die innerhalb dieses Service Workers aktualisiert werden muss, der Wert von `VERSION` ist.

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

Beim Aktualisieren eines Service Workers muss die VERSION-Konstante nicht aktualisiert werden, da jede Änderung am Inhalt des Service Worker-Skripts den Browser dazu veranlasst, den neuen Service Worker zu installieren. Es ist jedoch eine gute Praxis, die Versionsnummer zu aktualisieren, da es einfacher für Entwickler, einschließlich Ihnen, ist, zu erkennen, welche Version des Service Workers derzeit im Browser läuft, indem [der Name des Caches im Anwendungstool überprüft wird](#mit_entwickler-tools) (oder Quelle-Tool).

> [!NOTE]
> Das Aktualisieren der VERSION ist wichtig, wenn Änderungen an einer Anwendungsressource vorgenommen werden, einschließlich der CSS-, HTML- und JS-Code und Bildressourcen. Die Versionsnummer oder jede Änderung der Service Worker Datei ist der einzige Weg, um die App für Ihre Benutzer zu aktualisieren.

## Registrieren des Service Workers

Jetzt, da unser Service Worker-Skript vollständig ist, müssen wir den Service Worker registrieren.

Wir beginnen mit der Überprüfung, ob der Browser die [Service Worker API](/de/docs/Web/API/Service_Worker_API) unterstützt, indem wir die [Feature-Erkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#the_concept_of_feature_detection) für die Existenz der [`serviceWorker`](/de/docs/Web/API/ServiceWorker) Eigenschaft auf dem globalen [`navigator`](/de/docs/Web/API/Navigator) Objekt verwenden:

```html
<script>
  // Does "serviceWorker" exist
  if ("serviceWorker" in navigator) {
    // If yes, we register the service worker
  }
</script>
```

Wenn die Eigenschaft unterstützt wird, können wir die [`register()`](/de/docs/Web/API/ServiceWorkerContainer/register) Methode der Service Worker-API's [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Schnittstelle verwenden.

```html
<script>
  if ("serviceWorker" in navigator) {
    // Register the app's service worker
    // Passing the filename where that worker is defined.
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Während das oben Genannte für die CycleTracker-App-Anforderungen ausreicht, gibt die `register()` Methode ein {{jsxref("Promise")}} zurück, das sich mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Objekt auflöst. Für eine robustere Anwendung sollte die Registrierung auf Fehler überprüft werden:

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

Öffnen Sie `index.html` und fügen Sie das folgende {{HTMLElement("script")}} nach dem Skript zum Einschließen von `app.js` und vor dem schließenden `</body>`-Tag ein.

```html
<!-- Register the app's service worker. -->
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Sie können die voll funktionsfähige [CycleTracker Perioden-Tracking-Web-App](https://mdn.github.io/pwa-examples/cycletracker/service_workers/) ausprobieren und den [Web-App-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/service_workers) auf GitHub ansehen. Ja, es funktioniert, und es ist jetzt offiziell eine PWA!

## Debuggen von Service Workern

Aufgrund der Art und Weise, wie wir den Service Worker eingerichtet haben, wird jede Anfrage, sobald er registriert ist, aus dem Cache abgerufen, anstatt neue Inhalte zu laden. Beim Entwickeln werden Sie Ihren Code häufig bearbeiten. Sie möchten wahrscheinlich Ihre Änderungen regelmäßig im Browser testen; wahrscheinlich bei jedem Speichern.

### Durch Aktualisierung der Versionsnummer und Durchführung eines harten Resets

Um einen neuen Cache zu erhalten, können Sie die [Versionsnummer](#versionsnummer) ändern und dann einen harten Browser-Refresh durchführen. Die Methode zum harten Refresh hängt vom Browser und Betriebssystem ab:

- Unter Windows: Strg+F5, Umschalt+F5 oder Strg+Umschalt+R.
- Unter macOS: Umschalt+Befehl+R.
- Safari unter macOS: Option+Befehl+E, um den Cache zu leeren, anschließend Option+Befehl+R.
- Auf Mobilgeräten: Gehen Sie zu den Browser- (Android) oder Betriebssystem- (Samsung, iOS) Einstellungen, unter den erweiterten Einstellungen finden Sie die Browser- (iOS) oder Website-Daten (Android, Samsung) Sitzeinstellungen und löschen die Daten für CycleTracker, bevor Sie die Seite neu laden.

### Mit Entwickler-Tools

Sie möchten die Versionsnummer wahrscheinlich nicht bei jedem Speichern aktualisieren. Bis Sie bereit sind, eine neue Version Ihrer PWA in die Produktion zu bringen und allen Benutzern eine neue Version Ihrer PWA zur Verfügung zu stellen, können Sie, anstatt die Versionsnummer bei jedem Speichern zu ändern, den Service Worker abmelden.

Sie können einen Service Worker abmelden, indem Sie auf die Schaltfläche `abmelden` in den [Entwickler-Tools des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) klicken. Ein hartes Aktualisieren der Seite wird den Service Worker erneut registrieren und einen neuen Cache erstellen.

![Firefox Entwickler-Tools Anwendungsfenster mit einem gestoppten Service Worker und einer Abmeldeschaltfläche](firefox_sw.jpg)

In einigen Entwickler-Tools können Sie einen Service Worker manuell abmelden oder Sie können die Option "Service Worker bei Neuladen aktualisieren" auswählen, die die Entwickler-Tools so einstellt, dass der Service Worker bei jedem Neuladen zurückgesetzt und reaktiviert wird, solange die Entwickler-Tools geöffnet sind. Es gibt auch eine Option zum Umgehen des Service Workers und Laden von Ressourcen aus dem Netzwerk. Dieses Panel enthält Funktionen, die wir in diesem Tutorial nicht behandeln, die jedoch hilfreich sind, wenn Sie fortgeschrittenere PWAs erstellen, die [Synchronisation](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#periodic_background_sync) und [Push](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#push) beinhalten, die beide in dem [Leitfaden für Offline- und Hintergrundoperationen](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) behandelt werden.

![Edge Entwickler-Tools zeigt das Anwendungsfenster, das auf einen Service Worker eingestellt ist](edge_sw.jpg)

Das Service Worker-Fenster innerhalb des Anwendungsfensters der DevTools bietet einen Link, um ein Fenster zu öffnen, das eine Liste aller registrierten Service Worker für den Browser enthält; nicht nur der Service Worker für die im aktuellen Tab geöffneten Anwendung. Jede Service Worker-Liste von Workern hat Schaltflächen, um diesen individuellen Service Worker zu stoppen, zu starten oder abzumelden.

![Zwei Service Worker existieren unter localhost:8080. Sie können aus der Liste der Service Worker abgemeldet werden](edge_sw_list.jpg)

Mit anderen Worten, während Sie an Ihrer PWA arbeiten, müssen Sie die Versionsnummer nicht für jede App-Ansicht aktualisieren. Aber denken Sie daran, wenn Sie mit all Ihren Änderungen fertig sind, den Wert der Service Worker-VERSION zu aktualisieren, bevor Sie die aktualisierte Version Ihrer PWA verteilen. Wenn Sie das vergessen, wird niemand, der Ihre App bereits installiert hat oder auch nur online auf Ihre PWA zugegriffen hat, sie jemals Ihren Änderungen sehen!

## Wir sind fertig!

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und die progressiv verbessert wird, um offline zu funktionieren. Wir haben eine voll funktionsfähige Webanwendung erstellt. Dann haben wir die beiden Funktionen hinzugefügt - eine Manifestdatei und einen Service Worker -, die erforderlich sind, um sie in eine PWA zu verwandeln. Wenn Sie Ihre App mit anderen teilen möchten, machen Sie sie über eine sichere Verbindung verfügbar. Oder, wenn Sie nur den Zyklustracker selbst verwenden möchten, [erstellen Sie eine lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), [installieren Sie die PWA](/de/docs/Web/Progressive_web_apps/Guides/Installing) und genießen Sie sie! Sobald sie installiert ist, müssen Sie localhost nicht mehr ausführen.

Herzlichen Glückwunsch!

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
