---
title: Verwendung von Service Workern
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: 5d29bef0815f8cc4b5b152b9ee1ab53f002ee617
---

{{DefaultAPISidebar("Service Workers API")}}

Dieser Artikel bietet Informationen dazu, wie Sie mit Service Workern beginnen können, einschließlich grundlegender Architektur, Registrierung eines Service Workers, der Installations- und Aktivierungsprozess für einen neuen Service Worker, Aktualisierung Ihres Service Workers, Cache-Kontrolle und benutzerdefinierte Antworten, alles im Kontext einer App mit Offline-Funktionalität.

## Das Prinzip der Service Worker

Ein übergeordnetes Problem, mit dem Webnutzer seit Jahren zu kämpfen haben, ist der Verlust der Konnektivität. Die beste Web-App der Welt bietet eine schreckliche Benutzererfahrung, wenn sie nicht heruntergeladen werden kann. Es gab verschiedene Versuche, Technologien zu entwickeln, um dieses Problem zu lösen, und einige der Probleme wurden gelöst. Aber das übergeordnete Problem war, dass es keinen guten allgemeinen Kontrollmechanismus für das Zwischenspeichern von Ressourcen und benutzerdefinierte Netzwerk-Anfragen gab.

Service Worker beheben diese Probleme. Mit einem Service Worker können Sie eine App so einrichten, dass zuerst zwischengespeicherte Ressourcen verwendet werden, um eine standardmäßige Erfahrung zu bieten, selbst wenn keine Netzverbindung besteht, bevor dann mehr Daten aus dem Netzwerk geladen werden (allgemein bekannt als "offline first"). Diese Möglichkeit besteht bereits bei nativen Apps, was einer der Hauptgründe ist, warum native Apps oft Web-Apps vorgezogen werden.

Ein Service Worker fungiert wie ein Proxy-Server und ermöglicht es Ihnen, Anfragen und Antworten zu modifizieren, indem er sie durch Elemente aus seinem eigenen Cache ersetzt.

## Vorbereitung für die Arbeit mit Service Workern

Service Worker sind standardmäßig in allen modernen Browsern aktiviert. Um Code zu verwenden, der Service Worker nutzt, müssen Sie Ihren Code über HTTPS ausliefern – Service Worker sind auf Ausführung über HTTPS beschränkt, aus Sicherheitsgründen. Ein Server, der HTTPS unterstützt, ist erforderlich. Um Experimente zu hosten, können Sie einen Dienst wie GitHub, Netlify, Vercel usw. verwenden. Zur Unterstützung der lokalen Entwicklung wird `localhost` von Browsern ebenfalls als sichere Herkunft betrachtet.

## Grundlegende Architektur

Bei Service Workern werden die folgenden Schritte im Allgemeinen für die grundlegende Einrichtung befolgt:

1. Der Code des Service Workers wird abgerufen und dann mit [`serviceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Ist dies erfolgreich, wird der Service Worker in einem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgeführt; im Grunde handelt es sich um eine spezielle Art von Worker-Kontext, der nicht im Hauptskript-Ausführungsthread läuft und keinen DOM-Zugriff hat. Der Service Worker ist nun bereit, Ereignisse zu verarbeiten.
2. Es erfolgt die Installation. Ein `install`-Ereignis ist immer das erste, das einem Service Worker gesendet wird (dies kann verwendet werden, um den Prozess der Populierung einer IndexedDB zu starten und Website-Ressourcen zu cachen). Während dieses Schritts bereitet die Anwendung alles vor, das offline verfügbar gemacht werden soll.
3. Wenn der `install`-Handler abgeschlossen ist, gilt der Service Worker als installiert. Zu diesem Zeitpunkt kann eine vorherige Version des Service Workers aktiv und offene Seiten kontrollierend sein. Da wir nicht möchten, dass zwei verschiedene Versionen desselben Service Workers gleichzeitig ausgeführt werden, ist die neue Version noch nicht aktiv.
4. Sobald alle vom alten Service Worker kontrollierten Seiten geschlossen sind, ist es sicher, die alte Version auszumustern, und der neu installierte Service Worker erhält ein `activate`-Ereignis. Der Hauptverwendungszweck von `activate` ist das Bereinigen von Ressourcen, die in vorherigen Versionen des Service Workers verwendet wurden. Der neue Service Worker kann [`skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) aufrufen, um zu beantragen, sofort aktiviert zu werden, ohne darauf zu warten, dass offene Seiten geschlossen werden. Der neue Service Worker erhält dann sofort `activate` und übernimmt alle offenen Seiten.
5. Nach der Aktivierung kontrolliert der Service Worker nun Seiten, jedoch nur solche, die nach dem erfolgreichen `register()` geöffnet wurden. Mit anderen Worten, Dokumente müssen neu geladen werden, um tatsächlich kontrolliert zu werden, da ein Dokument sein Leben mit oder ohne Service Worker beginnt und dies für seine Lebensdauer beibehält. Um dieses Standardverhalten zu überschreiben und offene Seiten zu übernehmen, kann ein Service Worker [`clients.claim()`](/de/docs/Web/API/Clients/claim) aufrufen.
6. Jedes Mal, wenn eine neue Version eines Service Workers abgerufen wird, erfolgt dieser Zyklus erneut und die Überreste der vorherigen Version werden während der Aktivierung der neuen Version bereinigt.

![Lebenszyklus-Diagramm](sw-lifecycle.svg)

Hier ist eine Zusammenfassung der verfügbaren Service Worker-Ereignisse:

- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
- [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)
- Funktionale Ereignisse
  - [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
  - [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event)
  - [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)

## Demo

Um nur die Grundlagen der Registrierung und Installation eines Service Workers zu demonstrieren, haben wir eine Demo namens [einfacher Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) erstellt, die eine einfache Star Wars Lego-Bildergalerie ist. Sie verwendet eine Promise-basierte Funktion, um Bilddaten aus einem JSON-Objekt zu lesen und die Bilder mithilfe von [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch) zu laden, bevor sie die Bilder in einer Reihe auf der Seite anzeigt. Bisher haben wir die Dinge statisch gehalten. Sie registriert, installiert und aktiviert auch einen Service Worker.

![Die Worte Star Wars gefolgt von einem Bild einer Lego-Version der Figur Darth Vader](demo-screenshot.png)

Sie können den [Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) sehen und den [einfachen Service Worker live ausführen](https://bncb2v.csb.app/).

### Registrieren Ihres Workers

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
2. Anschließend verwenden wir die Funktion [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um den Service Worker für diese Website zu registrieren. Der Code des Service Workers befindet sich in einer JavaScript-Datei innerhalb unserer App (beachten Sie, dass dies die URL der Datei relativ zum Ursprung ist, nicht die JavaScript-Datei, die darauf verweist.)
3. Der `scope`-Parameter ist optional und kann verwendet werden, um den Teil Ihres Inhalts anzugeben, den der Service Worker kontrollieren soll. In diesem Fall haben wir `'/'` angegeben, was bedeutet, dass alle Inhalte unter dem Ursprung der App kontrolliert werden. Wenn Sie es weglassen, wird es ohnehin auf diesen Wert standardmäßig gesetzt, aber wir haben es hier zu Illustrationszwecken angegeben.

Dies registriert einen Service Worker, der in einem Worker-Kontext läuft und daher keinen DOM-Zugriff hat.

Ein einzelner Service Worker kann viele Seiten kontrollieren. Jedes Mal, wenn eine Seite innerhalb Ihres Scopes geladen wird, wird der Service Worker gegen diese Seite installiert und arbeitet daran. Beachten Sie daher, dass Sie vorsichtig mit globalen Variablen im Service Worker-Skript sein müssen: Jede Seite erhält keinen eigenen einzigartigen Worker.

> [!NOTE]
> Ein großer Vorteil von Service Workern ist, dass, wenn Sie Feature Detection verwenden, wie wir es oben gezeigt haben, Browser, die keine Service Worker unterstützen, Ihre App einfach wie erwartet online verwenden können.

#### Warum schlägt die Registrierung meines Service Workers fehl?

Dies kann aus folgenden Gründen passieren:

- Ihre Anwendung wird nicht über HTTPS ausgeführt.
- Der Pfad zu Ihrer Service Worker-Datei ist nicht korrekt geschrieben — er muss relativ zum Ursprung geschrieben werden, nicht im Stammverzeichnis Ihrer App. In unserem Beispiel befindet sich der Worker unter `https://bncb2v.csb.app/sw.js`, und das Stammverzeichnis der App ist `https://bncb2v.csb.app/`. Der Pfad muss jedoch als `/sw.js` geschrieben werden.
- Es ist auch nicht erlaubt, auf einen Service Worker eines anderen Ursprungs als den Ihrer App zu verweisen.
- Der Service Worker wird nur Anfragen von Clients unter dem Scope des Service Workers abfangen.
- Der maximale Scope für einen Service Worker ist der Standort des Workers (anders ausgedrückt, wenn das Skript `sw.js` sich in `/js/sw.js` befindet, kann es standardmäßig nur URLs unter `/js/` kontrollieren). Eine Liste maximaler Scopes für diesen Worker kann mit dem `Service-Worker-Allowed` Header angegeben werden.
- In Firefox sind Service Worker-APIs verborgen und können nicht verwendet werden, wenn der Nutzer sich im [privaten Modus](https://bugzil.la/1320796) befindet, oder wenn der Verlauf deaktiviert ist, oder wenn Cookies gelöscht werden, wenn Firefox geschlossen wird.
- In Chrome schlägt die Registrierung fehl, wenn die Option "Block all cookies (not recommended)" aktiviert ist.

### Installieren und Aktivieren: Auffüllen Ihres Caches

Nachdem Ihr Service Worker registriert ist, wird der Browser versuchen, den Service Worker für Ihre Seite/Website zu installieren und dann zu aktivieren.

Das `install`-Ereignis ist das erste Ereignis, das bei der Installation oder Aktualisierung eines Service Workers ausgelöst wird.
Es wird nur einmal ausgelöst, direkt nach der erfolgreichen Registrierung, und wird im Allgemeinen verwendet, um die Offline-Caching-Fähigkeiten Ihres Browsers mit den Ressourcen zu füllen, die Sie benötigen, um Ihre App offline auszuführen. Dazu verwenden wir die Storage-API des Service Workers — [`cache`](/de/docs/Web/API/Cache) — ein globales Objekt im Service Worker, das es uns ermöglicht, durch Antworten gelieferte Ressourcen zu speichern, und sie mit ihren Anforderungen zu verbinden. Diese API funktioniert ähnlich wie der Standard-Cache des Browsers, ist jedoch spezifisch für Ihre Domain. Der Inhalt des Caches wird gespeichert, bis Sie ihn löschen.

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

1. Hier fügen wir dem Service Worker ein `install`-Ereignis-Listener hinzu (daher `self`), und verketteten dann eine [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode an das Ereignis — dies stellt sicher, dass der Service Worker nicht installiert wird, bis der Code innerhalb von `waitUntil()` erfolgreich abgeschlossen ist.
2. Innerhalb von `addResourcesToCache()` verwenden wir die Methode [`caches.open()`](/de/docs/Web/API/CacheStorage/open), um einen neuen Cache namens `v1` zu erstellen, der Version 1 unseres Ressourcen-Caches für die Website sein wird. Dann rufen wir eine Funktion `addAll()` auf dem erstellten Cache auf, die als Parameter ein Array von URLs zu allen Ressourcen erhält, die Sie cachen möchten. Die URLs sind relativ zur [location](/de/docs/Web/API/WorkerGlobalScope/location) des Workers.
3. Wenn das Versprechen abgelehnt wird, schlägt die Installation fehl, und der Worker wird nichts tun. Das ist in Ordnung, da Sie Ihren Code korrigieren und dann beim nächsten Registrierungsversuch erneut versuchen können.
4. Nach einer erfolgreichen Installation aktiviert sich der Service Worker. Dies hat beim ersten Mal, dass Ihr Service Worker installiert/aktiviert wird, nicht viel zusätzlichen Nutzen, aber es bedeutet mehr, wenn der Service Worker aktualisiert wird (siehe den Abschnitt [Aktualisieren Ihres Service Workers](#aktualisieren_ihres_service_workers) weiter unten).

> **Hinweis:** [Die Web Storage API (`localStorage`)](/de/docs/Web/API/Web_Storage_API) funktioniert ähnlich wie der Cache des Service Workers, ist jedoch synchron und daher in Service Workern nicht erlaubt.

> **Hinweis:** [IndexedDB](/de/docs/Web/API/IndexedDB_API) kann in einem Service Worker für die Datenspeicherung verwendet werden, falls erforderlich.

### Benutzerdefinierte Antworten auf Anfragen

Jetzt, da Sie die Ressourcen Ihrer Website gecacht haben, müssen Sie den Service Workern sagen, etwas mit dem zwischengespeicherten Inhalt zu tun. Dies geschieht mit dem `fetch`-Ereignis.

1. Ein `fetch`-Ereignis wird jedes Mal ausgelöst, wenn eine von einem Service Worker kontrollierte Ressource abgerufen wird, was die Dokumente innerhalb des festgelegten Scopes einschließt, sowie alle in diesen Dokumenten referenzierten Ressourcen (zum Beispiel, wenn `index.html` eine Cross-Origin-Anfrage stellt, um ein Bild einzubetten, geht das immer noch über seinen Service Worker.)

2. Sie können einen `fetch`-Ereignis-Listener an den Service Worker anhängen, dann die Methode `respondWith()` auf dem Ereignis aufrufen, um unsere HTTP-Antworten zu entführen und mit eigenem Inhalt zu aktualisieren.

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(/* custom content goes here */);
   });
   ```

3. Wir könnten damit beginnen, mit der Ressource zu antworten, deren URL mit der der Netzwerkanfrage übereinstimmt, in jedem Fall:

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(caches.match(event.request));
   });
   ```

   `caches.match(event.request)` ermöglicht es uns, jede Ressource, die vom Netzwerk angefordert wird, mit der entsprechenden im Cache verfügbaren Ressource zu abzugleichen, falls eine entsprechende vorhanden ist. Das Matching erfolgt über URL und verschiedene Header, genau wie bei normalen HTTP-Anfragen.

![Abfrageereignis-Diagramm](sw-fetch.svg)

## Wiederherstellen fehlgeschlagener Anfragen

`caches.match(event.request)` ist hervorragend, wenn es eine Übereinstimmung im Service Worker-Cache gibt, aber was ist mit Fällen, in denen es keine Übereinstimmung gibt? Wenn wir keine Art von Fehlerbehandlung bereitstellen, würde unser Versprechen mit `undefined` auflösen und wir würden nichts zurückerhalten.

Nachdem wir die Antwort aus dem Cache getestet haben, können wir auf eine reguläre Netzwerk-Anforderung zurückgreifen:

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

Wenn die Ressourcen nicht im Cache vorhanden sind, werden sie vom Netzwerk angefordert.

Mit einer ausgeklügelteren Strategie könnten wir nicht nur die Ressource vom Netzwerk anfordern, sondern sie auch in den Cache speichern, damit spätere Anfragen nach dieser Ressource offline abgerufen werden können. Dies würde bedeuten, dass, wenn zusätzliche Bilder zur Star Wars-Galerie hinzugefügt würden, unsere App sie automatisch abrufen und cachen könnte. Der folgende Codeausschnitt implementiert eine solche Strategie:

```js
const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  const responseFromNetwork = await fetch(request);
  putInCache(request, responseFromNetwork.clone());
  return responseFromNetwork;
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});
```

Wenn die Anforderungs-URL nicht im Cache verfügbar ist, verlangen wir die Ressource von der Netzwerk-Anforderung mit `await fetch(request)`. Danach legen wir eine Kopie der Antwort in den Cache. Die Funktion `putInCache()` verwendet `caches.open('v1')` und `cache.put()`, um die Ressource dem Cache hinzuzufügen. Die ursprüngliche Antwort wird an den Browser zurückgegeben, um sie an die aufrufende Seite zu übergeben.

Das Klonen der Antwort ist notwendig, weil Anforderungs- und Antwortströme nur einmal gelesen werden können. Um die Antwort an den Browser zurückzugeben und sie in den Cache zu legen, müssen wir sie klonen. So wird das Original an den Browser zurückgegeben und die Kopie wird an den Cache gesendet. Beide werden einmal gelesen.

Was vielleicht ein wenig seltsam aussieht, ist, dass das Versprechen, das von `putInCache()` zurückgegeben wird, nicht abgewartet wird. Der Grund dafür ist, dass wir nicht warten wollen, bis die Antwortkopie dem Cache hinzugefügt wurde, bevor wir eine Antwort zurückgeben.

Das einzige Problem, das wir jetzt haben, ist, dass, wenn die Anfrage nichts im Cache findet und das Netzwerk nicht verfügbar ist, unsere Anfrage weiterhin fehlschlägt. Geben wir eine Standard-Fallback-Option an, sodass der Nutzer zumindest etwas erhält, was auch immer passiert:

```js
const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, fallbackUrl }) => {
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
    putInCache(request, responseFromNetwork.clone());
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
    }),
  );
});
```

Wir haben uns für dieses Fallback-Bild entschieden, da die einzigen Updates, die wahrscheinlich fehlschlagen, neue Bilder sind, da alles andere für die Installation im `install`-Ereignis-Listener benötigt wird, den wir zuvor gesehen haben.

## Service Worker-Navigationsvorladung

Wenn aktiviert, startet die [Navigationsvorlade-](/de/docs/Web/API/NavigationPreloadManager)Funktion das Herunterladen von Ressourcen, sobald die Abfrageanforderung gestellt wird, und parallel zur Aktivierung des Service Workers. Dies stellt sicher, dass der Download unmittelbar bei der Navigation zu einer Seite beginnt, anstatt darauf zu warten, dass der Service Worker aktiviert wird. Diese Verzögerung tritt relativ selten auf, ist jedoch nicht zu vermeiden, wenn sie eintritt und kann signifikant sein.

Zuerst muss die Funktion während der Aktivierung des Service Workers über [`registration.navigationPreload.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable) aktiviert werden:

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Anschließend verwenden Sie [`event.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse), um auf das Herunterladen der vorgeladenen Ressource im `fetch`-Ereignis-Handler zu warten.

Fortsetzend mit dem Beispiel aus den vorherigen Abschnitten fügen wir den Code ein, um auf die vorgeladene Ressource zu warten, nach dem Cache-Check und bevor vom Netzwerk abgerufen wird, wenn dies nicht erfolgreich ist.

Der neue Prozess lautet:

1. Cache überprüfen
2. Auf `event.preloadResponse` warten, das als `preloadResponsePromise` an die Funktion `cacheFirst()` übergeben wird. Cache das Ergebnis, wenn es zurückgegeben wird.
3. Wenn keine dieser Optionen definiert ist, gehen wir ins Netzwerk.

```js
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  // First try to get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Next try to use (and cache) the preloaded response, if it's there
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info("using preload response", preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  // Next try to get the resource from the network
  try {
    const responseFromNetwork = await fetch(request);
    // response may be used only once
    // we need to save clone to put one copy in cache
    // and serve second one
    putInCache(request, responseFromNetwork.clone());
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
    }),
  );
});
```

Beachten Sie, dass wir in diesem Beispiel dieselben Daten für die Ressource herunterladen und cachen, unabhängig davon, ob sie "normal" oder vorgeladen heruntergeladen werden. Sie können stattdessen wählen, eine andere Ressource beim Vorladen herunterzuladen und zu cachen. Weitere Informationen siehe [`NavigationPreloadManager` > Benutzerdefinierte Antworten](/de/docs/Web/API/NavigationPreloadManager#custom_responses).

## Aktualisieren Ihres Service Workers

Wenn Ihr Service Worker zuvor installiert wurde, aber dann eine neue Version des Workers bei einem Refresh oder einer Seitenladung verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert. Sie wird erst aktiviert, wenn keine Seiten mehr geladen sind, die den alten Service Worker verwenden. Sobald keine solchen Seiten mehr geladen sind, aktiviert sich der neue Service Worker.

> [!NOTE]
> Es ist möglich, dies zu umgehen, indem [`Clients.claim()`](/de/docs/Web/API/Clients/claim) verwendet wird.

Sie möchten Ihren `install`-Ereignis-Listener im neuen Service Worker zu etwas wie diesem aktualisieren (beachten Sie die neue Versionsnummer):

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

Während der Service Worker installiert wird, ist die vorherige Version weiterhin für Abfragen verantwortlich. Die neue Version wird im Hintergrund installiert. Wir nennen den neuen Cache `v2`, sodass der vorherige `v1`-Cache nicht gestört wird.

Wenn keine Seiten mehr die vorherige Version nutzen, aktiviert sich der neue Worker und übernimmt die Verantwortung für Abfragen.

### Löschen alter Caches

Wie wir im letzten Abschnitt gesehen haben, erstellen Sie beim Aktualisieren eines Service Workers auf eine neue Version einen neuen Cache in dessen `install`-Ereignis-Handler. Während es noch offene Seiten gibt, die von der vorherigen Version des Workers kontrolliert werden, müssen Sie beide Caches behalten, weil die vorherige Version ihre Version des Caches benötigt. Sie können das `activate`-Ereignis verwenden, um Daten aus den vorherigen Caches zu entfernen.

Versprechen, die an `waitUntil()` übergeben werden, blockieren andere Ereignisse bis zum Abschluss, sodass Sie sicher sein können, dass Ihr Aufräumvorgang abgeschlossen ist, wenn Sie Ihr erstes `fetch`-Ereignis im neuen Service Worker erhalten.

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
  - Der "Vergiss diese Seite"-Button, verfügbar in den [Toolbar-Anpassungsoptionen von Firefox](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars), kann verwendet werden, um Service Worker und deren Caches zu löschen.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/service-workers/)

## Siehe auch

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
