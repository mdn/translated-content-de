---
title: Verwenden von Service-Arbeitern
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Service Workers API")}}

Dieser Artikel bietet Informationen über den Einstieg in die Verwendung von Service-Arbeitern, einschließlich grundlegender Architektur, der Registrierung eines Service-Arbeiters, dem Installations- und Aktivierungsprozess für einen neuen Service-Arbeiter, der Aktualisierung Ihres Service-Arbeiters, Cache-Kontrolle und benutzerdefinierte Antworten, alles im Kontext einer einfachen App mit Offline-Funktionalität.

## Das Prinzip von Service-Arbeitern

Ein grundlegendes Problem, mit dem Webbenutzer seit Jahren zu kämpfen haben, ist der Verlust der Konnektivität. Die beste Web-App der Welt wird eine schreckliche Benutzererfahrung bieten, wenn Sie sie nicht herunterladen können. Es gab verschiedene Versuche, Technologien zu entwickeln, die dieses Problem lösen, und einige Probleme wurden gelöst. Aber das übergeordnete Problem war, dass es keinen guten allgemeinen Kontrollmechanismus für das Zwischenspeichern von Ressourcen und benutzerdefinierte Netzwerk-Anfragen gab.

Service-Arbeiter lösen diese Probleme. Mit einem Service-Arbeiter können Sie eine App so einrichten, dass zuerst zwischengespeicherte Ressourcen verwendet werden, wodurch eine Standarderfahrung auch im Offline-Modus bereitgestellt wird, bevor weitere Daten aus dem Netzwerk abgerufen werden (oft als "offline first" bekannt). Dies ist bereits mit nativen Apps verfügbar, was einer der Hauptgründe ist, warum native Apps oft Web-Apps vorgezogen werden.

Ein Service-Arbeiter funktioniert wie ein Proxy-Server und ermöglicht es Ihnen, Anfragen und Antworten zu modifizieren und diese durch Elemente aus seinem eigenen Cache zu ersetzen.

## Vorbereitung auf die Arbeit mit Service-Arbeitern

Service-Arbeiter sind in allen modernen Browsern standardmäßig aktiviert. Um Code mit Service-Arbeitern auszuführen, müssen Sie Ihren Code über HTTPS bereitstellen – Service-Arbeiter sind auf die Ausführung über HTTPS aus Sicherheitsgründen beschränkt. Ein Server, der HTTPS unterstützt, ist erforderlich. Um Experimente zu hosten, können Sie einen Dienst wie GitHub, Netlify, Vercel usw. verwenden. Um die lokale Entwicklung zu erleichtern, wird `localhost` von den Browsern ebenfalls als sicherer Ursprung betrachtet.

## Grundlegende Architektur

Bei Service-Arbeitern werden in der Regel die folgenden Schritte für die grundlegende Einrichtung beachtet:

1. Der Code des Service-Arbeiters wird abgerufen und dann mithilfe von [`serviceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert. Wenn dies erfolgreich ist, wird der Service-Arbeiter in einem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgeführt; dies ist im Grunde eine spezielle Art von Worker-Kontext, der nicht auf dem Haupt-Thread der Skriptausführung läuft und keinen DOM-Zugriff hat. Der Service-Arbeiter ist nun bereit, Ereignisse zu verarbeiten.
2. Die Installation findet statt. Ein `install`-Ereignis ist immer das erste, das an einen Service-Arbeiter gesendet wird (dies kann verwendet werden, um den Prozess der Auffüllung einer IndexedDB und des Caching von Website-Ressourcen zu starten). Während dieses Schritts bereitet sich die Anwendung darauf vor, alles für den Offline-Betrieb verfügbar zu machen.
3. Wenn der `install`-Handler abgeschlossen ist, gilt der Service-Arbeiter als installiert. Zu diesem Zeitpunkt kann eine frühere Version des Service-Arbeiters aktiv sein und offene Seiten steuern. Da wir nicht möchten, dass zwei verschiedene Versionen desselben Service-Arbeiters gleichzeitig ausgeführt werden, ist die neue Version noch nicht aktiv.
4. Sobald alle von der alten Version des Service-Arbeiters gesteuerten Seiten geschlossen sind, ist es sicher, die alte Version zu entfernen, und der neu installierte Service-Arbeiter erhält ein `activate`-Ereignis. Der primäre Zweck von `activate` besteht darin, Ressourcen zu bereinigen, die in früheren Versionen des Service-Arbeiters verwendet wurden. Der neue Service-Arbeiter kann [`skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) aufrufen, um sofort aktiviert zu werden, ohne darauf zu warten, dass offene Seiten geschlossen werden. Der neue Service-Arbeiter erhält dann sofort `activate` und übernimmt alle offenen Seiten.
5. Nach der Aktivierung steuert der Service-Arbeiter nun Seiten, aber nur solche, die nach dem erfolgreichen `register()` geöffnet wurden. Mit anderen Worten: Dokumente müssen neu geladen werden, um tatsächlich gesteuert zu werden, da ein Dokument mit oder ohne Service-Arbeiter beginnt und dies für seine gesamte Lebensdauer beibehält. Um dieses Standardverhalten zu überschreiben und offene Seiten zu übernehmen, kann ein Service-Arbeiter [`clients.claim()`](/de/docs/Web/API/Clients/claim) aufrufen.
6. Jedes Mal, wenn eine neue Version eines Service-Arbeiters abgerufen wird, wiederholt sich dieser Zyklus, und die Reste der vorherigen Version werden während der Aktivierung der neuen Version bereinigt.

![Lebenszyklusdiagramm](sw-lifecycle.svg)

Hier ist eine Zusammenfassung der verfügbaren Service-Arbeiter-Ereignisse:

- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
- [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)
- Funktionale Ereignisse
  - [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
  - [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event)
  - [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)

## Demo

Um nur die Grundlagen der Registrierung und Installation eines Service-Arbeiters zu demonstrieren, haben wir eine Demo namens [einfacher Service-Arbeiter](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) erstellt, die eine einfache Star-Wars-Lego-Bildergalerie ist. Sie verwendet eine Promise-gesteuerte Funktion, um Bilddaten aus einem JSON-Objekt zu lesen und die Bilder mithilfe von [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch) zu laden, bevor sie die Bilder in einer Linie auf der Seite anzeigt. Wir haben die Dinge bisher statisch gehalten. Außerdem registriert, installiert und aktiviert es einen Service-Arbeiter.

![Die Worte Star Wars gefolgt von einem Bild einer Lego-Version des Darth Vader Charakters](demo-screenshot.png)

Sie können den [Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) ansehen und den [einfachen Service-Arbeiter live ausführen](https://bncb2v.csb.app/).

### Registrierung Ihres Arbeiters

Der erste Codeblock in der JavaScript-Datei unserer App – `app.js` – sieht wie folgt aus. Dies ist unser Einstiegspunkt zur Verwendung von Service-Arbeitern.

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

1. Der `if`-Block führt einen Feature-Erkennungstest durch, um sicherzustellen, dass Service-Arbeiter unterstützt werden, bevor versucht wird, einen zu registrieren.
2. Als Nächstes verwenden wir die Funktion [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um den Service-Arbeiter für diese Seite zu registrieren. Der Service-Arbeiter-Code befindet sich in einer JavaScript-Datei innerhalb unserer App (beachten Sie, dass dies die URL der Datei relativ zum Ursprung ist, nicht die JS-Datei, die sie referenziert.)
3. Der Parameter `scope` ist optional und kann verwendet werden, um den Teil Ihres Inhalts anzugeben, den der Service-Arbeiter steuern soll. In diesem Fall haben wir `'/'` angegeben, was bedeutet, dass der gesamte Inhalt unter dem Ursprung der App liegt. Wenn Sie ihn weglassen, wird er standardmäßig auf diesen Wert gesetzt, aber wir haben ihn hier zur Veranschaulichung angegeben.

Dies registriert einen Service-Arbeiter, der in einem Worker-Kontext läuft und deshalb keinen DOM-Zugriff hat.

Ein einzelner Service-Arbeiter kann viele Seiten steuern. Jedes Mal, wenn eine Seite innerhalb Ihres Geltungsbereichs geladen wird, wird der Service-Arbeiter für diese Seite installiert und wirkt auf sie. Bedenken Sie daher, dass Sie vorsichtig mit globalen Variablen im Service-Arbeiter-Skript umgehen müssen: Jede Seite erhält keinen eigenen eindeutigen Arbeiter.

> [!NOTE]
> Eine großartige Sache an Service-Arbeitern ist, dass, wenn Sie die Feature-Erkennung wie oben gezeigt verwenden, Browser, die keine Service-Arbeiter unterstützen, Ihre App einfach wie gewohnt online nutzen können.

#### Warum schlägt die Registrierung meines Service-Arbeiters fehl?

Dies könnte aus folgenden Gründen sein:

- Sie führen Ihre Anwendung nicht über HTTPS aus.
- Der Pfad zu Ihrer Service-Arbeiter-Datei ist nicht korrekt geschrieben – er muss relativ zum Ursprung und nicht zum Stammverzeichnis Ihrer App geschrieben werden. In unserem Beispiel befindet sich der Arbeiter unter `https://bncb2v.csb.app/sw.js`, und der Stamm der App ist `https://bncb2v.csb.app/`. Aber der Pfad muss als `/sw.js` geschrieben werden.
- Es ist auch nicht erlaubt, auf einen Service-Arbeiter eines anderen Ursprungs zu verweisen als dem Ihrer App.
- Der Service-Arbeiter fängt nur Anfragen von Clients unter dem Geltungsbereich des Service-Arbeiters ab.
- Der maximale Geltungsbereich für einen Service-Arbeiter ist der Speicherort des Arbeiters (mit anderen Worten, wenn das Skript `sw.js` sich in `/js/sw.js` befindet, kann es standardmäßig nur URLs unter `/js/` steuern). Eine Liste maximaler Geltungsbereiche für diesen Arbeiter kann mit dem Header `Service-Worker-Allowed` angegeben werden.
- In Firefox sind Service-Worker-APIs ausgeblendet und können nicht verwendet werden, wenn der Benutzer im [privaten Browsing-Modus](https://bugzil.la/1320796) ist, wenn der Verlauf deaktiviert ist oder wenn Cookies gelöscht werden, wenn Firefox geschlossen wird.
- In Chrome schlägt die Registrierung fehl, wenn die Option "Alle Cookies blockieren (nicht empfohlen)" aktiviert ist.

### Installieren und aktivieren: Auffüllen Ihres Caches

Nachdem Ihr Service-Arbeiter registriert ist, versucht der Browser, den Service-Arbeiter für Ihre Seite/Ihre Website zu installieren und dann zu aktivieren.

Das `install`-Ereignis wird ausgelöst, wenn eine Installation erfolgreich abgeschlossen ist. Das `install`-Ereignis wird im Allgemeinen verwendet, um die Offline-Caching-Fähigkeiten Ihres Browsers mit den Ressourcen zu füllen, die Sie benötigen, um Ihre App offline auszuführen. Dazu verwenden wir die Speicher-API des Service-Arbeiters – [`cache`](/de/docs/Web/API/Cache) – ein globales Objekt auf dem Service-Arbeiter, das es uns ermöglicht, durch Antworten gelieferte Ressourcen zu speichern und durch ihre Anfragen zu schlüsseln. Diese API funktioniert ähnlich wie der Standard-Cache des Browsers, ist jedoch spezifisch für Ihre Domain. Die Inhalte des Caches werden aufbewahrt, bis Sie sie leeren.

So behandelt unser Service-Arbeiter das `install`-Ereignis:

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

1. Hier fügen wir einen `install`-Ereignislistener für den Service-Arbeiter hinzu (daher `self`) und hängen dann eine Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) an das Ereignis an – dies stellt sicher, dass der Service-Arbeiter nicht installiert, bis der Code innerhalb `waitUntil()` erfolgreich ausgeführt wurde.
2. Innerhalb von `addResourcesToCache()` verwenden wir die Methode [`caches.open()`](/de/docs/Web/API/CacheStorage/open), um einen neuen Cache namens `v1` zu erstellen, welcher Version 1 unseres Ressourcen-Caches der Website sein wird. Dann rufen wir eine Funktion `addAll()` auf dem erstellten Cache auf, die als Parameter ein Array von URLs zu allen Ressourcen, die Sie zwischenspeichern möchten, bekommt. Die URLs sind relativ zur `{{domxref("WorkerGlobalScope.location", "location", "", 1)}}` des Arbeiter.
3. Wenn das Versprechen abgelehnt wird, schlägt die Installation fehl, und der Arbeiter wird nichts tun. Das ist in Ordnung, da Sie Ihren Code reparieren können und dann bei der nächsten Registrierung erneut versuchen können.
4. Nach einer erfolgreichen Installation aktiviert sich der Service-Arbeiter. Dies hat beim ersten Mal, wenn Ihr Service-Arbeiter installiert/aktiviert wird, keine große eigenständige Verwendung, bedeutet jedoch mehr, wenn der Service-Arbeiter aktualisiert wird (siehe den Abschnitt [Aktualisieren Ihres Service-Arbeiters](#aktualisieren_ihres_service-arbeiters) weiter unten.)

> **Hinweis:** [Die Web Storage API (`localStorage`)](/de/docs/Web/API/Web_Storage_API) funktioniert ähnlich wie der Service-Arbeiter-Cache, ist jedoch synchron und daher in Service-Arbeitern nicht erlaubt.

> **Hinweis:** [IndexedDB](/de/docs/Web/API/IndexedDB_API) kann innerhalb eines Service-Arbeiters für die Datenspeicherung verwendet werden, wenn Sie dies benötigen.

### Benutzerdefinierte Antworten auf Anfragen

Jetzt, da Sie Ihre Website-Ressourcen zwischengespeichert haben, müssen Sie den Service-Arbeiter anweisen, mit dem zwischengespeicherten Inhalt etwas zu tun. Dies geschieht mit dem `fetch`-Ereignis.

1. Ein `fetch`-Ereignis feuert jedes Mal, wenn eine Ressource abgerufen wird, die von einem Service-Arbeiter gesteuert wird, was die Dokumente innerhalb des angegebenen Bereichs einschließt, und alle in diesen Dokumenten referenzierten Ressourcen (zum Beispiel, wenn `index.html` eine Cross-Origin-Anfrage stellt, um ein Bild einzubinden, geht das immer noch durch seinen Service-Arbeiter.)

2. Sie können einen `fetch`-Ereignislistener an den Service-Arbeiter anhängen und dann die Methode `respondWith()` auf dem Ereignis aufrufen, um unsere HTTP-Antworten zu kapern und mit Ihrem eigenen Inhalt zu aktualisieren.

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(/* benutzerdefinierter Inhalt kommt hier */);
   });
   ```

3. Wir könnten damit beginnen, mit der Ressource zu antworten, deren URL der der Netzwerk-Anfrage entspricht, in jedem Fall:

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(caches.match(event.request));
   });
   ```

   `caches.match(event.request)` ermöglicht es uns, jede Ressource, die vom Netzwerk angefordert wird, mit der äquivalenten im Cache verfügbaren Ressource abzugleichen, wenn eine passende verfügbar ist. Das Matching erfolgt über URL und verschiedene Header, genau wie bei normalen HTTP-Anfragen.

![Diagramm zum Fetch-Ereignis](sw-fetch.svg)

## Wiederherstellung fehlgeschlagener Anfragen

`caches.match(event.request)` ist großartig, wenn es im Service-Arbeiter-Cache ein Übereinstimmen gibt, aber was ist mit Fällen, in denen dies nicht der Fall ist? Wenn wir keine Art von Fehlerbehandlung bereitstellen, würde unser Versprechen mit `undefined` aufgelöst und wir würden nichts zurückbekommen.

Nachdem die Antwort aus dem Cache getestet wurde, können wir auf eine normale Netzwerk-Anfrage zurückgreifen:

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

Mit einer ausgeklügelteren Strategie könnten wir nicht nur die Ressource vom Netzwerk anfordern, sondern sie auch im Cache speichern, sodass spätere Anfragen für diese Ressource ebenfalls offline abgerufen werden könnten. Dies würde bedeuten, dass wenn zusätzliche Bilder zur Star Wars-Galerie hinzugefügt würden, unsere App automatisch diese abrufen und zwischenspeichern könnte. Der folgende Snippet implementiert eine solche Strategie:

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

Wenn die Anforderungs-URL nicht im Cache verfügbar ist, fordern wir die Ressource mit `await fetch(request)` durch eine Netzwerk-Anfrage an. Danach legen wir eine Kopie der Antwort in den Cache. Die Funktion `putInCache()` verwendet `caches.open('v1')` und `cache.put()`, um die Ressource im Cache zu speichern. Die Originalantwort wird an den Browser zurückgegeben, um sie an die Seite zu geben, die sie aufgerufen hat.

Das Klonen der Antwort ist notwendig, da Anforderungs- und Antwort-Streams nur einmal gelesen werden können. Um die Antwort an den Browser zurückzugeben und sie im Cache zu speichern, müssen wir sie klonen. Das Original wird an den Browser zurückgegeben und die Kopie wird an den Cache gesendet. Jede wird einmal gelesen.

Was vielleicht etwas seltsam aussieht, ist, dass das Versprechen, das von `putInCache()` zurückgegeben wird, nicht abgewartet wird. Aber der Grund ist, dass wir nicht warten wollen, bis die Antwortkopie dem Cache hinzugefügt wurde, bevor wir eine Antwort zurückgeben.

Das einzige Problem, das wir jetzt haben, ist, dass wenn die Anfrage nichts im Cache findet und das Netzwerk nicht verfügbar ist, unsere Anfrage immer noch fehlschlagen wird. Lassen Sie uns einen Standard-Fallback bereitstellen, sodass der Benutzer zumindest etwas bekommt, was auch immer passiert:

```js
const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, fallbackUrl }) => {
  // Versuchen Sie zuerst, die Ressource aus dem Cache zu beziehen
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Versuchen Sie als Nächstes, die Ressource aus dem Netzwerk zu beziehen
  try {
    const responseFromNetwork = await fetch(request);
    // Die Antwort darf nur einmal verwendet werden
    // Wir müssen die Kopie speichern, um eine Kopie in den Cache zu legen
    // und die zweite zurückzuservieren
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // selbst wenn die Fallback-Antwort nicht verfügbar ist,
    // können wir nichts tun, aber wir müssen immer
    // ein Response-Objekt zurückgeben
    return new Response("Netzwerkfehler aufgetreten", {
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

Wir haben uns für dieses Fallback-Bild entschieden, weil die einzigen Aktualisierungen, die wahrscheinlich fehlschlagen werden, neue Bilder sind, da alles andere für die Installation im `install`-Ereignislistener, den wir vorher gesehen haben, abhängig ist.

## Service Worker Navigation Preload

Wenn aktiviert, beginnt die [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager) Funktion mit dem Herunterladen von Ressourcen, sobald die fetch-Anfrage gemacht wird, und zwar parallel zur Aktivierung des Service-Arbeiters. Dies stellt sicher, dass der Download sofort beim Navigieren zu einer Seite beginnt, anstatt darauf zu warten, dass der Service-Arbeiter aktiviert wird. Diese Verzögerung tritt relativ selten auf, ist aber nicht vermeidbar, wenn es passiert, und kann erheblich sein.

Zuerst muss die Funktion während der Aktivierung des Service-Arbeiters mit [`registration.navigationPreload.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable) aktiviert werden:

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Dann verwenden Sie [`event.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse), um im `fetch`-Ereignishandler zu warten, bis die vorab geladene Ressource fertig heruntergeladen ist.

Fortsetzend das Beispiel aus den vorherigen Abschnitten, fügen wir den Code ein, der auf die vorab geladene Ressource wartet, nachdem die Cache-Prüfung erfolgt ist und bevor auf das Netzwerk zurückgegriffen wird, wenn das nicht funktioniert.

Der neue Prozess ist:

1. Cache überprüfen
2. Auf `event.preloadResponse` warten, welches als `preloadResponsePromise` an die Funktion `cacheFirst()` übergeben wird. Das Ergebnis cachen, wenn es zurückgegeben wird.
3. Wenn weder noch definiert ist, gehen wir ins Netzwerk.

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
  // Versuchen Sie zuerst, die Ressource aus dem Cache zu beziehen
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Versuchen Sie als Nächstes, die vorab geladene Antwort zu verwenden (und zu cachen), falls vorhanden
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info("vorab geladene Antwort wird verwendet", preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  // Versuchen Sie als Nächstes, die Ressource aus dem Netzwerk zu beziehen
  try {
    const responseFromNetwork = await fetch(request);
    // Die Antwort darf nur einmal verwendet werden
    // Wir müssen die Kopie speichern, um eine Kopie in den Cache zu legen
    // und die zweite zurückzuservieren
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // selbst wenn die Fallback-Antwort nicht verfügbar ist,
    // können wir nichts tun, aber wir müssen immer
    // ein Response-Objekt zurückgeben
    return new Response("Netzwerkfehler aufgetreten", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

// Navigation Preload aktivieren
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

Beachten Sie, dass in diesem Beispiel die gleichen Daten für die Ressource heruntergeladen und zwischengespeichert werden, egal ob sie "normal" oder vorab geladen heruntergeladen wird. Sie können stattdessen wählen, eine andere Ressource beim Vorab-Laden herunterzuladen und zu zwischenspeichern. Weitere Informationen finden Sie unter [`NavigationPreloadManager` > Custom responses](/de/docs/Web/API/NavigationPreloadManager#custom_responses).

## Aktualisieren Ihres Service-Arbeiters

Wenn Ihr Service-Arbeiter zuvor installiert wurde, aber dann eine neue Version des Arbeiters bei einer Aktualisierung oder beim Laden der Seite zur Verfügung steht, wird die neue Version im Hintergrund installiert, ist jedoch noch nicht aktiv. Sie wird erst aktiviert, wenn keine weiteren Seiten geladen sind, die noch den alten Service-Arbeiter verwenden. Sobald es keine solchen Seiten mehr gibt, wird der neue Service-Arbeiter aktiviert.

> [!NOTE]
> Es ist möglich, dies zu umgehen, indem [`Clients.claim()`](/de/docs/Web/API/Clients/claim) verwendet wird.

Sie möchten Ihren `install`-Ereignislistener im neuen Service-Arbeiter auf etwas in dieser Art aktualisieren (beachten Sie die neue Versionsnummer):

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

      // andere neue Ressourcen für die neue Version einschließen…
    ]),
  );
});
```

Während der Service-Arbeiter installiert wird, ist die vorherige Version immer noch für die Fetches verantwortlich. Die neue Version wird im Hintergrund installiert. Wir nennen den neuen Cache `v2`, damit der vorherige `v1` Cache nicht beeinträchtigt wird.

Wenn keine Seiten mehr die vorherige Version verwenden, wird der neue Arbeiter aktiviert und übernimmt die Verantwortung für Fetches.

### Löschen alter Caches

Wie wir im letzten Abschnitt gesehen haben, erstellen Sie beim Aktualisieren eines Service-Arbeiters auf eine neue Version einen neuen Cache im `install`-Ereignishandler. Während es offene Seiten gibt, die von der vorherigen Version des Arbeiter gesteuert werden, müssen Sie beide Caches behalten, da die vorherige Version ihre Version des Caches benötigt. Sie können das `activate`-Ereignis verwenden, um Daten aus den vorherigen Caches zu entfernen.

Von `waitUntil()` übergebene Versprechen blockieren andere Ereignisse bis zur Fertigstellung, sodass Sie sicher sein können, dass Ihre Bereinigung abgeschlossen ist, bevor Sie Ihr erstes `fetch`-Ereignis im neuen Service-Arbeiter erhalten.

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
  - Die Schaltfläche "Diese Seite vergessen", verfügbar in [den Anpassen-Optionen von Firefox](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars), kann verwendet werden, um Service-Arbeiter und ihre Caches zu löschen.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/service-workers/)

## Siehe auch

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Verwendung von Web-Arbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
