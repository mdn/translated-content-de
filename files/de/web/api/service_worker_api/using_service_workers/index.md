---
title: Verwendung von Service Workern
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{DefaultAPISidebar("Service Workers API")}}

Dieser Artikel bietet Informationen zum Einstieg in Service Worker, einschließlich grundlegender Architektur, Registrierung eines Service Workers, Installations- und Aktivierungsprozess für einen neuen Service Worker, Aktualisierung Ihres Service Workers, Cache-Kontrolle und benutzerdefinierter Antworten, alles im Kontext einer App mit Offline-Funktionalität.

## Das Grundprinzip von Service Workern

Ein übergeordnetes Problem, mit dem Webnutzer seit Jahren zu kämpfen haben, ist der Verlust der Konnektivität. Die beste Web-App der Welt bietet eine schlechte Benutzererfahrung, wenn Sie sie nicht herunterladen können. Es gab verschiedene Versuche, Technologien zu entwickeln, um dieses Problem zu lösen, und einige der Probleme wurden gelöst. Das übergeordnete Problem war jedoch, dass es keinen guten Gesamtsteuerungsmechanismus für das Caching von Assets und benutzerdefinierte Netzwerk-Anfragen gab.

Service Worker beheben diese Probleme. Mit einem Service Worker können Sie eine App so einrichten, dass zuerst zwischengespeicherte Assets verwendet werden, wodurch auch offline ein Standarderlebnis geboten wird, bevor dann weitere Daten aus dem Netzwerk geholt werden (bekannt als "offline first"). Dies ist bereits mit nativen Apps möglich, was einer der Hauptgründe ist, warum native Apps oft gegenüber Web-Apps bevorzugt werden.

Ein Service Worker funktioniert wie ein Proxy-Server, der es Ihnen ermöglicht, Anfragen und Antworten zu modifizieren und sie durch Elemente aus seinem eigenen Cache zu ersetzen.

## Einrichtung zum Testen von Service Workern

Service Worker sind standardmäßig in allen modernen Browsern aktiviert. Um Code mit Service Workern auszuführen, müssen Sie Ihren Code über HTTPS bereitstellen – Service Worker dürfen aus Sicherheitsgründen nur über HTTPS ausgeführt werden. Ein Server, der HTTPS unterstützt, ist erforderlich. Um Experimente zu hosten, können Sie einen Dienst wie GitHub, Netlify, Vercel usw. verwenden. Um die lokale Entwicklung zu erleichtern, wird `localhost` von Browsern ebenfalls als sichere Herkunft betrachtet.

## Grundlegende Architektur

Mit Service Workern werden im Allgemeinen die folgenden Schritte für die grundlegende Einrichtung beachtet:

1. Der Code des Service Workers wird abgerufen und dann mit [`serviceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Wenn dies erfolgreich ist, wird der Service Worker in einem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgeführt; dies ist im Grunde eine spezielle Art von Worker-Kontext, der nicht auf dem Hauptskriptausführungs-Thread läuft und keinen DOM-Zugriff hat. Der Service Worker ist nun bereit, Ereignisse zu verarbeiten.
2. Die Installation findet statt. Ein `install`-Ereignis ist immer das erste, das an einen Service Worker gesendet wird (dies kann genutzt werden, um beispielsweise den Prozess des Befüllens einer IndexedDB zu starten und Site-Assets zwischenzuspeichern). Während dieses Schrittes bereitet sich die Anwendung darauf vor, alles für die Offline-Nutzung bereitzustellen.
3. Wenn der `install`-Handler abgeschlossen ist, gilt der Service Worker als installiert. Zu diesem Zeitpunkt kann eine frühere Version des Service Workers aktiv sein und offene Seiten steuern. Da wir nicht wollen, dass zwei verschiedene Versionen desselben Service Workers gleichzeitig laufen, ist die neue Version noch nicht aktiv.
4. Sobald alle von der alten Version des Service Workers kontrollierten Seiten geschlossen sind, kann die alte Version sicher zurückgezogen werden, und der neu installierte Service Worker erhält ein `activate`-Ereignis. Der Hauptzweck des `activate`-Ereignisses besteht darin, Ressourcen zu bereinigen, die in früheren Versionen des Service Workers verwendet wurden. Der neue Service Worker kann [`skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) aufrufen, um sofort aktiviert zu werden, ohne darauf zu warten, dass offene Seiten geschlossen werden. Der neue Service Worker erhält dann sofort das `activate`-Ereignis und übernimmt jede offene Seite.
5. Nach der Aktivierung steuert der Service Worker jetzt Seiten, aber nur jene, die nach dem erfolgreichen `register()` geöffnet wurden. Mit anderen Worten, Dokumente müssen neu geladen werden, um tatsächlich kontrolliert zu werden, da ein Dokument sein Dasein mit oder ohne Service Worker beginnt und dies während seiner Lebensdauer beibehält. Um dieses Standardverhalten zu überschreiben und offene Seiten zu übernehmen, kann ein Service Worker [`clients.claim()`](/de/docs/Web/API/Clients/claim) aufrufen.
6. Jedes Mal, wenn eine neue Version eines Service Workers abgerufen wird, wiederholt sich dieser Zyklus, und die Überbleibsel der vorherigen Version werden während der Aktivierung der neuen Version gereinigt.

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

Um nur die Grundlagen der Registrierung und Installation eines Service Workers zu demonstrieren, haben wir eine Demo namens [Simple Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) erstellt, die eine einfache Star Wars Lego-Bildergalerie ist. Es verwendet eine auf `Promise`-basierten Funktion, um Bilddaten aus einem JSON-Objekt zu lesen und die Bilder mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch) zu laden, bevor sie in einer Linie auf der Seite angezeigt werden. Bis jetzt haben wir die Dinge statisch gehalten. Es registriert, installiert und aktiviert auch einen Service Worker.

![Die Worte Star Wars gefolgt von einem Bild einer Lego-Version der Figur Darth Vader](demo-screenshot.png)

Sie können den [Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) und das [Simple Service Worker live](https://bncb2v.csb.app/) sehen.

### Registrierung Ihres Workers

Der erste Codeblock in der JavaScript-Datei unserer App — `app.js` — sieht wie folgt aus. Dies ist unser Einstiegspunkt zur Verwendung von Service Workern.

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
2. Als nächstes verwenden wir die Funktion [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um den Service Worker für diese Site zu registrieren. Der Code des Service Workers befindet sich in einer JavaScript-Datei innerhalb unserer App (beachten Sie, dass dies die URL der Datei relativ zum Ursprung ist, nicht die JS-Datei, die darauf verweist.)
3. Der Parameter `scope` ist optional und kann verwendet werden, um den Teil Ihres Inhalts anzugeben, den der Service Worker steuern soll. In diesem Fall haben wir `'/'` angegeben, was alle Inhalte unter dem Ursprung der App bedeutet. Wenn Sie ihn weglassen, wird er sowieso auf diesen Wert standardmäßig gesetzt, aber wir haben ihn hier zu Illustrationszwecken angegeben.

Dies registriert einen Service Worker, der in einem Worker-Kontext läuft und daher keinen DOM-Zugriff hat.

Ein einzelner Service Worker kann viele Seiten steuern. Jedes Mal, wenn eine Seite innerhalb Ihres Scopes geladen wird, wird der Service Worker gegen diese Seite installiert und arbeitet darauf. Beachten Sie daher, dass Sie bei globalen Variablen im Service Worker-Skript vorsichtig sein müssen: Jede Seite erhält nicht ihren eigenen einzigartigen Worker.

> [!NOTE]
> Ein großer Vorteil von Service Workern ist, dass, wenn Sie wie oben gezeigt Feature-Detection verwenden, Browser, die Service Worker nicht unterstützen, Ihre App einfach online wie gewohnt verwenden können.

#### Warum schlägt die Registrierung meines Service Workers fehl?

Ein Service Worker schlägt aus einem der folgenden Gründe fehl:

- Ihre Anwendung läuft nicht in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) (über HTTPS).
- Der Pfad zur Service Worker-Datei ist falsch.
  Der Pfad muss relativ zum Ursprung sein und nicht zum Stammverzeichnis der App.
  In unserem Beispiel befindet sich der Worker unter `https://bncb2v.csb.app/sw.js` und das Stammverzeichnis der App ist `https://bncb2v.csb.app/`, daher muss der Service Worker als `/sw.js` angegeben werden.
- Der Pfad zu Ihrem Service Worker zeigt auf einen Service Worker eines anderen Ursprungs als Ihre App.
- Die Registrierung des Service Workers enthält eine `scope`-Option, die breiter ist als vom Worker-Pfad erlaubt.
  Der Standardbereich für einen Service Worker ist das Verzeichnis, in dem sich der Worker befindet.
  Mit anderen Worten, wenn sich das Skript `sw.js` unter `/js/sw.js` befindet, kann es standardmäßig nur URLs steuern, die sich im Pfad `/js/` oder darunter befinden.
  Der Bereich für einen Service Worker kann mit dem {{HTTPHeader("Service-Worker-Allowed")}}-Header erweitert (oder eingeschränkt) werden.
- Browserspezifische Einstellungen sind aktiviert, z.B. das Blockieren aller Cookies, privater Browsing-Modus, automatisches Löschen von Cookies beim Schließen usw.
  Weitere Informationen finden Sie unter [`serviceWorker.register()` Browser-Kompatibilität](/de/docs/Web/API/ServiceWorkerContainer/register#browser_compatibility).

### Installieren und Aktivieren: Auffüllen Ihres Caches

Nachdem Ihr Service Worker registriert wurde, wird der Browser versuchen, den Service Worker für Ihre Seite/Ihr Site zu installieren und dann zu aktivieren.

Das `install`-Ereignis ist das erste Ereignis, das bei der Installation oder Aktualisierung eines Service Workers ausgelöst wird.
Es wird nur einmal ausgegeben, unmittelbar nachdem die Registrierung erfolgreich abgeschlossen wurde, und wird im Allgemeinen verwendet, um die Offline-Caching-Fähigkeiten Ihres Browsers mit den Assets zu füllen, die Sie benötigen, um Ihre App offline auszuführen. Dazu verwenden wir die Speicher-API des Service Workers — [`cache`](/de/docs/Web/API/Cache) — ein globales Objekt im Service Worker, das es uns ermöglicht, mit Antworten gelieferte Assets zu speichern und sie durch ihre Anfragen zu kennzeichnen. Diese API funktioniert ähnlich wie der Standard-Cache des Browsers, ist jedoch spezifisch für Ihre Domain. Der Inhalt des Caches wird behalten, bis Sie ihn löschen.

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

1. Hier fügen wir dem Service Worker (daher `self`) ein `install`-Ereignis-Listener hinzu und hängen dann eine [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode an das Ereignis an — das stellt sicher, dass der Service Worker nicht installiert, bis der Code innerhalb von `waitUntil()` erfolgreich ausgeführt wurde.
2. Innerhalb von `addResourcesToCache()` verwenden wir die Methode [`caches.open()`](/de/docs/Web/API/CacheStorage/open), um einen neuen Cache namens `v1` zu erstellen, der Version 1 unseres Site-Ressourcen-Caches sein wird. Dann rufen wir die Funktion `addAll()` auf dem erstellten Cache auf, die als Parameter ein Array von URLs zu allen Ressourcen übernimmt, die Sie zwischenspeichern möchten. Die URLs sind relativ zum Standort des Workers [location](/de/docs/Web/API/WorkerGlobalScope/location).
3. Wenn das `Promise` abgelehnt wird, schlägt die Installation fehl und der Worker wird nichts tun. Das ist in Ordnung, denn Sie können Ihren Code beheben und dann beim nächsten Auftreten der Registrierung erneut versuchen.
4. Nach einer erfolgreichen Installation aktiviert sich der Service Worker. Dies hat beim ersten Mal, wenn Ihr Service Worker installiert/aktiviert wird, keine große Verwendung, aber es bedeutet mehr, wenn der Service Worker aktualisiert wird (siehe den Abschnitt [Aktualisierung Ihres Service Workers](#aktualisierung_ihres_service_workers) später.)

> [!NOTE]
> [Die Web Storage API (`localStorage`)](/de/docs/Web/API/Web_Storage_API) funktioniert ähnlich wie der Cache des Service Workers, ist aber synchron und daher in Service Workern nicht erlaubt.

> [!NOTE]
> [IndexedDB](/de/docs/Web/API/IndexedDB_API) kann in einem Service Worker für die Datenspeicherung verwendet werden, wenn Sie es benötigen.

### Benutzerdefinierte Antworten auf Anfragen

Jetzt, wo Sie Ihre Site-Assets zwischengespeichert haben, müssen Sie den Service Workern mitteilen, etwas mit dem zwischengespeicherten Inhalt zu tun. Dies geschieht mit dem `fetch`-Ereignis.

1. Ein `fetch`-Ereignis wird immer dann ausgelöst, wenn eine Ressource von einem Service Worker gesteuert wird, die abgerufen wird, was die Dokumente innerhalb des angegebenen Geltungsbereichs einschließt, sowie alle in diesen Dokumenten referenzierten Ressourcen (wenn `index.html` beispielsweise eine Anforderung von einem anderen Ursprung zum Einbetten eines Bildes macht, geht diese trotzdem durch ihren Service Worker).

2. Sie können dem Service Worker einen `fetch`-Ereignis-Listener hinzufügen und dann die `respondWith()`-Methode beim Ereignis aufrufen, um unsere HTTP-Antworten zu kapern und mit Ihrem eigenen Inhalt zu aktualisieren.

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(/* custom content goes here */);
   });
   ```

3. Wir könnten anfangen, mit der Ressource zu antworten, deren URL mit der der Netzwerk-Anfrage übereinstimmt, in jedem Fall:

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(caches.match(event.request));
   });
   ```

   `caches.match(event.request)` ermöglicht es uns, jede Ressource, die vom Netzwerk angefordert wird, mit der entsprechenden Ressource im Cache abzugleichen, wenn dort eine passende verfügbar ist. Der Abgleich erfolgt über die URL und verschiedene Header, genau wie bei normalen HTTP-Anfragen.

![Fetch-Ereignis-Diagramm](sw-fetch.svg)

## Widerherstellung fehlgeschlagener Anfragen

`caches.match(event.request)` ist super, wenn es eine Übereinstimmung im Cache des Service Workers gibt, aber was ist, wenn es keine Übereinstimmung gibt? Wenn wir keine Art von Fehlerbehandlung bereitstellen, würde unser `Promise` mit `undefined` aufgelöst werden und wir würden nichts zurückbekommen.

Nachdem wir die Antwort aus dem Cache überprüft haben, können wir auf eine reguläre Netzwerk-Anfrage zurückgreifen:

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

Mit einer ausgefeilteren Strategie könnten wir nicht nur die Ressource vom Netzwerk anfordern, sondern sie auch in den Cache speichern, sodass spätere Anfragen nach dieser Ressource ebenfalls offline abgerufen werden könnten. Dies würde bedeuten, dass, wenn zusätzliche Bilder zur Star Wars-Galerie hinzugefügt würden, unsere App sie automatisch abrufen und zwischenspeichern könnte. Der folgende Code-Schnipsel implementiert eine solche Strategie:

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

Wenn die Anforderungs-URL im Cache nicht verfügbar ist, fordern wir die Ressource mit `await fetch(request)` von der Netzwerk-Anfrage an. Danach legen wir ein Duplikat der Antwort in den Cache. Die `putInCache()`-Funktion verwendet `caches.open('v1')` und `cache.put()`, um die Ressource dem Cache hinzuzufügen. Die ursprüngliche Antwort wird an den Browser zurückgegeben, um der aufrufenden Seite zugeführt zu werden.

Das Klonen der Antwort ist notwendig, da Anforderungs- und Antwortstreams nur einmal gelesen werden können. Um die Antwort an den Browser zurückzugeben und sie in den Cache zu legen, müssen wir sie klonen. So wird das Original an den Browser zurückgegeben und das Duplikat an den Cache gesendet. Jedes wird einmal gelesen.

Was ein bisschen seltsam aussehen könnte, ist, dass auf das von `putInCache()` zurückgegebene `Promise` nicht gewartet wird. Der Grund ist, dass wir nicht warten möchten, bis die Antwortkopie dem Cache hinzugefügt wurde, bevor eine Antwort zurückgegeben wird. Allerdings müssen wir `event.waitUntil()` auf dem `Promise`-Aufruf betätigen, um sicherzustellen, dass der Service Worker nicht beendet wird, bevor der Cache gefüllt ist.

Das einzige Problem, das wir jetzt noch haben, ist, dass, wenn die Anforderung nichts im Cache trifft und das Netzwerk nicht verfügbar ist, unsere Anforderung immer noch fehlschlagen wird. Lassen Sie uns einen Standard-Fallback bereitstellen, damit der Benutzer zumindest etwas erhält:

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

Wir haben uns für dieses Fallback-Bild entschieden, weil die einzigen Updates, die wahrscheinlich fehlschlagen, neue Bilder sind, da alles andere für die Installation im `install`-Ereignis-Listener, den wir zuvor gesehen haben, benötigt wird.

## Service Worker Navigation Preload

Falls aktiviert, startet das [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager) Feature den Download der Ressourcen, sobald die `fetch`-Anfrage erfolgt, und parallel zur Aktivierung des Service Workers. Dies stellt sicher, dass der Download sofort bei der Navigation zu einer Seite beginnt, anstatt darauf zu warten, dass der Service Worker aktiviert wird. Diese Verzögerung tritt relativ selten auf, ist jedoch unvermeidlich, wenn sie auftritt, und kann signifikant sein.

Zuerst muss das Feature während der Aktivierung des Service Workers mit [`registration.navigationPreload.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable) aktiviert werden:

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Verwenden Sie dann [`event.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse), um im Fetch-Ereignis-Handler darauf zu warten, dass die vorab geladene Ressource das Herunterladen abgeschlossen hat.

So fügt sich der Code in das Beispiel aus den vorherigen Abschnitten ein, indem das Warten auf die vorab geladene Ressource nach der Cache-Prüfung und bevor vom Netzwerk geholt wird, wenn dies nicht erfolgreich ist, eingefügt wird.

Der neue Prozess ist:

1. Cache überprüfen
2. Auf `event.preloadResponse` warten, das als `preloadResponsePromise` an die `cacheFirst()`-Funktion übergeben wird. Das Ergebnis wird bei Rückgabe zwischengespeichert.
3. Wenn weder diese noch jene definiert sind, gehen wir ins Netzwerk.

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

Beachten Sie, dass wir in diesem Beispiel die gleichen Daten für die Ressource herunterladen und zwischenspeichern, egal ob sie "normal" heruntergeladen oder vorab geladen werden. Sie können stattdessen wählen, eine andere Ressource beim Preload herunterzuladen und zwischenzuspeichern. Weitere Informationen finden Sie unter [`NavigationPreloadManager` > Benutzerdefinierte Antworten](/de/docs/Web/API/NavigationPreloadManager#custom_responses).

## Aktualisierung Ihres Service Workers

Wenn Ihr Service Worker zuvor installiert wurde, aber dann eine neue Version des Workers bei Aktualisierung oder Seitenladevorgang verfügbar ist, wird die neue Version im Hintergrund installiert, jedoch noch nicht aktiviert. Sie wird erst aktiviert, wenn keine Seiten mehr geladen sind, die noch den alten Service Worker verwenden. Sobald keine derartigen Seiten mehr geladen sind, aktiviert sich der neue Service Worker.

> [!NOTE]
> Es ist möglich, dies zu umgehen, indem Sie [`Clients.claim()`](/de/docs/Web/API/Clients/claim) verwenden.

Sie sollten Ihren `install`-Ereignis-Listener im neuen Service Worker auf etwas wie das Folgende aktualisieren (beachten Sie die neue Versionsnummer):

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

Während der Service Worker installiert wird, ist die vorherige Version weiterhin für Abrufe verantwortlich. Die neue Version wird im Hintergrund installiert. Wir nennen den neuen Cache `v2`, damit der vorherige `v1`-Cache nicht gestört wird.

Wenn keine Seiten mehr die vorherige Version verwenden, aktiviert sich der neue Worker und wird für Abrufe verantwortlich.

### Alte Caches löschen

Wie wir im letzten Abschnitt gesehen haben, erstellen Sie bei der Aktualisierung eines Service Workers auf eine neue Version in seinem `install`-Ereignis-Handler einen neuen Cache. Solange noch Seiten offen sind, die von der vorherigen Version des Workers gesteuert werden, müssen Sie beide Caches beibehalten, da die vorherige Version ihre Version des Caches benötigt. Sie können das `activate`-Ereignis verwenden, um Daten aus den vorherigen Caches zu entfernen.

`Promises`, die an `waitUntil()` übergeben werden, blockieren andere Ereignisse bis zur Fertigstellung, sodass Sie sicher sein können, dass Ihre Aufräumaktion abgeschlossen ist, bevor Sie Ihr erstes `fetch`-Ereignis im neuen Service Worker erhalten.

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
  - Die Schaltfläche "Vergessen Sie diese Seite", verfügbar in [Firefox's Toolbar-Anpassungsoptionen](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars), kann verwendet werden, um Service Worker und ihre Caches zu löschen.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools/service-workers/)

## Siehe auch

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwenden von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP-Header
