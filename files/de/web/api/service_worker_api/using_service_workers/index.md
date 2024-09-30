---
title: Verwendung von Service Workern
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Service Workers API")}}

Dieser Artikel bietet Informationen zum Einstieg in Service Worker, einschließlich der grundlegenden Architektur, der Registrierung eines Service Workers, des Installations- und Aktivierungsprozesses für einen neuen Service Worker, der Aktualisierung Ihres Service Workers, der Cache-Kontrolle und benutzerdefinierte Antworten - alles im Kontext einer einfachen App mit Offline-Funktionalität.

## Das Prinzip von Service Workern

Ein übergeordnetes Problem, das Webnutzer seit Jahren plagt, ist der Verlust der Konnektivität. Die beste Web-App der Welt wird eine schreckliche Benutzererfahrung bieten, wenn sie nicht heruntergeladen werden kann. Es gab verschiedene Versuche, Technologien zu schaffen, um dieses Problem zu lösen, und einige der Probleme wurden gelöst. Das übergeordnete Problem war jedoch, dass es keinen guten Mechanismus zur Gesamtsteuerung des Asset-Cachings und benutzerdefinierter Netzwerkanfragen gab.

Service Worker beheben diese Probleme. Mithilfe eines Service Workers können Sie eine App so einrichten, dass sie zuerst zwischengespeicherte Ressourcen nutzt und somit eine Standarderfahrung auch offline bietet, bevor sie dann mehr Daten aus dem Netzwerk abruft (allgemein bekannt als "offline first"). Dies ist bereits bei nativen Apps verfügbar, was einer der Hauptgründe ist, warum native Apps oft gegenüber Web-Apps bevorzugt werden.

Ein Service Worker fungiert wie ein Proxy-Server, der es Ihnen ermöglicht, Anfragen und Antworten zu modifizieren und diese durch Elemente aus seinem eigenen Cache zu ersetzen.

## Einrichtung zum Experimentieren mit Service Workern

Service Worker sind standardmäßig in allen modernen Browsern aktiviert. Um Code mit Service Workern auszuführen, müssen Sie Ihren Code über HTTPS bereitstellen — Service Worker sind aus Sicherheitsgründen auf die Ausführung über HTTPS beschränkt. Ein Server, der HTTPS unterstützt, ist notwendig. Um Experimente zu hosten, können Sie einen Dienst wie GitHub, Netlify, Vercel usw. nutzen. Um lokale Entwicklungen zu erleichtern, wird `localhost` von Browsern ebenfalls als sicherer Ursprung angesehen.

## Grundlegende Architektur

Bei Service Workern werden im Allgemeinen die folgenden Schritte für die grundlegende Einrichtung befolgt:

1. Der Service Worker-Code wird abgerufen und dann mithilfe von [`serviceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Bei Erfolg wird der Service Worker in einem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgeführt; dies ist im Grunde eine spezielle Art von Worker-Kontext, der nicht im Hauptskript-Ausführungsthread läuft und keinen DOM-Zugriff hat. Der Service Worker ist jetzt bereit, Ereignisse zu verarbeiten.
2. Die Installation erfolgt. Ein `install`-Ereignis ist immer das erste, das an einen Service Worker gesendet wird (dies kann verwendet werden, um den Prozess des Auffüllens eines IndexedDB und des Cachens von Website-Assets zu beginnen). Während dieses Schrittes bereitet die Anwendung alles darauf vor, offline verfügbar zu sein.
3. Wenn der `install`-Handler abgeschlossen ist, wird der Service Worker als installiert angesehen. Zu diesem Zeitpunkt kann eine vorherige Version des Service Workers aktiv sein und offene Seiten steuern. Da wir nicht wollen, dass zwei verschiedene Versionen desselben Service Workers gleichzeitig laufen, ist die neue Version noch nicht aktiv.
4. Sobald alle Seiten, die von der alten Version des Service Workers gesteuert werden, geschlossen wurden, kann die alte Version sicher zurückgezogen werden, und der neu installierte Service Worker erhält ein `activate`-Ereignis. Der Hauptzweck von `activate` ist das Aufräumen von Ressourcen, die in vorherigen Versionen des Service Workers verwendet wurden. Der neue Service Worker kann [`skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) aufrufen, um sofort aktiviert zu werden, ohne darauf zu warten, dass offene Seiten geschlossen werden. Der neue Service Worker erhält dann sofort `activate` und übernimmt alle offenen Seiten.
5. Nach der Aktivierung wird der Service Worker Seiten kontrollieren, aber nur diejenigen, die nach dem erfolgreichen `register()` geöffnet wurden. Mit anderen Worten, Dokumente müssen neu geladen werden, um tatsächlich gesteuert zu werden, da ein Dokument mit oder ohne Service Worker beginnt und diesen Status während seiner Lebensdauer beibehält. Um dieses Standardverhalten zu überschreiben und geöffnete Seiten zu übernehmen, kann ein Service Worker [`clients.claim()`](/de/docs/Web/API/Clients/claim) aufrufen.
6. Jedes Mal, wenn eine neue Version eines Service Workers abgerufen wird, wiederholt sich dieser Zyklus und die Überreste der vorherigen Version werden während der Aktivierung der neuen Version bereinigt.

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

Um nur die absoluten Grundlagen der Registrierung und Installation eines Service Workers zu demonstrieren, haben wir eine Demo namens [einfacher Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) erstellt, die eine einfache Star Wars Lego-Bildergalerie darstellt. Sie verwendet eine Promise-basierte Funktion, um Bilddaten aus einem JSON-Objekt zu lesen und die Bilder mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch) zu laden, bevor sie die Bilder in einer Linie auf der Seite anzeigt. Wir haben die Dinge vorerst statisch gehalten. Außerdem registriert, installiert und aktiviert sie einen Service Worker.

![Die Worte Star Wars gefolgt von einem Bild einer Lego-Version des Darth Vader-Charakters](demo-screenshot.png)

Sie können den [Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) sehen und den [einfachen Service Worker live](https://bncb2v.csb.app/) ausführen.

### Registrieren Ihres Workers

Der erste Codeblock in der JavaScript-Datei unserer App — `app.js` — sieht folgendermaßen aus. Dies ist unser Einstiegspunkt in die Verwendung von Service Workern.

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
2. Als nächstes verwenden wir die Funktion [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um den Service Worker für diese Seite zu registrieren. Der Service Worker-Code befindet sich in einer JavaScript-Datei innerhalb unserer App (beachten Sie, dass dies die URL der Datei relativ zum Ursprung ist, nicht die JS-Datei, die darauf verweist).
3. Der `scope`-Parameter ist optional und kann verwendet werden, um den Teil Ihres Inhalts anzugeben, den der Service Worker steuern soll. In diesem Fall haben wir `'/'` angegeben, was bedeutet, dass alle Inhalte unter dem Ursprung der App liegen. Wenn Sie es weglassen, wird es standardmäßig auf diesen Wert gesetzt, aber wir haben es hier zu Illustrationszwecken angegeben.

Dies registriert einen Service Worker, der in einem Worker-Kontext läuft und daher keinen DOM-Zugriff hat.

Ein einzelner Service Worker kann viele Seiten steuern. Jedes Mal, wenn innerhalb Ihres Geltungsbereichs eine Seite geladen wird, wird der Service Worker gegen diese Seite installiert und wirkt auf sie ein. Beachten Sie daher, dass Sie vorsichtig mit globalen Variablen im Service Worker-Skript umgehen müssen: Jede Seite erhält ihren eigenen einzigartigen Worker.

> [!NOTE]
> Ein großer Vorteil von Service Workern ist, dass, wenn Sie die oben gezeigte Feature-Erkennung verwenden, Browser, die Service Worker nicht unterstützen, Ihre App einfach wie erwartet online verwenden können.

#### Warum schlägt die Registrierung meines Service Workers fehl?

Dies könnte aus folgenden Gründen der Fall sein:

- Sie betreiben Ihre Anwendung nicht über HTTPS.
- Der Pfad zu Ihrer Service Worker-Datei ist nicht korrekt geschrieben — er muss relativ zum Ursprung geschrieben werden, nicht zum Stammverzeichnis Ihrer App. In unserem Beispiel befindet sich der Worker unter `https://bncb2v.csb.app/sw.js`, und das Stammverzeichnis der App ist `https://bncb2v.csb.app/`. Aber der Pfad muss als `/sw.js` geschrieben werden.
- Es ist auch nicht erlaubt, auf einen Service Worker eines anderen Ursprungs zu verweisen als der Ursprung Ihrer App.
- Der Service Worker wird nur Anfragen von Clients innerhalb des Scope des Service Workers abfangen.
- Der maximale Scope für einen Service Worker ist der Standort des Workers (mit anderen Worten, wenn das Skript `sw.js` unter `/js/sw.js` liegt, kann es standardmäßig nur URLs unter `/js/` steuern). Eine Liste von maximalen Scopes für diesen Worker kann mit dem `Service-Worker-Allowed`-Header angegeben werden.
- In Firefox sind die Service Worker-APIs verborgen und können nicht verwendet werden, wenn der Benutzer im [privaten Modus](https://bugzil.la/1320796) surft oder wenn der Verlauf deaktiviert ist oder wenn Cookies gelöscht werden, wenn Firefox geschlossen wird.
- In Chrome schlägt die Registrierung fehl, wenn die Option "Block all cookies (not recommended)" aktiviert ist.

### Installieren und Aktivieren: Ihren Cache befüllen

Nachdem Ihr Service Worker registriert wurde, wird der Browser versuchen, dann den Service Worker für Ihre Seite/Site zu installieren und zu aktivieren.

Das `install`-Ereignis wird ausgelöst, wenn eine Installation erfolgreich abgeschlossen wurde. Das `install`-Ereignis wird in der Regel verwendet, um die Offline-Caching-Fähigkeiten des Browsers mit den Ressourcen zu befüllen, die Sie benötigen, um Ihre App offline auszuführen. Dazu verwenden wir die Speicher-API des Service Workers — [`cache`](/de/docs/Web/API/Cache) — ein globales Objekt im Service Worker, das uns ermöglicht, von Antworten gelieferte Assets zu speichern, die durch ihre Anfragen gekennzeichnet sind. Diese API funktioniert auf ähnliche Weise wie der Standard-Cache des Browsers, ist jedoch spezifisch für Ihre Domain. Der Inhalt des Caches bleibt erhalten, bis Sie ihn löschen.

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

1. Hier fügen wir einen `install`-Ereignislistener zum Service Worker hinzu (daher `self`), und verketten dann eine [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode auf das Ereignis — dies stellt sicher, dass der Service Worker nicht installiert wird, bis der Code innerhalb von `waitUntil()` erfolgreich ausgeführt wurde.
2. Innerhalb von `addResourcesToCache()` verwenden wir die Methode [`caches.open()`](/de/docs/Web/API/CacheStorage/open), um einen neuen Cache namens `v1` zu erstellen, der die Version 1 unseres Ressourcen-Caches der Site darstellt. Dann rufen wir eine Funktion `addAll()` für den erstellten Cache auf, die als Parameter ein Array von URLs zu allen Ressourcen nimmt, die Sie zwischenspeichern möchten. Die URLs sind relativ zur {{domxref("WorkerGlobalScope.location", "Location", "", 1)}} des Workers.
3. Wenn das Promise abgelehnt wird, schlägt die Installation fehl, und der Worker wird nichts tun. Das ist in Ordnung, da Sie Ihren Code reparieren und dann beim nächsten Mal die Registrierung erneut versuchen können.
4. Nach einer erfolgreichen Installation wird der Service Worker aktiviert. Dies hat nicht viel von einem bestimmten Nutzen beim ersten Mal, wenn Ihr Service Worker installiert/aktiviert wird, aber es gewinnt an Bedeutung, wenn der Service Worker aktualisiert wird (siehe den Abschnitt [Aktualisierung Ihres Service Workers](#aktualisieren_ihres_service_workers) weiter unten).

> **Hinweis:** [Die Web Storage API (`localStorage`)](/de/docs/Web/API/Web_Storage_API) funktioniert auf ähnliche Weise wie der Service Worker-Cache, ist jedoch synchron und daher in Service Workern nicht erlaubt.

> **Hinweis:** [IndexedDB](/de/docs/Web/API/IndexedDB_API) kann innerhalb eines Service Workers zur Datenspeicherung verwendet werden, wenn Sie es benötigen.

### Benutzerdefinierte Antworten auf Anfragen

Jetzt haben Sie Ihre Site-Assets zwischengespeichert, Sie müssen den Service Workern sagen, etwas mit den zwischengespeicherten Inhalten zu tun. Dies geschieht mit dem `fetch`-Ereignis.

1. Ein `fetch`-Ereignis wird jedes Mal ausgelöst, wenn eine Ressource, die von einem Service Worker gesteuert wird, abgerufen wird, was die innerhalb des angegebenen Bereichs spezifizierten Dokumente einschließt, und alle in diesen Dokumenten referenzierten Ressourcen (zum Beispiel, wenn `index.html` eine Anfrage stellt, um ein Bild einzubetten, das noch aus einem anderen Ursprung stammt, wird es trotzdem durch seinen Service Worker geleitet.)

2. Sie können einen `fetch`-Ereignislistener an den Service Worker anhängen und dann die Methode `respondWith()` auf dem Ereignis aufrufen, um unsere HTTP-Antworten zu kapern und sie mit eigenen Inhalten zu aktualisieren.

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(/* custom content goes here */);
   });
   ```

3. Wir können damit beginnen, mit der Ressource zu antworten, deren URL mit der der Netzwerk-Anfrage übereinstimmt, in jedem Fall:

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(caches.match(event.request));
   });
   ```

   `caches.match(event.request)` ermöglicht es uns, jede vom Netzwerk angeforderte Ressource mit der entsprechenden im Cache verfügbaren Ressource abzugleichen, wenn eine übereinstimmende verfügbar ist. Der Abgleich erfolgt über URL und verschiedene Header, genau wie bei normalen HTTP-Anfragen.

![Fetch-Ereignis-Diagramm](sw-fetch.svg)

## Wiederherstellen fehlgeschlagener Anfragen

So `caches.match(event.request)` ist großartig, wenn es eine Übereinstimmung im Service Worker-Cache gibt, aber was ist mit den Fällen, wenn es keine Übereinstimmung gibt? Wenn wir keine Art von Fehlerbehandlung bereitstellen, würde unser Promise mit `undefined` aufgelöst werden und wir würden nichts zurückbekommen.

Nachdem wir die Antwort des Caches getestet haben, können wir auf eine reguläre Netzwerk-Anfrage zurückfallen:

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

Mit einer ausgefeilteren Strategie könnten wir die Ressource nicht nur vom Netzwerk anfordern, sondern sie auch in den Cache speichern, sodass spätere Anfragen für diese Ressource ebenfalls offline abgerufen werden können. Dies würde bedeuten, dass, wenn zusätzliche Bilder zur Star Wars-Galerie hinzugefügt würden, unsere App diese automatisch abrufen und zwischenspeichern könnte. Der folgende Codeausschnitt implementiert eine solche Strategie:

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

Wenn die Anfrage-URL nicht im Cache verfügbar ist, fordern wir die Ressource mit `await fetch(request)` vom Netzwerk an. Danach fügen wir einen Klon der Antwort in den Cache ein. Die Funktion `putInCache()` verwendet `caches.open('v1')` und `cache.put()`, um die Ressource dem Cache hinzuzufügen. Die ursprüngliche Antwort wird an den Browser zurückgegeben, um sie an die Seite zu geben, die sie aufgerufen hat.

Das Klonen der Antwort ist notwendig, da Anfrage- und Antwortströme nur einmal gelesen werden können. Um die Antwort an den Browser zurückzugeben und sie in den Cache zu setzen, müssen wir sie klonen. So wird das Original an den Browser zurückgegeben und der Klon wird an den Cache gesendet. Sie werden jeweils einmal gelesen.

Was ein bisschen seltsam erscheinen mag, ist, dass das Promise, das von `putInCache()` zurückgegeben wird, nicht erwartet wird. Aber der Grund ist, dass wir nicht warten wollen, bis der Antwortklon zum Cache hinzugefügt wurde, bevor wir eine Antwort zurückgeben.

Das einzige Problem, das wir jetzt haben, ist, dass wenn die Anfrage nichts im Cache findet und das Netzwerk nicht verfügbar ist, unsere Anfrage weiterhin fehlschlagen wird. Lassen Sie uns für einen Standard-Fallback sorgen, sodass der Benutzer in jedem Fall zumindest etwas bekommt:

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

Wir haben uns für dieses Fallback-Bild entschieden, weil die einzigen Updates, die wahrscheinlich fehlschlagen, neue Bilder sind, da alles andere für die Installation im `install`-Ereignislistener, den wir zuvor gesehen haben, benötigt wird.

## Vorabladen von Service Worker-Navigationen

Wenn aktiviert, startet das [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager)-Feature das Herunterladen von Ressourcen, sobald die Fetch-Anfrage gestellt wird, und parallel zur Aktivierung des Service Workers. Dies stellt sicher, dass das Herunterladen sofort bei der Navigation zu einer Seite beginnt und nicht darauf gewartet werden muss, bis der Service Worker aktiviert wird. Diese Verzögerung tritt relativ selten auf, ist jedoch unvermeidbar, wenn sie auftritt, und kann erheblich sein.

Zuerst muss das Feature während der Aktivierung des Service Workers aktiviert werden, indem [`registration.navigationPreload.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable) verwendet wird:

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Dann verwenden Sie [`event.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse), um im Fetch-Ereignis-Handler auf das Herunterladen der vorab geladenen Ressource zu warten.

Die Fortsetzung des Beispiels aus den vorherigen Abschnitten, wir fügen den Code ein, um auf die vorab geladene Ressource nach der Cache-Prüfung zu warten, und bevor wir vom Netzwerk fethen, wenn dies nicht erfolgreich ist.

Der neue Prozess ist:

1. Cache überprüfen
2. Auf `event.preloadResponse` warten, das als `preloadResponsePromise` an die `cacheFirst()`-Funktion übergeben wird. Das Ergebnis im Cache speichern, falls es zurückgegeben wird.
3. Wenn keines von beiden definiert ist, gehen wir zum Netzwerk.

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

Beachten Sie, dass wir in diesem Beispiel die gleichen Daten für die Ressource herunterladen und cachen, unabhängig davon, ob sie "normal" heruntergeladen oder vorab geladen wurde. Sie können stattdessen wählen, eine andere Ressource beim Vorladen herunterzuladen und zu cachen. Für weitere Informationen siehe [`NavigationPreloadManager` > Benutzerdefinierte Antworten](/de/docs/Web/API/NavigationPreloadManager#custom_responses).

## Aktualisieren Ihres Service Workers

Wenn Ihr Service Worker zuvor installiert wurde, aber dann eine neue Version des Workers bei einem Refresh oder Lade der Seite verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert. Sie wird erst aktiviert, wenn keine Seiten mehr geladen sind, die noch den alten Service Worker verwenden. Sobald es keine solchen Seiten mehr gibt, die noch geladen sind, aktiviert sich der neue Service Worker.

> [!NOTE]
> Es ist möglich, dies zu umgehen, indem [`Clients.claim()`](/de/docs/Web/API/Clients/claim) verwendet wird.

Sie möchten Ihren `install`-Ereignislistener im neuen Service Worker auf etwas wie dieses aktualisieren (beachten Sie die neue Versionsnummer):

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

Während der Service Worker installiert wird, ist die vorherige Version immer noch für Abrufe verantwortlich. Die neue Version installiert im Hintergrund. Wir nennen den neuen Cache `v2`, damit der vorherige `v1`-Cache nicht gestört wird.

Wenn keine Seiten mehr die vorherige Version verwenden, aktiviert sich der neue Worker und wird für Abrufe verantwortlich.

### Löschen alter Caches

Wie wir im letzten Abschnitt gesehen haben, erstellen Sie, wenn Sie einen Service Worker auf eine neue Version aktualisieren, einen neuen Cache in seinem `install`-Ereignis-Handler. Während es offene Seiten gibt, die von der vorherigen Version des Workers gesteuert werden, müssen Sie beide Caches behalten, da die vorherige Version ihren eigenen Cache benötigt. Sie können das `activate`-Ereignis verwenden, um Daten aus den vorherigen Caches zu entfernen.

Promises, die in `waitUntil()` übergeben werden, blockieren andere Ereignisse, bis sie abgeschlossen sind. Sie können daher sicher sein, dass Ihre Bereinigungsoperation abgeschlossen sein wird, wenn Sie Ihr erstes `fetch`-Ereignis im neuen Service Worker erhalten.

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
  - Die Schaltfläche "Vergessen Sie diese Seite", verfügbar in den [Toolbar-Anpassungsoptionen von Firefox](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars), kann verwendet werden, um Service Worker und deren Caches zu löschen.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/service-workers/)

## Siehe auch

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
