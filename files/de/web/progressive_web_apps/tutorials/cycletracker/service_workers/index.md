---
title: "CycleTracker: Service Workers"
short-title: Service workers
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Bisher haben wir das HTML, CSS und JavaScript für CycleTracker geschrieben. Wir haben eine Manifestdatei hinzugefügt, die Farben, Symbole, URL und andere App-Funktionen definiert. Wir haben eine funktionierende PWA! Aber sie funktioniert noch nicht offline. In diesem Abschnitt werden wir das notwendige JavaScript schreiben, um unsere voll funktionsfähige Webanwendung in eine PWA zu verwandeln, die als eigenständige App verteilt werden kann und nahtlos offline arbeitet.

Falls Sie dies noch nicht getan haben, kopieren Sie die [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/index.html), [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/style.css), [JavaScript](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/app.js) und [Manifest](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/cycletracker.json) JSON-Datei. Speichern Sie sie in Dateien namens `index.html`, `style.css`, `app.js` und `cycletracker.json`.

In diesem Abschnitt erstellen wir `sw.js`, das Service Worker Skript, das unsere Web App in eine PWA verwandeln wird. Wir haben bereits eine JavaScript-Datei; die letzte Zeile in der HTML-Datei ruft `app.js` auf. Dieses JavaScript bietet alle Funktionen für die Standard-Webanwendungsfeatures. Anstatt die `sw.js`-Datei aufzurufen wie wir es mit `app.js` über das `src`-Attribut des {{HTMLElement("script")}} gemacht haben, werden wir eine Beziehung zwischen der Web App und ihrem Service Worker erstellen, indem wir den Service Worker registrieren.

Am Ende dieser Lektion werden Sie eine voll funktionsfähige PWA haben; eine progressiv verbesserte Webanwendung, die vollständig installierbar ist und auch funktioniert, wenn der Benutzer offline ist.

## Verantwortlichkeiten des Service Workers

Der Service Worker sorgt dafür, dass die Anwendung offline funktioniert und dass die Anwendung immer auf dem neuesten Stand ist. Um dies gut zu machen, sollte der Service Worker Folgendes enthalten:

- Versionsnummer (oder eine andere Kennung).
- Liste der zu cachenden Ressourcen.
- Cache-Versionsname.

Der Service Worker ist auch verantwortlich für:

- Installation des Caches während der Installation der App.
- Selbstaktualisierung und Aktualisierung der anderen Anwendungsdateien bei Bedarf.
- Löschen der zwischengespeicherten Dateien, die nicht mehr verwendet werden.

Diese Aufgaben erreichen wir, indem wir auf drei Service Worker-Ereignisse reagieren, einschließlich der

- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event),
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) und
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignisse.

### Versionsnummer

Sobald die PWA auf dem Rechner des Benutzers installiert ist, ist die einzige Möglichkeit, dem Browser mitzuteilen, dass aktualisierte Dateien abgerufen werden können, eine Änderung im Service Worker. Wenn eine Änderung an einer anderen PWA-Ressource vorgenommen wird — wenn das HTML aktualisiert wird, ein Fehler im CSS behoben wird, eine Funktion zu `app.js` hinzugefügt wird, ein Bild komprimiert wird, um die Dateispeicherung zu reduzieren, etc. — weiß der Service Worker Ihrer installierten PWA nicht, dass er aktualisierte Ressourcen herunterladen muss. Erst wenn der Service Worker in irgendeiner Weise geändert wird, weiß die PWA, dass es an der Zeit sein könnte, den Cache zu aktualisieren; was die Aufgabe des Service Workers ist.

Zwar mag es technisch ausreichen, ein beliebiges Zeichen zu ändern, jedoch ist es eine bewährte Praxis bei PWA, eine konstante Versionsnummer zu erstellen, die sequenziell aktualisiert wird, um eine Änderung an der Datei anzuzeigen. Das Aktualisieren einer Versionsnummer (oder eines Datums) bietet eine offizielle Änderung des Service Workers, selbst wenn sonst nichts im Service Worker selbst geändert wird, und bietet Entwicklern eine Möglichkeit, App-Versionen zu identifizieren.

#### Aufgabe

Beginnen Sie eine JavaScript-Datei, indem Sie eine Versionsnummer hinzufügen:

```js
const VERSION = "v1";
```

Speichern Sie die Datei als `sw.js`

### Liste der Offline-Ressourcen

Für eine gute Offline-Erfahrung sollte die Liste der zwischengespeicherten Dateien alle Ressourcen enthalten, die innerhalb der Offline-Erfahrung der PWA verwendet werden. Während die Manifestdatei möglicherweise eine Vielzahl von Symbolen in verschiedenen Größen auflistet, muss der Anwendungs-Cache nur die Ressourcen enthalten, die von der Anwendung im Offline-Modus verwendet werden.

```js
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon-512x512.png",
];
```

Sie müssen nicht die verschiedenen Symbole, die von allen verschiedenen Betriebssystemen und Geräten verwendet werden, in die Liste aufnehmen. Schließen Sie jedoch alle Bilder ein, die innerhalb der App verwendet werden, einschließlich Ressourcen, die innerhalb von Splash-Seiten verwendet werden könnten, die sichtbar sind, wenn die App langsam lädt, oder in Seiten, die eine Verbindung zum Internet für das volle Erlebnis erfordern.

Der Service Worker muss nicht in der Liste der zu cachenden Ressourcen enthalten sein.

#### Aufgabe

Fügen Sie die Liste der zu cachenden Ressourcen für die CycleTracker-PWA zu `sw.js` hinzu.

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

Wir haben das `wheel.svg`-Symbol eingeschlossen, obwohl unsere aktuelle Anwendung es nicht verwendet, falls Sie die PWA-Benutzeroberfläche verbessern, z. B. wenn das Logo angezeigt wird, wenn keine Periodendaten vorhanden sind.

### Anwendungs-Cache-Name

Wir haben eine Versionsnummer und die Dateien, die zwischengespeichert werden müssen. Bevor wir die Dateien zwischenspeichern, müssen wir einen Namen für den Cache erstellen, der verwendet wird, um die statischen Ressourcen der App zu speichern. Dieser Cache-Name sollte versioniert werden, um sicherzustellen, dass beim Aktualisieren der App ein neuer Cache erstellt wird und der alte gelöscht wird.

#### Aufgabe

Verwenden Sie die `VERSION`-Nummer, um einen versionierten `CACHE_NAME` zu erstellen, und fügen Sie ihn als Konstante zu `sw.js` hinzu.

#### Beispiel Lösung

Wir benennen unseren Cache `period-tracker-` mit dem angehängten aktuellen `VERSION`. Da die Konstantenerklärung in einer einzelnen Zeile erfolgt, platzieren wir sie vor dem Ressourcenarray für eine bessere Lesbarkeit.

```js
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [ ... ];
```

Wir haben erfolgreich unsere Konstanten deklariert; einen einzigartigen Bezeichner, die Liste der Offline-Ressourcen als Array und den Cache-Namen der Anwendung, der sich ändert, jedes Mal wenn der Bezeichner aktualisiert wird. Jetzt konzentrieren wir uns auf die Installation, Aktualisierung und das Löschen von nicht mehr benötigten zwischengespeicherten Ressourcen.

### Speichern des Caches bei der PWA-Installation

Wenn ein Benutzer eine Website mit einem Service Worker installiert oder einfach nur besucht, wird im Service Worker-Scope ein `install`-Ereignis ausgelöst. Wir möchten auf dieses Ereignis hören und den Cache beim Installieren mit den statischen Ressourcen der PWA füllen. Jedes Mal, wenn die Version des Service Workers aktualisiert wird, installiert der Browser den neuen Service Worker und das Installations-Ereignis tritt auf.

Das `install`-Ereignis tritt auf, wenn die App zum ersten Mal verwendet wird oder wenn der Browser eine neue Version des Service Workers erkennt. Wenn ein älterer Service Worker durch einen neuen ersetzt wird, wird der alte Service Worker als Service Worker der PWA verwendet, bis der neue Service Worker aktiv wird.

Nur in sicheren Kontexten verfügbar gibt die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft ein [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open) gibt ein {{jsxref("Promise")}} zurück, das mit dem [`Cache`](/de/docs/Web/API/Cache)-Objekt übereinstimmt, wobei der Name des Caches als Parameter übergeben wird.

Die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) nimmt ein Array von URLs als Parameter, ruft sie ab und fügt dann die Antworten in den angegebenen Cache ein. Die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) teilt dem Browser mit, dass die Arbeit im Gange ist, bis das Versprechen erfüllt wird, und der Service Worker nicht beendet werden sollte, wenn diese Arbeit abgeschlossen werden soll. Während die Browser dafür verantwortlich sind, die Service Worker bei Bedarf auszuführen und zu beenden, ist die `waitUntil`-Methode eine Bitte an den Browser, den Service Worker während eines laufenden Arbeitsvorgangs nicht zu beenden.

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

Fügen Sie einen Installations-Event-Listener hinzu, der die im `APP_STATIC_RESOURCES` aufgeführten Dateien abruft und im Cache namens `CACHE_NAME` speichert.

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

Wie bereits erwähnt, wenn ein vorhandener Service Worker durch einen neuen ersetzt wird, wird der vorhandene Service Worker als Service Worker der PWA verwendet, bis der neue Service Worker aktiviert wird. Wir verwenden das `activate`-Ereignis, um alte Caches zu löschen, um zu verhindern, dass der Speicherplatz knapp wird. Wir iterieren über benannte [`Cache`](/de/docs/Web/API/Cache)-Objekte, löschen alle bis auf das aktuelle und setzen dann den Service Worker als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für die PWA.

Wir hören auf das `activate`-Ereignis des aktuellen Service Worker-Global-Scope.

Wir erhalten die Namen der bestehenden benannten Caches. Wir verwenden die Methode [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys) (wiederum Zugriff auf `CacheStorage` über die Eigenschaft [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)), die einen {{jsxref("Promise")}} zurückgibt, das sich mit einem Array auflöst, das Zeichenfolgen enthält, die allen benannten [`Cache`](/de/docs/Web/API/Cache)-Objekten in der Reihenfolge ihrer Erstellung entsprechen.

Wir verwenden die Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um über diese Liste von Namen-Cache-Promises zu iterieren. Die Methode `all()` benötigt als Eingabe eine Liste von iterierbaren Versprechen und gibt ein einziges `Promise` zurück. Für jeden Namen in der Liste der benannten Caches prüfen Sie, ob der Cache der aktuell aktive Cache ist. Wenn nicht, löschen Sie ihn mit der `Cache`-Methode [`delete()`](/de/docs/Web/API/Cache/delete).

Die letzte Zeile, das `await clients.claim()`, verwendet die Methode [`claim()`](/de/docs/Web/API/Clients/claim) der [`Clients`](/de/docs/Web/API/Clients)-Schnittstelle, um unserem Service Worker zu ermöglichen, sich als Controller für unseren Client einzusetzen; bei dem "Client" handelt es sich um eine laufende Instanz der PWA. Die Methode `claim()` ermöglicht es dem Service Worker, die Kontrolle über alle Clients innerhalb seines Bereichs zu beanspruchen. Auf diese Weise müssen neu geladene Clients im selben Bereich nicht erneut geladen werden.

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

Fügen Sie den obigen `activate`-EventListener zu Ihrer `sw.js`-Datei hinzu.

### Das Fetch-Ereignis

Wir können das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignis nutzen, um zu verhindern, dass eine installierte PWA Anfragen stellt, wenn der Benutzer online ist. Das Zuhören auf das Fetch-Ereignis ermöglicht es, alle Anfragen abzufangen und mit zwischengespeicherten Antworten zu reagieren, anstatt das Netzwerk zu beanspruchen. Die meisten Anwendungen benötigen dieses Verhalten nicht. Tatsächlich wollen viele Geschäftsmodelle, dass Benutzer regelmäßig Serveranfragen stellen, um sie zu verfolgen und für Marketingzwecke zu nutzen. So kann das Abfangen von Anfragen ein Antipattern für manche sein, um die Privatsphäre unserer CycleTracker-App zu verbessern, wollen wir nicht, dass die App unnötige Serveranfragen stellt.

Da unsere PWA aus einer einzigen Seite besteht, gehen wir für Seitennavigationsanfragen zurück zur `index.html`-Startseite. Es gibt keine anderen Seiten und wir wollen niemals den Server kontaktieren. Wenn die schreibgeschützte [`mode`](/de/docs/Web/API/Request/mode)-Eigenschaft der Fetch API's [`Request`](/de/docs/Web/API/Request) `navigate` ist, was bedeutet, dass eine Webseite gesucht wird, verwenden wir die `respondWith()`-Methode des FetchEvents, um das Standardabrufverhalten des Browsers zu verhindern, und stellen unser eigenes Antwortversprechen unter Verwendung der Methode [`caches.match()`](/de/docs/Web/API/CacheStorage/match) bereit.

Für alle anderen Anfragemodi öffnen wir die Caches, wie im [Installations-Ereignis-Antwort](#speichern_des_caches_bei_der_pwa-installation) beschrieben, und übergeben stattdessen die Ereignisanfrage an die gleiche `match()`-Methode. Sie überprüft, ob die Anfrage ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Wenn ja, wird die zwischengespeicherte Antwort zurückgegeben. Wenn nicht, geben wir eine [404-Status](/de/docs/Web/HTTP/Status/404) als Antwort zurück.

Die Verwendung des [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktors, um einen `null`-Inhalt und einen `status: 404` als Optionen zu übergeben, bedeutet nicht, dass es einen Fehler in unserer PWA gibt. Vielmehr sollte alles, was wir brauchen, bereits im Cache vorhanden sein und wenn nicht, gehen wir nicht auf den Server, um dieses Nicht-Problem zu lösen.

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

Ihre `sw.js` Datei sollte dem folgenden JavaScript ähneln. Beachten Sie, dass beim Aktualisieren von Ressourcen in der `APP_STATIC_RESOURCES`-Liste die einzigen Konstanten oder Funktionen, die in diesem Service Worker aktualisiert werden müssen, der Wert von `VERSION` ist.

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

Wenn Sie einen Service Worker aktualisieren, muss die VERSION-Konstante nicht aktualisiert werden, da jede Änderung des Inhalts des Service Worker-Skripts selbst den Browser dazu veranlasst, den neuen Service Worker zu installieren. Es ist jedoch eine gute Praxis, die Versionsnummer zu aktualisieren, da dies Entwicklern, einschließlich Ihnen selbst, hilft, zu sehen, welche Version des Service Workers gerade im Browser läuft, indem Sie [den Namen des Caches im Anwendungstool überprüfen](#mit_entwicklerwerkzeugen) (oder im Quellen-Tool).

> [!NOTE]
> Das Aktualisieren der VERSION ist wichtig, wenn Änderungen an einer Anwendungsressource vorgenommen werden, einschließlich der CSS-, HTML- und JS-Code- sowie Bild-Assets. Die Versionsnummer oder jede Änderung an der Service Worker-Datei ist der einzige Weg, um ein Update der App für Ihre Benutzer zu erzwingen.

## Registrieren des Service Workers

Nun, da unser Service Worker-Skript vollständig ist, müssen wir den Service Worker registrieren.

Wir beginnen, indem wir prüfen, ob der Browser die [Service Worker API](/de/docs/Web/API/Service_Worker_API) unterstützt, indem wir [Feature-Erkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#the_concept_of_feature_detection) für das Vorhandensein der [`serviceWorker`](/de/docs/Web/API/ServiceWorker)-Eigenschaft im globalen [`navigator`](/de/docs/Web/API/Navigator)-Objekt verwenden:

```html
<script>
  // Does "serviceWorker" exist
  if ("serviceWorker" in navigator) {
    // If yes, we register the service worker
  }
</script>
```

Wenn die Eigenschaft unterstützt wird, können wir dann die Methode [`register()`](/de/docs/Web/API/ServiceWorkerContainer/register) der Service Worker API Schnittstelle [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) verwenden.

```html
<script>
  if ("serviceWorker" in navigator) {
    // Register the app's service worker
    // Passing the filename where that worker is defined.
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Oben angeführtes reicht zwar für die Bedürfnisse der CycleTracker-App aus, die `register()`-Methode gibt jedoch ein {{jsxref("Promise")}} zurück, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird. Für eine robustere Anwendung, überprüfen Sie die Registrierung auf Fehler:

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

Öffnen Sie `index.html` und fügen Sie den folgenden {{HTMLElement("script")}} nach dem Skript zum Einbinden von `app.js` und vor dem schließenden `</body>`-Tag hinzu.

```html
<!-- Register the app's service worker. -->
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Sie können die voll funktionsfähige [CycleTracker Menstruations-Tracking-Webapp](https://mdn.github.io/pwa-examples/cycletracker/service_workers/) ausprobieren und den [Webapp-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/service_workers) auf GitHub einsehen. Ja, es funktioniert, und es ist jetzt offiziell eine PWA!

## Debugging von Service Workern

Aufgrund unserer Einrichtung des Service Workers, wird bei einmaliger Registrierung jede Anfrage aus dem Cache geladen, anstatt neue Inhalte zu laden. Bei der Entwicklung werden Sie Ihren Code häufig ändern. Sie möchten wahrscheinlich Ihre Änderungen regelmäßig im Browser testen; wahrscheinlich bei jedem Speichern.

### Durch Aktualisieren der Versionsnummer und einen Hard-Reset

Um einen neuen Cache zu erhalten, können Sie die [Versionsnummer](#versionsnummer) ändern und dann einen harten Browser-Refresh durchführen. Wie ein harter Refresh durchgeführt wird, hängt vom Browser und Betriebssystem ab:

- Unter Windows: Strg+F5, Shift+F5 oder Strg+Shift+R.
- Unter MacOS: Shift+Command+R.
- Safari auf MacOS: Option+Command+E, um den Cache zu leeren, dann Option+Command+R.
- Auf Mobilgeräten: Gehen Sie in die Einstellungen des Browsers (Android) oder Betriebssystems (Samsung, iOS), suchen Sie unter den erweiterten Einstellungen die Browsereinstellungen (iOS) oder die Website-Daten (Android, Samsung), und löschen Sie die Daten für CycleTracker, bevor Sie die Seite neu laden.

### Mit Entwicklerwerkzeugen

Sie möchten wahrscheinlich nicht bei jeder Speicherung die Versionsnummer aktualisieren. Bis Sie bereit sind, eine neue Version Ihrer PWA in Produktion zu bringen und allen eine neue Version Ihrer PWA zur Verfügung zu stellen, anstatt die Versionsnummer bei jedem Speicher zu ändern, können Sie den Service Worker abmelden.

Sie können einen Service Worker abmelden, indem Sie auf die Schaltfläche `unregister` in den [Entwicklerwerkzeugen des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) klicken. Ein hartes Neuladen der Seite wird den Service Worker neu registrieren und einen neuen Cache erstellen.

![Firefox-Entwicklerwerkzeuge Anwendungspanel mit gestopptem Service Worker und Abmeldebutton](firefox_sw.jpg)

In einigen Entwicklerwerkzeugen können Sie einen Service Worker manuell abmelden, oder Sie können die Option "Aktualisierung bei Neuladen" für Service Worker auswählen, die die Entwicklerwerkzeuge so einstellen, dass der Service Worker bei jedem Neuladen zurückgesetzt und wieder aktiviert wird, solange die Entwicklerwerkzeuge geöffnet sind. Es gibt auch die Möglichkeit, den Service Worker zu umgehen und Ressourcen aus dem Netzwerk zu laden. Dieses Panel enthält Funktionen, die wir in dieser Anleitung nicht behandeln, aber hilfreich sein werden, wenn Sie fortgeschrittenere PWAs erstellen, die [Synchronisierung](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#periodic_background_sync) und [Push](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#push) enthalten, welche beide im [Leitfaden für Offline- und Hintergrundoperationen](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) behandelt werden.

![Edge-Entwicklerwerkzeuge zeigen das Anwendungspanel, das auf einen Service Worker eingestellt ist](edge_sw.jpg)

Das Service Worker Fenster innerhalb des Anwendungspanels der DevTools bietet einen Link, um ein Popup-Fenster mit einer Liste aller registrierten Service Worker des Browsers zu öffnen; nicht nur für die Anwendung im aktuellen Tab. Jede Service Worker Liste von Workern hat Schaltflächen, um diesen individuellen Service Worker zu stoppen, zu starten oder abzumelden.

![Zwei Service Worker existieren bei localhost:8080. Sie können aus der Liste der Service Worker abgemeldet werden](edge_sw_list.jpg)

Mit anderen Worten, während Sie an Ihrer PWA arbeiten, müssen Sie die Versionsnummer nicht für jede App-Sichtweise aktualisieren. Denken Sie jedoch daran, dass Sie, wenn Sie alle Ihre Änderungen abgeschlossen haben, den Service Worker VERSION-Wert aktualisieren, bevor Sie die aktualisierte Version Ihrer PWA verteilen. Wenn Sie dies vergessen, wird niemand, der Ihre App bereits installiert hat oder sogar Ihre Online-PWA ohne Installation besucht hat, jemals Ihre Änderungen sehen!

## Wir sind fertig!

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und die progressiv so verbessert wird, dass sie offline funktioniert. Wir haben eine voll funktionsfähige Webanwendung erstellt. Wir haben dann die beiden Features hinzugefügt - eine Manifestdatei und einen Service Worker - die erforderlich sind, um sie in eine PWA zu verwandeln. Wenn Sie Ihre App mit anderen teilen möchten, stellen Sie sie über eine sichere Verbindung bereit. Alternativ, wenn Sie den Zyklustracker einfach nur selbst verwenden möchten, [erstellen Sie eine lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), [installieren Sie die PWA](/de/docs/Web/Progressive_web_apps/Guides/Installing), und viel Spaß! Sobald installiert, müssen Sie localhost nicht mehr ausführen.

Herzlichen Glückwunsch!

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
