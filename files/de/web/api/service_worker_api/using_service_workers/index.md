---
title: Verwendung von Service Workers
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{DefaultAPISidebar("Service Workers API")}}

Dieser Artikel bietet Informationen zum Einstieg in die Nutzung von Service Workers, einschließlich der grundlegenden Architektur, der Registrierung eines Service Workers, des Installations- und Aktivierungsprozesses für einen neuen Service Worker, der Aktualisierung Ihres Service Workers, der Cache-Kontrolle und benutzerdefinierter Antworten, alles im Kontext einer App mit Offline-Funktionalität.

## Das Prinzip von Service Workers

Ein übergeordnetes Problem, mit dem Webnutzer seit Jahren konfrontiert sind, ist der Verlust der Konnektivität. Die beste Web-App der Welt bietet eine schreckliche Benutzererfahrung, wenn Sie sie nicht herunterladen können. Es gab verschiedene Versuche, Technologien zu entwickeln, um dieses Problem zu lösen, und einige der Probleme wurden behoben. Aber das übergeordnete Problem war, dass es keinen guten umfassenden Kontrollmechanismus für das Zwischenspeichern von Ressourcen und benutzerdefinierte Netzwerkanforderungen gab.

Service Workers beheben diese Probleme. Mit einem Service Worker können Sie eine App so einrichten, dass zunächst zwischengespeicherte Ressourcen verwendet werden, um so eine Standarderfahrung auch im Offline-Modus zu bieten, bevor dann weitere Daten aus dem Netzwerk abgerufen werden (allgemein bekannt als "Offline zuerst"). Dies ist bereits bei nativen Apps verfügbar, was einer der Hauptgründe ist, warum native Apps oft gegenüber Web-Apps bevorzugt werden.

Ein Service Worker funktioniert wie ein Proxy-Server und ermöglicht es Ihnen, Anforderungen und Antworten zu ändern und sie durch Elemente aus seinem eigenen Cache zu ersetzen.

## Einrichtung zur Nutzung von Service Workers

Service Workers sind in allen modernen Browsern standardmäßig aktiviert. Um Code mit Service Workers auszuführen, müssen Sie Ihren Code über HTTPS bereitstellen - Service Workers dürfen aus Sicherheitsgründen nur über HTTPS ausgeführt werden. Ein Server, der HTTPS unterstützt, ist erforderlich. Für das Hosting von Experimenten können Sie einen Dienst wie GitHub, Netlify, Vercel usw. verwenden. Um die lokale Entwicklung zu erleichtern, wird `localhost` von Browsern ebenfalls als sicherer Ursprung angesehen.

## Grundlegende Architektur

Mit Service Workers werden für die grundlegende Einrichtung im Allgemeinen die folgenden Schritte beobachtet:

1. Der Code des Service Workers wird abgerufen und dann mit [`serviceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Wenn dies erfolgreich ist, wird der Service Worker in einem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgeführt; dies ist im Wesentlichen eine spezielle Art von Worker-Kontext, der außerhalb des Haupt-Thread der Skriptausführung läuft, ohne DOM-Zugriff. Der Service Worker ist jetzt bereit, Ereignisse zu verarbeiten.
2. Die Installation findet statt. Ein `install`-Ereignis ist immer das erste, das an einen Service Worker gesendet wird (dies kann verwendet werden, um den Prozess der Populierung einer IndexedDB zu starten und Webseitenressourcen zwischenspeichern). Während dieses Schritts bereitet die Anwendung alles vor, um offline verfügbar zu sein.
3. Wenn der `install`-Handler abgeschlossen ist, gilt der Service Worker als installiert. Zu diesem Zeitpunkt kann eine vorherige Version des Service Workers aktiv sein und offene Seiten steuern. Da wir nicht möchten, dass zwei verschiedene Versionen desselben Service Workers gleichzeitig ausgeführt werden, ist die neue Version noch nicht aktiv.
4. Sobald alle von der alten Version des Service Workers gesteuerten Seiten geschlossen wurden, kann die alte Version sicher in den Ruhestand versetzt werden, und der neu installierte Service Worker erhält ein `activate`-Ereignis. Der primäre Zweck von `activate` besteht darin, Ressourcen zu bereinigen, die in vorherigen Versionen des Service Workers verwendet wurden. Der neue Service Worker kann [`skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) aufrufen, um zu beantragen, sofort aktiviert zu werden, ohne zu warten, dass offene Seiten geschlossen werden. Der neue Service Worker erhält dann sofort `activate` und übernimmt offene Seiten.
5. Nach der Aktivierung kontrolliert der Service Worker nun Seiten, aber nur diejenigen, die nach dem erfolgreichen `register()` geöffnet wurden. Anders ausgedrückt, Dokumente müssen neu geladen werden, um tatsächlich gesteuert zu werden, da ein Dokument sein Leben mit oder ohne Service Worker beginnt und dies für seine Lebensdauer beibehält. Um dieses Standardverhalten zu überschreiben und offene Seiten zu übernehmen, kann ein Service Worker [`clients.claim()`](/de/docs/Web/API/Clients/claim) aufrufen.
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

Um nur die Grundlagen der Registrierung und Installation eines Service Workers zu demonstrieren, haben wir ein Demo namens [einfacher Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) erstellt, welches eine einfache Star Wars Lego-Bildergalerie ist. Es verwendet eine Promise-gestützte Funktion, um Bilddaten aus einem JSON-Objekt zu lesen und die Bilder mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch) zu laden, bevor die Bilder in einer Zeile auf der Seite angezeigt werden. Wir haben die Dinge statisch gehalten. Es registriert, installiert und aktiviert auch einen Service Worker.

![Die Worte Star Wars gefolgt von einem Bild einer Lego-Version der Darth Vader-Figur](demo-screenshot.png)

Sie können den [Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) sehen und den [einfachen Service Worker live laufen sehen](https://bncb2v.csb.app/).

### Registrierung Ihres Workers

Der erste Codeblock in der JavaScript-Datei unserer App — `app.js` — ist wie folgt. Dies ist unser Einstiegspunkt in die Verwendung von Service Workers.

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

1. Der `if`-Block führt einen Funktionserkennungstest durch, um sicherzustellen, dass Service Workers unterstützt werden, bevor man versucht, einen zu registrieren.
2. Als nächstes verwenden wir die [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register)-Funktion, um den Service Worker für diese Seite zu registrieren. Der Service Worker-Code befindet sich in einer JavaScript-Datei innerhalb unserer App (beachten Sie, dass dies die URL der Datei relativ zum Ursprung ist, nicht die JS-Datei, die darauf verweist).
3. Der `scope`-Parameter ist optional und kann verwendet werden, um den Teil Ihres Inhalts anzugeben, den der Service Worker kontrollieren soll. In diesem Fall haben wir `'/'` angegeben, was bedeutet, dass alle Inhalte unter dem Ursprung der App abgedeckt sind. Wenn Sie es weglassen, wird es trotzdem auf diesen Wert voreingestellt, aber wir haben es hier zur Veranschaulichung angegeben.

Dies registriert einen Service Worker, der in einem Worker-Kontext läuft und daher keinen DOM-Zugriff hat.

Ein einzelner Service Worker kann viele Seiten kontrollieren. Jedes Mal, wenn eine Seite innerhalb Ihres Scopes geladen wird, wird der Service Worker auf diese Seite angewendet und arbeitet darauf. Beachten Sie daher, dass Sie vorsichtig mit globalen Variablen im Service Worker-Skript umgehen müssen: Jede Seite erhält keinen eigenen einzigartigen Worker.

> [!NOTE]
> Eine großartige Sache bei Service Workers ist, dass, wenn Sie Funktionserkennung verwenden, wie wir oben gezeigt haben, Browser, die Service Workers nicht unterstützen, Ihre App einfach weiterhin online auf die normale erwartete Weise nutzen können.

#### Warum schlägt die Registrierung meines Service Workers fehl?

Dies könnte aus folgenden Gründen geschehen:

- Sie führen Ihre Anwendung nicht über HTTPS aus.
- Der Pfad zu Ihrer Service Worker-Datei ist nicht korrekt geschrieben - er muss relativ zum Ursprung und nicht zum Stammverzeichnis Ihrer App geschrieben werden. In unserem Beispiel befindet sich der Worker unter `https://bncb2v.csb.app/sw.js`, und das Stammverzeichnis der App ist `https://bncb2v.csb.app/`. Aber der Pfad muss als `/sw.js` geschrieben werden.
- Es ist auch nicht erlaubt, auf einen Service Worker eines anderen Ursprungs als Ihren App-Ursprung zu verweisen.
- Der Service Worker wird nur Anfragen von Clients innerhalb des Scopes des Service Workers abfangen.
- Das maximale Scope für einen Service Worker ist der Standort des Workers (anders gesagt, wenn das Skript `sw.js` sich im Verzeichnis `/js/sw.js` befindet, kann es standardmäßig nur URLs unter `/js/` kontrollieren). Eine Liste maximaler Scopes für diesen Worker kann mit dem Header `Service-Worker-Allowed` angegeben werden.
- In Firefox sind Service Worker APIs verborgen und können nicht verwendet werden, wenn sich der Benutzer im [privaten Browsing-Modus](https://bugzil.la/1320796) befindet oder wenn der Verlauf deaktiviert ist oder wenn Cookies gelöscht werden, wenn Firefox geschlossen wird.
- In Chrome schlägt die Registrierung fehl, wenn die Option "Alle Cookies blockieren (nicht empfohlen)" aktiviert ist.

### Installieren und Aktivieren: Ihren Cache füllen

Nachdem Ihr Service Worker registriert ist, wird der Browser versuchen, den Service Worker für Ihre Seite/Website zu installieren und dann zu aktivieren.

Das `install`-Ereignis wird ausgelöst, wenn eine Installation erfolgreich abgeschlossen wurde. Das `install`-Ereignis wird im Allgemeinen verwendet, um die Offline-Speicherfähigkeiten Ihres Browsers mit den Ressourcen zu füllen, die Sie benötigen, um Ihre App offline auszuführen. Um dies zu tun, verwenden wir die Speicher-API des Service Workers — [`cache`](/de/docs/Web/API/Cache) — ein globales Objekt im Service Worker, das es uns ermöglicht, von Antworten bereitgestellte Ressourcen zu speichern, und nach ihren Anforderungen indiziert. Diese API funktioniert ähnlich wie der Standard-Cache des Browsers, ist jedoch spezifisch für Ihre Domain. Der Cache-Inhalt wird solange aufbewahrt, bis Sie ihn löschen.

So handhabt unser Service Worker das `install`-Ereignis:

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

1. Hier fügen wir dem Service Worker (daher `self`) einen `install`-Ereignis-Listener hinzu und hängen dann eine [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode an das Ereignis an – dies stellt sicher, dass der Service Worker nicht installiert wird, bis der Code innerhalb von `waitUntil()` erfolgreich ausgeführt wurde.
2. Innerhalb von `addResourcesToCache()` verwenden wir die Methode [`caches.open()`](/de/docs/Web/API/CacheStorage/open), um einen neuen Cache namens `v1` zu erstellen, der Version 1 unseres Webseiten-Ressourcen-Caches darstellen wird. Dann rufen wir auf dem erstellten Cache die Funktion `addAll()` auf, die als Parameter ein Array von URLs zu allen Ressourcen nimmt, die Sie zwischenspeichern möchten. Die URLs sind relativ zur {{domxref("WorkerGlobalScope.location", "Arbeitsumgebung", "", 1)}}.
3. Wenn das Versprechen abgelehnt wird, schlägt die Installation fehl und der Worker wird nichts tun. Das ist in Ordnung, da Sie Ihren Code korrigieren und es dann beim nächsten Registrierungsvorgang erneut versuchen können.
4. Nach einer erfolgreichen Installation wird der Service Worker aktiviert. Dies hat bei der ersten Installation/Aktivierung Ihres Service Workers keinen großen Unterschied, bedeutet jedoch mehr, wenn der Service Worker aktualisiert wird (siehe Abschnitt [Aktualisierung Ihres Service Workers](#aktualisierung_ihres_service_workers) weiter unten).

> **Hinweis:** [Die Web Storage API (`localStorage`)](/de/docs/Web/API/Web_Storage_API) funktioniert in ähnlicher Weise wie der Service Worker-Cache, ist jedoch synchron, daher in Service Workers nicht erlaubt.

> **Hinweis:** [IndexedDB](/de/docs/Web/API/IndexedDB_API) kann innerhalb eines Service Workers für die Datenspeicherung verwendet werden, wenn Sie es benötigen.

### Benutzerdefinierte Antworten auf Anfragen

Jetzt, da Sie Ihre Webseitenressourcen zwischengespeichert haben, müssen Sie den Service Workers mitteilen, etwas mit dem zwischengespeicherten Inhalt zu tun. Dies geschieht mit dem `fetch`-Ereignis.

1. Ein `fetch`-Ereignis wird jedes Mal ausgelöst, wenn eine Ressource, die von einem Service Worker kontrolliert wird, abgerufen wird, was die Dokumente innerhalb des angegebenen Scopes sowie alle in diesen Dokumenten referenzierten Ressourcen umfasst (zum Beispiel, wenn `index.html` eine Cross-Origin-Anfrage stellt, um ein Bild einzubetten, geht das trotzdem durch seinen Service Worker).

2. Sie können einen `fetch`-Ereignis-Listener an den Service Worker anhängen und dann die Methode `respondWith()` auf dem Ereignis aufrufen, um unsere HTTP-Antworten zu kapern und sie mit Ihrem eigenen Inhalt zu aktualisieren.

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

   `caches.match(event.request)` ermöglicht es uns, jede vom Netzwerk angeforderte Ressource mit der entsprechenden im Cache verfügbaren Ressource abzugleichen, wenn eine passende verfügbar ist. Das Matching erfolgt über URL und verschiedene Header, genau wie bei normalen HTTP-Anfragen.

![Fetch Event Diagramm](sw-fetch.svg)

## Wiederherstellen fehlgeschlagener Anfragen

Also, `caches.match(event.request)` ist großartig, wenn es eine Übereinstimmung im Service Worker Cache gibt, aber was ist mit Fällen, in denen es keine Übereinstimmung gibt? Wenn wir keine Art von Fehlerbehandlung bieten, wird unser Promise mit `undefined` aufgelöst und wir würden nichts zurückbekommen.

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

Mit einer etwas aufwendigeren Strategie könnten wir die Ressource nicht nur vom Netzwerk anfordern, sondern auch in den Cache speichern, so dass spätere Anfragen nach dieser Ressource auch offline abgerufen werden könnten. Dies würde bedeuten, dass wenn zusätzliche Bilder zur Star Wars-Galerie hinzugefügt würden, unsere App diese automatisch erfassen und zwischenspeichern könnte. Der folgende Codeausschnitt implementiert eine solche Strategie:

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

Wenn die Anforderungs-URL nicht im Cache verfügbar ist, fordern wir die Ressource mit `await fetch(request)` beim Netzwerk an. Danach legen wir ein Duplikat der Antwort im Cache ab. Die `putInCache()`-Funktion verwendet `caches.open('v1')` und `cache.put()`, um die Ressource dem Cache hinzuzufügen. Die ursprüngliche Antwort wird dem Browser zur Verfügung gestellt, um sie an die Seite weiterzugeben, die sie angefordert hat.

Das Klonen der Antwort ist notwendig, weil Anforderung und Antwortdatenströme nur einmal gelesen werden können. Um die Antwort an den Browser zurückzugeben und sie in den Cache zu legen, müssen wir sie klonen. Die ursprüngliche wird an den Browser zurückgegeben und das Duplikat wird in den Cache gesendet. Beide werden jeweils einmal gelesen.

Was ein bisschen seltsam aussehen mag, ist, dass das von `putInCache()` zurückgegebene Versprechen nicht erwartet wird. Aber der Grund ist, dass wir nicht warten wollen, bis das Antwort-Duplikat dem Cache hinzugefügt wurde, bevor wir eine Antwort zurückgeben.

Das einzige Problem, das wir jetzt noch haben, ist, dass wenn die Anforderung nichts im Cache findet und das Netzwerk nicht verfügbar ist, unsere Anforderung trotzdem fehlschlagen wird. Lassen Sie uns einen Standard-Fallback zur Verfügung stellen, so dass der Benutzer zumindest etwas bekommt, egal was passiert:

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

Wir haben uns für dieses Fallback-Bild entschieden, weil die einzigen Updates, die wahrscheinlich fehlschlagen, neue Bilder sind, da alles andere während der Installation im `install`-Ereignis-Listener benötigt wird, den wir früher gesehen haben.

## Service Worker Navigation Preload

Wenn es aktiviert ist, beginnt die [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager)-Funktion mit dem Herunterladen von Ressourcen, sobald die Fetch-Anforderung gestellt wird, und parallel zur Aktivierung des Service Workers. Dies stellt sicher, dass der Download sofort nach der Navigation zu einer Seite beginnt, anstatt erst warten zu müssen, bis der Service Worker aktiviert ist. Diese Verzögerung tritt relativ selten auf, ist jedoch unvermeidbar, wenn sie auftritt, und kann signifikant sein.

Zuerst muss die Funktion während der Aktivierung des Service Workers aktiviert werden, mittels [`registration.navigationPreload.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable):

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Dann verwenden Sie [`event.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse), um im `fetch`-Ereignis-Handler auf die Fertigstellung des vorab geladenen Ressourcen-Downloads zu warten.

In Fortsetzung des Beispiels aus den vorherigen Abschnitten fügen wir den Code ein, um auf die vorab geladene Ressource nach dem Cache-Check zu warten, und bevor vom Netzwerk geholt wird, falls dies nicht erfolgreich ist.

Der neue Prozess lautet:

1. Cache überprüfen
2. Warten auf `event.preloadResponse`, welches als `preloadResponsePromise` an die Funktion `cacheFirst()` übergeben wird. Das Ergebnis wird im Cache gespeichert, wenn es zurückgegeben wird.
3. Wenn keines davon definiert ist, gehen wir zum Netzwerk.

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

Beachten Sie, dass wir in diesem Beispiel die gleichen Daten für die Ressource herunterladen und zwischenspeichern, unabhängig davon, ob sie "normal" oder vorab geladen heruntergeladen wird. Sie können stattdessen wählen, eine andere Ressource beim Vorabladen herunterzuladen und zu zwischenspeichern. Weitere Informationen finden Sie unter [`NavigationPreloadManager` > Benutzerdefinierte Antworten](/de/docs/Web/API/NavigationPreloadManager#custom_responses).

## Aktualisierung Ihres Service Workers

Wenn Ihr Service Worker zuvor installiert wurde, aber dann eine neue Version des Workers bei einem Aktualisieren oder Seitenaufruf verfügbar ist, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert. Sie wird erst aktiviert, wenn keine Seiten mehr geladen sind, die immer noch den alten Service Worker verwenden. Sobald solche Seiten nicht mehr geladen sind, aktiviert sich der neue Service Worker.

> [!NOTE]
> Es ist möglich, dies zu umgehen, indem Sie [`Clients.claim()`](/de/docs/Web/API/Clients/claim) verwenden.

Sie möchten Ihren `install`-Ereignis-Listener im neuen Service Worker auf etwas wie das Folgende aktualisieren (beachten Sie die neue Versionsnummer):

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

Während der Service Worker installiert wird, ist die vorherige Version weiterhin für Fetches verantwortlich. Die neue Version wird im Hintergrund installiert. Wir nennen den neuen Cache `v2`, damit der vorherige `v1` Cache nicht gestört wird.

Wenn keine Seiten mehr die vorherige Version verwenden, aktiviert sich der neue Worker und wird für Fetches verantwortlich.

### Löschen alter Caches

Wie wir im letzten Abschnitt gesehen haben, erstellen Sie beim Aktualisieren eines Service Workers auf eine neue Version einen neuen Cache im `install`-Ereignis-Handler. Während es offene Seiten gibt, die von der vorherigen Version des Workers gesteuert werden, müssen Sie beide Caches behalten, da die vorherige Version ihren Cache benötigt. Sie können das `activate`-Ereignis nutzen, um Daten aus den vorherigen Caches zu entfernen.

Versprechen, die in `waitUntil()` übergeben werden, blockieren andere Ereignisse bis zum Abschluss, so dass Sie sicher sein können, dass Ihre Bereinigungsaktion abgeschlossen ist, bevor Sie Ihr erstes `fetch`-Ereignis auf dem neuen Service Worker erhalten.

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
  - Der Button "Diese Seite vergessen", verfügbar in [Firefox's Symbolleisten-Anpassungsoptionen](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars), kann verwendet werden, um Service Workers und ihre Caches zu löschen.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/service-workers/)

## Siehe auch

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
