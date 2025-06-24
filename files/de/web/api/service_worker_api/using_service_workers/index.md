---
title: Verwendung von Service Workern
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("Service Workers API")}}

Dieser Artikel bietet Informationen über den Einstieg in Service Worker, einschließlich der grundlegenden Architektur, der Registrierung eines Service Workers, des Installations- und Aktivierungsprozesses für einen neuen Service Worker, der Aktualisierung Ihres Service Workers, der Cache-Kontrolle und benutzerdefinierter Antworten, alles im Kontext einer App mit Offline-Funktionalität.

## Die Grundlagen von Service Workern

Ein überwiegendes Problem, mit dem Webbenutzer seit Jahren zu kämpfen haben, ist der Verlust der Konnektivität. Die beste Web-App der Welt wird eine schreckliche Benutzererfahrung bieten, wenn Sie sie nicht herunterladen können. Es gab verschiedene Versuche, Technologien zu entwickeln, um dieses Problem zu lösen, und einige der Probleme wurden gelöst. Aber das übergeordnete Problem war, dass es keinen guten Mechanismus zur allgemeinen Steuerung des Asset-Cachings und der benutzerdefinierten Netzwerk-Anfragen gab.

Service Worker beheben diese Probleme. Mit einem Service Worker können Sie eine App so einrichten, dass zunächst zwischengespeicherte Assets verwendet werden, wodurch eine Standarderfahrung auch im Offline-Modus bereitgestellt wird, bevor dann weitere Daten aus dem Netzwerk abgerufen werden (allgemein bekannt als "offline first"). Dies ist bereits mit nativen Apps möglich, was einer der Hauptgründe ist, warum native Apps oft gegenüber Web-Apps bevorzugt werden.

Ein Service Worker funktioniert wie ein Proxy-Server, der es Ihnen ermöglicht, Anfragen und Antworten zu modifizieren, indem er sie durch Elemente aus seinem eigenen Cache ersetzt.

## Einrichtung zur Nutzung von Service Workern

Service Worker sind in allen modernen Browsern standardmäßig aktiviert. Um Code auszuführen, der Service Worker verwendet, müssen Sie Ihren Code über HTTPS bereitstellen – Service Worker dürfen aus Sicherheitsgründen nur über HTTPS laufen. Ein Server, der HTTPS unterstützt, ist erforderlich. Um Experimente zu hosten, können Sie einen Dienst wie GitHub, Netlify, Vercel usw. verwenden. Um lokale Entwicklungen zu erleichtern, wird `localhost` von Browsern ebenfalls als sichere Herkunft betrachtet.

## Grundlegende Architektur

Mit Service Workern werden im Allgemeinen die folgenden Schritte zur grundlegenden Einrichtung beobachtet:

1. Der Code des Service Workers wird abgerufen und dann mit [`serviceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Wenn dies erfolgreich ist, wird der Service Worker in einem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgeführt; dies ist im Grunde eine spezielle Art von Worker-Kontext, der außerhalb des Hauptskript-Ausführungsthreads läuft und keinen DOM-Zugriff hat. Der Service Worker ist nun bereit, Ereignisse zu verarbeiten.
2. Die Installation findet statt. Ein `install`-Ereignis ist immer das erste, das an einen Service Worker gesendet wird (dies kann verwendet werden, um den Prozess der Befüllung einer IndexedDB zu starten und Website-Assets zu zwischenspeichern). Während dieses Schritts bereitet die Anwendung alles vor, um offline verfügbar zu machen.
3. Sobald der `install`-Handler abgeschlossen ist, gilt der Service Worker als installiert. Zu diesem Zeitpunkt kann eine vorherige Version des Service Workers aktiv sein und geöffnete Seiten steuern. Da wir nicht möchten, dass zwei verschiedene Versionen desselben Service Workers gleichzeitig laufen, ist die neue Version noch nicht aktiv.
4. Sobald alle von der alten Version des Service Workers gesteuerten Seiten geschlossen sind, kann die alte Version sicher zurückgezogen werden und der neu installierte Service Worker erhält ein `activate`-Ereignis. Der Hauptzweck von `activate` besteht darin, Ressourcen zu bereinigen, die in früheren Versionen des Service Workers verwendet wurden. Der neue Service Worker kann [`skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) aufrufen, um sofort aktiviert zu werden, ohne dass auf das Schließen offener Seiten gewartet werden muss. Der neue Service Worker erhält dann sofort `activate` und übernimmt alle geöffneten Seiten.
5. Nach der Aktivierung steuert der Service Worker nun Seiten, jedoch nur solche, die nach dem erfolgreichen `register()` geöffnet wurden. Mit anderen Worten, Dokumente müssen neu geladen werden, um tatsächlich gesteuert zu werden, da ein Dokument sein Leben mit oder ohne Service Worker beginnt und dies für seine Lebensdauer beibehält. Um dieses Standardverhalten zu überschreiben und geöffnete Seiten zu übernehmen, kann ein Service Worker [`clients.claim()`](/de/docs/Web/API/Clients/claim) aufrufen.
6. Jedes Mal, wenn eine neue Version eines Service Workers abgerufen wird, passiert dieser Zyklus erneut und die Reste der vorherigen Version werden während der Aktivierung der neuen Version bereinigt.

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

Um nur die Grundlagen der Registrierung und Installation eines Service Workers zu demonstrieren, haben wir eine Demo namens [simple service worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) erstellt, die eine einfache Star Wars Lego-Bildergalerie ist. Es verwendet eine Promise-basierte Funktion, um Bilddaten aus einem JSON-Objekt zu lesen und die Bilder mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch) zu laden, bevor die Bilder in einer Zeile auf der Seite angezeigt werden. Wir haben die Dinge statisch belassen. Es registriert, installiert und aktiviert auch einen Service Worker.

![Die Worte Star Wars gefolgt von einem Bild einer Lego-Version der Darth Vader-Figur](demo-screenshot.png)

Sie können den [Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) sehen und [den einfachen Service Worker live ausprobieren](https://bncb2v.csb.app/).

### Ihren Worker registrieren

Der erste Codeblock in der JavaScript-Datei unserer App — `app.js` — sieht folgendermaßen aus. Dies ist unser Einstiegspunkt für die Verwendung von Service Workern.

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
2. Als nächstes verwenden wir die Funktion [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um den Service Worker für diese Seite zu registrieren. Der Code des Service Workers befindet sich in einer JavaScript-Datei innerhalb unserer App (beachten Sie, dass dies die URL der Datei relativ zum Ursprung ist, nicht die JS-Datei, die darauf verweist.)
3. Der `scope`-Parameter ist optional und kann verwendet werden, um den Teil Ihres Inhalts anzugeben, den der Service Worker steuern soll. In diesem Fall haben wir `'/'` angegeben, was bedeutet, dass alle Inhalte unter dem Ursprung der App liegen. Wenn Sie ihn weglassen, wird er standardmäßig auf diesen Wert gesetzt, aber wir haben ihn hier zur Veranschaulichung angegeben.

Dies registriert einen Service Worker, der in einem Worker-Kontext ausgeführt wird und daher keinen DOM-Zugriff hat.

Ein einzelner Service Worker kann viele Seiten steuern. Jedes Mal, wenn eine Seite innerhalb Ihres Bereichs geladen wird, wird der Service Worker auf diese Seite installiert und wirkt auf sie ein. Beachten Sie daher, dass Sie mit globalen Variablen im Service Worker-Skript vorsichtig sein müssen: Jede Seite erhält keinen eigenen einzigartigen Worker.

> [!NOTE]
> Eine großartige Sache bei Service Workern ist, dass, wenn Sie eine Feature-Erkennung wie oben gezeigt verwenden, Browser, die keine Service Worker unterstützen, Ihre App einfach wie gewohnt online nutzen können.

#### Warum schlägt meine Service Worker-Registrierung fehl?

Ein Service Worker schlägt aus einem der folgenden Gründe bei der Registrierung fehl:

- Sie führen Ihre Anwendung nicht in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) (über HTTPS) aus.
- Der Pfad zur Service Worker-Datei ist falsch. Der Pfad muss relativ zum Ursprung und nicht zum Stammverzeichnis der App sein.
  In unserem Beispiel befindet sich der Worker unter `https://bncb2v.csb.app/sw.js`, und der App-Stamm ist `https://bncb2v.csb.app/`, daher muss der Service Worker als `/sw.js` angegeben werden.
- Der Pfad zu Ihrem Service Worker zeigt auf einen Service Worker einer anderen Herkunft als Ihre App.
- Die Service Worker-Registrierung enthält eine `scope`-Option, die breiter ist als durch den Worker-Pfad erlaubt.
  Der Standardbereich für einen Service Worker ist das Verzeichnis, in dem sich der Worker befindet.
  Mit anderen Worten, wenn das Skript `sw.js` sich in `/js/sw.js` befindet, kann es standardmäßig nur URLs im (oder verschachtelten) `/js/`-Pfad steuern.
  Der Bereich für einen Service Worker kann mit dem Header {{HTTPHeader("Service-Worker-Allowed")}} erweitert (oder eingeschränkt) werden.
- Durch Browsereinstellungen bedingte Probleme, wie zum Beispiel das Blockieren aller Cookies, der private Browsing-Modus, automatisches Löschen von Cookies beim Schließen usw.
  Weitere Informationen finden Sie in der [`serviceWorker.register()`-Browser-Kompatibilität](/de/docs/Web/API/ServiceWorkerContainer/register#browser_compatibility).

### Installieren und aktivieren: Ihren Cache befüllen

Nachdem Ihr Service Worker registriert wurde, versucht der Browser, den Service Worker für Ihre Seite/Ihre Website zu installieren und zu aktivieren.

Das `install`-Ereignis ist das erste Ereignis, das bei der Installation oder Aktualisierung eines Service Workers ausgelöst wird.
Es wird nur einmal ausgelöst, unmittelbar nachdem die Registrierung erfolgreich abgeschlossen wurde, und wird im Allgemeinen verwendet, um die Offline-Caching-Fähigkeiten Ihres Browsers mit den Assets zu befüllen, die Sie benötigen, um Ihre App offline auszuführen. Dazu verwenden wir die Speicherschnittstelle des Service Workers - [`cache`](/de/docs/Web/API/Cache) - ein globales Objekt im Service Worker, das es uns ermöglicht, durch Antworten gelieferte Assets zu speichern und sie durch ihre Anfragen zu kennzeichnen. Diese API funktioniert ähnlich wie der Standard-Cache des Browsers, ist jedoch spezifisch für Ihre Domain. Die Inhalte des Caches werden beibehalten, bis Sie sie löschen.

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

1. Hier fügen wir dem Service Worker (daher `self`) einen `install`-Ereignislistener hinzu und ketten dann eine [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode an das Ereignis an — dies stellt sicher, dass der Service Worker nicht installiert wird, bis der Code in `waitUntil()` erfolgreich ausgeführt wurde.
2. Innerhalb von `addResourcesToCache()` verwenden wir die Methode [`caches.open()`](/de/docs/Web/API/CacheStorage/open), um einen neuen Cache namens `v1` zu erstellen, der Version 1 unseres Site-Resource-Caches sein wird. Dann rufen wir eine Funktion `addAll()` für den erstellten Cache auf, die als Parameter ein Array von URLs zu allen Ressourcen annimmt, die Sie zwischenspeichern möchten. Die URLs sind relativ zum Standort des Workers.
3. Wenn das Versprechen abgelehnt wird, schlägt die Installation fehl und der Worker wird nichts tun. Das ist in Ordnung, da Sie Ihren Code korrigieren und es dann beim nächsten Mal erneut versuchen können, wenn die Registrierung erfolgt.
4. Nach einer erfolgreichen Installation wird der Service Worker aktiviert. Dies hat beim ersten Mal, wenn Ihr Service Worker installiert/aktiviert wird, keinen großen Nutzen, aber es bedeutet viel mehr, wenn der Service Worker aktualisiert wird (siehe den Abschnitt [Aktualisieren Ihres Service Workers](#aktualisieren_ihres_service_workers) später).

> [!NOTE] > [Die Web Storage API (`localStorage`)](/de/docs/Web/API/Web_Storage_API) funktioniert ähnlich wie der Cache des Service Workers, ist jedoch synchron und daher in Service Workern nicht erlaubt.

> [!NOTE] > [IndexedDB](/de/docs/Web/API/IndexedDB_API) kann innerhalb eines Service Workers zur Datenspeicherung verwendet werden, falls erforderlich.

### Benutzerdefinierte Antworten auf Anfragen

Sobald Sie Ihre Site-Assets zwischengespeichert haben, müssen Sie den Service Worker anweisen, etwas mit den zwischengespeicherten Inhalten zu tun. Dies erfolgt über das `fetch`-Ereignis.

1. Ein `fetch`-Ereignis wird jedes Mal ausgelöst, wenn irgendeine Ressource, die von einem Service Worker kontrolliert wird, abgerufen wird, was die Dokumente im angegebenen Bereich und alle in diesen Dokumenten referenzierten Ressourcen umfasst (zum Beispiel, wenn `index.html` eine Cross-Origin-Anfrage stellt, um ein Bild einzubetten, geht dies trotzdem durch seinen Service Worker).

2. Sie können einen `fetch`-Ereignislistener an den Service Worker anhängen und dann die `respondWith()`-Methode für das Ereignis aufrufen, um unsere HTTP-Antworten zu kapern und mit Ihren eigenen Inhalten zu aktualisieren.

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(/* custom content goes here */);
   });
   ```

3. Wir könnten damit beginnen, mit der Ressource zu antworten, deren URL der Netzwerkanforderung entspricht, in jedem Fall:

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(caches.match(event.request));
   });
   ```

   `caches.match(event.request)` ermöglicht es uns, jede aus dem Netzwerk angeforderte Ressource mit der entsprechenden im Cache verfügbaren Ressource abzugleichen, falls eine übereinstimmende verfügbar ist. Die Übereinstimmung erfolgt über URL und verschiedene Header, genau wie bei normalen HTTP-Anfragen.

![Fetch-Ereignisdiagramm](sw-fetch.svg)

## Wiederherstellung fehlgeschlagener Anfragen

`caches.match(event.request)` ist ideal, wenn es eine Übereinstimmung im Service Worker-Cache gibt, aber was ist mit Fällen, in denen es keine Übereinstimmung gibt? Wenn wir keine Art von Fehlerbehandlung bereitstellen würden, würde unser Versprechen mit `undefined` aufgelöst werden und wir würden nichts zurückbekommen.

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

Mit einer aufwendigeren Strategie könnten wir nicht nur das Netzwerk-Ergebnis anfordern, sondern es auch in den Cache speichern, sodass spätere Anfragen für diese Ressource ebenfalls im Offline-Modus abgerufen werden könnten. Dies würde bedeuten, dass, wenn zusätzliche Bilder in die Star Wars-Galerie hinzugefügt werden, unsere App diese automatisch abrufen und zwischenspeichern könnte. Das folgende Beispiel implementiert eine solche Strategie:

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

Wenn die angeforderte URL im Cache nicht verfügbar ist, fordern wir die Ressource mit `await fetch(request)` aus dem Netzwerk an. Danach legen wir eine Kopie der Antwort in den Cache. Die Funktion `putInCache()` verwendet `caches.open('v1')` und `cache.put()`, um die Ressource dem Cache hinzuzufügen. Die Originalantwort wird an den Browser zurückgegeben, um sie der Seite zu übergeben, die sie angefordert hat.

Das Klonen der Antwort ist notwendig, da Anforderungs- und Antwortströme nur einmal gelesen werden können. Um die Antwort sowohl an den Browser zurückzugeben als auch in den Cache zu legen, müssen wir sie klonen. Das Original wird also an den Browser zurückgegeben und die Kopie wird in den Cache gesendet. Sie werden jeweils einmal gelesen.

Was vielleicht etwas seltsam erscheint, ist, dass das Versprechen, das von `putInCache()` zurückgegeben wird, nicht abgewartet wird. Der Grund ist, dass wir nicht darauf warten möchten, bis die Antwortkopie dem Cache hinzugefügt wurde, bevor wir eine Antwort zuԥ� senden. Wir müssen jedoch `event.waitUntil()` für das Versprechen aufrufen, um sicherzustellen, dass der Service Worker nicht beendet wird, bevor der Cache gefüllt ist.

Das einzige Problem, das wir jetzt noch haben, ist, dass, wenn die Anfrage nichts im Cache findet und das Netzwerk nicht verfügbar ist, unsere Anfrage trotzdem fehlschlagen wird. Lassen Sie uns einen Standard-Fallback bieten, damit der Benutzer zumindest etwas bekommt, egal was passiert:

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

Wir haben uns für dieses Fallback-Bild entschieden, weil die einzigen Updates, die wahrscheinlich fehlschlagen, neue Bilder sind, da alles andere für die Installation im `install`-Ereignislistener, den wir zuvor gesehen haben, erforderlich ist.

## Service Worker-Navigation Preload

Wenn aktiviert, startet die [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager)-Funktion den Download von Ressourcen, sobald die Fetch-Anfrage gestellt wird, und parallel zur Aktivierung des Service Workers. Dies stellt sicher, dass der Download sofort beginnt, wenn auf eine Seite navigiert wird, anstatt auf die Aktivierung des Service Workers zu warten. Diese Verzögerung tritt relativ selten auf, ist jedoch unvermeidlich, wenn sie auftritt, und kann signifikant sein.

Zunächst muss die Funktion während der Aktivierung des Service Workers aktiviert werden, indem [`registration.navigationPreload.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable) verwendet wird:

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Dann verwenden Sie [`event.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse), um im `fetch`-Ereignishandler auf das Herunterladen der vorab geladenen Ressource zu warten.

Fortsetzend von dem Beispiel aus den vorherigen Abschnitten, fügen wir den Code ein, um auf die vorab geladene Ressource zu warten, nachdem der Cache überprüft wurde und bevor wir vom Netzwerk abrufen, falls das nicht erfolgreich ist.

Der neue Prozess ist:

1. Cache prüfen
2. Auf `event.preloadResponse` warten, das als `preloadResponsePromise` an die `cacheFirst()`-Funktion übergeben wird. Das Ergebnis cachen, wenn es zurückkommt.
3. Wenn weder eins von diesen definiert ist, gehen wir ins Netzwerk.

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

Beachten Sie, dass wir in diesem Beispiel dieselben Daten für die Ressource herunterladen und cachen, unabhängig davon, ob sie "normal" oder vorab geladen heruntergeladen wurde. Sie können stattdessen wählen, eine andere Ressource beim Preloading herunterzuladen und zu cachen. Weitere Informationen finden Sie unter [`NavigationPreloadManager`> Custom responses](/de/docs/Web/API/NavigationPreloadManager#custom_responses).

## Aktualisieren Ihres Service Workers

Wenn Ihr Service Worker zuvor installiert wurde, aber dann eine neue Version des Workers beim Aktualisieren oder Laden einer Seite verfügbar ist, wird die neue Version im Hintergrund installiert, jedoch noch nicht aktiviert. Sie wird nur aktiviert, wenn es keine geladenen Seiten mehr gibt, die noch den alten Service Worker verwenden. Sobald es keine solchen Seiten mehr gibt, wird der neue Service Worker aktiviert.

> [!NOTE]
> Es ist möglich, dies zu umgehen, indem [`Clients.claim()`](/de/docs/Web/API/Clients/claim) verwendet wird.

Sie werden Ihren `install`-Ereignislistener im neuen Service Worker auf etwas Ähnliches wie das Folgende aktualisieren wollen (beachten Sie die neue Versionsnummer):

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

Während der Service Worker installiert wird, ist die vorherige Version immer noch für Fetches verantwortlich. Die neue Version wird im Hintergrund installiert. Wir nennen den neuen Cache `v2`, sodass der vorherige `v1`-Cache nicht gestört wird.

Wenn keine Seiten mehr die vorherige Version verwenden, aktiviert sich der neue Worker und wird für Fetches verantwortlich.

### Löschen alter Caches

Wie wir im letzten Abschnitt gesehen haben, erstellen Sie beim Aktualisieren eines Service Workers auf eine neue Version einen neuen Cache in seinem `install`-Ereignis-Handler. Solange es geöffnete Seiten gibt, die von der vorherigen Version des Workers gesteuert werden, müssen Sie beide Caches beibehalten, da die vorherige Version ihren Cache benötigt. Sie können das `activate`-Ereignis verwenden, um Daten aus den vorherigen Caches zu entfernen.

Die in `waitUntil()` übergebenen Versprechen blockieren andere Ereignisse bis zum Abschluss, so dass Sie sicher sein können, dass Ihr Bereinigungsvorgang abgeschlossen ist, bevor Sie Ihr erstes `fetch`-Ereignis im neuen Service Worker erhalten.

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
  - Die Schaltfläche "Diese Website vergessen", verfügbar in [den Anpasungsoptionen der Firefox-Symbolleiste](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars), kann zum Löschen von Service Workern und deren Caches verwendet werden.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/service-workers/)

## Siehe auch

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP-Header
