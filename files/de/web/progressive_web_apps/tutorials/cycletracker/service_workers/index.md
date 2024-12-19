---
title: "CycleTracker: Service Worker"
short-title: Service Worker
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{PWASidebar}}

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Bisher haben wir das HTML, CSS und JavaScript für CycleTracker geschrieben. Wir haben eine Manifestdatei hinzugefügt, die Farben, Symbole, URL und andere App-Funktionen definiert. Wir haben eine funktionierende PWA! Aber sie funktioniert noch nicht offline. In diesem Abschnitt werden wir das JavaScript schreiben, das erforderlich ist, um unsere voll funktionsfähige Webanwendung in eine PWA zu verwandeln, die als eigenständige App verteilt werden kann und nahtlos offline funktioniert.

Wenn Sie dies noch nicht getan haben, kopieren Sie die [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/index.html)-, [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/style.css)-, [JavaScript](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/app.js)- und [Manifest](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/cycletracker.json)-JSON-Datei. Speichern Sie sie als `index.html`, `style.css`, `app.js` und `cycletracker.json`.

In diesem Abschnitt erstellen wir `sw.js`, das Service-Worker-Skript, das unsere Web-App in eine PWA verwandelt. Wir haben bereits eine JavaScript-Datei; die letzte Zeile in der HTML-Datei ruft `app.js` auf. Dieses JavaScript bietet die gesamte Funktionalität für die Standard-Webanwendungsfunktionen. Anstatt die Datei `sw.js` wie die Datei `app.js` mit dem `src`-Attribut des {{HTMLElement("script")}} zu laden, erstellen wir eine Beziehung zwischen der Web-App und ihrem Service-Worker, indem wir den Service-Worker registrieren.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige PWA; eine progressiv verbesserte Webanwendung, die vollständig installierbar ist und sogar funktioniert, wenn der Benutzer offline ist.

## Aufgaben des Service Workers

Der Service Worker sorgt dafür, dass die Anwendung offline funktioniert, während er sicherstellt, dass die Anwendung immer auf dem neuesten Stand ist. Um dies gut zu machen, sollte der Service Worker folgendes beinhalten:

- Versionsnummer (oder andere Kennung).
- Liste von zu cachenden Ressourcen.
- Name der Cache-Version.

Der Service Worker ist auch verantwortlich für:

- Installation des Caches, wenn die App installiert wird.
- Aktualisierung von ihm selbst und den anderen Anwendungsdateien nach Bedarf.
- Entfernen von gecachten Dateien, die nicht mehr verwendet werden.

Wir erreichen diese Aufgaben, indem wir auf drei Service-Worker-Ereignisse reagieren, einschließlich der

- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event),
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) und
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignisse.

### Versionsnummer

Sobald die PWA auf dem Computer des Benutzers installiert ist, besteht die einzige Möglichkeit, den Browser darüber zu informieren, dass aktualisierte Dateien abgerufen werden müssen, darin, dass es eine Änderung im Service Worker gibt. Wenn eine Änderung an einer anderen PWA-Ressource vorgenommen wird — wenn das HTML aktualisiert wird, ein Bug im CSS behoben wird, eine Funktion zu `app.js` hinzugefügt wird, ein Bild komprimiert wird, um Dateigrößen zu verringern, etc. — wird der Service Worker Ihrer installierten PWA nicht wissen, dass er aktualisierte Ressourcen herunterladen muss. Nur wenn der Service Worker auf irgendeine Weise geändert wird, wird die PWA wissen, dass es Zeit sein könnte, den Cache zu aktualisieren; was die Aufgabe des Service Workers ist, einzuleiten.

Während das Ändern eines beliebigen Zeichens technisch ausreichen mag, ist es eine Best Practice für PWAs, eine konstant aktualisierte Versionsnummer zu erstellen, um eine Aktualisierung der Datei anzuzeigen. Das Aktualisieren einer Versionsnummer (oder eines Datums) bietet eine offizielle Änderung des Service Workers, auch wenn sonst nichts im Service Worker selbst geändert wird, und bietet Entwicklern eine Möglichkeit, App-Versionen zu identifizieren.

#### Aufgabe

Starten Sie eine JavaScript-Datei, indem Sie eine Versionsnummer einfügen:

```js
const VERSION = "v1";
```

Speichern Sie die Datei als `sw.js`

### Liste der Offline-Ressourcen

Für eine gute Offline-Erfahrung sollte die Liste der gecachten Dateien alle Ressourcen enthalten, die innerhalb der Offline-Erfahrung der PWA verwendet werden. Während die Manifestdatei möglicherweise eine Vielzahl von Symbolen in verschiedenen Größen auflistet, muss der Anwendungscache nur die Ressourcen enthalten, die im Offline-Modus der App verwendet werden.

```js
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon-512x512.png",
];
```

Sie müssen die verschiedenen Symbole, die von sämtlichen Betriebssystemen und Geräten verwendet werden, nicht in die Liste aufnehmen. Fügen Sie jedoch alle Bilder hinzu, die innerhalb der App verwendet werden, einschließlich Assets, die in Splash-Seiten verwendet werden können, die sichtbar sind, wenn die App langsam lädt oder in „Sie müssen sich mit dem Internet verbinden, um die vollständige Erfahrung zu erleben“-Seiten verwendet werden.

Fügen Sie die Service-Worker-Datei nicht in die Liste der zu cachenden Ressourcen ein.

#### Aufgabe

Fügen Sie die Liste der zu cachenden Ressourcen für die CycleTracker PWA zu `sw.js` hinzu.

#### Beispiel-Lösung

Wir fügen die statischen Ressourcen ein, die in anderen Abschnitten dieses Tutorials erstellt wurden und die CycleTracker benötigt, um offline zu funktionieren. Unsere aktuelle `sw.js`-Datei ist:

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

Wir haben das `wheel.svg`-Symbol hinzugefügt, auch wenn unsere aktuelle Anwendung es nicht verwendet, falls Sie die PWA-UI verbessern, z.B. um das Logo anzuzeigen, wenn keine Periodendaten vorhanden sind.

### Name des Anwendungscaches

Wir haben eine Versionsnummer und die zu cachenden Dateien. Bevor die Dateien gecacht werden, müssen wir einen Namen für den Cache erstellen, der zur Speicherung der statischen Ressourcen der App verwendet wird. Dieser Cachenname sollte mit der Version versehen werden, um sicherzustellen, dass bei einem App-Update ein neuer Cache erstellt wird und der alte gelöscht wird.

#### Aufgabe

Verwenden Sie die `VERSION`-Nummer, um einen versionierten `CACHE_NAME` zu erstellen, und fügen Sie ihn als Konstante zu `sw.js` hinzu.

#### Beispiel-Lösung

Wir benennen unseren Cache `period-tracker-` mit der aktuellen `VERSION` als Anhang. Da die Konstantendeklaration in einer einzelnen Zeile erfolgt, setzen wir sie vor das Array der Ressourcen-Konstante für eine bessere Lesbarkeit.

```js
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [ ... ];
```

Wir haben erfolgreich unsere Konstanten deklariert; eine eindeutige Kennung, die Liste der Offline-Ressourcen als Array und den Namen des Anwendungscaches, der sich jedes Mal ändert, wenn die Kennung aktualisiert wird. Konzentrieren wir uns nun auf die Installation, Aktualisierung und das Löschen nicht verwendeter gecachter Ressourcen.

### Speichern des Caches bei der PWA-Installation

Wenn ein Benutzer eine Website mit einem Service Worker installiert oder einfach nur besucht, wird ein `install`-Ereignis im Service-Worker-Bereich ausgelöst. Wir wollen auf dieses Ereignis hören und den Cache bei der Installation mit den statischen Ressourcen der PWA füllen. Jedes Mal, wenn die Version des Service Workers aktualisiert wird, installiert der Browser den neuen Service Worker und das Installationsereignis tritt auf.

Das `install`-Ereignis tritt auf, wenn die App zum ersten Mal verwendet wird oder wenn der Browser eine neue Version des Service Workers erkennt. Wenn ein älterer Service Worker durch einen neuen ersetzt wird, wird der alte Service Worker als Service Worker der PWA verwendet, bis der neue Service Worker aktiviert wird.

Nur in sicheren Kontexten verfügbar, gibt die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft ein [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Die [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open)-Methode gibt ein {{jsxref("Promise")}} zurück, das sich in das [`Cache`](/de/docs/Web/API/Cache)-Objekt auflöst, das auf den Namen des Caches verweist, der als Parameter übergeben wurde.

Die [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll)-Methode nimmt ein Array von URLs als Parameter, ruft sie ab und fügt die Antworten in den gegebenen Cache ein. Die [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode teilt dem Browser mit, dass Arbeit im Gange ist, bis das Versprechen erfüllt ist, und er den Service Worker nicht beenden sollte, wenn er möchte, dass diese Arbeit abgeschlossen wird. Obwohl Browser für die Ausführung und Beendigung von Service Workern verantwortlich sind, wenn dies erforderlich ist, ist die `waitUntil`-Methode eine Aufforderung an den Browser, den Service Worker während der Ausführung einer Aufgabe nicht zu beenden.

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

Fügen Sie einen Installations-Ereignis-Listener hinzu, der die Dateien in `APP_STATIC_RESOURCES` abruft und in den Cache mit dem Namen `CACHE_NAME` speichert.

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

Wie erwähnt, wenn ein bestehender Service Worker durch einen neuen ersetzt werden soll, wird der bestehende Service Worker als der Service Worker der PWA verwendet, bis der neue Service Worker aktiviert wird. Wir verwenden das `activate`-Ereignis, um alte Caches zu löschen, um zu vermeiden, dass der Speicher knapp wird. Wir durchlaufen benannte [`Cache`](/de/docs/Web/API/Cache)-Objekte, löschen alle außer dem aktuellen und setzen den Service Worker dann als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für die PWA.

Wir hören auf das globale Bereichsereignis [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) des aktuellen Service Workers.

Wir erhalten die Namen der bestehenden benannten Caches. Wir verwenden die [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys)-Methode (zugreifend auf `CacheStorage` über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft), die ein {{jsxref("Promise")}} zurückgibt, das sich in ein Array auflöst, das Zeichenfolgen enthält, die allen benannten [`Cache`](/de/docs/Web/API/Cache)-Objekten in der Reihenfolge ihrer Erstellung entsprechen.

Wir verwenden die [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)-Methode, um diese Liste von Namenscache-Versprechen zu durchlaufen. Die `all()`-Methode nimmt als Eingabe eine Liste von iterablen Versprechen und gibt ein einziges `Promise` zurück. Für jeden Namen in der Liste der benannten Caches überprüfen wir, ob der Cache der derzeit aktive ist. Ist dies nicht der Fall, löschen wir ihn mit der `Cache`-Methode [`delete()`](/de/docs/Web/API/Cache/delete).

Die letzte Zeile, das `await clients.claim()` verwendet die [`claim()`](/de/docs/Web/API/Clients/claim)-Methode der [`Clients`](/de/docs/Web/API/Clients)-Schnittstelle, um unseren Service Worker in die Lage zu versetzen, sich als Controller für unseren Client zu setzen; der „Client“ bezieht sich auf eine laufende Instanz der PWA. Die `claim()`-Methode ermöglicht dem Service Worker, die Kontrolle über alle Clients in seinem Bereich zu übernehmen. Auf diese Weise müssen Clients, die im selben Bereich geladen werden, nicht neu geladen werden.

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

Fügen Sie den obigen `activate`-Ereignis-Listener zu Ihrer `sw.js`-Datei hinzu.

### Das Fetch-Ereignis

Wir können das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignis nutzen, um zu verhindern, dass eine installierte PWA Anfragen stellt, wenn der Benutzer online ist. Das Zuhören auf das Fetch-Ereignis macht es möglich, alle Anfragen abzufangen und mit gecachten Antworten zu reagieren, anstatt das Netzwerk zu verwenden. Die meisten Anwendungen benötigen dieses Verhalten nicht. Tatsächlich wollen viele Geschäftsmodelle, dass Benutzer regelmäßig Serveranfragen stellen, um Tracking und Marketing-Zwecke zu erreichen. Daher mag das Abfangen von Anfragen für einige ein Anti-Pattern sein, aber um die Privatsphäre unserer CycleTracker-App zu verbessern, möchten wir nicht, dass die App unnötige Serveranfragen stellt.

Da unsere PWA aus einer einzigen Seite besteht, gehen wir bei Seitennavigationsanfragen zurück zur `index.html` Startseite. Es gibt keine anderen Seiten und wir wollen nie zum Server gehen. Wenn die Fetch-API's [`Request`](/de/docs/Web/API/Request) schreibgeschützte [`mode`](/de/docs/Web/API/Request/mode)-Eigenschaft `navigate` ist, also nach einer Webseite sucht, verwenden wir die [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode des FetchEvents, um die Standard-Fetch-Verarbeitung des Browsers zu verhindern und unser eigenes Antwort-Versprechen unter Verwendung der [`caches.match()`](/de/docs/Web/API/CacheStorage/match)-Methode bereitzustellen.

Für alle anderen Anfrage-Modi öffnen wir die Caches wie im [Installationsereignis-Antwort](#speichern_des_caches_bei_der_pwa-installation) beschrieben, übergeben jedoch stattdessen die Ereignisanfrage an die gleiche `match()`-Methode. Sie überprüft, ob die Anfrage ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Wenn ja, gibt sie die gecachte Antwort zurück. Andernfalls geben wir als Antwort einen [404-Status](/de/docs/Web/HTTP/Status/404) zurück.

Die Verwendung des [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktors, um einen `null`-Body und einen `status: 404` als Optionen zu übergeben, bedeutet nicht, dass es in unserer PWA einen Fehler gibt. Vielmehr sollte alles, was wir benötigen, bereits im Cache sein, und wenn nicht, gehen wir nicht zum Server, um dieses Nicht-Problem zu lösen.

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

Ihre `sw.js`-Datei sollte ähnlich wie das folgende JavaScript aussehen. Beachten Sie, dass bei der Aktualisierung einer der Ressourcen, die im `APP_STATIC_RESOURCES`-Array aufgelistet sind, die einzige Konstante oder Funktion, die innerhalb dieses Service Workers aktualisiert werden muss, der Wert von `VERSION` ist.

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

Beim Aktualisieren eines Service Workers muss die VERSION-Konstante nicht aktualisiert werden, da jede Änderung im Inhalt des Service-Worker-Skripts selbst den Browser dazu veranlassen wird, den neuen Service Worker zu installieren. Es ist jedoch eine gute Praxis, die Versionsnummer zu aktualisieren, da es Entwicklern, einschließlich Ihnen selbst, einfacher macht, zu sehen, welche Version des Service Workers derzeit im Browser läuft, indem Sie [den Namen des Caches im Application-Tool überprüfen](#mit_entwickler_tools) (oder im Sources-Tool).

> [!NOTE]
> Die Aktualisierung der VERSION ist wichtig, wenn Änderungen an einer Anwendungsressource vorgenommen werden, einschließlich der CSS-, HTML- und JS-Code und Bildressourcen. Die Versionsnummer oder jede Änderung an der Service-Worker-Datei ist der einzige Weg, um ein Update der App für Ihre Benutzer zu erzwingen.

## Registrieren des Service Workers

Jetzt, da unser Service-Worker-Skript vollständig ist, müssen wir den Service Worker registrieren.

Wir beginnen damit, zu überprüfen, ob der Browser die [Service Worker API](/de/docs/Web/API/Service_Worker_API) unterstützt, indem wir eine [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#the_concept_of_feature_detection) für das Vorhandensein der [`serviceWorker`](/de/docs/Web/API/ServiceWorker)-Eigenschaft am globalen [`navigator`](/de/docs/Web/API/Navigator)-Objekt verwenden:

```html
<script>
  // Does "serviceWorker" exist
  if ("serviceWorker" in navigator) {
    // If yes, we register the service worker
  }
</script>
```

Wenn die Eigenschaft unterstützt wird, können wir die [`register()`](/de/docs/Web/API/ServiceWorkerContainer/register)-Methode der Service-Worker-APIschnittstelle [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) verwenden.

```html
<script>
  if ("serviceWorker" in navigator) {
    // Register the app's service worker
    // Passing the filename where that worker is defined.
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Obwohl das obige für die Bedürfnisse der CycleTracker-App ausreicht, gibt die `register()`-Methode ein {{jsxref("Promise")}} zurück, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird. Für eine robustere Anwendung, überprüfen Sie die Registrierung auf Fehler:

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

Sie können die vollständig funktionierende [CycleTracker-Periodenverfolgungs-Web-App](https://mdn.github.io/pwa-examples/cycletracker/service_workers/) ausprobieren und sich den [Web-App-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/service_workers) auf GitHub ansehen. Ja, es funktioniert, und es ist jetzt offiziell eine PWA!

## Debugging von Service Workern

Aufgrund der Art und Weise, wie wir den Service Worker eingerichtet haben, wird nach der Registrierung jede Anfrage aus dem Cache gezogen, anstatt neuen Inhalt zu laden. Beim Entwickeln werden Sie Ihren Code häufig bearbeiten. Sie möchten wahrscheinlich Ihre Änderungen regelmäßig im Browser testen; wahrscheinlich mit jedem Speichern.

### Durch Aktualisierung der Versionsnummer und Durchführung eines Hard-Resets

Um einen neuen Cache zu erhalten, können Sie die [Versionsnummer ändern](#versionsnummer) und dann einen Hard-Refresh des Browsers durchführen. Wie Sie einen Hard-Refresh durchführen, hängt vom Browser und Betriebssystem ab:

- Unter Windows: Strg+F5, Umschalt+F5 oder Strg+Umschalt+R.
- Unter macOS: Umschalt+Befehl+R.
- Safari unter macOS: Option+Befehl+E, um den Cache zu leeren, dann Option+Befehl+R.
- Mobile: Gehen Sie unter den Einstellungen des Browsers (Android) oder des Betriebssystems (Samsung, iOS) zu den erweiterten Einstellungen, suchen Sie den Browser (iOS) oder die Websitedaten (Android, Samsung) Website-Einstellungen und löschen Sie die Daten für CycleTracker, bevor Sie die Seite erneut laden.

### Mit Entwicklertools

Sie möchten wahrscheinlich nicht bei jeder Speicherung die Versionsnummer aktualisieren. Bis Sie bereit sind, eine neue Version Ihrer PWA in die Produktion zu bringen und alle Nutzer eine neue Version Ihrer PWA zu geben, können Sie anstelle der Änderung der Versionsnummer bei jeder Speicherung den Service Worker deaktivieren.

Sie können einen Service Worker deaktivieren, indem Sie auf die `Unregister`-Schaltfläche in den [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) klicken. Ein schwerer Refresh der Seite wird den Service Worker erneut registrieren und einen neuen Cache erstellen.

![Firefox-Entwicklertools-Anwendungsbereich mit einem gestoppten Service Worker und einer Unregister-Schaltfläche](firefox_sw.jpg)

In einigen Entwicklertools können Sie einen Service Worker manuell deaktivieren oder die Option „Service Worker bei jedem Reload aktualisieren“ auswählen, die die Entwicklertools so einstellt, dass sie den Service Worker bei jedem Reload zurücksetzen und erneut aktivieren, solange die Entwicklertools geöffnet sind. Es gibt auch eine Option, den Service Worker zu umgehen und Ressourcen aus dem Netzwerk zu laden. Dieses Panel enthält Funktionen, die wir in diesem Tutorial nicht behandeln, die aber hilfreich sein werden, wenn Sie fortschrittlichere PWAs erstellen, die [Synchronisation](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#periodic_background_sync) und [Push](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#push) umfassen, die beide im [Leitfaden für Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) behandelt werden.

![Edge Entwicklertools-Anwendungsbereich, der auf einen Service Worker eingestellt ist](edge_sw.jpg)

Das Service-Worker-Fenster innerhalb des DevTools-Anwendungsbereichs bietet einen Link zum Zugriff auf ein Popup-Fenster mit einer Liste aller registrierten Service Worker für den Browser; nicht nur den Service Worker für die Anwendung, die im aktuellen Tab geöffnet ist. Jede Service-Worker-Liste von Workern hat Schaltflächen zum Stoppen, Starten oder Deaktivieren dieses individuellen Service Workers.

![Zwei Service Worker existieren unter localhost:8080. Sie können aus der Liste der Service Worker deaktiviert werden](edge_sw_list.jpg)

Mit anderen Worten, während Sie an Ihrer PWA arbeiten, müssen Sie die Versionsnummer nicht für jede App-Ansicht aktualisieren. Aber denken Sie daran, wenn Sie mit all Ihren Änderungen fertig sind, aktualisieren Sie den Wert von VERSION des Service Workers, bevor Sie die aktualisierte Version Ihrer PWA verteilen. Wenn Sie dies vergessen, wird niemand, der Ihre App bereits installiert hat oder auch nur Ihre Online-PWA ohne Installation besucht hat, jemals Ihre Änderungen sehen!

## Wir sind fertig!

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und die progressiv verbessert wird, um offline zu arbeiten. Wir haben eine voll funktionsfähige Webanwendung erstellt. Wir haben dann die beiden erforderlichen Funktionen - eine Manifestdatei und einen Service Worker - hinzugefügt, um sie in eine PWA zu verwandeln. Wenn Sie Ihre App mit anderen teilen möchten, stellen Sie sie über eine sichere Verbindung zur Verfügung. Alternativ, wenn Sie den Zyklustracker nur für sich selbst verwenden möchten, [richten Sie eine lokale Entwicklungsumgebung ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), [installieren Sie die PWA](/de/docs/Web/Progressive_web_apps/Guides/Installing) und genießen Sie! Sobald installiert, müssen Sie localhost nicht mehr ausführen.

Herzlichen Glückwunsch!

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
