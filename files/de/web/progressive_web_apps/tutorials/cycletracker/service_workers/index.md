---
title: "CycleTracker: Service Workers"
short-title: Offline-Unterstützung mit Service Workern
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers
l10n:
  sourceCommit: 57d4a3ab62517528c9642489e9dbdbec3e9c319e
---

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Bisher haben wir das HTML, CSS und JavaScript für CycleTracker geschrieben. Wir haben eine Manifestdatei hinzugefügt, die Farben, Icons, URL und andere App-Funktionen definiert. Wir haben eine funktionierende PWA! Aber sie funktioniert noch nicht offline. In diesem Abschnitt werden wir das JavaScript schreiben, das erforderlich ist, um unsere voll funktionsfähige Webanwendung in eine PWA zu verwandeln, die als eigenständige App verteilt werden kann und nahtlos offline arbeitet.

Falls Sie dies noch nicht getan haben, kopieren Sie die [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/index.html), [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/style.css), [JavaScript](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/app.js) und die [Manifest](https://github.com/mdn/pwa-examples/blob/main/cycletracker/manifest_file/cycletracker.json) JSON-Datei. Speichern Sie sie in Dateien namens `index.html`, `style.css`, `app.js` und `cycletracker.json`.

In diesem Abschnitt erstellen wir `sw.js`, das Service Worker Skript, das unsere Web-App in eine PWA verwandelt. Wir haben bereits eine JavaScript-Datei; die letzte Zeile in der HTML-Datei ruft die `app.js` auf. Dieses JavaScript bietet alle Funktionen für die Standard-Webanwendungs-Features. Statt die `sw.js` Datei wie die `app.js` Datei mit dem `src`-Attribut des {{HTMLElement("script")}} aufzurufen, werden wir eine Beziehung zwischen der Web-App und ihrem Service Worker herstellen, indem wir den Service Worker registrieren.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige PWA; eine progressiv erweiterte Webanwendung, die vollständig installierbar ist und auch dann funktioniert, wenn der Nutzer offline ist.

## Service Worker Verantwortlichkeiten

Der Service Worker sorgt dafür, dass die Anwendung offline funktioniert und stellt sicher, dass die Anwendung immer auf dem neuesten Stand ist. Um dies gut zu bewerkstelligen, sollte der Service Worker Folgendes enthalten:

- Versionsnummer (oder anderen Bezeichner).
- Liste der zu cachenden Ressourcen.
- Cache-Versionsname.

Der Service Worker ist auch verantwortlich für:

- Installation des Caches bei der Installation der App.
- Aktualisieren von sich selbst und den anderen Anwendungsdateien bei Bedarf.
- Entfernen von gecachten Dateien, die nicht mehr verwendet werden.

Wir erreichen diese Aufgaben, indem wir auf drei Service Worker-Ereignisse reagieren, einschließlich der

- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event),
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) und
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignisse.

### Versionsnummer

Sobald die PWA auf dem Rechner des Benutzers installiert ist, ist der einzige Weg, um dem Browser mitzuteilen, dass aktualisierte Dateien abgerufen werden müssen, eine Änderung am Service Worker. Wenn eine Änderung an einer anderen PWA-Ressource vorgenommen wird — wenn das HTML aktualisiert wird, ein Fehler im CSS behoben wird, eine Funktion zu `app.js` hinzugefügt wird, ein Bild komprimiert wird, um die Dateigröße zu verringern, usw. — wird der Service Worker Ihrer installierten PWA nicht wissen, dass er aktualisierte Ressourcen herunterladen muss. Nur wenn der Service Worker in irgendeiner Weise geändert wird, wird die PWA wissen, dass es an der Zeit sein könnte, den Cache zu aktualisieren; was die Aufgabe des Service Workers ist, zu initiieren.

Während das Ändern eines beliebigen Zeichens technisch ausreichen könnte, ist es eine Best Practice für PWAs, eine Versionsnummer-Konstante zu erstellen, die sequentiell aktualisiert wird, um eine Aktualisierung der Datei anzuzeigen. Das Aktualisieren einer Versionsnummer (oder eines Datums) bietet eine offizielle Bearbeitung des Service Workers, auch wenn im Service Worker selbst nichts anderes geändert wird, und bietet Entwicklern eine Möglichkeit, App-Versionen zu identifizieren.

#### Aufgabe

Starten Sie eine JavaScript-Datei, indem Sie eine Versionsnummer einfügen:

```js
const VERSION = "v1";
```

Speichern Sie die Datei als `sw.js`

### Offline Ressourcenliste

Für ein gutes Offline-Erlebnis sollte die Liste der gecachten Dateien alle Ressourcen enthalten, die innerhalb der Offline-Erfahrung der PWA verwendet werden. Während die Manifestdatei möglicherweise eine Vielzahl von Icons in verschiedenen Größen aufgelistet hat, muss der Anwendungscache nur die Ressourcen enthalten, die im Offlinemodus der App verwendet werden.

```js
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon-512x512.png",
];
```

Es ist nicht notwendig, die verschiedenen Icons, die von allen verschiedenen Betriebssystemen und Geräten verwendet werden, in die Liste aufzunehmen. Aber fügen Sie Bilder ein, die innerhalb der App verwendet werden, einschließlich Ressourcen, die innerhalb von Splash-Seiten verwendet werden könnten, die sichtbar sind, falls die App langsam geladen wird oder verwendet wird auf Seiten vom Typ "Sie müssen sich mit dem Internet verbinden, um die vollständige Erfahrung zu erhalten".

Nehmen Sie die Service Worker-Datei nicht in die Liste der zu cachenden Ressourcen auf.

#### Aufgabe

Fügen Sie die Liste der zu cachenden Ressourcen für die CycleTracker PWA zu `sw.js` hinzu.

#### Beispiel Lösung

Wir schließen die statischen Ressourcen ein, die in anderen Abschnitten dieses Tutorials erstellt wurden und die CycleTracker benötigt, um offline zu funktionieren. Unsere aktuelle `sw.js` Datei ist:

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

Da wir die PWA in einem GitHub-Unterverzeichnis speichern, setzen wir den Pfaden ein `./` voran, anstatt Ressourcen mit `/` im Root-Verzeichnis zu verlinken.

Wir haben das `wheel.svg` Icon aufgenommen, obwohl unsere aktuelle Anwendung es nicht verwendet, falls Sie die PWA-UI verbessern möchten, z.B. das Logo anzeigen, wenn keine Periondendaten vorhanden sind.

### Anwendungs-Cache-Name

Wir haben eine Versionsnummer und wir haben die Dateien, die gecacht werden müssen. Vor dem Cachen der Dateien müssen wir einen Namen des Caches erstellen, der verwendet wird, um die statischen Ressourcen der App zu speichern. Dieser Cachename sollte versioniert sein, um sicherzustellen, dass, wenn die App aktualisiert wird, ein neuer Cache erstellt und der alte gelöscht wird.

#### Aufgabe

Verwenden Sie die `VERSION` Nummer, um einen versionierten `CACHE_NAME` zu erstellen und fügen Sie ihn als Konstante zu `sw.js` hinzu.

#### Beispiel Lösung

Wir benennen unseren Cache `period-tracker-` mit der aktuellen `VERSION` angehängt. Da die Deklaration der Konstanten in einer einzigen Zeile erfolgt, platzieren wir sie vor dem Array der Ressourcen-Konstanten zur besseren Lesbarkeit.

```js
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [
  // …
];
```

Wir haben erfolgreich unsere Konstanten erklärt; ein einzigartiger Bezeichner, die Liste der Offline-Ressourcen als Array und den Anwendungs-Cachename, der sich jedes Mal ändert, wenn der Bezeichner aktualisiert wird. Nun konzentrieren wir uns auf das Installieren, Aktualisieren und Löschen nicht verwendeter gecachter Ressourcen.

### Den Cache bei der PWA-Installation speichern

Wenn ein Benutzer eine Website mit einem Service Worker installiert oder einfach besucht, wird ein `install` Ereignis im Service Worker-Bereich ausgelöst. Wir möchten auf dieses Ereignis hören und den Cache beim Installieren mit den statischen Ressourcen der PWA füllen. Jedes Mal, wenn die Version des Service Workers aktualisiert wird, installiert der Browser den neuen Service Worker und das Installationsereignis tritt ein.

Das `install` Ereignis tritt auf, wenn die App zum ersten Mal verwendet wird oder wenn der Browser eine neue Version des Service Workers erkennt. Wenn ein älterer Service Worker durch einen neuen ersetzt wird, wird der alte Service Worker als PWA-Service Worker verwendet, bis der neue Service Worker aktiviert wird.

Nur in sicheren Kontexten verfügbar, gibt die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft ein [`CacheStorage`](/de/docs/Web/API/CacheStorage) Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Die [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open) Methode gibt ein {{jsxref("Promise")}} zurück, das sich auf das [`Cache`](/de/docs/Web/API/Cache) Objekt auflöst, das den Namen des als Parameter übergebenen Caches widerspiegelt.

Die [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) Methode nimmt ein Array von URLs als Parameter, ruft sie ab und fügt dann die Antworten zum gegebenen Cache hinzu. Die [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) Methode teilt dem Browser mit, dass die Arbeit andauert, bis das Versprechen sich auflöst, und dass er den Service Worker nicht beenden sollte, wenn er möchte, dass diese Arbeit abgeschlossen wird. Während die Browser für die Ausführung und Beendigung von Service Workern verantwortlich sind, ist die `waitUntil` Methode eine Anfrage an den Browser, den Service Worker während der Ausführung einer Aufgabe nicht zu beenden.

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

Fügen Sie einen Installations-Ereignislistener hinzu, der die im `APP_STATIC_RESOURCES` genannten Dateien abruft und im `CACHE_NAME` Cache speichert.

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

### Die PWA aktualisieren und alten Cache löschen

Wie erwähnt, wenn ein bestehender Service Worker durch einen neuen ersetzt wird, wird der bestehende Service Worker als PWA-Service Worker verwendet, bis der neue Service Worker aktiviert wird. Wir verwenden das `activate` Ereignis, um alte Caches zu löschen und zu vermeiden, dass der Speicherplatz nicht ausreicht. Wir iterieren über benannte [`Cache`](/de/docs/Web/API/Cache) Objekte, löschen alle außer dem aktuellen und setzen dann den Service Worker als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für die PWA.

Wir lauschen auf das globale `activate` Ereignis des aktuellen Service Workers.

Wir erhalten die Namen der existierenden benannten Caches. Wir verwenden die [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys) Methode (zugriffierend auf `CacheStorage` durch die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft), die ein {{jsxref("Promise")}} zurückgibt, das sich mit einem Array auflöst, das Strings enthält, die den benannten [`Cache`](/de/docs/Web/API/Cache) Objekten in der Reihenfolge, in der sie erstellt wurden, entsprechen.

Wir verwenden die [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) Methode, um durch diese Liste von Name Cach-Versprechen zu iterieren. Die `all()` Methode nimmt als Eingabe eine Liste von iterierbaren Promises und gibt ein einziges `Promise` zurück. Für jeden Namen in der Liste der benannten Caches wird geprüft, ob der Cache der aktuell aktive Cache ist. Wenn nicht, wird er mit der `Cache` [`delete()`](/de/docs/Web/API/Cache/delete) Methode gelöscht.

Die letzte Zeile, das `await clients.claim()` verwendet die [`claim()`](/de/docs/Web/API/Clients/claim) Methode der [`Clients`](/de/docs/Web/API/Clients) Schnittstelle, um unserem Service Worker zu ermöglichen, sich selbst als Controller für unseren Client zu setzen; der "Client" bezieht sich auf eine laufende Instanz der PWA. Die `claim()` Methode ermöglicht es dem Service Worker, die Kontrolle über alle Clients innerhalb seines Geltungsbereichs "zu beanspruchen". Auf diese Weise müssen Clients, die im selben Geltungsbereich geladen sind, nicht neu geladen werden.

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

### Das fetch Ereignis

Wir können das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Ereignis nutzen, um eine installierte PWA daran zu hindern, Anfragen zu stellen, wenn der Benutzer offline ist. Das Lauschen auf das fetch Ereignis ermöglicht es, alle Anfragen abzufangen und mit gecachten Antworten zu reagieren, anstatt ins Netzwerk zu gehen. Die meisten Anwendungen benötigen dieses Verhalten nicht. Tatsächlich wollen viele Geschäftsmodelle, dass Benutzer regelmäßig Serveranfragen stellen, um Tracking- und Marketingzwecke zu verfolgen. Das Abfangen von Anfragen mag für einige also ein Anti-Muster sein; um die Privatsphäre unserer CycleTracker-App zu verbessern, möchten wir jedoch, dass die App keine unnötigen Serveranfragen stellt.

Da unsere PWA aus einer einzigen Seite besteht, kehren wir bei Seiten-Navigationsanfragen zur `index.html` Startseite zurück. Es gibt keine anderen Seiten und wir wollen niemals zum Server gehen. Wenn die `Request`-Readonly-Eigenschaft [`mode`](/de/docs/Web/API/Request/mode) der Fetch API `navigate` ist, bedeutet dies, dass nach einer Webseite gesucht wird. Wir verwenden die [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) Methode des FetchEvents, um das Standard-Verhalten des Browsers beim Abrufen zu verhindern, indem wir unser eigenes Antwort-Versprechen verwenden, das die [`caches.match()`](/de/docs/Web/API/CacheStorage/match) Methode nutzt.

Für alle anderen Anfragemodi öffnen wir die Caches wie in der [Antwort auf das Installationsereignis](#den_cache_bei_der_pwa-installation_speichern) beschrieben, und übergeben die Anforderung des Ereignisses an dieselbe `match()` Methode. Dabei wird überprüft, ob die Anforderung ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Wenn ja, wird die gecachte Antwort zurückgegeben. Andernfalls geben wir als Antwort einen [404-Status](/de/docs/Web/HTTP/Reference/Status/404) zurück.

Die Verwendung des [`Response()`](/de/docs/Web/API/Response/Response) Konstruktors, um einen `null`-Körper und einen `status: 404` als Optionen zu übergeben, bedeutet nicht, dass es einen Fehler in unserer PWA gibt. Vielmehr sollte alles, was wir brauchen, bereits im Cache sein, und wenn nicht, werden wir nicht zum Server gehen, um dieses Nicht-Problem zu lösen.

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
      // Respond with a HTTP 404 response status.
      return new Response(null, { status: 404 });
    })(),
  );
});
```

## Vollständige Service Worker Datei

Ihre `sw.js` Datei sollte dem folgenden JavaScript ähneln. Beachten Sie, dass bei der Aktualisierung einer der in dem `APP_STATIC_RESOURCES` Array aufgeführten Ressourcen die einzige Konstante oder Funktion, die innerhalb dieses Service Workers aktualisiert werden muss, der Wert von `VERSION` ist.

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
> Wenn sich die Hauptseite Ihrer PWA im Root Ihrer Seite befindet, können Sie `/` anstelle von `./` für das Array von Ressourcen (`APP_STATIC_RESOURCES`) und die fetch Antwort (`match("/")`) verwenden.

Beim Aktualisieren eines Service Workers muss die VERSION-Konstante nicht aktualisiert werden, da jede Änderung am Inhalt des Service Worker-Skripts den Browser dazu veranlasst, den neuen Service Worker zu installieren. Es ist jedoch eine gute Praxis, die Versionsnummer zu ändern, da es Entwicklern, einschließlich Ihnen selbst, erleichtert, zu sehen, welche Version des Service Workers derzeit im Browser läuft, indem sie den [Namen des Caches im Application-Tool](#mit_entwickler-tools) (oder Sources-Tool) überprüfen.

> [!NOTE]
> Das Aktualisieren der VERSION ist wichtig, wenn Änderungen an einer Anwendungsressource vorgenommen werden, einschließlich CSS-, HTML- und JS-Code und Bildressourcen. Die Versionsnummer oder jede Änderung an der Service Worker Datei ist der einzige Weg, um eine Aktualisierung der App für Ihre Benutzer zu erzwingen.

## Den Service Worker registrieren

Jetzt, da unser Service Worker-Skript vollständig ist, müssen wir den Service Worker registrieren.

Wir beginnen damit zu überprüfen, ob der Browser die [Service Worker API](/de/docs/Web/API/Service_Worker_API) unterstützt, indem wir [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#the_concept_of_feature_detection) für das Vorhandensein der [`serviceWorker`](/de/docs/Web/API/ServiceWorker) Eigenschaft im globalen [`navigator`](/de/docs/Web/API/Navigator) Objekt verwenden:

```js
// Does "serviceWorker" exist
if ("serviceWorker" in navigator) {
  // If yes, we register the service worker
}
```

Wenn die Eigenschaft unterstützt wird, können wir die [`register()`](/de/docs/Web/API/ServiceWorkerContainer/register) Methode der Service Worker API's [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Schnittstelle verwenden.

```js
if ("serviceWorker" in navigator) {
  // Register the app's service worker
  // Passing the filename where that worker is defined.
  navigator.serviceWorker.register("sw.js");
}
```

Während das Obige für die Bedürfnisse der CycleTracker-App ausreicht, gibt die `register()` Methode ein {{jsxref("Promise")}} zurück, das sich mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Objekt auflöst. Für eine robustere Anwendung sollten Sie die Registrierung auf Fehler überprüfen:

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

Öffnen Sie `index.html` und fügen Sie das folgende {{HTMLElement("script")}} nach dem Skript zum Einschließen von `app.js` und vor dem schließenden `</body>` Tag hinzu.

```html
<!-- Register the app's service worker. -->
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

Sie können die vollständig funktionale [CycleTracker Perioden-Tracking Web-App](https://mdn.github.io/pwa-examples/cycletracker/service_workers/) ausprobieren und den [Web-App-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/service_workers) auf GitHub ansehen. Ja, es funktioniert und es ist jetzt offiziell eine PWA!

## Service Worker Debugging

Aufgrund der Art und Weise, wie wir den Service Worker eingerichtet haben, zieht jede Anfrage, sobald sie registriert ist, aus dem Cache anstatt neuen Inhalt zu laden. Beim Entwickeln werden Sie Ihren Code häufig bearbeiten. Sie möchten Ihre Änderungen wahrscheinlich regelmäßig im Browser testen; wahrscheinlich mit jedem Speichern.

### Durch Ändern der Versionsnummer und Durchführen eines harten Resets

Um einen neuen Cache zu erhalten, können Sie die [Versionsnummer ändern](#versionsnummer) und dann ein hartes Browser-Refresh durchführen. Der Weg, wie Sie ein hartes Refresh durchführen, hängt von Browser und Betriebssystem ab:

- Auf Windows: Strg+F5, Umschalt+F5 oder Strg+Umschalt+R.
- Auf macOS: Umschalt+Befehlstaste+R.
- Safari auf macOS: Wahl+Befehlstaste+E zum Leeren des Caches, dann Wahl+Befehlstaste+R.
- Auf Mobilgeräten: Gehen Sie zu den Browser-(Android) oder Betriebssystem-(Samsung, iOS)-Einstellungen, unter erweiterten Einstellungen finden Sie die Browser-(iOS)- oder Website-Daten (Android, Samsung), die Website-Einstellungen, und löschen Sie die Daten für CycleTracker, bevor Sie die Seite neu laden.

### Mit Entwickler-Tools

Sie möchten wahrscheinlich nicht mit jedem Speichern die Versionsnummer aktualisieren. Bevor Sie bereit sind, eine neue Version Ihrer PWA in Produktion zu bringen und jedem eine neue Version Ihrer PWA zu geben, können Sie anstelle der Änderung der Versionsnummer beim Speichern den Service Worker abmelden.

Sie können einen Service Worker abmelden, indem Sie auf die Schaltfläche `abmelden` in den [Entwickler-Tools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) klicken. Ein hartes Nachladen der Seite wird den Service Worker neu registrieren und einen neuen Cache erstellen.

![Firefox-Entwickler-Tools-Anwendungspanel mit einem gestoppten Service Worker und einer Abmelden-Schaltfläche](firefox_sw.jpg)

In einigen Entwickler-Tools können Sie einen Service Worker manuell abmelden, oder Sie können die Option "Update on reload" der Service Worker auswählen, die die Entwickler-Tools so einstellt, dass der Service Worker bei jedem Neuladen zurückgesetzt und neu aktiviert wird, solange die Entwickler-Tools geöffnet sind. Es gibt auch eine Option, um den Service Worker zu umgehen und Ressourcen aus dem Netzwerk zu laden. Dieses Panel enthält Funktionen, die wir in diesem Tutorial nicht abdecken, die jedoch hilfreich sein werden, wenn Sie fortgeschrittenere PWAs erstellen, die [Synchronisierung](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#periodic_background_sync) und [Push](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#push) enthalten, die beide im [Leitfaden zur Offline- und Hintergrundoperation](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) behandelt werden.

![Edge-Entwickler-Tools zeigen das Anwendungspanel, das auf einen Service Worker eingestellt ist](edge_sw.jpg)

Das Service Worker-Fenster innerhalb des DevTools-Anwendungspanels bietet einen Link, um auf ein Popup-Fenster zuzugreifen, das eine Liste aller registrierten Service Worker für den Browser enthält; nicht nur den Service Worker für die Anwendung, die im aktuellen Tab geöffnet ist. Jede Liste von Service Workern hat Schaltflächen zum Stoppen, Starten oder Abmelden des einzelnen Service Workers.

![Zwei Service Worker existieren unter localhost:8080. Sie können aus der Liste der Service Worker abgemeldet werden](edge_sw_list.jpg)

Mit anderen Worten, während Sie an Ihrer PWA arbeiten, müssen Sie die Versionsnummer nicht bei jeder App-Ansicht aktualisieren. Aber denken Sie daran, wenn Sie mit all Ihren Änderungen fertig sind, den Wert der Service Worker VERSION zu aktualisieren, bevor Sie die aktualisierte Version Ihrer PWA verteilen. Wenn Sie es vergessen, wird niemand, der Ihre App bereits installiert hat oder sogar Ihre Online-PWA besucht hat, ohne sie zu installieren, jemals Ihre Änderungen sehen!

## Wir sind fertig!

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und die progressiv erweitert wird, um offline zu arbeiten. Wir haben eine voll funktionsfähige Webanwendung erstellt. Dann haben wir die zwei Funktionen hinzugefügt - eine Manifestdatei und einen Service Worker - die erforderlich sind, um sie in eine PWA zu verwandeln. Wenn Sie Ihre App mit anderen teilen möchten, machen Sie sie über eine sichere Verbindung verfügbar. Alternativ, wenn Sie den Zyklustracker nur für sich selbst verwenden möchten, [erstellen Sie eine lokale Entwicklungsumgebung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), [installieren Sie die PWA](/de/docs/Web/Progressive_web_apps/Guides/Installing) und genießen Sie es! Sobald installiert, müssen Sie localhost nicht mehr ausführen.

Herzlichen Glückwunsch!

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
