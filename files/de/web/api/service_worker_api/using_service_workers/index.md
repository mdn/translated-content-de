---
title: Verwendung von Service Workern
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: d81234a2ce0cc4ceb06622e3cd5d8cb5e447cb6f
---

{{DefaultAPISidebar("Service Workers API")}}

Dieser Artikel bietet Informationen zum Einstieg mit Service Workern, einschließlich grundlegender Architektur, Registrierung eines Service Workers, des Installations- und Aktivierungsprozesses für einen neuen Service Worker, Aktualisierung Ihres Service Workers, Cache-Kontrolle und benutzerdefinierter Antworten, alles im Kontext einer App mit Offline-Funktionalität.

## Das Prinzip der Service Worker

Ein übergreifendes Problem, mit dem Webbenutzer seit Jahren zu kämpfen haben, ist der Verlust der Konnektivität. Die beste Web-App der Welt bietet eine schreckliche Benutzererfahrung, wenn Sie sie nicht herunterladen können. Es gab verschiedene Versuche, Technologien zu entwickeln, um dieses Problem zu lösen, und einige der Probleme wurden gelöst. Aber das übergeordnete Problem bestand darin, dass es keinen guten Gesamtsteuerungsmechanismus für das Caching von Ressourcen und benutzerdefinierte Netzwerk-Anfragen gab.

Service Worker beheben diese Probleme. Mit einem Service Worker können Sie eine App so einrichten, dass sie zuerst zwischengespeicherte Ressourcen verwendet und so eine Standarderfahrung bietet, auch wenn Sie offline sind, bevor dann mehr Daten aus dem Netzwerk abgerufen werden (allgemein bekannt als "offline first"). Dies ist bereits bei nativen Apps der Fall, was einer der Hauptgründe ist, warum native Apps oft gegenüber Web-Apps gewählt werden.

Ein Service Worker funktioniert wie ein Proxy-Server und ermöglicht Ihnen, Anfragen und Antworten zu ändern, indem er sie durch Elemente aus seinem eigenen Cache ersetzt.

## Einrichtung zum Testen von Service Workern

Service Worker sind standardmäßig in allen modernen Browsern aktiviert. Um Code mit Service Workern auszuführen, müssen Sie Ihren Code über HTTPS bereitstellen – Service Worker sind aus Sicherheitsgründen darauf beschränkt, über HTTPS ausgeführt zu werden. Ein Server, der HTTPS unterstützt, ist erforderlich. Zum Hosten von Experimenten können Sie einen Dienst wie GitHub, Netlify, Vercel usw. verwenden. Um die lokale Entwicklung zu erleichtern, wird `localhost` von Browsern ebenfalls als sichere Herkunft betrachtet.

## Grundlegende Architektur

Bei der Arbeit mit Service Workern werden im Allgemeinen die folgenden Schritte für die Grundeinrichtung beobachtet:

1. Der Service Worker-Code wird abgerufen und dann mithilfe von [`serviceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Bei Erfolg wird der Service Worker in einem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgeführt; dies ist im Wesentlichen eine besondere Art von Worker-Kontext, der außerhalb des Haupt-Skriptexekutionsthreads läuft und keinen Zugang zum DOM hat. Der Service Worker ist jetzt bereit zur Verarbeitung von Ereignissen.
2. Die Installation erfolgt. Ein `install`-Ereignis ist immer das erste, das an einen Service Worker gesendet wird (dies kann verwendet werden, um den Prozess der Population einer IndexedDB zu starten und Site-Ressourcen zu cachen). Während dieses Schrittes stellt die Anwendung alles zur Verfügung, was offline genutzt werden kann.
3. Wenn der `install`-Handler abgeschlossen ist, gilt der Service Worker als installiert. Zu diesem Zeitpunkt kann eine vorherige Version des Service Workers aktiv sein und offene Seiten steuern. Da wir nicht wollen, dass zwei verschiedene Versionen desselben Service Workers gleichzeitig laufen, ist die neue Version noch nicht aktiv.
4. Sobald alle Seiten, die von der alten Version des Service Workers gesteuert werden, geschlossen sind, kann die alte Version außer Dienst gestellt und der neu installierte Service Worker erhält ein `activate`-Ereignis. Der primäre Zweck von `activate` besteht darin, Ressourcen zu bereinigen, die in vorherigen Versionen des Service Workers verwendet wurden. Der neue Service Worker kann [`skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) aufrufen, um sofort aktiv zu werden, ohne zu warten, bis offene Seiten geschlossen werden. Der neue Service Worker erhält dann sofort `activate` und übernimmt alle offenen Seiten.
5. Nach der Aktivierung steuert der Service Worker jetzt Seiten, aber nur diejenigen, die nach erfolgreicher `register()`-Ausführung geöffnet wurden. Mit anderen Worten, Dokumente müssen neu geladen werden, um tatsächlich gesteuert zu werden, da ein Dokument sein Leben mit oder ohne Service Worker beginnt und dies für seine gesamte Lebensdauer beibehält. Um dieses Standardverhalten zu überschreiben und offene Seiten zu übernehmen, kann ein Service Worker [`clients.claim()`](/de/docs/Web/API/Clients/claim) aufrufen.
6. Jedes Mal, wenn eine neue Version eines Service Workers abgerufen wird, passiert dieser Zyklus erneut und die Überreste der vorherigen Version werden während der Aktivierung der neuen Version bereinigt.

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

Um nur die Grundlagen der Registrierung und Installation eines Service Workers zu demonstrieren, haben wir eine Demo namens [simple service worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) erstellt, die eine einfache Star Wars Lego Bildgalerie ist. Sie verwendet eine durch Versprechen unterstützte Funktion, um Bilddaten aus einem JSON-Objekt zu lesen und die Bilder mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch) zu laden, bevor die Bilder in einer Reihe auf der Seite angezeigt werden. Wir haben die Dinge zunächst statisch gehalten. Es registriert, installiert und aktiviert auch einen Service Worker.

![Die Worte Star Wars gefolgt von einem Bild einer Lego-Version der Darth Vader-Figur](demo-screenshot.png)

Sie können den [Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) und den [einfachen Service Worker live laufend](https://bncb2v.csb.app/) sehen.

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

1. Der `if`-Block führt einen Funktionserkennungstest durch, um sicherzustellen, dass Service Worker unterstützt werden, bevor versucht wird, einen zu registrieren.
2. Als nächstes verwenden wir die Funktion [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um den Service Worker für diese Seite zu registrieren. Der Service Worker-Code befindet sich in einer JavaScript-Datei innerhalb unserer App (beachten Sie, dass dies die URL der Datei relativ zum Ursprung ist und nicht die JS-Datei, die darauf verweist.)
3. Der `scope`-Parameter ist optional und kann verwendet werden, um den Teil Ihrer Inhalte anzugeben, den der Service Worker steuern soll. In diesem Fall haben wir `'/'` angegeben, was bedeutet, dass alle Inhalte unter dem Ursprung der App liegen. Wenn Sie es weglassen, wird es standardmäßig auf diesen Wert gesetzt, aber wir haben es hier zur Veranschaulichung angegeben.

Dies registriert einen Service Worker, der in einem Worker-Kontext läuft und daher keinen Zugriff auf das DOM hat.

Ein einzelner Service Worker kann viele Seiten steuern. Jedes Mal, wenn eine Seite innerhalb Ihres Bereichs geladen wird, wird der Service Worker gegen diese Seite installiert und arbeitet darauf. Bedenken Sie daher, dass Sie mit globalen Variablen im Service Worker-Skript vorsichtig sein müssen: Jede Seite erhält nicht ihren eigenen einzigartigen Worker.

> [!NOTE]
> Ein großer Vorteil von Service Workern ist, dass, wenn Sie Funktionserkennung verwenden, wie wir es oben gezeigt haben, Browser, die Service Worker nicht unterstützen, Ihre App einfach online auf die übliche, erwartete Weise verwenden können.

#### Warum schlägt die Registrierung meines Service Workers fehl?

Ein Service Worker schlägt aus einem der folgenden Gründe bei der Registrierung fehl:

- Sie führen Ihre Anwendung nicht in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) (über HTTPS) aus.
- Der Pfad der Service Worker-Datei ist falsch.
  Der Pfad muss relativ zum Ursprung sein, nicht zum Stammverzeichnis der App.
  In unserem Beispiel befindet sich der Worker unter `https://bncb2v.csb.app/sw.js`, und der Stamm der App ist `https://bncb2v.csb.app/`, also muss der Service Worker als `/sw.js` angegeben werden.
- Der Pfad zu Ihrem Service Worker verweist auf einen Service Worker eines anderen Ursprungs als Ihrer App.
- Die Service Worker-Registrierung enthält eine `scope`-Option, die breiter ist als durch den Worker-Pfad erlaubt.
  Der Standardscope für einen Service Worker ist das Verzeichnis, in dem sich der Worker befindet.
  Mit anderen Worten, wenn das Skript `sw.js` in `/js/sw.js` befindet, kann es standardmäßig nur URLs innerhalb des `/js/`-Pfads oder tiefer steuern.
  Der Scope für einen Service Worker kann mit dem {{HTTPHeader("Service-Worker-Allowed")}}-Header erweitert (oder verkleinert) werden.
- Browserspezifische Einstellungen sind aktiviert, wie z. B. das Blockieren aller Cookies, privater Browsing-Modus, automatisches Löschen von Cookies beim Schließen usw.
  Siehe [`serviceWorker.register()` Browser-Kompatibilität](/de/docs/Web/API/ServiceWorkerContainer/register#browser_compatibility) für mehr Informationen.

### Installieren und aktivieren: Ihren Cache befüllen

Nachdem Ihr Service Worker registriert ist, versucht der Browser, den Service Worker für Ihre Seite/Ihre Website zu installieren und dann zu aktivieren.

Das `install`-Ereignis ist das erste Ereignis, das bei der Installation oder Aktualisierung eines Service Workers ausgelöst wird.
Es wird nur einmal gesendet, direkt nachdem die Registrierung erfolgreich abgeschlossen wurde, und wird im Allgemeinen verwendet, um die Offline-Caching-Fähigkeiten Ihres Browsers mit den Ressourcen zu bestücken, die Sie benötigen, um Ihre App offline auszuführen. Dazu verwenden wir die Speicher-API des Service Workers — [`cache`](/de/docs/Web/API/Cache) — ein globales Objekt im Service Worker, das es uns ermöglicht, von Antworten gelieferte Ressourcen zu speichern, die über ihre Anfragen zugeordnet sind. Diese API funktioniert ähnlich wie der Standard-Cache des Browsers, ist jedoch spezifisch für Ihre Domain. Der Inhalt des Caches wird beibehalten, bis Sie ihn löschen.

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

1. Hier fügen wir dem Service Worker (daher `self`) einen `install`-Ereignislistener hinzu und verketten dann eine [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode an das Ereignis – das stellt sicher, dass der Service Worker erst installiert wird, wenn der Code innerhalb von `waitUntil()` erfolgreich ausgeführt wurde.
2. Innerhalb von `addResourcesToCache()` verwenden wir die Methode [`caches.open()`](/de/docs/Web/API/CacheStorage/open), um einen neuen Cache namens `v1` zu erstellen, der Version 1 unseres Site-Ressourcen-Caches sein wird. Dann rufen wir eine Funktion `addAll()` auf dem erstellten Cache auf, die als Parameter ein Array von URLs zu allen Ressourcen benötigt, die Sie cachen möchten. Die URLs sind relativ zur [Position](/de/docs/Web/API/WorkerGlobalScope/location) des Workers.
3. Wenn das Versprechen abgelehnt wird, schlägt die Installation fehl und der Worker wird nichts tun. Das ist in Ordnung, da Sie Ihren Code korrigieren und dann beim nächsten Mal, wenn die Registrierung erfolgt, erneut versuchen können.
4. Nach einer erfolgreichen Installation wird der Service Worker aktiviert. Dies hat beim ersten Mal, wenn Ihr Service Worker installiert/aktiviert wird, keine große eigenständige Verwendung, aber es bedeutet mehr, wenn der Service Worker aktualisiert wird (siehe Abschnitt [Aktualisierung Ihres Service Workers](#aktualisierung_ihres_service_workers) später weiter unten).

> [!NOTE]
> [Die Web Storage API (`localStorage`)](/de/docs/Web/API/Web_Storage_API) funktioniert ähnlich wie der Service Worker-Cache, ist jedoch synchron und daher in Service Workern nicht erlaubt.

> [!NOTE]
> [IndexedDB](/de/docs/Web/API/IndexedDB_API) kann in einem Service Worker für die Datenspeicherung verwendet werden, wenn Sie es benötigen.

### Benutzerdefinierte Antworten auf Anfragen

Jetzt, da Sie Ihre Site-Ressourcen zwischengespeichert haben, müssen Sie den Service Workern mitteilen, etwas mit dem zwischengespeicherten Inhalt zu tun. Dies wird mit dem `fetch`-Ereignis durchgeführt.

1. Ein `fetch`-Ereignis wird jedes Mal ausgelöst, wenn eine vom Service Worker gesteuerte Ressource abgerufen wird, einschließlich der Dokumente innerhalb des angegebenen Scopes und aller in diesen Dokumenten referenzierten Ressourcen (zum Beispiel, wenn `index.html` eine Cross-Origin-Anfrage sendet, um ein Bild einzubetten, geht das trotzdem über seinen Service Worker).

2. Sie können dem Service Worker einen `fetch`-Ereignislistener hinzufügen und dann die Methode `respondWith()` auf dem Ereignis aufrufen, um unsere HTTP-Antworten zu entführen und mit Ihrem eigenen Inhalt zu aktualisieren.

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(/* custom content goes here */);
   });
   ```

3. Wir könnten damit beginnen, mit der Ressource zu antworten, deren URL mit der der Netzwerkanfrage in jedem Fall übereinstimmt:

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(caches.match(event.request));
   });
   ```

   `caches.match(event.request)` ermöglicht uns, jede von dem Netzwerk angeforderte Ressource mit der entsprechenden im Cache verfügbaren Ressource abzugleichen, wenn eine entsprechende vorhanden ist. Der Abgleich erfolgt über URL und verschiedene Header, genauso wie bei normalen HTTP-Anfragen.

![Fetch Event Diagramm](sw-fetch.svg)

## Wiederherstellen fehlgeschlagener Anfragen

Also, `caches.match(event.request)` ist großartig, wenn es ein Match im Service Worker-Cache gibt, aber was ist mit Fällen, in denen es kein Match gibt? Wenn wir keine Art Fehlerbehandlung bereitstellen, würde unser Versprechen mit `undefined` aufgelöst und wir würden nichts zurückbekommen.

Nachdem wir die Antwort aus dem Cache getestet haben, können wir auf eine reguläre Netzwerkanfrage zurückgreifen:

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

Mit einer aufwendigeren Strategie könnten wir nicht nur die Ressource vom Netzwerk anfragen, sondern sie auch in den Cache speichern, sodass spätere Anfragen nach dieser Ressource ebenfalls offline abgerufen werden können. Das würde bedeuten, dass, wenn zusätzliche Bilder zur Star Wars-Galerie hinzugefügt werden, unsere App sie automatisch aufnehmen und cachen könnte. Das folgende Snippet implementiert eine solche Strategie:

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

Wenn die URL der Anfrage nicht im Cache verfügbar ist, fordern wir die Ressource von der Netzwerkanfrage mit `await fetch(request)` an. Danach legen wir eine Kopie der Antwort in den Cache. Die `putInCache()`-Funktion verwendet `caches.open('v1')` und `cache.put()`, um die Ressource dem Cache hinzuzufügen. Die ursprüngliche Antwort wird an den Browser zurückgegeben, um sie an die Seite zu geben, die sie angefordert hat.

Das Klonen der Antwort ist notwendig, da Anforderungs- und Antwortstreams nur einmal gelesen werden können. Um die Antwort an den Browser zurückzugeben und sie in den Cache zu legen, müssen wir sie klonen. Also wird das Original an den Browser zurückgegeben und die Kopie wird an den Cache gesendet. Jede wird einmal gelesen.

Was vielleicht etwas seltsam aussieht, ist, dass das von `putInCache()` zurückgegebene Versprechen nicht erwartet wird. Der Grund ist, dass wir nicht warten möchten, bis die Antwortkopie dem Cache hinzugefügt wurde, bevor eine Antwort zurückgegeben wird. Wir müssen jedoch `event.waitUntil()` auf das Versprechen aufrufen, um sicherzustellen, dass der Service Worker nicht beendet wird, bevor der Cache gefüllt ist.

Das einzige Problem, das wir jetzt haben, ist, dass, wenn die Anfrage nichts im Cache findet und das Netzwerk nicht verfügbar ist, unsere Anfrage immer noch fehlschlägt. Lassen Sie uns einen Standard-Fallback bereitstellen, sodass der Benutzer zumindest etwas erhält, unabhängig davon, was passiert:

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

Wir haben uns für dieses Fallback-Bild entschieden, da die einzigen Updates, die wahrscheinlich fehlschlagen, neue Bilder sind, da alles andere während der Installation im `install`-Ereignislistener benötigt wird, den wir früher gesehen haben.

## Service Worker Navigation Preload

Wenn aktiviert, startet die [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager)-Funktion den Download von Ressourcen, sobald die Fetch-Anfrage gestellt wird, und parallel zur Service Worker-Aktivierung. Dies stellt sicher, dass der Download sofort beim Navigieren auf eine Seite beginnt, anstatt warten zu müssen, bis der Service Worker aktiviert ist. Diese Verzögerung tritt relativ selten auf, ist jedoch unvermeidlich, wenn sie auftritt und kann signifikant sein.

Zuerst muss die Funktion während der Aktivierung des Service Workers aktiviert werden, indem [`registration.navigationPreload.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable) verwendet wird:

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Dann verwenden Sie [`event.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse), um zu warten, bis die vorbeladene Ressource im `fetch`-Ereignishandler heruntergeladen ist.

Unter Fortsetzung des Beispiels aus den vorherigen Abschnitten fügen wir den Code ein, um auf die vorbeladene Ressource nach der Cache-Prüfung zu warten, und bevor vom Netzwerk abgerufen wird, wenn das nicht erfolgreich ist.

Der neue Prozess ist:

1. Cache prüfen
2. Auf `event.preloadResponse` warten, welches als `preloadResponsePromise` an die Funktion `cacheFirst()` übergeben wird. Cache das Ergebnis, wenn es zurückgegeben wird.
3. Wenn keines davon definiert ist, gehen wir ins Netzwerk.

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
    // Keep the navigation preload request alive even if we do not use its response.
    event.waitUntil(preloadResponsePromise.catch(() => undefined));
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

Beachten Sie, dass wir in diesem Beispiel dieselben Daten für die Ressource herunterladen und cachen, unabhängig davon, ob sie "normal" oder vorbeladen heruntergeladen wird. Sie können stattdessen wählen, um auf Vorladung eine andere Ressource herunterzuladen und zu cachen. Für weitere Informationen siehe [`NavigationPreloadManager` > Benutzerdefinierte Antworten](/de/docs/Web/API/NavigationPreloadManager#custom_responses).

## Aktualisierung Ihres Service Workers

Wenn Ihr Service Worker zuvor installiert wurde, aber dann eine neue Version des Workers bei Aktualisierung oder Seitenladevorgang verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert. Sie wird erst dann aktiviert, wenn keine Seiten mehr geladen sind, die noch den alten Service Worker verwenden. Sobald keine solchen Seiten mehr geladen sind, wird die neue Service Worker aktiviert.

> [!NOTE]
> Es ist möglich, dies zu umgehen, indem Sie [`Clients.claim()`](/de/docs/Web/API/Clients/claim) verwenden.

Sie werden Ihren `install`-Ereignislistener im neuen Service Worker auf etwas wie dieses aktualisieren wollen (beachten Sie die neue Versionsnummer):

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

Während der Service Worker installiert wird, ist die vorherige Version weiterhin für Abrufe verantwortlich. Die neue Version wird im Hintergrund installiert. Wir nennen den neuen Cache `v2`, sodass der vorherige `v1`-Cache nicht gestört wird.

Wenn keine Seiten mehr die vorherige Version verwenden, aktiviert sich der neue Worker und übernimmt die Verantwortung für die Abrufe.

### Alte Caches löschen

Wie wir im letzten Abschnitt gesehen haben, erstellen Sie beim Aktualisieren eines Service Workers auf eine neue Version einen neuen Cache in dessen `install`-Ereignishandler. Solange es offene Seiten gibt, die von der vorherigen Version des Workers gesteuert werden, müssen Sie beide Caches behalten, da die vorherige Version ihren Cache benötigt. Sie können das `activate`-Ereignis verwenden, um Daten aus den vorherigen Caches zu entfernen.

Promessen, die in `waitUntil()` übergeben werden, blockieren andere Ereignisse bis zum Abschluss, sodass Sie sicher sein können, dass Ihr Bereinigungsvorgang abgeschlossen ist, bevor Sie Ihr erstes `fetch`-Ereignis im neuen Service Worker erhalten.

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
  - Die Schaltfläche "Diese Seite vergessen", die in den [Toolbar-Anpassungsoptionen von Firefox](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars) verfügbar ist, kann verwendet werden, um Service Worker und ihre Caches zu löschen.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools/progressive-web-apps/#service-workers)

## Siehe auch

- [Versprechen](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Die Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP-Header
