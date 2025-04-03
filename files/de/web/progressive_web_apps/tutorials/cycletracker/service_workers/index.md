---
title: "CycleTracker: Service Workers"
short-title: Service Workers
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{PWASidebar}}

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Bisher haben wir das HTML, CSS und JavaScript für CycleTracker geschrieben. Wir haben eine Manifestdatei hinzugefügt, die Farben, Symbole, URLs und andere App-Funktionen definiert. Wir haben eine funktionierende PWA! Aber sie funktioniert noch nicht offline. In diesem Abschnitt werden wir das notwendige JavaScript schreiben, um unsere voll funktionsfähige Webanwendung in eine PWA zu verwandeln, die als eigenständige App verteilt werden kann und nahtlos offline arbeitet.

Falls Sie es noch nicht getan haben, kopieren Sie die [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/index.html), [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/style.css), [JavaScript](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/app.js) und die [manifest](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/cycletracker.json) JSON-Datei. Speichern Sie sie als Dateien mit den Namen `index.html`, `style.css`, `app.js` und `cycletracker.json`.

In diesem Abschnitt erstellen wir `sw.js`, das Service-Worker-Skript, das unsere Web-App in eine PWA umwandelt. Wir haben bereits eine JavaScript-Datei; die letzte Zeile in der HTML-Datei ruft die `app.js` auf. Dieses JavaScript bietet alle Funktionen für die Standard-Webanwendungsfunktionen. Anstatt die `sw.js`-Datei wie die `app.js`-Datei mit dem `src`-Attribut von {{HTMLElement("script")}} aufzurufen, erstellen wir eine Beziehung zwischen der Web-App und ihrem Service Worker, indem wir den Service Worker registrieren.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige PWA; eine progressiv verbesserte Webanwendung, die vollständig installierbar ist und auch funktioniert, wenn der Benutzer offline ist.

## Aufgaben des Service Workers

Der Service Worker ist dafür verantwortlich, dass die Anwendung offline funktioniert und dabei sicherstellt, dass die Anwendung stets auf dem neuesten Stand ist. Um dies gut zu machen, sollte der Service Worker Folgendes beinhalten:

- Versionsnummer (oder anderer Identifikator).
- Liste der zu cachenden Ressourcen.
- Cachename der Version.

Der Service Worker ist auch verantwortlich für:

- Installation des Caches, wenn die App installiert wird.
- Aktualisierung seiner selbst und der anderen Anwendungsdateien bei Bedarf.
- Entfernen von gecachten Dateien, die nicht mehr verwendet werden.

Wir erreichen diese Aufgaben, indem wir auf drei Service Worker-Ereignisse reagieren, einschließlich der

- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event),
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) und
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignisse.

### Versionsnummer

Sobald die PWA auf dem Rechner des Benutzers installiert ist, ist der einzige Weg, den Browser darüber zu informieren, dass aktualisierte Dateien abzurufen sind, eine Änderung im Service Worker. Wenn eine Änderung an einer anderen PWA-Ressource vorgenommen wird — wenn das HTML aktualisiert wird, ein Bug im CSS behoben wird, eine Funktion zu `app.js` hinzugefügt wird, ein Bild komprimiert wird, um den Dateispeicher zu reduzieren usw. — wird der Service Worker Ihrer installierten PWA nicht wissen, dass er aktualisierte Ressourcen herunterladen muss. Nur wenn der Service Worker in irgendeiner Weise verändert wird, weiß die PWA, dass es an der Zeit sein könnte, den Cache zu aktualisieren; was die Aufgabe des Service Workers ist.

Obwohl jede Änderung technisch ausreichen könnte, ist eine Best Practice bei PWAs, eine Versionsnummerkonstante zu erstellen, die sequentiell aktualisiert wird, um eine Aktualisierung der Datei anzuzeigen. Das Aktualisieren einer Versionsnummer (oder des Datums) bietet eine offizielle Bearbeitung des Service Workers, auch wenn sonst nichts am Service Worker selbst geändert wird, und bietet Entwicklern eine Möglichkeit, App-Versionen zu identifizieren.

#### Aufgabe

Starten Sie eine JavaScript-Datei, indem Sie eine Versionsnummer einschließen:

```js
const VERSION = "v1";
```

Speichern Sie die Datei als `sw.js`

### Liste der Offline-Ressourcen

Für eine gute Offline-Erfahrung sollte die Liste der gecachten Dateien alle Ressourcen umfassen, die innerhalb der Offline-Nutzung der PWA verwendet werden. Während die Manifestdatei eine Vielzahl von Symbolen in verschiedenen Größen enthalten kann, muss der Anwendungscache nur die Assets enthalten, die von der App im Offline-Modus verwendet werden.

```js
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon-512x512.png",
];
```

Sie müssen die verschiedenen Symbole, die auf allen verschiedenen Betriebssystemen und Geräten verwendet werden, nicht in die Liste aufnehmen. Aber nehmen Sie alle Bilder auf, die innerhalb der App verwendet werden, einschließlich der Assets, die auf Splash-Seiten verwendet werden könnten, die sichtbar sind, wenn die App langsam geladen wird oder auf Seiten, die dem Benutzer zeigen, dass er sich mit dem Internet verbinden muss, um alle Funktionen zu nutzen.

Nehmen Sie die Service Worker-Datei nicht in die Liste der zu cachenden Ressourcen auf.

#### Aufgabe

Fügen Sie die Liste der zu cachenden Ressourcen für die CycleTracker-PWA zur `sw.js` hinzu.

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

Wir haben das `wheel.svg`-Symbol einbezogen, obwohl unsere aktuelle Anwendung es nicht verwendet, für den Fall, dass Sie die PWA-Benutzeroberfläche verbessern, wie zum Beispiel das Logo anzeigen, wenn keine Periodendaten vorhanden sind.

### Cache-Name der Anwendung

Wir haben eine Versionsnummer und wir haben die Dateien, die gecacht werden müssen. Bevor wir die Dateien cachen, müssen wir einen Namen für den Cache erstellen, der zur Speicherung der statischen Ressourcen der App verwendet wird. Dieser Cachename sollte versioniert werden, um sicherzustellen, dass beim Aktualisieren der App ein neuer Cache erstellt wird und der alte gelöscht wird.

#### Aufgabe

Verwenden Sie die `VERSION`-Nummer, um einen versionierten `CACHE_NAME` zu erstellen und fügen Sie ihn als Konstante zu `sw.js` hinzu.

#### Beispiel-Lösung

Wir benennen unseren Cache `period-tracker-` mit der aktuellen `VERSION` als Anhang. Da die Konstanterklärung in einer einzelnen Zeile erfolgt, setzen wir sie vor die Array-Ressourcen-Konstante zur besseren Lesbarkeit.

```js
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [
  // …
];
```

Wir haben erfolgreich unsere Konstanten deklariert; ein eindeutiger Identifikator, die Liste der Offline-Ressourcen als Array und den Cache-Namen der Anwendung, der sich jedes Mal ändert, wenn der Identifikator aktualisiert wird. Nun konzentrieren wir uns auf die Installation, Aktualisierung und das Löschen nicht verwendeter gecachter Ressourcen.

### Speichern des Caches bei PWA-Installation

Wenn ein Benutzer eine Website oder eine Website mit einem Service Worker besucht, wird ein `install`-Ereignis im Geltungsbereich des Service Workers ausgelöst. Wir möchten auf dieses Ereignis hören, um den Cache mit den statischen Ressourcen der PWA bei der Installation zu füllen. Jedes Mal, wenn die Version des Service Workers aktualisiert wird, installiert der Browser den neuen Service Worker und das Installationsereignis tritt auf.

Das `install`-Ereignis tritt auf, wenn die App zum ersten Mal verwendet wird oder wenn ein neuer Service Worker vom Browser erkannt wird. Wenn ein älterer Service Worker durch einen neuen ersetzt wird, wird der alte Service Worker als PWA-Service Worker verwendet, bis der neue aktiviert wird.

Nur in sicheren Kontexten verfügbar, gibt die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft ein [`CacheStorage`](/de/docs/Web/API/CacheStorage) Objekt zurück, das mit dem aktuellen Kontext assoziiert ist. Die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open) gibt ein {{jsxref("Promise")}} zurück, das auf das [`Cache`](/de/docs/Web/API/Cache) Objekt aufgelöst wird, dessen Name als Parameter übergeben wird.

Die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) nimmt ein Array von URLs als Parameter, ruft sie ab und fügt die Antworten zu dem angegebenen Cache hinzu. Die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) teilt dem Browser mit, dass die Arbeit fortgesetzt wird, bis sich das Versprechen aufgelöst hat, und er den Service Worker nicht beenden sollte, wenn er möchte, dass diese Arbeit abgeschlossen wird. Während Browser dafür verantwortlich sind, den Service Worker bei Bedarf auszuführen und zu beenden, stellt die `waitUntil`-Methode eine Anfrage an den Browser, den Service Worker nicht zu beenden, während eine Aufgabe ausgeführt wird.

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

Fügen Sie einen Installations-Event-Listener hinzu, der die in `APP_STATIC_RESOURCES` aufgeführten Dateien abruft und im Cache namens `CACHE_NAME` speichert.

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

Wie bereits erwähnt, wenn ein bestehender Service Worker durch einen neuen ersetzt wird, wird der bestehende Service Worker als PWA-Service Worker verwendet, bis der neue Service Worker aktiviert wird. Wir verwenden das `activate`-Ereignis, um alte Caches zu löschen, um zu verhindern, dass der Speicherplatz ausgeht. Wir durchlaufen benannte [`Cache`](/de/docs/Web/API/Cache) Objekte, löschen alle außer den aktuellen und setzen dann den Service Worker als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für die PWA.

Wir lauschen auf das `activate`-Ereignis des aktuellen Service Workers im globalen Bereich.

Wir erhalten die Namen der vorhandenen benannten Caches. Wir verwenden die [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys) Methode (erneut Zugang zu `CacheStorage` über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft), die ein {{jsxref("Promise")}} zurückgibt, das mit einem Array aufgelöst wird, das Zeichenfolgen enthält, die allen benannten [`Cache`](/de/docs/Web/API/Cache) Objekten in der Reihenfolge entsprechen, in der sie erstellt wurden.

Wir verwenden die [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) Methode, um diese Liste von Cache-Namen-Versprechen zu durchlaufen. Die `all()` Methode nimmt als Eingabe eine Liste von iterierbaren Versprechen und gibt ein einzelnes `Promise` zurück. Für jeden Namen in der Liste der benannten Caches überprüfen wir, ob der Cache der derzeit aktive Cache ist. Wenn nicht, löschen wir ihn mit der `Cache` [`delete()`](/de/docs/Web/API/Cache/delete) Methode.

Die letzte Zeile, das `await clients.claim()` verwendet die [`claim()`](/de/docs/Web/API/Clients/claim) Methode der [`Clients`](/de/docs/Web/API/Clients) Schnittstelle, um unserem Service Worker die Möglichkeit zu geben, sich selbst als Controller für unseren Client zu setzen; der "Client" bezieht sich auf eine laufende Instanz der PWA. Die Methode `claim()` ermöglicht es dem Service Worker, die Kontrolle über alle Clients innerhalb seines Bereichs zu übernehmen. So müssen Clients, die im selben Bereich geladen werden, nicht neu geladen werden.

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

Wir können das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Ereignis nutzen, um zu verhindern, dass eine installierte PWA Anfragen stellt, wenn der Benutzer online ist. Durch das Lauschen auf das Fetch-Ereignis ist es möglich, alle Anfragen abzufangen und mit gecachten Antworten zu antworten, anstatt zum Netzwerk zu gehen. Die meisten Anwendungen benötigen dieses Verhalten nicht. Tatsächlich wollen viele Geschäftsmodelle, dass Benutzer regelmäßig Serveranfragen für Tracking- und Marketingzwecke stellen. Zwar mag das Abfangen von Anfragen für einige als Antimuster gelten, um die Privatsphäre unserer CycleTracker-App zu verbessern, wollen wir nicht, dass die App unnötige Serveranfragen stellt.

Da unsere PWA aus einer einzigen Seite besteht, kehren wir bei Seitennavigationsanfragen zur `index.html`-Startseite zurück. Es gibt keine anderen Seiten und wir wollen niemals zum Server gehen. Wenn die readonly [`mode`](/de/docs/Web/API/Request/mode) Eigenschaft der `Request` der Fetch API `navigate` ist, was bedeutet, dass eine Webseite angefordert wird, verwenden wir die [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) Methode des FetchEreignisses, um das Standard-Fetch-Handling des Browsers zu verhindern und unsere eigene Antwort zu geben, indem wir die [`caches.match()`](/de/docs/Web/API/CacheStorage/match) Methode verwenden.

Für alle anderen Anfragemodi öffnen wir die Caches, wie es in der [install event response](#speichern_des_caches_bei_pwa-installation) gemacht wird, und geben stattdessen die Event-Anfrage an die gleiche `match()`-Methode weiter. Es wird überprüft, ob die Anfrage ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Wenn ja, wird die gecachte Antwort zurückgegeben. Wenn nicht, geben wir eine [404-Status](/de/docs/Web/HTTP/Reference/Status/404) als Antwort zurück.

Die Verwendung des [`Response()`](/de/docs/Web/API/Response/Response) Konstruktors, um einen `null`-Body und einen `status: 404` als Optionen zu übergeben, bedeutet nicht, dass es einen Fehler in unserer PWA gibt. Vielmehr sollte alles, was wir brauchen, bereits im Cache sein, und wenn nicht, gehen wir nicht zum Server, um dieses Nicht-Problem zu lösen.

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

Ihre `sw.js` Datei sollte wie folgt aussehen. Beachten Sie, dass beim Update einer der Ressourcen, die in dem `APP_STATIC_RESOURCES` Array aufgelistet sind, die einzige Konstante oder Funktion, die in diesem Service Worker aktualisiert werden muss, der Wert von `VERSION` ist.

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

Beim Aktualisieren eines Service Workers muss die VERSION-Konstante nicht aktualisiert werden, da jede Änderung am Inhalt des Service Worker-Skripts selbst den Browser dazu veranlasst, den neuen Service Worker zu installieren. Es ist jedoch eine gute Praxis, die Versionsnummer zu aktualisieren, da es Entwicklern, einschließlich Ihnen selbst, erleichtert, zu sehen, welche Version des Service Workers derzeit im Browser läuft, indem der [Name des Caches im Anwendungstool](#mit_entwickler-tools) (oder Quellentool) überprüft wird.

> [!NOTE]
> Das Aktualisieren der VERSION ist wichtig, wenn Änderungen an einer Anwendungsressource vorgenommen werden, einschließlich des CSS, HTML und JS-Codes sowie der Bilddateien. Die Versionsnummer oder eine Änderung der Service Worker-Datei ist der einzige Weg, um eine Aktualisierung der App für Ihre Benutzer zu erzwingen.

## Registrieren des Service Workers

Jetzt, da unser Service Worker-Skript vollständig ist, müssen wir den Service Worker registrieren.

Wir beginnen damit, zu überprüfen, ob der Browser die [Service Worker API](/de/docs/Web/API/Service_Worker_API) unterstützt, indem wir [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#the_concept_of_feature_detection) für die Existenz der [`serviceWorker`](/de/docs/Web/API/ServiceWorker) Eigenschaft im globalen [`navigator`](/de/docs/Web/API/Navigator) Objekt verwenden:

```html
<script>
  // Does "serviceWorker" exist
  if ("serviceWorker" in navigator) {
    // If yes, we register the service worker
  }
</script>
```

Wenn die Eigenschaft unterstützt wird, können wir die [`register()`](/de/docs/Web/API/ServiceWorkerContainer/register) Methode der Service Worker API's [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Schnittstelle verwenden.

```html
<script>
  if ("serviceWorker" in navigator) {
    // Register the app's service worker
    // Passing the filename where that worker is defined.
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Während das obige für die Bedürfnisse der CycleTracker-App ausreicht, gibt die `register()` Methode ein {{jsxref("Promise")}} zurück, das auf ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Objekt aufgelöst wird. Für eine robustere Anwendung überprüfen Sie den Registrierungsvorgang auf Fehler:

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

Öffnen Sie `index.html` und fügen Sie das folgende {{HTMLElement("script")}} nach dem Skript für `app.js` und vor dem schließenden `</body>` Tag hinzu.

```html
<!-- Register the app's service worker. -->
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Sie können die vollständig funktionierende [CycleTracker Periodenverfolgungs-Web-App](https://mdn.github.io/pwa-examples/cycletracker/service_workers/) ausprobieren und den [Quellcode der Web-App](https://github.com/mdn/pwa-examples/tree/main/cycletracker/service_workers) auf GitHub einsehen. Ja, sie funktioniert, und sie ist jetzt offiziell eine PWA!

## Debugging von Service Workern

Aufgrund der Art und Weise, wie wir den Service Worker eingerichtet haben, wird bei jeder Anforderung aus dem Cache gezogen, anstatt neuen Inhalt zu laden, sobald er registriert ist. Beim Entwickeln werden Sie Ihren Code häufig bearbeiten. Sie werden Ihre Änderungen wahrscheinlich regelmäßig im Browser testen wollen; wahrscheinlich bei jedem Speichern.

### Durch Aktualisieren der Versionsnummer und Durchführen eines Hard-Reset

Um einen neuen Cache zu erhalten, können Sie die [Versionsnummer](#versionsnummer) ändern und dann eine harte Browser-Aktualisierung durchführen. Die genaue Vorgehensweise für eine harte Aktualisierung hängt vom Browser und dem Betriebssystem ab:

- Auf Windows: Strg+F5, Umschalt+F5 oder Strg+Umschalt+R.
- Auf macOS: Umschalt+Befehl+R.
- Safari auf macOS: Option+Befehl+E zum Leeren des Caches, dann Option+Befehl+R.
- Auf Mobilgeräten: Gehen Sie zu den Browsereinstellungen (Android) oder den Betriebssystemeinstellungen (Samsung, iOS), unter den erweiterten Einstellungen finden Sie die Browsereinstellungen (iOS) oder die Website-Daten (Android, Samsung) und löschen Sie die Daten für CycleTracker, bevor Sie die Seite neu laden.

### Mit Entwickler-Tools

Sie möchten wahrscheinlich die Versionsnummer nicht bei jedem Speichern aktualisieren. Bis Sie bereit sind, eine neue Version Ihrer PWA zu veröffentlichen und allen eine neue Version Ihrer PWA zu geben, können Sie, anstatt die Versionsnummer bei jedem Speichern zu ändern, den Service Worker abmelden.

Sie können einen Service Worker abmelden, indem Sie auf die Schaltfläche `Abmelden` in den [Entwicklerwerkzeugen des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) klicken. Ein hartes Neuladen der Seite wird den Service Worker erneut registrieren und einen neuen Cache erstellen.

![Firefox-Entwickler-Tools-Anwendungspanel mit einem gestoppten Service Worker und einer Abmelden-Schaltfläche](firefox_sw.jpg)

In einigen Entwicklerwerkzeugen können Sie einen Service Worker manuell abmelden oder die Option "Bei jedem Neuladen aktualisieren" für Service Worker auswählen, was dazu führt, dass die Entwicklerwerkzeuge den Service Worker bei jedem Neuladen neu starten und reaktivieren, solange die Entwicklerwerkzeuge geöffnet sind. Es gibt auch eine Option, den Service Worker zu umgehen und Ressourcen aus dem Netzwerk zu laden. Dieses Panel enthält Funktionen, die wir in diesem Tutorial nicht behandeln, aber nützlich sein werden, wenn Sie fortgeschrittenere PWAs erstellen, die [Synchronisierung](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#periodic_background_sync) und [Push](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#push) enthalten, die beide im [Offline- und Hintergrundoperationen-Leitfaden](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) behandelt werden.

![Edge-Entwickler-Tools, die das Anwendungspanel auf einen Service Worker eingestellt zeigen](edge_sw.jpg)

Das Service Worker-Fenster innerhalb des Anwendungs-Panels der Entwickler-Tools bietet einen Link, um ein Popup-Fenster zu öffnen, das eine Liste aller registrierten Service Worker für den Browser enthält; nicht nur den Service Worker für die im aktuellen Tab geöffnete Anwendung. Jede Service Worker-Liste von Workern hat Schaltflächen, um diesen einzelnen Service Worker zu stoppen, zu starten oder abzumelden.

![Zwei Service Worker existieren unter localhost:8080. Sie können aus der Liste der Service Worker abgemeldet werden](edge_sw_list.jpg)

Mit anderen Worten, während Sie an Ihrer PWA arbeiten, müssen Sie die Versionsnummer für jede App-Ansicht nicht aktualisieren. Aber denken Sie daran, wenn Sie mit all Ihren Änderungen fertig sind, aktualisieren Sie den Service Worker-VERSION-Wert, bevor Sie die aktualisierte Version Ihrer PWA verteilen. Wenn Sie das vergessen, wird niemand, der Ihre App bereits installiert hat oder sogar Ihre Online-PWA besucht hat, ohne sie zu installieren, jemals Ihre Änderungen sehen können!

## Wir sind fertig!

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und die progressiv verbessert wird, um offline zu arbeiten. Wir haben eine voll funktionsfähige Webanwendung erstellt. Dann haben wir die zwei Funktionen - eine Manifestdatei und einen Service Worker - hinzugefügt, die erforderlich sind, um sie in eine PWA zu verwandeln. Wenn Sie Ihre App mit anderen teilen möchten, stellen Sie sie über eine sichere Verbindung bereit. Alternativ, wenn Sie den Zyklustracker nur selbst verwenden möchten, [richten Sie eine lokale Entwicklungsumgebung ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), [installieren Sie die PWA](/de/docs/Web/Progressive_web_apps/Guides/Installing), und genießen Sie! Sobald sie installiert ist, müssen Sie localhost nicht mehr ausführen.

Herzlichen Glückwunsch!

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
