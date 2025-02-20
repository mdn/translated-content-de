---
title: Verwendung von Service Workern
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: 2fdcb82dd6f66495d4edbd7b868076d8472bf5fb
---

{{DefaultAPISidebar("Service Workers API")}}

Dieser Artikel bietet Informationen zum Einstieg in Service Worker, einschließlich grundlegender Architektur, Registrierung eines Service Workers, Installations- und Aktivierungsprozess für einen neuen Service Worker, Aktualisierung Ihres Service Workers, Cache-Kontrolle und benutzerdefinierte Antworten, alles im Kontext einer App mit Offline-Funktionalität.

## Das Grundkonzept von Service Workern

Ein übergeordnetes Problem, mit dem Webbenutzer seit Jahren zu kämpfen haben, ist der Verlust der Konnektivität. Die beste Web-App der Welt bietet eine schreckliche Benutzererfahrung, wenn man sie nicht herunterladen kann. Es gab verschiedene Versuche, Technologien zu entwickeln, um dieses Problem zu lösen, und einige der Probleme wurden gelöst. Aber das übergeordnete Problem war, dass es keinen guten Mechanismus zur Steuerung des Asset-Cachings und benutzerdefinierter Netzwerkanfragen gab.

Service Worker beheben diese Probleme. Mit einem Service Worker können Sie eine App so einrichten, dass zuerst zwischengespeicherte Assets verwendet werden, um auch offline eine standardmäßige Benutzererfahrung zu bieten, bevor dann weitere Daten aus dem Netzwerk abgerufen werden (häufig als "offline first" bekannt). Dies ist bereits bei nativen Apps verfügbar, was einer der Hauptgründe ist, warum native Apps oft Web-Apps vorgezogen werden.

Ein Service Worker funktioniert wie ein Proxy-Server, der Ihnen erlaubt, Anfragen und Antworten zu modifizieren und sie durch Items aus seinem eigenen Cache zu ersetzen.

## Einrichtung für den Umgang mit Service Workern

Service Worker sind standardmäßig in allen modernen Browsern aktiviert. Um Code zu verwenden, der Service Worker nutzt, müssen Sie Ihren Code über HTTPS bereitstellen — Service Worker dürfen aus Sicherheitsgründen nur über HTTPS ausgeführt werden. Ein Server, der HTTPS unterstützt, ist notwendig. Um Experimente zu hosten, können Sie einen Dienst wie GitHub, Netlify, Vercel usw. verwenden. Zur Erleichterung der lokalen Entwicklung wird `localhost` von Browsern ebenfalls als sicherer Ursprung betrachtet.

## Grundlegende Architektur

Bei der Arbeit mit Service Workern werden im Allgemeinen die folgenden Schritte für die grundlegende Einrichtung beachtet:

1. Der Code des Service Workers wird abgerufen und dann mit [`serviceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Bei Erfolg wird der Service Worker in einer [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgeführt; dies ist im Wesentlichen eine spezielle Art von Worker-Kontext, der außerhalb des Hauptskript-Ausführungsthreads ohne DOM-Zugriff läuft. Der Service Worker ist nun bereit, Ereignisse zu verarbeiten.
2. Die Installation findet statt. Ein `install`-Ereignis ist immer das erste, das an einen Service Worker gesendet wird (dies kann verwendet werden, um den Prozess des Befüllens einer IndexedDB zu starten und Website-Ressourcen zu cachen). In diesem Schritt bereitet die Anwendung alles für die Offline-Nutzung vor.
3. Wenn der `install`-Handler abgeschlossen ist, wird der Service Worker als installiert betrachtet. Zu diesem Zeitpunkt kann eine vorherige Version des Service Workers aktiv sein und offene Seiten steuern. Da wir nicht wollen, dass zwei verschiedene Versionen desselben Service Workers gleichzeitig laufen, ist die neue Version noch nicht aktiv.
4. Sobald alle von der alten Version des Service Workers gesteuerten Seiten geschlossen sind, kann die alte Version sicher zurückgezogen werden, und der neu installierte Service Worker erhält ein `activate`-Ereignis. Der Hauptzweck von `activate` ist es, Ressourcen bereinigen, die in vorherigen Versionen des Service Workers verwendet wurden. Der neue Service Worker kann [`skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) aufrufen, um direkt aktiviert zu werden, ohne darauf zu warten, dass offene Seiten geschlossen werden. Der neue Service Worker erhält dann sofort `activate` und übernimmt alle offenen Seiten.
5. Nach der Aktivierung steuert der Service Worker nun Seiten, aber nur diejenigen, die nach dem erfolgreichen `register()`-Aufruf geöffnet wurden. Mit anderen Worten, Dokumente müssen neu geladen werden, um tatsächlich gesteuert zu werden, da ein Dokument mit oder ohne Service Worker beginnt und diesen Status während seiner Lebensdauer beibehält. Um dieses Standardverhalten zu überschreiben und offene Seiten zu übernehmen, kann ein Service Worker [`clients.claim()`](/de/docs/Web/API/Clients/claim) aufrufen.
6. Wann immer eine neue Version eines Service Workers abgerufen wird, erfolgt dieser Zyklus erneut, und die Überreste der vorherigen Version werden während der Aktivierung der neuen Version bereinigt.

![Lebenszyklusdiagramm](sw-lifecycle.svg)

Hier ist eine Zusammenfassung der verfügbaren Service Worker Ereignisse:

- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
- [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)
- Funktionale Ereignisse
  - [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
  - [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event)
  - [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)

## Demo

Um nur die Grundlagen der Registrierung und Installation eines Service Workers zu demonstrieren, haben wir eine Demo namens [einfacher Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) erstellt, die eine einfache Star Wars Lego-Bildergalerie ist. Sie verwendet eine versprechensgesteuerte Funktion, um Bilddaten aus einem JSON-Objekt zu lesen und die Bilder mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch) zu laden, bevor sie in einer Reihe auf der Seite angezeigt werden. Wir haben die Dinge vorerst statisch gehalten. Es registriert, installiert und aktiviert auch einen Service Worker.

![Der Schriftzug Star Wars gefolgt von einem Bild einer Lego-Version der Darth Vader-Figur](demo-screenshot.png)

Sie können den [Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) und den [einfachen Service Worker live](<(https://bncb2v.csb.app/)>) sehen.

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

1. Der `if`-Block führt einen Feature-Detection-Test durch, um sicherzustellen, dass Service Worker unterstützt werden, bevor versucht wird, einen zu registrieren.
2. Als Nächstes verwenden wir die Funktion [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um den Service Worker für diese Website zu registrieren. Der Service Worker-Code befindet sich in einer JavaScript-Datei innerhalb unserer App (beachten Sie, dass dies die relative URL zur Origin ist, nicht die JS-Datei, die darauf verweist.)
3. Der `scope`-Parameter ist optional und kann verwendet werden, um den Teil Ihres Inhalts anzugeben, den der Service Worker steuern soll. In diesem Fall haben wir `'/'` angegeben, was bedeutet, dass alle Inhalte unter der Origin der App liegen. Wenn Sie darauf verzichten, wird es standardmäßig auf diesen Wert gesetzt, aber wir haben es hier zur Veranschaulichung angegeben.

Damit wird ein Service Worker registriert, der in einem Worker-Kontext läuft und daher keinen DOM-Zugriff hat.

Ein einzelner Service Worker kann viele Seiten steuern. Jedes Mal, wenn eine Seite innerhalb Ihres Geltungsbereichs geladen wird, wird der Service Worker gegen diese Seite installiert und arbeitet auf ihr. Beachten Sie daher, dass Sie vorsichtig mit globalen Variablen im Service Worker-Skript sein müssen: Jede Seite erhält keinen einzigartigen Worker.

> [!NOTE]
> Eine großartige Sache an Service Workern ist, dass wenn Sie, wie oben gezeigt, eine Feature-Erkennung verwenden, Browser, die keine Service Worker unterstützen, Ihre App weiterhin online in der normalen erwarteten Weise nutzen können.

#### Warum scheitert die Registrierung meines Service Workers?

Ein Service Worker scheitert an der Registrierung aus einem der folgenden Gründe:

- Sie führen Ihre Anwendung nicht in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) (über HTTPS) aus.
- Der Pfad der Service Worker-Datei ist falsch.
  Der Pfad muss relativ zur Origin sein, nicht zum Root-Verzeichnis der App.
  In unserem Beispiel befindet sich der Worker unter `https://bncb2v.csb.app/sw.js`, und das Root-Verzeichnis der App ist `https://bncb2v.csb.app/`, daher muss der Service Worker als `/sw.js` angegeben werden.
- Der Pfad zu Ihrem Service Worker zeigt auf einen Service Worker einer anderen Origin als Ihrer App.
- Die Registrierung des Service Workers enthält eine `scope`-Option, die breiter ist, als der Workerpfad es erlaubt.
  Der Standard-Geltungsbereich für einen Service Worker ist das Verzeichnis, in dem sich der Worker befindet.
  Mit anderen Worten, wenn das Skript `sw.js` sich in `/js/sw.js` befindet, kann es standardmäßig nur URLs im (oder im Unterverzeichnis des) `/js/`-Pfads steuern.
  Der Geltungsbereich für einen Service Worker kann mit dem Header {{HTTPHeader("Service-Worker-Allowed")}} erweitert (oder eingeschränkt) werden.
- Browserspezifische Einstellungen sind aktiviert, wie das Blockieren aller Cookies, privater Browsing-Modus, automatische Cookie-Löschung beim Schließen usw.
  Siehe [`serviceWorker.register()`-Browser-Kompatibilität](/de/docs/Web/API/ServiceWorkerContainer/register#browser_compatibility) für weitere Informationen.

### Installation und Aktivierung: das Befüllen Ihres Caches

Nachdem Ihr Service Worker registriert ist, wird der Browser versuchen, den Service Worker für Ihre Seite/Ihre Website zu installieren und dann zu aktivieren.

Das `install`-Ereignis ist das erste Ereignis, das bei der Installation oder Aktualisierung des Service Workers ausgelöst wird.
Es wird nur einmal emittiert, unmittelbar nachdem die Registrierung erfolgreich abgeschlossen wurde, und wird im Allgemeinen verwendet, um die Offline-Caching-Fähigkeiten Ihres Browsers mit den Ressourcen zu befüllen, die Sie benötigen, um Ihre App offline auszuführen. Zu diesem Zweck verwenden wir die Speicher-API des Service Workers — [`cache`](/de/docs/Web/API/Cache) — ein globales Objekt im Service Worker, das es uns erlaubt, durch Antworten gelieferte Ressourcen zu speichern, die nach ihren Anfragen abgefragt werden. Diese API arbeitet in ähnlicher Weise wie der Standard-Cache des Browsers, ist jedoch spezifisch für Ihre Domain. Der Inhalt des Caches bleibt erhalten, bis Sie ihn löschen.

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

1. Hier fügen wir einen `install`-Eventlistener zum Service Worker hinzu (daher `self`), und dann verketten wir eine [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode mit dem Ereignis — dies stellt sicher, dass der Service Worker erst installiert wird, wenn der Code innerhalb von `waitUntil()` erfolgreich abgeschlossen ist.
2. Innerhalb von `addResourcesToCache()` verwenden wir die Methode [`caches.open()`](/de/docs/Web/API/CacheStorage/open), um einen neuen Cache namens `v1` zu erstellen, der Version 1 des Ressourcen-Caches unserer Website sein wird. Dann rufen wir eine Funktion `addAll()` auf dem erstellten Cache auf, die als Parameter ein Array von URLs zu allen Ressourcen nimmt, die Sie zwischenspeichern möchten. Die URLs sind relativ zum Standort des Workers [location](/de/docs/Web/API/WorkerGlobalScope/location).
3. Wenn das Versprechen abgelehnt wird, schlägt die Installation fehl, und der Worker tut nichts. Das ist in Ordnung, da Sie Ihren Code korrigieren und es beim nächsten Mal erneut versuchen können, wenn die Registrierung erfolgt.
4. Nach einer erfolgreichen Installation aktiviert sich der Service Worker. Dies hat beim ersten Mal, wenn Ihr Service Worker installiert/aktiviert wird, noch keine große eigene Bedeutung, aber es bekommt mehr Bedeutung, wenn der Service Worker aktualisiert wird (siehe den Abschnitt [Aktualisierung Ihres Service Workers](#aktualisierung_ihres_service_workers) weiter unten.)

> **Hinweis:** [Die Web Storage API (`localStorage`)](/de/docs/Web/API/Web_Storage_API) funktioniert in ähnlicher Weise wie der Service Worker Cache, ist aber synchron, daher ist sie in Service Workern nicht erlaubt.

> **Hinweis:** [IndexedDB](/de/docs/Web/API/IndexedDB_API) kann innerhalb eines Service Workers zum Speichern von Daten verwendet werden, wenn Sie es benötigen.

### Benutzerdefinierte Antworten auf Anfragen

Jetzt, da Sie Ihre Website-Ressourcen zwischengespeichert haben, müssen Sie den Service Worker anweisen, etwas mit dem zwischengespeicherten Inhalt zu tun. Dies wird mit dem `fetch`-Ereignis durchgeführt.

1. Ein `fetch`-Ereignis wird jedes Mal ausgelöst, wenn eine durch einen Service Worker gesteuerte Ressource abgerufen wird, was die Dokumente innerhalb des angegebenen Geltungsbereichs und alle in diesen Dokumenten referenzierten Ressourcen umfasst (zum Beispiel, wenn `index.html` eine Cross-Origin-Anfrage macht, um ein Bild einzubetten, wird das trotzdem durch seinen Service Worker gehen.)

2. Sie können einen `fetch`-Ereignis-Listener an den Service Worker anhängen und dann die Methode `respondWith()` auf das Ereignis aufrufen, um unsere HTTP-Antworten zu hijacken und sie mit Ihrem eigenen Inhalt zu aktualisieren.

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(/* custom content goes here */);
   });
   ```

3. Wir könnten damit anfangen, mit der Ressource zu antworten, deren URL der Netzwerk-Anfrage entspricht, in jedem Fall:

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(caches.match(event.request));
   });
   ```

   `caches.match(event.request)` ermöglicht es uns, jede vom Netzwerk angeforderte Ressource mit der entsprechenden im Cache verfügbaren Ressource abzugleichen, falls ein passender verfügbar ist. Der Abgleich erfolgt über URL und verschiedene Header, genau wie bei normalen HTTP-Anfragen.

![Fetch-Ereignisdiagramm](sw-fetch.svg)

## Wiederherstellen fehlgeschlagener Anfragen

`caches.match(event.request)` ist also großartig, wenn es einen Treffer im Service Worker Cache gibt, aber was ist mit den Fällen, in denen es keinen Treffer gibt? Wenn wir keine Art von Fehlerbehandlung bereitstellen würden, würde unser Versprechen mit `undefined` auflösen und wir würden nichts zurückbekommen.

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

Wenn die Ressourcen nicht im Cache sind, werden sie vom Netzwerk angefordert.

Mit einer aufwendigeren Strategie könnten wir nicht nur die Ressource aus dem Netzwerk anfordern, sondern sie auch im Cache speichern, sodass spätere Anfragen für diese Ressource ebenfalls offline abgerufen werden können. Dies würde bedeuten, dass wenn zusätzliche Bilder zur Star Wars-Galerie hinzugefügt würden, unsere App sie automatisch aufnehmen und cachen könnte. Der folgende Codeausschnitt implementiert eine solche Strategie:

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

Wenn die Anforderungs-URL nicht im Cache verfügbar ist, fordern wir die Ressource mit `await fetch(request)` von der Netzwerk-Anfrage an. Danach platzieren wir eine Kopie der Antwort in den Cache. Die Funktion `putInCache()` verwendet `caches.open('v1')` und `cache.put()`, um die Ressource zum Cache hinzuzufügen. Die Originalantwort wird an den Browser zurückgegeben, um der Seite zur Verfügung gestellt zu werden, die sie angefordert hat.

Das Klonen der Antwort ist notwendig, weil Anfragen und Antwortobjekte nur einmal gelesen werden können. Um die Antwort an den Browser zurückzugeben und sie in den Cache zu legen, müssen wir sie klonen. So wird das Original an den Browser zurückgegeben und die Kopie wird an den Cache gesendet. Beide werden einmal gelesen.

Was möglicherweise etwas seltsam aussieht, ist, dass das von `putInCache()` zurückgegebene Versprechen nicht erwartet wird. Der Grund ist, dass wir nicht warten wollen, bis die Antwortkopie in den Cache eingefügt wurde, bevor wir eine Antwort zurückgeben. Wir müssen jedoch `event.waitUntil()` auf das Versprechen aufrufen, um sicherzustellen, dass der Service Worker nicht beendet wird, bevor der Cache befüllt wird.

Das einzige Problem, das wir jetzt haben, ist, dass, wenn die Anfrage nichts im Cache trifft und das Netzwerk nicht verfügbar ist, unsere Anfrage trotzdem fehlschlägt. Lassen Sie uns eine Standard-Ausweichlösung bieten, damit der Benutzer zumindest etwas erhält, egal was passiert:

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

Wir haben uns für dieses Fallback-Bild entschieden, weil wahrscheinlich nur neue Bilder aktualisiert werden sollen, da alles andere für die Installation im `install`-Event-Listener, den wir vorher gesehen haben, erforderlich ist.

## Navigation Preload bei Service Workern

Wenn aktiviert, beginnt die Funktion [Navigation preload](/de/docs/Web/API/NavigationPreloadManager) mit dem Herunterladen von Ressourcen, sobald die `fetch`-Anfrage gestellt wird, und parallel zur Aktivierung des Service Workers. Dies stellt sicher, dass das Herunterladen sofort bei der Navigation zu einer Seite beginnt, statt auf die Aktivierung des Service Workers zu warten. Diese Verzögerung tritt relativ selten auf, ist jedoch unvermeidlich, wenn sie auftritt, und kann von Bedeutung sein.

Zuerst muss die Funktion während der Aktivierung des Service Workers aktiviert werden, indem [`registration.navigationPreload.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable) verwendet wird:

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Verwenden Sie dann [`event.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse), um auf den Abschluss des vorab geladenen Downloads im `fetch`-Event-Handler zu warten.

Fortsetzend mit dem Beispiel aus den vorherigen Abschnitten fügen wir den Code zum Warten auf die vorab geladene Ressource nach der Cache-Prüfung ein, und bevor wir vom Netzwerk anfragen, falls dies nicht erfolgreich ist.

Der neue Prozess ist:

1. Überprüfen Sie den Cache
2. Warten auf `event.preloadResponse`, das als `preloadResponsePromise` an die Funktion `cacheFirst()` übergeben wird. Cachen Sie das Ergebnis, wenn es zurückkommt.
3. Wenn weder von diesen definiert ist, gehen wir zum Netzwerk.

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

Beachten Sie, dass in diesem Beispiel dieselben Daten für die Ressource sowohl bei normalem Download als auch bei Vorabladen heruntergeladen und in den Cache gespeichert werden. Sie können stattdessen wählen, eine andere Ressource beim Vorabladen herunterzuladen und zu speichern. Weitere Informationen finden Sie unter [`NavigationPreloadManager` > Custom responses](/de/docs/Web/API/NavigationPreloadManager#custom_responses).

## Aktualisierung Ihres Service Workers

Wenn Ihr Service Worker zuvor installiert wurde, aber dann eine neue Version des Workers verfügbar ist bei einer Aktualisierung oder Seitenladung, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert. Sie wird erst aktiviert, wenn keine Seiten mehr geladen sind, die noch den alten Service Worker verwenden. Sobald solche Seiten nicht mehr geladen sind, aktiviert sich der neue Service Worker.

> [!NOTE]
> Es ist möglich, dies zu umgehen, indem [`Clients.claim()`](/de/docs/Web/API/Clients/claim) verwendet wird.

Sie werden Ihren `install`-Event-Listener im neuen Service Worker wie folgt aktualisieren wollen (achten Sie auf die neue Versionsnummer):

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

Während der Service Worker installiert wird, ist die vorherige Version immer noch für Anfragen verantwortlich. Die neue Version wird im Hintergrund installiert. Wir nennen den neuen Cache `v2`, sodass der vorherige `v1` Cache nicht gestört wird.

Wenn keine Seiten mehr die vorherige Version verwenden, aktiviert sich der neue Worker und übernimmt die Verantwortung für die Anfragen.

### Alte Caches löschen

Wie wir im letzten Abschnitt gesehen haben, erstellen Sie beim Aktualisieren eines Service Workers auf eine neue Version in seinem `install`-Event-Handler einen neuen Cache. Solange es offene Seiten gibt, die von der vorherigen Version des Workerns gesteuert werden, müssen Sie beide Caches behalten, da die vorherige Version ihren Cache benötigt. Sie können das `activate`-Ereignis verwenden, um Daten aus früheren Caches zu entfernen.

In `waitUntil()` übergebene Versprechen blockieren andere Ereignisse bis zur Fertigstellung, sodass Sie sicher sein können, dass Ihre Bereinigungsoperation abgeschlossen sein wird, wenn Sie Ihr erstes `fetch`-Ereignis im neuen Service Worker erhalten.

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

## Entwicklertools

- [Chrome](https://www.chromium.org/blink/serviceworker/service-worker-faq/)
- [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/application/service_workers/index.html)
  - Die Schaltfläche "Diese Seite vergessen", verfügbar in den [Anpassungsoptionen der Firefox-Symbolleiste](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars), kann verwendet werden, um Service Worker und ihre Caches zu löschen.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/service-workers/)

## Siehe auch

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP-Header
