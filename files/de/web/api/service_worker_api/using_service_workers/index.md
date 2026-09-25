---
title: Service Worker verwenden
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: cce594ebff79d155da35415eeebb144251355cce
---

{{DefaultAPISidebar("Service Workers API")}}

Dieser Artikel erläutert die ersten Schritte mit Service Workern: ihre grundlegende Architektur, die Registrierung eines Service Workers, die Installation und Aktivierung eines neuen Service Workers, dessen Aktualisierung sowie die Steuerung des Caches und benutzerdefinierte Antworten. All dies wird am Beispiel einer App mit Offline-Funktionalität erklärt.

## Warum Service Worker?

Ein grundlegendes Problem für Nutzer des Webs ist seit Jahren der Verlust der Netzwerkverbindung. Selbst die beste Web-App bietet eine schlechte Nutzererfahrung, wenn sie nicht geladen werden kann. Es gab verschiedene Versuche, dieses Problem mit neuen Technologien zu lösen, und einige Schwierigkeiten wurden bereits überwunden. Was jedoch fehlte, war ein umfassender Mechanismus, um das Caching von Ressourcen und benutzerdefinierte Netzwerkanfragen zu steuern.

Service Worker lösen diese Probleme. Mit einem Service Worker können Sie eine App so einrichten, dass sie zuerst zwischengespeicherte Ressourcen verwendet. So steht auch offline eine grundlegende Funktionalität zur Verfügung, bevor weitere Daten aus dem Netzwerk abgerufen werden. Dieser Ansatz wird häufig als „offline first“ bezeichnet. Bei nativen Apps ist das bereits möglich – einer der Hauptgründe, weshalb sie oft Web-Apps vorgezogen werden.

Ein Service Worker funktioniert ähnlich wie ein Proxyserver: Er kann Anfragen und Antworten verändern und durch Einträge aus seinem eigenen Cache ersetzen.

## Eine Entwicklungsumgebung für Service Worker einrichten

Service Worker sind in allen modernen Browsern standardmäßig aktiviert. Um Code mit Service Workern auszuführen, müssen Sie ihn über HTTPS bereitstellen. Aus Sicherheitsgründen dürfen Service Worker nur über HTTPS ausgeführt werden. Sie benötigen daher einen Server, der HTTPS unterstützt. Für Experimente können Sie Dienste wie GitHub, Netlify oder Vercel verwenden. Um die lokale Entwicklung zu erleichtern, betrachten Browser auch `localhost` als sicheren Ursprung.

## Grundlegende Architektur

Bei der erstmaligen Installation und beim Ersetzen eines vorhandenen Service Workers werden im Allgemeinen die folgenden Schritte durchlaufen. Die Diagramme zeigen ein Beispiel, bei dem während der Installation versionierte Caches befüllt und während der Aktivierung alte Caches entfernt werden.

### Erstmalige Installation

In diesem Beispiel sind bereits zwei Seiten geöffnet, bevor der erste Service Worker registriert wird. Eine der Seiten ruft [`serviceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) auf und startet damit den Vorgang.

1. Der Service-Worker-Code wird abgerufen und anschließend registriert. Bei erfolgreicher Registrierung wird der Service Worker in einem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgeführt. Dabei handelt es sich um einen speziellen Worker-Kontext, der unabhängig vom Hauptthread für die Skriptausführung läuft und keinen Zugriff auf das DOM hat. Der Service Worker ist nun bereit, Ereignisse zu verarbeiten.

   ![Registrierung des ersten Service Workers mit seinem geparsten Zustand, seinem Geltungsbereich und zwei geöffneten, nicht kontrollierten Clients.](sw-registration.svg)

2. Die Installation beginnt. Ein `install`-Ereignis ist immer das erste Ereignis, das an einen Service Worker gesendet wird. Es kann verwendet werden, um eine IndexedDB zu befüllen und Website-Ressourcen zwischenzuspeichern. In diesem Schritt bereitet die Anwendung alles für die Offline-Nutzung vor.

   ![Das install-Ereignis befüllt einen Cache, während dieselben zwei Clients geöffnet bleiben.](sw-installation.svg)

3. Sobald die Installation erfolgreich abgeschlossen ist, gilt der Service Worker als installiert.

   ![Der Service Worker ist installiert und der Cache ist befüllt, aber er kontrolliert noch keine Clients.](sw-installed.svg)

4. Da dies der erste Service Worker ist, erhält er ein `activate`-Ereignis, ohne darauf warten zu müssen, dass geöffnete Seiten geschlossen werden. Der `activate`-Handler kann die Einrichtung des Service Workers abschließen.

   ![Das activate-Ereignis schließt die Einrichtung ab, während dieselben zwei bereits vorhandenen Clients geöffnet bleiben.](sw-activation.svg)

5. Nach der Aktivierung kontrolliert der Service Worker Seiten, die innerhalb seines Geltungsbereichs geöffnet werden. Bereits geöffnete Dokumente müssen neu geladen werden, damit er sie tatsächlich kontrolliert: Ein Dokument wird mit oder ohne Service Worker geladen und behält diesen Zustand während seiner gesamten Lebensdauer bei. Um dieses Standardverhalten zu umgehen und geöffnete Seiten zu übernehmen, kann ein Service Worker [`clients.claim()`](/de/docs/Web/API/Clients/claim) aufrufen.

   ![Ein neuer Client wird geöffnet und vom aktivierten Service Worker kontrolliert, während die zwei vorhandenen Clients geöffnet und nicht kontrolliert bleiben.](sw-activated.svg)

### Einen vorhandenen Service Worker ersetzen

Dieses unabhängige Beispiel beginnt mit einem geöffneten Client, der von Version 1 kontrolliert wird. Es veranschaulicht das standardmäßige Warteverhalten beim Ersetzen eines vorhandenen Service Workers.

1. Jedes Mal, wenn eine neue Version eines Service Workers abgerufen wird, beginnt dieser Ablauf erneut. Die vorherige Version bleibt aktiv und kontrolliert weiterhin ihre Clients.

   ![Der geöffnete Client ruft register() auf. Version 2 wird geparst, während Version 1 aktiviert bleibt und den Client kontrolliert.](sw-replacement-fetched.svg)

2. Die neue Version wird installiert. Ihr `install`-Handler kann einen neuen Cache befüllen, während die alte Version weiterhin ihren vorhandenen Cache verwendet.

   ![Version 2 empfängt das install-Ereignis und befüllt einen neuen Cache, während Version 1 weiterhin denselben Client kontrolliert.](sw-replacement-installation.svg)

3. Nach erfolgreichem Abschluss der Installation wartet die neue Version, solange die alte Version noch Clients kontrolliert. Die neue Version ist noch nicht aktiv.

   ![Version 2 ist installiert und wartet mit ihrem einsatzbereiten neuen Cache, während Version 1 noch den geöffneten Client kontrolliert.](sw-replacement-waiting.svg)

4. Sobald alle von der alten Service-Worker-Version kontrollierten Seiten geschlossen sind und die alte Version alle ausstehenden Ereignisse verarbeitet hat, kann sie sicher außer Betrieb genommen werden. Der neu installierte Service Worker erhält dann ein `activate`-Ereignis. `activate` wird vor allem verwendet, um Ressourcen zu bereinigen, die von früheren Versionen des Service Workers verwendet wurden – in diesem Beispiel den alten Cache.

   Der neue Service Worker kann [`skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) aufrufen, um seine Aktivierung anzufordern, ohne darauf zu warten, dass geöffnete Seiten geschlossen werden. Er übernimmt dann die Seiten, die von der alten Version kontrolliert wurden.

   ![Der von Version 1 kontrollierte Client wird geschlossen. Version 1 wird außer Betrieb genommen; Version 2 empfängt activate und löscht den alten Cache.](sw-replacement-activation.svg)

5. Nach der Aktivierung kontrolliert die neue Version alle neu geöffneten Seiten innerhalb des Geltungsbereichs der Registrierung.

   ![Ein neuer Client wird geöffnet und von Version 2 kontrolliert, die ihren neuen Cache verwendet.](sw-replacement-activated.svg)

### Service-Worker-Ereignisse

Die folgenden Service-Worker-Ereignisse stehen zur Verfügung:

- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
- [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)
- Funktionale Ereignisse
  - [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
  - [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event)
  - [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)

## Demo

Um die Grundlagen der Registrierung und Installation eines Service Workers zu demonstrieren, haben wir eine Demo namens [simple service worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) erstellt. Dabei handelt es sich um eine einfache Bildergalerie mit Star-Wars-Lego-Figuren. Eine Promise-basierte Funktion liest Bilddaten aus einem JSON-Objekt und lädt die Bilder mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch), bevor sie untereinander auf der Seite angezeigt werden. Vorerst haben wir die Inhalte statisch gehalten. Die Demo registriert, installiert und aktiviert außerdem einen Service Worker.

![Auf die Worte Star Wars folgt ein Bild einer Lego-Version der Figur Darth Vader](demo-screenshot.png)

Sie können sich den [Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) ansehen oder den [simple service worker direkt ausprobieren](https://bncb2v.csb.app/).

### Ihren Service Worker registrieren

Der erste Codeblock in der JavaScript-Datei unserer App – `app.js` – sieht folgendermaßen aus. Er ist unser Einstiegspunkt für die Verwendung von Service Workern.

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

1. Der `if`-Block prüft, ob Service Worker unterstützt werden, bevor versucht wird, einen zu registrieren.
2. Anschließend registrieren wir mit der Funktion [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) den Service Worker für diese Website. Der Service-Worker-Code befindet sich in einer JavaScript-Datei innerhalb unserer App. Beachten Sie, dass hier die URL dieser Datei relativ zum Ursprung angegeben wird – nicht die URL der JS-Datei, die auf sie verweist.
3. Der Parameter `scope` ist optional. Damit können Sie festlegen, welchen Teil Ihrer Inhalte der Service Worker kontrollieren soll. In diesem Fall haben wir `'/'` angegeben, also alle Inhalte unter dem Ursprung der App. Wenn Sie den Parameter weglassen, wird ohnehin dieser Wert verwendet; wir haben ihn hier nur zur Veranschaulichung angegeben.

Damit wird ein Service Worker registriert, der in einem Worker-Kontext ausgeführt wird und folglich keinen Zugriff auf das DOM hat.

Ein einzelner Service Worker kann viele Seiten kontrollieren. Jedes Mal, wenn eine Seite innerhalb seines Geltungsbereichs geladen wird, wird der Service Worker für diese Seite eingerichtet und verarbeitet ihre Anfragen. Beachten Sie deshalb, dass Sie mit globalen Variablen im Service-Worker-Skript vorsichtig sein müssen: Nicht jede Seite erhält ihren eigenen Worker.

> [!NOTE]
> Ein großer Vorteil von Service Workern ist, dass Browser ohne Service-Worker-Unterstützung Ihre App wie gewohnt online verwenden können, wenn Sie die Unterstützung wie oben gezeigt zuvor prüfen.

#### Warum schlägt die Registrierung meines Service Workers fehl?

Die Registrierung eines Service Workers schlägt aus einem der folgenden Gründe fehl:

- Ihre Anwendung wird nicht in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) ausgeführt (über HTTPS).
- Der Pfad zur Service-Worker-Datei ist falsch.
  Der Pfad muss relativ zum Ursprung angegeben werden, nicht relativ zum Stammverzeichnis der App.
  In unserem Beispiel befindet sich der Worker unter `https://bncb2v.csb.app/sw.js` und das Stammverzeichnis der App unter `https://bncb2v.csb.app/`. Daher muss der Service Worker als `/sw.js` angegeben werden.
- Der Pfad zu Ihrem Service Worker verweist auf einen Service Worker mit einem anderen Ursprung als Ihre App.
- Die Service-Worker-Registrierung enthält eine `scope`-Option, deren Geltungsbereich größer ist, als der Worker-Pfad erlaubt.
  Der standardmäßige Geltungsbereich eines Service Workers ist das Verzeichnis, in dem sich der Worker befindet.
  Wenn das Skript `sw.js` beispielsweise unter `/js/sw.js` liegt, kann es standardmäßig nur URLs unter dem Pfad `/js/` kontrollieren, einschließlich untergeordneter Pfade.
  Mit dem Header {{HTTPHeader("Service-Worker-Allowed")}} kann der Geltungsbereich eines Service Workers erweitert oder eingeschränkt werden.
- Browserspezifische Einstellungen sind aktiviert, beispielsweise das Blockieren aller Cookies, der private Modus oder das automatische Löschen von Cookies beim Schließen des Browsers.
  Weitere Informationen finden Sie unter [Browser-Kompatibilität von `serviceWorker.register()`](/de/docs/Web/API/ServiceWorkerContainer/register#browser_compatibility).

### Installation und Aktivierung: Den Cache befüllen

Nachdem Ihr Service Worker registriert wurde, versucht der Browser, ihn für Ihre Seite beziehungsweise Website zu installieren und anschließend zu aktivieren.

Das `install`-Ereignis ist das erste Ereignis, das bei der Installation oder Aktualisierung eines Service Workers ausgelöst wird.
Es wird genau einmal ausgelöst, unmittelbar nachdem die Registrierung erfolgreich abgeschlossen wurde. Im Allgemeinen wird es verwendet, um die für die Offline-Ausführung Ihrer App benötigten Ressourcen im Browser-Cache zu speichern. Dazu verwenden wir die Speicher-API für Service Worker – [`cache`](/de/docs/Web/API/Cache). Sie ermöglicht es uns, Ressourcen aus Antworten zu speichern und sie anhand der zugehörigen Anfragen wiederzufinden. Diese API funktioniert ähnlich wie der normale Browser-Cache, ist aber spezifisch für Ihre Domain. Die Inhalte des Caches bleiben erhalten, bis Sie sie löschen.

So verarbeitet unser Service Worker das `install`-Ereignis:

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

1. Hier fügen wir dem Service Worker (daher `self`) einen Event-Listener für `install` hinzu und rufen für das Ereignis die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) auf. Dadurch wird sichergestellt, dass die Installation des Service Workers erst abgeschlossen wird, wenn der Code innerhalb von `waitUntil()` erfolgreich ausgeführt wurde.
2. Innerhalb von `addResourcesToCache()` erstellen wir mit der Methode [`caches.open()`](/de/docs/Web/API/CacheStorage/open) einen neuen Cache namens `v1`. Das ist Version 1 unseres Caches für Website-Ressourcen. Anschließend rufen wir für den erstellten Cache die Funktion `addAll()` auf. Sie erhält als Parameter ein Array mit den URLs aller Ressourcen, die zwischengespeichert werden sollen. Die URLs sind relativ zur [Adresse](/de/docs/Web/API/WorkerGlobalScope/location) des Workers.
3. Wird das Promise zurückgewiesen, schlägt die Installation fehl und der Worker führt keine weiteren Aktionen aus. Das ist unproblematisch: Sie können Ihren Code korrigieren und es bei der nächsten Registrierung erneut versuchen.
4. Nach erfolgreicher Installation wird der Service Worker aktiviert. Bei der ersten Installation und Aktivierung hat dieser Schritt noch keine große eigenständige Bedeutung. Wichtiger wird er bei einer Aktualisierung des Service Workers (siehe den späteren Abschnitt [Ihren Service Worker aktualisieren](#ihren_service_worker_aktualisieren)).

> [!NOTE]
> [Die Web Storage API (`localStorage`)](/de/docs/Web/API/Web_Storage_API) funktioniert ähnlich wie der Cache eines Service Workers, ist aber synchron und kann daher nicht in Service Workern verwendet werden.

> [!NOTE]
> Bei Bedarf können Sie [IndexedDB](/de/docs/Web/API/IndexedDB_API) innerhalb eines Service Workers zum Speichern von Daten verwenden.

### Benutzerdefinierte Antworten auf Anfragen

Nachdem Sie die Ressourcen Ihrer Website zwischengespeichert haben, müssen Sie festlegen, wie Service Worker die zwischengespeicherten Inhalte verwenden sollen. Dazu dient das `fetch`-Ereignis.

1. Ein `fetch`-Ereignis wird jedes Mal ausgelöst, wenn eine Ressource abgerufen wird, die von einem Service Worker kontrolliert wird. Dazu gehören Dokumente innerhalb des angegebenen Geltungsbereichs sowie alle Ressourcen, auf die diese Dokumente verweisen. Wenn beispielsweise `index.html` eine ursprungsübergreifende Anfrage stellt, um ein Bild einzubetten, wird auch diese Anfrage vom Service Worker verarbeitet.

2. Sie können dem Service Worker einen Event-Listener für `fetch` hinzufügen und dann für das Ereignis die Methode `respondWith()` aufrufen, um die HTTP-Antwort abzufangen und durch eigene Inhalte zu ersetzen.

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(/* custom content goes here */);
   });
   ```

3. Zunächst könnten wir in jedem Fall mit der Ressource antworten, deren URL mit der URL der Netzwerkanfrage übereinstimmt:

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(caches.match(event.request));
   });
   ```

   Mit `caches.match(event.request)` können wir für jede über das Netzwerk angefragte Ressource eine entsprechende Ressource im Cache finden, sofern eine vorhanden ist. Der Abgleich erfolgt anhand der URL und verschiedener Header, wie bei normalen HTTP-Anfragen.

![Diagramm zum fetch-Ereignis](sw-fetch.svg)

## Fehlgeschlagene Anfragen abfangen

`caches.match(event.request)` funktioniert gut, wenn es im Service-Worker-Cache einen passenden Eintrag gibt. Was passiert aber, wenn keiner vorhanden ist? Ohne Fehlerbehandlung würde unser Promise mit `undefined` erfüllt, und wir erhielten keine Antwort.

Nachdem wir nach einer Antwort im Cache gesucht haben, können wir auf eine normale Netzwerkanfrage zurückgreifen:

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

Wenn die Ressourcen nicht im Cache vorhanden sind, werden sie aus dem Netzwerk angefordert.

Mit einer ausgefeilteren Strategie könnten wir die Ressource nicht nur aus dem Netzwerk abrufen, sondern sie auch im Cache speichern. So ließe sie sich bei späteren Anfragen auch offline abrufen. Würden beispielsweise weitere Bilder zur Star-Wars-Galerie hinzugefügt, könnte unsere App sie automatisch abrufen und zwischenspeichern. Der folgende Codeausschnitt setzt eine solche Strategie um:

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

Wenn die Anfrage-URL nicht im Cache vorhanden ist, rufen wir die Ressource mit `await fetch(request)` aus dem Netzwerk ab. Anschließend speichern wir einen Klon der Antwort im Cache. Die Funktion `putInCache()` verwendet `caches.open('v1')` und `cache.put()`, um die Ressource dem Cache hinzuzufügen. Die ursprüngliche Antwort wird an den Browser zurückgegeben, damit er sie der anfragenden Seite bereitstellen kann.

Die Antwort muss geklont werden, weil Anfrage- und Antwort-Streams jeweils nur einmal gelesen werden können. Damit wir die Antwort an den Browser zurückgeben und zugleich im Cache speichern können, müssen wir sie klonen. Das Original wird an den Browser zurückgegeben und der Klon an den Cache gesendet. Beide werden jeweils einmal gelesen.

Etwas ungewöhnlich wirkt möglicherweise, dass nicht auf das von `putInCache()` zurückgegebene Promise gewartet wird. Der Grund ist, dass wir die Antwort zurückgeben möchten, ohne darauf zu warten, dass ihr Klon dem Cache hinzugefügt wurde. Wir müssen jedoch `event.waitUntil()` mit dem Promise aufrufen, damit der Service Worker nicht beendet wird, bevor der Cache befüllt ist.

Es bleibt ein Problem: Wenn die Anfrage zu keinem Cache-Eintrag passt und das Netzwerk nicht verfügbar ist, schlägt sie weiterhin fehl. Deshalb stellen wir eine Standard-Ersatzantwort bereit, damit Nutzer in jedem Fall zumindest etwas erhalten:

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

Wir haben uns für dieses Ersatzbild entschieden, weil wahrscheinlich nur neue Bilder nicht geladen werden können. Alle anderen Ressourcen werden bereits für die Installation im zuvor gezeigten Event-Listener für `install` benötigt.

## Vorabladen bei Navigationen mit Service Workern

Wenn [navigation preload](/de/docs/Web/API/NavigationPreloadManager) aktiviert ist, beginnt der Download von Ressourcen bereits beim Auslösen der `fetch`-Anfrage, parallel zur Aktivierung des Service Workers. Dadurch beginnt der Download beim Navigieren zu einer Seite sofort, ohne dass auf die Aktivierung des Service Workers gewartet werden muss. Diese Verzögerung tritt zwar relativ selten auf, lässt sich dann aber nicht vermeiden und kann erheblich sein.

Zunächst muss die Funktion während der Aktivierung des Service Workers mit [`registration.navigationPreload.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable) aktiviert werden:

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Verwenden Sie anschließend [`event.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse), um im `fetch`-Event-Handler auf den Abschluss des Downloads der vorgeladenen Ressource zu warten.

Wir führen das Beispiel aus den vorherigen Abschnitten fort und fügen den Code für das Warten auf die vorgeladene Ressource nach der Cache-Prüfung ein, aber vor dem Abruf aus dem Netzwerk, falls die Prüfung erfolglos bleibt.

Der neue Ablauf lautet:

1. Cache prüfen.
2. Auf `event.preloadResponse` warten, das als `preloadResponsePromise` an die Funktion `cacheFirst()` übergeben wird. Falls eine Antwort zurückgegeben wird, diese zwischenspeichern.
3. Wenn keiner der beiden Schritte eine Antwort liefert, die Ressource aus dem Netzwerk abrufen.

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

Beachten Sie, dass in diesem Beispiel dieselben Daten für die Ressource heruntergeladen und zwischengespeichert werden, unabhängig davon, ob der Download „normal“ oder durch Vorabladen erfolgt. Sie können stattdessen beim Vorabladen eine andere Ressource herunterladen und zwischenspeichern. Weitere Informationen finden Sie unter [`NavigationPreloadManager` > Benutzerdefinierte Antworten](/de/docs/Web/API/NavigationPreloadManager#custom_responses).

## Ihren Service Worker aktualisieren

Wenn Ihr Service Worker bereits installiert wurde, beim Aktualisieren oder Laden einer Seite aber eine neue Version verfügbar ist, wird diese im Hintergrund installiert, jedoch noch nicht aktiviert. Die Aktivierung erfolgt erst, wenn keine geladenen Seiten mehr den alten Service Worker verwenden. Sobald das der Fall ist, wird der neue Service Worker aktiviert.

> [!NOTE]
> Mit [`Clients.claim()`](/de/docs/Web/API/Clients/claim) lässt sich dieses Verhalten umgehen.

Sie sollten den Event-Listener für `install` im neuen Service Worker etwa wie folgt aktualisieren (beachten Sie die neue Versionsnummer):

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

Während der neue Service Worker installiert wird, ist die vorherige Version weiterhin für `fetch`-Anfragen zuständig. Die neue Version wird im Hintergrund installiert. Wir nennen den neuen Cache `v2`, damit der bisherige Cache `v1` unverändert bleibt.

Sobald keine Seiten mehr die vorherige Version verwenden, wird der neue Worker aktiviert und übernimmt die Verarbeitung von `fetch`-Anfragen.

### Alte Caches löschen

Wie im vorherigen Abschnitt beschrieben, erstellen Sie beim Aktualisieren eines Service Workers im `install`-Event-Handler der neuen Version einen neuen Cache. Solange noch Seiten geöffnet sind, die von der vorherigen Version kontrolliert werden, müssen beide Caches erhalten bleiben, da die vorherige Version ihren Cache benötigt. Mit dem `activate`-Ereignis können Sie Daten aus den bisherigen Caches entfernen.

An `waitUntil()` übergebene Promises blockieren andere Ereignisse, bis sie abgeschlossen sind. Sie können daher sicher sein, dass die Bereinigung abgeschlossen ist, bevor der neue Service Worker sein erstes `fetch`-Ereignis empfängt.

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
  - Mit der Schaltfläche „Diese Website vergessen“, die über die [Optionen zum Anpassen der Firefox-Symbolleisten](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars) verfügbar ist, können Sie Service Worker und deren Caches löschen.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools/progressive-web-apps/#service-workers)

## Siehe auch

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- HTTP-Header {{HTTPHeader("Service-Worker-Allowed")}}
