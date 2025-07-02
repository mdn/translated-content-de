---
title: Verwendung von Service Workern
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{DefaultAPISidebar("Service Workers API")}}

Dieser Artikel bietet Informationen über den Einstieg in Service Worker, einschließlich grundlegender Architektur, Registrierung eines Service Workers, Installations- und Aktivierungsprozess für einen neuen Service Worker, Aktualisierung Ihres Service Workers, Cache-Kontrolle und benutzerdefinierte Antworten, alles im Kontext einer App mit Offline-Funktionalität.

## Die Prämisse von Service Workern

Ein übergeordnetes Problem, mit dem Webnutzer seit Jahren zu kämpfen haben, ist der Verlust der Konnektivität. Die beste Web-App der Welt bietet ein schlechtes Benutzererlebnis, wenn Sie sie nicht herunterladen können. Es gab verschiedene Versuche, Technologien zu schaffen, um dieses Problem zu lösen, und einige der Probleme wurden gelöst. Aber das übergeordnete Problem war, dass es keinen guten allgemeinen Kontrollmechanismus für das Zwischenspeichern von Assets und benutzerdefinierte Netzwerk-Anfragen gab.

Service Worker beheben diese Probleme. Mit einem Service Worker können Sie eine App so einrichten, dass zuerst zwischengespeicherte Assets verwendet werden, sodass auch offline ein standardmäßiges Benutzererlebnis geboten wird, bevor dann weitere Daten aus dem Netzwerk abgerufen werden ("offline first" genannt). Dies ist bereits bei nativen Apps verfügbar, was einer der Hauptgründe dafür ist, dass native Apps oft gegenüber Web-Apps bevorzugt werden.

Ein Service Worker funktioniert wie ein Proxy-Server, der es Ihnen ermöglicht, Anfragen und Antworten zu ändern, indem er sie durch Elemente aus seinem eigenen Cache ersetzt.

## Einrichtung zum Arbeiten mit Service Workern

Service Worker sind standardmäßig in allen modernen Browsern aktiviert. Um Code mit Service Workern auszuführen, müssen Sie Ihren Code über HTTPS bereitstellen – Service Worker sind aus Sicherheitsgründen auf die Ausführung über HTTPS beschränkt. Ein Server, der HTTPS unterstützt, ist notwendig. Zum Hosten von Experimenten können Sie Dienste wie GitHub, Netlify, Vercel usw. verwenden. Um die lokale Entwicklung zu erleichtern, wird `localhost` von Browsern ebenfalls als sichere Herkunft betrachtet.

## Grundlegende Architektur

Bei Service Workern werden im Allgemeinen die folgenden Schritte für die grundlegende Einrichtung beobachtet:

1. Der Code des Service Workers wird abgerufen und dann mit [`serviceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Bei Erfolg wird der Service Worker in einem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgeführt; dies ist im Wesentlichen eine spezielle Art von Worker-Kontext, der außerhalb des Haupt-Skriptausführungsthreads läuft, ohne DOM-Zugriff. Der Service Worker ist nun bereit, Ereignisse zu verarbeiten.
2. Die Installation findet statt. Ein `install`-Ereignis ist immer das erste, das an einen Service Worker gesendet wird (dies kann verwendet werden, um den Prozess des Befüllens einer IndexedDB zu starten und Site-Assets zwischenzuspeichern). Während dieses Schritts bereitet die Anwendung alles vor, um offline verfügbar zu sein.
3. Wenn der `install`-Handler abgeschlossen ist, wird der Service Worker als installiert betrachtet. Zu diesem Zeitpunkt kann eine vorherige Version des Service Workers aktiv sein und offene Seiten kontrollieren. Da wir nicht möchten, dass zwei verschiedene Versionen desselben Service Workers gleichzeitig laufen, ist die neue Version noch nicht aktiv.
4. Sobald alle von der alten Version des Service Workers kontrollierten Seiten geschlossen sind, ist es sicher, die alte Version abzuziehen, und der neu installierte Service Worker erhält ein `activate`-Ereignis. Der primäre Zweck von `activate` besteht darin, Ressourcen zu bereinigen, die in früheren Versionen des Service Workers verwendet wurden. Der neue Service Worker kann [`skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) aufrufen, um zu bitten, sofort aktiviert zu werden, ohne darauf zu warten, dass offene Seiten geschlossen werden. Der neue Service Worker erhält dann sofort `activate` und übernimmt alle offenen Seiten.
5. Nach der Aktivierung steuert der Service Worker nun Seiten, jedoch nur diejenigen, die nach dem erfolgreichen Abschluss von `register()` geöffnet wurden. Mit anderen Worten, Dokumente müssen neu geladen werden, um tatsächlich gesteuert zu werden, da ein Dokument mit oder ohne Service Worker startet und dies für seine Lebensdauer beibehält. Um dieses Standardverhalten zu überschreiben und offene Seiten zu übernehmen, kann ein Service Worker [`clients.claim()`](/de/docs/Web/API/Clients/claim) aufrufen.
6. Jedes Mal, wenn eine neue Version eines Service Workers abgerufen wird, findet dieser Zyklus erneut statt und die Überreste der vorherigen Version werden während der Aktivierung der neuen Version bereinigt.

![Lifecycle-Diagramm](sw-lifecycle.svg)

Hier ist eine Zusammenfassung der verfügbaren Service Worker-Ereignisse:

- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
- [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)
- Funktionale Ereignisse
  - [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
  - [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event)
  - [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)

## Demo

Um nur die Grundlagen der Registrierung und Installation eines Service Workers zu demonstrieren, haben wir eine Demo namens [einfacher Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) erstellt, eine einfache Star Wars Lego-Bildergalerie. Sie verwendet eine Promise-basierte Funktion, um Bilddaten aus einem JSON-Objekt zu lesen und die Bilder mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch) zu laden, bevor die Bilder in einer Reihe auf der Seite angezeigt werden. Wir haben die Dinge bisher statisch gehalten. Es registriert, installiert und aktiviert auch einen Service Worker.

![Die Worte Star Wars, gefolgt von einem Bild eines Lego-Darth-Vader-Charakters](demo-screenshot.png)

Sie können den [Quellcode auf GitHub ansehen](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) und den [einfachen Service Worker live ausführen](https://bncb2v.csb.app/).

### Registrierung Ihres Workers

Der erste Codeblock in der JavaScript-Datei unserer App – `app.js` – sieht wie folgt aus. Dies ist unser Einstiegspunkt in die Verwendung von Service Workern.

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

1. Der `if`-Block führt einen Feature-Detection-Test durch, um sicherzustellen, dass Service Worker unterstützt werden, bevor versucht wird, einen zu registrieren.
2. Als nächstes verwenden wir die Funktion [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um den Service Worker für diese Site zu registrieren. Der Code des Service Workers befindet sich in einer JavaScript-Datei innerhalb unserer App (beachten Sie, dass dies die URL der Datei relativ zum Ursprung ist, nicht die JS-Datei, die darauf verweist).
3. Der Parameter `scope` ist optional und kann verwendet werden, um den Teil Ihrer Inhalte anzugeben, den der Service Worker steuern soll. In diesem Fall haben wir `'/'` angegeben, was bedeutet, dass alle Inhalte unter dem Ursprung der App liegen. Wenn Sie es weglassen, wird es standardmäßig auf diesen Wert gesetzt, aber wir haben es hier zur Veranschaulichung angegeben.

Dies registriert einen Service Worker, der in einem Worker-Kontext ausgeführt wird und daher keinen DOM-Zugriff hat.

Ein einzelner Service Worker kann viele Seiten steuern. Jedes Mal, wenn eine Seite innerhalb Ihres Bereichs geladen wird, wird der Service Worker für diese Seite installiert und wirkt darauf. Bedenken Sie daher, dass Sie in der Service Worker-Skriptdatei vorsichtig mit globalen Variablen umgehen müssen: Jede Seite erhält nicht ihren eigenen einzigartigen Worker.

> [!NOTE]
> Ein großer Vorteil von Service Workern ist, dass, wenn Sie Feature-Detection wie oben gezeigt verwenden, Browser, die keine Service Worker unterstützen, Ihre App einfach online auf die normale erwartete Weise nutzen können.

#### Warum schlägt die Registrierung meines Service Workers fehl?

Ein Service Worker schlägt aus einem der folgenden Gründe bei der Registrierung fehl:

- Sie führen Ihre Anwendung nicht in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) (über HTTPS) aus.
- Der Pfad der Service Worker-Datei ist falsch.
  Der Pfad muss relativ zum Ursprung sein, nicht zum Stammverzeichnis der App.
  In unserem Beispiel befindet sich der Worker unter `https://bncb2v.csb.app/sw.js`, und das Stammverzeichnis der App ist `https://bncb2v.csb.app/`, sodass der Service Worker als `/sw.js` angegeben werden muss.
- Der Pfad zu Ihrem Service Worker verweist auf einen Service Worker einer anderen Herkunft als Ihrer App.
- Die Service Worker-Registrierung enthält eine `scope`-Option, die breiter ist als das, was durch den Worker-Pfad erlaubt ist.
  Der Standardbereich für einen Service Worker ist das Verzeichnis, in dem sich der Worker befindet.
  Mit anderen Worten, wenn das Skript `sw.js` sich in `/js/sw.js` befindet, kann es nur URLs in (oder unterhalb von) dem `/js/`-Pfad standardmäßig steuern.
  Der Bereich für einen Service Worker kann mit dem Header {{HTTPHeader("Service-Worker-Allowed")}} erweitert (oder eingeschränkt) werden.
- Spezifische Browsereinstellungen sind aktiviert, wie das Blockieren aller Cookies, privater Browsing-Modus, automaticsches Cookie-Löschen beim Schließen usw.
  Siehe [`serviceWorker.register()`-Browser-Kompatibilität](/de/docs/Web/API/ServiceWorkerContainer/register#browser_compatibility) für weitere Informationen.

### Installieren und Aktivieren: Auffüllen Ihres Caches

Nachdem Ihr Service Worker registriert ist, wird der Browser versuchen, den Service Worker für Ihre Seite/Ihr Site zu installieren und dann zu aktivieren.

Das `install`-Ereignis ist das erste Ereignis, das bei der Installation oder Aktualisierung eines Service Workers ausgelöst wird.
Es wird nur einmal gesendet, unmittelbar nachdem die Registrierung erfolgreich abgeschlossen wurde, und wird im Allgemeinen verwendet, um die Offline-Caching-Fähigkeiten Ihres Browsers mit den Assets aufzufüllen, die Sie benötigen, um Ihre App offline laufen zu lassen. Dazu verwenden wir die Speicher-API des Service Workers — [`cache`](/de/docs/Web/API/Cache) — ein globales Objekt beim Service Worker, das es uns ermöglicht, von Antworten bereitgestellte Ressourcen zu speichern, die nach ihren Anfragen indiziert sind. Diese API funktioniert ähnlich wie der Standard-Cache des Browsers, ist jedoch spezifisch für Ihre Domain. Der Inhalt des Caches bleibt bis zur manuellen Löschung erhalten.

Hier ist, wie unser Service Worker das `install`-Ereignis behandelt:

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

1. Hier fügen wir einen `install`-Ereignis-Listener zum Service Worker hinzu (daher `self`), und hängen dann eine [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode an das Ereignis an — dies stellt sicher, dass der Service Worker nicht installierbar ist, bis der Code innerhalb von `waitUntil()` erfolgreich ausgeführt wurde.
2. Innerhalb von `addResourcesToCache()` verwenden wir die [`caches.open()`](/de/docs/Web/API/CacheStorage/open)-Methode, um einen neuen Cache namens `v1` zu erstellen, der die Version 1 unseres Site-Ressourcen-Caches darstellt. Dann rufen wir eine Funktion `addAll()` auf den erstellten Cache auf, die als Parameter ein Array von URLs zu allen Ressourcen nimmt, die Sie zwischenspeichern möchten. Die URLs sind relativ zum Standort des Workers.
3. Wenn das Promise abgelehnt wird, schlägt die Installation fehl und der Worker wird nichts tun. Das ist in Ordnung, da Sie Ihren Code korrigieren und es dann beim nächsten Mal wiederholen können, wenn die Registrierung erfolgt.
4. Nach einer erfolgreichen Installation aktiviert sich der Service Worker. Dies hat beim ersten Mal, dass Ihr Service Worker installiert/aktiviert wird, keine große Bedeutung, aber es bedeutet mehr, wenn der Service Worker aktualisiert wird (siehe den Abschnitt [Aktualisierung Ihres Service Workers](#aktualisierung_ihres_service_workers) weiter unten.)

> [!NOTE]
> [Die Web Storage API (`localStorage`)](/de/docs/Web/API/Web_Storage_API) funktioniert ähnlich wie der Service Worker Cache, ist jedoch synchron und daher in Service Workern nicht erlaubt.

> [!NOTE]
> [IndexedDB](/de/docs/Web/API/IndexedDB_API) kann innerhalb eines Service Workers für die Datenspeicherung verwendet werden, falls erforderlich.

### Benutzerdefinierte Antworten auf Anfragen

Da Sie Ihre Site-Assets zwischengespeichert haben, müssen Sie den Service Workern mitteilen, dass sie etwas mit dem zwischengespeicherten Inhalt tun sollen. Dies wird mit dem `fetch`-Ereignis durchgeführt.

1. Ein `fetch`-Ereignis wird jedes Mal ausgelöst, wenn eine Ressource abgerufen wird, die von einem Service Worker kontrolliert wird, was die Dokumente innerhalb des angegebenen Bereichs sowie alle in diesen Dokumenten referenzierten Ressourcen umfasst (zum Beispiel, wenn `index.html` eine Cross-Origin-Anfrage macht, um ein Bild einzubetten, geht das trotzdem durch seinen Service Worker).

2. Sie können einen `fetch`-Ereignis-Listener an den Service Worker anhängen und dann die `respondWith()`-Methode auf dem Ereignis aufrufen, um unsere HTTP-Antworten zu kapern und sie mit Ihrem eigenen Inhalt zu aktualisieren.

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(/* custom content goes here */);
   });
   ```

3. Wir könnten damit beginnen, mit der Ressource zu antworten, deren URL der der Netzwerk-Anfrage entspricht, in jedem Fall:

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(caches.match(event.request));
   });
   ```

   `caches.match(event.request)` ermöglicht es uns, jede von dem Netzwerk angeforderte Ressource mit der entsprechenden im Cache verfügbaren Ressource abzugleichen, wenn es eine übereinstimmende gibt. Das Matching erfolgt über URL und verschiedene Header, genau wie bei normalen HTTP-Anfragen.

![Diagramm zum Fetch-Ereignis](sw-fetch.svg)

## Wiederherstellung fehlgeschlagener Anfragen

`caches.match(event.request)` ist großartig, wenn es eine Übereinstimmung im Service Worker-Cache gibt, aber was passiert in Fällen, in denen es keine Übereinstimmung gibt? Wenn wir keine Art von Fehlerbehandlung bereitstellen, würde unser Promise mit `undefined` aufgelöst werden und wir würden nichts zurückerhalten.

Nachdem wir die Antwort aus dem Cache getestet haben, können wir auf eine reguläre Netzwerk-Anfrage zurückgreifen:

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

Wenn die Ressourcen nicht im Cache sind, werden sie vom Netzwerk angefordert.

Mit einer komplizierteren Strategie könnten wir nicht nur die Ressource vom Netzwerk anfordern, sondern sie auch in den Cache speichern, sodass spätere Anfragen für diese Ressource auch offline abgerufen werden können. Dies würde bedeuten, dass, wenn dem Star Wars-Galerie neue Bilder hinzugefügt werden, unsere App sie automatisch lesen und zwischenspeichern könnte. Der folgende Ausschnitt implementiert eine solche Strategie:

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

Wenn die Anforderungs-URL nicht im Cache verfügbar ist, fordern wir die Ressource mit einer Netzwerk-Anfrage mittels `await fetch(request)` an. Danach legen wir eine Kopie der Antwort in den Cache. Die `putInCache()`-Funktion verwendet `caches.open('v1')` und `cache.put()`, um die Ressource dem Cache hinzuzufügen. Die ursprüngliche Antwort wird an den Browser zurückgegeben, um sie an die Seite auszuliefern, die sie angefordert hat.

Das Klonen der Antwort ist notwendig, da Anforderungs- und Antwortströme nur einmal gelesen werden können. Um die Antwort an den Browser zurückzugeben und sie in den Cache zu legen, müssen wir sie klonen. Das Original wird an den Browser zurückgegeben und das

Klon wird an den Cache gesendet. Beide werden jeweils einmal gelesen.

Was etwas seltsam erscheinen mag, ist, dass das Promise, das von `putInCache()` zurückgegeben wird, nicht abgewartet wird. Der Grund ist, dass wir nicht darauf warten möchten, dass der Antwortenklon dem Cache hinzugefügt wird, bevor eine Antwort zurückgegeben wird. Wir müssen jedoch `event.waitUntil()` auf das Promise aufrufen, um sicherzustellen, dass der Service Worker nicht terminiert wird, bevor der Cache gefüllt ist.

Das einzige Problem, das wir jetzt haben, ist, dass, wenn die Anfrage nichts im Cache findet und das Netzwerk nicht verfügbar ist, unsere Anfrage trotzdem scheitern wird. Lassen Sie uns ein Standard-Fallback bereitstellen, damit der Benutzer zumindest etwas erhält:

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

Wir haben uns für dieses Fallback-Image entschieden, weil die einzigen Updates, die wahrscheinlich fehlschlagen, neue Bilder sind, da alles andere für die Installation im `install`-Ereignis-Listener, den wir zuvor gesehen haben, benötigt wird.

## Preloading von Service Worker-Navigation

Wenn aktiviert, beginnt das [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager)-Feature, Ressourcen zu laden, sobald die Fetch-Anfrage gestellt wird, und zwar parallel zur Aktivierung des Service Workers. Dies stellt sicher, dass der Download sofort bei der Navigation auf eine Seite beginnt, anstatt darauf zu warten, dass der Service Worker aktiviert wird. Diese Verzögerung tritt relativ selten auf, ist aber unvermeidbar, wenn sie auftritt, und kann signifikant sein.

Zuerst muss das Feature während der Aktivierung des Service Workers mit [`registration.navigationPreload.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable) aktiviert werden:

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Verwenden Sie dann [`event.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse), um auf den Abschluss des Downloads der vorab geladenen Ressource im `fetch`-Ereignis-Handler zu warten.

Unter Fortführung des Beispiels aus den vorangegangenen Abschnitten fügen wir den Code ein, um auf die vorab geladene Ressource zu warten, nachdem der Cache überprüft wurde und bevor vom Netzwerk abgerufen wird, wenn dies nicht erfolgreich ist.

Der neue Prozess lautet:

1. Cache überprüfen
2. Auf `event.preloadResponse` warten, das als `preloadResponsePromise` an die Funktion `cacheFirst()` übergeben wird. Cachen Sie das Ergebnis, wenn es zurückgegeben wird.
3. Wenn keines dieser definiert ist, gehen wir ins Netzwerk.

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

Beachten Sie, dass wir in diesem Beispiel dieselben Daten für die Ressource herunterladen und zwischenspeichern, egal ob sie "normal" oder vorab geladen heruntergeladen wird. Sie können stattdessen wählen, eine andere Ressource beim Preloading herunterzuladen und zu speichern. Weitere Informationen finden Sie unter [`NavigationPreloadManager` > Benutzerdefinierte Antworten](/de/docs/Web/API/NavigationPreloadManager#custom_responses).

## Aktualisierung Ihres Service Workers

Wenn Ihr Service Worker zuvor installiert wurde, dann jedoch eine neue Version des Workers bei Aktualisierung oder Laden einer Seite verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert. Sie wird erst aktiviert, wenn keine Seiten mehr geladen sind, die noch den alten Service Worker verwenden. Sobald keine solchen Seiten mehr geladen sind, aktiviert sich der neue Service Worker.

> [!NOTE]
> Es ist möglich, dies zu umgehen, indem Sie [`Clients.claim()`](/de/docs/Web/API/Clients/claim) verwenden.

Sie sollten Ihren `install`-Ereignis-Listener im neuen Service Worker auf etwas wie dieses aktualisieren (beachten Sie die neue Versionsnummer):

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

Während der Service Worker installiert wird, ist die vorherige Version weiterhin für Fetches verantwortlich. Die neue Version wird im Hintergrund installiert. Wir benennen den neuen Cache `v2`, sodass der vorherige `v1` Cache nicht gestört wird.

Wenn keine Seiten die vorherige Version verwenden, aktiviert sich der neue Worker und übernimmt die Verantwortung für Fetches.

### Löschen alter Caches

Wie wir im vorherigen Abschnitt gesehen haben, erstellen Sie beim Aktualisieren eines Service Workers auf eine neue Version einen neuen Cache in dessen `install`-Ereignis-Handler. Solange es offene Seiten gibt, die von der vorherigen Version des Workers gesteuert werden, müssen Sie beide Caches behalten, da die vorherige Version ihre Version des Caches benötigt. Sie können das `activate`-Ereignis verwenden, um Daten aus den vorherigen Caches zu entfernen.

Promises, die an `waitUntil()` übergeben werden, blockieren andere Ereignisse, bis sie abgeschlossen sind, sodass Sie sicher sein können, dass Ihre Bereinigungsoperation abgeschlossen ist, wenn Sie das erste `fetch`-Ereignis im neuen Service Worker erhalten.

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

## Entwickler-Tools

- [Chrome](https://www.chromium.org/blink/serviceworker/service-worker-faq/)
- [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/application/service_workers/index.html)
  - Die Schaltfläche "Diese Site vergessen", verfügbar in den [Anpassungsoptionen der Firefox-Symbolleiste](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars), kann verwendet werden, um Service Worker und deren Caches zu löschen.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide/service-workers/)

## Siehe auch

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP-Header
