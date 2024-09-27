---
title: Verwendung von Service Workern
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Service Workers API")}}

Dieser Artikel bietet Informationen zum Einstieg in die Verwendung von Service Workern, einschließlich der grundlegenden Architektur, der Registrierung eines Service Workers, dem Installations- und Aktivierungsprozess für einen neuen Service Worker, der Aktualisierung Ihres Service Workers, der Cache-Steuerung und benutzerdefinierten Antworten - alles im Kontext einer einfachen App mit Offline-Funktionalität.

## Das Konzept von Service Workern

Ein übergeordnetes Problem, mit dem Webnutzer seit Jahren zu kämpfen haben, ist der Verlust der Konnektivität. Die beste Web-App der Welt bietet eine miserable Benutzererfahrung, wenn Sie sie nicht herunterladen können. Es gab verschiedene Versuche, Technologien zu entwickeln, um dieses Problem zu lösen, und einige der Probleme wurden behoben. Aber das übergeordnete Problem war, dass es keinen guten allgemeinen Kontrollmechanismus für das Caching von Ressourcen und benutzerdefinierte Netzwerk-Anfragen gab.

Service Worker beheben diese Probleme. Mit einem Service Worker können Sie eine App so einrichten, dass sie zwischengespeicherte Ressourcen zuerst verwendet, wodurch eine Standarderfahrung auch im Offline-Modus bereitgestellt wird, bevor dann weitere Daten aus dem Netzwerk abgerufen werden (häufig als "offline first" bezeichnet). Dies ist bereits mit nativen Apps möglich, was einer der Hauptgründe ist, warum native Apps oft Web-Apps vorgezogen werden.

Ein Service Worker fungiert wie ein Proxy-Server und ermöglicht es Ihnen, Anfragen und Antworten zu modifizieren und sie durch Elemente aus seinem eigenen Cache zu ersetzen.

## Einrichten zum Experimentieren mit Service Workern

Service Worker sind standardmäßig in allen modernen Browsern aktiviert. Um Code zu verwenden, der Service Worker nutzt, müssen Sie Ihren Code über HTTPS bereitstellen — Service Worker sind aus Sicherheitsgründen auf die Ausführung über HTTPS beschränkt. Ein Server, der HTTPS unterstützt, ist erforderlich. Um Experimente zu hosten, können Sie Dienste wie GitHub, Netlify, Vercel usw. verwenden. Um die lokale Entwicklung zu erleichtern, wird `localhost` von Browsern ebenfalls als sichere Herkunft betrachtet.

## Grundlegende Architektur

Mit Service Workern werden im Allgemeinen die folgenden Schritte für die grundlegende Einrichtung beachtet:

1. Der Service Worker-Code wird abgerufen und dann mit [`serviceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Wenn dies gelingt, wird der Service Worker in einem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgeführt; dies ist im Wesentlichen eine spezielle Art von Worker-Kontext, der außerhalb des Hauptskript-Ausführungsthreads läuft, ohne DOM-Zugriff. Der Service Worker ist nun bereit, Ereignisse zu verarbeiten.
2. Die Installation findet statt. Ein `install`-Ereignis ist immer das erste, das an einen Service Worker gesendet wird (dies kann verwendet werden, um den Prozess des Befüllens einer IndexedDB und des Cachens von Site-Ressourcen zu starten). In diesem Schritt bereitet sich die Anwendung darauf vor, alles für die Offline-Nutzung bereitzustellen.
3. Wenn der `install`-Handler abgeschlossen ist, gilt der Service Worker als installiert. Zu diesem Zeitpunkt könnte eine vorherige Version des Service Workers aktiv sein und offene Seiten steuern. Da wir nicht möchten, dass zwei verschiedene Versionen desselben Service Workers gleichzeitig laufen, ist die neue Version noch nicht aktiv.
4. Sobald alle Seiten, die von der alten Version des Service Workers kontrolliert werden, geschlossen sind, ist es sicher, die alte Version zurückzuziehen, und der neu installierte Service Worker erhält ein `activate`-Ereignis. Der Hauptzweck von `activate` ist die Bereinigung von Ressourcen, die in vorherigen Versionen des Service Workers verwendet wurden. Der neue Service Worker kann [`skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) aufrufen, um zu bitten, sofort aktiviert zu werden, ohne auf das Schließen der offenen Seiten zu warten. Der neue Service Worker erhält dann sofort `activate` und übernimmt alle geöffneten Seiten.
5. Nach der Aktivierung wird der Service Worker nun Seiten steuern, aber nur diejenigen, die nach dem erfolgreichen `register()` geöffnet wurden. Mit anderen Worten, Dokumente müssen neu geladen werden, um tatsächlich kontrolliert zu werden, da ein Dokument sein Leben mit oder ohne Service Worker beginnt und dies für seine gesamte Lebensdauer so bleibt. Um dieses Standardverhalten zu überschreiben und offene Seiten zu übernehmen, kann ein Service Worker [`clients.claim()`](/de/docs/Web/API/Clients/claim) aufrufen.
6. Wann immer eine neue Version eines Service Workers abgerufen wird, passiert dieser Zyklus erneut, und die Überreste der vorherigen Version werden während der Aktivierung der neuen Version bereinigt.

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

Um nur die Grundlagen der Registrierung und Installation eines Service Workers zu demonstrieren, haben wir eine Demo namens [einfacher Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) erstellt, die eine einfache Star Wars Lego-Bildgalerie ist. Es verwendet eine Promise-unterstützte Funktion, um Bilddaten aus einem JSON-Objekt zu lesen und die Bilder mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch) zu laden, bevor die Bilder in einer Reihe auf der Seite angezeigt werden. Wir haben die Dinge bis jetzt statisch gehalten. Er registriert, installiert und aktiviert auch einen Service Worker.

![Die Worte Star Wars gefolgt von einem Bild einer Lego-Version der Figur Darth Vader](demo-screenshot.png)

Sie können den [Quellcode auf GitHub sehen](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker), und den [einfachen Service Worker live ansehen](https://bncb2v.csb.app/).

### Ihren Worker registrieren

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

1. Der `if`-Block führt einen Funktionstest durch, um sicherzustellen, dass Service Worker unterstützt werden, bevor versucht wird, einen zu registrieren.
2. Als Nächstes verwenden wir die Funktion [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um den Service Worker für diese Site zu registrieren. Der Service Worker-Code befindet sich in einer JavaScript-Datei innerhalb unserer App (beachten Sie, dass dies die URL der Datei relativ zur Herkunft ist, nicht die JS-Datei, die darauf verweist).
3. Der `scope`-Parameter ist optional und kann verwendet werden, um den Teil Ihrer Inhalte anzugeben, den der Service Worker kontrollieren soll. In diesem Fall haben wir `'/'` angegeben, was bedeutet, dass alle Inhalte unter der Herkunft der App liegen. Wenn Sie ihn weglassen, wird er standardmäßig auf diesen Wert gesetzt, aber wir haben ihn hier zur Verdeutlichung angegeben.

Dies registriert einen Service Worker, der in einem Worker-Kontext läuft und daher keinen DOM-Zugriff hat.

Ein einzelner Service Worker kann viele Seiten kontrollieren. Jedes Mal, wenn eine Seite innerhalb Ihres Bereichs geladen wird, wird der Service Worker gegen diese Seite installiert und darauf angewendet. Beachten Sie daher, dass Sie vorsichtig mit globalen Variablen im Service Worker-Skript sein müssen: Jede Seite erhält nicht ihren eigenen einzigartigen Worker.

> [!NOTE]
> Ein großer Vorteil von Service Workern ist, dass Browser, die keine Service Worker unterstützen, Ihre App einfach online in der normalen erwarteten Weise nutzen können, wenn Sie Feature-Erkennung wie oben gezeigt verwenden.

#### Warum schlägt die Registrierung meines Service Workers fehl?

Dies könnte aus den folgenden Gründen sein:

- Sie führen Ihre Anwendung nicht über HTTPS aus.
- Der Pfad zu Ihrer Service Worker-Datei ist nicht korrekt geschrieben — er muss relativ zur Herkunft und nicht zum Stammverzeichnis Ihrer App geschrieben sein. In unserem Beispiel befindet sich der Worker auf `https://bncb2v.csb.app/sw.js`, und der Stamm der App ist `https://bncb2v.csb.app/`. Der Pfad muss jedoch als `/sw.js` geschrieben werden.
- Es ist auch nicht erlaubt, auf einen Service Worker einer anderen Herkunft als die Ihrer App zu verweisen.
- Der Service Worker fängt nur Anfragen von Clients unter dem Bereich des Service Workers ab.
- Der maximale Bereich für einen Service Worker ist der Ort des Workers (mit anderen Worten, wenn das Skript `sw.js` sich in `/js/sw.js` befindet, kann es standardmäßig nur URLs unter `/js/` kontrollieren). Eine Liste maximaler Bereiche für diesen Worker kann mit dem `Service-Worker-Allowed`-Header angegeben werden.
- In Firefox sind Service Worker APIs ausgeblendet und können nicht verwendet werden, wenn der Benutzer im [Privaten Modus](https://bugzil.la/1320796) ist, die Chronik deaktiviert ist oder wenn Cookies beim Schließen von Firefox gelöscht werden.
- In Chrome schlägt die Registrierung fehl, wenn die Option "Alle Cookies blockieren (nicht empfohlen)" aktiviert ist.

### Installieren und aktivieren: Ihren Cache auffüllen

Nachdem Ihr Service Worker registriert ist, wird der Browser versuchen, ihn zu installieren und dann zu aktivieren.

Das `install`-Ereignis wird ausgelöst, wenn eine Installation erfolgreich abgeschlossen ist. Das `install`-Ereignis wird im Allgemeinen verwendet, um die Offline-Caching-Fähigkeiten Ihres Browsers mit den Ressourcen zu befüllen, die Sie zum Ausführen Ihrer App offline benötigen. Dazu verwenden wir die Storage-API von Service Worker — [`cache`](/de/docs/Web/API/Cache) — ein globales Objekt im Service Worker, das es uns ermöglicht, von Antworten gelieferte Ressourcen zu speichern, und nach ihren Anfragen indiziert. Diese API funktioniert in ähnlicher Weise wie der Standard-Cache des Browsers, ist jedoch spezifisch für Ihre Domain. Die Inhalte des Caches werden so lange aufbewahrt, bis Sie sie löschen.

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

1. Hier fügen wir einen `install`-Ereignislistener zum Service Worker hinzu (daher `self`), und hängen dann eine [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode an das Ereignis an — dies sorgt dafür, dass der Service Worker nicht installiert wird, bis der Code innerhalb von `waitUntil()` erfolgreich erfolgt ist.
2. Innerhalb von `addResourcesToCache()` verwenden wir die Methode [`caches.open()`](/de/docs/Web/API/CacheStorage/open), um einen neuen Cache namens `v1` zu erstellen, der Version 1 unseres Site-Ressourcen-Caches sein wird. Dann rufen wir eine Funktion `addAll()` für den erstellten Cache auf, die als Parameter ein Array von URLs zu allen Ressourcen annimmt, die Sie zwischenspeichern möchten. Die URLs sind relativ zur {{domxref("WorkerGlobalScope.location", "Location", "", 1)}} des Workers.
3. Wenn das Promise zurückgewiesen wird, schlägt die Installation fehl, und der Worker wird nichts tun. Das ist in Ordnung, da Sie Ihren Code beheben und dann beim nächsten Mal erneut versuchen können, wenn die Registrierung erfolgt.
4. Nach einer erfolgreichen Installation aktiviert sich der Service Worker. Dies hat bei der ersten Installation/Aktivierung Ihres Service Workers keine große Bedeutung, aber es bedeutet mehr, wenn der Service Worker aktualisiert wird (siehe den [Abschnitt zur Aktualisierung Ihres Service Workers](#aktualisierung_ihres_service_workers) weiter unten).

> **Hinweis:** [Die Web Storage API (`localStorage`)](/de/docs/Web/API/Web_Storage_API) funktioniert in ähnlicher Weise wie der Service Worker-Cache, ist jedoch synchron, daher in Service Workern nicht erlaubt.

> **Hinweis:** [IndexedDB](/de/docs/Web/API/IndexedDB_API) kann innerhalb eines Service Workers zur Datenspeicherung verwendet werden, wenn Sie dies benötigen.

### Benutzerdefinierte Antworten auf Anfragen

Jetzt, wo Sie Ihre Site-Ressourcen zwischengespeichert haben, müssen Sie Service Worker anweisen, etwas mit dem zwischengespeicherten Inhalt zu tun. Dies geschieht mit dem `fetch`-Ereignis.

1. Ein `fetch`-Ereignis wird jedes Mal ausgelöst, wenn eine Ressource, die von einem Service Worker gesteuert wird, abgerufen wird, was die Dokumente im angegebenen Bereich sowie alle darin referenzierten Ressourcen umfasst (z.B. wenn `index.html` eine Cross-Origin-Anfrage stellt, um ein Bild einzubetten, geht dies dennoch durch seinen Service Worker).

2. Sie können einen `fetch`-Ereignislistener an den Service Worker anhängen, dann die Methode `respondWith()` für das Ereignis aufrufen, um unsere HTTP-Antworten abzufangen und mit Ihrem eigenen Inhalt zu aktualisieren.

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

   `caches.match(event.request)` ermöglicht es uns, jede aus dem Netzwerk angeforderte Ressource mit der entsprechenden im Cache verfügbaren Ressource abzugleichen, wenn eine passende vorhanden ist. Das Matching erfolgt über URL und verschiedene Header, genau wie bei normalen HTTP-Anfragen.

![Fetch-Ereignis-Diagramm](sw-fetch.svg)

## Wiederherstellung fehlgeschlagener Anfragen

`caches.match(event.request)` ist großartig, wenn es eine Übereinstimmung im Service Worker-Cache gibt, aber was ist mit Fällen, in denen keine Übereinstimmung vorliegt? Wenn wir keine Art der Fehlerbehandlung bereitstellen, würde unser Promise mit `undefined` aufgelöst werden und wir würden nichts zurückbekommen.

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

Falls die Ressourcen nicht im Cache sind, werden sie vom Netzwerk angefordert.

Durch eine ausgeklügeltere Strategie könnten wir nicht nur die Ressource vom Netzwerk anfordern, sondern sie auch in den Cache aufnehmen, damit spätere Anfragen nach dieser Ressource auch offline abgerufen werden können. Dies würde bedeuten, dass, wenn zusätzliche Bilder zur Star Wars-Galerie hinzugefügt werden, unsere App sie automatisch abrufen und zwischenspeichern könnte. Der folgende Ausschnitt implementiert eine solche Strategie:

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

Falls die Anforderungs-URL nicht im Cache verfügbar ist, fordern wir die Ressource mit `await fetch(request)` aus der Netzwerk-Anfrage an. Danach legen wir eine Kopie der Antwort in den Cache. Die Funktion `putInCache()` verwendet `caches.open('v1')` und `cache.put()`, um die Ressource zum Cache hinzuzufügen. Die ursprüngliche Antwort wird an den Browser zurückgegeben, um sie der Seite zu übergeben, die sie aufgerufen hat.

Das Klonen der Antwort ist notwendig, da Anfrage- und Antwortströme nur einmal gelesen werden können. Um die Antwort an den Browser zurückzugeben und sie in den Cache zu legen, müssen wir sie klonen. So wird das Original an den Browser zurückgegeben und die Kopie wird an den Cache gesendet. Beide werden einmal gelesen.

Was etwas seltsam aussehen mag, ist, dass das von `putInCache()` zurückgegebene Promise nicht erwartet wird. Der Grund ist, dass wir nicht darauf warten wollen, dass die Kopie der Antwort dem Cache hinzugefügt wurde, bevor eine Antwort zurückgegeben wird.

Das einzige Problem, das wir jetzt haben, ist, dass, wenn die Anfrage nichts im Cache findet und das Netzwerk nicht verfügbar ist, unsere Anfrage dennoch fehlschlägt. Lassen Sie uns eine Standard-Fallback-Lösung bereitstellen, damit der Benutzer zumindest etwas bekommt, egal was passiert:

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

Wir haben uns für dieses Fallback-Bild entschieden, weil die einzigen Updates, bei denen es wahrscheinlich zu einem Fehlschlag kommt, neue Bilder sind, da alles andere benötigt wird, um die Installation im `install`-Ereignis-Listener zu ermöglichen, den wir zuvor gesehen haben.

## Navigation Preload für Service Worker

Wenn aktiviert, startet die Funktion [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager) das Herunterladen von Ressourcen, sobald die Fetch-Anfrage gestellt wird und parallel zur Aktivierung des Service Workers. Dies stellt sicher, dass der Download sofort beim Navigieren zu einer Seite startet, statt erst zu warten, bis der Service Worker aktiviert ist. Diese Verzögerung tritt relativ selten auf, ist jedoch nicht vermeidbar, wenn sie auftritt, und kann signifikant sein.

Zuerst muss die Funktion während der Aktivierung des Service Workers aktiviert werden, indem [`registration.navigationPreload.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable) verwendet wird:

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Verwenden Sie dann [`event.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse), um im `fetch`-Ereignis-Handler auf das Herunterladen der vorbeladenen Ressource zu warten.

Um das Beispiel aus den vorherigen Abschnitten fortzusetzen, fügen wir den Code ein, um nach der Cache-Prüfung und vor dem Abrufen aus dem Netzwerk, falls dies nicht erfolgreich ist, auf die vorbeladene Ressource zu warten.

Der neue Prozess ist:

1. Cache prüfen
2. Warten auf `event.preloadResponse`, das als `preloadResponsePromise` an die Funktion `cacheFirst()` übergeben wird. Cache das Ergebnis, falls es erfolgreich ist.
3. Sollte keiner von beiden definiert sein, gehen wir ins Netzwerk.

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

Beachten Sie, dass wir in diesem Beispiel dasselbe Datenmaterial für die Ressource herunterladen und zwischenspeichern, ob es "normal" oder vorab geladen heruntergeladen wird. Sie können stattdessen entscheiden, eine andere Ressource beim Preload herunterzuladen und zu zwischenspeichern. Für weitere Informationen siehe [`NavigationPreloadManager` > Benutzerdefinierte Antworten](/de/docs/Web/API/NavigationPreloadManager#custom_responses).

## Aktualisierung Ihres Service Workers

Wenn Ihr Service Worker zuvor installiert wurde, aber dann eine neue Version des Workers bei Aktualisierung oder Seitenladevorgang verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert. Sie wird nur aktiviert, wenn es keine Seiten mehr gibt, die noch die alte Version des Service Workers verwenden. Sobald es keine solchen Seiten mehr gibt, wird der neue Service Worker aktiviert.

> [!NOTE]
> Es ist möglich, dies mit [`Clients.claim()`](/de/docs/Web/API/Clients/claim) zu umgehen.

Sie möchten Ihren `install`-Ereignis-Listener im neuen Service Worker auf etwas Ähnliches wie dies aktualisieren (beachten Sie die neue Versionsnummer):

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

Wenn keine Seiten mehr die vorherige Version verwenden, aktiviert der neue Worker und wird für Fetches verantwortlich.

### Löschen alter Caches

Wie wir im letzten Abschnitt gesehen haben, erstellen Sie bei der Aktualisierung eines Service Workers auf eine neue Version einen neuen Cache im `install`-Ereignis-Handler. Während es offene Seiten gibt, die von der vorherigen Version des Workers kontrolliert werden, müssen Sie beide Caches behalten, da die vorherige Version ihre Version des Caches benötigt. Sie können das `activate`-Ereignis nutzen, um Daten aus den vorherigen Caches zu entfernen.

Promises, die in `waitUntil()` weitergegeben werden, blockieren andere Ereignisse bis zur Beendigung, sodass Sie sicher sein können, dass Ihre Bereinigungsoperation abgeschlossen ist, bevor Sie Ihr erstes `fetch`-Ereignis beim neuen Service Worker erhalten.

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
  - Die Schaltfläche "Diese Seite vergessen", verfügbar in den [Toolbar-Anpassungsoptionen von Firefox](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars), kann verwendet werden, um Service Worker und deren Caches zu löschen.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/service-workers/)

## Siehe auch

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
