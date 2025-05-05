---
title: "CycleTracker: Service Workers"
short-title: Offline-Unterstützung mit Service Workers
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Bisher haben wir das HTML, CSS und JavaScript für CycleTracker erstellt. Wir haben eine Manifestdatei hinzugefügt, die Farben, Symbole, URL und andere App-Funktionen definiert. Wir haben eine funktionierende PWA! Aber sie funktioniert noch nicht offline. In diesem Abschnitt werden wir das JavaScript schreiben, das erforderlich ist, um unsere voll funktionsfähige Webanwendung in eine PWA zu verwandeln, die als eigenständige App verteilt werden kann und nahtlos offline funktioniert.

Falls Sie dies noch nicht getan haben, kopieren Sie die [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/index.html), [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/style.css), [JavaScript](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/app.js) und [Manifest](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/cycletracker.json) JSON-Datei. Speichern Sie sie in Dateien mit den Namen `index.html`, `style.css`, `app.js` und `cycletracker.json`.

In diesem Abschnitt erstellen wir `sw.js`, das Service Worker-Skript, das unsere Web-App in eine PWA umwandelt. Wir haben bereits eine JavaScript-Datei; die letzte Zeile in der HTML-Datei ruft die `app.js` auf. Dieses JavaScript bietet alle Funktionen für die Standard-Webanwendungsfunktionen. Statt die Datei `sw.js` wie die `app.js` Datei mit dem `src`-Attribut des {{HTMLElement("script")}} aufzurufen, erstellen wir eine Beziehung zwischen der Web-App und ihrem Service Worker, indem wir den Service Worker registrieren.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige PWA; eine progressiv erweiterte Webanwendung, die vollständig installierbar ist und auch dann funktioniert, wenn der Benutzer offline ist.

## Verantwortlichkeiten des Service Workers

Der Service Worker sorgt dafür, dass die Anwendung offline funktioniert, während er sicherstellt, dass die Anwendung immer auf dem neuesten Stand ist. Um dies gut zu machen, sollte der Service Worker Folgendes enthalten:

- Versionsnummer (oder einen anderen Identifikator).
- Liste der zu speichernden Ressourcen.
- Cache-Version Name.

Der Service Worker ist auch verantwortlich für:

- Installation des Caches, wenn die App installiert wird.
- Aktualisierung von sich selbst und den anderen Anwendungsdateien nach Bedarf.
- Entfernen von gecachten Dateien, die nicht mehr verwendet werden.

Diese Aufgaben erreichen wir, indem wir auf drei Service Worker-Ereignisse reagieren, darunter die

- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event),
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) und
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignisse.

### Versionsnummer

Sobald die PWA auf dem Gerät des Benutzers installiert ist, ist die einzige Möglichkeit, dem Browser mitzuteilen, dass aktualisierte Dateien abzurufen sind, wenn sich der Service Worker ändert. Wenn eine andere PWA-Ressource geändert wird – wenn das HTML aktualisiert wird, ein Fehler im CSS behoben wird, eine Funktion in `app.js` hinzugefügt wird, ein Bild komprimiert wird, um die Dateigröße zu reduzieren usw. – wird der Service Worker Ihrer installierten PWA nicht wissen, dass er aktualisierte Ressourcen herunterladen muss. Nur wenn der Service Worker in irgendeiner Weise geändert wird, weiß die PWA, dass es Zeit sein könnte, den Cache zu aktualisieren, was die Aufgabe des Service Workers ist, einzuleiten.

Obwohl das Ändern eines beliebigen Zeichens technisch ausreichen kann, ist eine PWA-Best Practice, eine konstante Versionsnummer zu erstellen, die sequentiell aktualisiert wird, um eine Aktualisierung der Datei anzuzeigen. Das Aktualisieren einer Versionsnummer (oder eines Datums) stellt eine offizielle Bearbeitung des Service Workers dar, auch wenn sonst nichts im Service Worker geändert wird, und bietet Entwicklern eine Möglichkeit, App-Versionen zu identifizieren.

#### Aufgabe

Starten Sie eine JavaScript-Datei, indem Sie eine Versionsnummer einfügen:

```js
const VERSION = "v1";
```

Speichern Sie die Datei als `sw.js`

### Offline-Ressourcenliste

Für eine gute Offline-Erfahrung sollte die Liste der gecachten Dateien alle innerhalb der Offline-Erfahrung der PWA verwendeten Ressourcen enthalten. Während die Manifestdatei möglicherweise eine Vielzahl von Symbolen in verschiedenen Größen auflistet, muss der Anwendungscache nur die in der App im Offline-Modus verwendeten Ressourcen enthalten.

```js
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon-512x512.png",
];
```

Sie müssen die verschiedenen Symbole, die von allen verschiedenen Betriebssystemen und Geräten verwendet werden, nicht in die Liste aufnehmen. Aber fügen Sie Bilder hinzu, die innerhalb der App verwendet werden, einschließlich der Ressourcen, die auf allen Splash-Seiten sichtbar sind, wenn die App langsam lädt oder auf Seiten verwendet werden, die "Sie müssen sich mit dem Internet verbinden, um die vollständige Erfahrung zu nutzen".

Schließen Sie die Service Worker-Datei nicht in die Liste der zu cachenden Ressourcen ein.

#### Aufgabe

Fügen Sie die Liste der zu cachenden Ressourcen für die CycleTracker PWA in `sw.js` hinzu.

#### Beispiel-Lösung

Wir fügen die statischen Ressourcen ein, die in anderen Abschnitten dieses Tutorials erstellt wurden und die der CycleTracker benötigt, um offline funktionsfähig zu sein. Unsere aktuelle `sw.js` Datei ist:

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

Wir haben das Symbol `wheel.svg` hinzugefügt, obwohl unsere aktuelle Anwendung es nicht verwendet, falls Sie die PWA UI erweitern möchten, z. B. indem das Logo angezeigt wird, wenn keine Periodendaten verfügbar sind.

### Name des Anwendungscaches

Wir haben eine Versionsnummer und die Dateien, die gecacht werden müssen. Bevor die Dateien gecacht werden, müssen wir einen Namen für den Cache erstellen, der zur Speicherung der statischen Ressourcen der App verwendet wird. Dieser Cachenname sollte versioniert werden, um sicherzustellen, dass, wenn die App aktualisiert wird, ein neuer Cache erstellt wird und der alte gelöscht wird.

#### Aufgabe

Verwenden Sie die `VERSION` Nummer, um einen versionierten `CACHE_NAME` zu erstellen, und fügen Sie ihn als Konstante zu `sw.js` hinzu.

#### Beispiel-Lösung

Wir benennen unseren Cache `period-tracker-` mit der aktuellen `VERSION` angehängt. Da die Konstanterklärung in einer einzigen Zeile erfolgt, setzen wir sie vor das Array der Ressourcen-Konstante für eine bessere Lesbarkeit.

```js
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [
  // …
];
```

Wir haben erfolgreich unsere Konstanten deklariert; ein eindeutiger Identifikator, die Liste der Offline-Ressourcen als Array und den Cache-Namen der Anwendung, der sich jedes Mal ändert, wenn der Identifikator aktualisiert wird. Konzentrieren wir uns nun darauf, veraltete gecachte Ressourcen zu installieren, zu aktualisieren und zu löschen.

### Speichern des Caches bei der PWA-Installation

Wenn ein Benutzer eine Website mit einem Service Worker installiert oder einfach besucht, wird ein `install`-Ereignis im Scope des Service Workers ausgelöst. Wir möchten auf dieses Ereignis hören und den Cache mit den statischen Ressourcen der PWA füllen, sobald er installiert ist. Jedes Mal, wenn die Version des Service Workers aktualisiert wird, installiert der Browser den neuen Service Worker und das Installationsereignis tritt auf.

Das `install`-Ereignis tritt auf, wenn die App zum ersten Mal verwendet wird oder wenn eine neue Version des Service Workers vom Browser erkannt wird. Wenn ein älterer Service Worker durch einen neuen ersetzt wird, wird der alte Service Worker als Service Worker der PWA verwendet, bis der neue Service Worker aktiviert wird.

Nur in sicheren Kontexten verfügbar, gibt die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft ein [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das dem aktuellen Kontext zugeordnet ist. Die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open) gibt ein {{jsxref("Promise")}} zurück, das sich zum [`Cache`](/de/docs/Web/API/Cache)-Objekt auflöst, das mit dem Namen des Caches übereinstimmt, das als Parameter übergeben wird.

Die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) nimmt ein Array von URLs als Parameter, ruft sie ab und fügt dann die Antworten zum gegebenen Cache hinzu. Die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) teilt dem Browser mit, dass Arbeiten im Gange sind, bis das Versprechen erfüllt ist, und er sollte den Service Worker nicht beenden, wenn er möchte, dass die Arbeit abgeschlossen wird. Während die Browser dafür verantwortlich sind, Service Workers bei Bedarf auszuführen und zu beenden, ist die Methode `waitUntil` eine Anfrage an den Browser, den Service Worker während der Ausführung einer Aufgabe nicht zu beenden.

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

Fügen Sie einen Installations-Event Listener hinzu, der die in `APP_STATIC_RESOURCES` aufgelisteten Dateien abruft und im Cache mit dem Namen `CACHE_NAME` speichert.

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

### Aktualisieren der PWA und Löschen alter Caches

Wie bereits erwähnt, wird der bestehende Service Worker, wenn er durch einen neuen ersetzt wird, als Service Worker der PWA verwendet, bis der neue Service Worker aktiviert wird. Wir nutzen das `activate`-Ereignis, um alte Caches zu löschen, um zu vermeiden, dass uns der Speicherplatz ausgeht. Wir durchlaufen benannte [`Cache`](/de/docs/Web/API/Cache)-Objekte, löschen alle außer dem aktuellen und setzen dann den Service Worker als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für die PWA.

Wir hören auf das [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignis des globalen Scopes des aktuellen Service Workers.

Wir erhalten die Namen der vorhandenen benannten Caches. Wir verwenden die Methode [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys) (wobei wieder auf `CacheStorage` durch die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft zugegriffen wird), welche ein {{jsxref("Promise")}} zurückgibt, das mit einem Array von Zeichenfolgen übereinstimmt, die alle benannten [`Cache`](/de/docs/Web/API/Cache)-Objekte in der Reihenfolge ihrer Erstellung enthalten.

Wir verwenden die Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um diese Liste der Namens-Cache-Versprechen zu durchlaufen. Die Methode `all()` nimmt als Eingabe eine Liste von iterablen Versprechen und gibt ein einzelnes `Promise` zurück. Für jeden Namen in der Liste der benannten Caches überprüfen wir, ob der Cache der aktuell aktive ist. Wenn nicht, löschen wir ihn mit der Methode `Cache` [`delete()`](/de/docs/Web/API/Cache/delete).

Die letzte Zeile, `await clients.claim()`, verwendet die Methode [`claim()`](/de/docs/Web/API/Clients/claim) der [`Clients`](/de/docs/Web/API/Clients) Schnittstelle, um unserem Service Worker zu ermöglichen, sich selbst als Controller für unseren Client festzulegen; der "Client" bezieht sich dabei auf eine laufende Instanz der PWA. Die Methode `claim()` ermöglicht es dem Service Worker, "Kontrolle zu übernehmen" über alle Clients innerhalb seines Scopes. Auf diese Weise müssen Clients, die im selben Scope geladen werden, nicht neu geladen werden.

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

Fügen Sie den oben genannten `activate` eventListener zu Ihrer `sw.js` Datei hinzu.

### Das fetch Ereignis

Wir können das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Ereignis nutzen, um zu verhindern, dass eine installierte PWA Anfragen stellt, wenn der Benutzer online ist. Das Lauschen auf das fetch Ereignis macht es möglich, alle Anfragen abzufangen und mit gecachten Antworten zu antworten, anstatt das Netzwerk zu nutzen. Die meisten Anwendungen erfordern dieses Verhalten nicht. Tatsächlich möchten viele Geschäftsmodelle, dass Benutzer regelmäßig Serveranfragen stellen, um Tracking und Marketingzwecke zu verfolgen. Deshalb kann das Abfangen von Anfragen für einige ein Anti-Pattern sein. Um jedoch die Privatsphäre unserer CycleTracker App zu verbessern, möchten wir nicht, dass die App unnötige Serveranfragen stellt.

Da unsere PWA aus einer einzigen Seite besteht, gehen wir bei Seitennavigationsanfragen zurück zur `index.html` Startseite. Es gibt keine anderen Seiten und wir wollen nie zum Server gehen. Wenn die [`Request`](/de/docs/Web/API/Request) der Fetch API die readonly [`mode`](/de/docs/Web/API/Request/mode) Eigenschaft `navigate` hat, was bedeutet, dass sie nach einer Webseite sucht, verwenden wir die [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) Methode des FetchEvents, um die Standard-fetch-Verarbeitung des Browsers zu verhindern und unser eigenes Antwortversprechen mit der Methode [`caches.match()`](/de/docs/Web/API/CacheStorage/match) zu bieten.

Für alle anderen Anfragearten öffnen wir die Caches, wie es bei der [Installations-Ereignis-Antwort](#speichern_des_caches_bei_der_pwa-installation) geschehen ist, und übergeben die Ereignisanfrage an die gleiche `match()` Methode. Sie überprüft, ob die Anfrage ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Wenn ja, wird die gecachte Antwort zurückgegeben. Wenn nicht, geben wir eine [404 Status](/de/docs/Web/HTTP/Reference/Status/404) als Antwort zurück.

Die Verwendung des [`Response()`](/de/docs/Web/API/Response/Response) Konstruktors, um einen `null` Körper und einen `status: 404` als Optionen zu übergeben, bedeutet nicht, dass es einen Fehler in unserer PWA gibt. Vielmehr sollte alles, was wir brauchen, bereits im Cache sein, und wenn nicht, werden wir nicht zum Server gehen, um dieses Nicht-Problem zu lösen.

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

Ihre `sw.js` Datei sollte ähnlich dem folgenden JavaScript aussehen. Beachten Sie, dass beim Aktualisieren einer der in der `APP_STATIC_RESOURCES`-Liste aufgeführten Ressourcen lediglich die Konstante oder Funktion innerhalb dieses Service Workers aktualisiert werden muss, nämlich der Wert von `VERSION`.

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

Beim Aktualisieren eines Service Workers muss die Konstante VERSION nicht aktualisiert werden, da jede Änderung im Inhalt des Service Worker-Skripts selbst dazu führt, dass der Browser den neuen Service Worker installiert. Allerdings ist es eine gute Praxis, die Versionsnummer zu aktualisieren, da es Entwicklern, einschließlich Ihnen selbst, leichter macht, zu sehen, welche Version des Service Workers gerade im Browser läuft, indem Sie den Namen des Caches im [Application-Tool](#mit_entwicklerwerkzeugen) (oder Quellen-Tool) überprüfen.

> [!NOTE]
> Das Aktualisieren von VERSION ist wichtig, wenn Änderungen an einer Anwendungsressource, einschließlich des CSS-, HTML- und JS-Codes sowie Bildressourcen, vorgenommen werden. Die Versionsnummer oder jede Änderung an der Service Worker-Datei ist der einzige Weg, um ein Update der App für Ihre Benutzer zu erzwingen.

## Registrieren des Service Workers

Da unser Service Worker-Skript vollständig ist, müssen wir den Service Worker registrieren.

Wir beginnen damit, zu überprüfen, ob der Browser die [Service Worker API](/de/docs/Web/API/Service_Worker_API) unterstützt, indem wir [Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#the_concept_of_feature_detection) für das Vorhandensein der [`serviceWorker`](/de/docs/Web/API/ServiceWorker) Eigenschaft des globalen [`navigator`](/de/docs/Web/API/Navigator) Objekts verwenden:

```html
<script>
  // Does "serviceWorker" exist
  if ("serviceWorker" in navigator) {
    // If yes, we register the service worker
  }
</script>
```

Wenn die Eigenschaft unterstützt wird, können wir die [`register()`](/de/docs/Web/API/ServiceWorkerContainer/register) Methode der Service Worker API bzw. der [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Schnittstelle verwenden.

```html
<script>
  if ("serviceWorker" in navigator) {
    // Register the app's service worker
    // Passing the filename where that worker is defined.
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Während das oben Genannte für die Anforderungen der CycleTracker App ausreicht, gibt die `register()` Methode dennoch ein {{jsxref("Promise")}} zurück, das sich mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Objekt auflöst. Für eine robustere Anwendung, überprüfen Sie den Registrierungserfolg:

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

Öffnen Sie `index.html` und fügen Sie das folgende {{HTMLElement("script")}} nach dem Script zur Einbindung der `app.js` und vor dem schließenden `</body>`-Tag hinzu.

```html
<!-- Register the app's service worker. -->
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Sie können die voll funktionsfähige [CycleTracker-Menstruationsverfolgungs-Web-App](https://mdn.github.io/pwa-examples/cycletracker/service_workers/) ausprobieren und sich den [Quellcode der Web-App](https://github.com/mdn/pwa-examples/tree/main/cycletracker/service_workers) auf GitHub ansehen. Ja, es funktioniert, und es ist jetzt offiziell eine PWA!

## Debugging von Service Workers

Aufgrund der Art und Weise, wie wir den Service Worker eingerichtet haben, wird nach seiner Registrierung jede Anfrage aus dem Cache geladen, anstatt neue Inhalte zu laden. Beim Entwickeln werden Sie wahrscheinlich häufig Ihren Code bearbeiten. Sie möchten Ihre Änderungen wahrscheinlich regelmäßig im Browser testen, wahrscheinlich bei jedem Speichern.

### Durch das Aktualisieren der Versionsnummer und einem erzwungenen Zurücksetzen

Um einen neuen Cache zu erhalten, können Sie die [Versionsnummer](#versionsnummer) ändern und dann eine harte Aktualisierung im Browser durchführen. Die Art und Weise, dies zu tun, hängt vom Browser und Betriebssystem ab:

- Unter Windows: Strg+F5, Umschalt+F5 oder Strg+Umschalt+R.
- Unter macOS: Umschalt+Befehl+R.
- Safari unter macOS: Option+Befehl+E, um den Cache zu leeren, dann Option+Befehl+R.
- Auf Mobilgeräten: Gehen Sie zu den Browser- (Android) oder Betriebssystem- (Samsung, iOS) Einstellungen, unter den erweiterten Einstellungen suchen Sie den Browser (iOS) oder Website-Daten (Android, Samsung) und löschen die Daten für CycleTracker, bevor Sie die Seite neu laden.

### Mit Entwicklerwerkzeugen

Sie möchten wahrscheinlich nicht bei jedem Speichern die Versionsnummer ändern. Bis Sie bereit sind, eine neue Version Ihrer PWA zu veröffentlichen und allen eine neue Version Ihrer PWA zu geben, können Sie statt die Versionsnummer bei jedem Speichern zu ändern, den Service Worker deregistrieren.

Sie können einen Service Worker deregistrieren, indem Sie auf die Schaltfläche `unregister` in den [Entwicklerwerkzeugen des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) klicken. Ein hartes Aktualisieren der Seite wird den Service Worker erneut registrieren und einen neuen Cache erstellen.

![Firefox Entwicklerwerkzeuge Anwendungs-Panel mit einem gestoppten Service Worker und einer Schaltfläche zum Deregistrieren](firefox_sw.jpg)

In einigen Entwicklerwerkzeugen können Sie manuell einen Service Worker deregistrieren oder Sie können die Option "update on reload" für die Service Workers auswählen, wodurch die Entwicklerwerkzeuge den Service Worker bei jedem Neuladen zurücksetzen und wieder aktivieren, solange die Entwicklerwerkzeuge geöffnet sind. Es gibt auch eine Option, den Service Worker zu umgehen und Ressourcen aus dem Netzwerk zu laden. Dieses Panel enthält Funktionen, die in diesem Tutorial nicht behandelt werden, aber nützlich sind, wenn Sie fortgeschrittenere PWA's erstellen, die [Synchronisation](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#periodic_background_sync) und [Push](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#push) verwenden, was beide im [Offline- und Hintergrundbetriebsleitfaden](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) behandelt werden.

![Edge Entwicklerwerkzeuge zeigt das Anwendungs-Panel mit einem ausgewählten Service Worker](edge_sw.jpg)

Das Service Worker Fenster innerhalb des Anwendungs-Panels der DevTools bietet einen Link, um ein Popup-Fenster mit einer Liste aller registrierten Service Workers im Browser zu öffnen; nicht nur den Service Worker für die aktuell im aktuellen Tab geöffnete Anwendung. Jede Service Worker Liste der Workers hat Schaltflächen, um diesen individuellen Service Worker zu stoppen, zu starten oder zu deregistrieren.

![Zwei Service Workers existieren unter localhost:8080. Sie können aus der Liste der Service Workers deregistriert werden](edge_sw_list.jpg)

Mit anderen Worten, während Sie an Ihrer PWA arbeiten, müssen Sie nicht bei jedem App-Ansicht die Versionsnummer aktualisieren. Aber denken Sie daran, wenn Sie mit allen Änderungen fertig sind, den Wert der Service Worker VERSION zu aktualisieren, bevor Sie die aktualisierte Version Ihrer PWA verteilen. Wenn Sie es vergessen, wird niemand, der Ihre App bereits installiert hat, oder sogar online besucht hat, jemals die Änderungen sehen!

## Wir sind fertig!

Eine PWA ist im Kern eine Webanwendung, die installiert werden kann und progressiv verbessert wurde, um offline zu arbeiten. Wir haben eine voll funktionsfähige Webanwendung erstellt. Wir haben dann die beiden erforderlichen Features hinzugefügt - eine Manifestdatei und einen Service Worker - um sie in eine PWA zu verwandeln. Wenn Sie Ihre App mit anderen teilen möchten, gestalten Sie sie über eine sichere Verbindung zugänglich. Alternativ, wenn Sie den Zyklus-Tracker nur selbst verwenden möchten, [richten Sie eine lokale Entwicklungsumgebung ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), [installieren Sie die PWA](/de/docs/Web/Progressive_web_apps/Guides/Installing) und genießen Sie! Einmal installiert, müssen Sie localhost nicht mehr ausführen.

Herzlichen Glückwunsch!

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
