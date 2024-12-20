---
title: Verwendung von Service Workern
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: 3cb8c590ddc700407ac4295ca4d3191ac10ddc8e
---

{{DefaultAPISidebar("Service Workers API")}}

Dieser Artikel bietet Informationen zum Einstieg in Service Worker, einschließlich der grundlegenden Architektur, der Registrierung eines Service Workers, dem Installations- und Aktivierungsprozess für einen neuen Service Worker, der Aktualisierung Ihres Service Workers, der Cache-Steuerung und benutzerdefinierter Antworten, alles im Kontext einer App mit Offline-Funktionalität.

## Das Grundprinzip von Service Workern

Ein übergeordnetes Problem, mit dem Webnutzer seit Jahren zu kämpfen haben, ist der Verlust der Konnektivität. Die beste Web-App der Welt wird eine schreckliche Benutzererfahrung bieten, wenn Sie sie nicht herunterladen können. Es gab verschiedene Versuche, Technologien zu schaffen, um dieses Problem zu lösen, und einige der Probleme wurden gelöst. Aber das übergeordnete Problem war, dass es keinen guten umfassenden Kontrollmechanismus für Asset-Caching und benutzerdefinierte Netzwerk-Anfragen gab.

Service Worker beheben diese Probleme. Mit einem Service Worker können Sie eine App so einrichten, dass zwischengespeicherte Assets zuerst verwendet werden. Dies bietet eine Standarderfahrung, selbst wenn Sie offline sind, bevor mehr Daten aus dem Netzwerk abgerufen werden (allgemein als "offline first" bekannt). Dies ist bereits mit nativen Apps möglich, was einer der Hauptgründe ist, warum native Apps häufig gegenüber Web-Apps bevorzugt werden.

Ein Service Worker funktioniert wie ein Proxy-Server und ermöglicht es Ihnen, Anfragen und Antworten zu ändern, indem sie durch Elemente aus ihrem eigenen Cache ersetzt werden.

## Einrichtung zum Experimentieren mit Service Workern

Service Worker sind standardmäßig in allen modernen Browsern aktiviert. Um Code mit Service Workern auszuführen, müssen Sie Ihren Code über HTTPS bereitstellen – Service Worker sind aus Sicherheitsgründen auf HTTPS beschränkt. Ein Server, der HTTPS unterstützt, ist erforderlich. Um Experimente zu hosten, können Sie Dienste wie GitHub, Netlify, Vercel usw. verwenden. Zur Erleichterung der lokalen Entwicklung wird `localhost` von Browsern ebenfalls als sicherer Ursprung betrachtet.

## Grundlegende Architektur

Mit Service Workern werden in der Regel die folgenden Schritte für die grundlegende Einrichtung befolgt:

1. Der Service Worker-Code wird abgerufen und dann mit [`serviceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Bei Erfolg wird der Service Worker in einem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgeführt; dies ist im Grunde eine spezielle Art von Worker-Kontext, der außerhalb des Hauptskriptausführungs-Threads läuft, ohne Zugriff auf das DOM. Der Service Worker ist nun bereit, Ereignisse zu verarbeiten.
2. Die Installation findet statt. Ein `install`-Ereignis wird immer als erstes an einen Service Worker gesendet (dies kann verwendet werden, um den Prozess der Befüllung einer IndexedDB und des Caches von Website-Assets zu starten). Während dieses Schritts bereitet die Anwendung alles darauf vor, offline verfügbar zu machen.
3. Wenn der `install`-Handler abgeschlossen ist, wird der Service Worker als installiert betrachtet. Zu diesem Zeitpunkt kann eine frühere Version des Service Workers aktiv sein und offene Seiten steuern. Da wir nicht möchten, dass zwei verschiedene Versionen desselben Service Workers gleichzeitig laufen, ist die neue Version noch nicht aktiv.
4. Sobald alle von der alten Version des Service Workers gesteuerten Seiten geschlossen sind, ist es sicher, die alte Version zurückzuziehen, und der neu installierte Service Worker erhält ein `activate`-Ereignis. Der Hauptzweck von `activate` besteht darin, Ressourcen zu bereinigen, die in früheren Versionen des Service Workers verwendet wurden. Der neue Service Worker kann [`skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) aufrufen, um zu fordern, sofort aktiviert zu werden, ohne darauf zu warten, dass offene Seiten geschlossen werden. Der neue Service Worker erhält dann sofort `activate` und übernimmt alle offenen Seiten.
5. Nach der Aktivierung wird der Service Worker nun Seiten steuern, aber nur diese, die nach erfolgreicher `register()`-Anfrage geöffnet wurden. Mit anderen Worten, Dokumente müssen neu geladen werden, um tatsächlich gesteuert zu werden, da ein Dokument sein Leben mit oder ohne Service Worker beginnt und dies für seine Dauer beibehält. Um dieses Standardverhalten zu überschreiben und geöffnete Seiten zu übernehmen, kann ein Service Worker [`clients.claim()`](/de/docs/Web/API/Clients/claim) aufrufen.
6. Jedes Mal, wenn eine neue Version eines Service Workers abgerufen wird, wiederholt sich dieser Zyklus, und die Überreste der vorherigen Version werden während der Aktivierung der neuen Version bereinigt.

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

Um lediglich die Grundlagen der Registrierung und Installation eines Service Workers zu demonstrieren, haben wir eine Demo namens [einfacher Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) erstellt, die eine einfache Star Wars Lego-Bildergalerie ist. Sie verwendet eine versprochene Funktion, um Bilddaten aus einem JSON-Objekt zu lesen und die Bilder mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch) zu laden, bevor die Bilder in einer Reihe auf der Seite angezeigt werden. Wir haben die Dinge vorerst statisch gehalten. Es registriert, installiert und aktiviert auch einen Service Worker.

![Das Wort Star Wars gefolgt von einem Bild einer Lego-Version der Darth-Vader-Figur](demo-screenshot.png)

Sie können den [Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) und den [einfachen Service Worker live im Einsatz](https://bncb2v.csb.app/) sehen.

### Registrierung Ihres Workers

Der erste Codeblock in der JavaScript-Datei unserer App — `app.js` — lautet wie folgt. Dies ist unser Einstiegspunkt in die Verwendung von Service Workern.

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
2. Anschließend verwenden wir die Funktion [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um den Service Worker für diese Website zu registrieren. Der Service Worker-Code befindet sich in einer JavaScript-Datei innerhalb unserer App (beachten Sie, dass dies die URL der Datei relativ zum Ursprung ist, nicht die JS-Datei, die sie referenziert.)
3. Der `scope`-Parameter ist optional und kann verwendet werden, um den Teil Ihres Inhalts festzulegen, den der Service Worker steuern soll. In diesem Fall haben wir `'/'` angegeben, was bedeutet, dass alle Inhalte unter dem Ursprung der App steuern. Wenn Sie ihn weglassen, wird er standardmäßig auf diesen Wert gesetzt, aber wir haben ihn hier zur Illustration angegeben.

Dies registriert einen Service Worker, der in einem Worker-Kontext ausgeführt wird und daher keinen Zugriff auf das DOM hat.

Ein einzelner Service Worker kann viele Seiten steuern. Jedes Mal, wenn eine Seite innerhalb Ihres Bereichs geladen wird, wird der Service Worker gegen diese Seite installiert und arbeitet darauf. Beachten Sie daher, dass Sie bei globalen Variablen im Service Worker-Skript vorsichtig sein müssen: Jede Seite erhält nicht ihren eigenen eindeutigen Worker.

> [!NOTE]
> Ein großer Vorteil von Service Workern ist, dass wenn Sie eine Feature-Erkennung wie oben gezeigt verwenden, Browser, die Service Worker nicht unterstützen, Ihre App einfach wie erwartet online nutzen können.

#### Warum schlägt die Registrierung meines Service Workers fehl?

Die Registrierung eines Service Workers schlägt aus einem der folgenden Gründe fehl:

- Ihre Anwendung läuft nicht in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) (über HTTPS).
- Der Pfad zur Service Worker-Datei ist falsch.
  Der Pfad muss relativ zum Ursprung sein, nicht zum Stammverzeichnis der App.
  In unserem Beispiel befindet sich der Worker unter `https://bncb2v.csb.app/sw.js`, und das Stammverzeichnis der App ist `https://bncb2v.csb.app/`, also muss der Service Worker als `/sw.js` angegeben werden.
- Der Pfad zu Ihrem Service Worker zeigt auf einen Service Worker mit einem anderen Ursprung als Ihre App.
- Die Registrierung des Service Workers enthält eine `scope`-Option, die breiter ist als vom Worker-Pfad erlaubt.
  Der Standardbereich für einen Service Worker ist das Verzeichnis, in dem sich der Worker befindet.
  Mit anderen Worten, wenn das Skript `sw.js` sich in `/js/sw.js` befindet, kann es standardmäßig nur URLs im (oder innerhalb des) `/js/`-Pfades steuern.
  Der Bereich eines Service Workers kann mit dem {{HTTPHeader("Service-Worker-Allowed")}}-Header verbreitert (oder eingegrenzt) werden.
- Browserspezifische Einstellungen sind aktiviert, wie z. B. das Blockieren aller Cookies, privater Browsing-Modus, automatische Cookie-Löschung beim Schließen usw.
  Siehe [`serviceWorker.register()` Browser-Kompatibilität](/de/docs/Web/API/ServiceWorkerContainer/register#browser_compatibility) für weitere Informationen.

### Installieren und Aktivieren: Ihren Cache füllen

Nachdem Ihr Service Worker registriert ist, versucht der Browser, den Service Worker für Ihre Seite/Ihr Site zu installieren und dann zu aktivieren.

Das `install`-Ereignis ist das erste Ereignis, das bei der Installation oder Aktualisierung des Service Workers ausgelöst wird.
Es wird nur einmal ausgesendet, unmittelbar nach erfolgreichem Abschluss der Registrierung, und wird im Allgemeinen verwendet, um die Offline-Caching-Fähigkeiten Ihres Browsers mit den Assets zu füllen, die Sie benötigen, um Ihre App offline auszuführen. Dazu verwenden wir die Speicher-API der Service Worker — [`cache`](/de/docs/Web/API/Cache) — ein globales Objekt im Service Worker, das es uns ermöglicht, durch Antworten gelieferte Assets zu speichern, und zwar anhand ihrer Anfragen. Diese API funktioniert auf ähnliche Weise wie der Standard-Cache des Browsers, ist jedoch spezifisch für Ihre Domain. Die Inhalte des Caches werden aufbewahrt, bis Sie sie löschen.

Hier ist, wie unser Service Worker das `install`-Ereignis verarbeitet:

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

1. Hier fügen wir dem Service Worker (daher `self`) einen `install`-Ereignislistener hinzu und hängen dann eine [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode an das Ereignis an — dies stellt sicher, dass der Service Worker nicht installiert wird, bis der Code innerhalb von `waitUntil()` erfolgreich abgeschlossen wurde.
2. Innerhalb von `addResourcesToCache()` verwenden wir die Methode [`caches.open()`](/de/docs/Web/API/CacheStorage/open), um einen neuen Cache namens `v1` zu erstellen, der die Version 1 unseres Site-Ressourcen-Caches sein wird. Dann rufen wir die Funktion `addAll()` auf dem erstellten Cache auf, die ein Array von URLs aller Ressourcen, die Sie zwischenspeichern möchten, als Parameter annimmt. Die URLs sind relativ zum Standort des Workers [location](/de/docs/Web/API/WorkerGlobalScope/location).
3. Wenn das Versprechen abgelehnt wird, schlägt die Installation fehl, und der Worker wird nicht funktionieren. Das ist in Ordnung, da Sie Ihren Code korrigieren können und dann das nächste Mal versuchen, wenn die Registrierung erfolgt.
4. Nach einer erfolgreichen Installation wird der Service Worker aktiviert. Dies hat nicht viel Zweck beim ersten Mal, wenn Ihr Service Worker installiert/aktiviert wird, aber es bedeutet mehr, wenn der Service Worker aktualisiert wird (siehe den Abschnitt [Aktualisieren Ihres Service Workers](#aktualisieren_ihres_service_workers) später).

> **Hinweis:** [Die Web Storage API (`localStorage`)](/de/docs/Web/API/Web_Storage_API) funktioniert ähnlich wie der Service Worker-Cache, ist jedoch synchron und daher in Service Workern nicht erlaubt.

> **Hinweis:** [IndexedDB](/de/docs/Web/API/IndexedDB_API) kann innerhalb eines Service Workers zur Datenspeicherung verwendet werden, wenn Sie es benötigen.

### Benutzerdefinierte Antworten auf Anfragen

Jetzt, da Sie Ihre Website-Assets zwischengespeichert haben, müssen Sie Service Workern mitteilen, dass sie etwas mit den zwischengespeicherten Inhalten tun sollen. Dies geschieht mit dem `fetch`-Ereignis.

1. Ein `fetch`-Ereignis wird jedes Mal ausgelöst, wenn eine Ressource, die von einem Service Worker gesteuert wird, abgerufen wird, was die Dokumente innerhalb des angegebenen Bereichs und alle in diesen Dokumenten referenzierten Ressourcen umfasst (beispielsweise wenn `index.html` eine Cross-Origin-Anfrage macht, um ein Bild einzubetten, geht das trotzdem über seinen Service Worker).

2. Sie können einen `fetch`-Ereignislistener an den Service Worker anhängen und dann die Methode `respondWith()` auf dem Ereignis aufrufen, um unsere HTTP-Antworten zu kapern und sie mit Ihrem eigenen Inhalt zu aktualisieren.

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(/* custom content goes here */);
   });
   ```

3. Wir könnten damit beginnen, mit der Ressource zu antworten, deren URL mit der des Netzwerkrequests übereinstimmt, in jedem Fall:

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(caches.match(event.request));
   });
   ```

   `caches.match(event.request)` ermöglicht es uns, jede aus dem Netzwerk angeforderte Ressource mit der entsprechenden Ressource im Cache abzugleichen, wenn eine übereinstimmende vorhanden ist. Das Matching erfolgt über URL und verschiedene Header, genau wie bei normalen HTTP-Anfragen.

![Fetch-Ereignis-Diagramm](sw-fetch.svg)

## Wiederherstellung fehlgeschlagener Anfragen

Also `caches.match(event.request)` ist großartig, wenn es im Service Worker-Cache ein Übereinstimmung gibt, aber was ist mit Fällen, wenn es keine Übereinstimmung gibt? Wenn wir keine Art von Fehlerbehandlung anbieten würden, würde unser Versprechen mit `undefined` aufgelöst werden, und wir würden nichts zurückbekommen.

Nach dem Testen der Antwort aus dem Cache, können wir uns auf eine reguläre Netzwerk-Anfrage zurückfallen lassen:

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

Wenn die Ressourcen nicht im Cache sind, werden sie vom Netzwerk angefragt.

Mit einer ausgeklügelteren Strategie könnten wir nicht nur die Ressource vom Netzwerk anfordern, sondern sie auch in den Cache speichern, sodass spätere Anfragen für diese Ressource ebenfalls offline abgerufen werden könnten. Dies würde bedeuten, dass wenn zusätzliche Bilder zur Star Wars-Galerie hinzugefügt werden, unsere App diese automatisch greifen und zwischenspeichern könnte. Der folgende Schnipsel implementiert eine solche Strategie:

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

Wenn die Anfrage-URL im Cache nicht verfügbar ist, fordern wir die Ressource bei einer Netzwerk-Request mit `await fetch(request)` an. Danach legen wir eine Kopie der Antwort in den Cache. Die Funktion `putInCache()` verwendet `caches.open('v1')` und `cache.put()`, um die Ressource in den Cache zu legen. Die ursprüngliche Antwort wird an den Browser zurückgegeben, um an die Seite geliefert zu werden, die sie aufgerufen hat.

Das Klonen der Antwort ist erforderlich, weil das Leseverfahren von Anfragen und Antworten nur einmal möglich ist. Um die Antwort an den Browser zurückzugeben und sie in den Cache zu legen, müssen wir sie klonen. So wird das Original an den Browser zurückgegeben und die Kopie wird in den Cache gesendet. Sie werden jeweils einmal gelesen.

Was etwas seltsam aussehen könnte, ist, dass das Promise, das von `putInCache()` zurückgegeben wird, nicht erwartet wird. Der Grund dafür ist jedoch, dass wir nicht warten möchten, bis die Antwortkopie in den Cache gelegt wurde, bevor wir eine Antwort zurückgeben.

Das einzige Problem, das wir jetzt haben, ist, dass wenn die Anfrage mit nichts im Cache übereinstimmt und das Netzwerk nicht verfügbar ist, unsere Anfrage trotzdem fehlschlägt. Lassen Sie uns einen Standard-Fallback bereitstellen, damit der Benutzer zumindest etwas bekommt, egal was passiert:

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

Wir haben uns für dieses Fallback-Bild entschieden, da die einzigen Updates, die wahrscheinlich scheitern würden, neue Bilder sind, da alles andere für die Installation im `install`-Ereignislistener bereitgestellt wird, den wir zuvor gesehen haben.

## Service Worker Navigation Preload

Wenn aktiviert, beginnt das Feature [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager), Ressourcen herunterzuladen, sobald die Fetch-Anfrage gestellt wird, und parallel zur Aktivierung des Service Workers. Dies stellt sicher, dass der Download sofort bei der Navigation zu einer Seite beginnt, anstatt warten zu müssen, bis der Service Worker aktiviert wird. Diese Verzögerung tritt relativ selten auf, ist jedoch unvermeidlich, wenn sie auftritt, und kann erheblich sein.

Zuerst muss das Feature während der Aktivierung des Service Workers mit [`registration.navigationPreload.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable) aktiviert werden:

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Verwenden Sie dann [`event.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse), um im `fetch`-Ereignishandler auf das Herunterladen der vorgeladenen Ressource zu warten.

Fortsetzend dem Beispiel aus den vorherigen Abschnitten fügen wir den Code ein, um auf die vorgeladene Ressource nach der Cache-Prüfung zu warten, und bevor diese bei Misserfolg vom Netzwerk abgerufen wird.

Der neue Prozess ist:

1. Cache überprüfen
2. Auf `event.preloadResponse` warten, das als `preloadResponsePromise` an die `cacheFirst()`-Funktion übergeben wird. Ergebnis zwischenspeichern, falls es zurückgegeben wird.
3. Wenn keine dieser definiert sind, gehen wir zum Netzwerk.

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

Beachten Sie, dass wir in diesem Beispiel dieselben Daten für die Ressource herunterladen und zwischenspeichern, unabhängig davon, ob sie "normal" heruntergeladen oder vorgeladen wird. Sie können stattdessen wählen, eine andere Ressource beim Vorladen herunterzuladen und zu zwischenspeichern. Weitere Informationen finden Sie unter [`NavigationPreloadManager` > Benutzerdefinierte Antworten](/de/docs/Web/API/NavigationPreloadManager#custom_responses).

## Aktualisieren Ihres Service Workers

Wenn Ihr Service Worker zuvor installiert war, aber dann eine neue Version des Workers bei einer Aktualisierung oder Seitenladung verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert. Sie wird nur aktiviert, wenn keine Seiten mehr geladen sind, die weiterhin den alten Service Worker verwenden. Sobald es keine solchen geladenen Seiten mehr gibt, wird der neue Service Worker aktiviert.

> [!NOTE]
> Es ist möglich, dies zu umgehen, indem Sie [`Clients.claim()`](/de/docs/Web/API/Clients/claim) verwenden.

Sie möchten Ihren `install`-Ereignislistener im neuen Service Worker wie folgt aktualisieren (beachten Sie die neue Versionsnummer):

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

Während der Service Worker installiert wird, ist die vorherige Version weiterhin für Fetches verantwortlich. Die neue Version wird im Hintergrund installiert. Wir benennen den neuen Cache `v2`, sodass der vorherige `v1`-Cache nicht gestört wird.

Wenn keine Seiten mehr die vorherige Version verwenden, aktiviert sich der neue Worker und übernimmt die Verantwortung für Fetches.

### Alte Caches löschen

Wie wir im letzten Abschnitt gesehen haben, erstellen Sie bei der Aktualisierung eines Service Workers auf eine neue Version einen neuen Cache in seinem `install`-Ereignis-Handler. Während es offene Seiten gibt, die von der vorherigen Version des Workers gesteuert werden, müssen Sie beide Caches behalten, da die vorherige Version ihren Cache braucht. Sie können das `activate`-Ereignis verwenden, um Daten aus den vorherigen Caches zu entfernen.

Promisen, die in `waitUntil()` übergeben werden, blockieren andere Ereignisse bis zur Fertigstellung, sodass Sie sicher sein können, dass Ihre Bereinigung abgeschlossen ist, bevor Sie Ihr erstes `fetch`-Ereignis beim neuen Service Worker erhalten.

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
  - Die Schaltfläche "Dieses Website vergessen", verfügbar in [FireFox's Symbolleisten-Anpassungsoptionen](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars), kann genutzt werden, um Service Worker und ihre Caches zu löschen.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/service-workers/)

## Siehe auch

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP-Header
