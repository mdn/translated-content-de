---
title: "CycleTracker: Service Workers"
short-title: Offline-Unterstützung mit Service Workers
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers
l10n:
  sourceCommit: 06628bbbc0f0ef402932cbc8064fb6258b4879fe
---

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Bis jetzt haben wir das HTML, CSS, und JavaScript für CycleTracker geschrieben. Wir haben eine Manifestdatei hinzugefügt, die Farben, Icons, URLs und andere App-Features definiert. Wir haben eine funktionierende PWA! Aber sie funktioniert noch nicht offline. In diesem Abschnitt werden wir das JavaScript schreiben, das erforderlich ist, um unsere voll funktionsfähige Webanwendung in eine PWA zu konvertieren, die als eigenständige App verteilt werden kann und nahtlos offline arbeitet.

Falls Sie es noch nicht getan haben, kopieren Sie die [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/index.html), [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/style.css), [JavaScript](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/app.js), und [Manifest](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/cycletracker.json) JSON-Datei. Speichern Sie diese in Dateien namens `index.html`, `style.css`, `app.js` und `cycletracker.json`.

In diesem Abschnitt erstellen wir `sw.js`, das Service Worker-Skript, das unsere Web-App in eine PWA umwandelt. Wir haben bereits eine JavaScript-Datei; die letzte Zeile der HTML-Datei ruft die `app.js` auf. Dieses JavaScript bietet alle Funktionalitäten für die Standard-Webanwendungsfeatures. Anstatt die `sw.js`-Datei wie die `app.js`-Datei mit dem `src`-Attribut des {{HTMLElement("script")}} aufzurufen, werden wir eine Beziehung zwischen der Web-App und ihrem Service Worker herstellen, indem wir den Service Worker registrieren.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige PWA; eine progressiv erweiterte Webanwendung, die vollständig installierbar ist und auch offline funktioniert.

## Aufgaben des Service Workers

Der Service Worker sorgt dafür, dass die Anwendung offline funktioniert und stellt sicher, dass die Anwendung immer auf dem neuesten Stand ist. Um dies gut zu machen, sollte der Service Worker Folgendes beinhalten:

- Versionsnummer (oder eine andere Kennung).
- Liste der Ressourcen, die zwischengespeichert werden sollen.
- Cache-Versionsname.

Der Service Worker ist außerdem dafür verantwortlich:

- Den Cache zu installieren, wenn die App installiert wird.
- Sich selbst und die anderen Anwendungsdateien bei Bedarf zu aktualisieren.
- Zwischengespeicherte Dateien, die nicht mehr verwendet werden, zu entfernen.

Wir erreichen diese Aufgaben, indem wir auf drei Service Worker-Ereignisse reagieren, einschließlich der

- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event),
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event), und
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignisse.

### Versionsnummer

Sobald die PWA auf dem Gerät des Benutzers installiert ist, gibt es nur eine Möglichkeit, dem Browser mitzuteilen, dass aktualisierte Dateien abgerufen werden müssen: durch eine Änderung im Service Worker. Wenn eine Änderung an einer anderen PWA-Ressource vorgenommen wird - z.B. wenn das HTML aktualisiert wird, ein Fehler im CSS behoben wird, eine Funktion zu `app.js` hinzugefügt wird, ein Bild komprimiert wird, um Speicherplatz zu sparen usw. - wird der Service Worker Ihrer installierten PWA nicht wissen, dass er aktualisierte Ressourcen herunterladen muss. Erst wenn der Service Worker in irgendeiner Weise verändert wird, weiß die PWA, dass es Zeit sein könnte, den Cache zu aktualisieren; was die Aufgabe des Service Workers ist, zu initiieren.

Während das Ändern eines beliebigen Zeichens technisch ausreichen kann, ist eine PWA-Best Practice, eine Versionsnummerkonstante zu erstellen, die sequentiell aktualisiert wird, um eine Aktualisierung der Datei anzuzeigen. Das Aktualisieren einer Versionsnummer (oder eines Datums) bietet eine offizielle Bearbeitung des Service Workers, selbst wenn sich sonst nichts im Service Worker ändert, und bietet Entwicklern eine Möglichkeit, App-Versionen zu identifizieren.

#### Aufgabe

Starten Sie eine JavaScript-Datei, indem Sie eine Versionsnummer einschließen:

```js
const VERSION = "v1";
```

Speichern Sie die Datei als `sw.js`

### Liste der Offline-Ressourcen

Für eine gute Offline-Erfahrung sollte die Liste der zwischengespeicherten Dateien alle Ressourcen umfassen, die innerhalb der Offline-Erfahrung der PWA verwendet werden. Während die Manifestdatei möglicherweise eine Vielzahl von Icons in verschiedenen Größen auflistet, muss der Anwendungscache nur die Ressourcen enthalten, die von der App im Offline-Modus verwendet werden.

```js
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon-512x512.png",
];
```

Sie müssen die verschiedenen Icons, die von allen unterschiedlichen Betriebssystemen und Geräten verwendet werden, nicht in die Liste aufnehmen. Fügen Sie jedoch alle Bilder ein, die innerhalb der App verwendet werden, einschließlich Ressourcen, die auf Splash-Seiten verwendet werden, die sichtbar sein können, wenn die App langsam geladen wird oder auf Seiten des Typs "Sie müssen eine Verbindung zum Internet herstellen, um das vollständige Erlebnis zu erhalten".

Schließen Sie die Service Worker-Datei nicht in die Liste der zu cachenden Ressourcen ein.

#### Aufgabe

Fügen Sie die Liste der zu cachenden Ressourcen für die CycleTracker-PWA zu `sw.js` hinzu.

#### Beispiel Lösung

Wir nehmen die statischen Ressourcen auf, die in anderen Abschnitten dieses Tutorials erstellt wurden und die CycleTracker benötigt, um offline zu funktionieren. Unsere aktuelle `sw.js`-Datei ist:

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

Wir haben das `wheel.svg` Icon hinzugefügt, obwohl unsere aktuelle Anwendung es nicht verwendet, für den Fall, dass Sie die PWA-Benutzeroberfläche verbessern, z.B. das Logo anzeigen, wenn keine Periodendaten vorhanden sind.

### Anwendungs-Cache-Name

Wir haben eine Versionsnummer und wir haben die Dateien, die zwischengespeichert werden müssen. Bevor wir die Dateien cachen, müssen wir einen Namen für den Cache erstellen, der verwendet wird, um die statischen Ressourcen der App zu speichern. Dieser Cache-Name sollte versioniert werden, um sicherzustellen, dass bei der Aktualisierung der App ein neuer Cache erstellt wird und der alte gelöscht wird.

#### Aufgabe

Verwenden Sie die `VERSION` Nummer, um einen versionierten `CACHE_NAME` zu erstellen, und fügen Sie ihn als Konstante zu `sw.js` hinzu.

#### Beispiel Lösung

Wir benennen unseren Cache `period-tracker-` mit der aktuellen `VERSION` angehängt. Da die Konstanterklärung in einer Zeile erfolgt, setzen wir sie vor die Ressourcenarray-Konstante für eine bessere Lesbarkeit.

```js
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [
  // …
];
```

Wir haben erfolgreich unsere Konstanten deklariert; einen einzigartigen Bezeichner, die Liste der Offline-Ressourcen als Array und den Anwendungs-Cache-Namen, der sich jedes Mal ändert, wenn der Bezeichner aktualisiert wird. Lassen Sie uns nun auf das Installieren, Aktualisieren und Löschen nicht genutzter zwischengespeicherter Ressourcen konzentrieren.

### Speichern des Caches bei der PWA-Installation

Wenn ein Benutzer eine Website mit einem Service Worker installiert oder einfach besucht, wird ein `install` Ereignis im Service Worker-Bereich ausgelöst. Wir möchten auf dieses Ereignis hören und den Cache mit den statischen Ressourcen der PWA beim Installieren füllen. Jedes Mal, wenn die Version des Service Workers aktualisiert wird, wird der neue Service Worker vom Browser installiert und das Install-Ereignis tritt auf.

Ein `install` Ereignis tritt auf, wenn die App das erste Mal verwendet wird oder wenn eine neue Version des Service Workers vom Browser erkannt wird. Wenn ein älterer Service Worker durch einen neuen ersetzt wird, wird der alte Service Worker als der Service Worker der PWA verwendet, solange der neue Service Worker nicht aktiviert ist.

Nur in sicheren Kontexten verfügbar, gibt die Eigenschaft [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) ein [`CacheStorage`](/de/docs/Web/API/CacheStorage) Objekt zurück, das mit dem aktuellen Kontext assoziiert ist. Die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open) gibt ein {{jsxref("Promise")}} zurück, das sich zu dem [`Cache`](/de/docs/Web/API/Cache) Objekt auflöst, das dem als Parameter übergebenen Namen des Caches entspricht.

Die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) nimmt ein Array von URLs als Parameter, ruft diese ab und fügt dann die Antworten zum angegebenen Cache hinzu. Die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) informiert den Browser darüber, dass noch Arbeit im Gange ist, bis das Versprechen eintrifft, und er den Service Worker nicht beenden soll, wenn er möchte, dass diese Arbeit abgeschlossen wird. Während Browser für das Ausführen und Beenden von Service Workers verantwortlich sind, ist die `waitUntil` Methode eine Aufforderung an den Browser, den Service Worker nicht zu beenden, während eine Aufgabe ausgeführt wird.

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

Hinzufügen eines Install-Event-Listeners, der die in `APP_STATIC_RESOURCES` aufgeführten Dateien abruft und in den Cache namens `CACHE_NAME` speichert.

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

Wie erwähnt, wenn ein vorhandener Service Worker durch einen neuen ersetzt wird, wird der vorhandene Service Worker solange als Service Worker der PWA verwendet, bis der neue Service Worker aktiviert ist. Wir verwenden das `activate` Ereignis, um alte Caches zu löschen, um zu vermeiden, dass uns der Speicherplatz ausgeht. Wir iterieren über benannte [`Cache`](/de/docs/Web/API/Cache) Objekte, löschen alle außer dem aktuellen und setzen dann den Service Worker als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für die PWA.

Wir hören auf das aktuelle globale Gültigkeitsbereichsereignis [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) des Service Workers.

Wir erhalten die Namen der vorhandenen benannten Caches. Wir verwenden die Methode [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys) (wieder über die Eigenschaft `CacheStorage` auf `WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)) die ein {{jsxref("Promise")}} zurückgibt, das sich zu einem Array auflöst, das Zeichenfolgen enthält, die allen benannten [`Cache`](/de/docs/Web/API/Cache) Objekten in der Reihenfolge ihrer Erstellung entsprechen.

Wir verwenden die Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um diese Liste von Cache-Namen-Versprechen zu durchlaufen. Die Methode `all()` nimmt als Eingabe eine Liste von iterierbaren Versprechen und gibt ein einzelnes `Promise` zurück. Für jeden Namen in der Liste der benannten Caches überprüfen wir, ob der Cache der derzeit aktive Cache ist. Wenn nicht, löschen wir ihn mit der Methode `Cache` [`delete()`](/de/docs/Web/API/Cache/delete).

Die letzte Zeile, das `await clients.claim()` verwendet die Methode [`claim()`](/de/docs/Web/API/Clients/claim) der [`Clients`](/de/docs/Web/API/Clients) Schnittstelle, um unserem Service Worker zu ermöglichen, sich selbst als Controller für unseren Client zu setzen; der "Client" bezieht sich auf eine laufende Instanz der PWA. Die Methode `claim()` ermöglicht es dem Service Worker, die "Kontrolle" über alle Clients innerhalb seines Gültigkeitsbereichs zu übernehmen. Auf diese Weise müssen nicht alle Clients im selben Gültigkeitsbereich neu geladen werden.

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

Fügen Sie den obigen `activate` EventListener zu Ihrer `sw.js` Datei hinzu.

### Das Fetch-Ereignis

Wir können das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Ereignis nutzen, um zu verhindern, dass eine installierte PWA Anfragen stellt, wenn der Benutzer offline ist. Durch das Überwachen des Fetch-Ereignisses können alle Anfragen abgefangen und mit zwischengespeicherten Antworten beantwortet werden, anstatt ins Netzwerk zu gehen. Die meisten Anwendungen erfordern dieses Verhalten nicht. Tatsächlich wollen viele Geschäftsmodelle, dass Benutzer regelmäßig Serveranfragen stellen, um Tracking und Marketingzwecke zu unterstützen. Daher mag das Abfangen von Anfragen für einige Anwendungen ein Anti-Pattern darstellen. Um die Privatsphäre unserer CycleTracker-App zu verbessern, möchten wir jedoch nicht, dass die App unnötige Serveranfragen stellt.

Da unsere PWA aus einer einzigen Seite besteht, verwenden wir für Seitennavigationsanfragen die `index.html` Startseite. Es gibt keine anderen Seiten und wir möchten niemals zum Server gehen. Wenn die `mode`-Eigenschaft, die im `Request` der Fetch-API](/de/docs/Web/API/Request) verwendet wird, auf `navigate` steht, bedeutet dies, dass nach einer Webseite gesucht wird, verwenden wir die `respondWith()` Methode des FetchEreignisses, um die Standardbehandlung des Browsers zu verhindern. Dabei liefern wir unser eigenes Antwortversprechen, indem wir die Methode [`caches.match()`](/de/docs/Web/API/CacheStorage/match) verwenden.

Für alle anderen Anfragemodi öffnen wir die Caches, wie im Installationsereignis beschrieben, und geben die Anfrage an dieselbe `match()` Methode weiter. Diese prüft, ob die Anfrage ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Wenn ja, gibt sie die zwischengespeicherte Antwort zurück. Wenn nicht, geben wir eine [404-Status](/de/docs/Web/HTTP/Reference/Status/404)-Antwort zurück.

Die Verwendung des [`Response()`](/de/docs/Web/API/Response/Response) Konstruktors, um einen `null` Body und einen `status: 404` als Optionen zu übergeben, bedeutet nicht, dass es einen Fehler in unserer PWA gibt. Vielmehr sollte alles, was wir brauchen, bereits im Cache sein, und wenn nicht, gehen wir nicht zum Server, um dieses Nicht-Problem zu lösen.

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

Ihre `sw.js` Datei sollte wie das folgende JavaScript aussehen. Beachten Sie, dass beim Aktualisieren einer der in `APP_STATIC_RESOURCES` aufgeführten Ressourcen, nur die Konstante oder Funktion `VERSION` innerhalb dieses Service Workers aktualisiert werden muss.

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

Beim Aktualisieren eines Service Workers muss die `VERSION` Konstante nicht aktualisiert werden, da jede Änderung im Inhalt des Service Worker-Skripts selbst den Browser zum Installieren des neuen Service Workers veranlasst. Es ist jedoch eine gute Praxis, die Versionsnummer zu aktualisieren, da es Entwicklern, einschließlich Ihnen selbst, ermöglicht, zu sehen, welche Version des Service Workers derzeit im Browser läuft, indem Sie [den Namen des Caches im Anwendungstool überprüfen](#mit_entwicklertools) (oder im Quellen-Tool).

> [!NOTE]
> Die Aktualisierung von `VERSION` ist wichtig, wenn Änderungen an einer Anwendungsressource vorgenommen werden, einschließlich der CSS, HTML, und JS-Code sowie Bildressourcen. Die Versionsnummer oder jede Änderung an der Service Worker-Datei ist die einzige Möglichkeit, ein Update der App für Ihre Benutzer zu erzwingen.

## Registrieren des Service Workers

Nun, da unser Service Worker-Skript vollständig ist, müssen wir den Service Worker registrieren.

Wir beginnen damit zu überprüfen, ob der Browser die [Service Worker API](/de/docs/Web/API/Service_Worker_API) unterstützt, indem wir [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#the_concept_of_feature_detection) für die Präsenz der [`serviceWorker`](/de/docs/Web/API/ServiceWorker) Eigenschaft auf dem globalen [`navigator`](/de/docs/Web/API/Navigator) Objekt verwenden:

```js
// Does "serviceWorker" exist
if ("serviceWorker" in navigator) {
  // If yes, we register the service worker
}
```

Wenn die Eigenschaft unterstützt wird, können wir dann die [`register()`](/de/docs/Web/API/ServiceWorkerContainer/register) Methode der Service Worker API's [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Schnittstelle verwenden.

```js
if ("serviceWorker" in navigator) {
  // Register the app's service worker
  // Passing the filename where that worker is defined.
  navigator.serviceWorker.register("sw.js");
}
```

Obwohl das oben Genannte für die Bedürfnisse der CycleTracker-App ausreicht, gibt die `register()` Methode ein {{jsxref("Promise")}} zurück, das sich auf ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Objekt auflöst. Für eine robustere Anwendung sollten Sie die Registrierung auf Fehler überprüfen:

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

Öffnen Sie `index.html` und fügen Sie das folgende {{HTMLElement("script")}} nach dem Skript hinzu, um `app.js` einzubinden und vor dem schließenden `</body>`-Tag.

```html
<!-- Register the app's service worker. -->
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Sie können die voll funktionsfähige [CycleTracker Perioden-Tracking-Web-App](https://mdn.github.io/pwa-examples/cycletracker/service_workers/) ausprobieren und den [Source-Code der Web-App](https://github.com/mdn/pwa-examples/tree/main/cycletracker/service_workers) auf GitHub ansehen. Ja, es funktioniert, und es ist jetzt offiziell eine PWA!

## Debugging von Service Workern

Aufgrund der Art und Weise, wie wir den Service Worker eingerichtet haben, werden nach der Registrierung alle Anfragen aus dem Cache geladen, anstatt neue Inhalte zu laden. Beim Entwickeln werden Sie Ihren Code häufig bearbeiten. Sie wollen wahrscheinlich regelmäßig Ihre Bearbeitungen im Browser testen; wahrscheinlich bei jedem Speichern.

### Durch Aktualisieren der Versionsnummer und ein Hard Reset

Um einen neuen Cache zu erhalten, können Sie die [Versionsnummer](#versionsnummer) ändern und dann einen Hard-Refresh des Browsers durchführen. Die Art und Weise, wie Sie einen Hard-Refresh durchführen, hängt vom Browser und dem Betriebssystem ab:

- Auf Windows: Ctrl+F5, Shift+F5, oder Ctrl+Shift+R.
- Auf macOS: Shift+Command+R.
- Safari auf macOS: Option+Command+E, um den Cache zu leeren, dann Option+Command+R.
- Auf mobilen Geräten: Gehen Sie zu den Einstellungen des Browsers (Android) oder des Betriebssystems (Samsung, iOS), finden Sie unter den erweiterten Einstellungen den Browser (iOS) oder die Website-Daten (Android, Samsung), und löschen Sie die Daten für CycleTracker, bevor Sie die Seite neu laden.

### Mit Entwicklertools

Wahrscheinlich möchten Sie die Versionsnummer nicht bei jedem Speichern aktualisieren. Bis Sie bereit sind, eine neue Version Ihrer PWA in Produktion zu bringen und allen eine neue Version Ihrer PWA zu geben, können Sie den Service Worker anstelle der Änderung der Versionsnummer bei jedem Speichern abmelden.

Sie können einen Service Worker abmelden, indem Sie in den [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) auf die Schaltfläche `abmelden` klicken. Durch ein hartes Neuladen der Seite wird der Service Worker erneut registriert und ein neuer Cache erstellt.

![Firefox-Entwicklerwerkzeuge Anwendungsbereich mit einem gestoppten Service Worker und einer Abmelde-Schaltfläche](firefox_sw.jpg)

In einigen Entwicklertools können Sie einen Service Worker manuell abmelden oder die Option "Aktualisieren beim Neuladen" auswählen. Diese setzt die Entwicklertools so, dass sie den Service Worker bei jedem Neuladen zurücksetzen und erneut aktivieren, solange die Entwicklertools geöffnet sind. Es gibt auch eine Option, um den Service Worker zu umgehen und Ressourcen aus dem Netzwerk zu laden. Dieses Panel enthält Funktionen, die wir in diesem Tutorial nicht behandeln, aber hilfreich sind, wenn Sie fortgeschrittenere PWAs erstellen, die [Synchronisation](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#periodic_background_sync) und [Push](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#push) beinhalten, die beide im [Offline- und Hintergrundbetriebsleitfaden](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) behandelt werden.

![Edge-Entwicklerwerkzeuge zeigt das Anwendungsfenster mit einem Service Worker](edge_sw.jpg)

Das Service Worker Fenster innerhalb des Anwendungsfensters der DevTools bietet einen Link, um ein Popup-Fenster zu öffnen, das eine Liste aller registrierten Service Worker für den Browser enthält; nicht nur den Service Worker für die Anwendung, die im aktuellen Tab geöffnet ist. Jede Service Worker Liste von Workern hat Schaltflächen, um diesen individuellen Service Worker zu stoppen, zu starten oder abzumelden.

![Zwei Service Worker existieren unter localhost:8080. Sie können aus der Liste der Service Worker abgemeldet werden](edge_sw_list.jpg)

Mit anderen Worten, während Sie an Ihrer PWA arbeiten, müssen Sie nicht die Versionsnummer für jedes App-Ansicht aktualisieren. Aber denken Sie daran, wenn Sie mit allen Änderungen fertig sind, den `VERSION` Wert des Service Workers zu aktualisieren, bevor Sie die aktualisierte Version Ihrer PWA verteilen. Wenn Sie es vergessen, wird niemand, der Ihre App bereits installiert hat oder sogar Ihre Online-PWA ohne Installation besucht hat, jemals Ihre Änderungen sehen!

## Wir sind fertig!

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und die progressiv so erweitert ist, dass sie offline funktioniert. Wir haben eine voll funktionsfähige Webanwendung erstellt. Wir haben dann die zwei Features hinzugefügt - eine Manifestdatei und einen Service Worker - die erforderlich sind, um sie in eine PWA zu konvertieren. Wenn Sie Ihre App mit anderen teilen möchten, stellen Sie sie über eine sichere Verbindung bereit. Alternativ, wenn Sie den Zyklus-Tracker nur selbst verwenden möchten, [erstellen Sie eine lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), [installieren Sie die PWA](/de/docs/Web/Progressive_web_apps/Guides/Installing), und genießen Sie sie! Sobald installiert, müssen Sie localhost nicht mehr ausführen.

Herzlichen Glückwunsch!

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
