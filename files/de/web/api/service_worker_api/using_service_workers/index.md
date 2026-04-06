---
title: Verwenden von Service Workern
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{DefaultAPISidebar("Service Workers API")}}

Dieser Artikel bietet Informationen zum Einstieg in Service Worker, einschließlich der grundlegenden Architektur, der Registrierung eines Service Workers, des Installations- und Aktivierungsprozesses für einen neuen Service Worker, der Aktualisierung Ihres Service Workers, der Cache-Kontrolle und benutzerdefinierten Antworten, alles im Kontext einer Anwendung mit Offline-Funktionalität.

## Das Prinzip von Service Workern

Ein übergeordnetes Problem, mit dem Webnutzer seit Jahren zu kämpfen haben, ist der Verlust von Konnektivität. Die beste Webanwendung der Welt bietet ein schlechtes Benutzererlebnis, wenn Sie sie nicht herunterladen können. Es gab verschiedene Versuche, Technologien zu schaffen, um dieses Problem zu lösen, und einige der Probleme wurden gelöst. Aber das übergeordnete Problem war, dass es keinen guten allgemeinen Kontrollmechanismus für Asset-Caching und benutzerdefinierte Netzwerk-Anfragen gab.

Service Worker beheben diese Probleme. Durch die Verwendung eines Service Workers können Sie eine Anwendung so einrichten, dass sie zuerst zwischengespeicherte Assets verwendet und somit eine Standarderfahrung bietet, selbst wenn sie offline ist, bevor dann mehr Daten aus dem Netzwerk abgerufen werden (häufig als “offline first” bezeichnet). Dies ist bereits mit nativen Apps verfügbar, was einer der Hauptgründe dafür ist, dass native Apps häufig Web-Apps vorgezogen werden.

Ein Service Worker fungiert wie ein Proxy-Server, der es Ihnen ermöglicht, Anfragen und Antworten zu modifizieren und sie durch Elemente aus seinem eigenen Cache zu ersetzen.

## Einrichtung zum Spielen mit Service Workern

Service Worker sind standardmäßig in allen modernen Browsern aktiviert. Um Code unter Verwendung von Service Workern auszuführen, müssen Sie Ihren Code über HTTPS bereitstellen — Service Worker sind aus Sicherheitsgründen darauf beschränkt, über HTTPS auszuführen. Ein Server, der HTTPS unterstützt, ist notwendig. Um Experimente zu hosten, können Sie Dienste wie GitHub, Netlify, Vercel usw. verwenden. Um die lokale Entwicklung zu erleichtern, wird `localhost` von Browsern ebenfalls als sicherer Ursprung betrachtet.

## Grundlegende Architektur

Mit Service Workern werden im Allgemeinen die folgenden Schritte für die grundlegende Einrichtung beobachtet:

1. Der Code des Service Workers wird abgerufen und dann mit [`serviceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Bei Erfolg wird der Service Worker in einem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgeführt; dies ist im Grunde eine spezielle Art von Worker-Kontext, der außerhalb des Hauptskriptausführungsthreads läuft und keinen Zugriff auf das DOM hat. Der Service Worker ist nun bereit, Ereignisse zu verarbeiten.
2. Die Installation findet statt. Ein `install`-Ereignis wird immer als erstes an einen Service Worker gesendet (dies kann verwendet werden, um den Prozess zum Befüllen einer IndexedDB zu starten und Site-Assets zu cachen). Während dieses Schrittes bereitet die Anwendung alles vor, um offline verfügbar zu sein.
3. Wenn der `install`-Handler abgeschlossen ist, wird der Service Worker als installiert betrachtet. Zu diesem Zeitpunkt kann eine frühere Version des Service Workers aktiv sein und offene Seiten kontrollieren. Da wir nicht möchten, dass zwei verschiedene Versionen desselben Service Workers gleichzeitig laufen, ist die neue Version noch nicht aktiv.
4. Sobald alle von der alten Version des Service Workers kontrollierten Seiten geschlossen wurden, kann die alte Version sicher zurückgezogen werden, und der neu installierte Service Worker erhält ein `activate`-Ereignis. Die Hauptverwendung von `activate` besteht darin, Ressourcen aufzuräumen, die in früheren Versionen des Service Workers verwendet wurden. Der neue Service Worker kann [`skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) aufrufen, um sofort aktiviert zu werden, ohne darauf zu warten, dass offene Seiten geschlossen werden. Der neue Service Worker erhält dann sofort `activate` und übernimmt alle offenen Seiten.
5. Nach der Aktivierung wird der Service Worker nun Seiten kontrollieren, jedoch nur diejenigen, die nach dem erfolgreichen `register()` geöffnet wurden. Mit anderen Worten, Dokumente müssen neu geladen werden, um tatsächlich kontrolliert zu werden, da ein Dokument sein Leben mit oder ohne Service Worker beginnt und das für seine gesamte Lebensdauer aufrechterhält. Um dieses Standardverhalten zu überschreiben und offene Seiten zu übernehmen, kann ein Service Worker [`clients.claim()`](/de/docs/Web/API/Clients/claim) aufrufen.
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

Um einfach die Grundlagen zu demonstrieren, wie ein Service Worker registriert und installiert wird, haben wir eine Demo namens [einfacher Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) erstellt, die eine einfache Lego-Bildergalerie von Star Wars darstellt. Es verwendet eine auf Versprechungen basierende Funktion, um Bilddaten aus einem JSON-Objekt zu lesen und die Bilder mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch) zu laden, bevor die Bilder in einer Linie auf der Seite angezeigt werden. Wir haben die Dinge bisher statisch gehalten. Es registriert, installiert und aktiviert auch einen Service Worker.

![Die Worte Star Wars gefolgt von einem Bild einer Lego-Version des Darth-Vader-Charakters](demo-screenshot.png)

Sie können den [Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) und den [einfachen Service Worker live laufend](https://bncb2v.csb.app/) sehen.

### Registrierung Ihres Workers

Der erste Codeblock in der JavaScript-Datei unserer App — `app.js` — sieht wie folgt aus. Dies ist unser Einstiegspunkt in die Nutzung von Service Workern.

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

1. Der `if`-Block führt einen Funktionserkennungstest durch, um sicherzustellen, dass Service Worker unterstützt werden, bevor versucht wird, einen zu registrieren.
2. Als nächstes verwenden wir die Funktion [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um den Service Worker für diese Seite zu registrieren. Der Code des Service Workers befindet sich in einer JavaScript-Datei, die sich innerhalb unserer App befindet (beachten Sie, dass dies die URL der Datei relativ zum Ursprung ist, nicht die JS-Datei, die darauf verweist).
3. Der `scope`-Parameter ist optional und kann verwendet werden, um das Unterset Ihrer Inhalte anzugeben, das der Service Worker kontrollieren soll. In diesem Fall haben wir `'/'` angegeben, was alle Inhalte unter dem Ursprung der App bedeutet. Wenn Sie es weglassen, wird es standardmäßig auf diesen Wert gesetzt, aber wir haben es hier zur Veranschaulichung angegeben.

Dies registriert einen Service Worker, der in einem Worker-Kontext läuft und somit keinen Zugriff auf das DOM hat.

Ein einzelner Service Worker kann viele Seiten kontrollieren. Jedes Mal, wenn eine Seite innerhalb Ihres Bereichs geladen wird, wird der Service Worker gegen diese Seite installiert und arbeitet daran. Beachten Sie daher, dass Sie vorsichtig mit globalen Variablen im Skript des Service Workers sein müssen: Jede Seite erhält nicht ihren eigenen einzigartigen Worker.

> [!NOTE]
> Eine großartige Sache an Service Workern ist, dass, wenn Sie Feature-Erkennung wie oben gezeigt verwenden, Browser, die Service Worker nicht unterstützen, einfach Ihre App online in der normalen erwarteten Weise verwenden können.

#### Warum schlägt mein Service Worker fehl, sich zu registrieren?

Ein Service Worker schlägt aus einem der folgenden Gründe fehl, sich zu registrieren:

- Sie führen Ihre Anwendung nicht in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) (über HTTPS) aus.
- Der Pfad der Service Worker-Datei ist falsch. Der Pfad muss relativ zum Ursprung sein, nicht zum Stammverzeichnis der App. In unserem Beispiel befindet sich der Worker unter `https://bncb2v.csb.app/sw.js`, und das Stammverzeichnis der App ist `https://bncb2v.csb.app/`, daher muss der Service Worker als `/sw.js` angegeben werden.
- Der Pfad zu Ihrem Service Worker zeigt auf einen Service Worker eines anderen Ursprungs als Ihre App.
- Die Service Worker-Registrierung enthält eine `scope`-Option, die breiter ist als erlaubt durch den Worker-Pfad. Der Standardscope eines Service Workers ist das Verzeichnis, in dem sich der Worker befindet. Mit anderen Worten, wenn das Skript `sw.js` sich in `/js/sw.js` befindet, kann es standardmäßig nur URLs im Pfad `/js/` (oder darunter) kontrollieren. Der Scope eines Service Workers kann mit dem Header {{HTTPHeader("Service-Worker-Allowed")}} erweitert (oder verkleinert) werden.
- Browserspezifische Einstellungen sind aktiviert, wie zum Beispiel das Blockieren aller Cookies, der private Modus, das automatische Löschen von Cookies beim Schließen usw. Weitere Informationen finden Sie in der [`serviceWorker.register()` Browser-Kompatibilität](/de/docs/Web/API/ServiceWorkerContainer/register#browser_compatibility).

### Installieren und Aktivieren: Ihren Cache befüllen

Nachdem Ihr Service Worker registriert ist, wird der Browser versuchen, den Service Worker für Ihre Seite/Ihr Site zu installieren und dann zu aktivieren.

Das `install`-Ereignis ist das erste Ereignis, das bei der Installation oder Aktualisierung des Service Workers ausgelöst wird. Es wird nur einmal ausgelöst, unmittelbar nachdem die Registrierung erfolgreich abgeschlossen ist, und wird in der Regel verwendet, um die Offline-Caching-Fähigkeiten Ihres Browsers mit den Assets zu befüllen, die Sie benötigen, um Ihre App offline auszuführen. Dazu verwenden wir die Speicher-API von Service Worker — [`cache`](/de/docs/Web/API/Cache) — ein globales Objekt auf dem Service Worker, das es uns ermöglicht, durch Antworten ausgelieferte Assets zu speichern, benannt nach ihren Anfragen. Diese API funktioniert ähnlich wie der Standardcache des Browsers, ist jedoch spezifisch für Ihre Domain. Die Inhalte des Caches werden so lange gespeichert, bis Sie sie löschen.

So geht unser Service Worker mit dem `install`-Ereignis um:

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

1. Hier fügen wir einen `install`-Ereignis-Listener zum Service Worker hinzu (daher `self`) und fügen dann eine [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode an das Ereignis an — dies stellt sicher, dass der Service Worker nicht installiert wird, bis der Code innerhalb von `waitUntil()` erfolgreich durchgeführt wurde.
2. Innerhalb von `addResourcesToCache()` verwenden wir die Methode [`caches.open()`](/de/docs/Web/API/CacheStorage/open), um einen neuen Cache namens `v1` zu erstellen, der Version 1 unseres Site-Resource-Caches sein wird. Dann rufen wir eine Funktion `addAll()` auf dem erstellten Cache auf, die als Parameter ein Array von URLs zu allen Ressourcen nimmt, die Sie cachen möchten. Die URLs sind relativ zum Standort des Workers.
3. Wenn das Versprechen abgelehnt wird, schlägt die Installation fehl, und der Worker wird nichts tun. Das ist in Ordnung, da Sie Ihren Code beheben können und dann beim nächsten Mal erneut versuchen können, wenn die Registrierung erfolgt.
4. Nach einer erfolgreichen Installation wird der Service Worker aktiv. Dies hat bei der ersten Installation/Aktivierung Ihres Service Workers keinen großen Nutzen, bedeutet jedoch mehr, wenn der Service Worker aktualisiert wird (siehe den Abschnitt [Aktualisieren Ihres Service Workers](#aktualisieren_ihres_service_workers) später).

> [!NOTE]
> [Die Web Storage API (`localStorage`)](/de/docs/Web/API/Web_Storage_API) funktioniert auf ähnliche Weise wie der Service Worker-Cache, ist jedoch synchron, daher nicht in Service Workern erlaubt.

> [!NOTE]
> [IndexedDB](/de/docs/Web/API/IndexedDB_API) kann innerhalb eines Service Workers für die Datenspeicherung verwendet werden, wenn Sie es benötigen.

### Benutzerdefinierte Antworten auf Anfragen

Jetzt haben Sie Ihre Website-Ressourcen im Cache, Sie müssen den Service Workern mitteilen, etwas mit den zwischengespeicherten Inhalten zu tun. Dies wird mit dem `fetch`-Ereignis getan.

1. Ein `fetch`-Ereignis wird jedes Mal ausgelöst, wenn eine Ressource, die von einem Service Worker kontrolliert wird, abgerufen wird, was die Dokumente im angegebenen Bereich und alle in diesen Dokumenten referenzierten Ressourcen einschließt (zum Beispiel, wenn `index.html` eine abgekoppelte Anfrage für das Einbetten eines Bildes macht, geht das trotzdem durch seinen Service Worker).

2. Sie können einen `fetch`-Ereignis-Listener zum Service Worker anfügen und dann die Methode `respondWith()` auf dem Ereignis aufrufen, um Ihre HTTP-Antworten zu kapern und mit Ihrem eigenen Inhalt zu aktualisieren.

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(/* custom content goes here */);
   });
   ```

3. Wir könnten damit beginnen, mit der Ressource zu antworten, deren URL mit der der Netzwerk-Anfrage übereinstimmt, in jedem Fall:

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(caches.match(event.request));
   });
   ```

   `caches.match(event.request)` ermöglicht es uns, jede Ressource, die aus dem Netzwerk angefordert wird, mit der entsprechenden im Cache verfügbaren Ressource abzugleichen, wenn eine passende verfügbar ist. Das Matching erfolgt über URL und verschiedene Header, genau wie bei normalen HTTP-Anfragen.

![Fetch-Ereignisdiagramm](sw-fetch.svg)

## Wiederherstellen fehlgeschlagener Anfragen

`caches.match(event.request)` ist also großartig, wenn es eine Übereinstimmung im Service Worker-Cache gibt, aber was ist mit Fällen, in denen es keine Übereinstimmung gibt? Wenn wir keinen Ausfallhandling bieten, würde unser Versprechen mit `undefined` aufgelöst und wir würden nichts zurückbekommen.

Nachdem wir die Antwort aus dem Cache getestet haben, können wir auf eine normale Netzwerk-Anfrage zurückgreifen:

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

Mit einer aufwändigeren Strategie könnten wir nicht nur die Ressource aus dem Netzwerk anfordern, sondern sie auch in den Cache speichern, damit spätere Anfragen für diese Ressource auch offline abgerufen werden können. Dies würde bedeuten, dass, wenn zusätzliche Bilder zur Star Wars-Galerie hinzugefügt würden, unsere App automatisch diese laden und cachen könnte. Das folgende Snippet implementiert eine solche Strategie:

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

Wenn die Anforderungs-URL nicht im Cache verfügbar ist, fordern wir die Ressource mit `await fetch(request)` aus der Netzwerk-Anfrage an. Danach legen wir ein Klon der Antwort in den Cache. Die `putInCache()`-Funktion verwendet `caches.open('v1')` und `cache.put()`, um die Ressource in den Cache zu legen. Die Originalantwort wird an den Browser zurückgegeben, um sie an die aufrufende Seite zu übergeben.

Das Klonen der Antwort ist notwendig, weil Anforderungs- und Antworstreams nur einmal gelesen werden können. Um die Antwort an den Browser zurückzugeben und sie in den Cache zu legen, müssen wir sie klonen. Das Original wird an den Browser zurückgegeben und der Klon in den Cache gesendet. Beide werden jeweils einmal gelesen.

Was etwas seltsam aussehen könnte, ist, dass das von `putInCache()` zurückgegebene Versprechen nicht erwartet wird. Der Grund ist, dass wir nicht warten wollen, bis der Antwortklon dem Cache hinzugefügt wurde, bevor eine Antwort zurückgegeben wird. Wir müssen jedoch `event.waitUntil()` auf dem Versprechen aufrufen, um sicherzustellen, dass der Service Worker nicht beendet wird, bevor der Cache gefüllt ist.

Das einzige Problem, das wir jetzt haben, ist, dass, wenn die Anfrage nichts im Cache findet und das Netzwerk nicht verfügbar ist, unsere Anfrage dennoch fehlschlägt. Lassen Sie uns ein Standard-Fallback bereitstellen, damit der Benutzer zumindest etwas erhält, egal was passiert:

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

Wir haben uns für dieses Fallback-Bild entschieden, weil die einzigen Updates, die wahrscheinlich fehlschlagen, neue Bilder sind, da alles andere für die Installation im `install`-Ereignis-Listener, den wir zuvor gesehen haben, abhängig ist.

## Service Worker Navigation Preload

Wenn aktiviert, startet die Funktion [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager) das Herunterladen von Ressourcen, sobald die Fetch-Anfrage gestellt wird, und parallel zur Aktivierung des Service Workers. Dies stellt sicher, dass der Download sofort bei der Navigation zu einer Seite beginnt, anstatt auf die Aktivierung des Service Workers warten zu müssen. Diese Verzögerung tritt relativ selten auf, ist jedoch unvermeidlich, wenn sie auftritt und kann erheblich sein.

Zuerst muss die Funktion während der Aktivierung des Service Workers aktiviert werden, unter Verwendung von [`registration.navigationPreload.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable):

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Verwenden Sie dann [`event.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse), um im `fetch`-Ereignishandler auf das Herunterladen der vorab geladenen Ressource zu warten.

In Fortsetzung des Beispiels aus den vorhergehenden Abschnitten fügen wir den Code ein, um auf die vorab geladene Ressource zu warten, nachdem der Cache überprüft wurde und bevor eine Anfrage an das Netzwerk gesendet wird, falls dies nicht gelingt.

Der neue Prozess ist:

1. Cache überprüfen
2. Auf `event.preloadResponse` warten, das als `preloadResponsePromise` an die Funktion `cacheFirst()` übergeben wird. Das Ergebnis cachen, wenn es zurückgegeben wird.
3. Wenn keiner dieser Werte definiert ist, gehen wir zum Netzwerk.

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

Beachten Sie, dass wir in diesem Beispiel für die Ressource dieselben Daten herunterladen und cachen, unabhängig davon, ob sie "normal" oder vorab geladen heruntergeladen wird. Sie können stattdessen wählen, bei der Vorabladung eine andere Ressource herunterzuladen und zu cachen. Weitere Informationen finden Sie unter [`NavigationPreloadManager` > Benutzerdefinierte Antworten](/de/docs/Web/API/NavigationPreloadManager#custom_responses).

## Aktualisieren Ihres Service Workers

Wenn Ihr Service Worker zuvor installiert wurde, aber dann eine neue Version des Workers bei einem Refresh oder einer Seitenladung verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert. Sie wird nur aktiviert, wenn keine Seiten mehr geladen sind, die noch den alten Service Worker verwenden. Sobald keine solchen Seiten mehr geladen sind, aktiviert sich der neue Service Worker.

> [!NOTE]
> Es ist möglich, dies zu umgehen, indem [`Clients.claim()`](/de/docs/Web/API/Clients/claim) verwendet wird.

Sie möchten Ihren `install`-Ereignis-Listener im neuen Service Worker in etwas wie dies aktualisieren (beachten Sie die neue Versionsnummer):

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

Während der Service Worker installiert wird, ist die vorherige Version noch für Abrufe verantwortlich. Die neue Version wird im Hintergrund installiert. Wir nennen den neuen Cache `v2`, damit der vorherige `v1`-Cache nicht gestört wird.

Wenn keine Seiten mehr die vorherige Version verwenden, wird der neue Worker aktiviert und ist für Abrufe verantwortlich.

### Löschen alter Caches

Wie wir im letzten Abschnitt gesehen haben, erstellen Sie, wenn Sie einen Service Worker auf eine neue Version aktualisieren, einen neuen Cache in dessen `install`-Ereignis-Handler. Solange es offene Seiten gibt, die von der vorherigen Version des Workers kontrolliert werden, müssen Sie beide Caches behalten, da die vorherige Version ihren Cache benötigt. Sie können das `activate`-Ereignis verwenden, um Daten aus den vorherigen Caches zu entfernen.

Versprechen, die an `waitUntil()` übergeben werden, blockieren andere Ereignisse bis zum Abschluss, sodass Sie sicher sein können, dass Ihr Bereinigungsprozess abgeschlossen ist, bis Sie Ihr erstes `fetch`-Ereignis im neuen Service Worker erhalten.

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
  - Die Schaltfläche "Vergessen Sie diese Seite" kann in den [Toolbar-Anpassungsoptionen von Firefox](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars) verwendet werden, um Service Worker und deren Caches zu löschen.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools/progressive-web-apps/#service-workers)

## Siehe auch

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Arbeiten mit Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP-Header
