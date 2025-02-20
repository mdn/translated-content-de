---
title: "CycleTracker: Service Worker"
short-title: Service Worker
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers
l10n:
  sourceCommit: 5dc85adc81be4e4164c5e5df147509117eed2ea5
---

{{PWASidebar}}

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Bisher haben wir das HTML, CSS und JavaScript für CycleTracker geschrieben. Wir haben eine Manifestdatei hinzugefügt, die Farben, Symbole, URL und andere App-Funktionen definiert. Wir haben eine funktionierende PWA! Aber sie funktioniert offline noch nicht. In diesem Abschnitt schreiben wir das JavaScript, das erforderlich ist, um unsere voll funktionsfähige Webanwendung in eine PWA zu konvertieren, die als eigenständige App verteilt werden kann und nahtlos offline funktioniert.

Falls Sie dies noch nicht getan haben, kopieren Sie die [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/index.html), [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/style.css), [JavaScript](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/app.js), und die [Manifest](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/cycletracker.json)-JSON-Datei. Speichern Sie diese Dateien unter den Namen `index.html`, `style.css`, `app.js` und `cycletracker.json`.

In diesem Abschnitt erstellen wir `sw.js`, eine Service-Worker-Skriptdatei, die unsere Web-App in eine PWA umwandelt. Wir haben bereits eine JavaScript-Datei; die letzte Zeile in der HTML-Datei ruft `app.js` auf. Dieses JavaScript bietet die Funktionalität für die Standard-Webanwendungsfunktionen. Anstatt die Datei `sw.js` wie bei `app.js` mit dem `src`-Attribut von {{HTMLElement("script")}} aufzurufen, erstellen wir eine Verbindung zwischen der Web-App und ihrem Service-Worker, indem wir den Service-Worker registrieren.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige PWA – eine schrittweise verbesserte Webanwendung, die vollständig installierbar ist und auch offline funktioniert.

## Verantwortlichkeiten des Service Workers

Der Service-Worker sorgt dafür, dass die Anwendung offline funktioniert und stets auf dem neuesten Stand ist. Um dies effizient zu ermöglichen, sollte der Service-Worker Folgendes beinhalten:

- Versionsnummer (oder eine andere Kennung).
- Liste der zu cachenden Ressourcen.
- Namen der Cache-Version.

Der Service-Worker ist außerdem verantwortlich für:

- Installation des Caches, wenn die App installiert wird.
- Aktualisierung von sich selbst und anderen Anwendungsdateien nach Bedarf.
- Entfernen zwischengespeicherter Dateien, die nicht mehr verwendet werden.

Diese Aufgaben erreichen wir durch Reaktionen auf drei Service-Worker-Ereignisse:

- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event),
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) und
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event).

### Versionsnummer

Nachdem die PWA auf dem Gerät des Nutzers installiert ist, kann der Browser nur dann erkennen, dass aktualisierte Dateien abgerufen werden müssen, wenn es eine Änderung am Service-Worker gibt. Änderungen an anderen Ressourcen der PWA – z. B. aktualisiertes HTML, behobene Fehler in CSS, Hinzufügung einer Funktion in `app.js`, komprimierte Bilder zur Reduzierung der Dateigröße usw. – werden vom Service-Worker der installierten PWA nicht erkannt. Nur eine Änderung am Service-Worker signalisiert der PWA, dass es an der Zeit sein könnte, den Cache zu aktualisieren. Dies ist die Aufgabe des Service-Workers.

Obwohl eine Änderung jedes einzelnen Zeichens technisch ausreicht, ist es Best Practice, eine fortlaufende Versionsnummer als Konstante zu erstellen, die bei jeder Aktualisierung der Datei geändert wird. Das Aktualisieren einer Versionsnummer (oder eines Datums) sorgt auch dann für eine offizielle Bearbeitung des Service-Workers, wenn sonst nichts daran geändert wurde, und stellt für Entwickler eine Möglichkeit dar, App-Versionen zu identifizieren.

#### Aufgabe

Starten Sie eine JavaScript-Datei, indem Sie eine Versionsnummer angeben:

```js
const VERSION = "v1";
```

Speichern Sie die Datei unter dem Namen `sw.js`.

### Offline-Ressourcenliste

Für eine gute Offline-Erfahrung sollte die Liste der gecachten Dateien alle Ressourcen enthalten, die in der Offline-Erfahrung der PWA verwendet werden. Während in der Manifestdatei viele Symbole in verschiedenen Größen aufgelistet sein könnten, muss der Anwendungscache nur die Ressourcen enthalten, die von der App im Offline-Modus verwendet werden.

```js
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon-512x512.png",
];
```

Sie müssen nicht alle verschiedenen Symbole in die Liste aufnehmen, die für verschiedene Betriebssysteme und Geräte verwendet werden. Fügen Sie jedoch alle Bilder hinzu, die innerhalb der App verwendet werden, einschließlich Ressourcen für etwaige Splash-Seiten, die angezeigt werden könnten, wenn die App langsam lädt, oder Seiten, die anzeigen, dass eine Internetverbindung für das volle Benutzererlebnis benötigt wird.

Nehmen Sie die Service-Worker-Datei nicht in die Liste der zu cachenden Ressourcen auf.

#### Aufgabe

Fügen Sie die Liste der für die CycleTracker-PWA zu cachenden Ressourcen in `sw.js` hinzu.

#### Beispiel-Lösung

Wir haben die statischen Ressourcen einbezogen, die in anderen Abschnitten dieses Tutorials erstellt wurden und die CycleTracker benötigt, um offline zu funktionieren. Unsere aktuelle `sw.js`-Datei sieht so aus:

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

Wir haben das Symbol `wheel.svg` hinzugefügt, obwohl es derzeit von unserer Anwendung nicht verwendet wird, falls Sie die Benutzeroberfläche der PWA verbessern möchten, z. B. indem Sie das Logo anzeigen, wenn keine Periodendaten vorhanden sind.

### Name des Anwendungscaches

Wir haben eine Versionsnummer und die Dateien, die gecacht werden müssen. Bevor wir die Dateien cachen, müssen wir einen Namen für den Cache erstellen, der verwendet wird, um die statischen Ressourcen der App zu speichern. Dieser Cache-Name sollte versioniert sein, um sicherzustellen, dass bei einer Aktualisierung der App ein neuer Cache erstellt und der alte gelöscht wird.

#### Aufgabe

Verwenden Sie die `VERSION`-Nummer, um einen versionierten `CACHE_NAME` zu erstellen und fügen Sie ihn als Konstante in `sw.js` hinzu.

#### Beispiel-Lösung

Wir nennen unseren Cache `period-tracker-` mit der aktuellen `VERSION` angehängt. Die Konstante wird in einer Zeile deklariert. Wir stellen sie vor das Array der Ressourcen-Konstanten für bessere Lesbarkeit.

```js
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [ ... ];
```

Wir haben erfolgreich unsere Konstanten deklariert: eine eindeutige Kennung, die Liste der Offline-Ressourcen als Array und den Cache-Namen der Anwendung, der sich jedes Mal ändert, wenn die Kennung aktualisiert wird. Jetzt konzentrieren wir uns auf die Installation, Aktualisierung und Löschung nicht verwendeter gecachter Ressourcen.

### Speichern des Caches bei Installation der PWA

Wenn ein Nutzer eine Website mit einem Service-Worker installiert oder besucht, wird ein `install`-Ereignis im Geltungsbereich des Service-Workers ausgelöst. Wir möchten auf dieses Ereignis hören, um den Cache mit den statischen Ressourcen der PWA während der Installation zu füllen. Jedes Mal, wenn die Service-Worker-Version aktualisiert wird, installiert der Browser den neuen Service-Worker und das Installations-Ereignis tritt ein.

Das `install`-Ereignis tritt auf, wenn die App zum ersten Mal verwendet wird oder wenn der Browser eine neue Service-Worker-Version erkennt. Wenn ein älterer Service-Worker durch einen neuen ersetzt wird, bleibt der alte Service-Worker als Service-Worker der PWA aktiv, bis der neue aktiviert wird.

Nur in sicheren Kontexten verfügbar, liefert die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft ein [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt, das mit dem aktuellen Kontext verknüpft ist. Die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open) gibt ein {{jsxref("Promise")}} zurück, das sich zu einem [`Cache`](/de/docs/Web/API/Cache)-Objekt auflöst, dessen Name als Parameter übergeben wird.

Die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) akzeptiert ein Array von URLs als Parameter, ruft sie ab und fügt die Antworten zum angegebenen Cache hinzu. Die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) weist den Browser an, dass Arbeit ausgeführt wird, bis das dazugehörige Versprechen aufgelöst ist. Der Browser sollte den Service-Worker nicht beenden, solange diese Arbeit noch ausgeführt wird.

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

Fügen Sie ein Installations-Ereignislistener hinzu, der die in `APP_STATIC_RESOURCES` aufgeführten Dateien in den Cache mit dem Namen `CACHE_NAME` speichert.

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

### Aktualisierung der PWA und Löschen alter Caches

Wie bereits erwähnt, bleibt ein vorhandener Service-Worker aktiv, bis ein neuer durch das `activate`-Ereignis aktiviert wird. Wir nutzen das `activate`-Ereignis, um alte Caches zu löschen und Speicherplatz zu sparen. Wir iterieren durch benannte [`Cache`](/de/docs/Web/API/Cache)-Objekte, löschen alle außer dem aktuellen und setzen den Service-Worker als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für die PWA.

Wir hören auf das globale Geltungsbereichstereignis [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) des aktuellen Service-Workers.

Wir erhalten die Namen der bestehenden benannten Caches. Mit der Methode [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys) (aufgerufen über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft) liefern wir ein {{jsxref("Promise")}}, das sich zu einem Array von Strings auflöst, die allen benannten [`Cache`](/de/docs/Web/API/Cache)-Objekten in der Reihenfolge ihrer Erstellung entsprechen.

Mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) iterieren wir durch diese Liste von Cache-Benennungens-Promises. Für jeden Namen prüfen wir, ob der Cache der aktuell aktive ist. Falls nicht, löschen wir ihn mithilfe der Methode [`delete()`](/de/docs/Web/API/Cache/delete).

Die letzte Zeile, `await clients.claim()`, verwendet die Methode [`claim()`](/de/docs/Web/API/Clients/claim) des Interface [`Clients`](/de/docs/Web/API/Clients). Dies ermöglicht es dem Service-Worker, sich als Controller für die Client-Instanz festzulegen. "Client" bezieht sich auf eine laufende Instanz der PWA. Dadurch können Clients im selben Geltungsbereich geladen werden, ohne neu geladen werden zu müssen.

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

Fügen Sie den oben gezeigten `activate`-Ereignislistener in Ihre Datei `sw.js` hinzu.

### Das Fetch-Ereignis

Wir können das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignis nutzen, um zu verhindern, dass eine installierte PWA Anfragen stellt, wenn der Nutzer offline ist. Das Lauschen des Fetch-Ereignisses ermöglicht es, alle Anfragen abzufangen und mit zwischengespeicherten Antworten zu antworten, anstatt auf das Netzwerk zuzugreifen. Die meisten Anwendungen benötigen dieses Verhalten nicht. Tatsächlich möchten viele Geschäftsmodelle, dass Nutzer regelmäßig Serveranfragen stellen, um Tracking und Marketing zu ermöglichen. Für die Verbesserung der Privatsphäre unserer CycleTracker-App möchten wir jedoch vermeiden, dass die App unnötige Serveranfragen stellt.

Da unsere PWA nur aus einer Seite besteht, leiten wir bei Seitennavigationsanfragen zurück zur `index.html`-Startseite. Es gibt keine weiteren Seiten, und wir möchten niemals auf den Server zugreifen. Wenn die readonly [`mode`](/de/docs/Web/API/Request/mode)-Eigenschaft der Fetch-API's [`Request`](/de/docs/Web/API/Request) den Wert `navigate` hat, bedeutet dies, dass eine Webseite gesucht wird. Wir nutzen die Methode [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) des Fetch-Ereignisses, um das Standard-Fetch-Handling des Browsers zu verhindern und unsere eigene Antwort als Promise bereitzustellen. Hierbei verwenden wir die Methode [`caches.match()`](/de/docs/Web/API/CacheStorage/match).

Bei allen anderen Request-Modi öffnen wir den Cache wie beim [Installationsereignis](#speichern_des_caches_bei_installation_der_pwa). Wir übergeben die Anfrage des Ereignisses an dieselbe `match()`-Methode. Diese prüft, ob die Anfrage ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Falls ja, wird die zwischengespeicherte Antwort zurückgegeben. Falls nein, geben wir eine [404-Statusantwort](/de/docs/Web/HTTP/Status/404) zurück.

Mit dem Konstruktor [`Response()`](/de/docs/Web/API/Response/Response), bei dem ein `null`-Body und die Option `status: 404` bereitgestellt werden, wird nicht angezeigt, dass ein Fehler in unserer PWA vorliegt. Vielmehr sollte bereits alles, was wir benötigen, im Cache vorhanden sein. Falls nicht, greift der Server nicht ein, um dieses Problem zu lösen.

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

## Vollständige Service-Worker-Datei

Ihre Datei `sw.js` sollte wie folgt aussehen. Beachten Sie, dass beim Aktualisieren einer der in der `APP_STATIC_RESOURCES`-Liste aufgeführten Ressourcen nur die Konstante oder Funktion `VERSION` innerhalb dieses Service-Workers aktualisiert werden muss.

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

Bei der Aktualisierung eines Service-Workers muss die `VERSION`-Konstante nicht aktualisiert werden, da jede Änderung des Inhalts des Service-Worker-Skripts selbst den Browser dazu veranlasst, den neuen Service-Worker zu installieren. Dennoch ist es eine gute Praxis, die Versionsnummer zu aktualisieren. Dies erleichtert Entwicklern, einschließlich Ihnen selbst, das Erkennen der aktuell im Browser ausgeführten Service-Worker-Version, beispielsweise durch [Prüfung des Cache-Namens im Anwendungstool](#mit_entwicklertools) (oder im "Source"-Tool).

> [!NOTE]
> Das Aktualisieren der `VERSION` ist wichtig, wenn Änderungen an Anwendungsressourcen vorgenommen werden, einschließlich CSS, HTML und JS-Code sowie Bildressourcen. Die Versionsnummer oder jede Änderung der Service-Worker-Datei ist die einzige Möglichkeit, für Ihre Nutzer ein App-Update zu erzwingen.

## Registrierung des Service-Workers

Nachdem unser Service-Worker-Skript abgeschlossen ist, müssen wir den Service-Worker registrieren.

Zuerst prüfen wir, ob der Browser die [Service Worker API](/de/docs/Web/API/Service_Worker_API) unterstützt, indem wir eine [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#the_concept_of_feature_detection) für das Vorhandensein der [`serviceWorker`](/de/docs/Web/API/ServiceWorker)-Eigenschaft im globalen [`navigator`](/de/docs/Web/API/Navigator)-Objekt durchführen:

```html
<script>
  // Does "serviceWorker" exist
  if ("serviceWorker" in navigator) {
    // If yes, we register the service worker
  }
</script>
```

Wenn die Eigenschaft unterstützt wird, können wir die Methode [`register()`](/de/docs/Web/API/ServiceWorkerContainer/register) des Interfaces [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) der Service-Worker-API nutzen.

```html
<script>
  if ("serviceWorker" in navigator) {
    // Register the app's service worker
    // Passing the filename where that worker is defined.
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Während das oben Gezeigte für die Anforderungen der CycleTracker-App ausreicht, gibt die Methode `register()` ein {{jsxref("Promise")}} zurück, das sich in ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt auflöst. Für eine robustere Anwendung sollten Sie die Registrierung auf Fehler überprüfen:

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

Öffnen Sie `index.html` und fügen Sie das folgende {{HTMLElement("script")}} nach dem Skript zum Inkludieren von `app.js` und vor dem schließenden `</body>`-Tag hinzu.

```html
<!-- Register the app's service worker. -->
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Sie können die voll funktionsfähige [CycleTracker-Zyklus-Tracking-Web-App](https://mdn.github.io/pwa-examples/cycletracker/service_workers/) ausprobieren und den [Quellcode der Web-App](https://github.com/mdn/pwa-examples/tree/main/cycletracker/service_workers) auf GitHub einsehen. Ja, es funktioniert, und es ist nun offiziell eine PWA!

## Fehlerbehebung für Service-Worker

Da der Service-Worker so eingerichtet ist, dass nach der Registrierung jede Anfrage aus dem Cache beantwortet wird, anstatt neue Inhalte zu laden, möchten Sie beim Entwickeln sicherstellen, Ihre Änderungen regelmäßig im Browser zu testen – wahrscheinlich nach jedem Speichern.

### Durch Aktualisieren der Versionsnummer und einen Hard-Reset

Um einen neuen Cache zu erhalten, können Sie die [Versionsnummer](#versionsnummer) ändern und dann einen Hard-Reload des Browsers durchführen. Die Art und Weise, wie ein Hard-Reload durchgeführt wird, hängt vom Browser und Betriebssystem ab:

- Unter Windows: Strg+F5, Umschalttaste+F5 oder Strg+Umschalt+R.
- Unter macOS: Umschalttaste+Command+R.
- Safari unter macOS: Wahltaste+Command+E, um den Cache zu leeren, und dann Wahltaste+Command+R.
- Auf Mobilgeräten: Gehen Sie zu den Browsereinstellungen (Android) oder den Betriebssystemeinstellungen (Samsung, iOS), suchen Sie unter erweitertem Setting den Browser (iOS) oder die Website-Daten (Android, Samsung) und löschen Sie die Daten für CycleTracker, bevor Sie die Seite neu laden.

### Mit Entwicklertools

Möglicherweise möchten Sie nicht bei jedem Speichern eine Versionsnummer aktualisieren. Bis Sie bereit sind, eine neue PWA-Version zu veröffentlichen, können Sie den Service-Worker anstatt der Änderung der Versionsnummer abmelden.

Sie können einen Service-Worker abmelden, indem Sie in den [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) auf die Schaltfläche `unregister` klicken. Ein Hard-Reload der Seite registriert den Service-Worker erneut und erstellt einen neuen Cache.

![Firefox-Entwicklertools Anwendungsfeld mit gestopptem Service-Worker und einer "Abmelden"-Schaltfläche](firefox_sw.jpg)

In einigen Entwicklertools können Sie einen Service-Worker manuell abmelden oder die Option auswählen, dass "Service-Worker bei erneutem Laden aktualisiert" werden. So wird der Service-Worker bei jedem Laden der Seite zurückgesetzt und wieder aktiviert, solange die Entwicklertools geöffnet sind. Es gibt auch eine Option, den Service-Worker zu umgehen und direkt auf Netzwerkressourcen zuzugreifen. Dieses Panel enthält Funktionen, die wir in diesem Tutorial nicht abdecken, die jedoch hilfreich sein werden, wenn Sie fortgeschrittenere PWAs erstellen – z. B. mit [Synchronisierung](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#periodic_background_sync) oder [Push-Benachrichtigungen](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#push) –, die beide im [Leitfaden zur Offline- und Hintergrundoperation](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) behandelt werden.

![Edge-Entwicklertools, Anwendungsfeld mit einem Service-Worker](edge_sw.jpg)

Das Service-Worker-Fenster im Tool-Panel "Anwendung" bietet einen Link zu einem Popup-Fenster mit einer Liste aller registrierten Service-Worker für den Browser, nicht nur für die Anwendung im aktuellen Tab. Jeder Service-Worker listet Steuerelemente zum Stoppen, Starten oder Abmelden eines spezifischen Service-Workers auf.

![Zwei Service-Worker existieren unter localhost:8080. Sie können aus der Liste der Service-Worker abgemeldet werden](edge_sw_list.jpg)

Mit anderen Worten: Sie müssen nicht bei jedem Aufruf Ihrer PWA die Versionsnummer aktualisieren. Beachten Sie jedoch: Wenn Sie mit allen Änderungen fertig sind, aktualisieren Sie den `VERSION`-Wert, bevor Sie die aktualisierte Version Ihrer PWA verteilen. Falls Sie dies vergessen, wird niemand, der Ihre App bereits installiert hat oder einfach Ihre Online-PWA besucht hat, jemals Ihre Änderungen sehen!

## Wir sind fertig!

Im Grunde ist eine PWA eine Webanwendung, die installiert werden kann und schrittweise verbessert wurde, um offline zu arbeiten. Wir haben eine funktionsfähige Webanwendung erstellt und dann die zwei Funktionen – eine Manifestdatei und einen Service-Worker – hinzugefügt, die erforderlich sind, um sie in eine PWA umzuwandeln. Wenn Sie Ihre App mit anderen teilen möchten, stellen Sie sie über eine sichere Verbindung bereit. Wenn Sie den CycleTracker nur selbst verwenden möchten, [richten Sie eine lokale Entwicklungsumgebung ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), [installieren Sie die PWA](/de/docs/Web/Progressive_web_apps/Guides/Installing) und genießen Sie die App! Nach der Installation müssen Sie localhost nicht mehr ausführen.

Herzlichen Glückwunsch!

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
