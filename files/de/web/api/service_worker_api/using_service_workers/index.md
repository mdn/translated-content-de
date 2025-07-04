---
title: Verwendung von Service Workern
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{DefaultAPISidebar("Service Workers API")}}

Dieser Artikel enthält Informationen zum Einstieg in Service Worker, einschließlich grundlegender Architektur, Registrierung eines Service Workers, des Installations- und Aktivierungsprozesses für einen neuen Service Worker, Aktualisierung Ihres Service Workers sowie Cache-Kontrolle und benutzerdefinierte Antworten, alles im Kontext einer App mit Offline-Funktionalität.

## Das Konzept von Service Workern

Ein übergeordnetes Problem, mit dem sich Webnutzer seit Jahren herumschlagen, ist der Verlust der Konnektivität. Die beste Web-App der Welt wird ein schlechtes Benutzererlebnis bieten, wenn sie nicht heruntergeladen werden kann. Es gab verschiedene Versuche, Technologien zu schaffen, um dieses Problem zu lösen, und einige der Probleme wurden gelöst. Aber das übergeordnete Problem war, dass es keinen guten allgemeinen Kontrollmechanismus für das Caching von Assets und benutzerdefinierte Netzwerk-Anfragen gab.

Service Worker beheben diese Probleme. Durch die Verwendung eines Service Workers können Sie eine App so einrichten, dass sie zwischengespeicherte Assets zuerst verwendet, was eine Standarderfahrung auch im Offline-Modus bietet, bevor dann weitere Daten aus dem Netzwerk abgerufen werden (allgemein bekannt als "Offline-First"). Dies ist bereits mit nativen Apps möglich, was einer der Hauptgründe ist, warum häufig native Apps gegenüber Web-Apps gewählt werden.

Ein Service Worker fungiert wie ein Proxy-Server, der es Ihnen ermöglicht, Anfragen und Antworten zu modifizieren und durch Elemente aus seinem eigenen Cache zu ersetzen.

## Einrichtung des Service Workers

Service Worker sind in allen modernen Browsern standardmäßig aktiviert. Um Code mit Service Workern auszuführen, müssen Sie Ihren Code über HTTPS bereitstellen — Service Worker sind aus Sicherheitsgründen auf die Ausführung über HTTPS beschränkt. Ein Server, der HTTPS unterstützt, ist erforderlich. Um Experimente zu hosten, können Sie Dienste wie GitHub, Netlify, Vercel usw. verwenden. Zur Erleichterung der lokalen Entwicklung wird `localhost` von Browsern als sicherer Ursprung betrachtet.

## Grundlegende Architektur

Mit Service Workern werden im Allgemeinen die folgenden Schritte für die grundlegende Einrichtung durchgeführt:

1. Der Code des Service Workers wird abgerufen und dann über [`serviceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Wenn dies erfolgreich ist, wird der Service Worker in einem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgeführt; dies ist im Grunde eine spezielle Art von Worker-Kontext, der außerhalb des Haupt-Skript-Ausführungsthreads läuft, ohne DOM-Zugriff. Der Service Worker ist jetzt bereit, Ereignisse zu verarbeiten.
2. Die Installation findet statt. Ein `install`-Ereignis ist immer das erste, das an einen Service Worker gesendet wird (dies kann verwendet werden, um den Prozess der Befüllung einer IndexedDB und des Cachens von Website-Assets zu starten). Während dieses Schritts bereitet sich die Anwendung darauf vor, alles für die Offline-Nutzung verfügbar zu machen.
3. Wenn der `install`-Handler abgeschlossen ist, wird der Service Worker als installiert betrachtet. Zu diesem Zeitpunkt kann eine frühere Version des Service Workers aktiv sein und geöffnete Seiten steuern. Da wir nicht möchten, dass zwei verschiedene Versionen desselben Service Workers gleichzeitig ausgeführt werden, ist die neue Version noch nicht aktiv.
4. Sobald alle durch die alte Version des Service Workers gesteuerten Seiten geschlossen wurden, kann die alte Version sicher zurückgezogen werden und der neu installierte Service Worker erhält ein `activate`-Ereignis. Die primäre Nutzung von `activate` besteht darin, Ressourcen zu bereinigen, die in früheren Versionen des Service Workers verwendet wurden. Der neue Service Worker kann [`skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) aufrufen, um zu fragen, ob er sofort aktiviert werden kann, ohne darauf zu warten, dass geöffnete Seiten geschlossen werden. Der neue Service Worker erhält dann sofort `activate` und übernimmt alle geöffneten Seiten.
5. Nach der Aktivierung steuert der Service Worker nun Seiten, aber nur diejenigen, die nach dem erfolgreichen `register()` geöffnet wurden. Mit anderen Worten, Dokumente müssen neu geladen werden, um tatsächlich gesteuert zu werden, da ein Dokument entweder mit oder ohne Service Worker sein Leben beginnt und diesen Zustand während seiner Lebensdauer beibehält. Um dieses Standardverhalten zu überschreiben und geöffnete Seiten zu übernehmen, kann ein Service Worker [`clients.claim()`](/de/docs/Web/API/Clients/claim) aufrufen.
6. Immer wenn eine neue Version eines Service Workers abgerufen wird, geschieht dieser Zyklus erneut und die Reste der vorherigen Version werden während der Aktivierung der neuen Version bereinigt.

![lifecycle diagram](sw-lifecycle.svg)

Hier ist eine Zusammenfassung der verfügbaren Service Worker-Ereignisse:

- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
- [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)
- Funktionale Ereignisse
  - [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
  - [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event)
  - [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)

## Demo

Um nur die Grundlagen der Registrierung und Installation eines Service Workers zu demonstrieren, haben wir eine Demo namens [simple service worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) erstellt, die eine einfache Star Wars Lego-Bildergalerie ist. Sie verwendet eine versprechensbasierte Funktion, um Bilddaten aus einem JSON-Objekt zu lesen und die Bilder mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch) zu laden, bevor die Bilder nacheinander auf der Seite angezeigt werden. Wir haben die Dinge vorerst statisch gehalten. Es registriert, installiert und aktiviert ebenfalls einen Service Worker.

![Die Wörter Star Wars gefolgt von einem Bild einer Lego-Version der Darth Vader-Figur](demo-screenshot.png)

Sie können den [Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) und den [einfachen Service Worker live laufen sehen](https://bncb2v.csb.app/).

### Registrierung Ihres Workers

Der erste Codeblock in der JavaScript-Datei unserer App — `app.js` — sieht wie folgt aus. Dies ist unser Einstiegspunkt in die Verwendung von Service Workern.

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
2. Anschließend verwenden wir die Funktion [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um den Service Worker für diese Seite zu registrieren. Der Code des Service Workers befindet sich in einer JavaScript-Datei innerhalb unserer App (beachten Sie, dass dies die URL der Datei relativ zum Ursprung ist, nicht die JS-Datei, die darauf verweist).
3. Der `scope`-Parameter ist optional und kann verwendet werden, um den Teil Ihrer Inhalte anzugeben, den der Service Worker steuern soll. In diesem Fall haben wir `'/'` angegeben, was alle Inhalte unter dem Ursprung der App bedeutet. Wenn Sie ihn weglassen, wird er standardmäßig auf diesen Wert gesetzt, wir haben ihn jedoch zu Illustrationszwecken hier angegeben.

Dieser registriert einen Service Worker, der in einem Worker-Kontext läuft und daher keinen DOM-Zugriff hat.

Ein einzelner Service Worker kann viele Seiten steuern. Jedes Mal, wenn eine Seite innerhalb Ihres Scopes geladen wird, wird der Service Worker gegen diese Seite installiert und arbeitet darauf. Beachten Sie daher, dass Sie bei globalen Variablen im Service Worker-Skript vorsichtig sein müssen: Jede Seite erhält keinen eigenen einzigartigen Worker.

> [!NOTE]
> Ein großer Vorteil von Service Workern ist, dass Browser, die Service Worker nicht unterstützen, einfach Ihre App online auf die gewohnte Weise nutzen können, wenn Sie wie oben gezeigt eine Feature-Erkennung verwenden.

#### Warum schlägt die Registrierung meines Service Workers fehl?

Ein Service Worker kann aus einem der folgenden Gründe nicht registriert werden:

- Sie führen Ihre Anwendung nicht in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) (über HTTPS) aus.
- Der Pfad der Service Worker-Datei ist falsch.
  Der Pfad muss relativ zum Ursprung sein, nicht zum Stammverzeichnis der App.
  In unserem Beispiel befindet sich der Worker unter `https://bncb2v.csb.app/sw.js`, und das Root der App ist `https://bncb2v.csb.app/`, daher muss der Service Worker als `/sw.js` angegeben werden.
- Der Pfad zu Ihrem Service Worker zeigt auf einen Service Worker eines anderen Ursprungs als Ihrer App.
- Die Registrierung des Service Workers enthält eine `scope`-Option, die breiter ist als durch den Worker-Pfad erlaubt.
  Der Standardscope für einen Service Worker ist das Verzeichnis, in dem sich der Worker befindet.
  Mit anderen Worten, wenn das Skript `sw.js` in `/js/sw.js` liegt, kann es standardmäßig nur URLs im (oder untergeordneten) `/js/`-Pfad steuern.
  Der Scope für einen Service Worker kann mit dem {{HTTPHeader("Service-Worker-Allowed")}}-Header erweitert (oder eingeschränkt) werden.
- Browserspezifische Einstellungen sind aktiviert, wie das Blockieren aller Cookies, der private Browsing-Modus, das automatische Löschen von Cookies beim Schließen usw.
  Siehe [`serviceWorker.register()`-Browser-Kompatibilität](/de/docs/Web/API/ServiceWorkerContainer/register#browser_compatibility) für weitere Informationen.

### Installation und Aktivierung: Befüllen Ihres Caches

Nachdem Ihr Service Worker registriert wurde, versucht der Browser, den Service Worker für Ihre Seite/Ihren Standort zu installieren und dann zu aktivieren.

Das `install`-Ereignis ist das erste Ereignis, das bei der Installation oder Aktualisierung des Service Workers ausgelöst wird.
Es wird nur einmal, unmittelbar nach Abschluss der Registrierung, ausgegeben und wird im Allgemeinen verwendet, um die Offline-Caching-Fähigkeiten Ihres Browsers mit den Assets zu befüllen, die Sie benötigen, um Ihre App offline auszuführen. Dazu verwenden wir die Speicher-API des Service Workers — [`cache`](/de/docs/Web/API/Cache) — ein globales Objekt auf dem Service Worker, das es uns ermöglicht, durch Antworten gelieferte Assets zu speichern, und diese mit ihren Anfragen zu verknüpfen. Diese API funktioniert ähnlich wie der Standardcache des Browsers, ist jedoch spezifisch für Ihre Domain. Der Inhalt des Caches wird so lange aufbewahrt, bis Sie ihn löschen.

So behandelt unser Service Worker das `install`-Ereignis:

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

1. Hier fügen wir dem Service Worker (daher `self`) einen `install`-Ereignislistener hinzu und hängen dann eine [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode an das Ereignis an — dies stellt sicher, dass der Service Worker nicht installiert wird, bis der Code innerhalb von `waitUntil()` erfolgreich ausgeführt wurde.
2. Innerhalb von `addResourcesToCache()` verwenden wir die Methode [`caches.open()`](/de/docs/Web/API/CacheStorage/open), um einen neuen Cache namens `v1` zu erstellen, der Version 1 unseres Site-Resources-Caches sein wird. Dann rufen wir eine Funktion `addAll()` auf dem erstellten Cache auf, die als Parameter ein Array von URLs zu allen Ressourcen annimmt, die Sie cachen möchten. Die URLs sind relativ zum Standort des Workers.
3. Wenn das Versprechen abgelehnt wird, schlägt die Installation fehl und der Worker wird nichts tun. Das ist in Ordnung, da Sie Ihren Code reparieren und es dann beim nächsten Registrierungsversuch erneut versuchen können.
4. Nach einer erfolgreichen Installation wird der Service Worker aktiviert. Dies hat beim ersten Mal, wenn Ihr Service Worker installiert/aktiviert wird, keine große Bedeutung, aber es bedeutet mehr, wenn der Service Worker aktualisiert wird (siehe den Abschnitt [Aktualisierung Ihres Service Workers](#aktualisierung_ihres_service_workers) weiter unten).

> [!NOTE]
> [Die Web Storage API (`localStorage`)](/de/docs/Web/API/Web_Storage_API) funktioniert ähnlich wie der Cache des Service Workers, ist jedoch synchron und daher in Service Workern nicht erlaubt.

> [!NOTE]
> [IndexedDB](/de/docs/Web/API/IndexedDB_API) kann innerhalb eines Service Workers für die Datenspeicherung verwendet werden, wenn Sie es benötigen.

### Benutzerdefinierte Antworten auf Anfragen

Jetzt, wo Sie Ihre Site-Assets zwischengespeichert haben, müssen Sie den Service Workern mitteilen, dass sie etwas mit dem zwischengespeicherten Inhalt tun sollen. Dies wird mit dem `fetch`-Ereignis erledigt.

1. Ein `fetch`-Ereignis wird jedes Mal ausgelöst, wenn eine von einem Service Worker gesteuerte Ressource abgerufen wird, was die Dokumente im angegebenen Scope und alle in diesen Dokumenten referenzierten Ressourcen umfasst (zum Beispiel, wenn `index.html` eine Cross-Origin-Anfrage zur Einbettung eines Bildes stellt, geht dies trotzdem durch seinen Service Worker.)

2. Sie können einen `fetch`-Ereignislistener an den Service Worker anhängen und dann die Methode `respondWith()` auf dem Ereignis aufrufen, um unsere HTTP-Antworten zu kapern und sie mit Ihrem eigenen Inhalt zu aktualisieren.

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(/* custom content goes here */);
   });
   ```

3. Wir könnten damit beginnen, mit der Ressource zu antworten, deren URL der der Netzwerk-Anfrage in jedem Fall entspricht:

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(caches.match(event.request));
   });
   ```

   `caches.match(event.request)` ermöglicht es uns, jede von der Netzwerk-Anfrage angeforderte Ressource mit der entsprechenden im Cache verfügbaren Ressource abzugleichen, wenn eine passende verfügbar ist. Der Abgleich erfolgt über die URL und verschiedene Header, genauso wie bei normalen HTTP-Anfragen.

![Fetch-Ereignis-Diagramm](sw-fetch.svg)

## Wiederherstellung fehlgeschlagener Anfragen

Also `caches.match(event.request)` ist großartig, wenn es einen Treffer im Service Worker-Cache gibt, aber was ist mit den Fällen, in denen es keinen Treffer gibt? Wenn wir keine Art von Fehlerbehandlung liefern, würde unser Versprechen mit `undefined` aufgelöst und wir würden nichts zurückbekommen.

Nach dem Testen der Antwort aus dem Cache können wir auf eine reguläre Netzwerk-Anfrage zurückgreifen:

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

Mit einer ausgefeilteren Strategie könnten wir nicht nur die Ressource aus dem Netzwerk anfordern, sondern auch in den Cache speichern, damit spätere Anfragen für diese Ressource ebenfalls offline abgerufen werden könnten. Dies würde bedeuten, dass wenn zusätzliche Bilder zur Star Wars-Galerie hinzugefügt würden, unsere App sie automatisch abrufen und cachen könnte. Das folgende Snippet implementiert eine solche Strategie:

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

Wenn die Anforderungs-URL nicht im Cache verfügbar ist, fordern wir die Ressource aus der Netzwerk-Anfrage mit `await fetch(request)` an. Danach legen wir eine Kopie der Antwort in den Cache. Die `putInCache()`-Funktion verwendet `caches.open('v1')` und `cache.put()`, um die Ressource im Cache hinzuzufügen. Die ursprüngliche Antwort wird an den Browser zurückgegeben, um sie an die Seite weiterzugeben, die sie angefordert hat.

Das Klonen der Antwort ist notwendig, da Anforderungs- und Antwortströme nur einmal gelesen werden können. Um die Antwort an den Browser zurückzugeben und sie in den Cache zu legen, müssen wir sie klonen. So wird die Originalantwort an den Browser zurückgegeben und die Kopie wird an den Cache gesendet. Jede wird einmal gelesen.

Was etwas seltsam aussehen mag, ist, dass das von `putInCache()` zurückgegebene Versprechen nicht erwartet wird. Der Grund ist, dass wir nicht warten möchten, bis die Antwortkopie zum Cache hinzugefügt wurde, bevor wir eine Antwort zurückgeben. Wir müssen jedoch `event.waitUntil()` auf das Versprechen aufrufen, um sicherzustellen, dass der Service Worker nicht beendet wird, bevor der Cache gefüllt ist.

Das einzige Problem, das wir jetzt haben, ist, dass wenn die Anfrage nichts im Cache trifft und das Netzwerk nicht verfügbar ist, unsere Anfrage trotzdem fehlschlagen wird. Lassen Sie uns eine Standard-Fehlertoleranz bereitstellen, damit der Benutzer unabhängig davon zumindest etwas bekommt:

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

Wir haben uns für dieses Fallback-Bild entschieden, weil die einzigen Updates, die wahrscheinlich fehlschlagen, neue Bilder sind, da alles andere für die Installation in dem `install`-Ereignis-Listener notwendig ist, den wir zuvor gesehen haben.

## Navigation Preload für Service Worker

Falls aktiviert, startet das [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager)-Feature das Herunterladen von Ressourcen, sobald die `fetch`-Anfrage ausgelöst wird, parallel zur Aktivierung des Service Workers. Dies stellt sicher, dass der Download sofort bei der Navigation zu einer Seite beginnt, anstatt darauf zu warten, dass der Service Worker aktiviert wird. Diese Verzögerung tritt relativ selten auf, ist aber unvermeidlich, wenn sie auftritt, und kann erheblich sein.

Zuerst muss das Feature während der Aktivierung des Service Workers mit [`registration.navigationPreload.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable) aktiviert werden:

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Verwenden Sie dann [`event.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse), um auf den Abschluss des Preloads der Ressource im `fetch`-Ereignis-Handler zu warten.

Im Fortgang des Beispiels aus den vorhergehenden Abschnitten fügen wir den Code ein, um nach dem Cache-Check auf die Preload-Ressource zu warten und bevor wir vom Netzwerk abrufen, wenn dies nicht erfolgreich ist.

Der neue Prozess ist:

1. Cache überprüfen
2. Auf `event.preloadResponse` warten, das als `preloadResponsePromise` an die Funktion `cacheFirst()` übergeben wird. Cache das Ergebnis, falls es zurückgegeben wird.
3. Wenn keins davon definiert ist, gehen wir ins Netzwerk.

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

Beachten Sie, dass wir in diesem Beispiel die gleichen Daten für die Ressource herunterladen und cachen, unabhängig davon, ob sie "normal" oder vorgespeichert heruntergeladen wird. Sie können jedoch stattdessen wählen, eine andere Ressource beim Preload herunterzuladen und zu cachen. Für weitere Informationen siehe [`NavigationPreloadManager` > Benutzerdefinierte Antworten](/de/docs/Web/API/NavigationPreloadManager#custom_responses).

## Aktualisierung Ihres Service Workers

Wenn Ihr Service Worker zuvor installiert wurde, aber beim Aktualisieren eine neue Version des Workers verfügbar wird, wird die neue Version im Hintergrund installiert, jedoch noch nicht aktiviert. Sie wird erst aktiviert, wenn keine Seiten mehr geladen sind, die noch den alten Service Worker verwenden. Sobald keine solchen Seiten mehr geladen sind, wird der neue Service Worker aktiviert.

> [!NOTE]
> Es ist möglich, dies zu umgehen, indem [`Clients.claim()`](/de/docs/Web/API/Clients/claim) verwendet wird.

Sie möchten Ihren `install`-Ereignis-Listener im neuen Service Worker auf etwas Ähnliches aktualisieren (beachten Sie die neue Versionsnummer):

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

Während der Service Worker installiert wird, ist die vorherige Version weiterhin für die Fetches verantwortlich. Die neue Version wird im Hintergrund installiert. Wir nennen den neuen Cache `v2`, damit der vorherige `v1`-Cache unberührt bleibt.

Wenn keine Seiten die vorherige Version verwenden, aktiviert der neue Worker und wird für die Fetches verantwortlich.

### Löschen alter Caches

Wie wir im letzten Abschnitt gesehen haben, erstellen Sie, wenn Sie einen Service Worker auf eine neue Version aktualisieren, einen neuen Cache in dessen `install`-Ereignis-Handler. Solange es offene Seiten gibt, die von der vorherigen Version des Workers gesteuert werden, müssen Sie beide Caches behalten, weil die vorherige Version ihren Cache benötigt. Sie können das `activate`-Ereignis verwenden, um Daten aus den vorherigen Caches zu entfernen.

Promises, die an `waitUntil()` übergeben werden, blockieren andere Ereignisse bis zur Fertigstellung, daher können Sie sicher sein, dass Ihr Bereinigungsprozess abgeschlossen sein wird, bevor Sie Ihr erstes `fetch`-Ereignis auf dem neuen Service Worker erhalten.

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
  - Die Schaltfläche "Diese Seite vergessen", verfügbar in [den Symbolleistenschaltflächenanpassungsoptionen von Firefox](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars), kann verwendet werden, um Service Worker und deren Caches zu löschen.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools/service-workers/)

## Siehe auch

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP-Header
