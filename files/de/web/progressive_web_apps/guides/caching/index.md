---
title: Caching
slug: Web/Progressive_web_apps/Guides/Caching
l10n:
  sourceCommit: 505b41bcaaf79e979fddddd8176ab8e32fd4ca26
---

Wenn ein Benutzer eine Website öffnet und mit ihr interagiert, werden alle Ressourcen, die die Website benötigt, einschließlich des HTMLs, JavaScripts, CSS, Bildern, Schriftarten sowie aller vom Webanwendung explizit angeforderten Daten durch HTTP(S)-Anfragen abgerufen. Eines der grundlegendsten Merkmale einer PWA ist die Fähigkeit, einige der Anwendungsressourcen explizit auf dem Gerät zu zwischenspeichern, was bedeutet, dass sie abgerufen werden können, ohne eine Anfrage an das Netzwerk zu senden.

Es gibt zwei Hauptvorteile, Ressourcen lokal zu speichern: **Offline-Betrieb** und **Reaktionsfähigkeit**.

- **Offline-Betrieb**: Durch caching ermöglicht eine PWA, in größerem oder geringerem Umfang zu funktionieren, während das Gerät keine Netzwerkkonnektivität hat.
- **Reaktionsfähigkeit**: Selbst wenn das Gerät online ist, wird eine PWA normalerweise viel reaktionsschneller sein, wenn ihre Benutzeroberfläche aus dem Cache anstatt aus dem Netzwerk abgerufen wird.

Der Hauptnachteil ist natürlich die **Aktualität**: Caching ist weniger geeignet für Ressourcen, die aktuell sein müssen. Auch für bestimmte Anfragetypen, wie [POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfragen, ist das Caching nie geeignet.

Das bedeutet, dass das Caching einer Ressource stark von der jeweiligen Ressource abhängt, und eine PWA normalerweise unterschiedliche Strategien für verschiedene Ressourcen anwendet. In diesem Leitfaden werden wir einige gängige Caching-Strategien für PWAs betrachten und sehen, welche Strategien für welche Ressourcen sinnvoll sind.

## Überblick über die Caching-Technologie

Die Haupttechnologien, auf denen eine PWA eine Caching-Strategie aufbauen kann, sind die [Fetch API](/de/docs/Web/API/Fetch_API), die [Service Worker API](/de/docs/Web/API/Service_Worker_API) und die [Cache API](/de/docs/Web/API/Cache).

### Fetch API

Die Fetch API definiert eine globale Funktion [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) zum Abrufen einer Netzwerkressource, sowie die Schnittstellen [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response), die Netzwerk-Anfragen und Antworten darstellen. Die Funktion `fetch()` nimmt eine `Request` oder URL als Argument und gibt ein {{jsxref("Promise")}} zurück, welches sich in eine `Response` auflöst.

Die Funktion `fetch()` ist sowohl für Service Worker als auch für den Haupt-App-Thread verfügbar.

### Service Worker API

Ein Service Worker ist ein Teil einer PWA: es handelt sich um ein separates Skript, das in einem eigenen Thread läuft, getrennt vom Hauptthread der App.

Sobald der Service Worker aktiv ist, löst der Browser bei jeder Anforderung der App, die vom Service Worker kontrolliert wird, ein Ereignis namens [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) im globalen Bereich des Service Workers aus. Dieses Ereignis wird nicht nur für explizite `fetch()`-Aufrufe aus dem Hauptthread ausgelöst, sondern auch für implizite Netzwerk-Anfragen zum Laden von Seiten und Unterressourcen (wie JavaScript, CSS und Bilder), die der Browser nach Seitennavigation macht.

Indem der Service Worker das `fetch`-Ereignis abhört, kann er die Anfrage abfangen und eine angepasste `Response` zurückgeben. Insbesondere kann er eine lokal zwischengespeicherte Antwort zurückgeben, anstatt immer das Netzwerk zu verwenden, oder eine lokal zwischengespeicherte Antwort zurückgeben, wenn das Gerät offline ist.

### Cache API

Das Interface [`Cache`](/de/docs/Web/API/Cache) bietet persistenten Speicher für `Request`/`Response`-Paare. Es bietet Methoden zum Hinzufügen und Löschen von `Request`/`Response`-Paaren und zur Suche einer zwischengespeicherten `Response`, die einer bestimmten `Request` entspricht. Der Cache ist sowohl im Haupt-App-Thread als auch im Service Worker verfügbar: Es ist also möglich, dass ein Thread dort eine Antwort hinzufügt und der andere sie abruft.

Am häufigsten wird der Service Worker Ressourcen im Cache in seinen `install` oder `fetch`-Ereignishandlern hinzufügen.

## Wann Ressourcen zwischenspeichern

Eine PWA kann jederzeit Ressourcen zwischenspeichern, aber in der Praxis gibt es einige Zeitpunkte, an denen die meisten PWAs sich entscheiden, sie zu zwischenspeichern:

- **Im `install`-Ereignishandler des Service Workers (Precaching)**: Wenn ein Service Worker installiert wird, löst der Browser ein Ereignis namens [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) im globalen Bereich des Service Workers aus. An diesem Punkt kann der Service Worker Ressourcen _vorausspeichern_, sie aus dem Netzwerk abrufen und im Cache speichern.

  > [!NOTE]
  > Die Installationszeit des Service Workers ist nicht dasselbe wie die Installationszeit der PWA. Ein Service Worker wird sofort installiert, sobald der Service Worker heruntergeladen und ausgeführt wird, was normalerweise geschieht, sobald der Benutzer Ihre Website besucht.
  >
  > Auch wenn der Benutzer Ihre Website nie als PWA installiert, wird ihr Service Worker installiert und aktiviert.

- **Im `fetch`-Ereignishandler des Service Workers**: Wenn das `fetch`-Ereignis eines Service Workers ausgelöst wird, kann der Service Worker die Anforderung an das Netzwerk weiterleiten und die resultierende Antwort im Cache speichern, entweder wenn der Cache noch keine Antwort enthält oder um die zwischengespeicherte Antwort durch eine aktuellere zu aktualisieren.

- **Als Reaktion auf eine Benutzeranfrage**: Eine PWA könnte den Benutzer ausdrücklich dazu auffordern, eine Ressource herunterzuladen, um sie später zu nutzen, wenn das Gerät möglicherweise offline ist. Ein Musikplayer könnte z. B. den Benutzer dazu einladen, Tracks herunterzuladen, um sie später abzuspielen. In diesem Fall könnte der Haupt-App-Thread die Ressource abrufen und die Antwort im Cache speichern. Besonders wenn die angeforderte Ressource groß ist, könnte die PWA die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API) verwenden, und in diesem Fall wird die Antwort vom Service Worker verarbeitet, der sie dem Cache hinzufügt.

- **Periodisch**: Mithilfe der [Periodic Background Sync API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) könnte ein Service Worker Ressourcen regelmäßig abrufen und die Antworten zwischenspeichern, um sicherzustellen, dass die PWA einigermaßen frische Antworten bereitstellen kann, auch wenn das Gerät offline ist.

## Caching-Strategien

Eine Caching-Strategie ist ein Algorithmus dafür, wann eine Ressource zwischengespeichert wird, wann eine zwischengespeicherte Ressource bereitgestellt wird und wann die Ressource aus dem Netzwerk abgerufen wird. In diesem Abschnitt fassen wir einige gängige Strategien zusammen.

Dies ist keine vollständige Liste: Sie soll nur die Arten von Ansätzen veranschaulichen, die eine PWA verfolgen kann.

Eine Caching-Strategie balanciert Offline-Betrieb, Reaktionsfähigkeit und Aktualität. Verschiedene Ressourcen haben hier unterschiedliche Anforderungen: Zum Beispiel ist die grundlegende Benutzeroberfläche der App wahrscheinlich relativ statisch, während es wichtig sein kann, aktuelle Daten anzuzeigen, wenn eine Produktliste angezeigt wird. Dies bedeutet, dass eine PWA normalerweise unterschiedliche Strategien für verschiedene Ressourcen übernimmt und eine einzelne PWA möglicherweise alle hier beschriebenen Strategien verwendet.

### Cache zuerst

Bei dieser Strategie werden wir einige Ressourcen vorab zwischenspeichern und dann eine "Cache zuerst"-Strategie nur für diese Ressourcen implementieren. Das heißt:

- Für die vorgelagerten Ressourcen werden wir:
  - Im Cache nach der Ressource suchen und die Ressource zurückgeben, wenn sie gefunden wird.
  - Andernfalls wird das Netzwerk angesprochen. Wenn die Netzwerkanfrage erfolgreich ist, wird die Ressource für das nächste Mal zwischengespeichert.
- Für alle anderen Ressourcen gehen wir immer zum Netzwerk.

Precaching ist eine geeignete Strategie für Ressourcen, die die PWA mit Sicherheit benötigt, die sich für diese Version der App nicht ändern werden und die so schnell wie möglich abgerufen werden müssen. Dazu gehört beispielsweise die grundlegende Benutzeroberfläche der App. Wenn diese vorgelagert ist, kann die UI der App beim Start gerendert werden, ohne dass Netzwerkanfragen erforderlich sind.

Zuerst speichert der Service Worker statische Ressourcen in seinem `install`-Ereignishandler vor:

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

Im `install`-Ereignishandler übergeben wir das Ergebnis des Caching-Vorgangs in die `waitUntil()`-Methode des Ereignisses. Das bedeutet, dass die Installation des Service Workers fehlschlägt, wenn das Caching aus irgendeinem Grund fehlschlägt: Umgekehrt, wenn die Installation erfolgreich war, kann der Service Worker sicher sein, dass die Ressource dem Cache hinzugefügt wurde.

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
  const url = new URL(event.request.url);
  if (precachedResources.includes(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
  }
});
```

Wir rufen die Ressource ab, indem wir die `respondWith()`-Methode des Ereignisses aufrufen. Wenn wir `respondWith()` für eine gegebene Anfrage nicht aufrufen, wird die Anfrage so an das Netzwerk gesendet, als hätte der Service Worker sie nicht abgefangen. Wenn also eine Anfrage nicht vorgelagert wurde, geht sie einfach ins Netzwerk.

Wenn wir `networkResponse` dem Cache hinzufügen, müssen wir die Antwort klonen und die Kopie dem Cache hinzufügen und das Original zurückgeben. Dies liegt daran, dass `Response`-Objekte streambar sind, also nur einmal gelesen werden können.

Sie fragen sich vielleicht, warum wir auf das Netzwerk für vorgelagerte Ressourcen zurückfallen. Wenn sie vorgelagert sind, können wir dann nicht sicher sein, dass sie im Cache sein werden? Der Grund liegt darin, dass es möglich ist, dass der Cache entweder durch den Browser oder durch den Benutzer geleert wird. Obwohl dies unwahrscheinlich ist, würde es die PWA unbrauchbar machen, es sei denn, sie kann auf das Netzwerk zurückfallen. Siehe [Löschen von zwischengespeicherten Daten](#löschen_von_zwischengespeicherten_daten).

### Cache zuerst mit Cache-Aktualisierung

Der Nachteil von "Cache zuerst" ist, dass eine Antwort, sobald sie im Cache ist, niemals aktualisiert wird, bis eine neue Version des Service Workers installiert ist.

Die Strategie "Cache zuerst mit Cache-Aktualisierung", auch bekannt als "stale while revalidate", ist ähnlich wie "Cache zuerst", außer dass wir immer die Anfrage an das Netzwerk senden, selbst nach einem Cache-Treffer, und die Antwort verwenden, um den Cache zu aktualisieren. Dies bedeutet, dass wir die Reaktionsfähigkeit von "Cache zuerst" erhalten, aber eine ziemlich aktuelle Antwort (solange die Anfrage relativ häufig gemacht wird).

Dies ist eine gute Wahl, wenn Reaktionsfähigkeit wichtig ist und Aktualität etwas wichtig, aber nicht entscheidend ist.

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

Beachten Sie, dass wir den Cache asynchron (in einem `then()`-Handler) aktualisieren, sodass die App nicht darauf warten muss, dass die Netzwerkantwort empfangen wird, bevor sie die zwischengespeicherte Antwort verwenden kann.

### Netzwerk zuerst

Die letzte Strategie, die wir betrachten, "Netzwerk zuerst", ist das Umgekehrte von "Cache zuerst": Wir versuchen, die Ressource aus dem Netzwerk abzurufen. Wenn die Netzwerkanfrage erfolgreich ist, geben wir die Antwort zurück und aktualisieren den Cache. Wenn dies fehlschlägt, versuchen wir es mit dem Cache.

Dies ist nützlich für Anfragen, bei denen es wichtig ist, die möglichst aktuelle Antwort zu erhalten, bei denen aber eine zwischengespeicherte Ressource besser als gar nichts ist. Die Nachrichtenliste einer Messaging-App könnte in diese Kategorie fallen.

Im folgenden Beispiel verwenden wir "Netzwerk zuerst" für Anfragen, um alle Ressourcen abzurufen, die sich unter dem "inbox"-Pfad der App befinden.

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

Es gibt immer noch Anfragen, für die keine Antwort besser ist als eine möglicherweise veraltete Antwort und für die nur eine "nur Netzwerk"-Strategie geeignet ist. Beispielsweise wird es für Benutzer frustrierend sein, wenn die Liste der verfügbaren Produkte veraltet ist, die eine App anzeigt.

## Löschen von zwischengespeicherten Daten

Caches haben einen begrenzten Speicherplatz, und der Browser kann die zwischengespeicherten Daten einer App löschen, wenn das Limit überschritten wird. Die spezifischen Grenzen und das Verhalten sind browser-spezifisch: siehe [Speichergrenzen und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) für Details. In der Praxis ist das Löschen von zwischengespeicherten Daten ein sehr seltenes Ereignis. Der Benutzer kann auch jederzeit den Cache einer App leeren.

Eine PWA sollte alle alten Versionen ihres Caches im `activate`-Ereignis des Service Workers bereinigen: Wenn dieses Ereignis ausgelöst wird, kann der Service Worker sicher sein, dass keine vorherigen Versionen des Service Workers mehr laufen, sodass alte zwischengespeicherte Daten nicht mehr benötigt werden.

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Speichergrenzen und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- [Strategien für das Caching von Service Workers](https://developer.chrome.com/docs/workbox/caching-strategies-overview) auf developer.chrome.com (2021)
- [Das Offline-Kochbuch](https://web.dev/articles/offline-cookbook) auf web.dev (2020)
