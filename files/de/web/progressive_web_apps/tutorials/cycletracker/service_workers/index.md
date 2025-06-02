---
title: "CycleTracker: Service Workers"
short-title: Offline-Unterstützung mithilfe von Service Workers
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Bisher haben wir das HTML, CSS und JavaScript für CycleTracker erstellt. Wir haben eine Manifestdatei hinzugefügt, die Farben, Symbole, die URL und andere App-Funktionen definiert. Wir haben eine funktionierende PWA! Aber sie funktioniert noch nicht offline. In diesem Abschnitt schreiben wir das JavaScript, das erforderlich ist, um unsere voll funktionsfähige Webanwendung in eine PWA zu verwandeln, die als eigenständige App vertrieben werden kann und nahtlos offline arbeitet.

Wenn Sie dies noch nicht getan haben, kopieren Sie die [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/index.html), [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/style.css), [JavaScript](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/app.js) und [Manifest](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/cycletracker.json) JSON-Datei. Speichern Sie sie unter den Dateinamen `index.html`, `style.css`, `app.js` und `cycletracker.json`.

In diesem Abschnitt erstellen wir `sw.js`, das Service Worker Skript, das unsere Web-App in eine PWA umwandeln wird. Wir haben bereits eine JavaScript-Datei; die letzte Zeile der HTML-Datei ruft `app.js` auf. Dieses JavaScript bietet alle Funktionen für die Standard-Webanwendungsfunktionen. Anstatt die Datei `sw.js` wie `app.js` mit dem `src`-Attribut von {{HTMLElement("script")}} aufzurufen, erstellen wir eine Beziehung zwischen der Web-App und ihrem Service Worker, indem wir den Service Worker registrieren.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige PWA; eine progressiv verbesserte Webanwendung, die vollständig installierbar ist und auch funktioniert, wenn der Benutzer offline ist.

## Aufgaben des Service Workers

Der Service Worker sorgt dafür, dass die Anwendung offline funktioniert und gleichzeitig sicherstellt, dass die Anwendung immer auf dem neuesten Stand ist. Dazu sollte der Service Worker Folgendes umfassen:

- Versionsnummer (oder andere Kennung).
- Liste der zu cachenden Ressourcen.
- Name der Cache-Version.

Der Service Worker ist auch verantwortlich für:

- Installation des Caches, wenn die App installiert wird.
- Bei Bedarf Aktualisierung von sich selbst und anderen Anwendungsdateien.
- Entfernen von zwischengespeicherten Dateien, die nicht mehr verwendet werden.

Wir erreichen diese Aufgaben, indem wir auf drei Service-Worker-Ereignisse reagieren, darunter die

- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event),
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) und
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignisse.

### Versionsnummer

Wenn die PWA auf dem Computer des Benutzers installiert ist, ist die einzige Möglichkeit, den Browser darüber zu informieren, dass aktualisierte Dateien abgerufen werden müssen, eine Änderung im Service Worker. Wenn eine Änderung an einer anderen PWA-Ressource vorgenommen wird — wenn das HTML aktualisiert wird, ein Fehler im CSS behoben wird, eine Funktion zu `app.js` hinzugefügt wird, ein Bild komprimiert wird, um die Dateigröße zu reduzieren etc. — weiß der Service Worker Ihrer installierten PWA nicht, dass er aktualisierte Ressourcen herunterladen muss. Nur wenn der Service Worker in irgendeiner Weise verändert wird, weiß die PWA, dass es Zeit sein könnte, den Cache zu aktualisieren, was die Aufgabe des Service Workers ist, zu initiieren.

Obwohl das Ändern eines beliebigen Zeichens technisch ausreichen mag, ist es eine bewährte Praxis für PWAs, eine Versionsnummer-Konstante zu erstellen, die sequentiell aktualisiert wird, um eine Aktualisierung der Datei anzuzeigen. Eine Versionsnummer (oder ein Datum) zu aktualisieren, bietet eine offizielle Bearbeitung des Service Workers, selbst wenn sich sonst nichts am Service Worker selbst ändert, und bietet Entwicklern eine Möglichkeit, App-Versionen zu identifizieren.

#### Aufgabe

Starten Sie eine JavaScript-Datei, indem Sie eine Versionsnummer einfügen:

```js
const VERSION = "v1";
```

Speichern Sie die Datei als `sw.js`.

### Offline-Ressourcenliste

Für ein gutes Offline-Erlebnis sollte die Liste der zwischengespeicherten Dateien alle Ressourcen enthalten, die innerhalb der Offline-Erfahrung der PWA verwendet werden. Während die Manifestdatei eine Vielzahl von Symbolen in verschiedenen Größen auflisten kann, muss der Anwendungscache nur die im Offline-Modus verwendeten Assets enthalten.

```js
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon-512x512.png",
];
```

Sie müssen nicht die verschiedenen Symbole einfügen, die von allen verschiedenen Betriebssystemen und Geräten verwendet werden. Aber fügen Sie alle Bilder ein, die innerhalb der App verwendet werden, einschließlich der Assets, die auf möglicherweise sichtbaren Splash-Seiten verwendet werden, falls die App langsam geladen wird oder auf Seiten des Typs "Sie müssen eine Internetverbindung herstellen, um das volle Erlebnis zu erhalten".

Schließen Sie die Service Worker Datei nicht in die Liste der zu cachenden Ressourcen ein.

#### Aufgabe

Fügen Sie die Liste der zu cachenden Ressourcen für die CycleTracker PWA in `sw.js` ein.

#### Beispiel Lösung

Wir fügen die statischen Ressourcen ein, die in anderen Abschnitten dieses Tutorials erstellt wurden und die CycleTracker benötigt, um offline zu funktionieren. Unsere aktuelle `sw.js` Datei lautet:

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

Wir haben das `wheel.svg` Symbol aufgenommen, auch wenn unsere aktuelle Anwendung es nicht verwendet, für den Fall, dass Sie die PWA-Benutzeroberfläche verbessern, wie z.B. das Anzeigen des Logos, wenn keine Periodendaten vorhanden sind.

### Anwendungs-Cachename

Wir haben eine Versionsnummer und die Dateien, die zwischengespeichert werden müssen. Bevor wir die Dateien cachen, müssen wir einen Namen für den Cache erstellen, der verwendet wird, um die statischen Ressourcen der App zu speichern. Dieser Cachename sollte versioniert sein, um sicherzustellen, dass beim Aktualisieren der App ein neuer Cache erstellt und der alte gelöscht wird.

#### Aufgabe

Verwenden Sie die `VERSION` Nummer, um einen versionierten `CACHE_NAME` zu erstellen und fügen Sie ihn als Konstante zu `sw.js` hinzu.

#### Beispiel Lösung

Wir benennen unseren Cache `period-tracker-` mit der aktuellen `VERSION` als Anhang. Da die Konstanterklärung in einer einzigen Zeile erfolgt, setzen wir sie vor das Array der Ressourcen-Konstanten für eine bessere Lesbarkeit.

```js
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [
  // …
];
```

Wir haben erfolgreich unsere Konstanten deklariert; ein eindeutiger Bezeichner, die Liste der Offline-Ressourcen als Array und der Cache-Name der Anwendung, der sich jedes Mal ändert, wenn der Bezeichner aktualisiert wird. Lassen Sie uns nun darauf konzentrieren, nicht verwendete zwischengespeicherte Ressourcen zu installieren, zu aktualisieren und zu löschen.

### Speichern des Caches bei der PWA-Installation

Wenn ein Benutzer eine Website mit einem Service Worker installiert oder einfach besucht, wird im Service Worker Scope ein `install` Ereignis ausgelöst. Wir möchten auf dieses Ereignis hören und den Cache mit den statischen Ressourcen der PWA bei der Installation auffüllen. Jedes Mal, wenn die Version des Service Workers aktualisiert wird, installiert der Browser den neuen Service Worker und das Installationsereignis tritt auf.

Das `install` Ereignis tritt ein, wenn die App zum ersten Mal verwendet wird oder wenn ein neuer Service Worker vom Browser erkannt wird. Wenn ein älterer Service Worker durch einen neuen ersetzt wird, wird der alte Service Worker als der Service Worker der PWA verwendet, bis der neue Service Worker aktiviert wird.

Nur in sicheren Kontexten verfügbar, gibt die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft ein [`CacheStorage`](/de/docs/Web/API/CacheStorage) Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open) gibt ein {{jsxref("Promise")}} zurück, das sich in das [`Cache`](/de/docs/Web/API/Cache) Objekt auflöst, dessen Name als Parameter übergeben wird.

Die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) nimmt ein Array von URLs als Parameter, ruft sie ab und fügt dann die Antworten dem angegebenen Cache hinzu. Die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) teilt dem Browser mit, dass die Arbeit andauert, bis das Promise abgeschlossen ist, und dass er den Service Worker nicht beenden sollte, wenn er möchte, dass diese Arbeit abgeschlossen wird. Während Browser für die Ausführung und Beendigung von Service-Workern bei Bedarf verantwortlich sind, ist die `waitUntil` Methode eine Anfrage an den Browser, den Service Worker nicht zu beenden, während eine Aufgabe ausgeführt wird.

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

Fügen Sie einen Installationsereignis-Listener hinzu, der die in `APP_STATIC_RESOURCES` aufgeführten Dateien in den Cache mit dem Namen `CACHE_NAME` abruft und speichert.

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

### Aktualisieren der PWA und Löschen von alten Caches

Wie bereits erwähnt, wird der bestehende Service Worker als der Service Worker der PWA verwendet, wenn er durch einen neuen ersetzt wird, bis der neue Service Worker aktiviert wird. Wir verwenden das `activate` Ereignis, um alte Caches zu löschen und Speicherplatz zu sparen. Wir iterieren über benannte [`Cache`](/de/docs/Web/API/Cache) Objekte, löschen alle bis auf das aktuelle, und legen dann den Service Worker als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für die PWA fest.

Wir hören auf das globale Scope [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignis des aktuellen Service Workers.

Wir erhalten die Namen der vorhandenen benannten Caches. Wir verwenden die Methode [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys) (wieder Zugriff auf `CacheStorage` über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft), die ein {{jsxref("Promise")}} zurückgibt, das sich in ein Array auflöst, das Zeichenfolgen enthält, die allen benannten [`Cache`](/de/docs/Web/API/Cache) Objekten in der Reihenfolge entsprechen, in der sie erstellt wurden.

Wir verwenden die Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um durch diese Liste von Cache-Namen-Promises zu iterieren. Die Methode `all()` nimmt als Eingabe eine Liste von iterable Promises und gibt ein einzelnes `Promise` zurück. Für jeden Namen in der Liste der benannten Caches überprüfen wir, ob der Cache der aktuell aktive Cache ist. Wenn nicht, löschen wir ihn mit der `Cache` Methode [`delete()`](/de/docs/Web/API/Cache/delete).

Die letzte Zeile, das `await clients.claim()` verwendet die Methode [`claim()`](/de/docs/Web/API/Clients/claim) der [`Clients`](/de/docs/Web/API/Clients) Schnittstelle, um unserem Service Worker zu ermöglichen, sich selbst als Controller für unseren Client festzulegen; der "Client" bezieht sich auf eine laufende Instanz der PWA. Die Methode `claim()` ermöglicht es dem Service Worker, "Kontrolle zu beanspruchen" über alle Clients innerhalb seines Scopes. Auf diese Weise müssen Clients, die im gleichen Scope geladen wurden, nicht neu geladen werden.

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

Fügen Sie den obigen `activate` eventListener zu Ihrer `sw.js` Datei hinzu.

### Das Fetch-Ereignis

Wir können das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Ereignis nutzen, um eine installierte PWA daran zu hindern, Anfragen zu stellen, wenn der Benutzer online ist. Indem wir auf das Fetch-Ereignis hören, können wir alle Anfragen abfangen und mit zwischengespeicherten Antworten anstatt mit Netzwerkanfragen antworten. Die meisten Anwendungen benötigen dieses Verhalten nicht. Tatsächlich möchten viele Geschäftsmodelle, dass Benutzer regelmäßig Serveranfragen stellen, um Tracking und Marketingzwecken nachzukommen. Das Abfangen von Anfragen mag daher für einige eine Anti-Pattern sein, um die Privatsphäre unserer CycleTracker-App zu verbessern, wollen wir jedoch nicht, dass die App unnötige Serveranfragen stellt.

Da unsere PWA aus einer einzigen Seite besteht, kehren wir bei Seiten-Navigationsanfragen zur Startseite `index.html` zurück. Es gibt keine anderen Seiten und wir wollen niemals zum Server gehen. Wenn die read-only [`mode`](/de/docs/Web/API/Request/mode) Eigenschaft der Fetch API's [`Request`](/de/docs/Web/API/Request) auf `navigate` gesetzt ist, was bedeutet, dass sie nach einer Webseite sucht, verwenden wir die Methode [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) des FetchEvent, um das Standard-Fetch-Verhalten des Browsers zu verhindern, indem wir unser eigenes Promise angeben, das die Methode [`caches.match()`](/de/docs/Web/API/CacheStorage/match) verwendet.

Für alle anderen Anfragemodi öffnen wir die Caches, wie in der [Installationsereignis-Antwort](#speichern_des_caches_bei_der_pwa-installation) beschrieben, und übergeben einfach die Ereignisanfrage an die gleiche `match()` Methode. Sie prüft, ob die Anfrage ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Wenn ja, gibt sie die zwischengespeicherte Antwort zurück. Wenn nicht, geben wir eine [404 Status](/de/docs/Web/HTTP/Reference/Status/404) als Antwort zurück.

Durch den Konstruktor [`Response()`](/de/docs/Web/API/Response/Response) eine `null` Körper und einen `status: 404` als Optionen zu übergeben, bedeutet nicht, dass es einen Fehler in unserer PWA gibt. Vielmehr sollte alles, was wir brauchen, bereits im Cache sein, und wenn nicht, werden wir nicht zum Server gehen, um dieses Nicht-Problem zu lösen.

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

Ihre `sw.js` Datei sollte ähnlich dem folgenden JavaScript aussehen. Beachten Sie, dass beim Aktualisieren einer der in der `APP_STATIC_RESOURCES` Liste aufgeführten Ressourcen nur die Konstante oder Funktion, die in diesem Service Worker aktualisiert werden muss, der Wert von `VERSION` ist.

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

Beim Aktualisieren eines Service Workers muss die KONSTANTE `VERSION` nicht aktualisiert werden, da jede Änderung am Inhalt des Service Worker Skripts selbst den Browser dazu veranlasst, den neuen Service Worker zu installieren. Es ist jedoch eine gute Praxis, die Versionsnummer zu aktualisieren, da es Entwicklern, einschließlich Ihnen selbst, erleichtert zu sehen, welche Version des Service Workers derzeit im Browser läuft, indem Sie [den Namen des Cache im Anwendungstool überprüfen](#mit_entwicklertools) (oder im Quellenwerkzeug).

> [!NOTE]
> Das Aktualisieren von VERSION ist wichtig, wenn Änderungen an einer Anwendungsressource vorgenommen werden, einschließlich des CSS, HTML und JS Codes und der Bild-Assets. Die Versionsnummer oder jede Änderung an der Service Worker Datei ist die einzige Möglichkeit, ein Update der App für Ihre Benutzer zu erzwingen.

## Service Worker registrieren

Jetzt, da unser Service Worker Skript komplett ist, müssen wir den Service Worker registrieren.

Wir beginnen damit, dass wir überprüfen, ob der Browser die [Service Worker API](/de/docs/Web/API/Service_Worker_API) unterstützt, indem wir eine [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#the_concept_of_feature_detection) für das Vorhandensein der [`serviceWorker`](/de/docs/Web/API/ServiceWorker) Eigenschaft auf dem globalen [`navigator`](/de/docs/Web/API/Navigator) Objekt durchführen:

```js
// Does "serviceWorker" exist
if ("serviceWorker" in navigator) {
  // If yes, we register the service worker
}
```

Wenn die Eigenschaft unterstützt wird, können wir dann die Methode [`register()`](/de/docs/Web/API/ServiceWorkerContainer/register) der Service Worker API-Schnittstelle [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) verwenden.

```js
if ("serviceWorker" in navigator) {
  // Register the app's service worker
  // Passing the filename where that worker is defined.
  navigator.serviceWorker.register("sw.js");
}
```

Während das oben Genannte für die Bedürfnisse der CycleTracker-App ausreichend ist, gibt die Methode `register()` tatsächlich ein {{jsxref("Promise")}} zurück, das sich in ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Objekt auflöst. Für eine robustere Anwendung, überprüfen Sie die Registrierung auf Fehler:

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

Öffnen Sie `index.html` und fügen Sie das folgende {{HTMLElement("script")}} nach dem Skript zum Einschließen von `app.js` und vor dem schließenden `</body>`-Tag hinzu.

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

Aufgrund der Art und Weise, wie wir den Service Worker eingerichtet haben, wird jede Anfrage, sobald er registriert ist, aus dem Cache abgerufen, anstatt neue Inhalte zu laden. Während der Entwicklung werden Sie Ihren Code häufig bearbeiten. Wahrscheinlich möchten Sie Ihre Änderungen regelmäßig im Browser testen; wahrscheinlich bei jedem Speichern.

### Durch Aktualisierung der Versionsnummer und Ausführen eines Hard-Resets

Um einen neuen Cache zu erhalten, können Sie die [Versionsnummer](#versionsnummer) ändern und dann eine harte Browser-Aktualisierung durchführen. Wie ein Hard-Refresh durchgeführt wird, hängt vom Browser und Betriebssystem ab:

- Auf Windows: Strg+F5, Umschalt+F5 oder Strg+Umschalt+R.
- Auf macOS: Umschalt+Command+R.
- Safari auf macOS: Option+Command+E um den Cache zu leeren, dann Option+Command+R.
- Auf Mobilgeräten: Gehen Sie zu den Einstellungen des Browsers (Android) oder Betriebssystems (Samsung, iOS), finden Sie unter den erweiterten Einstellungen die Browsereinstellungen (iOS) oder die Website-Daten (Android, Samsung) der Website-Einstellungen und löschen Sie die Daten für CycleTracker, bevor Sie die Seite neu laden.

### Mit Entwicklertools

Sie wollen wahrscheinlich nicht die Versionsnummer bei jedem Speichern aktualisieren. Bis Sie bereit sind, eine neue Version Ihrer PWA in die Produktion zu bringen und allen Benutzern eine neue Version Ihrer PWA zu geben, können Sie anstatt der Änderung der Versionsnummer bei jeder Speicherung den Service Worker abmelden.

Sie können einen Service Worker abmelden, indem Sie auf die Schaltfläche `abmelden` in den [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) klicken. Ein Hard-Refresh der Seite wird den Service Worker neu registrieren und einen neuen Cache erstellen.

![Firefox Entwicklertools Anwendungsfenster mit einem gestoppten Service Worker und einer Abmelde-Schaltfläche](firefox_sw.jpg)

In einigen Entwicklertools können Sie einen Service Worker manuell abmelden, oder Sie können die Option "bei jedem Neuladen aktualisieren" für den Service Worker auswählen, die die Entwicklertools so einstellt, dass der Service Worker bei jedem Neuladen zurückgesetzt und erneut aktiviert wird, solange die Entwicklertools geöffnet sind. Es gibt auch eine Option, den Service Worker zu umgehen und Ressourcen aus dem Netzwerk zu laden. Dieses Feld enthält Funktionen, die wir in diesem Tutorial nicht abdecken, die jedoch hilfreich sein werden, wenn Sie fortgeschrittenere PWAs erstellen, die [Synchronisierung](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#periodic_background_sync) und [Push](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#push) beinhalten, die beide im [Leitfaden für Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) behandelt werden.

![Edge Entwicklertools, die das Anwendungsfeld mit einem eingestellten Service Worker zeigen](edge_sw.jpg)

Das Service Worker-Fenster innerhalb des Anwendungsfensters der DevTools bietet einen Link zu einem Popup-Fenster, das eine Liste aller registrierten Service Worker für den Browser enthält; nicht nur den Service Worker für die in der aktuellen Registerkarte geöffnete Anwendung. Jede Liste von Service Workern hat Schaltflächen zum Stoppen, Starten oder Abmelden dieses einzelnen Service Workers.

![Zwei Service Worker existieren auf localhost:8080. Sie können aus der Liste der Service Worker abgemeldet werden](edge_sw_list.jpg)

Mit anderen Worten, während Sie an Ihrer PWA arbeiten, müssen Sie nicht die Versionsnummer für jede App-Ansicht aktualisieren. Aber denken Sie daran, wenn Sie mit allen Änderungen fertig sind, aktualisieren Sie den Wert der `VERSION` des Service Workers, bevor Sie die aktualisierte Version Ihrer PWA verteilen. Wenn Sie es vergessen, wird niemand, der Ihre App bereits installiert hat oder sogar Ihre Online-PWA besucht hat, sie jemals installieren können, um Ihre Änderungen zu sehen!

## Wir sind fertig!

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und die progressiv verbessert wird, um offline zu arbeiten. Wir haben eine voll funktionsfähige Webanwendung erstellt. Wir haben dann die beiden Merkmale hinzugefügt - eine Manifestdatei und einen Service Worker - die erforderlich sind, um sie in eine PWA zu verwandeln. Wenn Sie Ihre App mit anderen teilen möchten, machen Sie sie über eine sichere Verbindung verfügbar. Alternativ, wenn Sie den Zyklustracker nur selbst verwenden möchten, [erstellen Sie eine lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), [installieren Sie die PWA](/de/docs/Web/Progressive_web_apps/Guides/Installing), und genießen Sie! Sobald sie installiert ist, müssen Sie localhost nicht mehr ausführen.

Herzlichen Glückwunsch!

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
