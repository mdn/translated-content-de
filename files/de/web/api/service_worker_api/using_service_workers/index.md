---
title: Verwendung von Service Workern
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("Service Workers API")}}

Dieser Artikel bietet Informationen zum Einstieg in Service Worker, einschließlich der grundlegenden Architektur, der Registrierung eines Service Workers, des Installations- und Aktivierungsprozesses für einen neuen Service Worker, dem Aktualisieren Ihres Service Workers, der Cache-Kontrolle und benutzerdefinierten Antworten, alles im Kontext einer Anwendung mit Offline-Funktionalität.

## Das Konzept von Service Workern

Ein übergreifendes Problem, mit dem Webnutzer seit Jahren zu kämpfen haben, ist der Verlust der Konnektivität. Die beste Web-App der Welt bietet eine schreckliche Benutzererfahrung, wenn sie nicht heruntergeladen werden kann. Es gab verschiedene Versuche, Technologien zu entwickeln, um dieses Problem zu lösen, und einige der Probleme wurden gelöst. Aber das übergreifende Problem war, dass es keinen guten Kontrollmechanismus für Asset-Caching und benutzerdefinierte Netzwerk-Anfragen gab.

Service Worker beheben diese Probleme. Durch die Verwendung eines Service Workers können Sie eine App so einrichten, dass zuerst zwischengespeicherte Assets verwendet werden, um eine Standarderfahrung auch offline zu bieten, bevor dann mehr Daten aus dem Netzwerk abgerufen werden (allgemein bekannt als "offline first"). Dies ist bereits bei nativen Apps verfügbar, was einer der Hauptgründe ist, warum native Apps oft gegenüber Web-Apps bevorzugt werden.

Ein Service Worker funktioniert wie ein Proxy-Server, der es Ihnen ermöglicht, Anfragen und Antworten zu modifizieren und sie durch Elemente aus seinem eigenen Cache zu ersetzen.

## Vorbereitung zum Ausprobieren von Service Workern

Service Worker sind standardmäßig in allen modernen Browsern aktiviert. Um Code mit Service Workern ausführen zu können, müssen Sie Ihren Code über HTTPS bereitstellen — aus Sicherheitsgründen sind Service Worker auf die Ausführung über HTTPS beschränkt. Ein Server, der HTTPS unterstützt, ist notwendig. Um Experimente zu hosten, können Sie einen Dienst wie GitHub, Netlify, Vercel usw. nutzen. Um die lokale Entwicklung zu erleichtern, gilt `localhost` auch als sichere Herkunft in Browsern.

## Grundlegende Architektur

Bei der Arbeit mit Service Workern werden im Allgemeinen folgende Schritte für die grundlegende Einrichtung beobachtet:

1. Der Service Worker-Code wird abgerufen und dann mit [`serviceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Wenn dies erfolgreich ist, wird der Service Worker in einem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgeführt; dies ist im Grunde eine spezielle Art von Worker-Kontext, der außerhalb des Hauptskript-Ausführungs-Threads läuft, ohne DOM-Zugriff. Der Service Worker ist jetzt bereit, Ereignisse zu verarbeiten.
2. Die Installation findet statt. Ein `install`-Ereignis ist immer das erste, das einem Service Worker gesendet wird (dies kann verwendet werden, um den Prozess des Auffüllens eines IndexedDB und des Cachens von Website-Assets zu starten). Während dieses Schrittes bereitet die Anwendung alles vor, um offline verfügbar zu sein.
3. Wenn der `install`-Handler abgeschlossen ist, wird der Service Worker als installiert betrachtet. Zu diesem Zeitpunkt kann eine vorherige Version des Service Workers aktiv sein und geöffnete Seiten kontrollieren. Da wir nicht wollen, dass zwei verschiedene Versionen desselben Service Workers gleichzeitig ausgeführt werden, ist die neue Version noch nicht aktiv.
4. Sobald alle von der alten Version des Service Workers kontrollierten Seiten geschlossen sind, ist es sicher, die alte Version zurückzuziehen, und der neu installierte Service Worker erhält ein `activate`-Ereignis. Der primäre Zweck von `activate` ist die Bereinigung von Ressourcen, die in vorherigen Versionen des Service Workers verwendet wurden. Der neue Service Worker kann [`skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) aufrufen, um zu beantragen, sofort aktiviert zu werden, ohne darauf zu warten, dass offene Seiten geschlossen werden. Der neue Service Worker erhält dann sofort `activate` und übernimmt alle offenen Seiten.
5. Nach der Aktivierung wird der Service Worker nun Seiten kontrollieren, aber nur solche, die nach der erfolgreichen `register()` geöffnet wurden. Mit anderen Worten: Dokumente müssen neu geladen werden, um tatsächlich kontrolliert zu werden, da ein Dokument mit oder ohne einen Service Worker anfängt und dies für seine Lebensdauer beibehält. Um dieses Standardverhalten zu überschreiben und offene Seiten zu übernehmen, kann ein Service Worker [`clients.claim()`](/de/docs/Web/API/Clients/claim) aufrufen.
6. Jedes Mal, wenn eine neue Version eines Service Workers abgerufen wird, passiert dieser Zyklus erneut, und die Überreste der vorherigen Version werden während der Aktivierung der neuen Version bereinigt.

![Lebenszyklusdiagramm](sw-lifecycle.svg)

Hier ist eine Zusammenfassung der verfügbaren Service Worker-Ereignisse:

- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
- [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)
- Funktionale Ereignisse
  - [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
  - [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event)
  - [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)

## Demo

Um die Grundlagen der Registrierung und Installation eines Service Workers zu demonstrieren, haben wir eine Demo namens [simple service worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) erstellt, die eine einfache Star-Wars-Lego-Bildergalerie ist. Sie verwendet eine versprechensgesteuerte Funktion, um Bilddaten aus einem JSON-Objekt zu lesen und die Bilder mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch) zu laden, bevor die Bilder in einer Linie auf der Seite dargestellt werden. Wir haben die Dinge bislang statisch gehalten. Es registriert, installiert und aktiviert auch einen Service Worker.

![Die Worte Star Wars gefolgt von einem Bild einer Lego-Version der Darth Vader-Figur](demo-screenshot.png)

Sie können den [Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) sehen und den [simple service worker live](https://bncb2v.csb.app/) ausprobieren.

### Registrieren Ihres Workers

Der erste Codeblock in der JavaScript-Datei unserer App — `app.js` — ist wie folgt. Dies ist unser Einstiegspunkt in die Nutzung von Service Workern.

```js
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

// …

registerServiceWorker();
```

1. Der `if`-Block führt einen Feature-Erkennungstest durch, um sicherzustellen, dass Service Worker unterstützt werden, bevor versucht wird, einen zu registrieren.
2. Als nächstes verwenden wir die Funktion [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um den Service Worker für diese Site zu registrieren. Der Code des Service Workers befindet sich in einer JavaScript-Datei innerhalb unserer App (beachten Sie, dass dies die URL der Datei relativ zum Ursprung ist, nicht die der JS-Datei, die sie referenziert).
3. Der `scope`-Parameter ist optional und kann verwendet werden, um den Teil Ihres Inhalts festzulegen, den der Service Worker kontrollieren soll. In diesem Fall haben wir `'/'` angegeben, was bedeutet, dass alle Inhalte unter dem Ursprung der App betroffen sind. Wenn Sie dies weglassen, wird es ohnehin auf diesen Wert festgelegt, aber wir haben es hier zu Illustrationszwecken angegeben.

Dies registriert einen Service Worker, der in einem Worker-Kontext ausgeführt wird und daher keinen DOM-Zugriff hat.

Ein einziger Service Worker kann viele Seiten kontrollieren. Jedes Mal, wenn eine Seite innerhalb Ihres Geltungsbereichs geladen wird, wird der Service Worker gegen diese Seite installiert und bearbeitet sie. Beachten Sie daher, dass Sie vorsichtig mit globalen Variablen im Service Worker-Skript umgehen müssen: Jede Seite erhält keinen eigenen einzigartigen Worker.

> [!NOTE]
> Eine großartige Sache an Service Workern ist, dass, wenn Sie eine Feature-Erkennung wie oben gezeigt verwenden, Browser, die keine Service Worker unterstützen, Ihre App einfach wie gewohnt online nutzen können.

#### Warum schlägt die Registrierung meines Service Workers fehl?

Ein Service Worker schlägt aus einem der folgenden Gründe bei der Registrierung fehl:

- Sie führen Ihre Anwendung nicht in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) (über HTTPS) aus.
- Der Pfad der Service Worker-Datei ist falsch.
  Der Pfad muss relativ zum Ursprung sein, nicht zum Stammverzeichnis der App.
  In unserem Beispiel befindet sich der Worker unter `https://bncb2v.csb.app/sw.js`, und das Stammverzeichnis der App ist `https://bncb2v.csb.app/`, daher muss der Service Worker als `/sw.js` angegeben werden.
- Der Pfad zu Ihrem Service Worker zeigt auf einen Service Worker eines anderen Ursprungs als Ihre App.
- Die Service Worker-Registrierung enthält eine `scope`-Option, die breiter ist, als es der Worker-Pfad erlaubt.
  Der Standardbereich für einen Service Worker ist das Verzeichnis, in dem sich der Worker befindet.
  Mit anderen Worten, wenn das Skript `sw.js` unter `/js/sw.js` liegt, kann es standardmäßig nur URLs im (oder innerhalb) des `/js/`-Pfads kontrollieren.
  Der Geltungsbereich für einen Service Worker kann mit dem {{HTTPHeader("Service-Worker-Allowed")}}-Header erweitert (oder eingeschränkt) werden.
- Browser-spezifische Einstellungen sind aktiviert, wie z. B. das Blockieren aller Cookies, der private Modus, automatisches Löschen von Cookies beim Schließen usw.
  Weitere Informationen finden Sie unter [`serviceWorker.register()` Browser-Kompatibilität](/de/docs/Web/API/ServiceWorkerContainer/register#browser_compatibility).

### Installieren und aktivieren: Ihren Cache füllen

Nachdem Ihr Service Worker registriert ist, wird der Browser versuchen, den Service Worker für Ihre Seite/Site zu installieren und anschließend zu aktivieren.

Das `install`-Ereignis ist das erste Ereignis, das bei der Installation oder Aktualisierung eines Service Workers ausgelöst wird.
Es wird einmalig sofort nach erfolgreicher Registrierung ausgelöst und wird im Allgemeinen verwendet, um die Offline-Caching-Fähigkeiten Ihres Browsers mit den Assets zu füllen, die Sie benötigen, um Ihre App offline auszuführen. Hierfür verwenden wir die Speicher-API des Service Workers — [`cache`](/de/docs/Web/API/Cache) — ein globales Objekt im Service Worker, das es uns ermöglicht, von Antworten gelieferte Assets zu speichern, die durch ihre Anfragen verknüpft sind. Diese API funktioniert ähnlich wie der Standard-Cache des Browsers, ist jedoch spezifisch für Ihre Domain. Der Inhalt des Caches bleibt erhalten, bis Sie ihn löschen.

So verarbeitet unser Service Worker das `install`-Ereignis:

```js
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/style.css",
      "/app.js",
      "/image-list.js",
      "/star-wars-logo.jpg",
      "/gallery/bountyHunters.jpg",
      "/gallery/myLittleVader.jpg",
      "/gallery/snowTroopers.jpg",
    ]),
  );
});
```

1. Hier fügen wir dem Service Worker (daher `self`) einen `install`-Ereignis-Listener hinzu und hängen dann eine [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode an das Ereignis an — dies stellt sicher, dass der Service Worker nicht installiert wird, bis der Code innerhalb von `waitUntil()` erfolgreich ausgeführt wurde.
2. Innerhalb von `addResourcesToCache()` verwenden wir die Methode [`caches.open()`](/de/docs/Web/API/CacheStorage/open), um einen neuen Cache namens `v1` zu erstellen, der Version 1 unseres Site-Resourcen-Caches sein wird. Dann rufen wir eine Funktion `addAll()` auf dem erstellten Cache auf, die als Parameter ein Array von URLs zu allen Ressourcen nimmt, die Sie cachen möchten. Die URLs sind relativ zum Standort des Workers.
3. Wenn das Versprechen abgelehnt wird, schlägt die Installation fehl und der Worker unternimmt nichts. Das ist in Ordnung, da Sie Ihren Code beheben und es beim nächsten Mal erneut versuchen können, wenn die Registrierung erfolgt.
4. Nach einer erfolgreichen Installation wird der Service Worker aktiviert. Dies hat beim ersten Mal, wenn Ihr Service Worker installiert/aktiviert wird, nicht viel eigenständigen Nutzen, aber es bedeutet mehr, wenn der Service Worker aktualisiert wird (siehe den Abschnitt [Aktualisieren Ihres Service Workers](#aktualisieren_ihres_service_workers) weiter unten).

> [!NOTE]
> [Die Web Storage API (`localStorage`)](/de/docs/Web/API/Web_Storage_API) funktioniert auf ähnliche Weise wie der Service Worker-Cache, ist aber synchron, daher in Service Workern nicht erlaubt.

> [!NOTE]
> [IndexedDB](/de/docs/Web/API/IndexedDB_API) kann in einem Service Worker zur Datenspeicherung verwendet werden, wenn Sie es benötigen.

### Benutzerdefinierte Antworten auf Anfragen

Jetzt, da Sie Ihre Site-Assets zwischengespeichert haben, müssen Sie den Service Workern sagen, dass sie etwas mit den zwischengespeicherten Inhalten tun sollen. Dies geschieht mit dem `fetch`-Ereignis.

1. Ein `fetch`-Ereignis wird jedes Mal ausgelöst, wenn eine Ressource, die von einem Service Worker kontrolliert wird, abgerufen wird. Dazu gehören die Dokumente im angegebenen Bereich und alle in diesen Dokumenten referenzierten Ressourcen (zum Beispiel, wenn `index.html` eine Cross-Origin-Anfrage zur Einbettung eines Bildes stellt, geht das immer noch durch seinen Service Worker).

2. Sie können dem Service Worker einen `fetch`-Ereignis-Listener anhängen und dann die Methode `respondWith()` auf das Ereignis aufrufen, um unsere HTTP-Antworten zu kapern und mit Ihrem eigenen Inhalt zu aktualisieren.

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(/* custom content goes here */);
   });
   ```

3. Wir könnten damit beginnen, mit der Ressource zu antworten, deren URL mit der der Netzwerkanforderung übereinstimmt, in jedem Fall:

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(caches.match(event.request));
   });
   ```

   `caches.match(event.request)` ermöglicht es uns, jede Ressource, die aus dem Netzwerk angefordert wird, mit der entsprechenden Ressource im Cache abzugleichen, wenn eine entsprechende verfügbar ist. Der Abgleich erfolgt über URL und verschiedene Header, genau wie bei normalen HTTP-Anfragen.

![Fetch-Ereignisdiagramm](sw-fetch.svg)

## Wiederherstellung fehlgeschlagener Anfragen

So ist `caches.match(event.request)` großartig, wenn es eine Übereinstimmung im Service Worker-Cache gibt, aber was ist mit Fällen, in denen es keine Übereinstimmung gibt? Wenn wir keine Art von Fehlerbehandlung anbieten würden, würde unser Versprechen mit `undefined` aufgelöst und wir würden nichts zurückerhalten.

Nach dem Testen der Antwort aus dem Cache, können wir auf eine reguläre Netzwerkanfrage zurückfallen:

```js
const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  return fetch(request);
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});
```

Wenn die Ressourcen nicht im Cache sind, werden sie aus dem Netzwerk angefordert.

Mit einer detaillierteren Strategie könnten wir nicht nur die Ressource aus dem Netzwerk abfragen, sondern auch in den Cache aufnehmen, damit spätere Anfragen nach dieser Ressource auch offline abgerufen werden können. Dies würde bedeuten, dass, wenn zusätzliche Bilder zur Star-Wars-Galerie hinzugefügt werden, unsere App sie automatisch abrufen und zwischenspeichern könnte. Das folgende Snippet implementiert eine solche Strategie:

```js
const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async (request, event) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  const responseFromNetwork = await fetch(request);
  event.waitUntil(putInCache(request, responseFromNetwork.clone()));
  return responseFromNetwork;
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request, event));
});
```

Wenn die Anforderungs-URL im Cache nicht verfügbar ist, fragen wir die Ressource mit `await fetch(request)` über die Netzwerkanfrage ab. Danach legen wir eine Kopie der Antwort in den Cache. Die `putInCache()`-Funktion verwendet `caches.open('v1')` und `cache.put()`, um die Ressource in den Cache zu legen. Die Originalantwort wird an den Browser zurückgegeben, um sie der Seite zu übergeben, die sie angefordert hat.

Das Klonen der Antwort ist notwendig, da Anfragen- und Antwortstreams nur einmal gelesen werden können. Um die Antwort an den Browser zurückzugeben und im Cache zu speichern, müssen wir sie klonen. Also wird das Original an den Browser zurückgegeben und die Kopie in den Cache gesendet. Sie werden jeweils einmal gelesen.

Was etwas seltsam aussehen mag, ist, dass das von `putInCache()` zurückgegebene Versprechen nicht erwartet wird. Der Grund ist, dass wir nicht warten möchten, bis die Antwortkopie dem Cache hinzugefügt wurde, bevor eine Antwort zurückgegeben wird. Wir müssen jedoch `event.waitUntil()` auf das Versprechen aufrufen, um sicherzustellen, dass der Service Worker nicht terminiert, bevor der Cache gefüllt ist.

Das einzige Problem, das wir jetzt haben, ist, dass, wenn die Anfrage im Cache und das Netzwerk nicht verfügbar ist, unsere Anfrage immer noch fehlschlägt. Lassen Sie uns einen Standard-Fallback bereitstellen, damit der Benutzer zumindest etwas erhält, egal was passiert:

```js
const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, fallbackUrl, event }) => {
  // First try to get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Next try to get the resource from the network
  try {
    const responseFromNetwork = await fetch(request);
    // response may be used only once
    // we need to save clone to put one copy in cache
    // and serve second one
    event.waitUntil(putInCache(request, responseFromNetwork.clone()));
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // when even the fallback response is not available,
    // there is nothing we can do, but we must always
    // return a Response object
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      fallbackUrl: "/gallery/myLittleVader.jpg",
      event,
    }),
  );
});
```

Wir haben uns für dieses Fallback-Bild entschieden, da die einzigen Updates, die wahrscheinlich fehlschlagen, neue Bilder sind, da alles andere für die Installation im `install`-Ereignislistener, den wir zuvor gesehen haben, erforderlich ist.

## Service Worker Navigation Preload

Wenn aktiviert, beginnt die [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager)-Funktion mit dem Herunterladen von Ressourcen, sobald die `fetch`-Anfrage gestellt wird und parallel zur Aktivierung des Service Workers. Dies stellt sicher, dass das Herunterladen sofort beim Navigieren zu einer Seite beginnt, anstatt darauf warten zu müssen, dass der Service Worker aktiviert wird. Diese Verzögerung tritt relativ selten auf, ist jedoch unvermeidlich, wenn sie auftritt, und könnte signifikant sein.

Zuerst muss die Funktion während der Aktivierung des Service Workers aktiviert werden, indem [`registration.navigationPreload.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable) verwendet wird:

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Dann verwenden Sie [`event.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse), um im `fetch`-Ereignishandler auf die fertige Vorabladung der Ressource zu warten.

Setzen Sie das Beispiel aus den vorherigen Abschnitten fort, fügen Sie den Code ein, um auf die vorab geladene Ressource zu warten, nach der Cache-Prüfung und bevor Sie vom Netzwerk abrufen, sollte das nicht erfolgreich sein.

Der neue Prozess ist:

1. Cache prüfen
2. Auf `event.preloadResponse` warten, das als `preloadResponsePromise` an die `cacheFirst()`-Funktion übergeben wird. Den Cache mit dem Ergebnis füllen, wenn es zurückkehrt.
3. Wenn keiner davon definiert ist, gehen wir zum Netzwerk.

```js
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({
  request,
  preloadResponsePromise,
  fallbackUrl,
  event,
}) => {
  // First try to get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Next try to use (and cache) the preloaded response, if it's there
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info("using preload response", preloadResponse);
    event.waitUntil(putInCache(request, preloadResponse.clone()));
    return preloadResponse;
  }

  // Next try to get the resource from the network
  try {
    const responseFromNetwork = await fetch(request);
    // response may be used only once
    // we need to save clone to put one copy in cache
    // and serve second one
    event.waitUntil(putInCache(request, responseFromNetwork.clone()));
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // when even the fallback response is not available,
    // there is nothing we can do, but we must always
    // return a Response object
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

// Enable navigation preload
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener("activate", (event) => {
  event.waitUntil(enableNavigationPreload());
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/style.css",
      "/app.js",
      "/image-list.js",
      "/star-wars-logo.jpg",
      "/gallery/bountyHunters.jpg",
      "/gallery/myLittleVader.jpg",
      "/gallery/snowTroopers.jpg",
    ]),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      preloadResponsePromise: event.preloadResponse,
      fallbackUrl: "/gallery/myLittleVader.jpg",
      event,
    }),
  );
});
```

Beachten Sie, dass in diesem Beispiel die gleichen Daten für die Ressource heruntergeladen und zwischengespeichert werden, unabhängig davon, ob sie "normal" heruntergeladen oder vorab geladen wird. Sie können stattdessen wählen, bei Preload eine andere Ressource herunterzuladen und zu cachen. Weitere Informationen finden Sie unter [`NavigationPreloadManager` > Benutzerdefinierte Antworten](/de/docs/Web/API/NavigationPreloadManager#custom_responses).

## Aktualisieren Ihres Service Workers

Wenn Ihr Service Worker zuvor installiert wurde, aber dann eine neue Version des Workers verfügbar ist bei einer Aktualisierung oder Seitenladung, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert. Sie wird nur aktiviert, wenn es keine Seiten mehr gibt, die noch den alten Service Worker verwenden. Sobald es keine geladenen Seiten mehr gibt, aktiviert sich der neue Service Worker.

> [!NOTE]
> Es ist möglich, dies zu umgehen, indem [`Clients.claim()`](/de/docs/Web/API/Clients/claim) verwendet wird.

Sie möchten Ihren `install`-Ereignislistener im neuen Service Worker auf etwas wie das Folgende aktualisieren (beachten Sie die neue Versionsnummer):

```js
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v2");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/style.css",
      "/app.js",
      "/image-list.js",

      // …

      // include other new resources for the new version…
    ]),
  );
});
```

Während der Service Worker installiert wird, ist die vorherige Version weiterhin verantwortlich für die Abfragen. Die neue Version wird im Hintergrund installiert. Wir nennen den neuen Cache `v2`, damit der vorherige `v1`-Cache nicht gestört wird.

Wenn keine Seiten die vorherige Version verwenden, aktiviert sich der neue Worker und wird für die Abfragen verantwortlich.

### Löschen alter Caches

Wie wir im letzten Abschnitt gesehen haben, wird beim Aktualisieren eines Service Workers auf eine neue Version ein neuer Cache im `install`-Ereignishandler erstellt. Solange offene Seiten von der vorherigen Version des Workers kontrolliert werden, müssen beide Caches beibehalten werden, da die vorherige Version ihre Version des Caches benötigt. Sie können das `activate`-Ereignis nutzen, um Daten aus den vorherigen Caches zu entfernen.

Mit `waitUntil()` übermittelte Versprechen blockieren andere Ereignisse bis zum Abschluss, sodass Sie sicher sein können, dass Ihre Bereinigungsoperation abgeschlossen ist, bevor Sie Ihr erstes `fetch`-Ereignis auf dem neuen Service Worker erhalten.

```js
const deleteCache = async (key) => {
  await caches.delete(key);
};

const deleteOldCaches = async () => {
  const cacheKeepList = ["v2"];
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
  await Promise.all(cachesToDelete.map(deleteCache));
};

self.addEventListener("activate", (event) => {
  event.waitUntil(deleteOldCaches());
});
```

## Entwicklerwerkzeuge

- [Chrome](https://www.chromium.org/blink/serviceworker/service-worker-faq/)
- [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/application/service_workers/index.html)
  - Die Schaltfläche "Diese Site vergessen", verfügbar in den [Toolbar-Anpassungsoptionen von Firefox](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars), kann zum Löschen von Service Workern und deren Caches verwendet werden.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools/service-workers/)

## Siehe auch

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP-Header
