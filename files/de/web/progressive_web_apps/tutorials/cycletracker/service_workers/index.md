---
title: "CycleTracker: Service Worker"
short-title: Offline-Unterstützung mit Service Workern
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Bisher haben wir das HTML, CSS und JavaScript für CycleTracker geschrieben. Wir haben eine Manifestdatei hinzugefügt, die Farben, Symbole, URL und andere App-Funktionen definiert. Wir haben eine funktionierende PWA! Aber sie funktioniert noch nicht offline. In diesem Abschnitt schreiben wir das JavaScript, das erforderlich ist, um unsere voll funktionsfähige Webanwendung in eine PWA zu verwandeln, die als eigenständige App verteilt werden kann und nahtlos offline funktioniert.

Falls Sie das noch nicht getan haben, kopieren Sie die [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/index.html), [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/style.css), [JavaScript](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/app.js) und [Manifest](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/cycletracker.json) JSON-Datei. Speichern Sie sie unter den Dateinamen `index.html`, `style.css`, `app.js` und `cycletracker.json`.

In diesem Abschnitt erstellen wir `sw.js`, das Service Worker-Skript, das unsere Web App in eine PWA umwandeln wird. Wir haben bereits eine JavaScript-Datei; die letzte Zeile in der HTML-Datei ruft die `app.js` auf. Dieses JavaScript liefert die gesamte Funktionalität für die Standard-Webanwendungsfunktionen. Anstatt die `sw.js` Datei wie die `app.js` Datei mit dem `src` Attribut von {{HTMLElement("script")}} aufzurufen, werden wir eine Beziehung zwischen der Web-App und ihrem Service Worker schaffen, indem wir den Service Worker registrieren.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige PWA; eine progressiv verbesserte Webanwendung, die vollständig installierbar ist und auch offline funktioniert.

## Verantwortlichkeiten des Service Workers

Der Service Worker sorgt dafür, dass die Anwendung offline funktioniert und stellt sicher, dass die Anwendung immer auf dem neuesten Stand ist. Um dies gut zu erreichen, sollte der Service Worker Folgendes umfassen:

- Versionsnummer (oder andere Kennung).
- Liste der zu cachenden Ressourcen.
- Cache-Versionsname.

Der Service Worker ist auch verantwortlich für:

- Installieren des Caches, wenn die App installiert wird.
- Aktualisierung von sich selbst und den anderen Anwendungsdateien bei Bedarf.
- Entfernen von zwischengespeicherten Dateien, die nicht mehr verwendet werden.

Wir erreichen diese Aufgaben, indem wir auf drei Service Worker-Ereignisse reagieren, darunter die

- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event),
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event), und
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignisse.

### Versionsnummer

Sobald die PWA auf dem Rechner des Benutzers installiert ist, ist die einzige Möglichkeit, den Browser darüber zu informieren, dass neue Dateien heruntergeladen werden müssen, eine Änderung im Service Worker. Wenn eine Änderung an einer anderen PWA-Ressource vorgenommen wird - wenn das HTML aktualisiert wird, ein Fehler im CSS behoben wird, eine Funktion zu `app.js` hinzugefügt wird, ein Bild komprimiert wird, um den Speicherplatz zu reduzieren usw. - wird der Service Worker Ihrer installierten PWA nicht wissen, dass aktualisierte Ressourcen heruntergeladen werden müssen. Nur wenn der Service Worker in irgendeiner Weise geändert wird, weiß die PWA, dass es möglicherweise an der Zeit ist, den Cache zu aktualisieren; was die Aufgabe des Service Workers ist, zu initiieren.

Während jede Änderung eines Zeichens technisch ausreicht, ist eine bewährte Praxis für PWAs, eine Versionsnummer-Konstante zu erstellen, die sequenziell aktualisiert wird, um eine Aktualisierung der Datei anzuzeigen. Das Aktualisieren einer Versionsnummer (oder eines Datums) bietet eine offizielle Bearbeitung des Service Workers, selbst wenn sonst nichts im Service Worker selbst geändert wird, und bietet Entwicklern eine Möglichkeit, App-Versionen zu identifizieren.

#### Aufgabe

Beginnen Sie eine JavaScript-Datei, indem Sie eine Versionsnummer einfügen:

```js
const VERSION = "v1";
```

Speichern Sie die Datei als `sw.js`

### Offline-Ressourcenliste

Für ein gutes Offline-Erlebnis sollte die Liste der zwischengespeicherten Dateien alle Ressourcen umfassen, die innerhalb der Offline-Erfahrung der PWA verwendet werden. Während die Manifestdatei möglicherweise eine Vielzahl von Symbolen in verschiedenen Größen auflistet, muss der Anwendungs-Cache nur die Assets enthalten, die vom Client im Offline-Modus verwendet werden.

```js
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon-512x512.png",
];
```

Sie müssen die verschiedenen Symbole, die auf allen verschiedenen Betriebssystemen und Geräten verwendet werden, nicht in die Liste aufnehmen. Fügen Sie jedoch alle Bilder hinzu, die innerhalb der App verwendet werden, einschließlich Assets, die auf Splash-Seiten sichtbar sind, wenn die App langsam lädt oder auf Seiten in der Art von „Sie müssen sich mit dem Internet verbinden, um das volle Erlebnis zu erhalten“.

Schließen Sie die Service Worker-Datei nicht in die Liste der zwischengespeicherten Ressourcen ein.

#### Aufgabe

Fügen Sie die Liste der für die CycleTracker PWA zu cachenden Ressourcen zu `sw.js` hinzu.

#### Beispiel Lösung

Wir fügen die statischen Ressourcen ein, die in anderen Abschnitten dieses Tutorials erstellt wurden und die CycleTracker benötigt, um offline zu funktionieren. Unsere aktuelle `sw.js` Datei sieht wie folgt aus:

```js
const VERSION = "v1";

const APP_STATIC_RESOURCES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./cycletracker.json",
  "./icons/wheel.svg",
];
```

Da wir die PWA in einem GitHub-Unterverzeichnis speichern, setzen wir den Pfaden ein `./` voran, anstatt Ressourcen mit `/` im Stammverzeichnis zu verlinken.

Wir haben das `wheel.svg` Icon hinzugefügt, obwohl unsere aktuelle Anwendung es nicht verwendet, falls Sie die PWA-Benutzeroberfläche verbessern möchten, z. B. durch Anzeigen des Logos, wenn keine Periodendaten vorhanden sind.

### Anwendungs-Cache-Name

Wir haben eine Versionsnummer und die Dateien, die zwischengespeichert werden müssen. Bevor wir die Dateien zwischenspeichern, müssen wir einen Namen für den Cache erstellen, der zum Speichern der statischen Ressourcen der App verwendet wird. Dieser Cache-Name sollte versioniert werden, um sicherzustellen, dass beim Aktualisieren der App ein neuer Cache erstellt wird und der alte gelöscht wird.

#### Aufgabe

Verwenden Sie die `VERSION`-Nummer, um einen versionierten `CACHE_NAME` zu erstellen und fügen Sie ihn als Konstante zu `sw.js` hinzu.

#### Beispiel Lösung

Wir benennen unseren Cache `period-tracker-` mit der aktuellen `VERSION`, die angehängt wird. Da die Konstanterklärung in einer einzigen Zeile erfolgt, platzieren wir sie vor dem Array der Ressourcen-Konstante für bessere Lesbarkeit.

```js
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [
  // …
];
```

Wir haben erfolgreich unsere Konstanten deklariert; ein eindeutiger Bezeichner, die Liste der Offline-Ressourcen als Array und der Cache-Name der Anwendung, der sich jedes Mal ändert, wenn der Bezeichner aktualisiert wird. Lassen Sie uns nun auf die Installation, Aktualisierung und Löschung ungenutzter zwischengespeicherter Ressourcen konzentrieren.

### Speichern des Caches bei der PWA-Installation

Wenn ein Benutzer eine Website mit einem Service Worker installiert oder einfach besucht, wird ein `install` Ereignis im Service Worker-Bereich ausgelöst. Wir möchten auf dieses Ereignis hören und den Cache bei der Installation mit den statischen Ressourcen der PWA füllen. Jedes Mal, wenn die Service Worker-Version aktualisiert wird, installiert der Browser den neuen Service Worker und das Installationsereignis tritt auf.

Das `install` Ereignis tritt auf, wenn die App zum ersten Mal verwendet wird oder wenn ein neuer Service Worker vom Browser erkannt wird. Wenn ein älterer Service Worker durch einen neuen ersetzt wird, wird der alte Service Worker als Service Worker der PWA verwendet, bis der neue aktiv ist.

Nur in sicheren Kontexten verfügbar, gibt die Eigenschaft [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) ein [`CacheStorage`](/de/docs/Web/API/CacheStorage) Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open) gibt ein {{jsxref("Promise")}} zurück, das sich zu dem [`Cache`](/de/docs/Web/API/Cache) Objekt auflöst, dessen Name dem als Parameter übergebenen Cache entspricht.

Die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) nimmt ein Array von URLs als Parameter, ruft sie ab und fügt die Antworten dem angegebenen Cache hinzu. Die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) teilt dem Browser mit, dass die Arbeit fortgesetzt wird, bis das Promise erfüllt ist, und er den Service Worker nicht beenden sollte, wenn er möchte, dass diese Arbeit abgeschlossen wird. Während Browser dafür verantwortlich sind, Service Worker bei Bedarf auszuführen und zu beenden, ist die `waitUntil` Methode eine Anfrage an den Browser, den Service Worker während der Ausführung einer Aufgabe nicht zu beenden.

```js
self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open("cacheName_identifier");
      cache.addAll(["./", "./index.html", "./style.css", "./app.js"]);
    })(),
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

Wie bereits erwähnt, wird, wenn ein bestehender Service Worker von einem neuen ersetzt wird, der bestehende Service Worker als Service Worker der PWA verwendet, bis der neue aktiviert ist. Wir verwenden das `activate` Ereignis, um alte Caches zu löschen und Platzprobleme zu vermeiden. Wir iterieren über benannte [`Cache`](/de/docs/Web/API/Cache) Objekte, löschen alle außer dem aktuellen, und setzen dann den Service Worker als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für die PWA.

Wir hören auf das `activate` Ereignis des aktuellen Service Workers im globalen Bereich.

Wir erhalten die Namen der bestehenden benannten Caches. Wir verwenden die Methode [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys) (wiederum Zugriff auf `CacheStorage` über die Eigenschaft [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)), die ein {{jsxref("Promise")}} zurückgibt, das sich zu einem Array auflöst, das Strings enthält, die all den benannten [`Cache`](/de/docs/Web/API/Cache) Objekten in der Reihenfolge ihrer Erstellung entsprechen.

Wir verwenden die Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um durch die Liste der Namenscache-Promises zu iterieren. Die Methode `all()` nimmt als Eingabe eine Liste von iterierbaren Promises und gibt ein einzelnes `Promise` zurück. Für jeden Namen in der Liste der benannten Caches überprüfen wir, ob der Cache der derzeit aktive Cache ist. Wenn nicht, löschen wir ihn mit der `Cache` [`delete()`](/de/docs/Web/API/Cache/delete) Methode.

Die letzte Zeile, das `await clients.claim()`, verwendet die Methode [`claim()`](/de/docs/Web/API/Clients/claim) des [`Clients`](/de/docs/Web/API/Clients) Interfaces, um unserem Service Worker zu ermöglichen, sich selbst als Controller für unseren Client festzulegen; der "Client" bezieht sich auf eine laufende Instanz der PWA. Die `claim()` Methode ermöglicht es dem Service Worker, die Kontrolle über alle Clients in seinem Bereich zu übernehmen. Auf diese Weise müssen Clients, die im selben Bereich geladen werden, nicht neu geladen werden.

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

Fügen Sie den obigen `activate` Ereignis-Listener zu Ihrer `sw.js` Datei hinzu.

### Das fetch Ereignis

Wir können das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Ereignis nutzen, um zu verhindern, dass eine installierte PWA Anfragen stellt, wenn der Benutzer offline ist. Wenn wir das Fetch-Ereignis abhören, können wir alle Anfragen abfangen und mit gecachten Antworten antworten, anstatt auf das Netzwerk zuzugreifen. Die meisten Anwendungen erfordern dieses Verhalten nicht. In der Tat möchten viele Geschäftsmodelle, dass Benutzer regelmäßig Serveranfragen stellen, um Tracking- und Marketingzwecken nachzukommen. Während das Abfangen von Anfragen für einige ein Anti-Pattern sein mag, wollen wir zur Verbesserung der Privatsphäre unserer CycleTracker App vermeiden, dass die App unnötige Serveranfragen stellt.

Da unsere PWA aus einer einzigen Seite besteht, gehen wir bei Navigationsanfragen für Seiten zurück zur `index.html` Startseite. Es gibt keine anderen Seiten und wir wollen niemals zum Server gehen. Wenn die schreibgeschützte Eigenschaft [`mode`](/de/docs/Web/API/Request/mode) der Fetch API's [`Request`](/de/docs/Web/API/Request) `navigate` ist, was bedeutet, dass es nach einer Webseite sucht, verwenden wir die Methode [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) des FetchEvent, um den Standard-Fetch-Handling des Browsers zu verhindern und unser eigenes Antwort-Promise mit der Methode [`caches.match()`](/de/docs/Web/API/CacheStorage/match) bereitzustellen.

Für alle anderen Anforderungsmoden öffnen wir die Caches wie bei der [Reaktion auf das Installationsereignis](#speichern_des_caches_bei_der_pwa-installation), indem wir die Ereignisanfrage an dieselbe `match()` Methode weiterleiten. Es überprüft, ob die Anfrage ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Wenn ja, gibt sie die zwischengespeicherte Antwort zurück. Wenn nicht, geben wir einen [404-Status](/de/docs/Web/HTTP/Reference/Status/404) als Antwort.

Die Verwendung des [`Response()`](/de/docs/Web/API/Response/Response) Konstruktors, um einen `null` Body und einen `status: 404` als Optionen zu übergeben, bedeutet nicht, dass ein Fehler in unserer PWA vorliegt. Vielmehr sollte alles, was wir brauchen, bereits im Cache sein, und wenn nicht, werden wir nicht zum Server gehen, um dieses Nicht-Problem zu lösen.

```js
self.addEventListener("fetch", (event) => {
  // when seeking an HTML page
  if (event.request.mode === "navigate") {
    // Return to the index.html page
    event.respondWith(caches.match("./"));
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
      // Respond with an HTTP 404 response status.
      return new Response(null, { status: 404 });
    })(),
  );
});
```

## Vollständige Service Worker-Datei

Ihre `sw.js` Datei sollte dem folgenden JavaScript ähneln. Beachten Sie, dass beim Aktualisieren einer der in der `APP_STATIC_RESOURCES`-Array aufgeführten Ressourcen nur die Konstante oder Funktion innerhalb dieses Service Workers, die aktualisiert werden muss, der Wert von `VERSION` ist.

```js
// The version of the cache.
const VERSION = "v1";

// The name of the cache
const CACHE_NAME = `period-tracker-${VERSION}`;

// The static resources that the app needs to function.
const APP_STATIC_RESOURCES = [
  "./",
  "./index.html",
  "./app.js",
  "./style.css",
  "./icons/wheel.svg",
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
    event.respondWith(caches.match("./"));
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

> [!NOTE]
> Wenn die Hauptseite Ihrer PWA im Stammverzeichnis Ihrer Website liegt, können Sie `/` anstelle von `./` für das Ressourcenarray (`APP_STATIC_RESOURCES`) und die Fetch-Antwort (`match("/")`) verwenden.

Beim Aktualisieren eines Service Workers muss die VERSION-Konstante nicht aktualisiert werden, da jede Änderung des Inhalts des Service Worker-Skripts selbst den Browser dazu veranlasst, den neuen Service Worker zu installieren. Es ist jedoch eine gute Praxis, die Versionsnummer zu aktualisieren, da es Entwicklern, einschließlich Ihnen, erleichtert zu sehen, welche Version des Service Workers derzeit im Browser läuft, indem der Name des Caches im [Anwendungstool](#mit_entwicklertools) geprüft wird (oder in den Quellwerkzeugen).

> [!NOTE]
> Das Aktualisieren von VERSION ist wichtig, wenn Änderungen an einer Anwendungsressource vorgenommen werden, einschließlich des CSS-, HTML- und JS-Codes sowie der Bild-Assets. Die Versionsnummer oder jede Änderung an der Service-Worker-Datei ist der einzige Weg, um das App-Update für Ihre Benutzer zu erzwingen.

## Registrieren des Service Workers

Jetzt, wo unser Service Worker-Skript vollständig ist, müssen wir den Service Worker registrieren.

Wir beginnen, indem wir überprüfen, ob der Browser die [Service Worker API](/de/docs/Web/API/Service_Worker_API) unterstützt, indem wir auf die Eigenschaft [`serviceWorker`](/de/docs/Web/API/ServiceWorker) am globalen [`navigator`](/de/docs/Web/API/Navigator) Objekt [Merkmalserkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#the_concept_of_feature_detection) verwenden:

```js
// Does "serviceWorker" exist
if ("serviceWorker" in navigator) {
  // If yes, we register the service worker
}
```

Wenn die Eigenschaft unterstützt wird, können wir dann die Methode [`register()`](/de/docs/Web/API/ServiceWorkerContainer/register) des Interfaces [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) der Service Worker API verwenden.

```js
if ("serviceWorker" in navigator) {
  // Register the app's service worker
  // Passing the filename where that worker is defined.
  navigator.serviceWorker.register("sw.js");
}
```

Obwohl das oben Genannte für die Bedürfnisse der CycleTracker-App ausreichend ist, gibt die `register()` Methode ein {{jsxref("Promise")}} zurück, das sich zu einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Objekt auflöst. Für eine robustere Anwendung prüfen Sie die Registrierung auf Fehler:

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

Öffnen Sie `index.html` und fügen Sie das folgende {{HTMLElement("script")}} nach dem Script zum Einbinden von `app.js` und vor dem schließenden `</body>` Tag ein.

```html
<!-- Register the app's service worker. -->
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Sie können die voll funktionsfähige [CycleTracker Perioden-Tracking-Web-App](https://mdn.github.io/pwa-examples/cycletracker/service_workers/) ausprobieren und den [Web-App-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/service_workers) auf GitHub ansehen. Ja, es funktioniert, und es ist jetzt offiziell eine PWA!

## Debugging von Service Workern

Aufgrund der Art und Weise, wie wir den Service Worker eingerichtet haben, wird bei jeder Anfrage aus dem Cache geladen, anstatt neue Inhalte zu laden, sobald er registriert ist. Beim Entwickeln werden Sie Ihren Code häufig bearbeiten. Sie möchten Ihre Bearbeitungen wahrscheinlich regelmäßig im Browser testen; wahrscheinlich bei jedem Speichern.

### Durch Aktualisieren der Versionsnummer und einen Hard-Reset

Um einen neuen Cache zu erhalten, können Sie die [Versionsnummer](#versionsnummer) ändern und dann einen Hard-Refresh im Browser durchführen. Wie Sie einen Hard-Refresh durchführen, hängt vom Browser und Betriebssystem ab:

- Auf Windows: Ctrl+F5, Shift+F5 oder Ctrl+Shift+R.
- Auf macOS: Shift+Command+R.
- Safari auf macOS: Option+Command+E, um den Cache zu leeren, dann Option+Command+R.
- Auf Mobilgeräten: Gehen Sie zu den Browser-(Android) oder Betriebssystem- (Samsung, iOS) Einstellungen, unter erweiterte Einstellungen finden Sie die Browser- (iOS) oder Website-Daten- (Android, Samsung) Site-Einstellungen und löschen Sie die Daten für CycleTracker, bevor Sie die Seite neu laden.

### Mit Entwicklertools

Sie möchten wahrscheinlich nicht die Versionsnummer bei jedem Speichern aktualisieren. Bis Sie bereit sind, eine neue Version Ihrer PWA in Produktion zu nehmen und jedem eine neue Version Ihrer PWA zu geben, können Sie anstelle der Versionsnummer bei jedem Speichern den Service Worker abmelden.

Sie können einen Service Worker abmelden, indem Sie auf die Schaltfläche `unregister` in den [Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) klicken. Ein harter Refresh der Seite registriert den Service Worker erneut und erstellt einen neuen Cache.

![Firefox-Entwicklertools-Anwendungspanel mit einem gestoppten Service Worker und einer Unregister-Schaltfläche](firefox_sw.jpg)

In einigen Entwicklertools können Sie einen Service Worker manuell abmelden oder die Option „Service Worker bei Neuladen aktualisieren“ auswählen, die die Entwicklertools auf jedes Neuladen den Service Worker zurücksetzt und wieder aktiviert, solange die Entwicklertools geöffnet sind. Es gibt auch eine Option, den Service Worker zu umgehen und Ressourcen aus dem Netzwerk zu laden. Dieses Panel umfasst Funktionen, die wir in diesem Tutorial nicht behandeln, die jedoch hilfreich sind, wenn Sie fortgeschrittenere PWAs erstellen, die [Synchronisierung](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#periodic_background_sync) und [Push](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#push) einschließen, die beide im [Offline- und Hintergrundbetriebs-Leitfaden](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) behandelt werden.

![Edge-Entwicklertools, die das Anwendungspanel zeigen, das auf einen Service Worker gesetzt ist](edge_sw.jpg)

Das Service-Worker-Fenster im Anwendungspanel der DevTools bietet einen Link, um auf ein Popup-Fenster zuzugreifen, das eine Liste aller im Browser registrierten Service Worker enthält; nicht nur der Service Worker für die Anwendung, die im aktuellen Tab geöffnet ist. Jede Liste von Service Workern hat Schaltflächen, um diesen einzelnen Service Worker zu stoppen, zu starten oder abzumelden.

![Zwei Service Worker existieren bei localhost:8080. Sie können von der Liste der Service Worker abgemeldet werden](edge_sw_list.jpg)

Mit anderen Worten, während Sie an Ihrer PWA arbeiten, müssen Sie die Versionsnummer nicht für jede Ansicht der App aktualisieren. Aber denken Sie daran, wenn Sie mit all Ihren Änderungen fertig sind, aktualisieren Sie den Wert von VERSION im Service Worker, bevor Sie die aktualisierte Version Ihrer PWA verteilen. Wenn Sie es vergessen, wird niemand, der Ihre App bereits installiert hat oder sogar nur Ihre Online-PWA ohne Installation besucht hat, jemals Ihre Änderungen sehen!

## Wir sind fertig!

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und die progressiv verbessert wird, um offline zu arbeiten. Wir haben eine voll funktionsfähige Web-App erstellt. Dann haben wir die beiden Features hinzugefügt - eine Manifestdatei und einen Service Worker -, die erforderlich sind, um sie in eine PWA umzuwandeln. Wenn Sie Ihre App mit anderen teilen möchten, stellen Sie sie über eine sichere Verbindung zur Verfügung. Alternativ, wenn Sie den Zyklustracker nur selbst verwenden möchten, [erstellen Sie eine lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), [installieren Sie die PWA](/de/docs/Web/Progressive_web_apps/Guides/Installing), und viel Spaß! Einmal installiert, müssen Sie localhost nicht mehr ausführen.

Herzlichen Glückwunsch!

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
