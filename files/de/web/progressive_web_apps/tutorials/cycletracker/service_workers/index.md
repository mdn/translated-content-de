---
title: "CycleTracker: Service Workers"
short-title: Service workers
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Bisher haben wir das HTML, CSS und JavaScript für CycleTracker geschrieben. Wir haben eine Manifest-Datei hinzugefügt, die Farben, Symbole, URL und andere App-Funktionen definiert. Unsere PWA funktioniert! Aber sie funktioniert noch nicht offline. In diesem Abschnitt werden wir das JavaScript schreiben, das erforderlich ist, um unsere voll funktionsfähige Webanwendung in eine PWA zu verwandeln, die als eigenständige App verteilt werden kann und nahtlos offline funktioniert.

Falls Sie es noch nicht getan haben, kopieren Sie die [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/index.html)-, [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/style.css)-, [JavaScript](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/app.js)- und [manifest](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/cycletracker.json)-JSON-Datei. Speichern Sie sie in Dateien mit den Namen `index.html`, `style.css`, `app.js` und `cycletracker.json`.

In diesem Abschnitt erstellen wir `sw.js`, das Service Worker-Skript, das unsere Web App in eine PWA umwandeln wird. Wir haben bereits eine JavaScript-Datei; die letzte Zeile in der HTML-Datei ruft die `app.js` auf. Dieses JavaScript bietet alle Funktionen für die Standard-Webanwendungsfeatures. Anstatt die `sw.js`-Datei wie die `app.js`-Datei mit dem `src`-Attribut von {{HTMLElement("script")}} aufzurufen, werden wir eine Beziehung zwischen der Web-App und ihrem Service Worker schaffen, indem wir den Service Worker registrieren.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige PWA; eine progressiv verbesserte Webanwendung, die vollständig installierbar ist und auch funktioniert, wenn der Benutzer offline ist.

## Aufgaben des Service Workers

Der Service Worker ist dafür verantwortlich, dass die Anwendung offline funktioniert und gleichzeitig sicherstellt, dass die Anwendung immer auf dem neuesten Stand ist. Um dies gut zu machen, sollte der Service Worker Folgendes umfassen:

- Versionsnummer (oder eine andere Kennung).
- Liste der zu cachenden Ressourcen.
- Cache-Versionsname.

Der Service Worker ist auch verantwortlich für:

- Installation des Caches, wenn die App installiert wird.
- Aktualisierung von sich selbst und den anderen Anwendungsdateien nach Bedarf.
- Entfernen von gecachten Dateien, die nicht mehr verwendet werden.

Wir erreichen diese Aufgaben, indem wir auf drei Service Worker-Ereignisse reagieren, einschließlich der

- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event),
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) und
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignisse.

### Versionsnummer

Sobald die PWA auf dem Computer des Benutzers installiert ist, ist die einzige Möglichkeit, den Browser darüber zu informieren, dass aktualisierte Dateien abgerufen werden müssen, eine Änderung am Service Worker. Wenn eine Änderung an einer anderen PWA-Ressource vorgenommen wird – wenn das HTML aktualisiert wird, ein Fehler im CSS behoben wird, eine Funktion zu `app.js` hinzugefügt wird, ein Bild komprimiert wird, um die Dateigröße zu reduzieren usw. – wird der Service Worker Ihrer installierten PWA nicht wissen, dass er aktualisierte Ressourcen herunterladen muss. Nur wenn der Service Worker in irgendeiner Weise verändert wird, weiß die PWA, dass es an der Zeit sein könnte, den Cache zu aktualisieren; was die Aufgabe des Service Workers ist, zu initiieren.

Auch wenn das Ändern eines Zeichens technisch ausreichen könnte, ist es eine bewährte Praxis für PWA, eine Versionsnummer-Konstante zu erstellen, die sequentiell aktualisiert wird, um ein Update der Datei anzuzeigen. Das Aktualisieren einer Versionsnummer (oder eines Datums) bietet eine offizielle Bearbeitung des Service Workers, selbst wenn sonst nichts im Service Worker selbst geändert wird, und bietet Entwicklern eine Möglichkeit, App-Versionen zu identifizieren.

#### Aufgabe

Starten Sie eine JavaScript-Datei, indem Sie eine Versionsnummer einfügen:

```js
const VERSION = "v1";
```

Speichern Sie die Datei als `sw.js`.

### Offline-Ressourcenliste

Für ein gutes Offline-Erlebnis sollte die Liste der gecachten Dateien alle Ressourcen enthalten, die innerhalb der Offline-Erfahrung der PWA verwendet werden. Während die Manifestdatei eine Vielzahl von Symbolen in verschiedenen Größen enthalten kann, muss der Anwendungscache nur die Ressourcen enthalten, die von der App im Offline-Modus verwendet werden.

```js
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon-512x512.png",
];
```

Sie müssen nicht die verschiedenen Symbole aufnehmen, die auf allen verschiedenen Betriebssystemen und Geräten verwendet werden. Aber nehmen Sie alle Bilder auf, die innerhalb der App verwendet werden, einschließlich Ressourcen, die auf Splash-Seiten verwendet werden könnten, die sichtbar sind, wenn die App beim Laden langsam ist oder auf Seiten verwendet werden, die "Sie müssen sich mit dem Internet verbinden, um das volle Erlebnis zu genießen"-Seiten darstellen.

Nehmen Sie die Service Worker-Datei nicht in die Liste der zu cachenden Ressourcen auf.

#### Aufgabe

Fügen Sie die Liste der zu cachenden Ressourcen für die CycleTracker PWA in `sw.js` hinzu.

#### Beispielösung

Wir haben die statischen Ressourcen, die in anderen Abschnitten dieses Tutorials erstellt wurden, und die CycleTracker benötigt, um offline zu funktionieren in unser aktuelles `sw.js`-File aufgenommen:

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

Wir haben das `wheel.svg`-Symbol hinzugefügt, obwohl unsere aktuelle Anwendung es nicht verwendet, falls Sie die PWA-Benutzeroberfläche verbessern, z.B. das Logo anzeigen, wenn keine Periodendaten vorliegen.

### Anwendungs-Cache-Name

Wir haben eine Versionsnummer und die Dateien, die gecacht werden müssen. Bevor wir die Dateien cachen, müssen wir einen Namen für den Cache erstellen, der verwendet wird, um die statischen Ressourcen der App zu speichern. Dieser Cache-Name sollte versioniert werden, um sicherzustellen, dass beim Aktualisieren der App ein neuer Cache erstellt wird und der alte gelöscht wird.

#### Aufgabe

Verwenden Sie die `VERSION`-Nummer, um einen versionierten `CACHE_NAME` zu erstellen und als Konstante zu `sw.js` hinzuzufügen.

#### Beispielösung

Wir benennen unseren Cache `period-tracker-` mit der aktuellen `VERSION` angehängt. Da die Konstanterklärung in einer einzigen Zeile erfolgt, setzen wir sie vor das Array der Ressourcen-Konstanten für eine bessere Lesbarkeit.

```js
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [ ... ];
```

Wir haben erfolgreich unsere Konstanten deklariert; ein eindeutiger Bezeichner, die Liste der Offline-Ressourcen als Array und der Cache-Name der Anwendung, der sich jedes Mal ändert, wenn der Bezeichner aktualisiert wird. Nun lassen Sie uns auf die Installation, Aktualisierung und das Löschen unbenutzter gecachter Ressourcen konzentrieren.

### Speichern des Caches bei der PWA-Installation

Wenn ein Benutzer eine Website mit einem Service Worker installiert oder einfach besucht, wird ein `install`-Ereignis im Service Worker-Bereich ausgelöst. Wir möchten auf dieses Ereignis warten und den Cache bei der Installation mit den statischen Ressourcen der PWA füllen. Jedes Mal, wenn die Service Worker-Version aktualisiert wird, installiert der Browser den neuen Service Worker und das Installationsereignis tritt ein.

Das `install`-Ereignis tritt auf, wenn die App zum ersten Mal verwendet wird oder wenn vom Browser eine neue Version des Service Workers erkannt wird. Wenn ein älterer Service Worker durch einen neuen ersetzt wird, wird der alte Service Worker als Service Worker der PWA verwendet, bis der neue Service Worker aktiviert wird.

Nur in sicheren Kontexten verfügbar, gibt die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft ein [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext assoziiert ist. Die [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open)-Methode gibt ein {{jsxref("Promise")}} zurück, das sich auf das [`Cache`](/de/docs/Web/API/Cache)-Objekt auflöst, das den Namen des Caches mit dem als Parameter übergebenen entspricht.

Die [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll)-Methode nimmt ein Array von URLs als Parameter an, ruft sie ab und fügt dann die Antworten in den angegebenen Cache ein. Die [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode teilt dem Browser mit, dass Arbeit im Gange ist, bis sich das Versprechen erfüllt, und er den Service Worker nicht beenden sollte, wenn er möchte, dass die Arbeit abgeschlossen wird. Während die Browser dafür verantwortlich sind, Service Worker bei Bedarf auszuführen und zu beenden, ist die `waitUntil`-Methode eine Anfrage an den Browser, den Service Worker nicht zu beenden, während eine Aufgabe ausgeführt wird.

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

Fügen Sie einen Installations-Eventlistener hinzu, der die in `APP_STATIC_RESOURCES` aufgeführten Dateien abruft und in dem Cache speichert, der mit `CACHE_NAME` benannt ist.

#### Beispielösung

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

Wie bereits erwähnt, wird der bestehende Service Worker als Service Worker der PWA verwendet, bis der neue Service Worker aktiviert wird, wenn ein bestehender Service Worker durch einen neuen ersetzt wird. Wir verwenden das `activate`-Ereignis, um alte Caches zu löschen, um zu vermeiden, dass der Speicherplatz ausgeht. Wir iterieren über benannte [`Cache`](/de/docs/Web/API/Cache)-Objekte, löschen alle bis auf das aktuelle und setzen dann den Service Worker als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für die PWA.

Wir lauschen auf das [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignis im aktuellen Service Worker-Bereich.

Wir erhalten die Namen der existierenden benannten Caches. Wir verwenden die [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys)-Methode (wieder mit Zugriff auf `CacheStorage` über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft), die ein {{jsxref("Promise")}} zurückgibt, das mit einem Array aufgelöst wird, das Zeichenfolgen enthält, die allen benannten [`Cache`](/de/docs/Web/API/Cache)-Objekten in der Reihenfolge, in der sie erstellt wurden, entsprechen.

Wir verwenden die [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)-Methode, um durch diese Liste von Namenscache-Versprechen zu iterieren. Die `all()`-Methode nimmt als Eingabe eine Liste von iterable Promises und gibt ein einzelnes `Promise` zurück. Für jeden Namen in der Liste der benannten Caches prüfen wir, ob der Cache der derzeit aktive Cache ist. Wenn nicht, löschen wir ihn mit der `Cache`-Methode [`delete()`](/de/docs/Web/API/Cache/delete).

Die letzte Zeile, das `await clients.claim()`, verwendet die Methode [`claim()`](/de/docs/Web/API/Clients/claim) der [`Clients`](/de/docs/Web/API/Clients)-Schnittstelle, um zu ermöglichen, dass unser Service Worker sich selbst als Controller für unseren Client setzt; der "Client" bezieht sich auf eine laufende Instanz der PWA. Die `claim()`-Methode ermöglicht dem Service Worker, die Kontrolle über alle Clients innerhalb seines Bereichs zu beanspruchen. Auf diese Weise müssen Clients, die im gleichen Bereich geladen werden, nicht neu geladen werden.

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

Fügen Sie den obigen `activate`-EventListener zu Ihrer `sw.js` Datei hinzu.

### Das fetch-Ereignis

Wir können das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignis nutzen, um zu verhindern, dass eine installierte PWA Anfragen stellt, wenn der Benutzer online ist. Das Abhören des Fetch-Ereignisses macht es möglich, alle Anfragen abzufangen und mit gecachten Antworten zu antworten, anstatt ins Netzwerk zu gehen. Die meisten Anwendungen erfordern dieses Verhalten nicht. Tatsächlich möchten viele Geschäftsmodelle, dass Benutzer regelmäßig Serveranfragen stellen, um Tracking- und Marketingzwecke zu erfüllen. Während das Abfangen von Anfragen also ein Anti-Muster für einige sein kann, wollen wir zur Verbesserung der Privatsphäre unserer CycleTracker-App, dass die App keine unnötigen Serveranfragen stellt.

Da unsere PWA aus einer einzigen Seite besteht, gehen wir für Navigationsanfragen zurück auf die `index.html`-Startseite. Es gibt keine anderen Seiten und wir wollen nie zum Server gehen. Wenn die schreibgeschützte [`mode`](/de/docs/Web/API/Request/mode)-Eigenschaft von Fetch API's [`Request`](/de/docs/Web/API/Request) `navigate` ist, was bedeutet, dass es nach einer Webseite sucht, verwenden wir die [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode des FetchEvents, um die Standardeinstellung des Browsers zu überschreiben und unser eigenes Antwortversprechen zu liefern, das die [`caches.match()`](/de/docs/Web/API/CacheStorage/match)-Methode verwendet.

Für alle anderen Anforderungsmodi öffnen wir die Caches wie in der [Installationsereignis-Antwort](#speichern_des_caches_bei_der_pwa-installation) beschrieben, übergeben stattdessen die Ereignisanfrage an dieselbe `match()`-Methode. Sie prüft, ob die Anfrage ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Wenn ja, gibt sie die gecachte Antwort zurück. Wenn nicht, geben wir eine [404-Status](/de/docs/Web/HTTP/Status/404) als Antwort zurück.

Die Verwendung des [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktors, um einen `null`-Körper und einen `status: 404` als Optionen zu übergeben, bedeutet nicht, dass es einen Fehler in unserer PWA gibt. Vielmehr sollte bereits alles im Cache sein und wenn nicht, werden wir nicht zum Server gehen, um dieses Nicht-Problem zu lösen.

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

Ihre `sw.js`-Datei sollte ähnlich wie das folgende JavaScript aussehen. Beachten Sie, dass beim Aktualisieren einer der in `APP_STATIC_RESOURCES`-Array aufgelisteten Ressourcen die einzige Konstante oder Funktion, die innerhalb dieses Service Workers aktualisiert werden muss, der Wert von `VERSION` ist.

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

Beim Aktualisieren eines Service Workers muss die VERSION-Konstante nicht aktualisiert werden, da jede Änderung im Inhalt des Service Worker-Skripts selbst den Browser dazu veranlasst, den neuen Service Worker zu installieren. Es ist jedoch eine gute Praxis, die Versionsnummer zu aktualisieren, da es Entwicklern, einschließlich Ihnen selbst, erleichtert wird, zu sehen, welche Version des Service Workers derzeit im Browser läuft, indem [der Name des Caches im Anwendungswerkzeug](#mit_entwicklerwerkzeugen) (oder Quellenwerkzeug) überprüft wird.

> [!NOTE]
> Das Aktualisieren von VERSION ist wichtig, wenn Änderungen an einer Anwendungsressource vorgenommen werden, einschließlich des CSS-, HTML- und JS-Codes sowie Bild-Assets. Die Versionsnummer oder jede Änderung der Service Worker-Datei ist der einzige Weg, das Update der App für Ihre Benutzer zu erzwingen.

## Registrieren des Service Workers

Da unser Service Worker-Skript nun vollständig ist, müssen wir den Service Worker registrieren.

Zunächst überprüfen wir, ob der Browser die [Service Worker API](/de/docs/Web/API/Service_Worker_API) unterstützt, indem wir eine [Funktionsdetectie](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#the_concept_of_feature_detection) für das Vorhandensein der [`serviceWorker`](/de/docs/Web/API/ServiceWorker)-Eigenschaft auf dem globalen [`navigator`](/de/docs/Web/API/Navigator)-Objekt verwenden:

```html
<script>
  // Does "serviceWorker" exist
  if ("serviceWorker" in navigator) {
    // If yes, we register the service worker
  }
</script>
```

Wenn die Eigenschaft unterstützt wird, können wir dann die [`register()`](/de/docs/Web/API/ServiceWorkerContainer/register)-Methode der Schnittstelle [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) der Service Worker API verwenden.

```html
<script>
  if ("serviceWorker" in navigator) {
    // Register the app's service worker
    // Passing the filename where that worker is defined.
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Obwohl das oben genannte für die Bedürfnisse der CycleTracker-App ausreicht, gibt die `register()`-Methode ein {{jsxref("Promise")}} zurück, das sich auf ein Objekt [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) auflöst. Für eine robustere Anwendung sollten Sie die Registrierung auf Fehler prüfen:

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

Öffnen Sie `index.html` und fügen Sie das folgende {{HTMLElement("script")}} nach dem Skript, um `app.js` einzuschließen und vor dem schließenden `</body>`-Tag hinzu.

```html
<!-- Register the app's service worker. -->
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Sie können die voll funktionsfähige [CycleTracker Menstruationsverfolgungs-Web-App](https://mdn.github.io/pwa-examples/cycletracker/service_workers/) ausprobieren und den [Quellcode der Web-App](https://github.com/mdn/pwa-examples/tree/main/cycletracker/service_workers) auf GitHub einsehen. Ja, es funktioniert, und ist jetzt offiziell eine PWA!

## Debugging von Service Workern

Aufgrund der Art und Weise, wie wir den Service Worker eingerichtet haben, wird jede Anfrage, sobald er registriert ist, aus dem Cache abgerufen, anstatt neuen Inhalt zu laden. Beim Entwickeln werden Sie Ihren Code häufig bearbeiten. Sie möchten wahrscheinlich Ihre Änderungen regelmäßig im Browser testen; wahrscheinlich bei jedem Speichern.

### Durch Aktualisieren der Versionsnummer und einen harten Reset

Um einen neuen Cache zu erhalten, können Sie die [Versionsnummer](#versionsnummer) ändern und dann einen harten Browser-Refresh durchführen. Die Methode zum harten Refresh hängt vom Browser und Betriebssystem ab:

- Unter Windows: Strg+F5, Umschalt+F5 oder Strg+Umschalt+R.
- Auf MacOS: Umschalt+Befehl+R.
- Safari auf MacOS: Option+Befehl+E, um den Cache zu leeren, dann Option+Befehl+R.
- Auf Mobilgeräten: Gehen Sie zu den Browsereinstellungen (Android) oder Betriebssystemeinstellungen (Samsung, iOS), unter erweiterte Einstellungen finden Sie die Browser (iOS) oder Website-Daten (Android, Samsung), und löschen Sie die Daten für CycleTracker, bevor Sie die Seite neu laden.

### Mit Entwicklerwerkzeugen

Wahrscheinlich möchten Sie die Versionsnummer nicht bei jedem Speichern aktualisieren. Bis Sie bereit sind, eine neue Version Ihrer PWA in die Produktion einzuführen und jedem eine neue Version Ihrer PWA zur Verfügung zu stellen, anstatt die Versionsnummer bei jedem Speichern zu ändern, können Sie den Service Worker abmelden.

Sie können einen Service Worker abmelden, indem Sie in den [Entwicklerwerkzeugen des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) auf die Schaltfläche `unregister` klicken. Ein hartes Neuladen der Seite wird den Service Worker erneut registrieren und einen neuen Cache erstellen.

![Firefox-Entwicklungertools Anwendungs-Panel mit einem gestoppten Service Worker und einer Abmelde-Schaltfläche](firefox_sw.jpg)

In einigen Entwicklerwerkzeugen können Sie einen Service Worker manuell abmelden oder Sie können die Option "Update bei Neuladen" für die Service Worker auswählen, die die Entwicklerwerkzeuge so einstellen, dass der Service Worker bei jedem Neuladen zurückgesetzt und erneut aktiviert wird, solange die Entwicklerwerkzeuge geöffnet sind. Es gibt auch eine Option, um den Service Worker zu umgehen und Ressourcen aus dem Netzwerk zu laden. Dieses Panel enthält Funktionen, die wir in diesem Tutorial nicht behandeln, aber nützlich sein werden, wenn Sie fortgeschrittenere PWAs erstellen, die [Synchronisierung](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#periodic_background_sync) und [Push](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#push) enthalten, die beide im [Offline- und Hintergrundbetriebs-Leitfaden](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) behandelt werden.

![Edge-Entwicklungertools zeigt das Anwendungs-Panel mit einem Service Worker](edge_sw.jpg)

Das Fenster des Service Workers im Anwendungs-Panel der DevTools bietet einen Link, um ein Popup-Fenster zu öffnen, das eine Liste aller registrierten Service Worker für den Browser enthält; nicht nur den Service Worker für die im aktuellen Tab geöffnete Anwendung. Jede Service Worker-Liste von Workern hat Schaltflächen zum Stoppen, Starten oder Abmelden dieses individuellen Service Workers.

![Zwei Service Worker existieren auf localhost:8080. Sie können aus der Liste der Service Worker abgemeldet werden](edge_sw_list.jpg)

Mit anderen Worten, während Sie an Ihrer PWA arbeiten, müssen Sie die Versionsnummer nicht für jede App-Ansicht aktualisieren. Aber denken Sie daran, wenn Sie mit all Ihren Änderungen fertig sind, aktualisieren Sie den VALUE-Wert des Service Workers vor der Verteilung der aktualisierten Version Ihrer PWA. Wenn Sie es vergessen, werden niemand, der Ihre App bereits installiert hat oder sogar Ihre Online-PWA ohne Installation besucht hat, Ihre Änderungen jemals sehen!

## Wir sind fertig!

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und die progressiv verbessert wird, um offline zu funktionieren. Wir haben eine voll funktionsfähige Webanwendung erstellt. Anschließend haben wir die beiden Funktionen - eine Manifestdatei und einen Service Worker - hinzugefügt, die erforderlich sind, um sie in eine PWA umzuwandeln. Wenn Sie Ihre App mit anderen teilen möchten, machen Sie sie über eine sichere Verbindung verfügbar. Alternativ, wenn Sie den Zyklus-Tracker nur selbst verwenden möchten, [erstellen Sie eine lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), [installieren Sie die PWA](/de/docs/Web/Progressive_web_apps/Guides/Installing), und genießen Sie es! Nach der Installation müssen Sie localhost nicht mehr ausführen.

Herzlichen Glückwunsch!

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
