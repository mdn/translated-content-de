---
title: Caching
slug: Web/Progressive_web_apps/Guides/Caching
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Wenn ein Benutzer eine Website öffnet und mit ihr interagiert, werden alle Ressourcen, die die Website benötigt, einschließlich des HTML, JavaScript, CSS, Bilder, Schriften sowie alle vom App explizit angeforderten Daten durch HTTP(S)-Anfragen abgerufen. Eine der grundlegendsten Funktionen einer PWA ist die Fähigkeit, einige der Ressourcen der App explizit auf dem Gerät zu cachen, was bedeutet, dass sie abgerufen werden können, ohne eine Anfrage an das Netzwerk senden zu müssen.

Es gibt zwei Hauptvorteile des lokalen Cachings von Ressourcen: **Offline-Betrieb** und **Reaktionsfähigkeit**.

- **Offline-Betrieb**: Caching ermöglicht es einer PWA, mehr oder weniger funktionsfähig zu bleiben, während das Gerät keine Netzwerkverbindung hat.
- **Reaktionsfähigkeit**: Selbst wenn das Gerät online ist, wird eine PWA in der Regel viel reaktionsschneller sein, wenn ihre Benutzeroberfläche aus dem Cache abgerufen wird, anstatt aus dem Netzwerk.

Der Hauptnachteil ist natürlich die **Aktualität**: Caching ist weniger geeignet für Ressourcen, die auf dem neuesten Stand sein müssen. Außerdem ist Caching für einige Arten von Anfragen nie angemessen, wie zum Beispiel [POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfragen.

Dies bedeutet, dass es sehr von der betreffenden Ressource abhängt, ob und wann Sie eine Ressource cachen sollten. Eine PWA wird typischerweise unterschiedliche Strategien für unterschiedliche Ressourcen anwenden. In diesem Leitfaden werden wir uns einige allgemeine Caching-Strategien für PWAs anschauen und sehen, welche Strategien für welche Ressourcen sinnvoll sind.

## Überblick über Caching-Technologien

Die Haupttechnologien, auf denen eine PWA eine Caching-Strategie aufbauen kann, sind die [Fetch API](/de/docs/Web/API/Fetch_API), die [Service Worker API](/de/docs/Web/API/Service_Worker_API) und die [Cache API](/de/docs/Web/API/Cache).

### Fetch API

Die Fetch API definiert eine globale Funktion [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) zum Abrufen einer Netzwerkressource und die Schnittstellen [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response), die Netzwerk-Anfragen und -Antworten darstellen. Die Funktion `fetch()` nimmt eine `Request` oder eine URL als Argument und gibt ein {{jsxref("Promise")}} zurück, das auf eine `Response` auflöst.

Die Funktion `fetch()` ist sowohl für Service Worker als auch für den Haupt-App-Thread verfügbar.

### Service Worker API

Ein Service Worker ist ein Teil einer PWA: Es ist ein separates Skript, das in seinem eigenen Thread, getrennt vom Haupt-Thread der App, läuft.

Sobald der Service Worker aktiv ist, löst der Browser jedes Mal, wenn die App eine vom Service Worker kontrollierte Netzwerkressource anfordert, ein Ereignis namens [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) im globalen Scope des Service Workers aus. Dieses Ereignis wird nicht nur für explizite `fetch()`-Aufrufe vom Haupt-Thread ausgelöst, sondern auch für implizite Netzwerk-Anfragen zum Laden von Seiten und Unterressourcen (wie JavaScript, CSS und Bilder), die der Browser nach einer Seiten-Navigation macht.

Indem es auf das `fetch`-Ereignis lauscht, kann der Service Worker die Anfrage abfangen und eine angepasste `Response` zurückgeben. Insbesondere kann er eine lokal gecachte Antwort zurückgeben, anstatt immer zum Netzwerk zu gehen, oder eine lokal gecachte Antwort zurückgeben, wenn das Gerät offline ist.

### Cache API

Die [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle bietet einen persistenten Speicher für `Request`/`Response`-Paare. Sie bietet Methoden zum Hinzufügen und Löschen von `Request`/`Response`-Paaren und zum Nachschlagen einer gecachten `Response`, die einer bestimmten `Request` entspricht. Der Cache ist sowohl im Haupt-App-Thread als auch im Service Worker verfügbar: Es ist also möglich, dass ein Thread dort eine Antwort hinzufügt und der andere sie abruft.

Am häufigsten wird der Service Worker Ressourcen zum Cache in seinen `install`- oder `fetch`-Ereignis-Handlern hinzufügen.

## Wann Ressourcen gecacht werden sollen

Eine PWA kann Ressourcen jederzeit cachen, aber in der Praxis gibt es einige Zeitpunkte, zu denen die meisten PWAs diese cachen werden:

- **Im `install`-Ereignis-Handler des Service Workers (Pre-Caching)**: Wenn ein Service Worker installiert wird, löst der Browser ein Ereignis namens [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) im globalen Scope des Service Workers aus. Zu diesem Zeitpunkt kann der Service Worker Ressourcen _pre-cachen_, sie also aus dem Netzwerk abrufen und im Cache speichern.

  > [!NOTE]
  > Die Installationszeit des Service Workers ist nicht dieselbe wie die Installationszeit der PWA. Das `install`-Ereignis eines Service Workers wird ausgelöst, sobald der Service Worker heruntergeladen wurde und ausgeführt wird, was typischerweise passiert, sobald der Benutzer Ihre Seite besucht.
  >
  > Selbst wenn der Benutzer Ihre Seite nie als PWA installiert, wird der Service Worker installiert und aktiviert.

- **Im `fetch`-Ereignis-Handler des Service Workers**: Wenn das `fetch`-Ereignis eines Service Workers ausgelöst wird, kann der Service Worker die Anfrage an das Netzwerk weiterleiten und die resultierende Antwort cachen, entweder wenn der Cache noch keine Antwort enthält oder um die gecachte Antwort mit einer aktuelleren zu aktualisieren.

- **Als Reaktion auf eine Benutzeranfrage**: Eine PWA könnte den Benutzer explizit einladen, eine Ressource herunterzuladen, um sie später zu verwenden, wenn das Gerät offline sein könnte. Zum Beispiel kann ein Musik-Player den Benutzer einladen, Tracks herunterzuladen, um sie später zu hören. In diesem Fall könnte der Haupt-App-Thread die Ressource abrufen und die Antwort zum Cache hinzufügen. Besonders, wenn die angeforderte Ressource groß ist, könnte die PWA die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API) verwenden; in diesem Fall wird die Antwort vom Service Worker behandelt, der sie dann zum Cache hinzufügt.

- **Periodisch**: Mit der [Periodic Background Sync API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) könnte ein Service Worker Ressourcen periodisch abrufen und die Antworten cachen, um sicherzustellen, dass die PWA auch dann einigermaßen aktuelle Antworten liefern kann, wenn das Gerät offline ist.

## Caching-Strategien

Eine Caching-Strategie ist ein Algorithmus dafür, wann eine Ressource gecacht wird, wann eine gecachte Ressource bereitgestellt wird und wann die Ressource aus dem Netzwerk abgerufen wird. In diesem Abschnitt fassen wir einige gängige Strategien zusammen.

Dies ist keine vollständige Liste: Sie soll lediglich die Art von Ansätzen veranschaulichen, die eine PWA verfolgen kann.

Eine Caching-Strategie balanciert Offline-Betrieb, Reaktionsfähigkeit und Aktualität. Unterschiedliche Ressourcen haben hier unterschiedliche Anforderungen: Beispielsweise ist die grundlegende Benutzeroberfläche der App wahrscheinlich relativ statisch, während es möglicherweise essenziell ist, frische Daten anzuzeigen, wenn eine Produktliste präsentiert wird. Das bedeutet, dass eine PWA typischerweise unterschiedliche Strategien für verschiedene Ressourcen anwenden wird, und eine einzelne PWA könnte alle hier beschriebenen Strategien verwenden.

### Cache first

In dieser Strategie werden wir einige Ressourcen vorcachen und dann eine "Cache first"-Strategie nur für diese Ressourcen implementieren. Das bedeutet:

- Für die vorgecachten Ressourcen werden wir:
  - Im Cache nach der Ressource suchen und die Ressource zurückgeben, wenn sie gefunden wird.
  - Andernfalls auf das Netzwerk zugreifen. Wenn die Netzwerkanfrage erfolgreich ist, die Ressource für das nächste Mal cachen.
- Für alle anderen Ressourcen werden wir immer auf das Netzwerk zugreifen.

Pre-Caching ist eine geeignete Strategie für Ressourcen, die die PWA mit Sicherheit benötigt, die sich für diese Version der App nicht ändern werden und die so schnell wie möglich abgerufen werden müssen. Dazu gehört zum Beispiel die grundlegende Benutzeroberfläche der App. Wenn diese vorgecached ist, kann die Benutzeroberfläche der App beim Start gerendert werden, ohne dass Netzwerkanfragen erforderlich sind.

Zuerst precachet der Service Worker statische Ressourcen in seinem `install`-Ereignis-Handler:

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

Im `install`-Ereignis-Handler geben wir das Ergebnis der Caching-Operation in die Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) des Ereignisses ein. Das bedeutet, dass wenn das Caching aus irgendeinem Grund fehlschlägt, die Installation des Service Workers fehlschlägt: umgekehrt, wenn die Installation erfolgreich ist, kann der Service Worker sicher sein, dass die Ressource zum Cache hinzugefügt wurde.

Der `fetch`-Ereignis-Handler sieht so aus:

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

Wir geben die Ressource zurück, indem wir die Methode [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) des Ereignisses aufrufen. Wenn wir `respondWith()` für eine gegebene Anfrage nicht aufrufen, wird die Anfrage so an das Netzwerk gesendet, als hätte der Service Worker sie nicht abgefangen. Wenn eine Anfrage nicht vorgecached ist, geht sie also einfach ins Netzwerk.

Wenn wir `networkResponse` zum Cache hinzufügen, müssen wir die Antwort klonen und die Kopie zum Cache hinzufügen, während wir das Original zurückgeben. Das liegt daran, dass `Response`-Objekte streambar sind und daher nur einmal gelesen werden können.

Sie könnten sich fragen, warum wir für vorgecachte Ressourcen auf das Netzwerk zurückfallen. Wenn sie vorgecached sind, können wir dann nicht sicher sein, dass sie im Cache sein werden? Der Grund ist, dass es möglich ist, dass der Cache entweder durch den Browser oder durch den Benutzer geleert wird. Obwohl dies unwahrscheinlich ist, wäre die PWA unbrauchbar, es sei denn, sie kann auf das Netzwerk zurückfallen. Siehe [Löschen gecachter Daten](#löschen_gecachter_daten).

### Cache first with cache refresh

Der Nachteil von "Cache first" ist, dass einmal im Cache abgelegte Antworten nie aktualisiert werden, bis eine neue Version des Service Workers installiert wird.

Die Strategie "Cache first with cache refresh", auch bekannt als "stale while revalidate", ist ähnlich wie "Cache first", außer dass wir immer die Anfrage an das Netzwerk senden, auch nach einem Cache-Hit, und die Antwort verwenden, um den Cache zu aktualisieren. Das bedeutet, dass wir die Reaktionsfähigkeit von "Cache first" erhalten, aber eine relativ frische Antwort (solange die Anfrage zumindest einigermaßen regelmäßig gemacht wird).

Dies ist eine gute Wahl, wenn Reaktionsfähigkeit wichtig ist und Aktualität einigermaßen wichtig, aber nicht essenziell ist.

In dieser Version implementieren wir "Cache first with cache refresh" für alle Ressourcen außer JSON.

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

Beachten Sie, dass wir den Cache asynchron aktualisieren (in einem `then()`-Handler), damit die App nicht warten muss, bis die Netzwerkantwort empfangen wird, bevor sie die gecachte Antwort verwenden kann.

### Network first

Die letzte Strategie, die wir uns ansehen werden, "network first", ist das Gegenteil von Cache first: Wir versuchen, die Ressource aus dem Netzwerk abzurufen. Wenn die Netzwerkanfrage erfolgreich ist, geben wir die Antwort zurück und aktualisieren den Cache. Wenn sie fehlschlägt, versuchen wir den Cache.

Dies ist nützlich für Anfragen, bei denen es wichtig ist, die aktuellste Antwort zu erhalten, aber für die eine gecachte Ressource besser ist als nichts. Eine Messaging-App's Liste der neuesten Nachrichten könnte in diese Kategorie fallen.

Im folgenden Beispiel verwenden wir "network first" für Anfragen, um alle Ressourcen abzurufen, die unter dem "inbox"-Pfad der App liegen.

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

Es gibt immer noch Anfragen, bei denen keine Antwort besser ist als eine möglicherweise veraltete Antwort, und für die nur eine "network only"-Strategie angemessen ist. Wenn beispielsweise eine App die Liste der verfügbaren Produkte anzeigt, wird es für die Benutzer frustrierend sein, wenn die Liste nicht aktuell ist.

## Löschen gecachter Daten

Caches haben nur eine begrenzte Menge an Speicherplatz, und der Browser kann die gecachten Daten einer App löschen, wenn das Limit überschritten wird. Die spezifischen Limits und das Verhalten sind abhängig vom Browser: siehe [Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) für Details. In der Praxis ist das Löschen gecachter Daten ein sehr seltenes Ereignis. Der Benutzer kann auch jederzeit den Cache einer App löschen.

Eine PWA sollte alte Versionen ihres Cache im [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignis des Service Workers bereinigen: wenn dieses Ereignis ausgelöst wird, kann der Service Worker sicher sein, dass keine vorherigen Versionen des Service Workers laufen, sodass alte gecachte Daten nicht mehr benötigt werden.

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- [Strategien für das Caching durch Service Workers](https://developer.chrome.com/docs/workbox/caching-strategies-overview) auf developer.chrome.com (2021)
- [Das Offline-Kochbuch](https://web.dev/articles/offline-cookbook) auf web.dev (2020)
