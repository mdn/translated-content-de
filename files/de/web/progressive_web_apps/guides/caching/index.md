---
title: Caching
slug: Web/Progressive_web_apps/Guides/Caching
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{PWASidebar}}

Wenn ein Benutzer eine Website öffnet und mit ihr interagiert, werden alle Ressourcen, die die Website benötigt, einschließlich HTML, JavaScript, CSS, Bilder, Schriftarten sowie alle vom App explizit angeforderten Daten, durch HTTP(S)-Anfragen abgerufen. Eine der grundlegendsten Funktionen einer PWA ist die Fähigkeit, einige der Ressourcen der App explizit auf dem Gerät zu cachen, was bedeutet, dass sie abgerufen werden können, ohne eine Anfrage an das Netzwerk zu senden.

Es gibt zwei Hauptvorteile beim lokalen Cachen von Ressourcen: **Offline-Betrieb** und **Reaktionsfähigkeit**.

- **Offline-Betrieb**: Caching ermöglicht es einer PWA, in gewissem Umfang zu funktionieren, während das Gerät keine Netzwerkverbindung hat.
- **Reaktionsfähigkeit**: Auch wenn das Gerät online ist, wird eine PWA in der Regel viel reaktionsschneller sein, wenn ihre Benutzeroberfläche aus dem Cache und nicht aus dem Netzwerk abgerufen wird.

Der Hauptnachteil ist natürlich die **Aktualität**: Caching ist weniger geeignet für Ressourcen, die aktuell sein müssen. Auch für einige Arten von Anfragen, wie [POST](/de/docs/Web/HTTP/Methods/POST) Anfragen, ist Caching nie geeignet.

Dies bedeutet, dass die Entscheidung, ob und wann Sie eine Ressource cachen sollten, stark von der jeweiligen Ressource abhängt, und eine PWA wird typischerweise unterschiedliche Strategien für verschiedene Ressourcen anwenden. In diesem Leitfaden werfen wir einen Blick auf einige gängige Caching-Strategien für PWAs und sehen, welche Strategien für welche Ressourcen sinnvoll sind.

## Überblick über die Caching-Technologie

Die Haupttechnologien, auf denen eine PWA eine Caching-Strategie aufbauen kann, sind die [Fetch API](/de/docs/Web/API/Fetch_API), die [Service Worker API](/de/docs/Web/API/Service_Worker_API) und die [Cache API](/de/docs/Web/API/Cache).

### Fetch API

Die Fetch API definiert eine globale Funktion {{domxref("WorkerGlobalScope/fetch", "fetch()")}} zum Abrufen einer Netzwerkressource sowie die Schnittstellen {{domxref("Request")}} und {{domxref("Response")}}, die Netzwerkrequests und -antworten darstellen. Die `fetch()`-Funktion nimmt einen `Request` oder eine URL als Argument und gibt ein {{jsxref("Promise")}} zurück, das zu einer `Response` aufgelöst wird.

Die `fetch()`-Funktion ist sowohl für Service Worker als auch für den Haupt-App-Thread verfügbar.

### Service Worker API

Ein Service Worker ist ein Teil einer PWA: Er ist ein separates Skript, das in seinem eigenen Thread läuft, getrennt vom Haupt-Thread der App.

Sobald der Service Worker aktiv ist, löst der Browser bei jeder Anfrage der App nach einer vom Service Worker gesteuerten Netzwerkressource ein Ereignis namens {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}} im globalen Scope des Service Workers aus. Dieses Ereignis wird nicht nur für explizite `fetch()`-Aufrufe aus dem Haupt-Thread, sondern auch für implizite Netzwerkrequests zum Laden von Seiten und Subressourcen (wie JavaScript, CSS und Bilder) ausgelöst, die der Browser nach Seiten-Navigation vornimmt.

Indem der Service Worker dem `fetch`-Ereignis lauscht, kann er die Anfrage abfangen und eine angepasste `Response` zurückgeben. Insbesondere kann er eine lokal gecachte Antwort anstelle des Netzwerks zurückgeben oder eine lokal gecachte Antwort zurückgeben, wenn das Gerät offline ist.

### Cache API

Das {{domxref("Cache")}} Interface bietet persistenten Speicher für `Request`/`Response`-Paare. Es stellt Methoden zum Hinzufügen und Löschen von `Request`/`Response`-Paaren sowie zum Nachschlagen einer gecachten `Response`, die einer bestimmten `Request` entspricht, zur Verfügung. Der Cache ist sowohl im Haupt-App-Thread als auch im Service Worker verfügbar: es ist somit möglich, dass ein Thread dort eine Antwort hinzufügt und der andere sie abruft.

Am häufigsten wird der Service Worker Ressourcen im Rahmen seiner `install`- oder `fetch`-Ereignis-Handler zum Cache hinzufügen.

## Wann sollten Sie Ressourcen cachen

Eine PWA kann Ressourcen jederzeit cachen, aber in der Praxis gibt es einige Gelegenheiten, bei denen die meisten PWAs sich dafür entscheiden, diese zu cachen:

- **Im `install`-Ereignis-Handler des Service Workers (Pre-Caching)**: Wenn ein Service Worker installiert wird, löst der Browser ein Ereignis namens {{domxref("ServiceWorkerGlobalScope.install_event", "install")}} im globalen Scope des Service Workers aus. An diesem Punkt kann der Service Worker Ressourcen _vordefinieren_, indem er sie aus dem Netzwerk abruft und im Cache speichert.

  > [!NOTE]
  > Die Installationszeit des Service Workers ist nicht die gleiche wie die Installationszeit der PWA. Das `install`-Ereignis eines Service Workers wird ausgelöst, sobald der Service Worker heruntergeladen und ausgeführt wird, was typischerweise passiert, sobald der Benutzer Ihre Website besucht.
  >
  > Selbst wenn der Benutzer Ihre Website nie als PWA installiert, wird sein Service Worker installiert und aktiviert.

- **Im `fetch`-Ereignis-Handler des Service Workers**: Wenn das `fetch`-Ereignis eines Service Workers ausgelöst wird, kann der Service Worker die Anfrage an das Netzwerk weiterleiten und die resultierende Antwort cachen, entweder wenn der Cache die Antwort noch nicht enthält, oder um die gecachte Antwort mit einer aktuelleren zu aktualisieren.

- **Als Antwort auf eine Benutzeranfrage**: Eine PWA könnte den Benutzer explizit einladen, eine Ressource herunterzuladen, um sie später zu verwenden, wenn das Gerät möglicherweise offline ist. Zum Beispiel könnte ein Musikplayer den Benutzer einladen, Tracks herunterzuladen, um sie später abzuspielen. In diesem Fall könnte der Haupt-App-Thread die Ressource abrufen und die Antwort zum Cache hinzufügen. Insbesondere, wenn die angeforderte Ressource groß ist, könnte die PWA die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API) verwenden und in diesem Fall wird die Antwort vom Service Worker gehandhabt, der sie zum Cache hinzufügt.

- **Periodisch**: Mithilfe der [Periodic Background Sync API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) könnte ein Service Worker regelmäßig Ressourcen abrufen und die Antworten cachen, um sicherzustellen, dass die PWA auch bei offline befindlichem Gerät einigermaßen aktuelle Antworten liefern kann.

## Caching-Strategien

Eine Caching-Strategie ist ein Algorithmus, der festlegt, wann eine Ressource gecached wird, wann eine gecachte Ressource bereitgestellt wird und wann die Ressource vom Netzwerk geholt wird. In diesem Abschnitt fassen wir einige gängige Strategien zusammen.

Dies ist keine erschöpfende Liste: Sie soll lediglich die Arten von Ansätzen veranschaulichen, die eine PWA anwenden kann.

Eine Caching-Strategie balanciert Offline-Betrieb, Reaktionsfähigkeit und Aktualität. Verschiedene Ressourcen haben hier unterschiedliche Anforderungen: Zum Beispiel ist die grundlegende Benutzeroberfläche der App wahrscheinlich relativ statisch, während es entscheidend sein kann, aktuelle Daten anzuzeigen, wenn eine Produktliste dargestellt wird. Das bedeutet, dass eine PWA in der Regel unterschiedliche Strategien für verschiedene Ressourcen anwendet und eine einzelne PWA möglicherweise alle hier beschriebenen Strategien verwendet.

### Cache zuerst

In dieser Strategie werden wir einige Ressourcen vorab cachen und dann eine "Cache zuerst"-Strategie nur für diese Ressourcen implementieren. Das bedeutet:

- Für die vorab gecachten Ressourcen werden wir:
  - Im Cache nach der Ressource suchen und die Ressource zurückgeben, wenn sie gefunden wird.
  - Andernfalls zum Netzwerk gehen. Wenn die Netzwerk-Anfrage erfolgreich ist, wird die Ressource für das nächste Mal gecached.
- Für alle anderen Ressourcen werden wir immer zum Netzwerk gehen.

Pre-Caching ist eine geeignete Strategie für Ressourcen, die die PWA sicher benötigt, die sich für diese Version der App nicht ändern werden und die so schnell wie möglich abgerufen werden müssen. Dazu gehört beispielsweise die grundlegende Benutzeroberfläche der App. Wenn diese vorab gecached ist, kann die Benutzeroberfläche der App beim Start gerendert werden, ohne dass Netzwerk-Anfragen erforderlich sind.

Zuerst precacht der Service Worker statische Ressourcen in seinem `install`-Ereignis-Handler:

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

Im `install`-Ereignis-Handler übergeben wir das Ergebnis des Caching-Vorgangs an die {{domxref("ExtendableEvent.waitUntil", "waitUntil()")}}-Methode des Ereignisses. Das bedeutet, dass bei einem Caching-Fehler aus irgendeinem Grund die Installation des Service Workers fehlschlägt: im Umkehrschluss, wenn die Installation erfolgreich war, kann der Service Worker sicher gehen, dass die Ressource zum Cache hinzugefügt wurde.

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

Wir geben die Ressource zurück, indem wir die {{domxref("FetchEvent.respondWith()", "respondWith()")}}-Methode des Ereignisses aufrufen. Wenn wir `respondWith()` für eine gegebene Anfrage nicht aufrufen, wird die Anfrage an das Netzwerk gesendet, als ob der Service Worker sie nicht abgefangen hätte. Wenn eine Anfrage also nicht vorgelagert wurde, gelangt sie einfach zum Netzwerk.

Wenn wir `networkResponse` zum Cache hinzufügen, müssen wir die Antwort klonen und die Kopie zum Cache hinzufügen und die Originalantwort zurückgeben. Der Grund dafür ist, dass `Response`-Objekte streambar sind und daher nur einmal gelesen werden können.

Sie fragen sich vielleicht, warum wir im Falle vorgelagerter Ressourcen auf das Netzwerk zurückgreifen. Wenn sie vorgelagert sind, können wir dann nicht sicher sein, dass sie im Cache sind? Der Grund dafür ist, dass es möglich ist, dass der Cache entweder durch den Browser oder durch den Benutzer geleert wird. Obwohl dies unwahrscheinlich ist, würde es die PWA unbrauchbar machen, wenn sie nicht auf das Netzwerk zurückgreifen könnte. Siehe [Löschen zwischengespeicherter Daten](#löschen_zwischengespeicherter_daten).

### Cache zuerst mit Cache-Aktualisierung

Der Nachteil von "Cache zuerst" ist, dass eine einmal im Cache befindliche Antwort nie aktualisiert wird, bis eine neue Version des Service Workers installiert wird.

Die Strategie "Cache zuerst mit Cache-Aktualisierung", auch bekannt als "stale while revalidate", ähnelt "Cache zuerst", mit dem Unterschied, dass wir die Anfrage auch nach einem Treffer im Cache immer an das Netzwerk senden und die Antwort zum Cache aktualisieren. Das bedeutet, dass wir die Reaktionsfähigkeit von "Cache zuerst" erhalten, aber eine relativ aktuelle Antwort (solange die Anfrage hin und wieder gestellt wird).

Dies ist eine gute Wahl, wenn Reaktionsfähigkeit wichtig ist und Aktualität einigermaßen wichtig, jedoch nicht entscheidend ist.

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

Beachten Sie, dass wir den Cache asynchron (in einem `then()`-Handler) aktualisieren, sodass die App nicht darauf warten muss, dass die Netzwerkantwort empfangen wird, bevor sie die gecachte Antwort verwenden kann.

### Netzwerk zuerst

Die letzte Strategie, die wir betrachten werden, "Netzwerk zuerst", ist das Gegenteil von "Cache zuerst": wir versuchen, die Ressource aus dem Netzwerk abzurufen. Wenn die Netzwerk-Anfrage erfolgreich ist, geben wir die Antwort zurück und aktualisieren den Cache. Wenn sie fehlschlägt, versuchen wir es mit dem Cache.

Dies ist nützlich für Anfragen, bei denen es wichtig ist, die aktuellste Antwort zu erhalten, bei denen jedoch eine gecachte Ressource besser ist als gar keine. Die Nachrichtenliste einer Messaging-App könnte in diese Kategorie fallen.

Im Beispiel unten verwenden wir "Netzwerk zuerst" für Anfragen zum Abrufen aller Ressourcen, die sich unter dem "inbox"-Pfad der App befinden.

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

Es gibt immer noch Anfragen, bei denen keine Antwort besser ist als eine möglicherweise veraltete Antwort, und für die nur eine "Nur Netzwerk"-Strategie geeignet ist. Wenn eine App beispielsweise die Liste der verfügbaren Produkte anzeigt, wird es für Benutzer frustrierend sein, wenn die Liste veraltet ist.

## Löschen zwischengespeicherter Daten

Caches haben nur einen begrenzten Speicherplatz, und der Browser kann die zwischengespeicherten Daten einer App löschen, wenn das Limit überschritten wird. Die spezifischen Limits und das Verhalten sind browserabhängig: siehe [Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) für Details. In der Praxis ist das Löschen zwischengespeicherter Daten ein sehr seltenes Ereignis. Der Benutzer kann den Cache einer App jederzeit leeren.

Eine PWA sollte alte Versionen ihres Caches im {{domxref("ServiceWorkerGlobalScope.activate_event", "activate")}}-Ereignis des Service Workers bereinigen: wenn dieses Ereignis ausgelöst wird, kann der Service Worker sicherstellen, dass keine vorherigen Versionen des Service Workers aktiv sind, wodurch alte zwischengespeicherte Daten nicht mehr benötigt werden.

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- [Strategien für das Caching von Service Workern](https://developer.chrome.com/docs/workbox/caching-strategies-overview) auf developer.chrome.com (2021)
- [Das Offline-Kochbuch](https://web.dev/articles/offline-cookbook) auf web.dev (2020)
