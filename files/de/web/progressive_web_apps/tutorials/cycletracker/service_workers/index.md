---
title: "CycleTracker: Service Workers"
short-title: Service Workers
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Bisher haben wir das HTML, CSS und JavaScript für CycleTracker geschrieben. Wir haben eine Manifestdatei hinzugefügt, die Farben, Symbole, URL und andere App-Features definiert. Wir haben eine funktionierende PWA! Aber sie funktioniert noch nicht offline. In diesem Abschnitt werden wir das erforderliche JavaScript schreiben, um unsere vollständig funktionsfähige Webanwendung in eine PWA zu verwandeln, die als eigenständige App verteilt werden kann und nahtlos offline arbeitet.

Falls Sie dies noch nicht getan haben, kopieren Sie die [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/index.html), [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/style.css), [JavaScript](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/app.js) und [Manifest](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/cycletracker.json) JSON-Datei. Speichern Sie diese Dateien als `index.html`, `style.css`, `app.js` und `cycletracker.json`.

In diesem Abschnitt erstellen wir `sw.js`, das Service-Worker-Skript, das unsere Web-App in eine PWA umwandelt. Wir haben bereits eine JavaScript-Datei; die letzte Zeile in der HTML-Datei ruft `app.js` auf. Dieses JavaScript bietet alle Funktionen für die standardmäßigen Web-Anwendungsfunktionen. Anstatt die `sw.js` Datei wie `app.js` über das `src`-Attribut von {{HTMLElement("script")}} aufzurufen, werden wir eine Beziehung zwischen der Web-App und ihrem Service Worker durch Registrierung des Service Workers herstellen.

Am Ende dieser Lektion werden Sie eine voll funktionsfähige PWA haben; eine progressiv verbesserte Webanwendung, die vollständig installierbar ist und auch dann funktioniert, wenn der Benutzer offline ist.

## Verantwortlichkeiten des Service Workers

Der Service Worker ist dafür verantwortlich, dass die Anwendung offline funktioniert und dabei stets aktuell bleibt. Um dies zu gewährleisten, sollte der Service Worker Folgendes enthalten:

- Versionsnummer (oder eine andere Kennung).
- Liste der zu cachenden Ressourcen.
- Cache-Version-Name.

Der Service Worker ist auch verantwortlich für:

- Installieren des Caches, wenn die App installiert wird.
- Sich bei Bedarf selbst und die anderen Anwendungsdateien zu aktualisieren.
- Entfernen von gecachten Dateien, die nicht mehr verwendet werden.

Wir erreichen diese Aufgaben, indem wir auf drei Service Worker Events reagieren, einschließlich der

- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event),
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) und
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Events.

### Versionsnummer

Sobald die PWA auf dem Rechner des Benutzers installiert ist, ist die einzige Möglichkeit, den Browser darüber zu informieren, dass aktualisierte Dateien abgerufen werden müssen, eine Änderung am Service Worker vorzunehmen. Wenn eine Änderung an einer anderen PWA-Ressource vorgenommen wird – wenn das HTML aktualisiert wird, ein Fehler im CSS behoben wird, eine Funktion zu `app.js` hinzugefügt wird, ein Bild komprimiert wird, um die Dateigröße zu reduzieren usw. –, weiß der Service Worker Ihrer installierten PWA nicht, dass er aktualisierte Ressourcen herunterladen muss. Erst wenn der Service Worker in irgendeiner Weise verändert wird, weiß die PWA, dass es an der Zeit sein könnte, den Cache zu aktualisieren. Diese Aufgabe muss der Service Worker initiieren.

Obwohl das Ändern eines beliebigen Zeichens technisch ausreichen kann, ist es eine Best Practice für PWAs, eine Versionsnummer-Konstante zu erstellen, die sequentiell aktualisiert wird, um eine Aktualisierung der Datei anzuzeigen. Das Aktualisieren einer Versionsnummer (oder eines Datums) bietet eine offizielle Bearbeitung des Service Workers, selbst wenn sonst nichts im Service Worker geändert wird, und bietet Entwicklern eine Möglichkeit, App-Versionen zu identifizieren.

#### Aufgabe

Beginnen Sie eine JavaScript-Datei mit der Angabe einer Versionsnummer:

```js
const VERSION = "v1";
```

Speichern Sie die Datei als `sw.js`

### Offline-Ressourcenliste

Für ein gutes Offline-Erlebnis sollte die Liste der gecachten Dateien alle Ressourcen enthalten, die innerhalb des Offline-Erlebnisses der PWA verwendet werden. Während die Manifestdatei eine Vielzahl von Symbolen in verschiedenen Größen auflisten kann, muss der Anwendungs-Cache nur die Assets enthalten, die die App im Offline-Modus verwendet.

```js
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon-512x512.png",
];
```

Sie müssen nicht die verschiedenen Symbole aufnehmen, die von allen verschiedenen Betriebssystemen und Geräten in der Liste verwendet werden. Aber Sie sollten alle Bilder aufnehmen, die innerhalb der App verwendet werden, einschließlich der Assets, die innerhalb von Splash-Seiten verwendet werden können, die sichtbar sind, wenn die App beim Laden langsam ist oder die in Seiten "Sie müssen sich mit dem Internet verbinden, um das volle Erlebnis zu erhalten" verwendet werden.

Schließen Sie die Service Worker-Datei nicht in die Liste der zu cachenden Ressourcen ein.

#### Aufgabe

Fügen Sie die Liste der zu cachenden Ressourcen für die CycleTracker PWA zu `sw.js` hinzu.

#### Beispiel Lösung

Wir schließen die statischen Ressourcen ein, die in anderen Abschnitten dieses Tutorials erstellt wurden und die CycleTracker benötigt, um offline zu funktionieren. Unsere aktuelle `sw.js` Datei lautet:

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

Wir haben das `wheel.svg` Symbol aufgenommen, obwohl unsere aktuelle Anwendung es nicht verwendet, falls Sie das PWA-UI verbessern, zum Beispiel das Logo anzuzeigen, wenn keine Periodendaten vorhanden sind.

### Anwendungs-Cache Name

Wir haben eine Versionsnummer und die Dateien, die gecacht werden müssen. Bevor die Dateien gecacht werden, müssen wir einen Namen für den Cache erstellen, der zur Speicherung der statischen Ressourcen der App verwendet wird. Dieser Cachename sollte versioniert sein, um sicherzustellen, dass beim Aktualisieren der App ein neuer Cache erstellt und der alte gelöscht wird.

#### Aufgabe

Verwenden Sie die `VERSION` Nummer, um einen versionierten `CACHE_NAME` zu erstellen und fügen Sie ihn als Konstante zu `sw.js` hinzu.

#### Beispiel Lösung

Wir benennen unseren Cache `period-tracker-` mit der aktuellen `VERSION` angehängt. Da die Konstanterklärung in einer einzigen Zeile erfolgt, platzieren wir sie vor der Ressourcen-Array Konstante für eine bessere Lesbarkeit.

```js
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [ ... ];
```

Wir haben erfolgreich unsere Konstanten deklariert; eine eindeutige Kennung, die Liste der Offline-Ressourcen als Array und den Anwendungs-Cache-Namen, der sich jedes Mal ändert, wenn die Kennung aktualisiert wird. Jetzt konzentrieren wir uns auf die Installation, Aktualisierung und das Löschen nicht verwendeter gecachter Ressourcen.

### Speichern des Caches bei der PWA-Installation

Wenn ein Benutzer eine Website mit einem Service Worker installiert oder einfach besucht, wird im Service Worker-Bereich ein `install` Event ausgelöst. Wir möchten auf dieses Event hören und den Cache bei der Installation mit den statischen Ressourcen der PWA füllen. Jedes Mal, wenn die Service Worker Version aktualisiert wird, installiert der Browser den neuen Service Worker und das Installationsereignis tritt auf.

Das `install` Event tritt auf, wenn die App zum ersten Mal verwendet wird oder wenn eine neue Version des Service Workers vom Browser erkannt wird. Wenn ein älterer Service Worker durch einen neuen ersetzt wird, wird der alte Service Worker als Service Worker der PWA verwendet, bis der neue Service Worker aktiviert wird.

Nur in sicheren Kontexten verfügbar, gibt die {{domxref("WorkerGlobalScope.caches")}} Eigenschaft ein {{domxref("CacheStorage")}} Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Die {{domxref("CacheStorage.open()")}} Methode gibt ein {{jsxref("Promise")}} zurück, das das {{domxref("Cache")}} Objekt zurückgibt, das dem übergebenen Namen des Caches entspricht.

Die {{domxref("Cache.addAll()")}} Methode nimmt ein Array von URLs als Parameter, ruft sie ab und fügt die Antworten dem angegebenen Cache hinzu. Die {{domxref("ExtendableEvent.waitUntil()")}} Methode teilt dem Browser mit, dass die Arbeit andauert, bis das Promise ausgeführt wird, und er den Service Worker nicht beenden sollte, wenn er möchte, dass diese Arbeit abgeschlossen wird. Während Browser verantwortlich sind für die Ausführung und Beendigung von Service Workern, wenn notwendig, ist die `waitUntil` Methode eine Anfrage an den Browser, den Service Worker nicht zu beenden, während eine Aufgabe ausgeführt wird.

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

Fügen Sie einen Installations-Eventlistener hinzu, der die in `APP_STATIC_RESOURCES` aufgelisteten Dateien abruft und in dem Cache namens `CACHE_NAME` speichert.

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

Wie bereits erwähnt, wird beim Ersetzen eines bestehenden Service Workers durch einen neuen der bestehende als Service Worker der PWA verwendet, bis der neue aktiviert wird. Wir verwenden das `activate` Event, um alte Caches zu löschen und Speicherplatz zu sparen. Wir iterieren über benannte {{domxref("Cache")}} Objekte, löschen alle außer dem aktuellen und setzen dann den Service Worker als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für die PWA ein.

Wir hören auf das globales Scope `activate` Event des aktuellen Service Workers.

Wir erhalten die Namen der vorhandenen benannten Caches. Wir verwenden die {{domxref("CacheStorage.keys()")}} Methode (wieder zugänglich über die {{domxref("WorkerGlobalScope.caches")}} Eigenschaft), die ein {{jsxref("Promise")}} zurückgibt, das mit einem Array von Zeichenfolgen aufgelöst wird, die allen namensgleichen {{domxref("Cache")}} Objekten in der Reihenfolge entsprechen, in der sie erstellt wurden.

Wir verwenden die [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) Methode, um durch diese Liste von Cache-Namen-Promises zu iterieren. Die `all()` Methode nimmt als Eingabe eine Liste iterabler Promises und gibt ein einzelnes `Promise` zurück. Für jeden Namen in der Liste der benannten Caches überprüfen wir, ob es sich um den aktuell aktiven Cache handelt. Wenn nicht, löschen wir ihn mit der `Cache` [`delete()`](/de/docs/Web/API/Cache/delete) Methode.

Die letzte Zeile, `await clients.claim()`, verwendet die [`claim()`](/de/docs/Web/API/Clients/claim) Methode der [`Clients`](/de/docs/Web/API/Clients) Schnittstelle, um unserem Service Worker zu ermöglichen, sich als Controller für unseren Client einzusetzen; der "Client" bezieht sich auf eine laufende Instanz der PWA. Die `claim()` Methode ermöglicht es dem Service Worker, die Kontrolle über alle Clients innerhalb seines Scopes zu übernehmen. Auf diese Weise müssen Clients, die im selben Scope geladen werden, nicht neu geladen werden.

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

Fügen Sie den obigen `activate` Eventlistener zu Ihrer `sw.js` Datei hinzu.

### Das Fetch-Event

Wir können das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Event nutzen, um zu verhindern, dass eine installierte PWA Anfragen stellt, wenn der Benutzer online ist. Das Abhören des Fetch-Events macht es möglich, alle Anfragen abzufangen und mit gecachten Antworten zu antworten, anstatt ins Netzwerk zu gehen. Die meisten Anwendungen erfordern dieses Verhalten nicht. Tatsächlich möchten viele Geschäftsmodelle, dass Benutzer regelmäßig Serveranfragen stellen, um Zwecke der Verfolgung und des Marketings zu erfüllen. Daher kann das Abfangen von Anfragen für einige ein Anti-Pattern sein, um die Privatsphäre unserer CycleTracker-App zu verbessern. Wir möchten nicht, dass die App unnötige Serveranfragen stellt.

Da unsere PWA aus einer einzigen Seite besteht, gehen wir für Seiten-Navigationsanfragen immer zur `index.html`-Seite zurück. Es gibt keine anderen Seiten und wir wollen nie zum Server gehen. Wenn die readonly [`mode`](/de/docs/Web/API/Request/mode) Eigenschaft der Fetch API's [`Request`](/de/docs/Web/API/Request) `navigate` ist, was bedeutet, dass es nach einer Webseite sucht, verwenden wir die [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) Methode des FetchEvent, um die Standardfetchbehandlung des Browsers zu verhindern und unsere eigene Antwort-Promise zu liefern, die die [`caches.match()`](/de/docs/Web/API/CacheStorage/match) Methode verwendet.

Für alle anderen Anfrage-Modi öffnen wir die Caches, wie in der [Installations-Ereignis-Antwort](#speichern_des_caches_bei_der_pwa-installation) gemacht, und geben die Event-Anfrage an die gleiche `match()` Methode weiter. Es prüft, ob die Anfrage ein Schlüssel für eine gespeicherte {{domxref("Response")}} ist. Wenn ja, gibt es die gecachte Antwort zurück. Wenn nicht, geben wir eine [404-Status](/de/docs/Web/HTTP/Status/404) als Antwort zurück.

Die Verwendung des [`Response()`](/de/docs/Web/API/Response/Response) Konstruktors, um einen `null`-Body und einen `status: 404` als Optionen zu übergeben, bedeutet nicht, dass es einen Fehler in unserer PWA gibt. Vielmehr sollte alles, was wir brauchen, bereits im Cache sein, und wenn nicht, gehen wir nicht zum Server, um dieses Nicht-Problem zu lösen.

```js
self.addEventListener("fetch", (event) => {
  // when seeking an HTML page
  if (event.request.mode === "navigate") {
    // Go to the cached home page
    event.respondWith(caches.match("/"));
    return;
  }

  // For all other request types
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request.url);
      if (cachedResponse) {
        // Return the cached response if it is available.
        return cachedResponse;
      }
      // Respond with a HTTP 404 response status.
      return new Response(null, { status: 404 });
    })(),
  );
});
```

## Vollständige Service Worker Datei

Ihre `sw.js` Datei sollte ähnlich dem folgenden JavaScript aussehen. Beachten Sie, dass beim Aktualisieren einer der in der `APP_STATIC_RESOURCES` Liste aufgeführten Ressourcen die einzige Konstante oder Funktion, die im Service Worker aktualisiert werden muss, der Wert von `VERSION` ist.

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
// and respond with cached responses instead of going to the network
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

Beim Aktualisieren eines Service Workers muss die VERSION-Konstante nicht aktualisiert werden, da jede Änderung im Inhalt des Service-Worker-Skripts selbst den Browser dazu veranlasst, den neuen Service Worker zu installieren. Es ist jedoch eine gute Praxis, die Versionsnummer zu aktualisieren, da es Entwicklern, einschließlich Ihnen selbst, erleichtert, zu sehen, welche Version des Service Workers aktuell im Browser läuft, indem [der Name des Caches im Anwendungswerkzeug](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) (oder im Quellcode-Werkzeug) überprüft wird.

> [!NOTE]
> Das Aktualisieren der VERSION ist wichtig, wenn Änderungen an allen App-Ressourcen vorgenommen werden, einschließlich des CSS, HTML- und JS-Codes und Bild-Assets. Die Versionsnummer oder jede Änderung an der Service Worker Datei ist die einzige Möglichkeit, ein App-Update für Ihre Benutzer zu erzwingen.

## Service Worker registrieren

Da nun unser Service-Worker-Skript vollständig ist, müssen wir den Service Worker registrieren.

Wir beginnen mit der Überprüfung, ob der Browser die [Service Worker API](/de/docs/Web/API/Service_Worker_API) unterstützt, indem wir die [Eigenschaftserkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#the_concept_of_feature_detection) für das Vorhandensein der [`serviceWorker`](/de/docs/Web/API/ServiceWorker) Eigenschaft im globalen [`navigator`](/de/docs/Web/API/Navigator) Objekt verwenden:

```html
<script>
  // Existiert "serviceWorker"?
  if ("serviceWorker" in navigator) {
    // Wenn ja, registrieren wir den Service Worker
  }
</script>
```

Wenn die Eigenschaft unterstützt wird, können wir die [`register()`](/de/docs/Web/API/ServiceWorkerContainer/register) Methode der Service Worker API-Schnittstelle [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) verwenden.

```html
<script>
  if ("serviceWorker" in navigator) {
    // Registrieren Sie den Service Worker der App
    // Geben Sie den Dateinamen an, in dem dieser definiert ist.
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Während das oben Genannte für die CycleTracker-App ausreichend ist, gibt die `register()` Methode ein {{jsxref("Promise")}} zurück, das sich mit einem {{domxref("ServiceWorkerRegistration")}} Objekt auflöst. Für eine robustere Anwendung überprüfen Sie die Registrierung auf Fehler:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(
    (registration) => {
      console.log("Service-Worker-Registrierung erfolgreich:", registration);
    },
    (error) => {
      console.error(`Service-Worker-Registrierung fehlgeschlagen: ${error}`);
    },
  );
} else {
  console.error("Service Worker werden nicht unterstützt.");
}
```

### Aufgabe

Öffnen Sie `index.html` und fügen Sie das folgende {{HTMLElement("script")}} nach dem Skript zum Einbinden von `app.js` und vor dem schließenden `</body>`-Tag hinzu.

```html
<!-- Registriere den Service Worker der App. -->
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Sie können die vollständig funktionierende [CycleTracker Menstruations-Tracking-Web-App](https://mdn.github.io/pwa-examples/cycletracker/service_workers/) testen und den [Quellcode der Web-App](https://github.com/mdn/pwa-examples/tree/main/cycletracker/service_workers) auf GitHub einsehen. Ja, es funktioniert, und es ist nun offiziell eine PWA!

## Debuggen von Service Workern

Aufgrund der Art und Weise, wie wir den Service Worker eingerichtet haben, zieht jede Anfrage aus dem Cache, anstatt neuen Inhalt zu laden, sobald sie registriert ist. Beim Entwickeln werden Sie Ihren Code häufig bearbeiten. Sie möchten wahrscheinlich Ihre Änderungen regelmäßig im Browser testen; wahrscheinlich bei jedem Speichern.

### Durch Aktualisieren der Versionsnummer und einen Harten Reset

Um einen neuen Cache zu erhalten, können Sie die [Versionsnummer](#versionsnummer) ändern und dann einen harten Browser-Refresh durchführen. Die Art und Weise, wie Sie einen harten Refresh durchführen, hängt vom Browser und Betriebssystem ab:

- Unter Windows: Strg+F5, Umschalt+F5 oder Strg+Umschalt+R.
- Unter MacOS: Umschalt+Befehl+R.
- Safari auf MacOS: Wahltaste+Befehl+E, um den Cache zu leeren, dann Wahltaste+Befehl+R.
- Auf Mobilgeräten: Gehen Sie zu den Browser-(Android-)Oder Betriebssystemeinstellungen (Samsung, iOS), unter den erweiterten Einstellungen finden Sie die Browsereinstellungen (iOS) oder den Webseitendatensatz (Android, Samsung) unter den Seiteneinstellungen und löschen Sie die Daten für CycleTracker, bevor Sie die Seite neu laden.

### Mit Entwicklertools

Wahrscheinlich möchten Sie bei jedem Speichern nicht die Versionsnummer aktualisieren. Bis Sie bereit sind, eine neue Version Ihrer PWA in die Produktion zu bringen und allen eine neue Version Ihrer PWA zu geben, können statt der Änderung der Versionsnummer beim Speichern den Service Worker abmelden.

Sie können einen Service Worker abmelden, indem Sie in den [Entwicklertools des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) auf die Schaltfläche `abmelden` klicken. Ein harter Refresh der Seite wird den Service Worker neu registrieren und einen neuen Cache erstellen.

![Firefox-Entwicklertools-Anwendungspanel mit gestopptem Service Worker und einer Abmelde-Schaltfläche](firefox_sw.jpg)

In einigen Entwicklertools können Sie einen Service Worker manuell abmelden oder Sie können die Option "Service Worker bei Neuladen aktualisieren" auswählen, wodurch die Entwicklertools so eingestellt sind, dass sie bei jedem Neuladen den Service Worker zurücksetzen und erneut aktivieren, solange die Entwicklertools geöffnet sind. Es gibt auch eine Option, den Service Worker zu umgehen und Ressourcen aus dem Netzwerk zu laden. Dieses Panel enthält Funktionen, die wir in diesem Tutorial nicht abdecken, aber nützlich sein werden, wenn Sie fortgeschrittenere PWAs erstellen, die [Synchronisierung](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#periodic_background_sync) und [Push](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#push) beinhalten, die beide im [Offline- und Hintergrund-Betriebsleitfaden](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) behandelt werden.

![Edge-Entwicklertools zeigt das Anwendungspanel, das auf einen Service Worker eingestellt ist](edge_sw.jpg)

Das Service Worker Fenster im Anwendungsbereich der DevTools bietet einen Link zu einem Popup-Fenster, das eine Liste aller registrierten Service Worker für den Browser enthält; nicht nur den Service Worker für die in der aktuellen Registerkarte geöffnete Anwendung. Jede Service Worker Liste hat Schaltflächen, um diesen einzelnen Service Worker zu stoppen, zu starten oder abzumelden.

![Zwei Service Worker existieren unter localhost:8080. Sie können aus der Liste der Service Worker abgemeldet werden](edge_sw_list.jpg)

Mit anderen Worten, während Sie an Ihrer PWA arbeiten, müssen Sie die Versionsnummer nicht für jede App-Ansicht aktualisieren. Aber denken Sie daran, wenn Sie mit all Ihren Änderungen fertig sind, den Wert der Service Worker VERSION zu aktualisieren, bevor Sie die aktualisierte Version Ihrer PWA verteilen. Wenn Sie es vergessen, wird niemand, der Ihre App bereits installiert hat oder auch nur Ihre Online-PWA ohne Installation besucht hat, jemals Ihre Änderungen sehen!

## Wir sind fertig!

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und die progressiv verbessert wird, um offline zu arbeiten. Wir haben eine voll funktionsfähige Webanwendung erstellt. Danach haben wir die beiden erforderlichen Funktionen – eine Manifestdatei und einen Service Worker – hinzugefügt, um sie in eine PWA zu verwandeln. Wenn Sie Ihre App mit anderen teilen möchten, machen Sie sie über eine sichere Verbindung verfügbar. Alternativ können Sie die Cycle-Tracker-App auch nur selbst benutzen, indem Sie eine [lokale Entwicklungsumgebung erstellen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), die PWA [installieren](/de/docs/Web/Progressive_web_apps/Guides/Installing) und genießen! Einmal installiert, müssen Sie localhost nicht mehr betreiben.

Herzlichen Glückwunsch!

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
