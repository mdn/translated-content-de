---
title: Caching
slug: Web/Progressive_web_apps/Guides/Caching
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{PWASidebar}}

Wenn ein Benutzer eine Website öffnet und mit ihr interagiert, werden alle Ressourcen, die die Website benötigt, einschließlich HTML, JavaScript, CSS, Bilder, Schriftarten sowie alle von der App explizit angeforderten Daten, durch HTTP(S)-Anfragen abgerufen. Eine der grundlegendsten Funktionen einer PWA ist die Möglichkeit, einige Ressourcen der App explizit auf dem Gerät zu speichern, sodass sie abgerufen werden können, ohne eine Anfrage an das Netzwerk zu senden.

Es gibt zwei Hauptvorteile des lokalen Cachens von Ressourcen: **Offline-Betrieb** und **Reaktionsfähigkeit**.

- **Offline-Betrieb**: Caching ermöglicht es einer PWA, in gewissem Umfang zu funktionieren, während das Gerät keine Netzwerkverbindung hat.
- **Reaktionsfähigkeit**: Auch wenn das Gerät online ist, wird eine PWA in der Regel viel reaktionsschneller sein, wenn ihre Benutzeroberfläche aus dem Cache geladen wird, anstatt aus dem Netzwerk.

Der Hauptnachteil ist natürlich die **Aktualität**: Für Ressourcen, die aktuell sein müssen, ist Caching weniger geeignet. Auch für einige Arten von Anfragen, wie [POST](/de/docs/Web/HTTP/Methods/POST)-Anfragen, ist Caching nie geeignet.

Das bedeutet, dass es sehr von der betreffenden Ressource abhängt, ob und wann Sie eine Ressource zwischenspeichern sollten, und eine PWA wird in der Regel unterschiedliche Strategien für verschiedene Ressourcen anwenden. In diesem Leitfaden betrachten wir einige gängige Caching-Strategien für PWAs und sehen, welche Strategien für welche Ressourcen sinnvoll sind.

## Überblick über die Caching-Technologie

Die Haupttechnologien, auf denen eine PWA eine Caching-Strategie aufbauen kann, sind die [Fetch API](/de/docs/Web/API/Fetch_API), die [Service Worker API](/de/docs/Web/API/Service_Worker_API) und die [Cache API](/de/docs/Web/API/Cache).

### Fetch API

Die Fetch API definiert eine globale Funktion [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) zum Abrufen einer Netzwerkressource sowie die Schnittstellen [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response), die Netzwerkanfragen und -antworten darstellen. Die Funktion `fetch()` nimmt einen `Request` oder eine URL als Argument und gibt ein {{jsxref("Promise")}} zurück, das sich zu einer `Response` auflöst.

Die `fetch()`-Funktion ist sowohl für Service Workers als auch für den Haupt-Thread der App verfügbar.

### Service Worker API

Ein Service Worker ist Teil einer PWA: Er ist ein separates Skript, das in seinem eigenen Thread läuft, getrennt vom Haupt-Thread der App.

Sobald der Service Worker aktiv ist, löst der Browser jedes Mal, wenn die App eine vom Service Worker kontrollierte Netzwerkressource anfordert, ein Ereignis namens [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) im globalen Bereich des Service Workers aus. Dieses Ereignis wird nicht nur für explizite `fetch()`-Aufrufe vom Haupt-Thread ausgelöst, sondern auch für implizite Netzwerkrequests zum Laden von Seiten und Subressourcen (wie JavaScript, CSS und Bilder), die vom Browser nach der Seitennavigation vorgenommen werden.

Indem es auf das `fetch`-Ereignis hört, kann der Service Worker die Anfrage abfangen und eine angepasste `Response` zurückgeben. Insbesondere kann er eine lokal zwischengespeicherte Antwort zurückgeben, anstatt immer auf das Netzwerk zuzugreifen, oder eine lokal zwischengespeicherte Antwort zurückgeben, wenn das Gerät offline ist.

### Cache API

Die [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle bietet eine dauerhafte Speicherung für `Request`/`Response`-Paare. Sie bietet Methoden zum Hinzufügen und Löschen von `Request`/`Response`-Paaren und zum Suchen nach einer zwischengespeicherten `Response`, die einer bestimmten `Request` entspricht. Der Cache ist sowohl im Haupt-Thread der App als auch im Service Worker verfügbar: Es ist also möglich, dass ein Thread eine Antwort hinzufügt und der andere sie abruft.

Am häufigsten wird der Service Worker Ressourcen im Cache in seinen `install`- oder `fetch`-Ereignishandler hinzufügen.

## Wann sollten Ressourcen zwischengespeichert werden?

Eine PWA kann Ressourcen jederzeit zwischenspeichern, aber in der Praxis gibt es einige Gelegenheiten, zu denen die meisten PWAs sich entscheiden, sie zu zwischenspeichern:

- **Im `install`-Ereignishandler des Service Workers (Precaching)**: Wenn ein Service Worker installiert wird, löst der Browser ein Ereignis namens [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) im globalen Bereich des Service Workers aus. Zu diesem Zeitpunkt kann der Service Worker Ressourcen _vorcachen_, indem er sie aus dem Netzwerk abruft und im Cache speichert.

  > [!NOTE]
  > Die Installationszeit des Service Workers ist nicht die gleiche wie die Installationszeit der PWA. Ein `install`-Ereignis des Service Workers wird ausgelöst, sobald der Service Worker heruntergeladen wurde und ausgeführt wird, was typischerweise geschieht, sobald der Benutzer Ihre Website besucht.
  >
  > Selbst wenn der Benutzer Ihre Website nie als PWA installiert, wird sein Service Worker installiert und aktiviert.

- **Im `fetch`-Ereignishandler des Service Workers**: Wenn ein `fetch`-Ereignis des Service Workers ausgelöst wird, kann der Service Worker die Anfrage an das Netzwerk weiterleiten und die resultierende Antwort im Cache speichern, entweder wenn der Cache noch keine Antwort enthält oder um die zwischengespeicherte Antwort mit einer aktuelleren zu aktualisieren.

- **Als Antwort auf eine Benutzeranfrage**: Eine PWA könnte den Benutzer explizit dazu einladen, eine Ressource herunterzuladen, um sie später zu verwenden, wenn das Gerät möglicherweise offline ist. Beispielsweise könnte ein Musikplayer den Benutzer einladen, Tracks herunterzuladen, um sie später abzuspielen. In diesem Fall könnte der Haupt-Thread der App die Ressource abrufen und die Antwort dem Cache hinzufügen. Insbesondere wenn die angeforderte Ressource groß ist, könnte die PWA die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API) verwenden, und in diesem Fall wird die Antwort vom Service Worker verarbeitet, der sie dem Cache hinzufügt.

- **Periodisch**: Mit der [Periodic Background Sync API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) könnte ein Service Worker Ressourcen periodisch abrufen und die Antworten zwischenspeichern, um sicherzustellen, dass die PWA auch dann noch einigermaßen aktuelle Antworten bieten kann, wenn das Gerät offline ist.

## Caching-Strategien

Eine Caching-Strategie ist ein Algorithmus dafür, wann eine Ressource zwischengespeichert wird, wann eine zwischengespeicherte Ressource bereitgestellt wird und wann die Ressource aus dem Netzwerk abgerufen wird. In diesem Abschnitt fassen wir einige gängige Strategien zusammen.

Dies ist keine vollständige Liste: sie soll lediglich die Arten von Ansätzen veranschaulichen, die eine PWA verfolgen kann.

Eine Caching-Strategie balanciert Offline-Betrieb, Reaktionsfähigkeit und Aktualität. Verschiedene Ressourcen haben hier unterschiedliche Anforderungen: Zum Beispiel ist die grundlegende Benutzeroberfläche der App wahrscheinlich relativ statisch, während es unter Umständen entscheidend ist, über aktuelle Daten zu verfügen, wenn eine Produktliste angezeigt wird. Das bedeutet, dass eine PWA in der Regel unterschiedliche Strategien für verschiedene Ressourcen verfolgen wird, und eine einzelne PWA könnte alle hier beschriebenen Strategien nutzen.

### Cache zuerst

In dieser Strategie werden wir einige Ressourcen vorcachen und dann eine "Cache zuerst"-Strategie nur für diese Ressourcen implementieren. Das heißt:

- Für die vorgecachten Ressourcen werden wir:
  - Im Cache nach der Ressource suchen und die Ressource zurückgeben, wenn sie gefunden wird.
  - Andernfalls zum Netzwerk gehen. Wenn die Netzwerkanfrage erfolgreich ist, die Ressource für das nächste Mal zwischenspeichern.
- Für alle anderen Ressourcen werden wir immer zum Netzwerk gehen.

Precaching ist eine geeignete Strategie für Ressourcen, die die PWA sicher benötigt, die sich für diese Version der App nicht ändern werden und die so schnell wie möglich abgerufen werden müssen. Dazu gehört beispielsweise die grundlegende Benutzeroberfläche der App. Wenn diese vorgecached ist, kann die Benutzeroberfläche der App beim Start gerendert werden, ohne dass Netzwerkanfragen erforderlich sind.

Zuerst cacht der Service Worker statische Ressourcen in seinem `install`-Ereignishandler:

```js
const cacheName = "MyCache_1";
const precachedResources = ["/", "/app.js", "/style.css"];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(precachedResources);
}

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});
```

Im `install`-Ereignishandler geben wir das Ergebnis der Caching-Operation an die Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) des Ereignisses weiter. Dies bedeutet, dass, wenn das Caching aus irgendeinem Grund fehlschlägt, die Installation des Service Workers fehlschlägt: umgekehrt, wenn die Installation erfolgreich war, kann der Service Worker sicher sein, dass die Ressource dem Cache hinzugefügt wurde.

Der `fetch`-Ereignishandler sieht folgendermaßen aus:

```js
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  if (precachedResources.includes(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
  }
});
```

Wir geben die Ressource zurück, indem wir die Methode [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) des Ereignisses aufrufen. Wenn wir für eine gegebene Anfrage `respondWith()` nicht aufrufen, wird die Anfrage an das Netzwerk gesendet, als hätte der Service Worker sie nicht abgefangen. Wenn eine Anfrage nicht vorgecached ist, geht sie einfach an das Netzwerk.

Wenn wir `networkResponse` dem Cache hinzufügen, müssen wir die Antwort klonen und die Kopie dem Cache hinzufügen, wobei die Originale zurückgegeben werden. Dies liegt daran, dass `Response`-Objekte streambar sind und daher nur einmal gelesen werden können.

Sie könnten sich fragen, warum wir auf das Netzwerk für vorgecachte Ressourcen zurückgreifen. Wenn sie vorgecached sind, können wir doch sicher sein, dass sie im Cache vorhanden sind, oder nicht? Der Grund ist, dass es möglich ist, dass der Cache entweder vom Browser oder vom Benutzer gelöscht wird. Obwohl dies unwahrscheinlich ist, würde die PWA unbrauchbar, es sei denn, sie kann auf das Netzwerk zurückgreifen. Siehe [Löschen von zwischengespeicherten Daten](#löschen_von_zwischengespeicherten_daten).

### Cache zuerst mit Cache-Aktualisierung

Der Nachteil von "Cache zuerst" ist, dass eine einmal im Cache abgelegte Antwort nie aktualisiert wird, bis eine neue Version des Service Workers installiert wird.

Die "Cache zuerst mit Cache-Aktualisierung"-Strategie, auch bekannt als "stale while revalidate", ähnelt "Cache zuerst", mit der Ausnahme, dass wir immer die Anfrage an das Netzwerk senden, selbst nach einem Cache-Hit, und die Antwort verwenden, um den Cache zu aktualisieren. Dies bedeutet, dass wir die Reaktionsfähigkeit von "Cache zuerst" erhalten, aber eine relativ aktuelle Antwort (solange die Anfrage einigermaßen oft gestellt wird).

Dies ist eine gute Wahl, wenn Reaktionsfähigkeit wichtig ist und Aktualität einigermaßen wichtig aber nicht entscheidend ist.

In dieser Version implementieren wir "Cache zuerst mit Cache-Aktualisierung" für alle Ressourcen außer JSON.

```js
function isCacheable(request) {
  const url = new URL(request.url);
  return !url.pathname.endsWith(".json");
}

async function cacheFirstWithRefresh(request) {
  const fetchResponsePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });

  return (await caches.match(request)) || (await fetchResponsePromise);
}

self.addEventListener("fetch", (event) => {
  if (isCacheable(event.request)) {
    event.respondWith(cacheFirstWithRefresh(event.request));
  }
});
```

Beachten Sie, dass wir den Cache asynchron aktualisieren (in einem `then()`-Handler), sodass die App nicht auf den Empfang der Netzwerkantwort warten muss, bevor sie die zwischengespeicherte Antwort verwenden kann.

### Netzwerk zuerst

Die letzte Strategie, die wir betrachten, "Netzwerk zuerst", ist das Gegenteil von Cache zuerst: Wir versuchen, die Ressource aus dem Netzwerk zu holen. Wenn die Netzwerkanfrage erfolgreich ist, geben wir die Antwort zurück und aktualisieren den Cache. Wenn dies fehlschlägt, versuchen wir es mit dem Cache.

Dies ist nützlich für Anfragen, bei denen es darauf ankommt, die aktuellste Antwort zu erhalten, aber wo eine zwischengespeicherte Ressource besser ist als keine. Die Nachrichtenliste einer Messaging-App könnte in diese Kategorie fallen.

Im folgenden Beispiel verwenden wir "Netzwerk zuerst" für Anfragen, um alle Ressourcen abzurufen, die sich unter dem "Posteingang"-Pfad der App befinden.

```js
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.match(/^\/inbox/)) {
    event.respondWith(networkFirst(event.request));
  }
});
```

Es gibt jedoch immer noch Anfragen, bei denen keine Antwort besser ist als eine möglicherweise veraltete Antwort, und für die nur eine "Netzwerk nur"-Strategie geeignet ist. Wenn eine App beispielsweise die Liste der verfügbaren Produkte anzeigt, wird es für Benutzer frustrierend, wenn die Liste veraltet ist.

## Löschen von zwischengespeicherten Daten

Caches haben eine begrenzte Speicherkapazität und der Browser kann die zwischengespeicherten Daten einer App löschen, wenn das Limit überschritten wird. Die genauen Grenzen und das Verhalten sind browserspezifisch: Informationen finden Sie unter [Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria). In der Praxis ist das Löschen von zwischengespeicherten Daten ein sehr seltenes Ereignis. Der Benutzer kann auch jederzeit den Cache einer App löschen.

Eine PWA sollte alle alten Versionen ihres Caches im [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignis des Service Workers bereinigen: Wenn dieses Ereignis ausgelöst wird, kann der Service Worker sicher sein, dass keine früheren Versionen des Service Workers ausgeführt werden, sodass alte zwischengespeicherte Daten nicht mehr benötigt werden.

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- [Strategien für das Service Worker Caching](https://developer.chrome.com/docs/workbox/caching-strategies-overview) auf developer.chrome.com (2021)
- [The Offline Cookbook](https://web.dev/articles/offline-cookbook) auf web.dev (2020)
